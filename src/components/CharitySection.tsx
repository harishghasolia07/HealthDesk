import { Heart, Activity, Droplet } from 'lucide-react';

export default function CharitySection() {
    return (
        <section className="py-20 px-6 md:px-12 bg-[#7BAFD4] text-white text-center">
            <div className="max-w-[1540px] mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our Charitable Initiatives
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                    Health Care Desk Gives Back
                </h3>
                <p className="text-lg opacity-90">
                    At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
                </p>
            </div>

            {/* Charity Logos Placeholder - using Icons and Text to simulate logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90">
                <div className="flex items-center gap-2">
                    <Activity size={48} strokeWidth={1.5} />
                    <div className="text-left leading-tight">
                        <div className="font-bold">Prostate Cancer</div>
                        <div>Foundation</div>
                        <div className="text-xs opacity-75">Curing Together.</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-4xl font-black tracking-tighter">A</div>
                    <div className="text-left leading-none text-sm font-bold">
                        <div>AMERICAN</div>
                        <div>TINNITUS</div>
                        <div>ASSOCIATION</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Droplet size={40} strokeWidth={1.5} />
                    <div className="text-left leading-none">
                        <div className="text-xl font-serif">U.S. PAIN</div>
                        <div className="text-xs tracking-widest">FOUNDATION</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-4xl font-bold">A</div>
                    <div className="text-left leading-none text-sm font-bold">
                        <div>American</div>
                        <div>Diabetes</div>
                        <div>Association®</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Heart size={40} fill="white" />
                    <div className="text-left leading-none text-sm font-bold">
                        <div>American</div>
                        <div>Heart</div>
                        <div>Association®</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
