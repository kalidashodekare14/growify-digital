import { FaChartLine, FaCode, FaLightbulb, FaThumbsUp } from "react-icons/fa6";

const Benefits = () => {
    return (
        <section className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto py-20 px-5">
            <div className="flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Image Layout */}
                <div className="relative w-full lg:w-1/2 h-125">
                    {/* Main Large Image (Left) */}
                    <img
                        className="w-[50%] h-[90%] object-cover rounded-3xl absolute left-0 top-1/2 -translate-y-1/2 shadow-lg"
                        src="/Benefits/img1.jpg"
                        alt="Office Work"
                    />
                    {/* Top Right Image */}
                    <img
                        className="w-[48%] h-[45%] object-cover rounded-3xl absolute right-0 top-0 shadow-lg"
                        src="/Benefits/img2.jpg"
                        alt="Meeting"
                    />
                    {/* Bottom Right Image */}
                    <img
                        className="w-[48%] h-[45%] object-cover rounded-3xl absolute right-0 bottom-8 shadow-lg"
                        src="/Benefits/img3.jpg"
                        alt="Team Discussion"
                    />

                    {/* Red Floating Badge/Logo */}
                    <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-red-500 w-30 h-30 rounded-full border-8 border-white flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-[17px] text-center leading-tight">Creative Agency</span>
                    </div>
                </div>

                {/* Right Side: Benefits Info */}
                <div className="w-full lg:w-1/2">
                    <p className="text-red-500 font-semibold uppercase tracking-wider mb-2">Why Choose Us</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
                        Why You Should <br /> Choose Our Agency
                    </h2>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Benefit 1 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-red-50 p-4 rounded-full text-red-500 text-2xl">
                                <FaChartLine />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Business Growth</h3>
                                <p className="text-gray-500 text-sm mt-1">Write a short description, that will describe something useful.</p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-red-50 p-4 rounded-full text-red-500 text-2xl">
                                <FaLightbulb />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Smart Solutions</h3>
                                <p className="text-gray-500 text-sm mt-1">Write a short description, that will describe something useful.</p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-red-50 p-4 rounded-full text-red-500 text-2xl">
                                <FaThumbsUp />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Expert Guidance</h3>
                                <p className="text-gray-500 text-sm mt-1">Write a short description, that will describe something useful.</p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-red-50 p-4 rounded-full text-red-500 text-2xl">
                                <FaCode />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Skilled Developers</h3>
                                <p className="text-gray-500 text-sm mt-1">Write a short description, that will describe something useful.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;