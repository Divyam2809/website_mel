import React, { useEffect } from 'react';

export default function VRDefence({ isDarkTheme, onBookDemo }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = {
        background: isDarkTheme ? '#0A0A0A' : '#FFFFFF',
        text: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
        textSecondary: isDarkTheme ? '#AAAAAA' : '#666666',
        cardBg: isDarkTheme ? '#1A1A1A' : '#F8F8F8',
        border: isDarkTheme ? '#333333' : '#EEEEEE',
        accent: '#FF9B50'
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: theme.background,
            color: theme.text,
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 2rem 6rem',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.65'}), rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.65'})), url('/vr_defence_hero.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: theme.accent,
                            color: '#FFFFFF',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            Tactical Defense Solutions
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            letterSpacing: '-2px',
                            color: '#FFFFFF',
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                        }}>
                            Winning the Mission Before the First Boot Hits the Ground
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: '#EEEEEE',
                            maxWidth: '900px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            Zero-risk tactical mastery for the modern operator. Rehearse complex maneuvers, master sophisticated weaponry, and synchronize squad dynamics in a hyper-realistic VR theater.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <button
                                onClick={onBookDemo}
                                style={{
                                    padding: '1.25rem 3rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    backgroundColor: theme.accent,
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 8px 30px rgba(255, 155, 80, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 30px rgba(255, 155, 80, 0.3)';
                                }}
                            >
                                Request a Classified Demo
                            </button>
                            <button
                                style={{
                                    padding: '1.25rem 3rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    backgroundColor: 'transparent',
                                    color: '#FFFFFF',
                                    border: '2px solid #FFFFFF',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#FFFFFF';
                                    e.target.style.color = '#000000';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#FFFFFF';
                                }}
                            >
                                Consult with a Defense Specialist
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Tactical Suite */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    The Tactical Suite
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Elite-level simulation technology for modern warfare training
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Mission-Specific Rehearsals',
                            desc: 'Upload 1:1 geospatial data to recreate real-world terrain and urban environments for specific operations.',
                            icon: '🗺️'
                        },
                        {
                            title: 'Advanced Equipment Handling',
                            desc: 'Virtual interaction with complex systems—from drone-interface HUDs to armored vehicle controls.',
                            icon: '🎯'
                        },
                        {
                            title: 'Squad-Level Synchronization',
                            desc: 'Multi-user environment where team members communicate and coordinate in real-time within the same simulation.',
                            icon: '👥'
                        }
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '2.5rem',
                                backgroundColor: theme.cardBg,
                                borderRadius: '20px',
                                border: `1px solid ${theme.border}`,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = theme.accent;
                                e.currentTarget.style.boxShadow = `0 20px 50px ${theme.accent}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = theme.border;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                fontSize: '3.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                color: theme.text
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: theme.textSecondary,
                                lineHeight: 1.7
                            }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Combat Pillars */}
            <section style={{
                padding: '6rem 2rem',
                backgroundColor: theme.cardBg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: theme.accent
                    }}>
                        The Combat Pillars
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Building operational excellence through immersive training
                    </p>

                    <div style={{
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                num: '01',
                                title: 'Risk-Free Tactical Failure',
                                desc: 'Allowing for \'After Action Reviews\' (AAR) where mistakes are analyzed in 3D to ensure they aren\'t repeated in theater.'
                            },
                            {
                                num: '02',
                                title: 'Physiological Conditioning',
                                desc: 'Using motion and stress-induction scenarios to train operators to maintain focus under combat-induced pressure.'
                            },
                            {
                                num: '03',
                                title: 'Logistical Efficiency',
                                desc: 'Reducing the \'cost-per-soldier\' for training by eliminating the need for live ammunition, fuel, and transport during foundational drills.'
                            }
                        ].map((pillar, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    alignItems: 'flex-start',
                                    padding: '2rem',
                                    backgroundColor: theme.background,
                                    borderRadius: '16px',
                                    border: `1px solid ${theme.border}`,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = theme.accent;
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme.border;
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    color: theme.accent,
                                    lineHeight: 1,
                                    minWidth: '80px'
                                }}>
                                    {pillar.num}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 800,
                                        marginBottom: '0.75rem',
                                        color: theme.text
                                    }}>
                                        {pillar.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        color: theme.textSecondary,
                                        lineHeight: 1.7
                                    }}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience Benefits */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    Who Benefits from VR Tactical Training
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Specialized solutions for defense and military organizations
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            audience: 'Military Academies & Bootcamps',
                            focus: 'Standardized Training',
                            benefit: 'Accelerating the learning curve for recruits in a standardized, safe environment with consistent quality.'
                        },
                        {
                            audience: 'Special Operations Forces',
                            focus: 'Black Site Rehearsal',
                            benefit: 'High-precision tactical planning and mission rehearsal for classified operations in secure environments.'
                        },
                        {
                            audience: 'Logistics & Support Units',
                            focus: 'Equipment Mastery',
                            benefit: 'Practicing the handling of hazardous materials or complex maintenance of frontline equipment safely.'
                        }
                    ].map((segment, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '2.5rem',
                                backgroundColor: theme.cardBg,
                                borderRadius: '20px',
                                border: `2px solid ${theme.border}`,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = theme.accent;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 15px 40px ${theme.accent}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = theme.border;
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.25rem',
                                backgroundColor: theme.accent,
                                color: '#FFFFFF',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {segment.focus}
                            </div>
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                color: theme.text
                            }}>
                                {segment.audience}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: theme.textSecondary,
                                lineHeight: 1.7
                            }}>
                                {segment.benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Combat Readiness Scorecard */}
            <section style={{
                padding: '6rem 2rem',
                backgroundColor: theme.cardBg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: theme.accent
                    }}>
                        Combat Readiness Scorecard
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Quantifiable metrics tracking operational readiness
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            { metric: 'Situational Awareness', value: '96%', icon: '👁️', desc: 'Threat detection rate' },
                            { metric: 'Target Accuracy', value: '94%', icon: '🎯', desc: 'Precision under stress' },
                            { metric: 'Reaction Speed', value: '0.6s', icon: '⚡', desc: 'Response to contact' },
                            { metric: 'Team Coordination', value: '98%', icon: '🤝', desc: 'Squad synchronization' }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                style={{
                                    padding: '2rem',
                                    backgroundColor: theme.background,
                                    borderRadius: '16px',
                                    border: `2px solid ${theme.border}`,
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = theme.accent;
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme.border;
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                                    {stat.icon}
                                </div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 900,
                                    color: theme.accent,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    color: theme.text,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.metric}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: theme.textSecondary
                                }}>
                                    {stat.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    Security & Data Protection
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Military-grade security for classified training operations
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { feature: 'Air-Gapped Systems', desc: 'Isolated networks for classified operations', icon: '🔒' },
                        { feature: 'Encrypted Data Storage', desc: 'Military-grade AES-256 encryption', icon: '🛡️' },
                        { feature: 'Secure Authentication', desc: 'Multi-factor biometric access control', icon: '🔐' },
                        { feature: 'Audit Trail Logging', desc: 'Complete session recording and tracking', icon: '📋' }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '2rem',
                                backgroundColor: theme.cardBg,
                                borderRadius: '16px',
                                border: `1px solid ${theme.border}`,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = theme.accent;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = theme.border;
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                color: theme.text
                            }}>
                                {item.feature}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: theme.textSecondary,
                                lineHeight: 1.6
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Melzo Defense Section */}
            <section style={{
                padding: '6rem 2rem',
                background: `linear-gradient(135deg, ${isDarkTheme ? '#1A1A1A' : '#FFF5F0'} 0%, ${isDarkTheme ? '#0A0A0A' : '#FFDCC8'} 100%)`
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        color: theme.accent
                    }}>
                        Why Melzo Defense
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.textSecondary,
                        marginBottom: '3rem',
                        lineHeight: 1.7
                    }}>
                        Secure, air-gapped data capabilities combined with the Combat Readiness Scorecard that tracks situational awareness, accuracy, and reaction speed. Every training session provides quantifiable metrics for operational readiness assessment.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {[
                            { label: 'Training Cost Reduction', value: '80%' },
                            { label: 'Operational Readiness', value: '99%' },
                            { label: 'Mission Success Rate', value: '95%' },
                            { label: 'Security Compliance', value: '100%' }
                        ].map((stat, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                backgroundColor: theme.background,
                                borderRadius: '16px',
                                border: `1px solid ${theme.border}`
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    color: theme.accent,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: theme.textSecondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onBookDemo}
                        style={{
                            padding: '1.25rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            backgroundColor: theme.accent,
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 30px rgba(255, 155, 80, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 8px 30px rgba(255, 155, 80, 0.3)';
                        }}
                    >
                        Deploy Tactical Training →
                    </button>
                </div>
            </section>
        </div>
    );
}
