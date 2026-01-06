import React, { useEffect } from 'react';

export default function VRAnimalSurgery({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo Animal Surgery VR - Precision Without Risk";
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
                backgroundImage: 'url(/assets/vr_animal_surgery_hero.png)',
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
                        Melzo Animal Surgery Simulation
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Precision Without <span style={{ color: theme.accent }}>Risk.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Master surgical dexterity and anatomical confidence before the first live incision. Our high-fidelity VR software replaces anxiety with muscle memory.
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
                            Request a Pilot Program
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Tactile Edge (Key Features) */}
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
                        }}>The Tactile Edge</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Bridging the gap between textbook theory and surgical reality.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Haptic Feedback', icon: '🎮', desc: 'Feel tissue resistance, bone density, and arterial pulse. Advanced haptics allow students to develop the delicate touch required for successful surgery.' },
                            { title: 'Interactive 3D Anatomy', icon: '🧬', desc: 'Go deeper than any dissection video. Peel back layers of muscle, organ, and nerve systems in real-time to understand spatial relationships.' },
                            { title: 'Step-by-Step Mentorship', icon: '👨‍🏫', desc: 'Your persistent virtual mentor. The software guides students through complex procedures, offering correction and advice at every incision.' }
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

            {/* 3. The Ethical & Practical Pillars */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Responsible Innovation</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>Ethical & Practical Impact</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'The Ethical Alternative', desc: 'Align with modern ethics. Significantly reduce the reliance on live specimens and cadavers, meeting the rigorous standards of institutional review boards.', icon: '🌿' },
                            { title: 'Limitless Repetition', desc: 'In a wet lab, a mistake is final. In VR, it\'s a learning opportunity. Students can repeat critical procedures indefinitely until they reach 100% competency.', icon: '🔁' },
                            { title: 'Cost Efficiency', desc: 'Slash the budget for consumables. Eliminate recurring costs for biological samples, chemical preservatives, and hazardous waste disposal.', icon: '💰' }
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
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Tailored For Institutions</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Veterinary Universities', focus: 'OSCE Readiness', text: 'Prepare students for high-stakes exams. Ensure every graduate hits the operating room with verified, standard-compliant surgical skills.' },
                            { title: 'Medical Training Centers', focus: 'Anatomical Study', text: 'Provide a risk-free environment for exploring cross-species anatomy. Perfect for foundational courses in surgical precision and biology.' },
                            { title: 'Research Institutions', focus: 'Standardization', text: 'Train lab technicians to a unified standard. Ensure experimental procedures are humane, accurate, and scientifically reproducible.' }
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

            {/* 5. The "Confidence Score" Section */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Data-Driven Competency.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '5rem', maxWidth: '750px', margin: '0 auto 5rem' }}>
                        Don't guess if a student is ready. Our <strong>Confidence Score</strong> engine tracks every movement to provide objective proof of surgical readiness.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            padding: '3rem',
                            backgroundColor: theme.sectionBg,
                            borderRadius: '30px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            border: theme.border
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: theme.accent }}>🎯</div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem', color: isDarkTheme ? '#fff' : '#000' }}>Surgical Precision</h4>
                            <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '0.9rem' }}>
                                Measures the accuracy of incisions, suture spacing, and tool handling stability against expert benchmarks.
                            </p>
                        </div>
                        <div style={{
                            padding: '3rem',
                            backgroundColor: theme.sectionBg,
                            borderRadius: '30px',
                            border: theme.border,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: theme.accent }}>⏱️</div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem', color: isDarkTheme ? '#fff' : '#000' }}>Time-to-Completion</h4>
                            <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '0.9rem' }}>
                                Tracks efficiency improvements over time, highlighting where students struggle and where they excel.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
