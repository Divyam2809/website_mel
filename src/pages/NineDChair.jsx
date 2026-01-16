import React, { useEffect, Suspense, useState } from 'react';
import initialContent from '../data/nineDChairContent.json';
import LoadingSpinner from '../components/LoadingSpinner';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import AppNav from '../components/AppNav';

// 3D Model Component
function ChairModel({ modelPath }) {
    const { scene } = useGLTF(modelPath, '/draco-gltf/');
    return <primitive object={scene} scale={1} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} />;
}

export default function NineDChair({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [content, setContent] = useState(initialContent);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Melzo VR Lab - Transforming Education";

        // Fetch Live Content
        fetch('/api/page-content/nineDChair_live')
            .then(res => res.json())
            .then(data => {
                if (data && data.hero) {
                    setContent(data);
                }
            })
            .catch(err => console.error('Error fetching 9D Chair data:', err))
            .finally(() => setIsLoading(false));
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

    if (isLoading) {
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
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.bg
                }}>
                    <LoadingSpinner />
                </div>
            </>
        );
    }

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
                {/* 1. Hero Section */}
                <style>{`
                    .nined-hero-grid {
                        min-height: 100vh;
                        position: relative;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        align-items: center;
                        justify-content: center;
                        padding: 120px 5% 5rem;
                        gap: 2rem;
                        background-image: url(/assets/vr_lab_hero.webp);
                        background-size: cover;
                        background-position: center;
                    }
                    @media (max-width: 968px) {
                        .nined-hero-grid {
                            grid-template-columns: 1fr;
                            padding: 100px 5% 3rem;
                            height: auto;
                            min-height: auto;
                        }
                    }
                `}</style>
                <section className="nined-hero-grid">
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
                            {content.hero.badge}
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            letterSpacing: '-2px'
                        }}>
                            {content.hero.titleLine1} <br />
                            <span style={{ color: theme.accent }}>{content.hero.titleHighlight}</span>
                        </h1>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: theme.subText,
                            marginBottom: '2.5rem',
                            maxWidth: '600px'
                        }}>
                            {content.hero.description}
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
                                {content.hero.primaryBtn}
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
                                {content.hero.secondaryBtn}
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
                        }}>{content.hardwareTrio.title}</h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2.5rem'
                        }}>
                            {content.hardwareTrio.items.map((item, idx) => (
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
                                        fontSize: '2.5rem',
                                        fontWeight: 800,
                                        color: theme.accent,
                                        marginBottom: '1.5rem',
                                        fontFamily: 'monospace'
                                    }}>{item.number}</div>
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
                            <span style={{ color: theme.accent, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{content.corePillars.label}</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1rem' }}>{content.corePillars.title}</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                            {content.corePillars.items.map((pillar, idx) => {
                                const pillarColor = '#FF9B50'; // Default color since we simplified the JSON model
                                return (
                                    <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            backgroundColor: pillarColor,
                                            opacity: 0.2, // background opacity
                                            flexShrink: 0,
                                            position: 'relative'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: 0, left: 0, width: '100%', height: '100%',
                                                backgroundColor: pillarColor,
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
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* 4. Target Audience Segments */}
                <section style={{
                    padding: '6rem 5%',
                    backgroundColor: isDarkTheme ? '#202020' : '#F5F5F5'
                }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}>{content.audience.title}</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {content.audience.items.map((audience, idx) => (
                                <div key={idx} style={{
                                    padding: '3rem',
                                    background: theme.cardBg,
                                    color: theme.text,
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
                                        opacity: 0.7,
                                        position: 'relative',
                                        zIndex: 1
                                    }}>{audience.text}</p>

                                    {/* Decorator */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-20px',
                                        right: '-20px',
                                        fontSize: '10rem',
                                        opacity: 0.4,
                                        fontWeight: 900,
                                        color: theme.accent
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
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>{content.stats.title}</h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: theme.subText, marginBottom: '3rem' }}>
                            {content.stats.description}
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            textAlign: 'left',
                        }}>
                            {content.stats.items.map((stat, idx) => (
                                <div key={idx} style={{
                                    backgroundColor: theme.cardBg,
                                    padding: '3rem',
                                    borderRadius: '24px',
                                    border: theme.border,
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{ color: theme.accent, fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>{stat.value}</h4>
                                    <p style={{ fontWeight: 600 }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
