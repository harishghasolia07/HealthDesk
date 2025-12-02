import { Star } from 'lucide-react';

const products = [
    {
        name: 'Dent Pure',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop',
        rating: 5,
    },
    {
        name: 'True Fem',
        image: 'https://plus.unsplash.com/premium_photo-1664373622216-648a6861e9e4?fm=jpg&q=80&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB0YWtpbmclMjBwaWxsfGVufDB8fDB8fHww',
        rating: 5,
    },
    {
        name: 'Vita Renew',
        image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800&auto=format&fit=crop',
        rating: 5,
    },
    {
        name: 'ProstaZen',
        image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop',
        rating: 5,
    },
    {
        name: 'Nerve Freedom',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
        rating: 5,
    },
];

export default function BestSellers() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white">
            <div className="max-w-[1540px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Our Best Sellers
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-8 border-l-2 border-gray-200 pl-4">
                        <button className="text-black font-bold text-lg">Results-Driven</button>
                        <button className="text-black font-bold text-lg border-l-2 border-black pl-8">All-Natural</button>
                        <button className="text-black font-bold text-lg border-l-2 border-black pl-8">Non-GMO</button>
                        <button className="text-black font-bold text-lg border-l-2 border-black pl-8">Cruelty-Free</button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-2xl mb-4 w-full aspect-square overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                            <div className="flex gap-1 mb-4">
                                {[...Array(product.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-8 rounded-none w-full transition-colors">
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
