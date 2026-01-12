import React from 'react';

const ModernGradientBackground = ({ isDarkTheme }) => {
    // Generate static random values for particles to avoid hydration mismatches or re-renders
    // In a real app, useMemo or a fixed seed would be better, but for this visual component, fixed array is fine.
    const particles = [...Array(15)].map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.3
    }));

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            background: isDarkTheme ? '#050505' : '#ffffff',
            transition: 'background-color 0.5s ease',
            zIndex: 0,
        }}>
            {/* 2. Structured Grid (Subtler) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: isDarkTheme
                    ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
                    : 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 90%)',
                WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 90%)',
                zIndex: 2,
            }} />

        </div>
    );
};

export default ModernGradientBackground;
