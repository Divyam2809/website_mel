import React, { useEffect } from 'react';
import "./VRProduct.css";
import AppNav from './AppNav';

export default function VRLab({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrlab"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_lab_hero.png')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Science Lab</div>
                        <h1>Conduct Experiments Without the Lab</h1>
                        <p>Perform chemistry, physics, and biology experiments in a safe, cost-effective virtual laboratory environment.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Explore Virtual Lab</button>
                            <button className="vr-product-btn-secondary">View Experiment Catalog</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Virtual Laboratory</h2>
                    <p className="vr-product-section-subtitle">Complete science education platform</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Safe Experimentation', desc: 'Conduct dangerous experiments with hazardous chemicals and equipment without any safety risks.', icon: '🧪' },
                            { title: 'Unlimited Resources', desc: 'Access expensive equipment and rare materials without budget constraints or supply limitations.', icon: '🔬' },
                            { title: 'Repeatable Learning', desc: 'Repeat experiments unlimited times to master concepts and perfect techniques.', icon: '🔁' }
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
                            { audience: 'Schools & Colleges', focus: 'Enhanced Learning', benefit: 'Provide hands-on lab experience to all students without expensive equipment or safety concerns.' },
                            { audience: 'Online Education', focus: 'Practical Skills', benefit: 'Offer lab components for distance learning programs with full experimental capabilities.' },
                            { audience: 'Research Training', focus: 'Technique Mastery', benefit: 'Train researchers on advanced techniques before working with expensive or dangerous materials.' }
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
                    <h2>Why Melzo VR Lab</h2>
                    <p>Reduce lab costs by 80% while providing unlimited experimental opportunities and perfect safety compliance.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Cost Reduction', value: '80%' },
                            { label: 'Safety Incidents', value: 'Zero' },
                            { label: 'Student Engagement', value: '95%' },
                            { label: 'Concept Retention', value: '85%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Transform Science Education →</button>
                </section>
            </div>
        </>
    );
}
