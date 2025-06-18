import Field from "@/components/Field";
import Icon from "@/components/Icon";

type ItemProps = {
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    placeholder: string;
};

const Item = ({ value, onChange, placeholder }: ItemProps) => {
    return (
        <Field
            className="w-full"
            classInput={`px-12 ${value !== "" ? "!border-s-highlight" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        >
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-0">
                <Icon
                    className={`${
                        value === "" ? "fill-t-tertiary/80" : "fill-primary-02"
                    }`}
                    name={value === "" ? "check-circle" : "check-circle-fill"}
                />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col justify-center items-center gap-[3px] w-6 h-6 opacity-50">
                <div className="w-3.5 h-[1.5px] bg-t-tertiary rounded-full"></div>
                <div className="w-3.5 h-[1.5px] bg-t-tertiary rounded-full"></div>
            </div>
        </Field>
    );
};

export default Item;
