import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Dot, ArrowUpRight, Bot, Target, Smartphone, Globe, Music, Users, BarChart3 } from 'lucide-react';

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
                className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-all duration-500 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                } `}
            >
                <div className="max-w-[1380px] mx-auto px-6 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-[70px] lg:h-[85px]">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="block">
                                {/* Desktop Logo */}
                                <img
                                    src="/assets/images/header/navbarlogoblack.png"
                                    alt="Nextgency Logo"
                                    className="hidden sm:block h-6 lg:h-7 w-auto object-contain"
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
                        <nav className="hidden xl:flex items-center space-x-1 rounded-full">
                            <div className=" rounded-full p-1  flex items-center space-x-2">
                                {navigationItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 flex items-center space-x-1 ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-black text-white'
                                                            : 'text-black hover:bg-[#e9d5ff]'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <Dot className="w-6 h-6" />
                                                </button>
                                                {/* Dropdown Menu */}
                                                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-3xl border border-[#d1d9ef] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                                    <div className="p-2.5 space-y-2">
                                                        {/* First row: AI & Data, Google Ads */}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <Link
                                                                to="/services/ai-data"
                                                                className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                    isActiveRoute('/services/ai-data') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
                                                                }`}
                                                            >
                                                                <Bot className="w-4 h-4" />
                                                                <span>AI & Data</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/google-ads"
                                                                className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                    isActiveRoute('/services/google-ads') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
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
                                                                className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                    isActiveRoute('/services/facebook-ads') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
                                                                }`}
                                                            >
                                                                <Smartphone className="w-4 h-4" />
                                                                <span>Facebook Ads</span>
                                                            </Link>
                                                            <Link
                                                                to="/services/tiktok-ads"
                                                                className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                    isActiveRoute('/services/tiktok-ads') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
                                                                }`}
                                                            >
                                                                <Music className="w-4 h-4" />
                                                                <span>TikTok Ads</span>
                                                            </Link>
                                                        </div>

                                                        {/* Other services - one per row */}
                                                        <Link
                                                            to="/services/website-landing-page"
                                                            className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                isActiveRoute('/services/website-landing-page') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
                                                            }`}
                                                        >
                                                            <Globe className="w-4 h-4" />
                                                            <span>Website & Landing Page</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/facebook-crm"
                                                            className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                isActiveRoute('/services/facebook-crm') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
                                                            }`}
                                                        >
                                                            <Users className="w-4 h-4" />
                                                            <span>Facebook CRM</span>
                                                        </Link>

                                                        <Link
                                                            to="/services/marketing-outsource"
                                                            className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[15px] transition-colors duration-200 border border-[#d1d9ef] ${
                                                                isActiveRoute('/services/marketing-outsource') ? 'text-white bg-black hover:bg-black' : 'text-gray-800 hover:bg-[#e9d5ff]'
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
                                                className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 flex items-center ${
                                                    isActiveRoute(item.path)
                                                        ? 'bg-black text-white'
                                                        : 'text-black hover:bg-[#e9d5ff]'
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
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group animate-gradient-shift"
                                style={{
                                    backgroundSize: '200% 200%'
                                }}
                            >
        <span className="">
            Hợp tác ngay
        </span>
                                <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                                </div>
                            </Link>

                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="xl:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="w-8 h-8 text-black" strokeWidth={1.5}/>
                            ) : (
                                <Menu className="w-8 h-8 text-black" strokeWidth={1.5}/>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                    {/* Backdrop with fade animation */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
                        onClick={toggleMobileMenu}
                    />

                    {/* Menu Panel */}
                    <div className="relative h-full bg-white flex flex-col animate-slide-in-right">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between h-[70px] lg:h-[85px] px-6 animate-fade-in-delay-100">
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
                                className="mr-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <X className="w-6 h-6 text-black" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex-1 overflow-y-auto px-6 pt-4">
                            <nav className="space-y-3">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={item.name}
                                        className="animate-fade-in-up"
                                        style={{
                                            animationDelay: `${150 + index * 100}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        {item.dropdown ? (
                                            <div className="space-y-0">
                                                <button
                                                    onClick={toggleServiceDropdown}
                                                    className={`w-full flex items-center justify-between px-3 py-3 rounded-3xl text-left text-[15px] font-medium transition-all duration-300 ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-black text-white shadow-lg'
                                                            : 'text-black hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-out ${
                                                        isServiceDropdownOpen ? 'rotate-180' : ''
                                                    }`} />
                                                </button>

                                                {/* Mobile Dropdown with smooth animation */}
                                                <div className={`transition-all duration-[1200ms] ease-out ${
                                                    isServiceDropdownOpen
                                                        ? 'max-h-[500px] opacity-100 mt-4 transform translate-y-0'
                                                        : 'max-h-0 opacity-0 mt-0 transform -translate-y-2'
                                                } overflow-hidden`}>
                                                    <div className="py-4 px-2 rounded-3xl ">
                                                        <div className="space-y-3">
                                                            {/* First row: AI & Data, Google Ads */}
                                                            <div className="grid grid-cols-2 gap-3">
                                                                <Link
                                                                    to="/services/ai-data"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/ai-data')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Bot className="w-4 h-4 flex-shrink-0" />
                                                                    <span className="truncate">AI & Data</span>
                                                                </Link>
                                                                <Link
                                                                    to="/services/google-ads"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/google-ads')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Target className="w-4 h-4 flex-shrink-0" />
                                                                    <span className="truncate">Google Ads</span>
                                                                </Link>
                                                            </div>

                                                            {/* Second row: Facebook Ads, TikTok Ads */}
                                                            <div className="grid grid-cols-2 gap-3">
                                                                <Link
                                                                    to="/services/facebook-ads"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/facebook-ads')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Smartphone className="w-4 h-4 flex-shrink-0" />
                                                                    <span className="truncate">Facebook Ads</span>
                                                                </Link>
                                                                <Link
                                                                    to="/services/tiktok-ads"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/tiktok-ads')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Music className="w-4 h-4 flex-shrink-0" />
                                                                    <span className="truncate">TikTok Ads</span>
                                                                </Link>
                                                            </div>

                                                            {/* Other services - single column */}
                                                            <div className="space-y-2">
                                                                <Link
                                                                    to="/services/website-landing-page"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/website-landing-page')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Globe className="w-4 h-4 flex-shrink-0" />
                                                                    <span>Website & Landing Page</span>
                                                                </Link>

                                                                <Link
                                                                    to="/services/facebook-crm"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/facebook-crm')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <Users className="w-4 h-4 flex-shrink-0" />
                                                                    <span>Facebook CRM</span>
                                                                </Link>

                                                                <Link
                                                                    to="/services/marketing-outsource"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] border border-[#d1d9ef] transition-all duration-200 ${
                                                                        isActiveRoute('/services/marketing-outsource')
                                                                            ? 'text-white bg-black hover:bg-black shadow-md'
                                                                            : 'text-gray-800 hover:bg-white hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    <BarChart3 className="w-4 h-4 flex-shrink-0" />
                                                                    <span>Marketing Outsource</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`block px-3 py-3 rounded-3xl text-[15px] font-medium transition-all duration-200  ${
                                                    isActiveRoute(item.path)
                                                        ? 'bg-black text-white shadow-lg'
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
                            <div className="relative flex items-center justify-center mt-8 mb-6 animate-fade-in-up" style={{
                                animationDelay: `${150 + navigationItems.length * 100 + 100}ms`,
                                animationFillMode: 'both'
                            }}>
                                <Link
                                    to="/contact"
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg animate-gradient-shift"
                                    style={{
                                        backgroundSize: '200% 100%'
                                    }}
                                >
                                    <span className="relative z-10">Hợp tác ngay</span>
                                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center neu-shadow-xs relative z-10">
                                        <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 hover:rotate-45" />
                                    </div>

                                    {/* Gradient overlay for extra shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* CSS Animations - Thêm vào file CSS hoặc styled-components */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-in-right {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes gradient-shift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    opacity: 0;
                }

                .animate-fade-in-delay-100 {
                    animation: fade-in-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both;
                }

                .animate-gradient-shift {
                    animation: gradient-shift 3s ease-in-out infinite;
                }

                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default Header;
