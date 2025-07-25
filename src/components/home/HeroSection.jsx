import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef(null);
    const containerRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const mainImageRef = useRef(null);
    const overlayRef = useRef(null);
    const videoCardRef = useRef(null);
    const textContentRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth parallax for text content
            gsap.to(textContentRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Image container parallax - moves slower
            gsap.to(imageWrapperRef.current, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Main image parallax - slight zoom and move
            gsap.fromTo(mainImageRef.current,
                {
                    scale: 1.3,
                    yPercent: 0
                },
                {
                    scale: 1.1,
                    yPercent: -10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );

            // Overlay opacity change on scroll
            gsap.to(overlayRef.current, {
                opacity: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "50% top",
                    scrub: 1
                }
            });

            // Video card parallax - moves faster than image
            gsap.to(videoCardRef.current, {
                yPercent: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Subtle float animation for video card
            gsap.to(videoCardRef.current, {
                y: -15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleVideoPlay = () => {
        setIsVideoPlaying(!isVideoPlaying);
        // Implement video play logic here
    };

    return (
        <section ref={heroRef} className="relative h-[900px] lg:min-h-screen bg-white overflow-hidden">

            {/* Content Container */}
            <div ref={containerRef} className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Text Content with Description */}
                    <div ref={textContentRef} className="relative py-[60px] lg:py-[90px] z-10">
                        <div className="max-w-6xl mx-auto">
                            {/* Title and Description Container */}
                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-5">
                                {/* Left: Title */}
                                <div className="lg:flex-1">
                                    <h1 className="text-[32px] lg:text-[52px] font-archivo text-black leading-none mb-2 uppercase tracking-tight">
                                        Chuyển đổi số
                                    </h1>
                                    <h2 className="text-[48px] lg:text-[90px] font-black leading-none tracking-tight">
                    <span className="text-black">
                      NEXTGENCY
                    </span>
                                    </h2>
                                </div>

                                {/* Right: Description */}
                                <div className="lg:flex-1 lg:text-right">
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md lg:ml-auto">
                                        Đối tác tin cậy trong hành trình chuyển đổi số.
                                        Chúng tôi mang đến giải pháp công nghệ tiên tiến,
                                        giúp doanh nghiệp bứt phá trong kỷ nguyên số.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons - Centered */}
                            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors duration-300">
                                    Khám phá dịch vụ
                                </button>
                                <button className="px-10 py-4 bg-white border-2 border-black text-black rounded-full font-medium hover:bg-gray-50 transition-colors duration-300">
                                    Liên hệ tư vấn
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div ref={imageWrapperRef} className="relative max-w-6xl mx-auto -mt-10">
                        <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                            {/* Image container with proper aspect ratio */}
                            <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                                <img
                                    ref={mainImageRef}
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                                    alt="Digital transformation"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient overlay */}
                                <div
                                    ref={overlayRef}
                                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Floating Video Card */}
                        <div
                            ref={videoCardRef}
                            className="absolute -bottom-16 right-8 sm:right-12 lg:right-16 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500"
                            style={{ width: 'min(90vw, 320px)' }}
                        >
                            <div className="relative aspect-video bg-gray-900">
                                {/* Video thumbnail or actual video */}
                                <img
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074"
                                    alt="Company video"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Play button - positioned at bottom right */}
                                <button
                                    onClick={handleVideoPlay}
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group hover:bg-white transition-all duration-300 hover:scale-110"
                                    aria-label="Play video"
                                >
                                    <Play
                                        size={20}
                                        className="text-black ml-0.5 group-hover:scale-110 transition-transform duration-300"
                                        fill="currentColor"
                                    />
                                </button>

                                {/* Video title */}
                                <div className="absolute top-4 left-4 right-4">
                                    <p className="text-white font-medium text-sm">Câu chuyện Nextgency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra space for scroll and video card */}
            <div className="h-96" />
        </section>
    );
};

export default HeroSection;