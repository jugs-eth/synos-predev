import { MongoClient } from 'mongodb';

// Check if we're on the server side
const isServer = typeof window === 'undefined';

// Connection URI - store this in your .env.local file
const uri = process.env.MONGODB_URI;

// Extract database name from URI or use default
const dbName = uri?.split('/').pop()?.split('?')[0] || 'auth-db';

const options = {
  // Add MongoDB connection options here if needed
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  serverSelectionTimeoutMS: 60000, // 60 seconds
  maxIdleTimeMS: 120000, // 120 seconds
  retryWrites: true,
  retryReads: true,
};

let client;
let clientPromise;

// Only execute MongoDB connection code on the server
if (isServer) {
  if (!uri) {
    console.error('MongoDB URI is not defined in environment variables');
    throw new Error('Please add your MongoDB URI to .env.local');
  }

  try {
    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect()
          .catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            throw err;
          });
      }
      clientPromise = global._mongoClientPromise;
    } else {
      // In production mode, it's best to not use a global variable.
      client = new MongoClient(uri, options);
      clientPromise = client.connect()
        .catch(err => {
          console.error('Failed to connect to MongoDB:', err);
          throw err;
        });
    }
    
    // Test the connection
    clientPromise.then(client => {
      console.log('MongoDB connection established successfully');
      return client.db(dbName).listCollections().toArray();
    }).catch(err => {
      console.error('MongoDB connection test failed:', err);
    });
  } catch (err) {
    console.error('Error setting up MongoDB connection:', err);
    throw err;
  }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// User-related functions
export async function findUserByAddress(address) {
  if (!isServer) {
    console.error('MongoDB functions can only be called on the server side');
    return null;
  }
  
  if (!address) {
    console.error('No wallet address provided to findUserByAddress');
    return null;
  }
  
  // Ensure the address is a string and lowercase
  const walletAddress = String(address).toLowerCase();
  
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    
    const user = await db.collection('users').findOne({ 
      walletAddress: walletAddress 
    });
    
    return user;
  } catch (error) {
    console.error(`Error finding user with address ${walletAddress}:`, error);
    throw error;
  }
}

export async function createOrUpdateUser(address, signature) {
  if (!isServer) {
    console.error('MongoDB functions can only be called on the server side');
    return null;
  }
  
  if (!address) {
    throw new Error('Wallet address is required');
  }
  
  if (!signature) {
    throw new Error('Signature is required');
  }
  
  // Ensure the address is a string and lowercase
  const walletAddress = String(address).toLowerCase();
  
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    
    // Create a new user or update an existing one
    const result = await db.collection('users').updateOne(
      { walletAddress: walletAddress },
      { 
        $set: { 
          walletAddress: walletAddress,
          lastSignature: signature,
          lastLogin: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
          profile: {
            displayName: '',
            bio: '',
            email: '',
            website: '',
            twitter: '',
            github: '',
          }
        }
      },
      { upsert: true }
    );
    
    return {
      success: true,
      walletAddress: walletAddress,
      modified: result.modifiedCount > 0,
      created: result.upsertedCount > 0,
    };
  } catch (error) {
    console.error(`Error creating/updating user with address ${walletAddress}:`, error);
    throw error;
  }
}

export async function updateUserProfile(address, profileData) {
  if (!isServer) {
    console.error('MongoDB functions can only be called on the server side');
    return null;
  }
  
  if (!address) {
    throw new Error('Wallet address is required');
  }
  
  if (!profileData || typeof profileData !== 'object') {
    throw new Error('Profile data is required and must be an object');
  }
  
  // Ensure the address is a string and lowercase
  const walletAddress = String(address).toLowerCase();
  
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    
    // Sanitize and validate profile data
    const sanitizedProfile = {};
    
    // Only allow specific fields to be updated
    const allowedFields = ['displayName', 'bio', 'email', 'website', 'twitter', 'github'];
    
    for (const field of allowedFields) {
      if (profileData[field] !== undefined) {
        // Basic sanitization - trim strings and limit length
        if (typeof profileData[field] === 'string') {
          sanitizedProfile[field] = profileData[field].trim().slice(0, 500); // Limit to 500 chars
        } else {
          sanitizedProfile[field] = profileData[field];
        }
      }
    }
    
    // Update the user's profile
    const result = await db.collection('users').updateOne(
      { walletAddress: walletAddress },
      { 
        $set: { 
          'profile': sanitizedProfile,
          'updatedAt': new Date(),
        }
      }
    );
    
    if (result.matchedCount === 0) {
      throw new Error('User not found');
    }
    
    return {
      success: true,
      walletAddress: walletAddress,
      modified: result.modifiedCount > 0,
    };
  } catch (error) {
    console.error(`Error updating profile for user with address ${walletAddress}:`, error);
    throw error;
  }
} 