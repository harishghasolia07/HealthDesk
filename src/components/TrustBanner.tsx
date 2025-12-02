import { Leaf, Rabbit, ShieldCheck, Heart, Dna } from 'lucide-react';

const trustItems = [
    { icon: Leaf, label: 'All Natural' },
    { icon: Rabbit, label: 'Cruelty-Free' },
    { icon: ShieldCheck, label: 'Money-back Guarantee' },
    { icon: Heart, label: 'Giving back' },
    { icon: Dna, label: 'Non-GMO' },
];

export default function TrustBanner() {
    return (
        <section className="py-16 px-6 md:px-12 bg-blue-50/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-2">
                    A Brand That You Can Trust
                </h2>
                <p className="text-gray-600">
                    Our results-driven supplements are made with premium & safe ingredients
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {trustItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                        <div className="text-blue-600">
                            <item.icon size={48} strokeWidth={1.5} />
                        </div>
                        <span className="text-blue-600 font-medium text-sm md:text-base">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
