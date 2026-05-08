import React from 'react';

const logos = [
    { id: 1, src: 'assets/images/partner/1900.webp', alt: '1900 Hair Salon' },
    { id: 4, src: 'assets/images/partner/partner4.png', alt: 'Coachio' },
    { id: 5, src: 'assets/images/partner/partner5.png', alt: 'Telenmate' },
    { id: 6, src: 'assets/images/partner/partner6.png', alt: 'Nghe content' },
    { id: 9, src: 'assets/images/partner/partner9.png', alt: 'Safiman' },
    { id: 10, src: 'assets/images/partner/partner10.png', alt: 'Usolab' },
    { id: 11, src: 'assets/images/partner/woodplus.webp', alt: 'Woodplus' },
    { id: 13, src: 'assets/images/partner/partner13.png', alt: 'Aloha villa' },
    { id: 14, src: 'assets/images/partner/logo_EAC.webp', alt: 'EAC Group' },
    { id: 16, src: 'assets/images/partner/partner16.png', alt: 'Home English' },
    { id: 17, src: 'assets/images/partner/partner17.png', alt: 'TeaHui' },
    { id: 18, src: 'assets/images/partner/partner18.png', alt: 'Hana HP Group' },
    { id: 19, src: 'assets/images/partner/jimto.webp', alt: 'Jim To' },
    { id: 20, src: 'assets/images/partner/partner20.png', alt: 'Usobebe' },
    { id: 21, src: 'assets/images/partner/partner21.png', alt: 'Nocti' },
    { id: 24, src: 'assets/images/partner/SFemme05x.webp', alt: 'S-Femme' },
    { id: 25, src: 'assets/images/partner/partner25.png', alt: 'Beauty Summit' },
    { id: 26, src: 'assets/images/partner/rino.webp', alt: 'Rino' },
    { id: 27, src: 'assets/images/partner/partner29.png', alt: 'Kat Skin' },
    { id: 28, src: 'assets/images/partner/partner30.png', alt: 'Timo' },
    { id: 29, src: 'assets/images/partner/partner31.webp', alt: 'QC House' },
    { id: 30, src: 'assets/images/partner/partner32.webp', alt: 'Topmus Entertainment' },
    { id: 31, src: 'assets/images/partner/partner33.webp', alt: 'Phuc Bani' },
    { id: 32, src: 'assets/images/partner/partner34.webp', alt: 'SRX' },
];

const LogoGroup = ({ duplicate = false }) => (
    <div className="logo-group" aria-hidden={duplicate}>
        {logos.map((logo) => (
            <div key={`${duplicate ? 'duplicate' : 'original'}-${logo.id}`} className="logo-card">
                <div className="logo-frame">
                    <img src={logo.src} alt={logo.alt} className="logo-image" loading="lazy" />
                </div>
            </div>
        ))}
    </div>
);

const InfiniteLogoSlider = () => {
    return (
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-black py-5 md:py-7">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-black via-black/70 to-transparent md:w-32" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-black via-black/70 to-transparent md:w-32" />

            <div className="logo-slider">
                <div className="logo-track">
                    <LogoGroup />
                    <LogoGroup duplicate />
                </div>
            </div>

            <style jsx>{`
                .logo-slider {
                    width: 100%;
                    overflow: hidden;
                }

                .logo-track {
                    display: flex;
                    width: max-content;
                    min-width: max-content;
                    align-items: center;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translate3d(0, 0, 0);
                    animation: scrollLogo 28s linear infinite;
                }

                .logo-group {
                    display: flex;
                    flex-shrink: 0;
                    align-items: center;
                    gap: 1rem;
                    padding-right: 1rem;
                }

                .logo-card {
                    flex-shrink: 0;
                }

                .logo-frame {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 8.5rem;
                    height: 4.5rem;
                    padding: 0.8rem 1.2rem;
                    background: transparent;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
                }

                .logo-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: brightness(0) saturate(100%) invert(1);
                    opacity: 0.9;
                    transform: translateZ(0);
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }

                .logo-card:hover .logo-image {
                    opacity: 1;
                    transform: translateZ(0) scale(1.06);
                }

                @keyframes scrollLogo {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(-50%, 0, 0);
                    }
                }

                @media (min-width: 768px) {
                    .logo-group {
                        gap: 1.5rem;
                        padding-right: 1.5rem;
                    }

                    .logo-frame {
                        width: 10rem;
                        height: 5.25rem;
                        padding: 0.95rem 1.2rem;
                    }
                }

                @media (max-width: 767px) {
                    .logo-track {
                        animation-duration: 20s;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .logo-track {
                        animation: none;
                    }

                    .logo-image {
                        transition: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default InfiniteLogoSlider;
