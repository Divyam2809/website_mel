import React, { useEffect } from 'react';

export default function AircraftSimulator({ isDarkTheme, onBookDemo }) {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? '0.75' : '0.6'}), rgba(0, 0, 0, ${isDarkTheme ? '0.75' : '0.6'})), url('/aircraft_simulator_hero.png')`,
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
                            Professional Flight Training
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
                            Earn Your Wings in a World Without Gravity
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: '#EEEEEE',
                            maxWidth: '900px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            Bridging the gap between theory and the cockpit. Master complex flight dynamics and emergency protocols in a hyper-realistic VR environment designed for the next generation of aviators.
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
                                Request a Simulator Walkthrough
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
                                Download Training Curriculum
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Cockpit Trio */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    The Cockpit Trio
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Professional-grade simulation technology for authentic flight training
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            title: 'Full Cockpit Replication',
                            desc: '1:1 mapping of dials, switches, and HUDs that respond to virtual touch with precision accuracy.',
                            icon: '🎛️'
                        },
                        {
                            title: 'Kinetic Motion Systems',
                            desc: 'Hardware mimics G-force, turbulence, and landing impact to build physiological readiness.',
                            icon: '⚡'
                        },
                        {
                            title: 'Variable Weather & Lighting',
                            desc: 'Toggle zero-visibility, night flights, and extreme storm conditions at the click of a button.',
                            icon: '🌦️'
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

            {/* The Aviation Pillars */}
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
                        The Aviation Pillars
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Building flight excellence through immersive training
                    </p>

                    <div style={{
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                num: '01',
                                title: 'Drill-Down Emergency Training',
                                desc: 'Practicing engine failures, hydraulic loss, and bird strikes in a repeatable, safe loop.'
                            },
                            {
                                num: '02',
                                title: 'Cost-Efficient Flight Hours',
                                desc: 'Reducing the financial barrier to entry by replacing expensive fuel and maintenance hours with high-fidelity VR sessions.'
                            },
                            {
                                num: '03',
                                title: 'Procedural Mastery',
                                desc: 'Ensuring \'Checklist Discipline\' is second nature before a student ever enters a physical aircraft.'
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
                    Who Benefits from VR Flight Training
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Specialized solutions for aviation professionals and institutions
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            audience: 'Flight Schools & Academies',
                            focus: 'Student Throughput',
                            benefit: 'Increasing student throughput and improving safety records through consistent, repeatable training scenarios.'
                        },
                        {
                            audience: 'Commercial Airlines',
                            focus: 'Recurrent Training',
                            benefit: 'Assessing pilot reflexes in rare, high-risk scenarios and maintaining proficiency without aircraft downtime.'
                        },
                        {
                            audience: 'Defense & Government',
                            focus: 'Mission Rehearsals',
                            benefit: 'Mission-specific rehearsals and tactical navigation training in classified or sensitive scenarios.'
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

            {/* Instructor Dashboard Metrics */}
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
                        Data-Logged Competency Tracking
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.textSecondary,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        maxWidth: '700px',
                        margin: '0 auto 4rem'
                    }}>
                        Instructor dashboard providing scientific basis for flight readiness
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            { metric: 'Response Time', value: '0.8s', icon: '⏱️', desc: 'Average reaction to emergencies' },
                            { metric: 'Path Deviation', value: '±2°', icon: '📍', desc: 'Navigation accuracy' },
                            { metric: 'Landing Accuracy', value: '98%', icon: '🛬', desc: 'Touchdown precision' },
                            { metric: 'Checklist Compliance', value: '100%', icon: '✓', desc: 'Procedural adherence' }
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

            {/* Technical Specifications */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: theme.accent
                }}>
                    Technical Specifications
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: theme.textSecondary,
                    textAlign: 'center',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Professional-grade hardware compatibility
                </p>

                <div style={{
                    backgroundColor: theme.cardBg,
                    borderRadius: '20px',
                    padding: '3rem',
                    border: `1px solid ${theme.border}`,
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse'
                    }}>
                        <tbody>
                            {[
                                { spec: 'VR Headset', value: 'Meta Quest Pro / HTC Vive Pro 2' },
                                { spec: 'Motion System', value: '6-DOF Motion Chair with Haptic Feedback' },
                                { spec: 'Field of View', value: '110° Horizontal / 90° Vertical' },
                                { spec: 'Refresh Rate', value: '90Hz - 120Hz' },
                                { spec: 'Tracking', value: 'Inside-out with sub-millimeter precision' },
                                { spec: 'Audio', value: '3D Spatial Audio with Environmental Effects' },
                                { spec: 'Controls', value: 'Physical Yoke, Throttle, and Rudder Pedals' },
                                { spec: 'Software Updates', value: 'Quarterly with New Aircraft Models' }
                            ].map((row, idx) => (
                                <tr key={idx} style={{
                                    borderBottom: idx < 7 ? `1px solid ${theme.border}` : 'none'
                                }}>
                                    <td style={{
                                        padding: '1.25rem 1rem',
                                        fontWeight: 700,
                                        color: theme.text,
                                        fontSize: '1rem'
                                    }}>
                                        {row.spec}
                                    </td>
                                    <td style={{
                                        padding: '1.25rem 1rem',
                                        color: theme.textSecondary,
                                        fontSize: '1rem',
                                        textAlign: 'right'
                                    }}>
                                        {row.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Why Melzo Aviation Section */}
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
                        Why Melzo Aviation
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: theme.textSecondary,
                        marginBottom: '3rem',
                        lineHeight: 1.7
                    }}>
                        The instructor dashboard tracks Response Time, Path Deviation, and Landing Accuracy, providing a scientific basis for flight readiness. Every maneuver is logged, analyzed, and available for comprehensive review—ensuring training meets the highest aviation standards.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {[
                            { label: 'Training Cost Reduction', value: '75%' },
                            { label: 'Safety Incident Prevention', value: '95%' },
                            { label: 'Certified Flight Hours', value: '500+' },
                            { label: 'Pilot Readiness', value: '100%' }
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
                        Begin Flight Training →
                    </button>
                </div>
            </section>
        </div>
    );
}
