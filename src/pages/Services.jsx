import CallToAction from '../components/home/CallToAction/CallToAction';
import OurServices from '../components/home/OurServices';
import IntroService from "../components/services/IntroService";
import SectionHeader from "../components/shared/SectionHeader/SectionHeader";

const Services = () => {
    return (
        <div>
            <SectionHeader title={"Services"} />
            <IntroService />
            <OurServices />
            <CallToAction />
        </div>
    );
};

export default Services;