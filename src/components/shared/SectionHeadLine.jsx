
const SectionHeadLine = ({ title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[20px] text-vivid">{title}</h1>
            <h2 className="text-3xl lg:w-115 font-semibold text-center">{description}</h2>
        </div>
    );
};

export default SectionHeadLine;