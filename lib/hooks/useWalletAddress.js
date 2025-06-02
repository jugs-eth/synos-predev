import { useActiveAccount } from 'thirdweb/react';
import { useEffect, useState } from 'react';

/**
 * Custom hook to get the wallet address from various sources
 * @returns {Object} The wallet address and related information
 */
export function useWalletAddress() {
  const activeAccount = useActiveAccount();
  const [address, setAddress] = useState(null);
  const [source, setSource] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    async function getAddress() {
      // First try to get the address from the active account
      if (activeAccount?.address) {
        if (mounted) {
          setAddress(activeAccount.address);
          setSource('activeAccount');
          setIsConnected(true);
        }
        return;
      }

      // Then try to get the address from window.ethereum
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts && accounts.length > 0 && mounted) {
            setAddress(accounts[0]);
            setSource('ethereum');
            setIsConnected(true);
            return;
          }
        } catch (error) {
          console.error('Error getting address from window.ethereum:', error);
        }
      }

      // If we still don't have an address, set it to null
      if (mounted) {
        setAddress(null);
        setSource(null);
        setIsConnected(false);
      }
    }

    getAddress();
    
    // Set up event listeners for wallet connection changes
    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0 && mounted) {
        setAddress(accounts[0]);
        setSource('ethereum');
        setIsConnected(true);
      } else if (mounted) {
        // Only set to null if we don't have an activeAccount
        if (!activeAccount?.address) {
          setAddress(null);
          setSource(null);
          setIsConnected(false);
        }
      }
    };
    
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
    
    return () => {
      mounted = false;
      if (typeof window !== 'undefined' && window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [activeAccount]);

  return {
    address,
    source,
    isConnected,
    activeAccount
  };
} 