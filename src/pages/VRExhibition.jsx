import React, { useEffect, useState } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';
import LoadingSpinner from '../components/LoadingSpinner';
import initialContent from '../data/vrExhibitionContent.json';

export default function VRExhibition({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(initialContent);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Melzo VR Exhibition - Immersive Discovery";
        window.scrollTo(0, 0);

        // Fetch LIVE data immediately on page load
        fetch('/api/vr-exhibition-live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[VRExhibition] Error fetching live data:', err))
            .finally(() => setIsLoading(false));
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    if (isLoading) {
        return (
            <>
                <AppNav
                    onNavigate={onNavigate}
                    isDarkTheme={isDarkTheme}
                    onToggleTheme={onToggleTheme}
                    onBookDemo={onBookDemo}
                    currentPage="vrexhibition"
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
                currentPage="vrexhibition"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: 'url(/assets/vr_exhibition_hero.webp)' }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">{content.hero.badge}</div>
                        <h1>
                            {content.hero.title} <br />
                            <span style={{ color: 'var(--accent)' }}>{content.hero.accent}</span>
                        </h1>
                        <p>{content.hero.subtitle}</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">{content.hero.primaryBtn}</button>
                            <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.hero.secondaryBtn}</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">{content.toolkit.title}</h2>
                        <p className="vr-product-section-subtitle">{content.toolkit.subtitle}</p>
                        <div className="vr-product-feature-grid">
                            {content.toolkit.features.map((item, idx) => (
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
                    </div>
                </section>

                <section className="vr-product-section">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{content.impact.subtitle}</span>
                            <h2 className="vr-product-section-title" style={{ marginTop: '1rem' }}>{content.impact.title}</h2>
                        </div>
                        <div className="vr-product-benefits-list">
                            {content.impact.pillars.map((pillar, idx) => (
                                <div key={idx} className="vr-product-benefit-item">
                                    <div className="vr-product-benefit-icon" style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 0.8 }}>{idx + 1}</div>
                                    <div>
                                        <h3 className="vr-product-benefit-title">{pillar.title}</h3>
                                        <p className="vr-product-benefit-desc">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <h2 className="vr-product-section-title">{content.eventTypes.title}</h2>
                    <div className="vr-product-feature-grid">
                        {content.eventTypes.items.map((audience, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{audience.focus}</div>
                                <h3 className="vr-product-feature-title">{audience.title}</h3>
                                <p className="vr-product-feature-desc">{audience.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>{content.logistics.title}</h2>
                    <p>{content.logistics.subtitle}</p>
                    <div className="vr-product-feature-grid" style={{ marginBottom: '4rem' }}>
                        {content.logistics.items.map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF9B50', fontFamily: 'monospace', marginBottom: '1rem' }}>{item.number}</div>
                                <h4 className="vr-product-feature-title">{item.title}</h4>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">{content.logistics.cta}</button>
                </section>
            </div>
        </>
    );
}
