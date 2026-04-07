import SectionHeadLine from "../shared/SectionHeadLine";

const Partners = () => {
    return (
        <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto px-5 lg:px-0">
            {/* Header line */}
            <SectionHeadLine title={"Parners"} description={"Partnering with brands that trust us."} />
            {/* Partners Logo */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-20">
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/amazon.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/microsoft.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/walmart.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/samsung.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/itel.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/deloitte.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/oracle.png" alt="" />
                </div>
                <div className="border border-[#bbbb] p-3 flex justify-center items-center rounded-2xl">
                    <img className="w-25" src="/partners/logitech.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;