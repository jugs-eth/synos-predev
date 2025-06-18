import { useState } from "react";
import Card from "@/components/Card";
import FieldImage from "@/components/FieldImage";

const Images = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleChangePreviews = (file: File) => {
        setImages([...images, file]);
    };

    const handleChangeFullPreviews = (file: File) => {
        setImages([...images, file]);
    };

    return (
        <Card title="Images">
            <div className="flex flex-col gap-8 px-5 pb-5 max-lg:px-3 max-lg:pb-3">
                <FieldImage
                    label="Previews"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    onChange={handleChangePreviews}
                />
                <FieldImage
                    label="Full previews"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    onChange={handleChangeFullPreviews}
                />
            </div>
        </Card>
    );
};

export default Images;
