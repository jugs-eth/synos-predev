import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWalletAddress } from '@/lib/hooks/useWalletAddress';
import { clientMongoDB } from '@/lib/mongodb-adapter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Check, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ProfilePage() {
  const router = useRouter();
  const walletInfo = useWalletAddress();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Profile form state
  const [profile, setProfile] = useState({
    displayName: '',
    bio: '',
    email: '',
    website: '',
    twitter: '',
    github: '',
  });
  
  // Fetch user data when wallet address is available
  useEffect(() => {
    async function fetchUserData() {
      if (!walletInfo.isConnected || !walletInfo.address) {
        setLoading(false);
        return;
      }
      
      try {
        const userData = await clientMongoDB.findUserByAddress(walletInfo.address);
        if (userData) {
          setUser(userData);
          
          // Initialize profile form with user data if available
          if (userData.profile) {
            setProfile({
              displayName: userData.profile.displayName || '',
              bio: userData.profile.bio || '',
              email: userData.profile.email || '',
              website: userData.profile.website || '',
              twitter: userData.profile.twitter || '',
              github: userData.profile.github || '',
            });
          }
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchUserData();
  }, [walletInfo.isConnected, walletInfo.address]);
  
  // Redirect to home if not connected
  useEffect(() => {
    if (!loading && !walletInfo.isConnected) {
      // Add a small delay to prevent immediate redirect
      // This gives time for the wallet connection to be established
      const timer = setTimeout(() => {
        if (!walletInfo.isConnected) {
          router.push('/');
        }
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [loading, walletInfo.isConnected, router]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!walletInfo.address) {
      setError('Wallet not connected. Please connect your wallet first.');
      return;
    }
    
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);
      
      const result = await clientMongoDB.updateUserProfile(walletInfo.address, profile);
      
      if (result.success) {
        setSuccess(true);
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError('Failed to update profile. Please try again.');
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(`Failed to update profile: ${err.message}`);
    } finally {
      setSaving(false);
    }
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
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="container max-w-2xl py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-600">Success</AlertTitle>
          <AlertDescription className="text-green-600">
            Your profile has been updated successfully.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Information</CardTitle>
            <CardDescription>
              Your blockchain identity and wallet details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`https://effigy.im/a/${walletInfo.address}.svg`} alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {getInitials(walletInfo.address)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-lg">
                  {profile.displayName || truncateAddress(walletInfo.address)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {truncateAddress(walletInfo.address)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your profile information visible to other users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  placeholder="Enter your display name"
                  value={profile.displayName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about yourself"
                  rows={4}
                  value={profile.bio}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            
            <CardHeader className="pt-0">
              <CardTitle>Social Links</CardTitle>
              <CardDescription>
                Connect your social profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  value={profile.website}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  placeholder="@username"
                  value={profile.twitter}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  name="github"
                  placeholder="username"
                  value={profile.github}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end">
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : 'Save Changes'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
} 