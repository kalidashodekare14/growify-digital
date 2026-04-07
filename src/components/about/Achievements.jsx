import SectionHeadLine from "../shared/SectionHeadLine";

const Achievements = () => {
    return (
        <section className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto py-10 px-5">
            <SectionHeadLine title={"Achievements & Recognition"} description={"Celebrating milestones and success stories."} />
            <div className="grid md:grid-cols-4 gap-6 mt-10">

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        100+
                    </h3>
                    <p className="text-gray-600">
                        Projects Completed
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        50+
                    </h3>
                    <p className="text-gray-600">
                        Happy Clients
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        5+
                    </h3>
                    <p className="text-gray-600">
                        Years Experience
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        10+
                    </h3>
                    <p className="text-gray-600">
                        Industry Awards
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Achievements;