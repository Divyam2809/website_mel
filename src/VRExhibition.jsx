import React, { useEffect } from 'react';
import './VRProduct.css';
import AppNav from './AppNav';

export default function VRExhibition({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => {
        document.title = "Melzo VR Exhibition - Immersive Discovery";
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrexhibition"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: 'url(/assets/vr_exhibition_hero.png)' }}>
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">Melzo VR Exhibition & Events</div>
                        <h1>
                            Stop Foot Traffic. <br />
                            <span style={{ color: 'var(--accent)' }}>Start Immersive Discovery.</span>
                        </h1>
                        <p>Break the boundaries of square footage. Offer limitless virtual experiences that boost brand retention and lead generation at every event.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Elevate My Next Event</button>
                            <button onClick={onBookDemo} className="vr-product-btn-secondary">View Case Studies</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-product-section-title">The Engagement Toolkit</h2>
                        <p className="vr-product-section-subtitle">Transform passive viewers into active participants.</p>
                        <div className="vr-product-feature-grid">
                            {[
                                { title: 'Interactive Product Demos', icon: '🔍', desc: 'Let attendees "explode" products into 3D components, see them in action at full scale, or customize features in real-time. Engagement that sticks.' },
                                { title: 'Virtual Booth Portals', icon: '🌐', desc: 'Transport users from a 10x10 physical space into a massive, custom-branded virtual world. Unlimited square footage, zero rental fees.' },
                                { title: 'Multi-User Presentations', icon: '👥', desc: 'Enable synchronized VR keynotes where dozens of attendees experience a presentation simultaneously. Scale your message without scaling your stage.' }
                            ].map((item, idx) => (
                                <div key={idx} className="vr-product-feature-card">
                                    <div className="vr-product-feature-icon">{item.icon}</div>
                                    <h3 className="vr-product-feature-title">{item.title}</h3>
                                    <p className="vr-product-feature-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Measurable Impact</span>
                            <h2 className="vr-product-section-title" style={{ marginTop: '1rem' }}>The Event Impact Pillars</h2>
                        </div>
                        <div className="vr-product-benefits-list">
                            {[
                                { title: 'Maximum Retention', desc: 'Active participation ensures your brand is the most memorable part of the exhibition. Attendees don\'t just see your product—they experience it.', icon: '🧠' },
                                { title: 'Data-Driven Leads', desc: 'Track what products attendees looked at most and for how long. Turn engagement metrics into qualified sales leads with precision analytics.', icon: '📊' },
                                { title: 'Storytelling Without Limits', desc: 'Showcase "unshippable" items like heavy machinery, real estate, or massive installations anywhere in the world. Physics is no longer a constraint.', icon: '🚀' }
                            ].map((pillar, idx) => (
                                <div key={idx} className="vr-product-benefit-item">
                                    <div className="vr-product-benefit-icon" style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 0.8 }}>{idx + 1}</div>
                                    <div>
                                        <h3 className="vr-product-benefit-title">{pillar.title}</h3>
                                        <p className="vr-product-benefit-desc">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <h2 className="vr-product-section-title">Built for Every Event Type</h2>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Corporate Trade Shows', focus: 'Stand Out & Capture Leads', text: 'Break through the noise of a crowded exhibition hall. Capture high-quality lead data while competitors hand out brochures.' },
                            { title: 'Cultural & Art Exhibitions', focus: 'Living History', text: 'Transform static displays into interactive storytelling experiences. Museums and galleries can bring artifacts to life in ways physical exhibits never could.' },
                            { title: 'Product Launches', focus: 'The Wow Factor', text: 'Create viral-worthy social media moments that extend your launch beyond the event. Make your product the talk of the industry.' }
                        ].map((audience, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-badge">{audience.focus}</div>
                                <h3 className="vr-product-feature-title">{audience.title}</h3>
                                <p className="vr-product-feature-desc">{audience.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-cta">
                    <h2>Turnkey Event Logistics.</h2>
                    <p>We provide the hardware, the booth setup, and the onsite technical support. You focus on your guests, not the cables.</p>
                    <div className="vr-product-feature-grid" style={{ marginBottom: '4rem' }}>
                        {[
                            { icon: '📦', title: 'Complete Hardware Package', desc: 'VR headsets, motion chairs, tracking systems, and display screens—all delivered and configured.' },
                            { icon: '🎪', title: 'Professional Booth Setup', desc: 'Our team handles installation, calibration, and aesthetic integration with your brand identity.' },
                            { icon: '🛠️', title: 'Onsite Technical Support', desc: 'Dedicated technicians ensure seamless operation throughout your event. Zero downtime guaranteed.' }
                        ].map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 className="vr-product-feature-title">{item.title}</h4>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Make Your Next Event Unforgettable</button>
                </section>
            </div>
        </>
    );
}
