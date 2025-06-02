import { findUserByAddress } from '@/lib/mongodb';

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
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing wallet address',
        message: 'Wallet address is required to check login status'
      });
    }

    try {
      // Find user by wallet address
      const user = await findUserByAddress(address);
      
      // Return whether the user exists
      return res.status(200).json({ 
        success: true,
        isLoggedIn: !!user,
        address: address.toLowerCase()
      });
    } catch (dbError) {
      console.error('Database error during login check:', dbError);
      return res.status(500).json({ 
        success: false,
        error: 'Database error', 
        message: dbError.message || 'Failed to check user login status'
      });
    }
  } catch (error) {
    console.error('API error during login check:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      message: error.message || 'An unexpected error occurred during login check'
    });
  }
} 