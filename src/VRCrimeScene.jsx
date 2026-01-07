import React, { useEffect } from 'react';
import './VRProduct.css';

export default function VRCrimeScene({ isDarkTheme, onBookDemo }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <div className={`vr-product-container ${themeClass}`}>
            <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.6'}), rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.6'})), url('/images/vr_crime_scene_hero.png')` }}>
                <div className="vr-product-hero-content">
                    <div className="vr-product-badge">Forensics & Tactical Investigation</div>
                    <h1>Mastering the Scene Before the First Tape is Laid</h1>
                    <p>High-stakes forensic training in a zero-risk environment. Develop precision, maintain chain-of-custody protocols, and sharpen investigative instincts through hyper-realistic simulations.</p>
                    <div className="vr-product-hero-buttons">
                        <button onClick={onBookDemo} className="vr-product-btn-primary">Request a Tactical Briefing</button>
                        <button className="vr-product-btn-secondary">Download Training Modules</button>
                    </div>
                </div>
            </section>

            <section className="vr-product-section">
                <h2 className="vr-product-section-title">The Investigative Toolkit</h2>
                <p className="vr-product-section-subtitle">Advanced VR technology for precision forensic training</p>
                <div className="vr-product-feature-grid">
                    {[
                        { title: 'Haptic Evidence Collection', desc: 'Using specialized controllers to feel the \'weight\' and \'resistance\' of objects to practice delicate recovery techniques.', icon: '🔬' },
                        { title: 'Dynamic Motion Effects', desc: 'Simulating environmental stressors (shifting ground, unstable structures) to train focus under pressure.', icon: '⚡' },
                        { title: 'Procedural Accuracy', desc: 'Built-in checklists that track if a participant follows legal and safety protocols in real-time.', icon: '✓' }
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
                    <h2 className="vr-product-section-title">The Tactical Pillars</h2>
                    <p className="vr-product-section-subtitle">Building investigative excellence through immersive training</p>
                    <div className="vr-product-benefits-list">
                        {[
                            { num: '01', title: 'Risk-Free Error Correction', desc: 'Allowing trainees to make \'fatal\' procedural mistakes in VR so they never make them in the field.' },
                            { num: '02', title: 'Infinite Scene Variability', desc: 'Generating thousands of randomized crime scene layouts—from residential to industrial—ensuring officers never \'memorize\' the test.' },
                            { num: '03', title: 'Performance Playback', desc: 'A \'Review Mode\' where instructors can fly through the scene and point out missed evidence or safety lapses.' }
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
                <h2 className="vr-product-section-title">Who Benefits from Tactical VR Training</h2>
                <p className="vr-product-section-subtitle">Specialized solutions for law enforcement and forensic professionals</p>
                <div className="vr-product-feature-grid">
                    {[
                        { audience: 'Police Academies', focus: 'Standardized Testing', benefit: 'Accelerating the \'rookie\' learning curve with consistent, repeatable training scenarios that build foundational investigative skills.' },
                        { audience: 'Forensic Specialists', focus: 'Niche Skills Development', benefit: 'Mastering specialized techniques like blood-spatter analysis or ballistics in a controlled 3D space with unlimited practice opportunities.' },
                        { audience: 'Federal & Specialized Agencies', focus: 'Rare Scenario Training', benefit: 'Preparing for high-risk warrants, chemical scenes, and other critical situations that are too dangerous or rare to practice in real life.' }
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
                    <h2 className="vr-product-section-title">Real-Time Performance Tracking</h2>
                    <p className="vr-product-section-subtitle">Dashboard overlay showing critical metrics for every training session</p>
                    <div className="vr-product-stats-grid">
                        {[
                            { metric: 'Clarity Score', value: '94%', icon: '🎯' },
                            { metric: 'Evidence Recovery Rate', value: '87%', icon: '📊' },
                            { metric: 'Protocol Compliance', value: '98%', icon: '✓' },
                            { metric: 'Time to Secure Scene', value: '12:34', icon: '⏱️' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card">
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div className="vr-product-stat-value">{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ fontSize: '0.95rem' }}>{stat.metric}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="vr-product-cta">
                <h2>Why Melzo: Legally Defensible Training</h2>
                <p>Melzo's data tracking provides a verifiable audit trail of an officer's competency and adherence to standard operating procedures (SOPs). Every action is logged, timestamped, and available for review—ensuring training meets legal and departmental standards.</p>
                <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                    {[
                        { label: 'Audit Trail Accuracy', value: '100%' },
                        { label: 'SOP Compliance Tracking', value: 'Real-Time' },
                        { label: 'Training Scenarios', value: '1000+' },
                        { label: 'Certification Ready', value: 'Yes' }
                    ].map((stat, idx) => (
                        <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                            <div className="vr-product-stat-value" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>{stat.value}</div>
                            <div className="vr-product-stat-label" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
                <button onClick={onBookDemo} className="vr-product-btn-secondary">Begin Tactical Training →</button>
            </section>
        </div>
    );
}
