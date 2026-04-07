
const Packages = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Our Pricing Plans
                    </h2>

                    <p className="text-gray-600 mb-10">
                        Flexible pricing options designed for businesses of all sizes.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Starter */}
                        <div className="p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold">Starter</h3>
                            <p className="text-gray-500 mb-4">$99 / month</p>
                            <ul className="text-gray-600 mb-6 space-y-2">
                                <li>Basic Website Setup</li>
                                <li>Basic SEO</li>
                                <li>Email Support</li>
                            </ul>
                            <button className="bg-vivid text-white px-5 py-2 rounded-full">
                                Choose Plan
                            </button>
                        </div>

                        {/* Growth (highlight) */}
                        <div className="p-6 rounded-xl shadow-lg border-2 border-vivid scale-105">
                            <h3 className="text-xl font-semibold">Growth</h3>
                            <p className="text-gray-500 mb-4">$199 / month</p>
                            <ul className="text-gray-600 mb-6 space-y-2">
                                <li>Advanced Website</li>
                                <li>Full SEO</li>
                                <li>Marketing Campaigns</li>
                            </ul>
                            <button className="bg-vivid text-white px-5 py-2 rounded-full">
                                Choose Plan
                            </button>
                        </div>

                        {/* Premium */}
                        <div className="p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold">Premium</h3>
                            <p className="text-gray-500 mb-4">$399 / month</p>
                            <ul className="text-gray-600 mb-6 space-y-2">
                                <li>Custom Solutions</li>
                                <li>Advanced SEO</li>
                                <li>Unlimited Campaigns</li>
                            </ul>
                            <button className="bg-vivid text-white px-5 py-2 rounded-full">
                                Choose Plan
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Packages;