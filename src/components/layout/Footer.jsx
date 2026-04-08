import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full  m-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Growify
                    </h2>
                    <p className="text-gray-400 mb-4">
                        We help businesses grow with smart digital solutions including web development, SEO, and marketing.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <span className="p-3 bg-gray-800 rounded-full hover:bg-vivid transition cursor-pointer">
                            <FaFacebookF />
                        </span>
                        <span className="p-3 bg-gray-800 rounded-full hover:bg-vivid transition cursor-pointer">
                            <FaTwitter />
                        </span>
                        <span className="p-3 bg-gray-800 rounded-full hover:bg-vivid transition cursor-pointer">
                            <FaLinkedinIn />
                        </span>
                        <span className="p-3 bg-gray-800 rounded-full hover:bg-vivid transition cursor-pointer">
                            <FaInstagram />
                        </span>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Services
                    </h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white cursor-pointer">Web Development</li>
                        <li className="hover:text-white cursor-pointer">SEO Optimization</li>
                        <li className="hover:text-white cursor-pointer">Online Advertising</li>
                        <li className="hover:text-white cursor-pointer">Booking Systems</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Contact
                    </h3>
                    <div className="space-y-2 text-gray-400">
                        <div className="flex items-center gap-2">
                            <FaLocationDot />
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <p>+880 1234 567 890</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <p>contact@growify.com</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Growify. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer