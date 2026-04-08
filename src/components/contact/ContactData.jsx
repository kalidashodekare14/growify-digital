import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import Button from "../shared/Button"

const ContactData = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* Left Side: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Have a project in mind or need help growing your business?
                        Contact us today and let’s build something amazing together.
                    </p>
                    {/* Contact Info */}
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-vivid" />
                            <span>+880 1234 567 890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-vivid" />
                            <span>contact@growify.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-vivid" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    {/* CTA */}
                    <Button name={"Get Free Consultation"} isIcon={true} />
                </div>
                {/* Right Side: input fileds like name + email + subject + messege */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-[#a8a8a8bb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ffb3b3]"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-[#a8a8a8bb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ffb3b3]"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-[#a8a8a8bb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ffb3b3]"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border border-[#a8a8a8bb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ffb3b3]"
                        ></textarea>
                        <Button name={"Send Message"} isIcon={true} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactData