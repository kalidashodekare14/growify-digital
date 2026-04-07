import Achievements from '../components/about/Achievements';
import TeamOverview from '../components/about/TeamOverview';
import VisionAndMision from '../components/about/VisionAndMision';
import SectionHeader from '../components/shared/SectionHeader/SectionHeader';

const About = () => {
    return (
        <div>
            <SectionHeader title={"About"} />
            <VisionAndMision />
            <TeamOverview />
            <Achievements />
        </div>
    );
};

export default About;