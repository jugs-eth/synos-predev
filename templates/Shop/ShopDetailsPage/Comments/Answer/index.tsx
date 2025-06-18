import Image from "@/components/Image";
import Icon from "@/components/Icon";
import LikeButton from "@/components/LikeButton";
import DeleteItems from "@/components/DeleteItems";

const Answer = ({}) => (
    <div className="relative flex mt-4 before:absolute before:-left-11.5 before:-top-3.5 before:w-8.5 before:h-8 before:border-l before:border-b before:border-s-stroke2 before:rounded-bl-[0.625rem] max-md:before:-left-10">
        <div className="shrink-0">
            <Image
                className="size-8 rounded-full object-cover opacity-100"
                src="/images/avatar.png"
                width={32}
                height={32}
                alt=""
            />
        </div>
        <div className="w-[calc(100%-2rem)] pl-4 max-md:pl-3">
            <div className="flex flex-wrap items-center text-sub-title-1 max-md:text-body-2">
                <div className="mr-3 max-md:mr-2">Luna Swift</div>
                <div className="mr-2 text-t-secondary/80 max-md:mr-1">
                    @moonracer
                </div>
                <div className="flex justify-center items-center w-3 h-3 mr-2 max-md:mr-1">
                    <div className="w-0.5 h-0.5 rounded-full bg-t-tertiary/50"></div>
                </div>
                <div className="text-t-secondary/80">1s</div>
            </div>
            <div className="text-body-2 text-t-primary/80">
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
