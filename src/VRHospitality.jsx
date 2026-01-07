import React, { useEffect } from 'react';
import './VRProduct.css';
import AppNav from './AppNav';

export default function VRHospitality({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

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
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_hospitality_hero.png')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Hospitality Training</div>
                        <h1>Service Excellence Through Immersive Training</h1>
                        <p>Transform hospitality training with VR simulations that prepare staff for real-world scenarios in hotels, restaurants, and tourism.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request Training Demo</button>
                            <button className="vr-product-btn-secondary">View Training Modules</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Training Suite</h2>
                    <p className="vr-product-section-subtitle">Comprehensive hospitality training solutions</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Guest Service Scenarios', desc: 'Practice handling difficult guests, special requests, and high-pressure situations in a safe environment.', icon: '🏨' },
                            { title: 'Multi-Language Support', desc: 'Train staff to serve international guests with real-time language practice and cultural awareness modules.', icon: '🌐' },
                            { title: 'Emergency Protocols', desc: 'Simulate fire drills, medical emergencies, and security situations to ensure staff readiness.', icon: '🚨' }
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
                    <p className="vr-product-section-subtitle">Tailored solutions for hospitality professionals</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Hotels & Resorts', focus: 'Staff Excellence', benefit: 'Ensure consistent service quality across all touchpoints with standardized VR training programs.' },
                            { audience: 'Restaurants & Catering', focus: 'Service Mastery', benefit: 'Train waitstaff on table service, wine pairing, and customer interaction in realistic dining scenarios.' },
                            { audience: 'Tourism & Events', focus: 'Experience Management', benefit: 'Prepare tour guides and event staff for diverse situations and guest expectations.' }
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
                    <h2>Why Melzo Hospitality</h2>
                    <p>Reduce training time by 50% while improving service quality and guest satisfaction scores. Our VR platform delivers consistent, measurable training outcomes.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Training Time Reduction', value: '50%' },
                            { label: 'Service Quality Improvement', value: '85%' },
                            { label: 'Staff Retention', value: '+40%' },
                            { label: 'Guest Satisfaction', value: '95%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Elevate Your Service →</button>
                </section>
            </div>
        </>
    );
}
