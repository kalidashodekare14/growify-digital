
const VisionAndMision = () => {
    return (
        <section className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto py-10 px-5">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Benefits Info */}
                <div className="w-full lg:w-1/2">
                    <p className="text-red-500 font-semibold uppercase tracking-wider mb-2">Our Vision & Expertise</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        Driving growth through innovation and expertise.
                    </h2>
                    <p className="text-[#161616bb]">At Growify Digital, our vision is to empower businesses with innovative digital solutions that drive long-term growth and success. We combine creativity, technology, and strategic thinking to deliver impactful results. With a strong focus on web development, SEO, and digital marketing, our team brings the expertise needed to help brands stand out in today’s competitive online landscape.</p>
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

export default VisionAndMision;