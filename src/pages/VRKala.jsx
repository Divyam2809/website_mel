import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRKala({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrkala"
            />
            <div className={`vr-product-container ${themeClass}`}>
                {/* Hero Section */}
                <section
                    className="vr-product-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/images/vr_kala_hero_1767705039438.webp')`
                    }}
                >
                    <div className="vr-product-hero-content">
                        <h1>
                            History is No Longer a Spectator Sport
                        </h1>
                        <p>
                            Melzo VR bridges the gap between centuries, allowing students and visitors to 'live' the art, music, and culture they used to only read about.
                        </p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">
                                Bring Culture to Life
                            </button>
                            <button className="vr-product-btn-secondary">
                                Request a Curated Demo
                            </button>
                        </div>
                    </div>
                </section>

                {/* The Immersion Trio */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">
                        The Immersion Trio
                    </h2>
                    <p className="vr-product-section-subtitle">
                        Experience culture through three revolutionary dimensions
                    </p>

                    <div className="vr-product-feature-grid">
                        {[
                            {
                                title: 'Virtual Time Travel',
                                desc: 'Walking through reconstructed historical sites with 360-degree historical accuracy.',
                                number: '01'
                            },
                            {
                                title: 'Interactive Art & Music',
                                desc: 'Allowing users to \'conduct\' a virtual symphony or \'paint\' alongside digital masters to understand technique.',
                                number: '02'
                            },
                            {
                                title: 'Global Heritage Access',
                                desc: 'Bringing the world\'s most remote or fragile cultural artifacts to local classrooms and museums.',
                                number: '03'
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon" style={{
                                    fontSize: '2rem',
                                    fontWeight: '900',
                                    color: '#FF9B50',
                                    fontFamily: 'monospace'
                                }}>
                                    {feature.number}
                                </div>
                                <h3 className="vr-product-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="vr-product-feature-desc">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Impact Pillars */}
                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">
                            The Impact Pillars
                        </h2>
                        <p className="vr-product-section-subtitle">
                            Transforming cultural education through immersive technology
                        </p>

                        <div className="vr-product-benefits-list">
                            {[
                                {
                                    num: '01',
                                    title: 'Deep Emotional Connection',
                                    desc: 'Using first-person perspectives to build empathy and understanding of diverse cultural practices.'
                                },
                                {
                                    num: '02',
                                    title: 'Active Preservation',
                                    desc: 'How VR creates a permanent, interactive digital record of history that cannot be damaged or lost.'
                                },
                                {
                                    num: '03',
                                    title: 'Multi-Sensory Learning',
                                    desc: 'Combining sight, sound, and interaction to boost retention rates by up to 75% compared to traditional lectures.'
                                }
                            ].map((pillar, idx) => (
                                <div key={idx} className="vr-product-benefit-item">
                                    <div className="vr-product-benefit-icon" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, minWidth: '80px' }}>
                                        {pillar.num}
                                    </div>
                                    <div>
                                        <h3 className="vr-product-benefit-title">
                                            {pillar.title}
                                        </h3>
                                        <p className="vr-product-benefit-desc">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience Value Props */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">
                        Who Benefits from Cultural Immersion
                    </h2>
                    <p className="vr-product-section-subtitle">
                        Tailored solutions for every cultural institution
                    </p>

                    <div className="vr-product-feature-grid">
                        {[
                            {
                                audience: 'Museums & Galleries',
                                focus: 'Living Exhibits',
                                benefit: 'Attracting younger demographics and increasing visitor dwell time with interactive experiences that make history come alive.'
                            },
                            {
                                audience: 'K-12 & Higher Ed',
                                focus: 'Experiential Field Trips',
                                benefit: 'Enhancing Humanities and Arts curriculum with immersive experiences that cost zero in travel while delivering maximum educational impact.'
                            },
                            {
                                audience: 'Cultural Centers',
                                focus: 'Heritage Preservation',
                                benefit: 'Community engagement and preserving local heritage for future generations through interactive digital archives.'
                            }
                        ].map((segment, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">
                                    {segment.focus}
                                </div>
                                <h3 className="vr-product-feature-title">
                                    {segment.audience}
                                </h3>
                                <p className="vr-product-feature-desc">
                                    {segment.benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Section */}
                <section className="vr-product-cta">
                    <h2>
                        Why Melzo: Authenticity & Accessibility
                    </h2>
                    <p>
                        Melzo partners with historians and artists to ensure simulations are accurate, while providing a 'plug-and-play' setup that requires no technical expertise from staff.
                    </p>

                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Historical Accuracy', value: '100%' },
                            { label: 'Setup Time', value: '< 30 min' },
                            { label: 'Technical Expertise Required', value: 'Zero' },
                            { label: 'Retention Improvement', value: '75%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>
                                    {stat.value}
                                </div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={onBookDemo} className="vr-product-btn-secondary">
                        Experience Cultural Immersion →
                    </button>
                </section>
            </div>
        </>
    );
}
