import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white py-6 sticky top-0 z-50">
            <div className="max-w-[1540px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 w-[200px]"> {/* Fixed width for balance */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Custom Logo Shape */}
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 42C32.5 36 40 28 40 18C40 9.5 33.5 4 26 4C22 4 19 7 19 7C19 7 16 4 12 4C4.5 4 0 9.5 0 18C0 28 7.5 36 21 42Z" fill="#29B6F6" />
                            <path d="M21 13V27M14 20H28" stroke="white" strokeWidth="5" strokeLinecap="round" />
                            <path d="M8 14H16V26H8V14Z" fill="#0288D1" fillOpacity="0.2" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                    </div>
                    <div className="flex flex-col -space-y-1 justify-center">
                        <span className="text-[#0D47A1] font-extrabold text-[20px] leading-none tracking-tight">HEALTH DESK</span>
                        <span className="text-[#40C4FF] text-[11px] font-bold tracking-[0.2em] uppercase ml-0.5">Clinic</span>
                    </div>
                </div>

                {/* Navigation & Actions */}
                <div className="hidden md:flex items-center gap-10 text-gray-600 font-medium text-[16px] ml-auto">
                    <Link to="/" className="hover:text-[#0288D1] transition-colors">Home</Link>
                    <Link to="/shop" className="hover:text-[#0288D1] transition-colors">Shop</Link>
                    <Link to="/about" className="hover:text-[#0288D1] transition-colors">About Us</Link>
                    <Link to="/faq" className="hover:text-[#0288D1] transition-colors">FAQ</Link>
                    <Link to="/blog" className="hover:text-[#0288D1] transition-colors">Blog</Link>
                    <Link to="/contact" className="hover:text-[#0288D1] transition-colors">Contact Us</Link>
                    <button className="text-[#90A4AE] hover:text-[#0288D1] transition-colors p-1">
                        <ShoppingBag size={24} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </header>
    );
}
