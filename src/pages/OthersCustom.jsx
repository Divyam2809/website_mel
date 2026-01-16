import React, { useEffect, useState } from 'react';
import '../styles/OthersCustom.css';
import AppNav from '../components/AppNav';
import LoadingSpinner from '../components/LoadingSpinner';
import initialContent from '../data/othersCustomContent.json';

export default function OthersCustom({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(initialContent);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch LIVE data immediately on page load
        fetch('/api/others-custom-live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[OthersCustom] Error fetching live data:', err))
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
                    currentPage="product-custom-solutions"
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
                currentPage="product-custom-solutions"
            />
            <div className={`others-custom-container ${themeClass}`}>
                {/* Hero Section */}
                <section
                    className="others-custom-hero"
                    style={{
                        backgroundImage: `url('/images/custom_solutions_hero.webp')`
                    }}
                >
                    <div className="others-custom-hero-content">
                        <div className="others-custom-badge">
                            {content.hero.badge}
                        </div>
                        <h1>
                            {content.hero.title}
                        </h1>
                        <p>
                            {content.hero.subtitle}
                        </p>
                        <div className="others-custom-hero-buttons">
                            <button
                                onClick={onBookDemo}
                                className="others-custom-btn-primary"
                            >
                                {content.hero.primaryBtn}
                            </button>
                            <button className="others-custom-btn-secondary">
                                {content.hero.secondaryBtn}
                            </button>
                        </div>
                    </div>
                </section>


                {/* Process Trio */}
                <section className="others-custom-section">
                    <h2 className="others-custom-section-title">
                        {content.trio.title}
                    </h2>
                    <p className="others-custom-section-subtitle">
                        {content.trio.subtitle}
                    </p>

                    <div className="others-custom-feature-grid">
                        {content.trio.features.map((feature, idx) => (
                            <div key={idx} className="others-custom-feature-card">
                                <div className="others-custom-feature-icon" style={{
                                    fontSize: '2rem',
                                    fontWeight: '900',
                                    color: '#FF9B50',
                                    fontFamily: 'monospace'
                                }}>
                                    {feature.number}
                                </div>
                                <h3 className="others-custom-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="others-custom-feature-desc">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Why Pick Us Pillars */}
                <section className="others-custom-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="others-custom-section-title">
                            {content.pillars.title}
                        </h2>
                        <p className="others-custom-section-subtitle">
                            {content.pillars.subtitle}
                        </p>

                        <div className="others-custom-pillar-list">
                            {content.pillars.items.map((pillar, idx) => (
                                <div key={idx} className="others-custom-pillar-card">
                                    <div className="others-custom-pillar-number">
                                        {pillar.num}
                                    </div>
                                    <div>
                                        <h3 className="others-custom-pillar-title">
                                            {pillar.title}
                                        </h3>
                                        <p className="others-custom-pillar-desc">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Industry Audience */}
                <section className="others-custom-section">
                    <h2 className="others-custom-section-title">
                        {content.audience.title}
                    </h2>
                    <p className="others-custom-section-subtitle">
                        {content.audience.subtitle}
                    </p>

                    <div className="others-custom-feature-grid">
                        {content.audience.items.map((segment, idx) => (
                            <div key={idx} className="others-custom-audience-card">
                                <div className="others-custom-audience-badge">
                                    {segment.focus}
                                </div>
                                <h3 className="others-custom-audience-title">
                                    {segment.audience}
                                </h3>
                                <p className="others-custom-audience-desc">
                                    {segment.benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Global Stats */}
                <section className="others-custom-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="others-custom-section-title">
                            {content.reach.title}
                        </h2>
                        <p className="others-custom-section-subtitle">
                            {content.reach.subtitle}
                        </p>

                        <div className="others-custom-stats-grid">
                            {content.reach.stats.map((stat, idx) => (
                                <div key={idx} className="others-custom-stat-card">
                                    <div className="others-custom-stat-value">
                                        {stat.connections}
                                    </div>
                                    <div className="others-custom-stat-label">
                                        {stat.region}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Comparison */}
                <section className="others-custom-section">
                    <h2 className="others-custom-section-title">
                        {content.engagement.title}
                    </h2>
                    <p className="others-custom-section-subtitle">
                        {content.engagement.subtitle}
                    </p>

                    <div className="others-custom-comparison-grid">
                        {content.engagement.items.map((comparison, idx) => (
                            <div key={idx} className="others-custom-comparison-card">
                                <h3 className="others-custom-comparison-metric">
                                    {comparison.metric}
                                </h3>
                                <div className="others-custom-comparison-values">
                                    <div className="others-custom-comparison-item">
                                        <div className="others-custom-comparison-vr">
                                            {comparison.vr}
                                        </div>
                                        <div className="others-custom-comparison-label">
                                            Custom VR
                                        </div>
                                    </div>
                                    <div className="others-custom-comparison-vs">
                                        vs
                                    </div>
                                    <div className="others-custom-comparison-item">
                                        <div className="others-custom-comparison-video">
                                            {comparison.video}
                                        </div>
                                        <div className="others-custom-comparison-label">
                                            Generic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Custom Section */}
                <section className="others-custom-why-melzo">
                    <div className="others-custom-why-melzo-content">
                        <h2 className="others-custom-section-title">
                            {content.why.title}
                        </h2>
                        <p className="others-custom-why-melzo-text">
                            {content.why.subtitle}
                        </p>

                        <div className="others-custom-why-melzo-stats">
                            {content.why.stats.map((stat, idx) => (
                                <div key={idx} className="others-custom-why-melzo-stat">
                                    <div className="others-custom-why-melzo-stat-value">
                                        {stat.value}
                                    </div>
                                    <div className="others-custom-why-melzo-stat-label">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onBookDemo}
                            className="others-custom-btn-primary"
                        >
                            {content.why.cta}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
