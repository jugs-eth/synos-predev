import { useState } from "react";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Editor from "@/components/Editor";

const ProductDetails = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Card title="Product details">
            <div className="flex flex-col gap-8 px-5 pb-5 max-lg:px-3 max-lg:pb-3">
                <Field
                    label="Product title"
                    placeholder="ie. Bento Cards: User Interface"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <Editor
                    label="Description"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    content={content}
                    onChange={setContent}
                />
            </div>
        </Card>
    );
};

export default ProductDetails;
