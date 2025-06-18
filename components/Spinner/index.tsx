import Image from "@/components/Image";

type SpinnerProps = {
    className?: string;
};

const Spinner = ({ className }: SpinnerProps) => (
    <div
        className={`flex justify-center items-center w-12 h-12 mx-auto bg-b-surface2 rounded-full overflow-hidden ${
            className || ""
        }`}
    >
        <Image
            className="size-6 opacity-100 animate-spin-reverse"
            src="/images/spinner.png"
            width={24}
            height={24}
            alt="spinner"
            quality={100}
            unoptimized
        />
    </div>
);

export default Spinner;
