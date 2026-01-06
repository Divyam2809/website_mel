import React, { useEffect } from 'react';

export default function VRUdyog({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR Udyog - Industrial Training Excellence";
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
                backgroundImage: 'url(/assets/vr_udyog_hero.png)',
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
                        Melzo VR in Udyog
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Reducing Human Error Through <br />
                        <span style={{ color: theme.accent }}>Immersive Mastery.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Practice complex assembly processes in a risk-free VR environment. Accelerate time-to-competency without halting production lines or risking costly mistakes.
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
                            Request Operational Audit
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Industrial Lab Advantage (Feature Grid) */}
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
                        }}>The Industrial Lab Advantage</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Where precision meets productivity.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Motion-Enabled Training Chairs', icon: '🪑', desc: 'Kinetic feedback prevents simulation sickness and builds authentic muscle memory for heavy machinery operation. Workers feel the vibration, resistance, and movement.' },
                            { title: 'Real-Time Interactivity', icon: '⚡', desc: 'Active learning at its finest. Workers must react to assembly errors, safety hazards, and quality control issues as they happen—just like on the real floor.' },
                            { title: 'Performance Analytics Dashboard', icon: '📊', desc: 'Identify specific bottlenecks in a worker\'s skill set before they hit the factory floor. Track speed, accuracy, and safety compliance in real-time.' }
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

            {/* 3. Core Industrial Pillars */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Built for Industry</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>Core Industrial Pillars</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Assembly Precision', desc: 'Practice complex multi-step builds until they become second nature. From automotive assembly to electronics manufacturing, workers master the sequence before touching real parts.', icon: '🔧' },
                            { title: 'Occupational Safety (EHS)', desc: 'Navigate high-risk scenarios—chemical leaks, fires, equipment failures—without physical danger. Build instinctive safety responses that save lives.', icon: '🛡️' },
                            { title: 'Upskilling & Retention', desc: 'Modern tech attracts and retains top-tier technical talent. Show your workforce you\'re investing in their future with cutting-edge training infrastructure.', icon: '📈' }
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

            {/* 4. The ROI Section (Business Case) */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: isDarkTheme ? '#222' : '#F8F8F8',
                borderTop: theme.border,
                borderBottom: theme.border
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>The Cost of Traditional Training vs. Melzo VR</h2>
                    <p style={{ textAlign: 'center', color: theme.subText, fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                        The numbers don't lie. VR training delivers measurable ROI from day one.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {/* Traditional Training */}
                        <div style={{
                            padding: '3rem',
                            background: theme.cardBg,
                            borderRadius: '20px',
                            border: theme.border,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', color: isDarkTheme ? '#fff' : '#000' }}>Traditional Training</h3>
                            <ul style={{ paddingLeft: '1.5rem', color: theme.subText, lineHeight: '2', fontSize: '0.95rem' }}>
                                <li>Production line downtime</li>
                                <li>Material waste & scrap costs</li>
                                <li>Risk of equipment damage</li>
                                <li>Higher insurance premiums</li>
                                <li>Inconsistent skill development</li>
                            </ul>
                        </div>

                        {/* Melzo VR */}
                        <div style={{
                            padding: '3rem',
                            background: 'rgba(255, 155, 80, 0.05)',
                            borderRadius: '20px',
                            border: `1px solid ${theme.accent}`,
                            boxShadow: '0 10px 30px rgba(255, 155, 80, 0.1)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', color: theme.accent }}>Melzo VR</h3>
                            <ul style={{ paddingLeft: '1.5rem', color: theme.text, lineHeight: '2', fontSize: '0.95rem', fontWeight: 500 }}>
                                <li>Zero equipment downtime</li>
                                <li>Zero material waste</li>
                                <li>Risk-free practice environment</li>
                                <li>Lower premiums via compliance</li>
                                <li>Standardized, verified competency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. The "Why Melzo" Section */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Turnkey Implementation.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
                        We handle the hardware, the custom industrial modules, and the employee tracking system. It's a plug-and-play solution designed for busy factories that can't afford disruption.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left',
                        marginBottom: '4rem'
                    }}>
                        {[
                            { icon: '📦', title: 'Complete Hardware Setup', desc: 'Motion chairs, VR headsets, and tracking systems delivered and installed.' },
                            { icon: '🎯', title: 'Custom Industrial Modules', desc: 'Simulations tailored to your specific assembly lines and safety protocols.' },
                            { icon: '📈', title: 'Employee Tracking System', desc: 'Real-time dashboards showing competency levels, training hours, and certification status.' }
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
                        background: 'transparent',
                        border: `2px solid ${theme.accent}`,
                        color: theme.accent,
                        padding: '1.0rem 2.5rem',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                        onClick={onBookDemo}
                        onMouseEnter={e => { e.target.style.background = theme.accent; e.target.style.color = '#fff'; }}
                        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = theme.accent; }}
                    >
                        Schedule Your Factory Demo
                    </button>
                </div>
            </section>

        </div>
    );
}
