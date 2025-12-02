export default function Newsletter() {
    return (
        <section className="py-12 px-6 md:px-12 bg-[#1976D2] text-white">
            <div className="max-w-[1540px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Let's Grow Together</h2>
                    <p className="opacity-90">We'll keep it simple. Only the news and updates you need.</p>
                </div>

                <div className="flex w-full md:w-auto max-w-xl">
                    <input
                        type="email"
                        placeholder="Please Enter Your Email"
                        className="flex-1 px-6 py-4 text-gray-900 outline-none border border-white/20 bg-transparent text-white placeholder:text-white/70"
                    />
                    <button className="bg-white text-black font-bold px-10 py-4 hover:bg-gray-100 transition-colors">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
