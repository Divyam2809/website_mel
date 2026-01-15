import React, { useEffect, useRef } from 'react';
import '../styles/VRProduct.css';
import AppNav from '../components/AppNav';

export default function VirtualHeritage({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';
    const videoRef = useRef(null);

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="virtualheritage"
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
                            ref={videoRef}
                            onCanPlay={() => { if (videoRef.current) videoRef.current.playbackRate = 3; }}
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
                            <source src="/assets/videos/Heritage.webm" type="video/webm" />
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
                        <div className="vr-product-badge">HISTORICAL EXPLORATION</div>
                        <h1>Virtual Heritage Tours</h1>
                        <p>Explore historical sites and monuments virtually. Experience the grandeur of the past with detailed 3D reconstructions and guided tours.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Book A Demo</button>
                            <button className="vr-product-btn-secondary">View Heritage Sites</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section">
                    <h2 className="vr-product-section-title">The Heritage Experience</h2>
                    <p className="vr-product-section-subtitle">Preserving history through immersive technology</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { title: '3D Reconstructions', desc: 'Detailed digital recreations of historical monuments and archaeological sites with accurate architectural details.', number: '01' },
                            { title: 'Audio Guides', desc: 'Expert narration and historical context provided by historians and archaeologists.', number: '02' },
                            { title: 'Interactive Exploration', desc: 'Walk through ancient civilizations and interact with historical artifacts in virtual space.', number: '03' }
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
                    <p className="vr-product-section-subtitle">Bringing history to life for everyone</p>
                    <div className="vr-product-feature-grid">
                        {[
                            { audience: 'Museums & Galleries', focus: 'Digital Preservation', benefit: 'Preserve and showcase historical artifacts and sites for future generations with digital archives.' },
                            { audience: 'Educational Institutions', focus: 'Immersive Learning', benefit: 'Bring history lessons to life with virtual field trips to ancient civilizations and monuments.' },
                            { audience: 'Cultural Organizations', focus: 'Heritage Promotion', benefit: 'Promote cultural heritage and attract global audiences to historical sites and traditions.' }
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
                    <h2>Why Melzo Heritage</h2>
                    <p>Preserve cultural heritage and make history accessible to everyone. Our virtual heritage tours reach 10x more visitors than physical sites and ensure preservation for future generations.</p>
                    <div className="vr-product-stats-grid" style={{ marginBottom: '3rem' }}>
                        {[
                            { label: 'Visitor Reach', value: '10x' },
                            { label: 'Heritage Sites', value: '50+' },
                            { label: 'Educational Impact', value: '95%' },
                            { label: 'Preservation Quality', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} className="vr-product-stat-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="vr-product-stat-value" style={{ color: '#FFFFFF' }}>{stat.value}</div>
                                <div className="vr-product-stat-label" style={{ color: '#FFFFFF' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={onBookDemo} className="vr-product-btn-secondary">Explore Heritage Sites →</button>
                </section>
            </div>
        </>
    );
}
