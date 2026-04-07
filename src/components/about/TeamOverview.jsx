import { FaCheck } from "react-icons/fa";

const TeamOverview = () => {
    return (
        <div>
            <section className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto py-16 bg-gray-50">
                <div className=" px-4 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Image */}
                    <div>
                        <img
                            src="/about/img1.jpg"
                            alt="Our Team"
                            className="rounded-xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-vivid mb-2">
                            Our Team & Strategy
                        </p>

                        <h2 className="text-3xl font-bold mb-4">
                            Driven by Experts, Focused on Results
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Our team consists of skilled designers, developers, and digital marketing experts who work together to deliver high-quality solutions.
                        </p>

                        <ul className="space-y-2 text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaCheck />
                                <p>Research & Planning</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck />
                                <p>Creative Design & Development</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck />
                                <p>Data-Driven Marketing</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheck />
                                <p>Continuous Optimization</p>
                            </div>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TeamOverview;