import React from 'react';

const ModernGradientBackground = ({ isDarkTheme }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
        }}>
            {/* Base Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                transition: 'background-color 0.5s ease'
            }} />

            {/* Shape 1 - Floating Square (Top Left) */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '120px',
                height: '120px',
                border: `2px solid ${isDarkTheme ? 'rgba(255, 155, 80, 0.15)' : 'rgba(255, 155, 80, 0.1)'}`,
                borderRadius: '20px',
                transform: 'rotate(15deg)',
                animation: 'float-rotate 20s infinite linear'
            }} />

            {/* Shape 2 - Floating Ring (Bottom Right) */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '10%',
                width: '200px',
                height: '200px',
                border: `2px solid ${isDarkTheme ? 'rgba(100, 50, 255, 0.1)' : 'rgba(100, 50, 255, 0.08)'}`,
                borderRadius: '50%',
                animation: 'float-reverse 25s infinite ease-in-out'
            }} />

            {/* Shape 3 - Dashed Circle (Top Right) */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '15%',
                width: '150px',
                height: '150px',
                border: `2px dashed ${isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                borderRadius: '50%',
                animation: 'spin 60s infinite linear'
            }} />

            {/* Shape 4 - Plus Sign (Bottom Left) */}
            <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '15%',
                fontSize: '10rem',
                color: isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.05)',
                fontWeight: 100,
                fontFamily: 'Arial, sans-serif',
                animation: 'pulse 5s infinite ease-in-out'
            }}>+</div>

            {/* Small Particles */}
            {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: '4px',
                    height: '4px',
                    backgroundColor: isDarkTheme ? '#FF9B50' : '#FF9B50',
                    borderRadius: '50%',
                    opacity: 0.3,
                    animation: `twinkle ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                }} />
            ))}


            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: isDarkTheme
                    ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
                    : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 100%)',
            }} />

            <style>{`
                @keyframes float-rotate {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(20px, -20px) rotate(180deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
                @keyframes float-reverse {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20px, 20px) scale(1.1); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.05; }
                    50% { transform: scale(1.1); opacity: 0.1; }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.5); }
                }
            `}</style>
        </div>
    );
};

export default ModernGradientBackground;
