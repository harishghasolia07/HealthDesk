import { Star, Facebook, Twitter, Send, Linkedin } from 'lucide-react';

const testimonials = [
    {
        product: 'TestoBites',
        productImage: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1000&auto=format&fit=crop', // Placeholder
        rating: 5,
        text: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
        author: "Ryan R."
    },
    {
        product: 'Vita Renew',
        productImage: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000&auto=format&fit=crop', // Placeholder
        rating: 5,
        text: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
        author: "Jamie Fields"
    },
    {
        product: 'Nerve Freedom',
        productImage: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop', // Placeholder
        rating: 5,
        text: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
        author: "Anonymous"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-6 md:px-12 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-16">
                Verified Customer Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1540px] mx-auto mb-20">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-cyan-50/50 p-8 rounded-3xl text-left relative pt-16">
                        {/* Product Image Floating */}
                        <div className="absolute -top-12 left-8 w-24 h-24 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center">
                            <img
                                src={item.productImage}
                                alt={item.product}
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-black mb-2 ml-2">{item.product}</h3>
                        <div className="flex gap-1 mb-6 ml-2">
                            {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {item.text}
                        </p>

                        <p className="font-medium text-black">
                            - {item.author}
                        </p>
                    </div>
                ))}
            </div>

            {/* Social Follow Section */}
            <div className="flex flex-col items-center space-y-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 42C32.5 36 40 28 40 18C40 9.5 33.5 4 26 4C22 4 19 7 19 7C19 7 16 4 12 4C4.5 4 0 9.5 0 18C0 28 7.5 36 21 42Z" fill="#29B6F6" />
                            <path d="M21 13V27M14 20H28" stroke="white" strokeWidth="5" strokeLinecap="round" />
                            <path d="M8 14H16V26H8V14Z" fill="#0288D1" fillOpacity="0.2" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                    </div>
                    <div className="flex flex-col -space-y-1 justify-center text-left">
                        <span className="text-[#0D47A1] font-extrabold text-[24px] leading-none tracking-tight">HEALTH DESK</span>
                        <span className="text-[#40C4FF] text-[13px] font-bold tracking-[0.2em] uppercase ml-0.5">Clinic</span>
                    </div>
                </div>

                {/* Follow Us Button */}
                <button className="border border-[#29B6F6] text-[#29B6F6] hover:bg-[#29B6F6] hover:text-white font-medium py-3 px-12 rounded transition-colors text-lg">
                    Follow Us
                </button>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a href="#" className="w-12 h-12 bg-[#29B6F6] rounded-full flex items-center justify-center text-white hover:bg-[#0288D1] transition-colors">
                        <Facebook size={24} fill="white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#29B6F6] rounded-full flex items-center justify-center text-white hover:bg-[#0288D1] transition-colors">
                        <Twitter size={24} fill="white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#29B6F6] rounded-full flex items-center justify-center text-white hover:bg-[#0288D1] transition-colors">
                        <Send size={24} fill="white" className="ml-1" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#29B6F6] rounded-full flex items-center justify-center text-white hover:bg-[#0288D1] transition-colors">
                        <Linkedin size={24} fill="white" />
                    </a>
                </div>
            </div>
        </section>
    );
}
