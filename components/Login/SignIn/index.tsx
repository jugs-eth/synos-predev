import { useState } from "react";
import Button from "@/components/Button";
import Field from "@/components/Field";

type SignInProps = {
    handleSignUp: () => void;
    handleForgotPassword: () => void;
};

const SignIn = ({ handleSignUp, handleForgotPassword }: SignInProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Field
                className="mt-6"
                innerLabel="Email"
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Field
                className="mt-6"
                innerLabel="Password"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                handleForgotPassword={handleForgotPassword}
            />
            <Button className="mt-6 w-full" isBlack>
                Sign in
            </Button>
            <div className="mt-4 text-center text-body-2 text-t-secondary">
                Need an account?&nbsp;
                <button
                    className="text-t-primary font-bold transition-colors hover:text-primary-01"
                    onClick={handleSignUp}
                >
                    Sign up
                </button>
            </div>
        </>
    );
};

export default SignIn;
