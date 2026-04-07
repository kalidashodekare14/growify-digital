import Button from "../../shared/Button";
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className=" bg-center bg-cover ">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto flex justify-center items-center h-140">
                {/* Left: Info */}
                <div className="lg:w-200 space-y-5">
                    <h1 className="text-6xl font-bold">Grow Your Business with Growify</h1>
                    <p>We create stunning websites, optimize your SEO for maximum visibility, and run effective digital campaigns to help your business grow and reach more customers online.</p>
                    <div>
                        <Button name={"Discover More"} isIcon={true} />
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