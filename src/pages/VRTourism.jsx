import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VRTourism({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrtourism"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* Video Background with Blur */}
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
                                objectFit: 'cover',
                                transform: 'scale(1.1)'
                            }}
                        >
                            <source src="/assets/videos/Statue.webm" type="video/webm" />
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
                        <div className="vr-product-badge">VIRTUAL TRAVEL EXPERIENCES</div>
                        <h1>VR in Tourism</h1>
                        <p>Travel the world from your home. Our VR tourism experiences invoke wanderlust and allow users to explore destinations before they travel.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Book A Demo</button>
                            <button className="vr-product-btn-secondary">Explore Destinations</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Tourism Experience</h2>
                    <p className="vr-product-section-subtitle">Immersive virtual travel destinations</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Virtual Destinations', desc: 'Explore iconic landmarks and hidden gems from around the world in stunning virtual reality.', number: '01' },
                            { title: 'Cultural Experiences', desc: 'Immerse yourself in local cultures, traditions, and authentic experiences.', number: '02' },
                            { title: 'Adventure Tours', desc: 'Experience thrilling adventures and outdoor activities in a safe virtual environment.', number: '03' }
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
                    <p className="vr-product-section-subtitle">Perfect for travel enthusiasts and industry professionals</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Travel Agencies', focus: 'Enhanced Marketing', benefit: 'Showcase destinations to potential travelers with immersive virtual tours that inspire bookings.' },
                            { audience: 'Tourism Boards', focus: 'Destination Promotion', benefit: 'Promote your region globally with engaging VR experiences that highlight unique attractions.' },
                            { audience: 'Hotels & Resorts', focus: 'Virtual Previews', benefit: 'Allow guests to explore your property and surroundings before making reservations.' }
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
                    <h2>Why Melzo Tourism</h2>
                    <p>Transform how people discover and experience destinations. Our VR tourism solutions increase engagement by 300% and help travelers make confident booking decisions.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Engagement Increase', value: '300%' },
                            { label: 'Booking Confidence', value: '95%' },
                            { label: 'Destinations Available', value: '100+' },
                            { label: 'User Satisfaction', value: '98%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Explore Virtual Destinations →</button>
                </section>
            </div>
        </>
    );
}
