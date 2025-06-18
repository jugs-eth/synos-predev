import Image from "@/components/Image";
import Icon from "@/components/Icon";
import LikeButton from "@/components/LikeButton";
import DeleteItems from "@/components/DeleteItems";

const Answer = ({}) => (
    <div className="relative flex mt-4 before:absolute before:-left-11.5 before:-top-3.5 before:w-8.5 before:h-8 before:border-l before:border-b before:border-s-stroke2 before:rounded-bl-[0.625rem]">
        <div className="shrink-0">
            <Image
                className="size-8 rounded-full object-cover opacity-100"
                src="/images/avatars/4.png"
                width={32}
                height={32}
                alt=""
            />
        </div>
        <div className="w-[calc(100%-2rem)] pl-4">
            <div className="flex items-center">
                <div className="text-sub-title-1">Dash</div>
                <div className="ml-3 text-body-2 text-t-secondary/80">
                    @dash
                </div>
                <div className="flex justify-center items-center w-3 h-3 mx-2">
                    <div className="w-0.5 h-0.5 rounded-full bg-t-tertiary/50"></div>
                </div>
                <div className="text-body-2 text-t-secondary/80">1s</div>
            </div>
            <div className="text-t-primary/80">
                Hey @samstoo! 😊 We&apos;re working on cool stuff in the
                cybersecurity space. Stay tuned, and thanks for the awesome
                idea! 🔍✨
            </div>
            <div className="flex flex-wrap gap-2 -ml-1 mt-2">
                <button className="action">
                    <Icon name="edit" />
                    Reply
                </button>
                <LikeButton className="max-md:hidden" />
                <DeleteItems
                    counter={1}
                    onDelete={() => {}}
                    content="This will definitely delete this comment, and all data will be removed. This action cannot be undone."
                />
            </div>
        </div>
    </div>
);

export default Answer;
