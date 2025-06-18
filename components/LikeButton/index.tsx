import Icon from "@/components/Icon";
import { useState } from "react";

interface LikeButtonProps {
    className?: string;
}

const LikeButton = ({ className }: LikeButtonProps) => {
    const [like, setLike] = useState(false);

    return (
        <button
            className={`action ${className || ""}`}
            onClick={() => setLike(!like)}
        >
            <div className="relative">
                <Icon
                    className={`${like ? "fill-primary-03" : ""}`}
                    name="heart"
                />
                <Icon
                    className={`absolute top-0 left-0 fill-primary-03 transition-opacity ${
                        like ? "opacity-100" : "opacity-0"
                    }`}
                    name="heart-fill"
                />
            </div>
            {like ? "Liked" : "Like"}
        </button>
    );
};

export default LikeButton;
