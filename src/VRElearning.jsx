import React, { useEffect } from 'react';

export default function VRElearning({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR E-Learning - The Classroom Without Walls";
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
                backgroundImage: 'url(/assets/vr_elearning_hero.png)',
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
                    backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
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
                        Melzo VR E-Learning
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        The Classroom <br />
                        <span style={{ color: theme.accent }}>Without Walls.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Break free from the limitations of physical space. Access curriculum-aligned assessment and immersive lessons anytime, anywhere.
                        Shift from passive watching to <strong>active doing</strong> with our comprehensive VR platform.
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
                            Start Learning
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Hardware Compatibility Section */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    {/* Image/Visual Placeholder */}
                    <div style={{
                        background: isDarkTheme ? '#2a2a2a' : '#f0f0f0',
                        borderRadius: '24px',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* You can replace this with an actual image of Meta Quest headsets */}
                        <div style={{ fontSize: '5rem' }}>🥽</div>
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontWeight: 700,
                            opacity: 0.6
                        }}>Meta Quest 2 & 3 Ready</div>
                    </div>

                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            letterSpacing: '-1px'
                        }}>
                            Seamless Integration with <span style={{ color: theme.accent }}>Meta Quest.</span>
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.7',
                            color: theme.subText,
                            marginBottom: '2rem'
                        }}>
                            We believe in accessibility. Our platform is optimized for the world's most popular standalone VR headsets: <strong>Meta Quest 2 and 3</strong>. No expensive PC tethers, no complex setups. Just put on the headset, and your classroom appears.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'grid',
                            gap: '1rem'
                        }}>
                            {[
                                "Zero-Tether Mobility",
                                "Instant curriculum deployment",
                                "Budget-friendly hardware scaling"
                            ].map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontWeight: 600,
                                    color: theme.text
                                }}>
                                    <span style={{
                                        color: theme.accent,
                                        fontSize: '1.2rem'
                                    }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. The Learning Loop (Core Pillars) */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.sectionBg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>The Melzo Method</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>The Learning Loop</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Interactive 3D Lessons', desc: 'Stop staring at flat 2D diagrams. Walk around floating molecules, disassemble engines with your hands, and explore historical sites as if you were there.', icon: '🎲' },
                            { title: 'Virtual Experiments', desc: 'Conduct chemistry, physics, and biology labs without the risk of spills or burns. It’s safe, repeatable, and cost-effective for every student.', icon: '⚗️' },
                            { title: 'Integrated Assessments', desc: 'We track understanding in real-time. Teachers get instant feedback on student performance, not just pass/fail grades, but "how" they learn.', icon: '📊' }
                        ].map((pillar, idx) => (
                            <div key={idx} style={{
                                background: theme.cardBg,
                                padding: '3rem',
                                borderRadius: '24px',
                                border: theme.border,
                                textAlign: 'left',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem'
                                }}>{pillar.icon}</div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: theme.text }}>{pillar.title}</h3>
                                <p style={{ color: theme.subText, lineHeight: '1.7', fontSize: '0.95rem' }}>{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Segmentation Benefits */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Tailored For Every Stage</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* K-12 Card */}
                        <div style={{
                            padding: '3rem',
                            background: `linear-gradient(135deg, ${theme.cardBg} 0%, ${isDarkTheme ? '#222' : '#f9f9f9'} 100%)`,
                            borderRadius: '24px',
                            border: `1px solid ${theme.accent}`,
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: theme.accent, fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>K-12 Education</div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Engagement & Retention</h3>
                            <p style={{ color: theme.subText, lineHeight: '1.6' }}>
                                Capture the imagination of abstract concepts. Turn biology and geometry into tangible, memorable experiences that stick.
                            </p>
                        </div>

                        {/* Higher Ed Card */}
                        <div style={{
                            padding: '3rem',
                            background: theme.cardBg,
                            borderRadius: '24px',
                            border: theme.border,
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: theme.subText, fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>Higher Education</div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Advanced Simulation</h3>
                            <p style={{ color: theme.subText, lineHeight: '1.6' }}>
                                Curriculum-aligned depth for engineering, medical, and architectural students. Practice complex procedures safely before the real world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. The "Why Melzo" Section */}
            <section style={{
                padding: '8rem 5%',
                background: theme.sectionBg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Evidence-Based Results.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                        The data is clear: <strong>Learning by Doing</strong> in VR outperforms passive lectures.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            padding: '3rem',
                            backgroundColor: theme.bg,
                            borderRadius: '30px',
                            // border: theme.border
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <h4 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '0.5rem', color: theme.accent }}>4X</h4>
                            <p style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Faster Learning Speed</p>
                            <p style={{ color: theme.subText, fontSize: '0.9rem' }}>Compared to traditional classroom instruction.</p>
                        </div>
                        <div style={{
                            padding: '3rem',
                            backgroundColor: theme.bg,
                            borderRadius: '30px',
                            // border: theme.border
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <h4 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '0.5rem', color: theme.accent }}>275%</h4>
                            <p style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Higher Confidence</p>
                            <p style={{ color: theme.subText, fontSize: '0.9rem' }}>Students are more confident in applying what they learned.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
