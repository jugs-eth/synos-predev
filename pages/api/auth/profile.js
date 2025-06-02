import { updateUserProfile, findUserByAddress } from '@/lib/mongodb';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Only POST requests are supported.' 
    });
  }

  try {
    const { address, profile } = req.body;

    // Check if address is provided
    if (!address) {
      return res.status(400).json({ 
        success: false, 
        message: 'Wallet address is required' 
      });
    }

    // Check if profile data is provided
    if (!profile || typeof profile !== 'object') {
      return res.status(400).json({ 
        success: false, 
        message: 'Profile data is required and must be an object' 
      });
    }

    // Check if user exists
    const user = await findUserByAddress(address);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Update user profile
    const result = await updateUserProfile(address, profile);

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: result
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ 
      success: false, 
      message: `Failed to update profile: ${error.message}` 
    });
  }
} 