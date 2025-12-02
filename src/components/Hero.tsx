export default function Hero() {
    return (
        <section className="bg-white pb-16 md:pb-24 pt-4 px-6">
            <div className="max-w-[1540px] mx-auto bg-[#F8F9FA] rounded-[20px] px-8 md:px-20 py-16 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden relative min-h-[500px]">
                {/* Text Content */}
                <div className="flex-1 max-w-2xl space-y-8 z-10 py-12 md:py-20">
                    <h1 className="text-[48px] md:text-[64px] font-bold text-black leading-[1.1] tracking-tight">
                        Health Desk Clinic: <br className="hidden md:block" />
                        All Natural Supplements
                    </h1>
                    <p className="text-gray-600 text-[18px] leading-relaxed max-w-xl">
                        Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
                    </p>
                    <button className="bg-[#1976D2] hover:bg-[#1565C0] text-white font-bold py-4 px-12 rounded-full transition-colors shadow-lg shadow-blue-900/20 text-[18px]">
                        Shop Now
                    </button>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center md:justify-end relative self-end">
                    {/* Doctor Image - Local asset */}
                    <div className="relative w-full max-w-[450px] md:max-w-[550px] -mb-4 mr-[-20px]">
                        <img
                            src="/hero.jpg"
                            alt="Doctor"
                            className="object-contain w-full h-auto mix-blend-multiply contrast-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
