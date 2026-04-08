import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Button from "../../shared/Button";
import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="bg bg-cover bg-center bg-no-repeat my-20">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto px-5 lg:px-0 py-20 flex justify-center items-center gap-10 h-120">
                <div className="w-150 space-y-3">
                    <p className="text-white">Why Choose Us</p>
                    <h3 className="text-4xl font-semibold text-white mb-10">Recognized As One Of The Leading Company!</h3>
                    <div className="flex items-center gap-5">
                        <div className="text-[#f1f1f1bb] space-y-2">
                            <div className="w-14 h-14 text-3xl rounded-full bg-vivid text-white flex justify-center items-center">
                                <IoCall />
                            </div>
                            <p className="">growify.gigital@gmail.com</p>
                            <p className="">+1875445564</p>
                        </div>
                        <div className="text-[#f1f1f1bb] space-y-2">
                            <div className="w-14 h-14 text-3xl rounded-full bg-vivid text-white flex justify-center items-center">
                                <FaLocationDot />
                            </div>
                            <p className="w-50">Bishopsgate, Heron Tower, 110 Bishopsgate</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-120 rounded-3xl p-10  mt-30">
                    <p>Contact Us</p>
                    <h1 className="text-3xl font-bold">Get in Touch</h1>
                    <div className="mt-5">
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <input className="input w-full" type="text" placeholder="Your Name" />
                            <input className="input w-full" type="email" placeholder="Email Address" />
                            <input className="input w-full" type="text" placeholder="Enter Subject" />
                            <input className="input w-full" type="text" placeholder="Enter Phone" />
                        </div>
                        <textarea className="textarea w-full" />
                        <div className="mt-5">
                            <Button name={'Submit'} isIcon={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;