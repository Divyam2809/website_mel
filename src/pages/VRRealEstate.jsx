import React, { useEffect } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';
import GridBackground from '../components/GridBackground';

export default function VRRealEstate({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => {
        document.title = "Melzo 7D Real Estate VR - Selling the Vision";
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrrealestate"
            />
            <div className={`vr-product-container ${themeClass}`}>
                <section className="vr-product-hero" style={{ backgroundImage: 'url(/assets/vr_realestate_hero.webp)' }}>
                    <GridBackground isDarkTheme={isDarkTheme} />
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">Melzo 7D Real Estate VR</div>
                        <h1>Selling the Vision, <br /><span style={{ color: 'var(--accent)' }}>Not Just the Blueprint.</span></h1>
                        <p>Eliminate the imagination gap. Let buyers live in their future home today with 7D VR walkthroughs that engage all the senses.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Schedule a Virtual Tour</button>
                            <button onClick={onBookDemo} className="vr-product-btn-secondary">Request Developer Portfolio</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <h2 className="vr-product-section-title">The 7D Immersion Suite</h2>
                    <p className="vr-product-section-subtitle">Beyond visualization. Total sensory engagement.</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Full-Scale Walkthroughs', icon: '🚶', desc: 'Navigate layouts with 1:1 spatial accuracy. Clients understand room dimensions, ceiling heights, and flow in a way blueprints never convey.' },
                            { title: 'Interactive Customization', icon: '🎨', desc: 'Toggle finishes, flooring, lighting, and furniture with a single click during the demo. See marble vs. wood. Light vs. dark. Instantly.' },
                            { title: 'Environmental Simulation', icon: '🌅', desc: 'The 7D edge: Experience views at sunrise, noon, and sunset. Hear ambient street noise. Feel the neighborhood vibe before signing.' }
                        ].map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div className="vr-product-feature-icon">{item.icon}</div>
                                <h3 className="vr-product-feature-title">{item.title}</h3>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="vr-product-section">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Close Faster</span>
                        <h2 className="vr-product-section-title" style={{ marginTop: '1rem' }}>The Sales Accelerator</h2>
                    </div>
                    <div className="vr-product-benefits-list">
                        {[
                            { title: 'Pre-Construction Sales', desc: 'Secure bookings and investments before the first brick is laid. Buyers commit to what they can see, touch, and feel—even if it only exists in VR.', icon: '🏗️' },
                            { title: 'Global Reach', desc: 'Sell to international investors without physical travel. Ship a VR headset or host a remote session. Geography is no longer a barrier.', icon: '🌍' },
                            { title: 'Emotional Engagement', desc: 'Create an "ownership" feeling in minutes. When clients walk through their future living room, they\'re already mentally moved in.', icon: '❤️' }
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
                </section>

                <section className="vr-product-section alt-bg">
                    <h2 className="vr-product-section-title">Built for Every Stakeholder</h2>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: 'Real Estate Developers', focus: 'ROI Acceleration', text: 'Eliminate the cost of physical sample flats. A single VR setup replaces dozens of model units, speeding up ROI on large-scale projects.' },
                            { title: 'Architects & Designers', focus: 'Design Approval', text: 'Get clients to approve designs faster with 100% clarity. No more "I thought it would be bigger" after construction starts.' },
                            { title: 'Sales Agents', focus: 'The Wow Factor', text: 'Close deals in a competitive market with an experience that competitors can\'t match. Be the agent with the future-tech advantage.' }
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
                    <h2>The Future-Proof Sales Gallery.</h2>
                    <p>A Melzo VR setup transforms a standard sales office into a high-tech destination. Position your brand as a market leader with an experience that buyers remember—and talk about.</p>
                    <div className="vr-product-feature-grid" style={{ marginBottom: '4rem' }}>
                        {[
                            { icon: '🎯', title: 'Premium Positioning', desc: 'Stand out in a crowded market with technology that screams innovation and quality.' },
                            { icon: '⚡', title: 'Faster Decision Cycles', desc: 'Reduce the time from first viewing to contract signing by eliminating uncertainty.' },
                            { icon: '💎', title: 'Luxury Brand Appeal', desc: 'Attract high-net-worth buyers who expect cutting-edge experiences in every interaction.' }
                        ].map((item, idx) => (
                            <div key={idx} className="vr-product-feature-card">
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 className="vr-product-feature-title">{item.title}</h4>
                                <p className="vr-product-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Transform Your Sales Gallery</button>
                </section>
            </div>
        </>
    );
}
