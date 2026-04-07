import Benefits from "../components/home/Benefits";
import HeroSection from "../components/home/HeroSection/HeroSection";
import OurServices from "../components/home/OurServices";
import Partners from "../components/home/Partners";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <OurServices />
            <Benefits />
            <Partners />
        </div>
    );
};

export default Home;