import {
    Dialog,
    DialogPanel,
    DialogBackdrop,
    CloseButton,
} from "@headlessui/react";
import Icon from "@/components/Icon";

type ModalProps = {
    className?: string;
    classWrapper?: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    isSlidePanel?: boolean;
};

const CloseButtonModal = ({}) => {
    return (
        <CloseButton className="group fixed right-5 top-5 z-15 size-12 border border-transparent bg-b-surface2-overlay rounded-full text-0 max-md:top-3 max-md:right-3 dark:border-s-stroke2">
            <Icon
                className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                name="close"
            />
        </CloseButton>
    );
};

const Modal = ({
    className,
    classWrapper,
    open,
    onClose,
    children,
    isSlidePanel,
}: ModalProps) => {
    return (
        <Dialog className="relative z-50" open={open} onClose={onClose}>
            <DialogBackdrop
                className={`fixed inset-0 duration-300 ease-out data-[closed]:opacity-0 ${
                    isSlidePanel
                        ? "bg-shade-07/70 dark:bg-shade-04/90"
                        : "bg-shade-04/90"
                }`}
                transition
            />
            <div
                className={`fixed inset-0 flex w-screen ${
                    isSlidePanel
                        ? "justify-end overflow-hidden"
                        : "justify-center p-4 overflow-y-auto"
                } ${className || ""}`}
            >
                <DialogPanel
                    className={`bg-b-surface1 ${
                        isSlidePanel
                            ? "relative w-114 h-svh duration-300 ease-out data-[closed]:translate-x-full max-md:w-full"
                            : "w-full max-w-143 m-auto p-12 shadow-depth rounded-3xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 max-md:p-6 dark:shadow-[0px_2.15px_0.5px_-2px_rgba(0,0,0,0.25),0px_5px_1.5px_-4px_rgba(8,8,8,0.2),0px_6px_4px_-4px_rgba(8,8,8,0.16),0px_6px_13px_0px_rgba(8,8,8,0.12),0px_24px_24px_-16px_rgba(8,8,8,0.08)]"
                    } ${classWrapper || ""}`}
                    transition
                >
                    {children}
                    {isSlidePanel && <CloseButtonModal />}
                </DialogPanel>
                {!isSlidePanel && <CloseButtonModal />}
            </div>
        </Dialog>
    );
};

export default Modal;
