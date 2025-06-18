import { useState } from "react";
import Card from "@/components/Card";
import Field from "@/components/Field";

const Demos = () => {
    const [liveDemo, setLiveDemo] = useState("");
    const [embedVideo, setEmbedVideo] = useState("");

    return (
        <Card classHead="!pl-3" title="Demos">
            <div className="flex flex-col gap-3 p-3">
                <Field
                    label="Live demo"
                    placeholder="ie. Bento Cards: User Interface"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={liveDemo}
                    onChange={(e) => setLiveDemo(e.target.value)}
                    required
                />
                <Field
                    label="Embed video"
                    placeholder="ie. Bento Cards: User Interface"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    value={embedVideo}
                    onChange={(e) => setEmbedVideo(e.target.value)}
                    required
                />
            </div>
        </Card>
    );
};

export default Demos;
