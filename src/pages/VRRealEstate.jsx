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
                <section className="vr-product-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/vr_realestate_hero.webp)' }}>
                    <GridBackground isDarkTheme={isDarkTheme} />
                    <div className="vr-product-hero-content">
                        <div className="vr-product-badge">Melzo 7D Real Estate VR</div>
                        <h1>Selling the Vision, <br /><span style={{ color: 'var(--accent)' }}>Not Just the Blueprint.</span></h1>
                        <p>Giving buyers the ‘Try before you buy’ experience of your properties, VR can help you turn your properties into immersive experiences, engage with visitors inside VR, and get real-time data insights.</p>
                        <div className="vr-product-hero-buttons">
                            <button onClick={onBookDemo} className="vr-product-btn-primary">Schedule a Virtual Tour</button>
                            <button onClick={onBookDemo} className="vr-product-btn-secondary">Request Developer Portfolio</button>
                        </div>
                    </div>
                </section>

                <section className="vr-product-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '4rem 3rem'
                        }}>
                            {[
                                {
                                    title: 'Take clients on a virtual journey of your properties',
                                    desc: "Increase your sales turnover time by marketing commercial properties even before they're built. With Virtual Walkthrough realtors can take clients on a virtual journey of their properties, from the comfort of their home, anywhere, anytime.",
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            {/* Central Person */}
                                            <circle cx="12" cy="11" r="2.5" />
                                            <path d="M15.5 16.5a3.5 3.5 0 0 0-7 0" />

                                            {/* Orbits */}
                                            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
                                            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
                                            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />

                                            {/* Nodes/Electrons */}
                                            <circle cx="21" cy="12" r="1.5" fill="#FF9B50" stroke="none" />
                                            <circle cx="7.5" cy="4.2" r="1.5" fill="#FF9B50" stroke="none" />
                                            <circle cx="7.5" cy="19.8" r="1.5" fill="#FF9B50" stroke="none" />
                                        </svg>
                                    ),
                                    
                                },
                                {
                                    title: 'Get multi-functional insights',
                                    desc: 'Get 100% data of visitors inside virtual reality walkthroughs of the properties. With VR Analytics, you can get actionable insights on top-selling properties and location performance.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 3h18v18H3zM21 9H3M21 15H3M9 3v18M15 3v18" opacity="0.5" />
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: 'Increase engagement with AI Talkbot',
                                    desc: 'Engage visitors in a virtual walkthrough of your properties with AI-enabled Talkbot and create the ultimate customer experience. With an AI Talkbot, you can provide customer service anywhere, 24x7x365.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="10" rx="2" />
                                            <circle cx="12" cy="5" r="2" />
                                            <path d="M12 7v4" />
                                            <line x1="8" y1="16" x2="8" y2="16" />
                                            <line x1="16" y1="16" x2="16" y2="16" />
                                            <path d="M4 11s2-4 8-4 8 4 8 4" opacity="0.5" />
                                            <path d="M3 11l-2-2" />
                                            <path d="M21 11l2-2" />
                                        </svg>
                                    )
                                },
                                {
                                    title: 'Value realization',
                                    desc: 'Turn your ideas into reality with 3D 360 rendering of your projects. With our 3D rendering software, you can create a down to the details, scalable design of your project, and make your wildest imagination come true.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 1v22" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            <path d="M19 22H5" opacity="0.3" />
                                            <path d="M12 12a10 10 0 1 0 10 10" opacity="0.1" />
                                        </svg>
                                    ),
                                    
                                },
                                {
                                    title: 'Harness the power of creation',
                                    desc: "Let clients experience both the digital and physical qualities of your project by designing holographic displays of your properties. With Melzo's VR technology you can create next-generation showcases that help you promote your brand.",
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    )
                                },
                                {
                                    title: 'Virtual sales tool',
                                    desc: "Interact with customers inside a virtual tour of your projects. Melzo's VR system lets you communicate to your customers via audio and video conferences while they're in a VR experience of your properties.",
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9B50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                            <path d="M2 2l20 20" opacity="0.2" />
                                        </svg>
                                    )
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
