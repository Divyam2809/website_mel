import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function CityGuides({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="cityguides"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* Video Background */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        >
                            <source src="/assets/videos/City.webm" type="video/webm" />
                        </video>
                        {/* Dark Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}))`
                        }}></div>
                    </div>

                    <div className="vr-product-hero-content" style={{ position: 'relative', zIndex: 1 }}>
                        <div className="vr-product-badge">IMMERSIVE CITY EXPLORATION</div>
                        <h1>360° City Guides</h1>
                        <p>Comprehensive 360-degree guides for cities. Navigate streets, visit landmarks, and discover hidden gems in an immersive virtual format.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Book A Demo</button>
                            <button className="vr-product-btn-secondary">Explore Cities</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The City Experience</h2>
                    <p className="vr-product-section-subtitle">Navigate cities like never before</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Street View Navigation', desc: 'Walk through city streets in 360-degree panoramic views with smooth transitions between locations.', number: '01' },
                            { title: 'Landmark Tours', desc: 'Visit famous landmarks, museums, and attractions with detailed information and historical context.', number: '02' },
                            { title: 'Local Insights', desc: 'Discover local restaurants, shops, and hidden gems recommended by residents and experts.', number: '03' }
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
                    <p className="vr-product-section-subtitle">Perfect for travelers and urban explorers</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Travel Planners', focus: 'Pre-Trip Research', benefit: 'Explore cities before booking trips to make informed decisions about accommodations and itineraries.' },
                            { audience: 'Tourism Offices', focus: 'City Promotion', benefit: 'Showcase your city to potential visitors worldwide with immersive virtual tours and experiences.' },
                            { audience: 'Real Estate Agents', focus: 'Neighborhood Tours', benefit: 'Help clients explore neighborhoods and understand local amenities before relocating or investing.' }
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
                    <h2>Why Melzo City Guides</h2>
                    <p>Explore cities from anywhere in the world. Our 360° city guides help travelers plan better trips and increase destination engagement by 250%.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Cities Covered', value: '75+' },
                            { label: 'Engagement Increase', value: '250%' },
                            { label: 'User Satisfaction', value: '96%' },
                            { label: 'Landmarks Featured', value: '500+' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Start Exploring Cities →</button>
                </section>
            </div>
        </>
    );
}
