import SectionHeadLine from "../shared/SectionHeadLine";

const SuccessMetrics = () => {
    return (
        <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto py-10 px-5">
            <SectionHeadLine title={"Client Statistics"} description={"Proven results that drive real growth"} />
            <div className="grid md:grid-cols-4 gap-6 mt-10">

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        130+
                    </h3>
                    <p className="text-gray-600">
                        Projects Completed
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        60+
                    </h3>
                    <p className="text-gray-600">
                        Happy Clients
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        350+
                    </h3>
                    <p className="text-gray-600">
                        Website Traffic Growth
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 p-6 rounded-xl shadow">
                    <h3 className="text-4xl font-bold text-vivid">
                        250
                    </h3>
                    <p className="text-gray-600">
                        ROI Improvement
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SuccessMetrics;