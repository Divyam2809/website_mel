import React from 'react';
import AppNav from './components/AppNav';

export default function MelzoNews({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const newsItems = [
        {
            id: 1,
            category: 'Press Release',
            date: 'January 5, 2026',
            title: 'Melzo Partners with Leading Universities for Next-Gen Labs',
            summary: 'A strategic alliance to bring state-of-the-art VR simulation labs to engineering colleges across India.',
            image: '/images/news1.jpg' // Placeholder or use existing generic
        },
        {
            id: 2,
            category: 'Product Update',
            date: 'December 20, 2025',
            title: 'Launching the New 9D Motion Chair',
            summary: 'Experience the next level of immersion with our latest hardware release featuring improved haptics and telemetry.',
            image: '/images/news2.jpg'
        },
        {
            id: 3,
            category: 'Community',
            date: 'November 15, 2025',
            title: 'Celebrating 1 Million Student Interactions',
            summary: 'We have reached a significant milestone in our mission to democratize immersive education.',
            image: '/images/news3.jpg'
        },
        {
            id: 4,
            category: 'Events',
            date: 'October 30, 2025',
            title: 'Melzo at EdTech World Summit 2025',
            summary: 'Catch our team live demonstrating the future of classroom learning in Bangalore this weekend.',
            image: '/images/news4.jpg'
        }
    ];

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="melzonews"
            />
            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                minHeight: '100vh',
                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                fontFamily: 'Inter, sans-serif',
                transition: 'background-color 0.3s ease'
            }}>
                {/* Header Section */}
                <section style={{
                    padding: '120px 5% 4rem',
                    textAlign: 'center',
                    background: isDarkTheme
                        ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}>
                        Melzo <span style={{ color: '#FF9B50' }}>Newsroom</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Stay updated with the latest announcements, product launches, and stories from the world of immersive technology.
                    </p>
                </section>

                {/* News Grid */}
                <section style={{ padding: '0 5% 6rem' }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {newsItems.map((item) => (
                            <div key={item.id} style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                borderRadius: '16px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Placeholder for Image if we had real ones, mostly just gradient for now */}
                                <div style={{
                                    height: '200px',
                                    background: isDarkTheme
                                        ? 'linear-gradient(135deg, #333 0%, #222 100%)'
                                        : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FF9B50',
                                    fontSize: '3rem'
                                }}>
                                    📰
                                </div>

                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1rem',
                                        fontSize: '0.85rem'
                                    }}>
                                        <span style={{
                                            background: 'rgba(255, 155, 80, 0.15)',
                                            color: '#FF9B50',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontWeight: 600
                                        }}>
                                            {item.category}
                                        </span>
                                        <span style={{ opacity: 0.6 }}>{item.date}</span>
                                    </div>

                                    <h2 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        marginBottom: '1rem',
                                        lineHeight: 1.4
                                    }}>
                                        {item.title}
                                    </h2>

                                    <p style={{
                                        fontSize: '1rem',
                                        opacity: 0.7,
                                        lineHeight: 1.6,
                                        marginBottom: '1.5rem',
                                        flex: 1
                                    }}>
                                        {item.summary}
                                    </p>

                                    <button style={{
                                        background: 'transparent',
                                        color: '#FF9B50',
                                        border: '1px solid #FF9B50',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        alignSelf: 'flex-start',
                                        transition: 'all 0.2s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#FF9B50';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent';
                                            e.target.style.color = '#FF9B50';
                                        }}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
