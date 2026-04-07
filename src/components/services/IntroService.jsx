
const IntroService = () => {
    return (
        <section className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto py-10 px-5">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Benefits Info */}
                <div className="w-full lg:w-1/2">
                    <p className="text-red-500 font-semibold uppercase tracking-wider mb-2">Our Growth Solutions</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        Helping businesses grow with smart solutions
                    </h2>
                    <p className="text-[#161616bb]">At Growify Digital, we combine creativity, technology, and data-driven strategies to help businesses grow in the digital world. From building modern, high-performing websites to improving search engine visibility and running targeted marketing campaigns, we focus on delivering real and measurable results. Our goal is to create solutions that not only look great but also drive traffic, increase engagement, and boost your overall business performance.</p>
                </div>
                {/* Right Side: Image Layout */}
                <div className="relative w-full lg:w-1/2 h-125">
                    {/* Main Large Image (Left) */}
                    <img
                        className="w-[50%] h-[90%] object-cover rounded-3xl absolute left-0 top-1/2 -translate-y-1/2 shadow-lg"
                        src="/services/img2.jpg"
                        alt="Office Work"
                    />
                    {/* Top Right Image */}
                    <img
                        className="w-[48%] h-[45%] object-cover rounded-3xl absolute right-0 top-0 shadow-lg"
                        src="/services/img3.jpg"
                        alt="Meeting"
                    />
                    {/* Bottom Right Image */}
                    <img
                        className="w-[48%] h-[45%] object-cover rounded-3xl absolute right-0 bottom-8 shadow-lg"
                        src="/services/img4.jpg"
                        alt="Team Discussion"
                    />

                    {/* Red Floating Badge/Logo
                    <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-red-500 w-30 h-30 rounded-full border-8 border-white flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-[17px] text-center leading-tight">Creative Agency</span>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default IntroService;