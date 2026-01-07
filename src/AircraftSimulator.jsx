import React, { useEffect } from 'react';
import './VRProduct.css';

export default function AircraftSimulator({ isDarkTheme, onBookDemo }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <div className={`vr-product-container ${themeClass}`}>
            <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.75' : '0.6'}), rgba(0, 0, 0, ${isDarkTheme ? '0.75' : '0.6'})), url('/images/aircraft_simulator_hero.png')` }}>
                <div className="vr-product-hero-content">
                    <div className="vr-product-badge">Professional Flight Training</div>
                    <h1>Earn Your Wings in a World Without Gravity</h1>
                    <p>Bridging the gap between theory and the cockpit. Master complex flight dynamics and emergency protocols in a hyper-realistic VR environment designed for the next generation of aviators.</p>
                    <div className="vr-product-hero-buttons">
                        <button onClick={onBookDemo} className="vr-product-btn-primary">Request a Simulator Walkthrough</button>
                        <button className="vr-product-btn-secondary">Download Training Curriculum</button>
                    </div>
                </div>
            </section>

            <section className="vr-product-section">
                <h2 className="vr-product-section-title">The Cockpit Trio</h2>
                <p className="vr-product-section-subtitle">Professional-grade simulation technology for authentic flight training</p>
                <div className="vr-product-feature-grid">
                    {[
                        { title: 'Full Cockpit Replication', desc: '1:1 mapping of dials, switches, and HUDs that respond to virtual touch with precision accuracy.', icon: '🎛️' },
                        { title: 'Kinetic Motion Systems', desc: 'Hardware mimics G-force, turbulence, and landing impact to build physiological readiness.', icon: '⚡' },
                        { title: 'Variable Weather & Lighting', desc: 'Toggle zero-visibility, night flights, and extreme storm conditions at the click of a button.', icon: '🌦️' }
                    ].map((feature, idx) => (
                        <div key={idx} className="vr-product-feature-card">
                            <div className="vr-product-feature-icon">{feature.icon}</div>
                            <h3 className="vr-product-feature-title">{feature.title}</h3>
                            <p className="vr-product-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="vr-product-section alt-bg">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="vr-product-section-title">The Aviation Pillars</h2>
                    <p className="vr-product-section-subtitle">Building flight excellence through immersive training</p>
                    <div className="vr-product-benefits-list">
                        {[
                            { num: '01', title: 'Drill-Down Emergency Training', desc: 'Practicing engine failures, hydraulic loss, and bird strikes in a repeatable, safe loop.' },
                            { num: '02', title: 'Cost-Efficient Flight Hours', desc: 'Reducing the financial barrier to entry by replacing expensive fuel and maintenance hours with high-fidelity VR sessions.' },
                            { num: '03', title: 'Procedural Mastery', desc: 'Ensuring \'Checklist Discipline\' is second nature before a student ever enters a physical aircraft.' }
                        ].map((pillar, idx) => (
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

            <section className="vr-product-section">
                <h2 className="vr-product-section-title">Who Benefits from VR Flight Training</h2>
                <p className="vr-product-section-subtitle">Specialized solutions for aviation professionals and institutions</p>
                <div className="vr-product-feature-grid">
                    {[
                        { audience: 'Flight Schools & Academies', focus: 'Student Throughput', benefit: 'Increasing student throughput and improving safety records through consistent, repeatable training scenarios.' },
                        { audience: 'Commercial Airlines', focus: 'Recurrent Training', benefit: 'Assessing pilot reflexes in rare, high-risk scenarios and maintaining proficiency without aircraft downtime.' },
                        { audience: 'Defense & Government', focus: 'Mission Rehearsals', benefit: 'Mission-specific rehearsals and tactical navigation training in classified or sensitive scenarios.' }
                    ].map((segment, idx) => (
                        <div key={idx} className="vr-product-feature-card">
                            <div className="vr-product-badge">{segment.focus}</div>
                            <h3 className="vr-product-feature-title">{segment.audience}</h3>
                            <p className="vr-product-feature-desc">{segment.benefit}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="vr-product-section alt-bg">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="vr-product-section-title">Data-Logged Competency Tracking</h2>
                    <p className="vr-product-section-subtitle">Instructor dashboard providing scientific basis for flight readiness</p>
                    <div className="vr-product-stats-grid">
                        {[
                            { metric: 'Response Time', value: '0.8s', icon: '⏱️', desc: 'Average reaction to emergencies' },
                            { metric: 'Path Deviation', value: '±2°', icon: '📍', desc: 'Navigation accuracy' },
                            { metric: 'Landing Accuracy', value: '98%', icon: '🛬', desc: 'Touchdown precision' },
                            { metric: 'Checklist Compliance', value: '100%', icon: '✓', desc: 'Procedural adherence' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div className="vr-product-stat-value">{stat.value}</div>
                                <div className="vr-product-stat-label">{stat.metric}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="vr-product-cta">
                <h2>Why Melzo Aviation</h2>
                <p>The instructor dashboard tracks Response Time, Path Deviation, and Landing Accuracy, providing a scientific basis for flight readiness. Every maneuver is logged, analyzed, and available for comprehensive review—ensuring training meets the highest aviation standards.</p>
                <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                    {[
                        { label: 'Training Cost Reduction', value: '75%' },
                        { label: 'Safety Incident Prevention', value: '95%' },
                        { label: 'Certified Flight Hours', value: '500+' },
                        { label: 'Pilot Readiness', value: '100%' }
                    ].map((stat, idx) => (
                        <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                            <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                            <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
                <button onClick={onBookDemo} className="vr-product-btn-secondary">Begin Flight Training →</button>
            </section>
        </div>
    );
}
