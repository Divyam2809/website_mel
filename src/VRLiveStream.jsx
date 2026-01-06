import React, { useEffect } from 'react';

export default function VRLiveStream({ isDarkTheme, onBookDemo }) {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/vr_livestream_hero.png')`,
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
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
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
                            Live Stream Simulation
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
                            Democratizing the VR Experience: Stream Beyond the Lab
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: '#EEEEEE',
                            maxWidth: '900px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            Breaking the walls of the physical classroom. Broadcast your immersive VR sessions to a global audience with real-time interactivity and zero geographical limits.
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
                                Launch Your Global Stream
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
                                Watch a Live Demo
                            </button>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes pulse {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.7; transform: scale(1.1); }
                    }
                `}</style>
            </section>

            {/* The Connectivity Trio */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    The Connectivity Trio
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Revolutionary streaming technology for global VR experiences
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Low-Latency 360° Broadcasting',
                            desc: 'Technology that allows viewers to look around the virtual environment in real-time without lag.',
                            icon: '📡'
                        },
                        {
                            title: 'Bi-Directional Interaction',
                            desc: 'Remote participants can influence the VR environment, ask questions, or trigger events within the simulation.',
                            icon: '🔄'
                        },
                        {
                            title: 'Universal Access',
                            desc: 'Compatible with browsers, mobile devices, and standalone headsets—no high-end PC required for the audience.',
                            icon: '🌐'
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

            {/* The Expansion Pillars */}
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
                        The Expansion Pillars
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Scaling immersive experiences beyond physical boundaries
                    </p>

                    <div style={{
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                num: '01',
                                title: 'The Infinite Classroom',
                                desc: 'Turning a 20-person physical VR lab into a 2,000-person global seminar.'
                            },
                            {
                                num: '02',
                                title: 'Hybrid Event Mastery',
                                desc: 'Host physical exhibitions while allowing virtual attendees to \'walk\' the floor and interact with speakers.'
                            },
                            {
                                num: '03',
                                title: 'Remote Expert Guidance',
                                desc: 'Allowing a specialist in one country to lead a hands-on technical training session for a team in another.'
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

            {/* Target Audience Value Props */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    Who Benefits from VR Live Streaming
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Transforming how organizations connect and educate globally
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            audience: 'Higher Education & MOOCs',
                            focus: 'Massive Scale',
                            benefit: 'Scaling specialized labs to thousands of remote students simultaneously, democratizing access to premium education.'
                        },
                        {
                            audience: 'Corporate HR & L&D',
                            focus: 'Global Consistency',
                            benefit: 'Consistent, high-impact \'Town Hall\' training for decentralized, global workforces with unified messaging.'
                        },
                        {
                            audience: 'Event & Media Agencies',
                            focus: 'Virtual Front-Row',
                            benefit: 'Offering virtual front-row seats for product launches or cultural performances to unlimited audiences worldwide.'
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

            {/* Global Connection Map */}
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
                        Global Reach, Local Impact
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Connect with audiences across continents in real-time
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            { region: 'North America', connections: '5,000+', icon: '🌎' },
                            { region: 'Europe', connections: '3,500+', icon: '🌍' },
                            { region: 'Asia Pacific', connections: '8,000+', icon: '🌏' },
                            { region: 'Global Total', connections: '20K+', icon: '🌐' }
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
                                    {stat.connections}
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    color: theme.text
                                }}>
                                    {stat.region}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Comparison */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    10x the Engagement
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    VR live streaming vs. traditional video conferencing
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { metric: 'Attention Retention', vr: '92%', video: '35%' },
                        { metric: 'Active Participation', vr: '85%', video: '20%' },
                        { metric: 'Knowledge Retention', vr: '75%', video: '25%' },
                        { metric: 'Session Completion', vr: '88%', video: '45%' }
                    ].map((comparison, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '2rem',
                                backgroundColor: theme.cardBg,
                                borderRadius: '16px',
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                color: theme.text,
                                textAlign: 'center'
                            }}>
                                {comparison.metric}
                            </h3>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        color: theme.accent,
                                        marginBottom: '0.25rem'
                                    }}>
                                        {comparison.vr}
                                    </div>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: theme.textSecondary,
                                        fontWeight: 600
                                    }}>
                                        VR Stream
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: '1.5rem',
                                    color: theme.textSecondary
                                }}>
                                    vs
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        color: theme.textSecondary,
                                        marginBottom: '0.25rem'
                                    }}>
                                        {comparison.video}
                                    </div>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: theme.textSecondary,
                                        fontWeight: 600
                                    }}>
                                        Video Call
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Melzo Live Section */}
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
                        Why Melzo Live: Simplicity and Engagement
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.textSecondary,
                        marginBottom: '3rem',
                        lineHeight: 1.7
                    }}>
                        Melzo removes the 'technical barrier' of VR, making it as easy to join an immersive 3D world as it is to join a standard video call, while maintaining 10x the engagement. No downloads, no complex setup—just click and immerse.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {[
                            { label: 'Setup Time', value: '< 30s' },
                            { label: 'Concurrent Viewers', value: '10K+' },
                            { label: 'Platform Compatibility', value: '100%' },
                            { label: 'Engagement Boost', value: '10x' }
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
                        Start Broadcasting Today →
                    </button>
                </div>
            </section>
        </div>
    );
}
