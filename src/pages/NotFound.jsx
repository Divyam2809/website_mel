import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNav from '../components/AppNav';
import GridBackground from '../components/GridBackground';

export default function NotFound({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const popularPages = [
        {
            name: 'Home',
            path: '/home',
            description: 'Return to homepage',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            name: 'Products',
            path: '/products',
            description: 'Explore VR solutions',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            )
        },
        {
            name: 'About Us',
            path: '/about',
            description: 'Learn about Melzo',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            )
        },
        {
            name: 'Blog',
            path: '/blog',
            description: 'Latest insights',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
            )
        }
    ];

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage=""
            />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem 2rem',
                fontFamily: 'Inter, sans-serif',
                position: 'relative',
                overflow: 'hidden',
                background: isDarkTheme
                    ? 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
                    : 'linear-gradient(135deg, #FFF5EC 0%, #FFFFFF 100%)'
            }}>
                {/* Grid Background */}
                <GridBackground isDarkTheme={isDarkTheme} />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            background: '#FF9B50',
                            borderRadius: '50%',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3 + 0.1,
                            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}

                {/* Gradient Orbs */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(255, 155, 80, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    animation: 'pulse 8s ease-in-out infinite',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 155, 80, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    animation: 'pulse 8s ease-in-out infinite',
                    animationDelay: '4s',
                    pointerEvents: 'none'
                }} />

                {/* Main Content */}
                <div style={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    position: 'relative',
                    zIndex: 2,
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.3s ease-out'
                }}>
                    {/* VR Headset Icon */}
                    <div style={{
                        marginBottom: '1.5rem',
                        display: 'inline-block',
                        animation: 'float 6s ease-in-out infinite'
                    }}>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5">
                            <rect x="2" y="7" width="20" height="10" rx="2" />
                            <circle cx="7" cy="12" r="2" />
                            <circle cx="17" cy="12" r="2" />
                            <path d="M2 12h20" strokeDasharray="2 2" />
                        </svg>
                    </div>

                    {/* 404 Number with Gradient */}
                    <h1 style={{
                        fontSize: 'clamp(5rem, 18vw, 12rem)',
                        fontWeight: 900,
                        margin: 0,
                        background: 'linear-gradient(135deg, #FF9B50 0%, #FF7A00 50%, #FF9B50 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        letterSpacing: '-0.05em',
                        backgroundSize: '200% 200%',
                        animation: 'gradientShift 3s ease infinite',
                        textShadow: isDarkTheme
                            ? '0 0 80px rgba(255, 155, 80, 0.3)'
                            : 'none'
                    }}>
                        404
                    </h1>

                    {/* Glitch Effect Line */}
                    <div style={{
                        width: '200px',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, #FF9B50, transparent)',
                        margin: '2rem auto',
                        borderRadius: '2px',
                        animation: 'slideWidth 2s ease-in-out infinite'
                    }} />

                    {/* Error Message */}
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                        fontWeight: 700,
                        marginTop: '2rem',
                        marginBottom: '1rem',
                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                        letterSpacing: '-0.02em'
                    }}>
                        Lost in Virtual Space
                    </h2>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: 1.6,
                        color: isDarkTheme ? '#EAEAEA' : '#666',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}>
                        The page you're looking for doesn't exist in this reality.
                        Let's teleport you back to familiar territory.
                    </p>

                    {/* Action Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '4rem'
                    }}>
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                padding: '1rem 2.5rem',
                                background: 'transparent',
                                border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                borderRadius: '30px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                e.target.style.color = isDarkTheme ? '#2D2D2D' : '#FFFFFF';
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Go Back
                        </button>

                        <button
                            onClick={() => navigate('/home')}
                            style={{
                                padding: '1rem 2.5rem',
                                background: 'linear-gradient(135deg, #FF9B50 0%, #FF7A00 100%)',
                                border: 'none',
                                color: '#FFFFFF',
                                borderRadius: '30px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(255, 155, 80, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 10px 30px rgba(255, 155, 80, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.4)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Go to Homepage
                        </button>
                    </div>

                    {/* Popular Pages Grid */}
                    <div>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '2rem',
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                            letterSpacing: '-0.01em'
                        }}>
                            Quick Navigation
                        </h3>

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            maxWidth: '100%',
                            margin: '0 auto'
                        }}>
                            {popularPages.map((page, index) => (
                                <button
                                    key={page.path}
                                    onClick={() => navigate(page.path)}
                                    style={{
                                        padding: '1.25rem 1.5rem',
                                        background: isDarkTheme
                                            ? 'rgba(255, 255, 255, 0.03)'
                                            : 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                                        borderRadius: '16px',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center',
                                        animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`,
                                        opacity: 0,
                                        boxShadow: isDarkTheme
                                            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                                            : '0 4px 20px rgba(0, 0, 0, 0.05)',
                                        minWidth: '180px',
                                        flex: '1 1 auto'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 155, 80, 0.1)';
                                        e.currentTarget.style.borderColor = '#FF9B50';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 155, 80, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = isDarkTheme
                                            ? 'rgba(255, 255, 255, 0.03)'
                                            : 'rgba(255, 255, 255, 0.8)';
                                        e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = isDarkTheme
                                            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                                            : '0 4px 20px rgba(0, 0, 0, 0.05)';
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.2) 0%, rgba(255, 155, 80, 0.1) 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#FF9B50'
                                        }}>
                                            {page.icon}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {page.name}
                                            </div>
                                            <div style={{
                                                fontSize: '0.85rem',
                                                opacity: 0.7
                                            }}>
                                                {page.description}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Animations */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }

                    @keyframes pulse {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                    }

                    @keyframes gradientShift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    @keyframes slideWidth {
                        0%, 100% { transform: scaleX(0.5); opacity: 0.5; }
                        50% { transform: scaleX(1); opacity: 1; }
                    }

                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
