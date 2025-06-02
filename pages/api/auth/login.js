import { createOrUpdateUser } from '@/lib/mongodb';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed',
      message: 'Only POST requests are allowed for this endpoint'
    });
  }

  try {
    const { address, signature } = req.body;

    if (!address) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing wallet address',
        message: 'Wallet address is required for authentication'
      });
    }

    if (!signature) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing signature',
        message: 'Signature is required for authentication'
      });
    }

    try {
      // Create or update user in the database
      const result = await createOrUpdateUser(address, signature);
      
      // Return success with the result
      return res.status(200).json({ 
        success: true,
        message: 'User authenticated successfully',
        userId: address.toLowerCase(),
        result
      });
    } catch (dbError) {
      console.error('Database error during authentication:', dbError);
      return res.status(500).json({ 
        success: false,
        error: 'Database error', 
        message: dbError.message || 'Failed to create or update user in database'
      });
    }
  } catch (error) {
    console.error('API error during authentication:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      message: error.message || 'An unexpected error occurred during authentication'
    });
  }
} 