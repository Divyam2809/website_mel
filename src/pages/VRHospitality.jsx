import React, { useEffect, useState } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';
import LoadingSpinner from '../components/LoadingSpinner';


export default function VRHospitality({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch LIVE data immediately on page load
        fetch('/api/page-content/vrHospitality_live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[VRHospitality] Error fetching live data:', err))
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
                    currentPage="vrhospitality"
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
                currentPage="vrhospitality"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_hospitality_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">{content.hero.badge}</div>
                        <h1>{content.hero.title}</h1>
                        <p>{content.hero.subtitle}</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">{content.hero.primaryBtn}</button>
                            <button className="vr-product-btn-secondary">{content.hero.secondaryBtn}</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">{content.hospitalitySuite.title}</h2>
                    <p className="vr-product-section-subtitle">{content.hospitalitySuite.subtitle}</p>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '4rem 3rem'
                        }}>
                            {content.hospitalitySuite.features.map((item, idx) => (
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
                                            color: isDarkTheme ? '#AAA' : '#555'
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
                    <h2 className="vr-product-section-title">{content.benefits.title}</h2>
                    <p className="vr-product-section-subtitle">{content.benefits.subtitle}</p>
                    <div className="vr-product-feature-grid">
                        {content.benefits.features.map((segment, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{segment.focus}</div>
                                <h3 className="vr-product-feature-title">{segment.audience}</h3>
                                <p className="vr-product-feature-desc">{segment.benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>{content.stats.title}</h2>
                    <p>{content.stats.subtitle}</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {content.stats.items.map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.stats.cta}</button>
                </section>
            </div>
        </>
    );
}
