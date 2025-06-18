import { useState } from "react";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Image from "@/components/Image";
import Button from "@/components/Button";

const Payment = ({}) => {
    const [paypalEmail, setPaypalEmail] = useState("chelsiehaley@email.com");

    return (
        <Card title="Payment">
            <div className="p-5 pt-0 max-lg:px-3">
                <Field
                    classInput="pl-14"
                    label="Paypal email"
                    placeholder="Enter paypal email"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    required
                    validated
                >
                    <Image
                        className="size-7 absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none opacity-100"
                        src="/images/logos/paypal.svg"
                        width={28}
                        height={28}
                        alt="Paypal"
                    />
                </Field>
                <Button className="gap-2 mt-6" isBlack>
                    <Image
                        className="size-7"
                        src="/images/logos/stripe.svg"
                        width={28}
                        height={28}
                        alt="Stripe"
                    />
                    Connect Stripe account
                </Button>
            </div>
        </Card>
    );
};

export default Payment;
