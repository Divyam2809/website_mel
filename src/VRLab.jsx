import React, { useEffect } from 'react';

export default function VRLab({ onNavigate, isDarkTheme, onBookDemo }) {

    useEffect(() => {
        document.title = "Melzo VR Lab - The Future of Education";
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
                backgroundImage: 'url(/assets/vr_lab_hero.png)',
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
                        Melzo VR Lab
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        Transforming Traditional <br />
                        <span style={{ color: theme.accent }}>Classrooms into Liability-Free Zones.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: theme.subText,
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: 500
                    }}>
                        Melzo VR Lab replaces outdated textbooks with a fully integrated ecosystem of motion systems, headsets, and immersive content. We turn passive listening into active, safe, and authoritative experiential learning.
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
                            Deploy Your VR Lab
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Hardware Trio */}
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
                        }}>The Hardware Trio</h2>
                        <p style={{ color: theme.subText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            A complete ecosystem designed for seamless integration.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { title: 'Motion Chairs', icon: '💺', desc: 'Go beyond static VR. Our chairs add physical feedback to virtual actions, locking student engagement and simulating real-world forces for deeper muscle memory.' },
                            { title: 'Precision Motion Systems', icon: '⚙️', desc: 'Industrial-grade 6DOF platforms that mirror complex machinery physics. Perfect for vocational training where "feeling" the machine is as important as seeing it.' },
                            { title: 'Immersive Headsets', icon: '🥽', desc: 'Enterprise-ready wireless headsets with 4K clarity. Designed for hygiene, extended wear comfort, and zero-lag performance to prevent motion sickness.' }
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
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
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

            {/* 3. Core Pillars */}
            <section style={{
                padding: '8rem 5%',
                backgroundColor: theme.bg
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>The Methodology</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '1rem' }}>Why It Works</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: 'Science Experiments', desc: 'Eliminate the cost of chemicals and the risk of burns. Students can mix volatile compounds virtually, observing reactions that would be too dangerous or expensive for a physical lab.', color: '#FF5733' },
                            { title: 'Interactive Simulations', desc: 'Don\'t just show a diagram of an engine—let them step inside it. Our simulations allow students to disassemble, interact with, and understand complex systems from the inside out.', color: '#33FF57' },
                            { title: 'Experiential Learning', desc: 'Boredom is the enemy of retention. By placing students "in" the subject matter—whether it\'s ancient history or quantum physics—we achieve up to 75% higher knowledge retention.', color: '#3357FF' }
                        ].map((pillar, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
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

            {/* 4. Target Audience Segments */}
            <section style={{
                padding: '6rem 5%',
                backgroundColor: isDarkTheme ? '#222' : '#F8F8F8',
                borderTop: theme.border,
                borderBottom: theme.border
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Tailored Impact</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'K-12 Schools', focus: 'Engagement & Retention', text: 'Capture the attention of the digital-native generation. Turn abstract concepts into memorable experiences that improve test scores and classroom participation.' },
                            { title: 'Universities', focus: 'Research & Vocational', text: 'Provide students with industry-standard training tools. Simulate surgical procedures, architectural walkthroughs, and mechanical engineering tasks without million-dollar overheads.' },
                            { title: 'CSR Programs', focus: 'Scale & Social Impact', text: 'Deploy scalable, high-quality education infrastructure to remote areas. Bridge the digital divide with a "Lab in a Box" solution that levels the playing field.' }
                        ].map((audience, idx) => (
                            <div key={idx} style={{
                                padding: '3rem',
                                background: theme.cardBg,
                                borderRadius: '20px',
                                border: theme.border,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}>
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

            {/* 5. The "Why Us" Section */}
            <section style={{
                padding: '8rem 5%',
                background: theme.bg,
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Proven Results. Zero Risk.</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.subText, marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
                        We prioritize student safety above all else, ensuring a secure environment physically and digitally, while delivering measurable improvements in learning outcomes.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            padding: '3rem',
                            background: `linear-gradient(135deg, ${theme.cardBg} 0%, ${isDarkTheme ? '#2a2a2a' : '#f9f9f9'} 100%)`,
                            borderRadius: '30px',
                            border: theme.border
                        }}>
                            <h4 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>🛡️ Uncompromising Safety</h4>
                            <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '0.95rem' }}>
                                Physical safety from hazardous materials in chemistry labs and digital safety with curated content. No risks, just learning.
                            </p>
                        </div>
                        <div style={{
                            padding: '3rem',
                            background: `linear-gradient(135deg, ${theme.cardBg} 0%, ${isDarkTheme ? '#2a2a2a' : '#f9f9f9'} 100%)`,
                            borderRadius: '30px',
                            border: theme.border
                        }}>
                            <h4 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>📈 Quantifiable Outcomes</h4>
                            <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '0.95rem' }}>
                                Don't guess if it works. Track engagement and retention metrics that consistently show 2x to 3x improvement over traditional methods.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
