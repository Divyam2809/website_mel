import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRIndustrial({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrindustrial"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_industrial_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Industrial Training</div>
                        <h1>Safe, Scalable Industrial Training</h1>
                        <p>Train workers on complex industrial processes and equipment without production downtime or safety risks.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request Industrial Demo</button>
                            <button className="vr-product-btn-secondary">View Training Modules</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Industrial Suite</h2>
                    <p className="vr-product-section-subtitle">Comprehensive training for industrial operations</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Process Simulation', desc: 'Practice complex manufacturing processes in a virtual environment before touching real equipment.', icon: '🏭' },
                            { title: 'Maintenance Training', desc: 'Learn preventive maintenance, troubleshooting, and repair procedures on virtual machinery.', icon: '🔧' },
                            { title: 'Safety Compliance', desc: 'Master OSHA regulations, lockout/tagout procedures, and emergency response protocols.', icon: '⚠️' }
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
                    <h2 className="vr-product-section-title">Industry Applications</h2>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Manufacturing', focus: 'Production Excellence', benefit: 'Train operators on assembly lines, CNC machines, and quality control without halting production.' },
                            { audience: 'Oil & Gas', focus: 'High-Risk Training', benefit: 'Practice drilling operations, pipeline maintenance, and emergency procedures in a safe environment.' },
                            { audience: 'Chemical Processing', focus: 'Process Safety', benefit: 'Master hazardous material handling and process control without exposure to dangerous chemicals.' }
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
                    <h2>Why Melzo Industrial</h2>
                    <p>Reduce training costs by 65% and workplace incidents by 80% with our comprehensive industrial VR training platform.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Cost Reduction', value: '65%' },
                            { label: 'Incident Prevention', value: '80%' },
                            { label: 'Training Efficiency', value: '3x' },
                            { label: 'Skill Retention', value: '90%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Modernize Your Training →</button>
                </section>
            </div>
        </>
    );
}
