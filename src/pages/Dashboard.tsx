import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import BestSellers from '../components/BestSellers';
import TrustBanner from '../components/TrustBanner';
import FeatureSection from '../components/FeatureSection';
import EcoSection from '../components/EcoSection';
import CharitySection from '../components/CharitySection';
import Testimonials from '../components/Testimonials';

export default function Dashboard() {
    return (
        <div className="bg-white">
            <Hero />
            <CategorySection />
            <BestSellers />
            <TrustBanner />
            <FeatureSection />
            <EcoSection />
            <CharitySection />
            <Testimonials />
        </div>
    );
}
