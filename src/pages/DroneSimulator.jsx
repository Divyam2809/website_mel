import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function DroneSimulator({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="dronesimulator"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/images/drone_simulator_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Drone Flight Academy</div>
                        <h1>Master the Skies Before You Touch the Controller</h1>
                        <p>Zero-risk, high-fidelity drone training. From basic flight controls to complex obstacle navigation, build professional-grade pilot intuition without the cost of a single crash.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Start Your Flight Training</button>
                            <button className="vr-product-btn-secondary">Inquire for Schools</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Flight Deck</h2>
                    <p className="vr-product-section-subtitle">Cutting-edge simulation technology for realistic flight training</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Realistic Physics Engine', desc: 'Simulation of wind resistance, battery gravity shifts, and momentum for authentic flight dynamics.', number: '01' },
                            { title: 'Haptic Motion Feedback', desc: 'The Melzo system mimics the \'feel\' of flight and environmental tilt during maneuvers.', number: '02' },
                            { title: 'Multi-Environment Arenas', desc: 'Diverse training grounds—from industrial warehouses and construction sites to open-world landscapes.', number: '03' }
                        ].map((feature, idx) => (
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

                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">The Skill-Building Pillars</h2>
                        <p className="vr-product-section-subtitle">Comprehensive training for every skill level</p>
                        <div className="vr-product-benefits-list">
                            {[
                                { num: '01', title: 'Risk-Free Obstacle Courses', desc: 'Practicing tight-cornering and indoor flight without damaging expensive hardware.' },
                                { num: '02', title: 'Emergency Protocol Training', desc: 'Simulating signal loss, motor failure, or sudden weather changes to build calm under pressure.' },
                                { num: '03', title: 'Aerial Precision Mastery', desc: 'Training for specific industries like cinematography, thermal inspection, or search and rescue.' }
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
                    <h2 className="vr-product-section-title">Who Benefits from VR Drone Training</h2>
                    <p className="vr-product-section-subtitle">Tailored solutions for every pilot and organization</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'K-12 & STEM Programs', focus: 'Gamified Learning', benefit: 'Sparking interest in aviation and engineering through interactive, engaging flight simulations that make learning fun.' },
                            { audience: 'Industrial Inspection Firms', focus: 'High-Asset Certifications', benefit: 'Certifying workers in safe inspections of power lines, bridges, and infrastructure without real-world risks.' },
                            { audience: 'Hobbyist & Racing Leagues', focus: 'Performance Optimization', benefit: 'Shaving seconds off lap times through repeatable, high-speed virtual practice in competitive racing scenarios.' }
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
                        <h2 className="vr-product-section-title">Progressive Skill Development</h2>
                        <p className="vr-product-section-subtitle">From beginner-friendly interfaces to advanced FPV racing HUDs</p>
                        <div className="vr-product-feature-grid">
                            {[
                                { level: 'Beginner', features: ['Guided Flight Paths', 'Auto-Stabilization', 'Collision Warnings', 'Speed Limiters'] },
                                { level: 'Intermediate', features: ['Manual Controls', 'Weather Simulation', 'Obstacle Courses', 'Battery Management'] },
                                { level: 'Advanced', features: ['FPV Racing Mode', 'Acrobatic Maneuvers', 'Multi-Drone Control', 'Custom Scenarios'] }
                            ].map((tier, idx) => (
                                <div key={idx} className="vr-product-feature-card">
                                    <h3 className="vr-product-feature-title" style={{ textAlign: 'center', color: 'var(--accent)', marginBottom: '1.5rem' }}>{tier.level}</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {tier.features.map((feature, i) => (
                                            <li key={i} style={{ padding: '0.75rem 0', borderBottom: i < tier.features.length - 1 ? '1px solid var(--border-color)' : 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                                ✓ {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>Why Melzo: Hardware Longevity</h2>
                    <p>Training in VR first extends the lifespan of a physical drone fleet by reducing rookie accidents by up to 90%. Master the fundamentals in a safe environment before risking expensive equipment.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Accident Reduction', value: '90%' },
                            { label: 'Training Cost Savings', value: '85%' },
                            { label: 'Fleet Lifespan Extension', value: '3x' },
                            { label: 'Pilot Confidence', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Take Flight Today →</button>
                </section>
            </div>
        </>
    );
}
