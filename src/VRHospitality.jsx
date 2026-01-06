import React, { useEffect } from 'react';

export default function VRHospitality({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR Hospitality - Perfect Guest Experience";
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
                backgroundImage: 'url(/assets/vr_hospitality_hero.png)',
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
                    backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)',
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
                        Melzo VR Hospitality Training
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Perfecting the Guest Experience <br />
                        <span style={{ color: theme.accent }}>Before the Check-In.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Scalable, hands-on staff training that ensures five-star service consistency across every property, worldwide. Train once, deliver excellence everywhere.
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
                            Request a Training Audit
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
                            See the Simulations
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Service Suite (Feature Grid) */}
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
                        }}>The Service Suite</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Train for every scenario, master every interaction.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Interactive Guest Simulations', icon: '👥', desc: 'Role-play difficult customer service scenarios with AI-driven virtual guests. Practice de-escalation, upselling, and VIP handling until it becomes instinct.' },
                            { title: 'Workflow Optimization', icon: '⚡', desc: 'Master high-speed tasks—housekeeping standards, banquet setup, front desk operations—to increase operational speed without sacrificing quality.' },
                            { title: 'Crisis & Emergency Readiness', icon: '🚨', desc: 'Train staff on fire safety, medical emergencies, and security protocols in a safe but realistic environment. Build muscle memory for high-pressure situations.' }
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

            {/* 3. The Efficiency Pillars */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Operational Excellence</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>The Efficiency Pillars</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Eliminate "Live" Errors', desc: 'Reduce mistakes made during on-the-job training that could lead to negative reviews, lost revenue, or safety incidents. Practice until perfect.', icon: '✅' },
                            { title: 'Rapid Onboarding', desc: 'Get new hires floor-ready 50% faster than traditional shadow-training methods. Compress weeks of training into days without compromising quality.', icon: '🚀' },
                            { title: 'Brand Standardization', desc: 'Ensure every employee, regardless of location, follows the exact same brand protocols and soft skill standards. One training, global consistency.', icon: '🌐' }
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

            {/* 4. Target Audience Benefits */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: isDarkTheme ? '#222' : '#F8F8F8',
                borderTop: theme.border,
                borderBottom: theme.border
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Tailored for Every Hospitality Segment</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Luxury Hotels & Resorts', focus: 'Excellence Standards', text: 'Maintain elite service standards that justify premium pricing. Every interaction reflects your brand\'s commitment to perfection.' },
                            { title: 'Franchise Owners', focus: 'Cost Efficiency', text: 'Achieve uniformity across locations while reducing training costs per employee. Centralized training, decentralized execution.' },
                            { title: 'Hospitality Training Centers', focus: 'Practical Lab Hours', text: 'Provide students with immersive "practical lab" hours in a virtual hotel environment. Graduate job-ready professionals.' }
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

            {/* 5. The "Why Melzo" Section - Measurable Readiness */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Measurable Readiness.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
                        Turn training from a cost center into a performance asset. Our dashboard shows management exactly which staff members have mastered specific soft skills or safety protocols.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left',
                        marginBottom: '4rem'
                    }}>
                        {[
                            { icon: '📊', title: 'Skill Verification', desc: 'Track completion rates, proficiency scores, and certification status for every employee in real-time.' },
                            { icon: '🎯', title: 'Performance Benchmarking', desc: 'Compare individual and team performance against brand standards and industry best practices.' },
                            { icon: '📈', title: 'ROI Tracking', desc: 'Measure the impact of training on guest satisfaction scores, operational efficiency, and staff retention.' }
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
                        Elevate Your Training Program
                    </button>
                </div>
            </section>

        </div>
    );
}
