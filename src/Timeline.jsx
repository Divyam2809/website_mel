import React, { useEffect, useRef, useState } from 'react';

export default function Timeline({ items, isDarkTheme }) {
    const containerRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);
    const [activeIndices, setActiveIndices] = useState([]);

    // Optimize scroll handling with requestAnimationFrame
    useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            animationFrameId = requestAnimationFrame(() => {
                if (!containerRef.current) return;

                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const center = windowHeight / 2;

                const start = rect.top - center;
                const height = rect.height;

                // Calculate progress
                let progress = center - rect.top;

                // Clamping
                if (progress < 0) progress = 0;
                if (progress > height) progress = height;

                setLineHeight(progress);

                // Determine which items should be active based on line progress
                // We assume items are roughly evenly distributed for this visual effect
                // Or we can calculate percentage.
                // There are N items. Each item 'zone' is height / N.
                // If progress > itemIndex * (height / N), activate it.

                const itemSegment = height / items.length;
                const newActiveIndices = items.map((_, idx) => {
                    // Add a little buffer so it activates slightly before the line hits the exact center of the item
                    return progress > (idx * itemSegment) + 50;
                });

                // Only update state if changed to avoid re-renders
                setActiveIndices(newActiveIndices);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [items.length]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '4rem 0'
            }}
        >
            {/* The Background Line (Gray) */}
            <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: 0,
                bottom: 0,
                width: '4px',
                background: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                borderRadius: '4px',
                zIndex: 0
            }} className="timeline-bg-line" />

            {/* The Active Line (Colored - Animates Height) */}
            <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: 0,
                height: `${lineHeight}px`,
                width: '4px',
                background: 'linear-gradient(180deg, #FF9B50 0%, #FF6B6B 100%)',
                borderRadius: '4px',
                zIndex: 0,
                // Removed transition for direct 1:1 control or updated to be very fast
                transition: 'height 0.1s ease-out',
                willChange: 'height',
                boxShadow: '0 0 15px rgba(255, 155, 80, 0.5)'
            }} className="timeline-active-line" />

            {/* Timeline Items */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isActive = activeIndices[index];

                    return (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: isEven ? 'flex-end' : 'flex-start',
                            paddingBottom: '5rem',
                            position: 'relative',
                            width: '50%',
                            marginLeft: isEven ? '0' : 'auto',
                            marginRight: isEven ? 'auto' : '0',
                            paddingRight: isEven ? '3rem' : '0',
                            paddingLeft: isEven ? '0' : '3rem',
                            boxSizing: 'border-box'
                        }} className="timeline-item">

                            {/* The Dot on the Line */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                [isEven ? 'right' : 'left']: '-10px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: isActive ? '#FF9B50' : (isDarkTheme ? '#1A1A1A' : '#ffffff'),
                                border: `4px solid ${isActive ? '#FF9B50' : (isDarkTheme ? '#333' : '#ddd')}`,
                                zIndex: 2,
                                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy effect
                                transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                boxShadow: isActive ? `0 0 0 5px ${isDarkTheme ? 'rgba(255, 155, 80, 0.2)' : 'rgba(255, 155, 80, 0.1)'}` : 'none'
                            }} />

                            {/* Content Card */}
                            <div style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                padding: '2rem',
                                borderRadius: '20px',
                                width: '100%',
                                boxShadow: isActive ? '0 15px 40px rgba(0,0,0,0.1)' : '0 5px 10px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                textAlign: isEven ? 'right' : 'left',
                                opacity: isActive ? 1 : 0.3,
                                transform: isActive ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                                filter: isActive ? 'blur(0)' : 'blur(2px)'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    color: '#FF9B50',
                                    opacity: 0.2,
                                    marginBottom: '-1rem'
                                }}>{item.year}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1rem 0' }}>{item.title}</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.8 }}>{item.content}</p>
                            </div>

                        </div>
                    );
                })}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .timeline-bg-line, .timeline-active-line {
                        left: 20px !important;
                    }
                    .timeline-item {
                        width: 100% !important;
                        padding-left: 50px !important;
                        padding-right: 0 !important;
                        text-align: left !important;
                    }
                    .timeline-item > div:first-child { /* Dot */
                        left: 10px !important;
                        right: auto !important;
                    }
                }
            `}</style>
        </div>
    );
}
