import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import AppNav from './AppNav';

// 3D Model Component
function ChairModel({ modelPath }) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

export default function NineDChair({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {

    useEffect(() => {
        document.title = "Melzo VR Lab - Transforming Education";
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

    const gradientText = {
        background: `linear-gradient(135deg, ${theme.text} 0%, ${theme.accent} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="ninedchair"
            />
            <div style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: theme.bg,
                color: theme.text,
                overflowX: 'hidden',
                transition: 'background-color 0.3s ease, color 0.3s ease'
            }}>
                {/* 1. Hero Section */}
                <section style={{
                    minHeight: '100vh',
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '120px 5% 5rem',
                    gap: '2rem',
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
                        backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.65)',
                        backdropFilter: 'blur(5px)',
                        zIndex: 0
                    }} />

                    {/* Left: Text Content */}
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : 'rgba(255, 155, 80, 0.1)',
                            border: `1px solid ${theme.accent}`,
                            color: theme.accent,
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Melzo 9D Chair
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            letterSpacing: '-2px'
                        }}>
                            Ultimate Motion Simulation <br />
                            <span style={{ color: theme.accent }}>For Next-Level Education.</span>
                        </h1>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: theme.subText,
                            marginBottom: '2.5rem',
                            maxWidth: '600px'
                        }}>
                            The 9D VR Chair offers advanced motion simulation with haptic feedback and immersive visuals for higher education and industrial training labs. Compatible with top VR headsets, combining technology, comfort, and experiential learning.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button style={{
                                background: theme.accent,
                                color: '#fff',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                boxShadow: '0 10px 30px rgba(255, 155, 80, 0.3)',
                                transition: 'transform 0.2s'
                            }}
                                onClick={onBookDemo}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                            >
                                Experience 9D VR
                            </button>
                            <button style={{
                                background: 'transparent',
                                color: theme.text,
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                border: theme.border,
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'border-color 0.2s'
                            }}
                                onMouseEnter={e => e.target.style.borderColor = theme.accent}
                                onMouseLeave={e => e.target.style.borderColor = isDarkTheme ? '#333' : '#eee'}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right: 3D Model */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        height: '600px',
                        width: '100%',
                        cursor: 'grab'
                    }}>
                        <Canvas
                            camera={{ position: [3, 2, 5], fov: 45 }}
                            dpr={[1, 2]}
                        >
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.6} />
                                <spotLight position={[10, 20, 10]} angle={0.2} penumbra={1} intensity={10} />
                                <pointLight position={[-10, -5, -10]} intensity={0.5} />
                                <Environment preset="city" />
                                <ChairModel modelPath="/assets/9d_chair.glb" />
                                <OrbitControls
                                    makeDefault
                                    autoRotate
                                    autoRotateSpeed={2.0}
                                    enableZoom={false}
                                    minPolarAngle={Math.PI / 4}
                                    maxPolarAngle={Math.PI / 1.5}
                                />
                            </Suspense>
                        </Canvas>
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            // background: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            padding: '0.4rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            pointerEvents: 'none',
                            backdropFilter: 'blur(5px)'
                        }}>
                            Drag to Rotate
                        </div>
                    </div>
                </section>


                {/* 2. The Hardware Trio */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: theme.sectionBg
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            textAlign: 'center',
                            marginBottom: '4rem',
                            letterSpacing: '-1px'
                        }}>The Hardware Trio</h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2.5rem'
                        }}>
                            {[
                                { title: 'Interactive Chairs', icon: '💺', desc: 'Ergonomic 9D chairs designed for extended learning sessions with built-in haptics.' },
                                { title: 'Motion Systems', icon: '⚡', desc: 'Advanced 6DOF motion platforms that simulate real-world physics and movement.' },
                                { title: 'VR Headsets', icon: '🥽', desc: 'High-fidelity, wireless headsets delivering crystal clear 4K visuals.' }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    backgroundColor: theme.cardBg,
                                    padding: '2.5rem',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease',
                                    border: '1px solid transparent',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.borderColor = theme.accent;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: '1.5rem',
                                        background: isDarkTheme ? '#333' : '#f0f0f0',
                                        width: '80px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        margin: '0 auto 1.5rem'
                                    }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ color: theme.subText, lineHeight: '1.6' }}>{item.desc}</p>
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
                        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Foundation</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1rem' }}>Core Pillars of Learning</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                            {[
                                { title: 'Science Experiments', desc: 'Conduct dangerous or expensive experiments in a perfectly safe, virtual environment.', color: '#4ADE80' },
                                { title: 'Interactive Simulations', desc: 'Complex concepts visualized through manipulatable 3D models and real-time physics.', color: '#60A5FA' },
                                { title: 'Experiential Learning', desc: 'Learning by doing. Retain 75% more information through active participation.', color: '#F472B6' }
                            ].map((pillar, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        backgroundColor: pillar.color,
                                        opacity: 0.2, // background opacity
                                        flexShrink: 0,
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, width: '100%', height: '100%',
                                            backgroundColor: pillar.color,
                                            opacity: 0.8, // foreground dot
                                            borderRadius: '12px',
                                            transform: 'scale(0.4)'
                                        }}></div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.8rem' }}>{pillar.title}</h3>
                                        <p style={{ color: theme.subText, lineHeight: '1.6' }}>{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Target Audience Segments */}
                <section style={{
                    padding: '6rem 5%',
                    backgroundColor: isDarkTheme ? '#202020' : '#F5F5F5'
                }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}>Who We Empower</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'K-12 Schools', text: 'Engage young minds with immersive biology, physics, and history lessons that spark curiosity.' },
                                { title: 'Universities', text: 'Advanced engineering and medical simulations for higher education and practical training.' },
                                { title: 'CSR Programs', text: 'Bringing world-class education infrastructure to under-resourced communities.' }
                            ].map((audience, idx) => (
                                <div key={idx} style={{
                                    padding: '3rem',
                                    background: idx === 1 ? theme.accent : theme.cardBg,
                                    color: idx === 1 ? '#fff' : theme.text,
                                    borderRadius: '30px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: 800,
                                        marginBottom: '1rem',
                                        position: 'relative',
                                        zIndex: 1
                                    }}>{audience.title}</h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.6',
                                        opacity: idx === 1 ? 1 : 0.7,
                                        position: 'relative',
                                        zIndex: 1
                                    }}>{audience.text}</p>

                                    {/* Decorator */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-20px',
                                        right: '-20px',
                                        fontSize: '10rem',
                                        opacity: 0.1,
                                        fontWeight: 900,
                                        color: idx === 1 ? '#fff' : theme.accent
                                    }}>
                                        {idx + 1}
                                    </div>
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
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Safe. Proven. Authoritative.</h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: theme.subText, marginBottom: '3rem' }}>
                            We don't just provide equipment; we provide peace of mind. Our labs are built with student safety as the #1 priority, ensuring a risk-free environment for handling hazardous virtual chemicals or complex machinery.
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                            textAlign: 'left',
                            backgroundColor: theme.cardBg,
                            padding: '3rem',
                            borderRadius: '24px',
                            border: theme.border
                        }}>
                            <div>
                                <h4 style={{ color: theme.accent, fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>100%</h4>
                                <p style={{ fontWeight: 600 }}>Student Safety Record</p>
                            </div>
                            <div>
                                <h4 style={{ color: theme.accent, fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>2X</h4>
                                <p style={{ fontWeight: 600 }}>Faster Learning Retention</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
