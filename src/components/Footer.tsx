import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-16 pb-8 px-6 md:px-12 text-sm text-gray-600">
            <div className="max-w-[1540px] mx-auto flex flex-col md:flex-row gap-12 mb-12">
                {/* Address Section */}
                <div className="w-full md:w-[300px] space-y-4 pt-2">
                    <div className="flex items-center gap-2 mb-6">
                        {/* Logo */}
                        <div className="relative w-10 h-10">
                            <img
                                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&auto=format&fit=crop"
                                alt="Health Care"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-blue-900 font-bold text-xl tracking-wide">HEALTH CARE</span>
                    </div>
                    <div className="text-gray-600 space-y-2 text-[15px] leading-relaxed">
                        <p>
                            Address: 7823 Red Oak Trail, Austin,<br />
                            TX, 78745, United States
                        </p>
                        <p>
                            Phone: (512) 555-2376
                        </p>
                        <p>
                            Email: Ereforce@outlook.com
                        </p>
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gray-300 self-stretch mx-4"></div>

                {/* Products Section */}
                <div className="flex-1">
                    <h4 className="text-blue-600 font-bold mb-8 text-xl">Our Products</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Vita Renew</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Testobites</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Audizen</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Nerve Flow</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Uro flow</Link></li>
                        </ul>

                        {/* Column 2 */}
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Vita Renew</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Testobites</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Audizen</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Nerve Flow</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Memof</Link></li>
                        </ul>

                        {/* Column 3 */}
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Vita Renew</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Testobites</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Audizen</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Nerve Flow</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Derma care</Link></li>
                        </ul>

                        {/* Column 4 */}
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Vita Renew</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Testobites</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Audizen</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">Nerve Flow</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">TestoZen</Link></li>
                            <li><Link to="#" className="hover:text-blue-600 transition-colors">True Fem</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-[1540px] mx-auto border-t border-gray-200 pt-8 text-center space-y-4">
                <p className="text-xs text-gray-500 leading-relaxed">
                    These statements have not been evaluated by the Food and Drug Administration.
                    These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
                </p>

                {/* Payment Icons */}
                <div className="flex justify-center gap-4">
                    <div className="h-8 w-12 bg-white border rounded flex items-center justify-center p-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="w-full h-full object-contain" />
                    </div>
                    <div className="h-8 w-12 bg-white border rounded flex items-center justify-center p-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="w-full h-full object-contain" />
                    </div>
                    <div className="h-8 w-12 bg-white border rounded flex items-center justify-center p-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="w-full h-full object-contain" />
                    </div>
                    <div className="h-8 w-12 bg-white border rounded flex items-center justify-center p-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/2560px-Discover_Card_logo.svg.png" alt="Discover" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-[1540px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-8">
                <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-blue-600">Terms And Conditions</Link>
                    <span>|</span>
                    <Link to="#" className="hover:text-blue-600">Privacy Policy</Link>
                    <span>|</span>
                    <Link to="#" className="hover:text-blue-600">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}
