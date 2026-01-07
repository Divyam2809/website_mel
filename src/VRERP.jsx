import React, { useEffect } from 'react';
import './VRProduct.css';
import AppNav from './AppNav';

export default function VRERP({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrerp"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_erp_hero.png')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR ERP Training</div>
                        <h1>Master Enterprise Systems in Virtual Reality</h1>
                        <p>Train employees on complex ERP systems through immersive VR simulations that accelerate learning and reduce errors.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request ERP Training Demo</button>
                            <button className="vr-product-btn-secondary">View Training Modules</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The ERP Training Suite</h2>
                    <p className="vr-product-section-subtitle">Immersive training for enterprise systems</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Interactive Workflows', desc: 'Practice end-to-end business processes in realistic virtual environments with real-time feedback.', icon: '🔄' },
                            { title: 'System Navigation', desc: 'Master complex ERP interfaces through guided VR tutorials and hands-on practice scenarios.', icon: '🧭' },
                            { title: 'Error Prevention', desc: 'Learn to identify and prevent common mistakes in a safe environment before working with live data.', icon: '🛡️' }
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
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Enterprise Organizations', focus: 'Faster Onboarding', benefit: 'Reduce ERP training time by 60% with immersive, hands-on learning experiences.' },
                            { audience: 'ERP Consultants', focus: 'Client Training', benefit: 'Deliver more effective training programs that improve client satisfaction and system adoption.' },
                            { audience: 'Training Providers', focus: 'Premium Offerings', benefit: 'Differentiate your services with cutting-edge VR training capabilities.' }
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
                    <h2>Why Melzo ERP</h2>
                    <p>Accelerate ERP adoption, reduce training costs, and minimize user errors with our immersive VR training platform.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Training Time Reduction', value: '60%' },
                            { label: 'User Error Reduction', value: '75%' },
                            { label: 'System Adoption Rate', value: '95%' },
                            { label: 'User Confidence', value: '90%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Revolutionize ERP Training →</button>
                </section>
            </div>
        </>
    );
}
