import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import PreFooter from '../components/PreFooter';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Layout() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Header />

            <main>
                <Outlet />
            </main>

            <PreFooter />
            <Newsletter />
            <Footer />
        </div>
    );
}
