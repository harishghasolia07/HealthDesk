

export default function PreFooter() {
    return (
        <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-[1540px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Have a Question */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">Have a Question?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Check out our FAQs where we answer the most commonly asked questions
                    </p>
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-8 rounded transition-colors inline-block mt-2">
                        Read FAQs
                    </button>
                </div>

                {/* Connect With Us */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">Connect With Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Enjoy free shipping for all orders.
                    </p>
                    <p className="text-2xl font-extrabold text-black">
                        1-800-822-7777
                    </p>
                </div>

                {/* We're Social */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">We're Social</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Like us, love us, follow us!
                    </p>
                </div>
            </div>
        </section>
    );
}
