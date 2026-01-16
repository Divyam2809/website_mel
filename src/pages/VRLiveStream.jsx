import React, { useEffect, useState } from 'react';
import '../styles/VRLiveStream.css';
import AppNav from '../components/AppNav';
import LoadingSpinner from '../components/LoadingSpinner';
import initialContent from '../data/vrLiveStreamContent.json';

export default function VRLiveStream({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(initialContent);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch LIVE data immediately on page load
        fetch('/api/vr-livestream-live')
            .then(res => res.json())
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[VRLiveStream] Error fetching live data:', err))
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
                    currentPage="vrlivestream"
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
                currentPage="vrlivestream"
            />
            <div className={`vr-livestream-container ${themeClass}`}>
                {/* Hero Section */}
                <section
                    className="vr-livestream-hero"
                    style={{
                        backgroundImage: `url('/images/vr_livestream_hero.webp')`
                    }}
                >
                    <div className="vr-livestream-hero-content">
                        <div className="vr-livestream-badge">
                            {content.hero.badge}
                        </div>
                        <h1>
                            {content.hero.title}
                        </h1>
                        <p>
                            {content.hero.subtitle}
                        </p>
                        <div className="vr-livestream-hero-buttons">
                            <button
                                onClick={onBookDemo}
                                className="vr-livestream-btn-primary"
                            >
                                {content.hero.primaryBtn}
                            </button>
                            <button className="vr-livestream-btn-secondary">
                                {content.hero.secondaryBtn}
                            </button>
                        </div>
                    </div>
                </section>


                {/* The Connectivity Trio */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        {content.trio.title}
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        {content.trio.subtitle}
                    </p>

                    <div className="vr-livestream-feature-grid">
                        {content.trio.features.map((feature, idx) => (
                            <div key={idx} className="vr-livestream-feature-card">
                                <div className="vr-livestream-feature-icon" style={{
                                    fontSize: '2rem',
                                    fontWeight: '900',
                                    color: '#FF9B50',
                                    fontFamily: 'monospace'
                                }}>
                                    {feature.number}
                                </div>
                                <h3 className="vr-livestream-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="vr-livestream-feature-desc">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* The Expansion Pillars */}
                <section className="vr-livestream-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-livestream-section-title">
                            {content.pillars.title}
                        </h2>
                        <p className="vr-livestream-section-subtitle">
                            {content.pillars.subtitle}
                        </p>

                        <div className="vr-livestream-pillar-list">
                            {content.pillars.items.map((pillar, idx) => (
                                <div key={idx} className="vr-livestream-pillar-card">
                                    <div className="vr-livestream-pillar-number">
                                        {pillar.num}
                                    </div>
                                    <div>
                                        <h3 className="vr-livestream-pillar-title">
                                            {pillar.title}
                                        </h3>
                                        <p className="vr-livestream-pillar-desc">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Target Audience Value Props */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        {content.audience.title}
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        {content.audience.subtitle}
                    </p>

                    <div className="vr-livestream-feature-grid">
                        {content.audience.items.map((segment, idx) => (
                            <div key={idx} className="vr-livestream-audience-card">
                                <div className="vr-livestream-audience-badge">
                                    {segment.focus}
                                </div>
                                <h3 className="vr-livestream-audience-title">
                                    {segment.audience}
                                </h3>
                                <p className="vr-livestream-audience-desc">
                                    {segment.benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Global Connection Map */}
                <section className="vr-livestream-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-livestream-section-title">
                            {content.reach.title}
                        </h2>
                        <p className="vr-livestream-section-subtitle">
                            {content.reach.subtitle}
                        </p>

                        <div className="vr-livestream-stats-grid">
                            {content.reach.stats.map((stat, idx) => (
                                <div key={idx} className="vr-livestream-stat-card">
                                    <div className="vr-livestream-stat-value">
                                        {stat.connections}
                                    </div>
                                    <div className="vr-livestream-stat-label">
                                        {stat.region}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Comparison */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        {content.engagement.title}
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        {content.engagement.subtitle}
                    </p>

                    <div className="vr-livestream-comparison-grid">
                        {content.engagement.items.map((comparison, idx) => (
                            <div key={idx} className="vr-livestream-comparison-card">
                                <h3 className="vr-livestream-comparison-metric">
                                    {comparison.metric}
                                </h3>
                                <div className="vr-livestream-comparison-values">
                                    <div className="vr-livestream-comparison-item">
                                        <div className="vr-livestream-comparison-vr">
                                            {comparison.vr}
                                        </div>
                                        <div className="vr-livestream-comparison-label">
                                            VR Stream
                                        </div>
                                    </div>
                                    <div className="vr-livestream-comparison-vs">
                                        vs
                                    </div>
                                    <div className="vr-livestream-comparison-item">
                                        <div className="vr-livestream-comparison-video">
                                            {comparison.video}
                                        </div>
                                        <div className="vr-livestream-comparison-label">
                                            Video Call
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Live Section */}
                <section className="vr-livestream-why-melzo">
                    <div className="vr-livestream-why-melzo-content">
                        <h2 className="vr-livestream-section-title">
                            {content.why.title}
                        </h2>
                        <p className="vr-livestream-why-melzo-text">
                            {content.why.subtitle}
                        </p>

                        <div className="vr-livestream-why-melzo-stats">
                            {content.why.stats.map((stat, idx) => (
                                <div key={idx} className="vr-livestream-why-melzo-stat">
                                    <div className="vr-livestream-why-melzo-stat-value">
                                        {stat.value}
                                    </div>
                                    <div className="vr-livestream-why-melzo-stat-label">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onBookDemo}
                            className="vr-livestream-btn-primary"
                        >
                            {content.why.cta}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
