import { useState } from "react";
import Button from "@/components/Button";
import Image from "@/components/Image";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import ResetPassword from "./ResetPassword";

const Login = ({}) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isResetPassword, setIsResetPassword] = useState(false);

    return (
        <div className="">
            <div className="mb-10 text-h4 text-center max-md:mb-6 max-md:text-h5">
                {isResetPassword
                    ? "Reset password"
                    : isSignIn
                    ? "Sign in to Core 2.0"
                    : "Create an account"}
            </div>
            {isResetPassword ? (
                <ResetPassword
                    handleSignIn={() => {
                        setIsSignIn(true);
                        setIsResetPassword(false);
                    }}
                />
            ) : (
                <>
                    <Button className="w-full gap-2" isGray>
                        <Image
                            className="size-6 opacity-100"
                            src="/images/google.svg"
                            width={24}
                            height={24}
                            alt="Google"
                        />
                        Sign {isSignIn ? "in" : "up"} with Google
                    </Button>
                    <div className="mt-6 text-center text-caption text-t-tertiary">
                        {isSignIn
                            ? "Or sign in with email"
                            : "Or use your email"}
                    </div>
                    {isSignIn ? (
                        <SignIn
                            handleSignUp={() => setIsSignIn(false)}
                            handleForgotPassword={() =>
                                setIsResetPassword(true)
                            }
                        />
                    ) : (
                        <CreateAccount handleSignIn={() => setIsSignIn(true)} />
                    )}
                </>
            )}
        </div>
    );
};

export default Login;
