import React, { useEffect } from 'react';

export default function VRCrimeScene({ isDarkTheme, onBookDemo }) {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.6'}), rgba(0, 0, 0, ${isDarkTheme ? '0.8' : '0.6'})), url('/vr_crime_scene_hero.png')`,
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
                            Forensics & Tactical Investigation
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
                            Mastering the Scene Before the First Tape is Laid
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: '#EEEEEE',
                            maxWidth: '900px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            High-stakes forensic training in a zero-risk environment. Develop precision, maintain chain-of-custody protocols, and sharpen investigative instincts through hyper-realistic simulations.
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
                                Request a Tactical Briefing
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
                                Download Training Modules
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Investigative Toolkit */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    The Investigative Toolkit
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Advanced VR technology for precision forensic training
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Haptic Evidence Collection',
                            desc: 'Using specialized controllers to feel the \'weight\' and \'resistance\' of objects to practice delicate recovery techniques.',
                            icon: '🔬'
                        },
                        {
                            title: 'Dynamic Motion Effects',
                            desc: 'Simulating environmental stressors (shifting ground, unstable structures) to train focus under pressure.',
                            icon: '⚡'
                        },
                        {
                            title: 'Procedural Accuracy',
                            desc: 'Built-in checklists that track if a participant follows legal and safety protocols in real-time.',
                            icon: '✓'
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

            {/* The Tactical Pillars */}
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
                        The Tactical Pillars
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Building investigative excellence through immersive training
                    </p>

                    <div style={{
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                num: '01',
                                title: 'Risk-Free Error Correction',
                                desc: 'Allowing trainees to make \'fatal\' procedural mistakes in VR so they never make them in the field.'
                            },
                            {
                                num: '02',
                                title: 'Infinite Scene Variability',
                                desc: 'Generating thousands of randomized crime scene layouts—from residential to industrial—ensuring officers never \'memorize\' the test.'
                            },
                            {
                                num: '03',
                                title: 'Performance Playback',
                                desc: 'A \'Review Mode\' where instructors can fly through the scene and point out missed evidence or safety lapses.'
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
                    Who Benefits from Tactical VR Training
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Specialized solutions for law enforcement and forensic professionals
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            audience: 'Police Academies',
                            focus: 'Standardized Testing',
                            benefit: 'Accelerating the \'rookie\' learning curve with consistent, repeatable training scenarios that build foundational investigative skills.'
                        },
                        {
                            audience: 'Forensic Specialists',
                            focus: 'Niche Skills Development',
                            benefit: 'Mastering specialized techniques like blood-spatter analysis or ballistics in a controlled 3D space with unlimited practice opportunities.'
                        },
                        {
                            audience: 'Federal & Specialized Agencies',
                            focus: 'Rare Scenario Training',
                            benefit: 'Preparing for high-risk warrants, chemical scenes, and other critical situations that are too dangerous or rare to practice in real life.'
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

            {/* Performance Dashboard Preview */}
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
                        Real-Time Performance Tracking
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Dashboard overlay showing critical metrics for every training session
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            { metric: 'Clarity Score', value: '94%', icon: '🎯' },
                            { metric: 'Evidence Recovery Rate', value: '87%', icon: '📊' },
                            { metric: 'Protocol Compliance', value: '98%', icon: '✓' },
                            { metric: 'Time to Secure Scene', value: '12:34', icon: '⏱️' }
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
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: theme.textSecondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {stat.metric}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Melzo Section */}
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
                        Why Melzo: Legally Defensible Training
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.textSecondary,
                        marginBottom: '3rem',
                        lineHeight: 1.7
                    }}>
                        Melzo's data tracking provides a verifiable audit trail of an officer's competency and adherence to standard operating procedures (SOPs). Every action is logged, timestamped, and available for review—ensuring training meets legal and departmental standards.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {[
                            { label: 'Audit Trail Accuracy', value: '100%' },
                            { label: 'SOP Compliance Tracking', value: 'Real-Time' },
                            { label: 'Training Scenarios', value: '1000+' },
                            { label: 'Certification Ready', value: 'Yes' }
                        ].map((stat, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                backgroundColor: theme.background,
                                borderRadius: '16px',
                                border: `1px solid ${theme.border}`
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 900,
                                    color: theme.accent,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '0.95rem',
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
                        Begin Tactical Training →
                    </button>
                </div>
            </section>
        </div>
    );
}
