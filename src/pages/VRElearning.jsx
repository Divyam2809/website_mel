import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRElearning({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrelearning"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_elearning_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR E-Learning Platform</div>
                        <h1>Education Beyond the Classroom</h1>
                        <p>Transform online learning with immersive VR experiences that boost engagement and retention across all subjects.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Explore VR Learning</button>
                            <button className="vr-product-btn-secondary">View Course Library</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Learning Experience</h2>
                    <p className="vr-product-section-subtitle">Immersive education for the digital age</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Interactive Lessons', desc: 'Engage with 3D models, simulations, and virtual environments that make abstract concepts tangible.', number: '01' },
                            { title: 'Collaborative Spaces', desc: 'Join classmates in virtual study rooms for group projects and peer learning experiences.', number: '02' },
                            { title: 'Gamified Learning', desc: 'Earn achievements, track progress, and compete in educational challenges that motivate students.', number: '03' }
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
                    <p className="vr-product-section-subtitle">Solutions for modern education</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Schools & Universities', focus: 'Enhanced Learning', benefit: 'Boost student engagement and comprehension with immersive educational experiences.' },
                            { audience: 'Online Course Providers', focus: 'Premium Content', benefit: 'Differentiate your platform with cutting-edge VR learning modules.' },
                            { audience: 'Corporate Training', focus: 'Skill Development', benefit: 'Deliver effective professional development programs with measurable outcomes.' }
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
                    <h2>Why Melzo E-Learning</h2>
                    <p>Increase learning retention by 75% and student engagement by 90% with our immersive VR education platform.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Retention Improvement', value: '75%' },
                            { label: 'Student Engagement', value: '90%' },
                            { label: 'Course Completion', value: '85%' },
                            { label: 'Learning Satisfaction', value: '95%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Revolutionize Learning →</button>
                </section>
            </div>
        </>
    );
}
