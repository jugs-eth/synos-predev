import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Connect from '@/components/auth/connect';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Home, Settings, Info, User, LogOut, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { useWalletAddress } from '@/lib/hooks/useWalletAddress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useActiveWallet, useDisconnect } from 'thirdweb/react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const walletInfo = useWalletAddress();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const { theme, setTheme } = useTheme();
  
  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Force remount of Connect component when wallet is disconnected
  const [connectKey, setConnectKey] = useState(0);
  
  useEffect(() => {
    // When wallet connection status changes, remount the Connect component
    setConnectKey(prev => prev + 1);
  }, [activeWallet]);
  
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
  
  // Handle logout
  const handleLogout = async () => {
    try {
      if (!activeWallet) {
        throw new Error("No active wallet found");
      }
      
      // Disconnect using the proper method - pass the wallet directly
      disconnect(activeWallet);
      
      // Force a remount of the Connect component immediately
      setConnectKey(prev => prev + 1);
      
      // Close the sheet after logout
      setIsOpen(false);
      
      // Clear any stored wallet data
      localStorage.removeItem('walletAddress');
      
      // Redirect to home page
      window.location.href = '/';
      
      console.log("User logged out and wallet disconnected successfully");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  if (!isMounted) {
    return null; // Return nothing during SSR
  }
  
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu with Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0 w-80">
              {/* Header with logo */}
              <div className="px-6 py-4 border-b">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl">Auth Base</span>
                </Link>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 overflow-auto py-6">
                <div className="px-3">
                  <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">Navigation</h3>
                  <nav className="flex flex-col space-y-1">
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-accent group">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <Home className="h-4 w-4" />
                          </div>
                          <span className="font-medium">Home</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <Link href="/profile" className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-accent group">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <User className="h-4 w-4" />
                          </div>
                          <span className="font-medium">Profile</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <Link href="/dashboard" className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-accent group">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <Settings className="h-4 w-4" />
                          </div>
                          <span className="font-medium">Dashboard</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <Link href="/about" className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-accent group">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <Info className="h-4 w-4" />
                          </div>
                          <span className="font-medium">About</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </div>
              
              {/* User profile section */}
              {activeWallet && (
                <div className="border-t">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://effigy.im/a/${activeWallet.address}.svg`} alt="User" />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(activeWallet.address)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Wallet</div>
                        <div className="text-sm text-muted-foreground">
                          {truncateAddress(activeWallet.address)}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full flex items-center gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Disconnect</span>
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Auth Base</span>
          </Link>
        </div>
        
        {/* Right side items */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-accent"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <div key={connectKey}>
            <Connect />
          </div>
        </div>
      </div>
    </header>
  );
} 