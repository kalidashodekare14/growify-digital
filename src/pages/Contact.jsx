import ContactData from "../components/contact/ContactData";
import ContactMap from "../components/contact/ContactMap";
import SectionHeader from '../components/shared/SectionHeader/SectionHeader';
const Contact = () => {
    return (
        <div>
            <SectionHeader title={"Contact"} />
            <ContactData />
            <ContactMap />
        </div>
    );
};

export default Contact;