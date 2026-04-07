import Benefits from "../components/home/Benefits";
import CallToAction from "../components/home/CallToAction/CallToAction";
import HeroSection from "../components/home/HeroSection/HeroSection";
import OurServices from "../components/home/OurServices";
import Partners from "../components/home/Partners";
import SuccessStories from "../components/home/SuccessStories";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <OurServices />
            <Benefits />
            <Partners />
            <SuccessStories />
            <CallToAction />
        </div>
    );
};

export default Home;