import Button from "../../shared/Button";
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className=" bg-center bg-cover ">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto flex justify-center items-center h-140">
                {/* Left: Info */}
                <div className="lg:w-200 space-y-5">
                    <h1 className="text-6xl font-bold">Grow Your Business with Growify</h1>
                    <p className="text-[#111111bb]">We create stunning websites, optimize your SEO for maximum visibility, and run effective digital campaigns to help your business grow and reach more customers online.</p>
                    <div className="flex lg:flex-row flex-col items-center gap-10">
                        <div>
                            <Button name={"Discover More"} isIcon={true} />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center">
                                <img className=" w-12 h-12 border border-vivid rounded-full" src="/banner/img1.jpg" alt="" />
                                <img className="-ml-4 w-12 h-12 border border-vivid rounded-full" src="/banner/img2.jpg" alt="" />
                                <img className="-ml-4 w-12 h-12 border border-vivid rounded-full" src="/banner/img3.jpg" alt="" />
                                <div className="-ml-4 w-12 h-12 bg-vivid text-white rounded-full flex justify-center items-center">
                                    <p>50k</p>
                                </div>
                            </div>
                            <p className="text-[#111111bb]">Our 50k + Satisfaction Clients</p>
                        </div>
                    </div>
                </div>
                {/* Right: Image */}
                <div className="lg:w-200">
                    <img className="w-150 lg:h-150 h-auto" src="/hero.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;