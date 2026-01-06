import React, { useEffect } from 'react';

export default function VRKala({ isDarkTheme, onBookDemo }) {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'}), rgba(0, 0, 0, ${isDarkTheme ? '0.7' : '0.5'})), url('/vr_kala_hero_1767705039438.png')`,
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
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            letterSpacing: '-2px',
                            color: '#FFFFFF',
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                        }}>
                            History is No Longer a Spectator Sport
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: '#EEEEEE',
                            maxWidth: '800px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            Melzo VR bridges the gap between centuries, allowing students and visitors to 'live' the art, music, and culture they used to only read about.
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
                                Bring Culture to Life
                            </button>
                            <button
                                onClick={onBookDemo}
                                style={{
                                    padding: '1.25rem 3rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    backgroundColor: 'transparent',
                                    color: theme.text,
                                    border: `2px solid ${theme.text}`,
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = theme.text;
                                    e.target.style.color = theme.background;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = theme.text;
                                }}
                            >
                                Request a Curated Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Immersion Trio */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    The Immersion Trio
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Experience culture through three revolutionary dimensions
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Virtual Time Travel',
                            desc: 'Walking through reconstructed historical sites with 360-degree historical accuracy.',
                            icon: '🏛️'
                        },
                        {
                            title: 'Interactive Art & Music',
                            desc: 'Allowing users to \'conduct\' a virtual symphony or \'paint\' alongside digital masters to understand technique.',
                            icon: '🎨'
                        },
                        {
                            title: 'Global Heritage Access',
                            desc: 'Bringing the world\'s most remote or fragile cultural artifacts to local classrooms and museums.',
                            icon: '🌍'
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

            {/* The Impact Pillars */}
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
                        The Impact Pillars
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Transforming cultural education through immersive technology
                    </p>

                    <div style={{
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                num: '01',
                                title: 'Deep Emotional Connection',
                                desc: 'Using first-person perspectives to build empathy and understanding of diverse cultural practices.'
                            },
                            {
                                num: '02',
                                title: 'Active Preservation',
                                desc: 'How VR creates a permanent, interactive digital record of history that cannot be damaged or lost.'
                            },
                            {
                                num: '03',
                                title: 'Multi-Sensory Learning',
                                desc: 'Combining sight, sound, and interaction to boost retention rates by up to 75% compared to traditional lectures.'
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
                    Who Benefits from Cultural Immersion
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Tailored solutions for every cultural institution
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            audience: 'Museums & Galleries',
                            focus: 'Living Exhibits',
                            benefit: 'Attracting younger demographics and increasing visitor dwell time with interactive experiences that make history come alive.'
                        },
                        {
                            audience: 'K-12 & Higher Ed',
                            focus: 'Experiential Field Trips',
                            benefit: 'Enhancing Humanities and Arts curriculum with immersive experiences that cost zero in travel while delivering maximum educational impact.'
                        },
                        {
                            audience: 'Cultural Centers',
                            focus: 'Heritage Preservation',
                            benefit: 'Community engagement and preserving local heritage for future generations through interactive digital archives.'
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
                        Why Melzo: Authenticity & Accessibility
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.textSecondary,
                        marginBottom: '3rem',
                        lineHeight: 1.7
                    }}>
                        Melzo partners with historians and artists to ensure simulations are accurate, while providing a 'plug-and-play' setup that requires no technical expertise from staff.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {[
                            { label: 'Historical Accuracy', value: '100%' },
                            { label: 'Setup Time', value: '< 30 min' },
                            { label: 'Technical Expertise Required', value: 'Zero' },
                            { label: 'Retention Improvement', value: '75%' }
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
                        Experience Cultural Immersion →
                    </button>
                </div>
            </section>
        </div>
    );
}
