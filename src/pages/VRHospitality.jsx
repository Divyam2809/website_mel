import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

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
                <section className="vr-product-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/assets/vr_hospitality_hero.webp')` }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">VR Hospitality Training</div>
                        <h1>Service Excellence Through Immersive Training</h1>
                        <p>Provide the ideal customer experience and market your business globally with VR solutions that cater to your creatives needs.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Request Training Demo</button>
                            <button className="vr-product-btn-secondary">View Training Modules</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">Comprehensive VR Hospitality Suite</h2>
                    <p className="vr-product-section-subtitle">Discover, share & create immersive VR content easily.</p>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '4rem 3rem'
                        }}>
                            {[
                                {
                                    title: 'The marketing tool you need',
                                    desc: "Rather than reading advertising descriptions and 2D images, offer customers a chance to experience things for themselves with Virtual Reality Walkthrough of a suite, a particular room, or the hotel as a whole.",
                                },
                                {
                                    title: 'Get actionable insights',
                                    desc: 'Get 100% data of visitors inside virtual reality walkthroughs of your locations. With VR Analytics, you can get actionable insights on top-selling rooms and location performance.',
                                },
                                {
                                    title: 'Immerse and convert',
                                    desc: "With 360 photography you can provide customers with an immersive look at your hotels and outside locations. Melzo's 360 photography helps you create the most realistic imagery that helps you upsell your services.",
                                },
                                {
                                    title: 'Provide customer support 24x7x365',
                                    desc: 'Engage visitors with AI-enabled Talkbot that can provide visitors with key information about your hotels and booking processes.',
                                },
                                {
                                    title: 'Integrate virtual ordering system',
                                    desc: 'With virtual menus, you can let customers see what a meal looks like in a 3D 360 environment on their phones and place orders using virtual ordering services.',
                                },
                                {
                                    title: 'Achieve a 360 digital transformation',
                                    desc: "Attract new customers using immersive and interactive VR experiences. With a 360 Website, you can embed VR tools for marketing and advertising on your company website.",
                                }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'flex-start',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        const numInfo = e.currentTarget.querySelector('.feature-number');
                                        if (numInfo) {
                                            numInfo.style.color = '#FF9B50';
                                            numInfo.style.transform = 'scale(1.1)';
                                            numInfo.style.filter = 'drop-shadow(0 0 8px rgba(255, 155, 80, 0.4))';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        const numInfo = e.currentTarget.querySelector('.feature-number');
                                        if (numInfo) {
                                            numInfo.style.color = 'rgba(255, 155, 80, 0.25)';
                                            numInfo.style.transform = 'scale(1)';
                                            numInfo.style.filter = 'none';
                                        }
                                    }}>
                                    <div className="feature-number" style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        color: 'rgba(255, 155, 80, 0.25)',
                                        fontFamily: 'monospace',
                                        lineHeight: 1,
                                        marginTop: '-0.3rem',
                                        userSelect: 'none',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 700,
                                            marginBottom: '1rem',
                                            color: '#FF9B50',
                                            lineHeight: '1.3'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                            color: isDarkTheme ? '#AAA' : '#555',
                                            marginBottom: item.link ? '1rem' : '0'
                                        }}>
                                            {item.desc}
                                        </p>
                                        {item.link && (
                                            <a href="#" style={{
                                                color: '#FF9B50',
                                                textDecoration: 'underline',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                opacity: 0.8
                                            }}>
                                                {item.link}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
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
