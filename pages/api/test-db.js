import clientPromise from '@/lib/mongodb';
import dns from 'dns';
import { promisify } from 'util';

const resolveSrv = promisify(dns.resolveSrv);

export default async function handler(req, res) {
  try {
    // Log environment variables (with sensitive info masked)
    const mongoUri = process.env.MONGODB_URI || 'Not set';
    const maskedUri = mongoUri.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    
    // Test DNS resolution for MongoDB Atlas
    let dnsResult = null;
    try {
      // Extract hostname from MongoDB URI
      const hostname = mongoUri.match(/@([^\/]+)\//)?.[1];
      if (hostname) {
        const srvHostname = `_mongodb._tcp.${hostname}`;
        console.log('Testing DNS resolution for:', srvHostname);
        dnsResult = await resolveSrv(srvHostname).catch(e => ({ error: e.message }));
      }
    } catch (dnsError) {
      console.error('DNS resolution error:', dnsError);
      dnsResult = { error: dnsError.message };
    }
    
    // Test MongoDB connection
    const client = await clientPromise;
    const db = client.db('auth-db');
    
    // Test basic operations
    const results = {
      collections: null,
      userCount: null,
      serverInfo: null,
      databases: null
    };
    
    // Test collection access
    try {
      const collections = await db.listCollections().toArray();
      results.collections = collections.map(c => c.name);
    } catch (collError) {
      results.collectionsError = collError.message;
    }
    
    // Test users collection
    try {
      const usersCollection = db.collection('users');
      results.userCount = await usersCollection.countDocuments();
    } catch (userError) {
      results.userCountError = userError.message;
    }
    
    // Try server info (might fail due to permissions)
    try {
      const serverInfo = await db.command({ serverStatus: 1 });
      results.serverInfo = {
        version: serverInfo.version,
        uptime: serverInfo.uptime,
        connections: serverInfo.connections.current
      };
    } catch (serverError) {
      results.serverInfoError = serverError.message;
    }
    
    // Try to list databases (might fail due to permissions)
    try {
      const dbList = await client.db().admin().listDatabases();
      results.databases = dbList.databases.map(db => ({
        name: db.name,
        sizeOnDisk: db.sizeOnDisk
      }));
    } catch (dbListError) {
      results.databasesError = dbListError.message;
    }
    
    // Return success with connection info
    return res.status(200).json({
      success: true,
      message: 'MongoDB connection successful',
      dnsTest: dnsResult,
      results,
      environment: {
        nodeEnv: process.env.NODE_ENV,
        mongoUriProvided: !!process.env.MONGODB_URI,
      }
    });
  } catch (error) {
    console.error('MongoDB connection test failed:', error);
    
    // Attempt to diagnose the issue
    let diagnosis = 'Unknown error';
    if (error.message.includes('ENOTFOUND')) {
      diagnosis = 'DNS resolution failed. The hostname in your MongoDB URI might be incorrect.';
    } else if (error.message.includes('Authentication failed')) {
      diagnosis = 'Authentication failed. Check your username and password in the MongoDB URI.';
    } else if (error.message.includes('timed out')) {
      diagnosis = 'Connection timed out. Check your network or firewall settings.';
    } else if (error.message.includes('not allowed to do action')) {
      diagnosis = 'Permission error: Your MongoDB user doesn\'t have sufficient privileges. This is normal for non-admin users and won\'t affect basic operations.';
    }
    
    return res.status(500).json({
      success: false,
      error: 'MongoDB connection failed',
      message: error.message,
      diagnosis,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
} 