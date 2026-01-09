import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRDefence({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
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
                        <div className="vr-product-badge">Tactical Defense Solutions</div>
                        <h1>Winning the Mission Before the First Boot Hits the Ground</h1>
                        <p>Zero-risk tactical mastery for the modern operator. Rehearse complex maneuvers, master sophisticated weaponry, and synchronize squad dynamics in a hyper-realistic VR theater.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request a Classified Demo</button>
                            <button className="vr-product-btn-secondary">Consult with a Defense Specialist</button>
                        </div>
                    </div>
                </section>

                {/* The Tactical Suite */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Tactical Suite</h2>
                    <p className="vr-product-section-subtitle">Elite-level simulation technology for modern warfare training</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Mission-Specific Rehearsals', desc: 'Upload 1:1 geospatial data to recreate real-world terrain and urban environments for specific operations.', icon: '🗺️' },
                            { title: 'Advanced Equipment Handling', desc: 'Virtual interaction with complex systems—from drone-interface HUDs to armored vehicle controls.', icon: '🎯' },
                            { title: 'Squad-Level Synchronization', desc: 'Multi-user environment where team members communicate and coordinate in real-time within the same simulation.', icon: '👥' }
                        ].map((feature, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon">{feature.icon}</div>
                                <h3 className="vr-product-feature-title">{feature.title}</h3>
                                <p className="vr-product-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Combat Pillars */}
                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">The Combat Pillars</h2>
                        <p className="vr-product-section-subtitle">Building operational excellence through immersive training</p>
                        <div className="vr-product-benefits-list">
                            {[
                                { num: '01', title: 'Risk-Free Tactical Failure', desc: 'Allowing for \'After Action Reviews\' (AAR) where mistakes are analyzed in 3D to ensure they aren\'t repeated in theater.' },
                                { num: '02', title: 'Physiological Conditioning', desc: 'Using motion and stress-induction scenarios to train operators to maintain focus under combat-induced pressure.' },
                                { num: '03', title: 'Logistical Efficiency', desc: 'Reducing the \'cost-per-soldier\' for training by eliminating the need for live ammunition, fuel, and transport during foundational drills.' }
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

                {/* Target Audience Benefits */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">Who Benefits from VR Tactical Training</h2>
                    <p className="vr-product-section-subtitle">Specialized solutions for defense and military organizations</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Military Academies & Bootcamps', focus: 'Standardized Training', benefit: 'Accelerating the learning curve for recruits in a standardized, safe environment with consistent quality.' },
                            { audience: 'Special Operations Forces', focus: 'Black Site Rehearsal', benefit: 'High-precision tactical planning and mission rehearsal for classified operations in secure environments.' },
                            { audience: 'Logistics & Support Units', focus: 'Equipment Mastery', benefit: 'Practicing the handling of hazardous materials or complex maintenance of frontline equipment safely.' }
                        ].map((segment, idx) => (
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
                        <h2 className="vr-product-section-title">Combat Readiness Scorecard</h2>
                        <p className="vr-product-section-subtitle">Quantifiable metrics tracking operational readiness</p>
                        <div className="vr-product-stats-grid">
                            {[
                                { metric: 'Situational Awareness', value: '96%', icon: '👁️', desc: 'Threat detection rate' },
                                { metric: 'Target Accuracy', value: '94%', icon: '🎯', desc: 'Precision under stress' },
                                { metric: 'Reaction Speed', value: '0.6s', icon: '⚡', desc: 'Response to contact' },
                                { metric: 'Team Coordination', value: '98%', icon: '🤝', desc: 'Squad synchronization' }
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

                {/* Security Features */}
                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">Security & Data Protection</h2>
                    <p className="vr-product-section-subtitle">Military-grade security for classified training operations</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { feature: 'Air-Gapped Systems', desc: 'Isolated networks for classified operations', icon: '🔒' },
                            { feature: 'Encrypted Data Storage', desc: 'Military-grade AES-256 encryption', icon: '🛡️' },
                            { feature: 'Secure Authentication', desc: 'Multi-factor biometric access control', icon: '🔐' },
                            { feature: 'Audit Trail Logging', desc: 'Complete session recording and tracking', icon: '📋' }
                        ].map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon">{item.icon}</div>
                                <h3 className="vr-product-feature-title">{item.feature}</h3>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Defense Section */}
                <section className="vr-product-cta">
                    <h2>Why Melzo Defense</h2>
                    <p>Secure, air-gapped data capabilities combined with the Combat Readiness Scorecard that tracks situational awareness, accuracy, and reaction speed. Every training session provides quantifiable metrics for operational readiness assessment.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Training Cost Reduction', value: '80%' },
                            { label: 'Operational Readiness', value: '99%' },
                            { label: 'Mission Success Rate', value: '95%' },
                            { label: 'Security Compliance', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Deploy Tactical Training →</button>
                </section>
            </div>
        </>
    );
}
