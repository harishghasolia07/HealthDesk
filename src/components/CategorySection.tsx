import { Scale, Activity, Smile, Stethoscope, User } from 'lucide-react';

const categories = [
    {
        title: 'Weight Loss',
        description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you',
        icon: Scale,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        title: 'Nerve Pain',
        description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
        icon: Activity,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Skin Care',
        description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
        icon: Smile,
        color: 'bg-teal-100 text-teal-600',
    },
    {
        title: 'Men’s Health',
        description: 'Discover men’s health products designed to boost energy, strength, and overall well-being.',
        icon: Stethoscope,
        color: 'bg-blue-50 text-blue-500',
    },
    {
        title: 'Women’s Health',
        description: 'Explore women’s health products to support hormonal balance and overall wellness',
        icon: User,
        color: 'bg-pink-100 text-pink-500',
    },
];

export default function CategorySection() {
    return (
        <section className="py-20 px-6 md:px-12 bg-white text-center">
            <div className="max-w-[1540px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Nutrition Solutions
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-12">
                    for Your Complete Well-Being
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-emerald-50/50 p-6 rounded-3xl flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cat.color}`}>
                                <cat.icon size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">{cat.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                                {cat.description}
                            </p>
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full text-sm transition-colors">
                                Buy now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
