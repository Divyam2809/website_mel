import React, { useEffect } from 'react';

export default function VRERP({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR ERP - Complete Command";
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
                backgroundImage: 'url(/assets/vr_erp_hero.png)',
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
                    backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.92)',
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
                        Melzo VR-Integrated ERP
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Complete Command Over <br />
                        <span style={{ color: theme.accent }}>Your Immersive Ecosystem.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Transform VR excitement into actionable academic data. We streamline administrative overhead by connecting hardware, software, and curriculum into one centralized dashboard.
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
                            Request System Walkthrough
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Connectivity Trio (Feature Grid) */}
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
                        }}>The Connectivity Trio</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Unify your digital and physical infrastructure.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Hardware & Software Sync', icon: '🔄', desc: 'Real-time monitoring of device health, battery levels, and content deployment. Push updates to 50+ headsets with a single click.' },
                            { title: 'Automated Scheduling', icon: '📅', desc: 'Manage automated lab rotations and student bookings without friction. Eliminate conflicts and maximize hardware utilization rates.' },
                            { title: 'Curriculum Mapping', icon: '🗺️', desc: 'Ensure every VR session aligns perfectly with your academic calendar. Assign specific modules to specific classes automatically.' }
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

            {/* 3. The Insight Engine (Data Pillars) */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Data Intelligence</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>The Insight Engine</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Student Performance Tracking', desc: 'Capture micro-interactions. See not just test scores, but how long a student hesitated, which mistakes they made, and their learning curve velocity.', icon: '📈' },
                            { title: 'ROI Analytics', desc: 'Visualize usage rates and learning outcomes. justify your technology investment with hard data on engagement improvements and cost savings.', icon: '💰' },
                            { title: 'Operational Efficiency', desc: 'Reduce the manual workload for lab instructors and IT staff. Automated alerts for maintenance and instant reports for grading.', icon: '⚡' }
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

            {/* 4. Target Audience Value Props */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: isDarkTheme ? '#222' : '#F8F8F8',
                borderTop: theme.border,
                borderBottom: theme.border
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Value for Stakeholders</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'School Administrators', focus: 'Oversight & Budget', text: 'Get a bird\'s eye view of your entire specialized lab infrastructure. Optimize budgets by identifying underutilized assets.' },
                            { title: 'IT Departments', focus: 'Control & Support', text: 'Centralized control means you can troubleshoot a headset in Room 302 from your office. Deploy updates instantly without collecting devices.' },
                            { title: 'Educators', focus: 'Grading & Progress', text: 'Stop grading manually. Get automated progress reports sent directly to your inbox, allowing you to focus on teaching, not admin.' }
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

            {/* 5. The "Why Melzo ERP" Section */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>The All-in-One Advantage.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '5rem', maxWidth: '750px', margin: '0 auto 5rem' }}>
                        Move from fragmented, isolated VR experiments to a structured, scalable, institution-wide program. Melzo ERP is the glue that makes immersive learning sustainable.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{
                            background: 'transparent',
                            border: `2px solid ${theme.accent}`,
                            color: theme.accent,
                            padding: '1.0rem 2.0rem',
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
                            Calculate Your Institution's ROI
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
