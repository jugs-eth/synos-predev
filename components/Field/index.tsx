import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    innerLabel?: string;
    tooltip?: string;
    children?: React.ReactNode;
    textarea?: boolean;
    type?: string;
    validated?: boolean;
    handleForgotPassword?: () => void;
};

const Field = ({
    className,
    classInput,
    label,
    innerLabel,
    tooltip,
    children,
    textarea,
    type,
    validated,
    handleForgotPassword,
    ...inputProps
}: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <div className={`${innerLabel ? "pt-1.5" : ""} ${className || ""}`}>
            {label && !innerLabel && (
                <div className="flex items-center mb-4">
                    <div className="text-button">{label}</div>
                    {tooltip && (
                        <Tooltip className="ml-1.5" content={tooltip} />
                    )}
                </div>
            )}
            <div className={`relative ${textarea ? "text-0" : ""}`}>
                {innerLabel && !label && (
                    <div className="absolute -top-2.5 left-6 px-1 bg-b-surface2 text-caption pointer-events-none">
                        {innerLabel}
                    </div>
                )}
                {handleForgotPassword && (
                    <button
                        className="absolute -top-2.5 right-6 px-1 bg-b-surface2 text-caption text-t-secondary transition-colors hover:text-t-primary"
                        onClick={handleForgotPassword}
                    >
                        Forgot password?
                    </button>
                )}
                {children}
                {textarea ? (
                    <textarea
                        className={`w-full h-24 px-4.5 py-3.5 border border-s-stroke2 rounded-3xl text-body-2 text-t-primary outline-none transition-colors resize-none hover:border-s-highlight focus:border-s-highlight placeholder:text-t-secondary/50 ${
                            validated ? "pr-14" : ""
                        } ${innerLabel ? "pl-6.5" : ""} ${classInput || ""}`}
                        {...inputProps}
                    ></textarea>
                ) : (
                    <input
                        className={`w-full h-12 px-4.5 border border-s-stroke2 rounded-full text-body-2 text-t-primary outline-none transition-colors hover:border-s-highlight focus:border-s-highlight placeholder:text-t-secondary/50 ${
                            validated ? "pr-14" : ""
                        } ${innerLabel ? "pl-6.5" : ""} ${classInput || ""}`}
                        type={type || "text"}
                        {...inputProps}
                    />
                )}
                {validated && (
                    <Icon
                        className="absolute top-1/2 right-5 -translate-y-1/2 fill-primary-02"
                        name="check"
                    />
                )}
            </div>
            {/* <div className="mt-2 text-caption text-primary-03">
                Please enter an email address.
            </div> */}
        </div>
    );
};

export default Field;
