import React, { useEffect, useState } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';
import LoadingSpinner from '../components/LoadingSpinner';


export default function VRDefence({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Melzo VR Defence - Tactical Combat Simulation";
        window.scrollTo(0, 0);
        // Fetch LIVE data immediately on page load
        fetch('/api/page-content/vrDefence_live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[VRDefence] Error fetching live data:', err))
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
                    currentPage="vrdefence"
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
                currentPage="vrdefence"
            />
            <div className={`vr-product-container ${themeClass}`}>
                {/* Hero Section */}
                <section
                    className="vr-product-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.65'}), rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.65'})), url('/images/vr_defence_hero.webp')`
                    }}
                >
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">{content.hero.badge}</div>
                        <h1>{content.hero.title}</h1>
                        <p>{content.hero.subtitle}</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">{content.hero.primaryBtn}</button>
                            {/* <button className="vr-product-btn-secondary">{content.hero.secondaryBtn}</button> */}
                        </div>
                    </div>
                </section>

                {/* The Tactical Suite */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">{content.suite.title}</h2>
                    <p className="vr-product-section-subtitle">{content.suite.subtitle}</p>
                    <div className="vr-product-feature-grid">
                        {content.suite.features.map((feature, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon" style={{
                                    fontSize: '2rem',
                                    fontWeight: '900',
                                    color: '#FF9B50',
                                    fontFamily: 'monospace'
                                }}>{feature.number}</div>
                                <h3 className="vr-product-feature-title">{feature.title}</h3>
                                <p className="vr-product-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Combat Pillars */}
                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">{content.pillars.title}</h2>
                        <p className="vr-product-section-subtitle">{content.pillars.subtitle}</p>
                        <div className="vr-product-benefits-list">
                            {content.pillars.items.map((pillar, idx) => (
                                <div key={idx} className="vr-product-benefit-item">
                                    <div className="vr-product-benefit-icon" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, minWidth: '80px' }}>{pillar.num}</div>
                                    <div>
                                        <h3 className="vr-product-benefit-title">{pillar.title}</h3>
                                        <p className="vr-product-benefit-desc">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience Benefits */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">{content.stakeholders.title}</h2>
                    <p className="vr-product-section-subtitle">{content.stakeholders.subtitle}</p>
                    <div className="vr-product-feature-grid">
                        {content.stakeholders.items.map((segment, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{segment.focus}</div>
                                <h3 className="vr-product-feature-title">{segment.audience}</h3>
                                <p className="vr-product-feature-desc">{segment.benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Combat Readiness Scorecard */}
                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">{content.scorecard.title}</h2>
                        <p className="vr-product-section-subtitle">{content.scorecard.subtitle}</p>
                        <div className="vr-product-stats-grid">
                            {content.scorecard.items.map((stat, idx) => (
                                <div key={idx} className="vr-product-stat-card">
                                    <div className="vr-product-stat-value">{stat.value}</div>
                                    <div className="vr-product-stat-label">{stat.metric}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Features */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">{content.security.title}</h2>
                    <p className="vr-product-section-subtitle">{content.security.subtitle}</p>
                    <div className="vr-product-feature-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        {content.security.features.map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon" style={{
                                    fontSize: '2rem',
                                    fontWeight: '900',
                                    color: '#FF9B50',
                                    fontFamily: 'monospace'
                                }}>{item.number}</div>
                                <h3 className="vr-product-feature-title">{item.title}</h3>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Defense Section */}
                <section className="vr-product-cta">
                    <h2>{content.whyMelzo.title}</h2>
                    <p>{content.whyMelzo.subtitle}</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {content.whyMelzo.stats.map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.whyMelzo.cta}</button>
                </section>
            </div>
        </>
    );
}
