import { useState, useRef } from "react";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Button from "@/components/Button";

type FieldImageProps = {
    className?: string;
    classImage?: string;
    label?: string;
    tooltip?: string;
    onChange?: (file: File) => void;
    initialImage?: string;
};

const FieldImage = ({
    className,
    classImage,
    label,
    tooltip,
    onChange,
    initialImage,
}: FieldImageProps) => {
    const [preview, setPreview] = useState<string | null>(initialImage || null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            onChange?.(file);
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (preview) {
            URL.revokeObjectURL(preview);
        }
        setPreview(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className={`${className || ""}`}>
            {label && (
                <div className="flex items-center mb-4">
                    <div className="text-button">{label}</div>
                    {tooltip && (
                        <Tooltip className="ml-1.5" content={tooltip} />
                    )}
                </div>
            )}
            {preview ? (
                <div className="relative rounded-4xl border border-s-stroke2 overflow-hidden">
                    <Image
                        className={`w-full h-auto opacity-100 object-cover ${
                            classImage || ""
                        }`}
                        src={preview}
                        width={944}
                        height={240}
                        alt="Preview"
                        unoptimized
                    />
                    <Button
                        className="absolute top-3 right-3"
                        icon="close"
                        onClick={handleRemove}
                        isWhite
                        isCircle
                    />
                </div>
            ) : (
                <div className="relative flex flex-col justify-center items-center h-60 bg-b-surface3 border border-transparent rounded-4xl overflow-hidden transition-colors hover:border-s-highlight">
                    <input
                        ref={inputRef}
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        onChange={handleChange}
                        accept="image/*"
                    />
                    <Icon
                        className="mb-2 !size-8 fill-t-secondary"
                        name="camera"
                    />
                    <div className="text-body-2 text-t-secondary">
                        Drag and drop an image, or{" "}
                        <span className="font-bold text-t-primary">Browse</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FieldImage;
