import React, { useEffect, useState } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';
import GridBackground from '../components/GridBackground';


const FEATURE_ICONS = [
    // 01: Virtual Journey
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="11" r="2.5" />
        <path d="M15.5 16.5a3.5 3.5 0 0 0-7 0" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
        <circle cx="21" cy="12" r="1.5" fill="#FF9B50" stroke="none" />
        <circle cx="7.5" cy="4.2" r="1.5" fill="#FF9B50" stroke="none" />
        <circle cx="7.5" cy="19.8" r="1.5" fill="#FF9B50" stroke="none" />
    </svg>,
    // 02: Insights
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3zM21 9H3M21 15H3M9 3v18M15 3v18" opacity="0.5" />
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>,
    // 03: Talkbot
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
        <path d="M4 11s2-4 8-4 8 4 8 4" opacity="0.5" />
        <path d="M3 11l-2-2" />
        <path d="M21 11l2-2" />
    </svg>,
    // 04: Value realization
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M19 22H5" opacity="0.3" />
        <path d="M12 12a10 10 0 1 0 10 10" opacity="0.1" />
    </svg>,
    // 05: creation
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
    // 06: sales tool
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <path d="M2 2l20 20" opacity="0.2" />
    </svg>
];

export default function VRRealEstate({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Melzo 7D Real Estate VR - Selling the Vision";
        window.scrollTo(0, 0);

        // Fetch LIVE data immediately on page load
        fetch('/api/page-content/vrRealEstate_live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[VRRealEstate] Error fetching live data:', err))
            .finally(() => setIsLoading(false));
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    if (isLoading || !content) {
        return (
            <>
                <AppNav
                    onNavigate={onNavigate}
                    isDarkTheme={isDarkTheme}
                    onToggleTheme={onToggleTheme}
                    onBookDemo={onBookDemo}
                    currentPage="vrrealestate"
                />
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDarkTheme ? '#0A0A0A' : '#fff'
                }}>
                    <LoadingSpinner />
                </div>
            </>
        );
    }

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrrealestate"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/vr_realestate_hero.webp)' }}>
                    <GridBackground isDarkTheme={isDarkTheme} />
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">{content.hero.badge}</div>
                        <h1>{content.hero.title} <br /><span style={{ color: 'var(--accent)' }}>{content.hero.accent}</span></h1>
                        <p>{content.hero.subtitle}</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">{content.hero.primaryBtn}</button>
                            <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.hero.secondaryBtn}</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '4rem 3rem'
                        }}>
                            {content.interactiveFeatures.features.map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'flex-start',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        const numInfo = e.currentTarget.querySelector('.feature-number');
                                        if (numInfo) {
                                            numInfo.style.color = '#FF9B50';
                                            numInfo.style.transform = 'scale(1.1)';
                                            numInfo.style.filter = 'drop-shadow(0 0 8px rgba(255, 155, 80, 0.4))';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        const numInfo = e.currentTarget.querySelector('.feature-number');
                                        if (numInfo) {
                                            numInfo.style.color = 'rgba(255, 155, 80, 0.25)';
                                            numInfo.style.transform = 'scale(1)';
                                            numInfo.style.filter = 'none';
                                        }
                                    }}>
                                    <div className="feature-number" style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        color: 'rgba(255, 155, 80, 0.25)',
                                        fontFamily: 'monospace',
                                        lineHeight: 1,
                                        marginTop: '-0.3rem',
                                        userSelect: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 700,
                                            marginBottom: '1rem',
                                            color: '#FF9B50',
                                            lineHeight: '1.3'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                            color: isDarkTheme ? '#AAA' : '#555',
                                            marginBottom: item.link ? '1rem' : '0'
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <h2 className="vr-product-section-title">{content.stakeholders.title}</h2>
                    <div className="vr-product-feature-grid">
                        {content.stakeholders.items.map((audience, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{audience.focus}</div>
                                <h3 className="vr-product-feature-title">{audience.audience}</h3>
                                <p className="vr-product-feature-desc">{audience.benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>{content.salesGallery.title}</h2>
                    <p>{content.salesGallery.subtitle}</p>
                    <div className="vr-product-feature-grid" style={{ marginBottom: '4rem' }}>
                        {content.salesGallery.items.map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF9B50', fontFamily: 'monospace', marginBottom: '1rem' }}>{item.number}</div>
                                <h4 className="vr-product-feature-title">{item.title}</h4>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.salesGallery.cta}</button>
                </section>
            </div>
        </>
    );
}
