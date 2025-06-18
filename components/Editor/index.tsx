import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { EmojiClickData } from "emoji-picker-react";
import Emoji from "@/components/Emoji";
import Tooltip from "@/components/Tooltip";

type EditorProps = {
    className?: string;
    content?: string;
    onChange?: (content: string) => void;
    label?: string;
    tooltip?: string;
};

const svg = (path: string) => (
    <svg
        className="size-6 fill-inherit"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d={path} />
    </svg>
);

const Editor = ({
    className,
    content = "",
    onChange,
    label,
    tooltip,
}: EditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-primary-01 underline hover:no-underline",
                },
            }),
            Underline,
            TextAlign.configure({
                types: ["paragraph", "heading"],
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
        },
        immediatelyRender: false,
    });

    const setLink = () => {
        const url = window.prompt("URL:");
        if (url) {
            editor?.chain().focus().setLink({ href: url }).run();
        }
    };

    const onEmojiClick = (emojiData: EmojiClickData) => {
        editor?.chain().focus().insertContent(emojiData.emoji).run();
    };

    const styleButton =
        "flex items-center justify-center w-10 h-10 rounded-xl fill-t-secondary transition-colors hover:bg-shade-08/80 hover:fill-t-primary dark:hover:bg-shade-05/50";

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
            <div className="border border-s-stroke2 rounded-2xl transition-colors hover:border-s-highlight">
                <div className="flex gap-1 p-0.5 border-b border-s-stroke2 bg-b-surface3 rounded-t-2xl max-md:gap-0.5">
                    <button
                        className={`${styleButton} ${
                            editor?.isActive("bold")
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50 "
                                : ""
                        }`}
                        onClick={() =>
                            editor?.chain().focus().toggleBold().run()
                        }
                    >
                        {svg(
                            "M7.75 21A2.75 2.75 0 0 1 5 18.25v-7-5.5A2.75 2.75 0 0 1 7.75 3h5.51a4.75 4.75 0 0 1 4.75 4.75V8a4.74 4.74 0 0 1-1.69 3.633l-.068.054.044.02a4.75 4.75 0 0 1 2.709 4.075l.005.217v.25A4.75 4.75 0 0 1 14.26 21h-2-4.51zm4.51-8.25H6.5v5.5a1.25 1.25 0 0 0 1.122 1.244l.128.006h4.509 2.001a3.25 3.25 0 0 0 3.245-3.066l.005-.184V16a3.25 3.25 0 0 0-3.25-3.25h-2zm1-8.25H7.75A1.25 1.25 0 0 0 6.5 5.75v5.5h6.76a3.25 3.25 0 0 0 3.245-3.066L16.51 8v-.25a3.25 3.25 0 0 0-3.25-3.25z"
                        )}
                    </button>
                    <button
                        className={`${styleButton} ${
                            editor?.isActive("italic")
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50"
                                : ""
                        }`}
                        onClick={() =>
                            editor?.chain().focus().toggleItalic().run()
                        }
                    >
                        {svg(
                            "M4.5 21a.5.5 0 1 1 0-1h4.625l4.706-16H9.414a.5.5 0 0 1-.492-.41l-.008-.09a.5.5 0 0 1 .5-.5H14.5h5a.5.5 0 0 1 .492.41L20 3.5a.5.5 0 0 1-.5.5h-4.627l-4.705 16h4.418a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.5.5H9.5h-5z"
                        )}
                    </button>
                    <button
                        className={`${styleButton} ${
                            editor?.isActive("underline")
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50"
                                : ""
                        }`}
                        onClick={() =>
                            editor?.chain().focus().toggleUnderline().run()
                        }
                    >
                        {svg(
                            "M18.25 19.75a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5h12.5zm0-17a.75.75 0 0 1 .75.75v8.25a7 7 0 1 1-14 0V3.5a.75.75 0 1 1 1.5 0v8.25a5.5 5.5 0 1 0 11 0V3.5a.75.75 0 0 1 .75-.75z"
                        )}
                    </button>
                    <Emoji
                        classButton={`${styleButton} data-[active]:bg-shade-08/80 data-[active]:fill-t-primary dark:data-[active]:bg-shade-05/50`}
                        classMenuItems="[--anchor-gap:0.375rem] [--anchor-offset:0] w-80 h-44.5"
                        onEmojiClick={onEmojiClick}
                    />
                    <button
                        className={`max-md:hidden ${styleButton} ${
                            editor?.isActive("bulletList")
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50"
                                : ""
                        }`}
                        onClick={() =>
                            editor?.chain().focus().toggleBulletList().run()
                        }
                    >
                        {svg(
                            "M5.75 14a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 1 1 0-5.5zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5zm14.5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM5.75 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 1 1 0-5.5zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5zm14.5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5z"
                        )}
                    </button>
                    <button
                        className={`${styleButton} ${
                            editor?.isActive("link")
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50"
                                : ""
                        }`}
                        onClick={setLink}
                    >
                        {svg(
                            "M3.916 15.916l.53-.53h0l-.53.53zm4.172 4.172l-.53.53h0l.53-.53zm12-12l.53-.53h0l-.53.53zm-4.171-4.172l.53-.53h0l-.53.53zm-2.828 0l-.53-.53h0l.53.53zm-2.866 1.805a.75.75 0 0 0 1.061 1.061l-1.061-1.061zm-3.439 5.561a.75.75 0 0 0-1.061-1.061l1.061 1.061zm-2.866 1.805l-.53-.53h0l.53.53zm13.305-.366a.75.75 0 0 0 1.061 1.061l-1.061-1.061zm2.866-1.806l.53.53-.53-.53zm-9.171 9.172l.53.53-.53-.53zm2.866-1.806a.75.75 0 0 0-1.061-1.061l1.061 1.061zm-5.311-3.811a.75.75 0 0 0 1.061 1.061l-1.061-1.061zm7.061-4.939a.75.75 0 0 0-1.061-1.061l1.061 1.061zM3.385 16.446l4.172 4.172 1.061-1.061-4.172-4.172-1.061 1.061zm17.232-8.889l-4.172-4.172-1.061 1.061 4.172 4.172 1.061-1.061zm-8.061-4.172l-2.336 2.336 1.061 1.061 2.336-2.336-1.061-1.061zm-6.836 6.836l-2.336 2.336 1.061 1.061 2.336-2.336-1.061-1.061zm12.561 3.561l2.336-2.336-1.061-1.061-2.336 2.336 1.061 1.061zm-6.836 6.836l2.336-2.336-1.061-1.061-2.336 2.336 1.061 1.061zm8.111-12a1.25 1.25 0 0 1 0 1.768l1.061 1.061a2.75 2.75 0 0 0 0-3.889l-1.061 1.061zm-12 12a2.75 2.75 0 0 0 3.889 0l-1.061-1.061a1.25 1.25 0 0 1-1.768 0l-1.061 1.061zm-3.111-5.232a1.25 1.25 0 0 1 0-1.768l-1.061-1.061a2.75 2.75 0 0 0 0 3.889l1.061-1.061zm12-12a2.75 2.75 0 0 0-3.889 0l1.061 1.061a1.25 1.25 0 0 1 1.768 0l1.061-1.061zM9.532 15.532l6-6-1.061-1.061-6 6 1.061 1.061z"
                        )}
                    </button>
                    <button
                        className={`max-md:hidden ${styleButton} ${
                            editor?.isActive({ textAlign: "center" })
                                ? "bg-shade-08/80 !fill-t-primary dark:bg-shade-05/50"
                                : ""
                        }`}
                        onClick={() =>
                            editor?.chain().focus().setTextAlign("center").run()
                        }
                    >
                        {svg(
                            "M20.25 18.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5h16.5zm-4-7.25a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zm4-7.25a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5h16.5z"
                        )}
                    </button>
                    <button
                        className={`${styleButton} ml-auto rotate-180`}
                        onClick={() => editor?.chain().focus().undo().run()}
                    >
                        {svg(
                            "M14.94 7.47l2.586 2.586a2.75 2.75 0 0 1 0 3.889L14.94 16.53a.75.75 0 1 1-1.061-1.061l2.586-2.586a1.26 1.26 0 0 0 .115-.133L6.41 12.75a.75.75 0 1 1 0-1.5h10.172a1.26 1.26 0 0 0-.116-.134L13.88 8.53A.75.75 0 0 1 14.94 7.47z"
                        )}
                    </button>
                    <button
                        className={`${styleButton}`}
                        onClick={() => editor?.chain().focus().redo().run()}
                    >
                        {svg(
                            "M14.94 7.47l2.586 2.586a2.75 2.75 0 0 1 0 3.889L14.94 16.53a.75.75 0 1 1-1.061-1.061l2.586-2.586a1.26 1.26 0 0 0 .115-.133L6.41 12.75a.75.75 0 1 1 0-1.5h10.172a1.26 1.26 0 0 0-.116-.134L13.88 8.53A.75.75 0 0 1 14.94 7.47z"
                        )}
                    </button>
                </div>
                <EditorContent className="min-h-48" editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
