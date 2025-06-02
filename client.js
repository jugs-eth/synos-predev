import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  chainId: 1, // Ethereum Mainnet
  rpcUrl: process.env.RPC_URL || `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
});
