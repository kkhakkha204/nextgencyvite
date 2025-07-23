import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Hook để detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                || window.innerWidth <= 768
                || ('ontouchstart' in window);
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        // Không setup event listeners nếu là mobile
        if (isMobile) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Track mouse movement
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isMobile]);

    // Smooth follower animation with slower delay
    useEffect(() => {
        if (isMobile) return;

        const updateFollower = () => {
            setFollowerPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.12, // Slower follow speed
                y: prev.y + (mousePosition.y - prev.y) * 0.12
            }));
        };

        const animationId = requestAnimationFrame(updateFollower);
        return () => cancelAnimationFrame(animationId);
    }, [mousePosition, followerPosition, isMobile]);

    // Không render gì nếu là mobile
    if (isMobile) return null;

    return (
        <>
            {/* Main cursor dot - Enhanced design */}
                <div
                    className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all ease-out ${
                        isHovering ? 'scale-150' : isClicking ? 'scale-75' : 'scale-100'
                    }`}
                    style={{
                        transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
                    }}
                >
                    <div className={`w-5 h-5 rounded-full transition-all  ${
                        isHovering
                            ? 'bg-[#c08dfe] shadow-lg shadow-purple-300/50'
                            : isClicking
                                ? 'bg-[#c08dfe] shadow-xl shadow-purple-400/60'
                                : 'bg-white shadow-md'
                    }`}>
                        {/* Inner glow dot */}
                        <div className={`absolute inset-0.5 rounded-full transition-all ${
                            isHovering
                                ? 'bg-white shadow-inner'
                                : isClicking
                                    ? 'bg-white shadow-inner'
                                    : 'bg-black'
                        }`} />
                    </div>
                </div>

            {/* Gradient circle follower - Slower movement */}
                {/* Outer ambient glow */}
                <div
                    className={`fixed top-0 left-0 pointer-events-none z-[9996] transition-all duration-600 ease-out`}
                    style={{
                        transform: `translate(${followerPosition.x - 60}px, ${followerPosition.y - 60}px)`,
                    }}
                >
                    <div
                        className="w-40 h-40 rounded-full blur-xl"
                        style={{
                            background: `radial-gradient(circle, #c08dfe25 0%, #c08dfe15 40%, transparent 70%)`,
                        }}
                    />
                </div>
        </>
    );
};

export default CustomCursor;