export default function EcoSection() {
    return (
        <section className="bg-[#F1F8E9] py-20 px-6 md:px-12">
            <div className="max-w-[1540px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Image */}
                <div className="flex-1 relative">
                    {/* Decorative leaf shape placeholder - mimicking the design */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-tr-3xl rounded-bl-3xl z-0"></div>

                    <img
                        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
                        alt="Manufacturing Facility"
                        className="rounded-2xl shadow-xl w-full object-cover h-64 md:h-96 relative z-10"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold text-black">
                        Eco-Conscious Manufacturing
                    </h2>
                    <h3 className="text-xl font-medium text-black">
                        Sustainable from Source to Shelf
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.
                    </p>
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-8 rounded transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
