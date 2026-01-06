import React, { useEffect } from 'react';

export default function VRExhibition({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR Exhibition - Immersive Discovery";
    }, []);

    const theme = {
        bg: isDarkTheme ? '#1A1A1A' : '#ffffff',
        text: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
        sectionBg: isDarkTheme ? '#151515' : '#FAFAFA',
        cardBg: isDarkTheme ? '#262626' : '#ffffff',
        accent: '#FF9B50',
        subText: isDarkTheme ? '#AAAAAA' : '#666666',
        border: isDarkTheme ? '1px solid #333' : '1px solid #eee'
    };

    return (
        <div style={{
            fontFamily: 'Inter, sans-serif',
            backgroundColor: theme.bg,
            color: theme.text,
            overflowX: 'hidden',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
            {/* 1. Hero Section */}
            <section style={{
                minHeight: '90vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '120px 5% 5rem',
                backgroundImage: 'url(/assets/vr_exhibition_hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.88)' : 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(3px)',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        background: 'rgba(255, 155, 80, 0.1)',
                        border: `1px solid ${theme.accent}`,
                        color: theme.accent,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(5px)'
                    }}>
                        Melzo VR Exhibition & Events
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Stop Foot Traffic. <br />
                        <span style={{ color: theme.accent }}>Start Immersive Discovery.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Break the boundaries of square footage. Offer limitless virtual experiences that boost brand retention and lead generation at every event.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{
                            background: theme.accent,
                            color: '#fff',
                            padding: '1.0rem 2.0rem',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(255, 155, 80, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                            onClick={onBookDemo}
                            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 15px 40px rgba(255, 155, 80, 0.5)'; }}
                            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 30px rgba(255, 155, 80, 0.4)'; }}
                        >
                            Elevate My Next Event
                        </button>
                        <button style={{
                            background: 'transparent',
                            border: `2px solid ${isDarkTheme ? '#fff' : '#2D2D2D'}`,
                            color: isDarkTheme ? '#fff' : '#2D2D2D',
                            padding: '1.0rem 2.0rem',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                            onClick={onBookDemo}
                            onMouseEnter={e => { e.target.style.background = isDarkTheme ? '#fff' : '#2D2D2D'; e.target.style.color = isDarkTheme ? '#000' : '#fff'; }}
                            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = isDarkTheme ? '#fff' : '#2D2D2D'; }}
                        >
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Engagement Toolkit (Feature Grid) */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: theme.sectionBg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            letterSpacing: '-1px'
                        }}>The Engagement Toolkit</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Transform passive viewers into active participants.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Interactive Product Demos', icon: '🔍', desc: 'Let attendees "explode" products into 3D components, see them in action at full scale, or customize features in real-time. Engagement that sticks.' },
                            { title: 'Virtual Booth Portals', icon: '🌐', desc: 'Transport users from a 10x10 physical space into a massive, custom-branded virtual world. Unlimited square footage, zero rental fees.' },
                            { title: 'Multi-User Presentations', icon: '👥', desc: 'Enable synchronized VR keynotes where dozens of attendees experience a presentation simultaneously. Scale your message without scaling your stage.' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                backgroundColor: theme.cardBg,
                                padding: '3rem 2rem',
                                borderRadius: '24px',
                                boxShadow: isDarkTheme ? '0 10px 40px rgba(0,0,0,0.2)' : '0 10px 40px rgba(0,0,0,0.05)',
                                textAlign: 'left',
                                transition: 'all 0.3s ease',
                                border: `1px solid ${isDarkTheme ? '#333' : 'transparent'}`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    color: theme.accent
                                }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Event Impact Pillars */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Measurable Impact</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>The Event Impact Pillars</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Maximum Retention', desc: 'Active participation ensures your brand is the most memorable part of the exhibition. Attendees don\'t just see your product—they experience it.', icon: '🧠' },
                            { title: 'Data-Driven Leads', desc: 'Track what products attendees looked at most and for how long. Turn engagement metrics into qualified sales leads with precision analytics.', icon: '📊' },
                            { title: 'Storytelling Without Limits', desc: 'Showcase "unshippable" items like heavy machinery, real estate, or massive installations anywhere in the world. Physics is no longer a constraint.', icon: '🚀' }
                        ].map((pillar, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    fontWeight: 900,
                                    color: theme.accent,
                                    lineHeight: 0.8
                                }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: theme.text }}>{pillar.title}</h3>
                                    <p style={{ color: theme.subText, lineHeight: '1.7', fontSize: '0.95rem' }}>{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Target Audience Segments */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: isDarkTheme ? '#222' : '#F8F8F8',
                borderTop: theme.border,
                borderBottom: theme.border
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Built for Every Event Type</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Corporate Trade Shows', focus: 'Stand Out & Capture Leads', text: 'Break through the noise of a crowded exhibition hall. Capture high-quality lead data while competitors hand out brochures.' },
                            { title: 'Cultural & Art Exhibitions', focus: 'Living History', text: 'Transform static displays into interactive storytelling experiences. Museums and galleries can bring artifacts to life in ways physical exhibits never could.' },
                            { title: 'Product Launches', focus: 'The Wow Factor', text: 'Create viral-worthy social media moments that extend your launch beyond the event. Make your product the talk of the industry.' }
                        ].map((audience, idx) => (
                            <div key={idx} style={{
                                padding: '3rem',
                                background: theme.cardBg,
                                borderRadius: '20px',
                                border: theme.border,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ color: theme.accent, fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>
                                    {audience.focus}
                                </div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 900,
                                    marginBottom: '1rem',
                                }}>{audience.title}</h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: theme.subText
                                }}>{audience.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The "Why Melzo" Section - Turnkey Event Logistics */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Turnkey Event Logistics.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
                        We provide the hardware, the booth setup, and the onsite technical support. You focus on your guests, not the cables.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left',
                        marginBottom: '4rem'
                    }}>
                        {[
                            { icon: '📦', title: 'Complete Hardware Package', desc: 'VR headsets, motion chairs, tracking systems, and display screens—all delivered and configured.' },
                            { icon: '🎪', title: 'Professional Booth Setup', desc: 'Our team handles installation, calibration, and aesthetic integration with your brand identity.' },
                            { icon: '🛠️', title: 'Onsite Technical Support', desc: 'Dedicated technicians ensure seamless operation throughout your event. Zero downtime guaranteed.' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                background: theme.sectionBg,
                                borderRadius: '16px',
                                border: theme.border,
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ color: theme.subText, fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button style={{
                        background: theme.accent,
                        color: '#fff',
                        padding: '1.0rem 2.5rem',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 10px 30px rgba(255, 155, 80, 0.4)',
                        transition: 'all 0.3s ease'
                    }}
                        onClick={onBookDemo}
                        onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 15px 40px rgba(255, 155, 80, 0.5)'; }}
                        onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 30px rgba(255, 155, 80, 0.4)'; }}
                    >
                        Make Your Next Event Unforgettable
                    </button>
                </div>
            </section>

        </div>
    );
}
