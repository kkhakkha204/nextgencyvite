import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Bot, Target, Smartphone, Globe, Music, Users, BarChart3 } from 'lucide-react';

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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navigationItems = [
        { name: 'Giới thiệu', path: '/about' },
        {
            name: 'Dịch vụ',
            path: '/services',
            dropdown: [
                { name: 'AI & Data', path: '/services/ai-data', icon: Bot },
                { name: 'Google Ads', path: '/services/google-ads', icon: Target },
                { name: 'Facebook Ads', path: '/services/facebook-ads', icon: Smartphone },
                { name: 'Website & Landing Page', path: '/services/website-landing-page', icon: Globe },
                { name: 'TikTok Ads', path: '/services/tiktok-ads', icon: Music },
                { name: 'Facebook CRM', path: '/services/facebook-crm', icon: Users },
                { name: 'Marketing Outsource', path: '/services/marketing-outsource', icon: BarChart3 },
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
                className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-xl hover:shadow-2xl ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                } fade-down anim-delay-100 anim-normal`}
            >
                <div className="max-w-[1380px] mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[70px] lg:h-[85px]">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="block">
                                {/* Desktop Logo */}
                                <img
                                    src="/assets/images/header/navbarlogo.png"
                                    alt="Nextgency Logo"
                                    className="hidden sm:block h-6 lg:h-8 w-auto object-contain"
                                />
                                {/* Mobile Logo */}
                                <img
                                    src="/assets/images/header/navbarfavicon.png"
                                    alt="Nextgency Logo"
                                    className="block sm:hidden h-8 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center space-x-1">
                            <div className=" rounded-full p-1 bg-gray-50 border-2 border-gray-200 flex items-center space-x-2">
                                {navigationItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 flex items-center space-x-1 ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-black text-white'
                                                            : 'text-black hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="w-5 h-5" />
                                                </button>
                                                {/* Dropdown Menu */}
                                                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-3xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                                    <div className="p-2.5 space-y-2">
                                                        {/* First row: AI & Data, Google Ads */}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Link
                                                                to="/services/ai-data"
                                                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                    isActiveRoute('/services/ai-data') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                                }`}
                                                            >
                                                                <Bot className="w-4 h-4" />
                                                                <span>AI & Data</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/google-ads"
                                                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                    isActiveRoute('/services/google-ads') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                                }`}
                                                            >
                                                                <Target className="w-4 h-4" />
                                                                <span>Google Ads</span>
                                                            </Link>
                                                        </div>

                                                        {/* Second row: Facebook Ads, TikTok Ads */}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Link
                                                                to="/services/facebook-ads"
                                                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                    isActiveRoute('/services/facebook-ads') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                                }`}
                                                            >
                                                                <Smartphone className="w-4 h-4" />
                                                                <span>Facebook Ads</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/tiktok-ads"
                                                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                    isActiveRoute('/services/tiktok-ads') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                                }`}
                                                            >
                                                                <Music className="w-4 h-4" />
                                                                <span>TikTok Ads</span>
                                                            </Link>
                                                        </div>

                                                        {/* Other services - one per row */}
                                                        <Link
                                                            to="/services/website-landing-page"
                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                isActiveRoute('/services/website-landing-page') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                            }`}
                                                        >
                                                            <Globe className="w-4 h-4" />
                                                            <span>Website & Landing Page</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/facebook-crm"
                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                isActiveRoute('/services/facebook-crm') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                            }`}
                                                        >
                                                            <Users className="w-4 h-4" />
                                                            <span>Facebook CRM</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/marketing-outsource"
                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                                                isActiveRoute('/services/marketing-outsource') ? 'text-black font-medium bg-gray-50' : 'text-gray-800'
                                                            }`}
                                                        >
                                                            <BarChart3 className="w-4 h-4" />
                                                            <span>Marketing Outsource</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 flex items-center ${
                                                    isActiveRoute(item.path)
                                                        ? 'bg-black text-white'
                                                        : 'text-black hover:bg-gray-100'
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
                        <div className="hidden xl:flex items-center space-x-4 ">
                            <Link
                                to="/contact"
                                className="relative flex items-center space-x-3 pl-6 pr-1 py-1 bg-gradient-to-r from-[#A4FCFF] via-[#C8A4FE] to-[#5a37c0] text-black rounded-full font-semibold"
                            >
                                <span>Hợp tác ngay</span>
                                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 text-black" />
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="xl:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="w-9 h-9 text-black" />
                            ) : (
                                <Menu className="w-9 h-9 text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                    <div className="h-full bg-white flex flex-col">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between h-[70px] lg:h-[85px] px-6">
                            <div className="flex-shrink-0">
                                <Link to="/" className="block">
                                    <img
                                        src="/assets/images/header/navbarfavicon.png"
                                        alt="Nextgency Logo"
                                        className="h-8 w-auto object-contain"
                                    />
                                </Link>
                            </div>
                            <button
                                onClick={toggleMobileMenu}
                                className="mr-1"
                            >
                                <X className="w-7 h-7 text-black" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex-1 overflow-y-auto px-6">
                            <nav className="space-y-2">
                                {navigationItems.map((item) => (
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={toggleServiceDropdown}
                                                    className={`w-full flex items-center justify-between px-2.5 py-2.5 rounded-3xl text-left text-[16px] font-semibold transition-all duration-200 ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-black text-white'
                                                            : 'text-black hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                                        isServiceDropdownOpen ? 'rotate-180' : ''
                                                    }`} />
                                                </button>

                                                {/* Mobile Dropdown */}
                                                <div className={`overflow-hidden transition-all duration-300 ${
                                                    isServiceDropdownOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                    <div className=" space-y-2 mt-2">
                                                        {/* First row: AI & Data, Google Ads */}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Link
                                                                to="/services/ai-data"
                                                                className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                    isActiveRoute('/services/ai-data') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                <Bot className="w-4 h-4" />
                                                                <span>AI & Data</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/google-ads"
                                                                className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                    isActiveRoute('/services/google-ads') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                <Target className="w-4 h-4" />
                                                                <span>Google Ads</span>
                                                            </Link>
                                                        </div>

                                                        {/* Second row: Facebook Ads, TikTok Ads */}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Link
                                                                to="/services/facebook-ads"
                                                                className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                    isActiveRoute('/services/facebook-ads') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                <Smartphone className="w-4 h-4" />
                                                                <span>Facebook Ads</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/tiktok-ads"
                                                                className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                    isActiveRoute('/services/tiktok-ads') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                <Music className="w-4 h-4" />
                                                                <span>TikTok Ads</span>
                                                            </Link>
                                                        </div>

                                                        {/* Other services - one per row */}
                                                        <Link
                                                            to="/services/website-landing-page"
                                                            className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                isActiveRoute('/services/website-landing-page') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            <Globe className="w-4 h-4" />
                                                            <span>Website & Landing Page</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/facebook-crm"
                                                            className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                isActiveRoute('/services/facebook-crm') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            <Users className="w-4 h-4" />
                                                            <span>Facebook CRM</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/marketing-outsource"
                                                            className={`flex items-center space-x-2 px-2.5 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 ${
                                                                isActiveRoute('/services/marketing-outsource') ? 'bg-gray-100 text-black font-medium' : 'text-gray-800 hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            <BarChart3 className="w-4 h-4" />
                                                            <span>Marketing Outsource</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`block px-2.5 py-2.5 rounded-3xl text-[16px] font-semibold transition-all duration-200 ${
                                                    isActiveRoute(item.path)
                                                        ? 'bg-black text-white'
                                                        : 'text-black hover:bg-gray-50'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Mobile CTA Button */}
                            <div className="relative flex items-center justify-center mt-4">
                                <Link
                                    to="/contact"
                                    className=" flex items-center justify-center space-x-3 pl-6 pr-1 py-1 bg-gradient-to-r from-[#A4FCFF] via-[#C8A4FE] to-[#5a37c0] text-[16px] text-black rounded-full font-semibold"
                                >
                                    <span>Hợp tác ngay</span>
                                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
