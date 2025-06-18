import { useState, useRef } from "react";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Button from "@/components/Button";

type FieldFilesProps = {
    className?: string;
    label?: string;
    tooltip?: string;
    onChange?: (file: File | null) => void;
};

const FieldFiles = ({
    className,
    label,
    tooltip,
    onChange,
}: FieldFilesProps) => {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            onChange?.(selectedFile);
        }
    };

    const handleRemove = () => {
        setFile(null);
        onChange?.(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
            <div className="relative flex flex-col justify-center items-center h-57.5 bg-b-surface3 border border-transparent rounded-4xl overflow-hidden transition-colors hover:border-s-highlight">
                <input
                    ref={inputRef}
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleFileChange}
                />
                <Icon className="mb-2 size-8 fill-t-secondary" name="upload" />
                <div className="text-body-2 text-t-secondary">
                    Drag and drop product file, or{" "}
                    <span className="font-bold text-t-primary">Browse</span>
                </div>
            </div>
            {file && (
                <div className="flex items-center mt-4 p-5.5 border border-s-stroke2 rounded-3xl">
                    <div className="grow">
                        <div className="text-sub-title-1">{file.name}</div>
                        <div className="flex gap-2 mt-2">
                            {file.type === "application/zip" && (
                                <Image
                                    className="size-6 opacity-100"
                                    src="/images/format-zip.svg"
                                    width={24}
                                    height={24}
                                    alt="file-zip"
                                />
                            )}
                            <div className="text-t-secondary">
                                {formatFileSize(file.size)}
                            </div>
                        </div>
                    </div>
                    <Button
                        className="shrink-0 ml-4"
                        icon="trash-think"
                        isBlack
                        isCircle
                        onClick={handleRemove}
                    />
                </div>
            )}
        </div>
    );
};

export default FieldFiles;
