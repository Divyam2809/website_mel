import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRAnimalSurgery({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vranimalsurgery"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_animal_surgery_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Veterinary Training</div>
                        <h1>Master Veterinary Surgery Without Animal Subjects</h1>
                        <p>Practice complex surgical procedures on realistic virtual animals, building expertise while upholding ethical standards.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request Vet Training Demo</button>
                            <button className="vr-product-btn-secondary">View Procedure Library</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Surgical Suite</h2>
                    <p className="vr-product-section-subtitle">Comprehensive veterinary surgical training</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Realistic Anatomy', desc: 'Interact with anatomically accurate 3D models of various animal species with realistic tissue response.', number: '01' },
                            { title: 'Surgical Procedures', desc: 'Practice spay/neuter, orthopedic repairs, soft tissue surgery, and emergency procedures.', number: '02' },
                            { title: 'Haptic Feedback', desc: 'Feel realistic tissue resistance, tool feedback, and surgical sensations through advanced haptics.', number: '03' }
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
                    <h2 className="vr-product-section-title">Who Benefits</h2>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Veterinary Schools', focus: 'Ethical Training', benefit: 'Provide hands-on surgical experience without using live animals, meeting modern ethical standards.' },
                            { audience: 'Veterinary Clinics', focus: 'Skill Development', benefit: 'Train new vets and refresh experienced practitioners on advanced procedures.' },
                            { audience: 'Research Institutions', focus: 'Procedure Development', benefit: 'Test and refine new surgical techniques in a risk-free virtual environment.' }
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
                    <h2>Why Melzo Veterinary</h2>
                    <p>Reduce training costs, eliminate ethical concerns, and improve surgical outcomes with unlimited practice opportunities.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Practice Repetitions', value: 'Unlimited' },
                            { label: 'Animal Subjects Used', value: 'Zero' },
                            { label: 'Surgical Proficiency', value: '95%' },
                            { label: 'Student Confidence', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Transform Vet Education →</button>
                </section>
            </div>
        </>
    );
}
