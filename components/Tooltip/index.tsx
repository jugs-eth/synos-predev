import { useId } from "react";
import { Tooltip as ReactTooltip, PlacesType } from "react-tooltip";
import Icon from "@/components/Icon";

interface TooltipProps {
    className?: string;
    content: string;
    place?: PlacesType;
    children?: React.ReactNode;
    large?: boolean;
}

const Tooltip = ({
    className,
    content,
    place = "right",
    children,
    large,
}: TooltipProps) => {
    const idTooltip = useId();

    return (
        <>
            <div
                className={`flex fill-t-secondary opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer hover:!fill-primary-01 ${
                    className || ""
                }`}
                data-tooltip-id={idTooltip}
                data-tooltip-content={content}
                data-tooltip-place={place}
            >
                {children || (
                    <Icon
                        className={`fill-inherit ${large ? "" : "!size-4"}`}
                        name={large ? "help-think" : "help"}
                    />
                )}
            </div>
            <ReactTooltip id={idTooltip} clickable />
        </>
    );
};

export default Tooltip;
