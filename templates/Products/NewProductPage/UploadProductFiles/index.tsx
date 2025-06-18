import { useState } from "react";
import Card from "@/components/Card";
import FieldFiles from "@/components/FieldFiles";

const UploadProductFiles = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (file: File | null) => {
        setFile(file);
    };

    return (
        <Card classHead="!pl-3" title="Upload product files">
            <div className="p-3 pt-0">
                <FieldFiles onChange={handleFileChange} />
            </div>
        </Card>
    );
};

export default UploadProductFiles;
