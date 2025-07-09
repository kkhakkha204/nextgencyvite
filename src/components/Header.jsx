import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Scroll handler for hide/show header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsServiceDropdownOpen(false);
    }, [location]);

    const navigationItems = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Giới thiệu', path: '/about' },
        {
            name: 'Dịch vụ',
            path: '/services',
            dropdown: [
                { name: 'AI & Data', path: '/services/ai-data' },
                { name: 'Google Ads', path: '/services/google-ads' },
                { name: 'Facebook Ads', path: '/services/facebook-ads' },
                { name: 'Website & Landing Page', path: '/services/website-landing-page' },
                { name: 'TikTok Ads', path: '/services/tiktok-ads' },
                { name: 'Facebook CRM', path: '/services/facebook-crm' },
                { name: 'Marketing Outsource', path: '/services/marketing-outsource' },
            ]
        },
        { name: 'Dự án', path: '/projects' },
        { name: 'Tin tức', path: '/news' },
    ];

    const isActiveRoute = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServiceDropdown = () => {
        setIsServiceDropdownOpen(!isServiceDropdownOpen);
    };

    return (
        <>
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                } animate-fade-in-down`}
            >
                <div className="max-w-[1380px] mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="block">
                                {/* Desktop Logo */}
                                <img
                                    src="/logo-desktop.png"
                                    alt="Nextgency Logo"
                                    className="hidden sm:block h-8 lg:h-10 w-auto object-contain"
                                />
                                {/* Mobile Logo */}
                                <img
                                    src="/logo-mobile.png"
                                    alt="Nextgency Logo"
                                    className="block sm:hidden h-8 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center space-x-1">
                            <div className="bg-gray-50 rounded-full p-2 flex items-center space-x-1">
                                {navigationItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-1 hover:bg-gray-100 ${
                                                        isActiveRoute(item.path) ? 'bg-black text-white' : 'text-gray-700'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="w-4 h-4" />
                                                </button>

                                                {/* Dropdown Menu */}
                                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                                    <div className="py-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className={`block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                    isActiveRoute(subItem.path) ? 'text-black font-medium bg-gray-50' : 'text-gray-700'
                                                                }`}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 ${
                                                    isActiveRoute(item.path) ? 'bg-black text-white' : 'text-gray-700'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden xl:flex items-center space-x-4">
                            <Link
                                to="/contact"
                                className="group relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 animate-gradient-shift"
                            >
                                <span>Hợp tác ngay</span>
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 xl:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={toggleMobileMenu}
                    />
                    <div className="absolute top-0 left-0 right-0 bg-white animate-slide-down">
                        <div className="pt-20 pb-8 px-6">
                            <nav className="space-y-2">
                                {navigationItems.map((item) => (
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={toggleServiceDropdown}
                                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                                                        isActiveRoute(item.path) ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                                        isServiceDropdownOpen ? 'rotate-180' : ''
                                                    }`} />
                                                </button>

                                                {/* Mobile Dropdown */}
                                                <div className={`overflow-hidden transition-all duration-300 ${
                                                    isServiceDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                    <div className="pl-4 space-y-1 mt-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className={`block px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                                                                    isActiveRoute(subItem.path) ? 'bg-gray-100 text-black font-medium' : 'text-gray-600 hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                                    isActiveRoute(item.path) ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Mobile CTA Button */}
                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="group flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 animate-gradient-shift"
                                >
                                    <span>Hợp tác ngay</span>
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer to prevent content from going under fixed header */}
            <div className="h-16 lg:h-20" />

            <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease-in-out infinite;
        }
      `}</style>
        </>
    );
};

export default Header;