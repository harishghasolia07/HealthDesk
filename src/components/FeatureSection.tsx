export default function FeatureSection() {
    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Health Care Desk
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                    The Future Of Smart Health
                </h3>
            </div>

            <div className="max-w-[1540px] mx-auto space-y-24">
                {/* Feature 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1726769198572-542339268a7f?fm=jpg&q=80&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVyYmFsJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D"
                            alt="Herbal Ingredients"
                            className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-80"
                        />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h4 className="text-2xl font-bold text-black">
                            100% Natural Components
                        </h4>
                        <h5 className="text-lg font-medium text-black">
                            Nature-Powered Wellness You Can Trust
                        </h5>
                        <p className="text-gray-600 leading-relaxed">
                            We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.
                        </p>
                        <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-8 rounded transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=800&auto=format&fit=crop"
                            alt="Natural Components"
                            className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-80"
                        />
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h4 className="text-2xl font-bold text-black">
                            Research-Backed Formulations
                        </h4>
                        <h5 className="text-lg font-medium text-black">
                            Formulated with Clinically Tested Ingredients
                        </h5>
                        <p className="text-gray-600 leading-relaxed">
                            We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.
                        </p>
                        <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-8 rounded transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop"
                            alt="Scientific Formulation"
                            className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
