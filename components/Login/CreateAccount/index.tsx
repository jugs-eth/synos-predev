import { useState } from "react";
import Button from "@/components/Button";
import Field from "@/components/Field";

type CreateAccountProps = {
    handleSignIn: () => void;
};

const CreateAccount = ({ handleSignIn }: CreateAccountProps) => {
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
            />
            <Button className="mt-6 w-full" isBlack>
                Create an account
            </Button>
            <div className="mt-4 text-center text-body-2 text-t-secondary">
                Already have an account?&nbsp;
                <button
                    className="text-t-primary font-bold transition-colors hover:text-primary-01"
                    onClick={handleSignIn}
                >
                    Sign in
                </button>
            </div>
        </>
    );
};

export default CreateAccount;
