import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRUdyog({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrudyog"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_udyog_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Udyog - Industrial Training</div>
                        <h1>Master Industrial Skills Without the Risk</h1>
                        <p>Comprehensive VR training for manufacturing, assembly, and industrial operations. Build expertise safely and efficiently.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Start Industrial Training</button>
                            <button className="vr-product-btn-secondary">View Training Catalog</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Industrial Toolkit</h2>
                    <p className="vr-product-section-subtitle">Advanced VR training for industrial operations</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Equipment Operation', desc: 'Train on heavy machinery, assembly lines, and specialized equipment without production downtime.', icon: '⚙️' },
                            { title: 'Safety Protocols', desc: 'Practice lockout/tagout, confined space entry, and hazard identification in realistic scenarios.', icon: '🦺' },
                            { title: 'Quality Control', desc: 'Learn inspection procedures, defect identification, and quality assurance processes.', icon: '✓' }
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
                    <h2 className="vr-product-section-title">Who Benefits</h2>
                    <p className="vr-product-section-subtitle">Solutions for industrial training needs</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Manufacturing Plants', focus: 'Operational Excellence', benefit: 'Reduce training time and improve safety compliance with immersive equipment training.' },
                            { audience: 'ITIs & Skill Centers', focus: 'Practical Skills', benefit: 'Provide hands-on training without expensive equipment or safety risks.' },
                            { audience: 'Maintenance Teams', focus: 'Technical Mastery', benefit: 'Practice complex repairs and troubleshooting in a risk-free environment.' }
                        ].map((segment, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{segment.focus}</div>
                                <h3 className="vr-product-feature-title">{segment.audience}</h3>
                                <p className="vr-product-feature-desc">{segment.benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>Why Melzo Udyog</h2>
                    <p>Reduce workplace accidents by 70% and training costs by 60% with our comprehensive industrial VR training platform.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Accident Reduction', value: '70%' },
                            { label: 'Training Cost Savings', value: '60%' },
                            { label: 'Skill Proficiency', value: '90%' },
                            { label: 'Compliance Rate', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Transform Your Training →</button>
                </section>
            </div>
        </>
    );
}
