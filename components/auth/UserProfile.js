import { useState, useEffect } from 'react';
import { useActiveAccount, useDisconnect, useActiveWallet } from 'thirdweb/react';
import { truncateAddress, formatDate } from '@/lib/utils';
import { clientMongoDB } from '@/lib/mongodb-adapter';

export default function UserProfile() {
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (!activeAccount?.address) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const user = await clientMongoDB.findUserByAddress(activeAccount.address);
        setUserData(user);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUserData();
  }, [activeAccount?.address]);

  const handleDisconnect = async () => {
    try {
      if (!activeWallet) {
        throw new Error("No active wallet found");
      }
      
      // Disconnect using the proper method
      disconnect(activeWallet);
      
      // Clear any stored wallet data
      localStorage.removeItem('walletAddress');
      
      // Redirect to home page
      window.location.href = '/';
      
      console.log("User logged out and wallet disconnected successfully");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (!activeAccount) {
    return null;
  }

  // If we're not loading and there's no data or error, the user might not be authenticated yet
  if (!loading && !userData && !error) {
    return (
      <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <p>Please sign the authentication message to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      
      {loading && <p>Loading user data...</p>}
      
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded mb-4">
          {error}
        </div>
      )}
      
      {userData && (
        <div className="space-y-2">
          <div>
            <span className="font-medium">Wallet Address:</span>{' '}
            <span className="font-mono">{truncateAddress(userData.walletAddress)}</span>
          </div>
          
          <div>
            <span className="font-medium">Account Created:</span>{' '}
            <span>{formatDate(userData.createdAt)}</span>
          </div>
          
          <div>
            <span className="font-medium">Last Login:</span>{' '}
            <span>{formatDate(userData.lastLogin)}</span>
          </div>

          <div className="mt-4">
            <button
              onClick={handleDisconnect}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 