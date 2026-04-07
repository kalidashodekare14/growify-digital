import { AiOutlineGlobal } from "react-icons/ai";
import { MdManageAccounts, MdOutlineScreenSearchDesktop } from "react-icons/md";
import { PiUserSoundFill } from "react-icons/pi";
import SectionHeadLine from "../shared/SectionHeadLine";

const OurServices = () => {
    return (
        <div className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto px-5 lg:px-0 py-20">
            {/* Header info */}
            <SectionHeadLine title={"Services"} description={"We help businesses grow with smart digital solutions."} />
            {/* Services Card */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
                <div className=" bg-[#f3f2f2] shadow p-5 space-y-3 rounded-2xl">
                    <AiOutlineGlobal className="bg-vivid p-3 text-6xl text-white rounded-full" />
                    <h1 className="text-[20px] font-semibold">Web Development</h1>
                    <p className="text-[#111111bb] text-[15px]">We design and develop modern, responsive, and high-performing websites tailored to your business needs.</p>
                </div>
                <div className=" bg-[#f3f2f2] shadow p-5 space-y-3 rounded-2xl">
                    <MdOutlineScreenSearchDesktop className="bg-vivid p-3 text-6xl text-white rounded-full" />
                    <h1 className="text-[20px] font-semibold">SEO Optimization</h1>
                    <p className="text-[#111111bb] text-[15px]">Our SEO strategies help your website rank higher on search engines, drive organic traffic, and increase visibility.</p>
                </div>
                <div className=" bg-[#f3f2f2] shadow p-5 space-y-3 rounded-2xl">
                    <PiUserSoundFill className="bg-vivid p-3 text-6xl text-white rounded-full" />
                    <h1 className="text-[20px] font-semibold">Online Advertising</h1>
                    <p className="text-[#111111bb] text-[15px]">We create targeted ad campaigns across platforms like Google and social media to reach your ideal audience.</p>
                </div>
                <div className=" bg-[#f3f2f2] shadow p-5 space-y-3 rounded-2xl">
                    <MdManageAccounts className="bg-vivid p-3 text-6xl text-white rounded-full" />
                    <h1 className="text-[20px] font-semibold">Online Booking </h1>
                    <p className="text-[#111111bb] text-[15px]">We build smart booking and management systems to streamline your business operations.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;