import { useState } from "react";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";

const Password = ({}) => {
    const [password, setPassword] = useState("1234567");
    const [newPassword, setNewPassword] = useState("1234567");
    const [confirmNewPassword, setConfirmNewPassword] = useState("1234567");

    return (
        <Card title="Password">
            <div className="flex flex-col gap-8 p-5 pt-0 max-lg:px-3 max-md:gap-4">
                <Field
                    innerLabel="Password"
                    placeholder="Enter password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    handleForgotPassword={() => {}}
                />
                <div className="flex gap-4 max-md:flex-col">
                    <Field
                        className="flex-1"
                        innerLabel="New password"
                        placeholder="Enter new password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        innerLabel="Confirm new password"
                        placeholder="Confirm new password"
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                    />
                </div>
                <Button className="self-start" isBlack>
                    Update password
                </Button>
            </div>
        </Card>
    );
};

export default Password;
