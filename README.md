# Wallet Authentication with MongoDB

This project demonstrates how to implement wallet-based authentication with MongoDB in a Next.js application using ThirdWeb.

## Features

- Connect to 500+ external wallets using ThirdWeb
- Sign in with Ethereum (SIWE) authentication
- Store user data in MongoDB Atlas
- User profile display after authentication

## Prerequisites

- Node.js 16+ and npm
- MongoDB Atlas account
- ThirdWeb client ID

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd auth-base
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your-thirdweb-client-id
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database?retryWrites=true&w=majority
```

Replace the placeholders with your actual values:
- Get a ThirdWeb client ID from [ThirdWeb Dashboard](https://thirdweb.com/dashboard)
- Get a MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. **Connect Wallet**: Users connect their wallet using the ThirdWeb ConnectButton component.
2. **Sign Message**: After connecting, users sign a message to authenticate.
3. **Store User**: The signed message and wallet address are stored in MongoDB.
4. **User Profile**: After authentication, the user's profile is displayed.

## Project Structure

- `components/auth/`: Authentication components
  - `connect.js`: ThirdWeb ConnectButton component
  - `UserProfile.js`: User profile display component
- `lib/`: Utility functions
  - `mongodb.js`: MongoDB connection and functions
  - `mongodb-adapter.js`: Client-side adapter for MongoDB
  - `utils.js`: General utility functions
- `pages/api/auth/`: Authentication API endpoints
  - `check.js`: Check if a user is logged in
  - `login.js`: Handle user login
  - `user.js`: Get user information

## Troubleshooting

If you encounter any issues:

1. **MongoDB Connection**: Make sure your MongoDB URI is correct and your IP address is whitelisted in MongoDB Atlas.
2. **API Errors**: Check the browser console and server logs for error messages.
3. **Build Errors**: If you encounter build errors related to MongoDB, make sure you're using the client-side adapter for client components.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
