import Achievements from '../components/about/Achievements';
import SuccessMetrics from '../components/about/SuccessMetrics';
import TeamOverview from '../components/about/TeamOverview';
import VisionAndMision from '../components/about/VisionAndMision';
import Testimonials from '../components/home/SuccessStories';
import SectionHeader from '../components/shared/SectionHeader/SectionHeader';

const About = () => {
    return (
        <div>
            <SectionHeader title={"About"} />
            <VisionAndMision />
            <TeamOverview />
            <Achievements />
            <SuccessMetrics />
            <Testimonials />
        </div>
    );
};

export default About;