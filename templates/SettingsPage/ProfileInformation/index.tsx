import { useState } from "react";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Field from "@/components/Field";
import Select from "@/components/Select";
import Editor from "@/components/Editor";

const locations = [
    { id: 1, name: "Canada" },
    { id: 2, name: "United States" },
    { id: 3, name: "United Kingdom" },
    { id: 4, name: "Australia" },
];

const ProfileInformation = ({}) => {
    const [preview, setPreview] = useState<string | null>("/images/avatar.png");
    const [displayName, setDisplayName] = useState("Chelsie Haley");
    const [email, setEmail] = useState("chelsiehaley@email.com");
    const [location, setLocation] = useState(locations[0]);
    const [content, setContent] = useState("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    return (
        <Card title="Profile information">
            <div className="flex flex-col gap-8 p-5 pt-0 max-lg:px-3">
                <div className="flex items-center">
                    <div className="relative flex justify-center items-center shrink-0 w-20 h-20 rounded-full overflow-hidden bg-b-surface1">
                        {preview ? (
                            <Image
                                className="z-2 w-20 h-20 object-cover opacity-100"
                                src={preview}
                                width={80}
                                height={80}
                                quality={100}
                                priority={true}
                                alt="Avatar"
                            />
                        ) : (
                            <Icon
                                className="absolute top-1/2 left-1/2 -translate-1/2 fill-t-secondary"
                                name="camera"
                            />
                        )}
                        <input
                            type="file"
                            className="absolute z-3 inset-0 opacity-0 cursor-pointer"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="grow max-w-88 pl-4 text-caption text-t-secondary">
                        Update your avatar by clicking the image beside. 288x288
                        px size recommended in PNG or JPG format only.
                    </div>
                </div>
                <Field
                    label="Display name"
                    placeholder="Enter display name"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    validated
                />
                <Field
                    label="Email"
                    placeholder="Enter email"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    validated
                />
                <Select
                    label="Location"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={location}
                    onChange={setLocation}
                    options={locations}
                />
                <Editor
                    label="Bio"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    content={content}
                    onChange={setContent}
                />
            </div>
        </Card>
    );
};

export default ProfileInformation;
