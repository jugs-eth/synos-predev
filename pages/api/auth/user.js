import { findUserByAddress } from '@/lib/mongodb';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed',
      message: 'Only GET requests are allowed for this endpoint'
    });
  }

  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing wallet address',
        message: 'Wallet address is required to retrieve user data'
      });
    }

    try {
      // Find user by wallet address
      const user = await findUserByAddress(address);

      if (!user) {
        return res.status(404).json({ 
          success: false,
          error: 'User not found',
          message: `No user found with wallet address: ${address}`
        });
      }
      
      // Return user data (excluding sensitive information)
      return res.status(200).json({
        success: true,
        walletAddress: user.walletAddress,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      });
    } catch (dbError) {
      console.error('Database error during user retrieval:', dbError);
      return res.status(500).json({ 
        success: false,
        error: 'Database error', 
        message: dbError.message || 'Failed to retrieve user data'
      });
    }
  } catch (error) {
    console.error('API error during user retrieval:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      message: error.message || 'An unexpected error occurred during user retrieval'
    });
  }
} 