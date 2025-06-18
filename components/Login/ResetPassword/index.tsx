import { useState } from "react";
import Button from "@/components/Button";
import Field from "@/components/Field";

type ResetPasswordProps = {
    handleSignIn: () => void;
};

const ResetPassword = ({ handleSignIn }: ResetPasswordProps) => {
    const [email, setEmail] = useState("");

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
            <Button className="mt-6 w-full" isBlack>
                Check your inbox
            </Button>
            <div className="mt-4 text-center text-body-2 text-t-secondary">
                Have your password?&nbsp;
                <button
                    className="text-t-primary font-bold transition-colors hover:text-primary-01"
                    onClick={handleSignIn}
                >
                    Login
                </button>
            </div>
        </>
    );
};

export default ResetPassword;
