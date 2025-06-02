// This file provides a safe way to access MongoDB from both server and client components

// API endpoints for MongoDB operations
const API_ENDPOINTS = {
  CHECK_USER: '/api/auth/check',
  LOGIN_USER: '/api/auth/login',
  GET_USER: '/api/auth/user',
  UPDATE_PROFILE: '/api/auth/profile',
};

// Client-side MongoDB adapter
export const clientMongoDB = {
  // Check if a user exists by wallet address
  async findUserByAddress(address) {
    try {
      if (!address) {
        console.error('No wallet address provided to findUserByAddress');
        return null;
      }
      
      // Ensure the address is a string and lowercase
      const walletAddress = String(address).toLowerCase();
      
      const response = await fetch(`${API_ENDPOINTS.GET_USER}?address=${walletAddress}`);
      
      if (response.status === 404) {
        return null;
      }
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error finding user:', errorData);
        throw new Error(errorData.message || 'Failed to fetch user data');
      }
      
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  },
  
  // Check if a user is logged in
  async isUserLoggedIn(address) {
    try {
      if (!address) {
        console.error('No wallet address provided to isUserLoggedIn');
        return false;
      }
      
      // Ensure the address is a string and lowercase
      const walletAddress = String(address).toLowerCase();
      
      const response = await fetch(API_ENDPOINTS.CHECK_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: walletAddress }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error checking login status:', errorData);
        throw new Error(errorData.message || 'Failed to check login status');
      }
      
      const data = await response.json();
      return data.isLoggedIn;
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  },
  
  // Create or update a user
  async createOrUpdateUser(address, signature) {
    try {
      // Try to get the address from window.ethereum if available and address is not provided
      if (!address && typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts && accounts.length > 0) {
            address = accounts[0];
          }
        } catch (ethError) {
          console.error('Error getting address from window.ethereum:', ethError);
        }
      }
      
      if (!address) {
        throw new Error('Wallet address is required');
      }
      
      if (!signature) {
        throw new Error('Signature is required');
      }
      
      // Ensure the address is a string and lowercase
      const walletAddress = String(address).toLowerCase();
      
      const response = await fetch(API_ENDPOINTS.LOGIN_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: walletAddress, signature }),
      });
      
      // Get the response data regardless of status
      const responseData = await response.json().catch(e => {
        console.error('Failed to parse response JSON:', e);
        return { error: 'Invalid response format' };
      });
      
      if (!response.ok) {
        const errorMessage = responseData.message || responseData.error || 'Failed to login';
        console.error('Login API error:', errorMessage);
        throw new Error(errorMessage);
      }
      
      return responseData;
    } catch (error) {
      console.error('Error during login process:', error);
      throw error;
    }
  },
  
  // Update user profile
  async updateUserProfile(address, profileData) {
    try {
      if (!address) {
        throw new Error('Wallet address is required');
      }
      
      if (!profileData || typeof profileData !== 'object') {
        throw new Error('Profile data is required and must be an object');
      }
      
      // Ensure the address is a string and lowercase
      const walletAddress = String(address).toLowerCase();
      
      const response = await fetch(API_ENDPOINTS.UPDATE_PROFILE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          address: walletAddress, 
          profile: profileData 
        }),
      });
      
      // Get the response data regardless of status
      const responseData = await response.json().catch(e => {
        console.error('Failed to parse response JSON:', e);
        return { error: 'Invalid response format' };
      });
      
      if (!response.ok) {
        const errorMessage = responseData.message || responseData.error || 'Failed to update profile';
        console.error('Profile update API error:', errorMessage);
        throw new Error(errorMessage);
      }
      
      return responseData;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },
}; 