import { client } from "@/client";
import { ConnectButton } from "thirdweb/react";
import { clientMongoDB } from "@/lib/mongodb-adapter";
import { useState, useEffect } from "react";
import { useActiveAccount, useWalletBalance, useDisconnect, useActiveWallet } from "thirdweb/react";
import { useWalletAddress } from "@/lib/hooks/useWalletAddress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Wallet, ExternalLink, Copy, Check, Shield, History } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ethers } from "ethers";

function Connect() {
  const [authError, setAuthError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [manualBalance, setManualBalance] = useState(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);
  const [userData, setUserData] = useState(null);
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const walletInfo = useWalletAddress();
  const { data: balance } = useWalletBalance({
    client,
    address: walletInfo.address,
  });
  const { disconnect } = useDisconnect();
  
  // Fetch user data when wallet address is available
  useEffect(() => {
    async function fetchUserData() {
      if (walletInfo.isConnected && walletInfo.address) {
        try {
          const data = await clientMongoDB.findUserByAddress(walletInfo.address);
          if (data) {
            setUserData(data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }
    
    fetchUserData();
  }, [walletInfo.isConnected, walletInfo.address]);
  
  // Fetch balance manually if thirdweb's hook doesn't work
  useEffect(() => {
    const fetchBalance = async () => {
      if (walletInfo.address && (!balance || balance.displayValue === "0")) {
        setIsLoadingBalance(true);
        try {
          // Use ethers.js to get the balance with explicit network configuration
          const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;
          const provider = new ethers.providers.JsonRpcProvider(
            `https://mainnet.infura.io/v3/${infuraId}`,
            {
              name: "mainnet",
              chainId: 1
            }
          );
          
          const balanceWei = await provider.getBalance(walletInfo.address);
          const balanceEth = ethers.utils.formatEther(balanceWei);
          
          setManualBalance({
            displayValue: parseFloat(balanceEth).toFixed(4),
            symbol: "ETH"
          });
        } catch (error) {
          console.error("Error fetching balance:", error);
          // Fallback to a simpler approach if the first one fails
          try {
            const fallbackProvider = new ethers.providers.JsonRpcProvider(
              "https://cloudflare-eth.com", // Cloudflare's public Ethereum gateway
              "mainnet"
            );
            
            const balanceWei = await fallbackProvider.getBalance(walletInfo.address);
            const balanceEth = ethers.utils.formatEther(balanceWei);
            
            setManualBalance({
              displayValue: parseFloat(balanceEth).toFixed(4),
              symbol: "ETH"
            });
          } catch (fallbackError) {
            console.error("Fallback balance fetch failed:", fallbackError);
          }
        } finally {
          setIsLoadingBalance(false);
        }
      }
    };
    
    fetchBalance();
  }, [walletInfo.address, balance]);
  
  // Handle logout
  const handleLogout = async () => {
    try {
      setAuthError(null);
      
      if (!activeWallet) {
        throw new Error("No active wallet found");
      }
      
      // Disconnect using the proper method
      await disconnect(activeWallet);
      
      // Clear any stored wallet data
      localStorage.removeItem('walletAddress');
      
      // Redirect to home page
      window.location.href = '/';
      
      console.log("User logged out and wallet disconnected successfully");
    } catch (error) {
      console.error("Error during logout:", error);
      setAuthError("Failed to disconnect wallet: " + error.message);
    }
  };
  
  const handleAuthError = (error) => {
    console.error("Authentication error:", error);
    setAuthError(error.message);
    // Clear error after 5 seconds
    setTimeout(() => setAuthError(null), 5000);
  };
  
  // Helper function to truncate address
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // Generate initials for avatar fallback
  const getInitials = (address) => {
    if (!address) return "??";
    return address.substring(2, 4).toUpperCase();
  };
  
  // Copy address to clipboard
  const copyAddress = () => {
    if (walletInfo.address) {
      navigator.clipboard.writeText(walletInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  // Get the display balance
  const getDisplayBalance = () => {
    if (balance && balance.displayValue !== "0") {
      return `${parseFloat(balance.displayValue).toFixed(4)} ${balance.symbol}`;
    } else if (manualBalance) {
      return `${manualBalance.displayValue} ${manualBalance.symbol}`;
    } else if (isLoadingBalance) {
      return "Loading...";
    } else {
      return "0.0000 ETH";
    }
  };
  
  // Get display name
  const getDisplayName = () => {
    if (userData?.profile?.displayName) {
      return userData.profile.displayName;
    }
    return truncateAddress(walletInfo.address);
  };
  
  // Render connected user UI
  const renderConnectedUser = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 px-2 rounded-full hover:bg-accent">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://effigy.im/a/${walletInfo.address}.svg`} alt="User" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(walletInfo.address)}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline-block text-sm font-medium">
              {userData?.profile?.displayName || truncateAddress(walletInfo.address)}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72">
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://effigy.im/a/${walletInfo.address}.svg`} alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(walletInfo.address)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">
                    {userData?.profile?.displayName || "My Wallet"}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full"
                    onClick={copyAddress}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {truncateAddress(walletInfo.address)}
                </div>
              </div>
            </div>
            
            <div className="bg-accent/50 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Balance</div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 px-2 text-xs"
                  asChild
                >
                  <a 
                    href={`https://etherscan.io/address/${walletInfo.address}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span>View on Etherscan</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              <div className="text-xl font-semibold mt-1 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                {getDisplayBalance()}
              </div>
            </div>
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" asChild>
              <a href="/profile">
                <User className="h-4 w-4" />
                <span>Profile Settings</span>
              </a>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" asChild>
              <a 
                href={`https://etherscan.io/address/${walletInfo.address}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <History className="h-4 w-4" />
                <span>Transaction History</span>
              </a>
            </DropdownMenuItem>
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <DropdownMenuItem 
              className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>Disconnect Wallet</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  return (
    <div>
      {authError && (
        <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded text-sm">
          Authentication error: {authError}
        </div>
      )}
      
      {walletInfo.isConnected ? renderConnectedUser() : (
        <ConnectButton 
          client={client} 
          connectModal={{
            showThirdwebBranding: false
          }}
          connectButton={{
            className: "rounded-md",
            label: "Connect Wallet"
          }}
          auth={{
            isLoggedIn: async (address) => {
              try {
                const walletAddress = address || walletInfo.address;
                return await clientMongoDB.isUserLoggedIn(walletAddress);
              } catch (error) {
                console.error("Error checking user login status:", error);
                return false;
              }
            },
            doLogin: async (params) => {
              try {
                setAuthError(null);
                
                if (!params) {
                  throw new Error('No parameters provided for authentication');
                }
                
                const { address, signature } = params;
                
                // Try to use wallet info address if params address is missing
                let walletAddress = address;
                
                if (!walletAddress && walletInfo.address) {
                  walletAddress = walletInfo.address;
                }
                
                if (!walletAddress && activeAccount?.address) {
                  walletAddress = activeAccount.address;
                }
                
                if (!walletAddress) {
                  throw new Error('No wallet address provided for authentication');
                }
                
                if (!signature) {
                  throw new Error('No signature provided for authentication');
                }
                
                // Ensure the address is a string
                walletAddress = String(walletAddress).toLowerCase();
                
                const result = await clientMongoDB.createOrUpdateUser(walletAddress, signature);
                return result;
              } catch (error) {
                console.error("Error during login process:", error);
                handleAuthError(error);
                throw new Error(`Authentication failed: ${error.message}`);
              }
            },
            getLoginPayload: async ({ address }) => {
              // Use wallet info address as fallback
              const walletAddress = address || walletInfo.address || activeAccount?.address;
              
              // Generate a message for the user to sign
              return {
                message: `Welcome to our app! Please sign this message to authenticate.\n\nWallet address: ${walletAddress || address}\nTimestamp: ${new Date().toISOString()}`,
              };
            },
            doLogout: async () => {
              console.log("User logged out");
              setAuthError(null);
            },
          }}
          onConnect={({ address, wallet }) => {
            console.log("Wallet connected:", address, wallet);
            setAuthError(null);
          }}
          onDisconnect={() => {
            console.log("Wallet disconnected");
            setAuthError(null);
          }}
        />
      )}
    </div>
  );
}

export default Connect;