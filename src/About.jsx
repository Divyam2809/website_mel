import React, { useEffect, useState } from 'react';
import Timeline from './Timeline';

export default function About({ onNavigate, isDarkTheme }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const fadeInUp = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
    };

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif', overflow: 'hidden', position: 'relative' }}>

            {/* Background Blob Effects */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,155,80,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255,100,100,0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }} />

            {/* Hero Section */}
            <section style={{
                paddingTop: '8rem',
                paddingBottom: '5rem',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Grid Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: isDarkTheme
                        ? 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
                    <span style={{
                        color: '#FF9B50',
                        fontWeight: 700,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1.5rem',
                        ...fadeInUp,
                        transitionDelay: '0.1s'
                    }}>
                        Who We Are
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        ...fadeInUp,
                        transitionDelay: '0.2s'
                    }}>
                        Structuring Experience over <br />
                        <span style={{
                            background: 'linear-gradient(90deg, #FF9B50, #FF9B50)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Memorization.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        opacity: 0.8,
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        ...fadeInUp,
                        transitionDelay: '0.3s'
                    }}>
                        Melzo Anubhav is a product initiative by <strong style={{ color: '#FF9B50' }}>ShilpMIS Technologies Pvt. Ltd.</strong> We architect Virtual Reality systems that don't just teach, but immerse.
                    </p>
                </div>
            </section>

            {/* Mission Card - Glass Effect */}
            <section style={{ padding: '0 5% 6rem', position: 'relative', zIndex: 1 }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    background: isDarkTheme ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '40px',
                    padding: '5rem',
                    textAlign: 'center',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
                    ...fadeInUp,
                    transitionDelay: '0.4s'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #FF9B50, #FF6B6B)',
                        borderRadius: '50%',
                        margin: '0 auto 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        boxShadow: '0 10px 20px rgba(255, 155, 80, 0.3)'
                    }}>★</div>

                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Our Mission</h2>
                    <p style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                        fontWeight: 700,
                        lineHeight: '1.3',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        color: isDarkTheme ? '#FFF' : '#222'
                    }}>
                        "Democratizing effective learning through immersive technology."
                    </p>
                </div>
            </section>

            {/* Animated Timeline Section */}
            <section style={{ padding: '0 5%', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>Our Journey</h2>
                    <p style={{ textAlign: 'center', opacity: 0.6, marginBottom: '1rem' }}>Tracing our path from inception to innovation.</p>

                    <Timeline
                        isDarkTheme={isDarkTheme}
                        items={[
                            { year: '2018', title: 'Inception', content: 'Recognized for pioneering 5D/7D educational lab technology in India.', icon: '🚀' },
                            { year: '2019', title: 'First Lab', content: 'Launched our first fully immersive VR lab in Gujarat.', icon: '🏗️' },
                            { year: '2021', title: 'Expansion', content: 'Expanded operations to cover Education, CSR, and Enterprise training.', icon: '🌍' },
                            { year: '2023', title: 'Innovation', content: 'Developed proprietary VR hardware and software ecosystem.', icon: '💡' },
                            { year: '2024', title: 'Global Reach', content: 'Partnered with international institutions for content exchange.', icon: '🌏' },
                            { year: 'Future', title: 'Next Gen', content: 'Building the metaverse of education.', icon: '✨' }
                        ]}
                    />
                </div>
            </section>

            {/* Team - Duotone Reveal */}
            <section style={{
                padding: '8rem 0',
                background: isDarkTheme ? '#000000' : '#FFFFFF',
                overflow: 'hidden',
                '--accent': '#FF9B50',
                '--bg': isDarkTheme ? '#000000' : '#FFFFFF',
                '--text-main': isDarkTheme ? '#FFFFFF' : '#2D2D2D'
            }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px', ...fadeInUp }}>
                        <h2 className="section-title" style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontWeight: 900,
                            letterSpacing: '-4px',
                            margin: 0,
                            textTransform: 'uppercase',
                            color: 'var(--text-main)'
                        }}>
                            The <span style={{ color: 'var(--accent)' }}>Elite.</span>
                        </h2>
                    </div>

                    <div className="team-grid">
                        {[
                            { name: 'ZARA', role: 'Lead Scientist', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'KAI', role: 'UX Architect', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'LUNA', role: 'Spatial Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'ALEX', role: 'Core Eng.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' }
                        ].map((member, idx) => (
                            <div key={idx} className="member-box">
                                <img src={member.img} className="member-img" alt={member.name} />
                                <div className="member-info">
                                    <h3 className="m-name">{member.name}</h3>
                                    <span className="m-role">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        .team-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                            gap: 30px;
                            width: 100%;
                        }
                        .member-box {
                            position: relative;
                            aspect-ratio: 1 / 1;
                            overflow: hidden;
                            cursor: pointer;
                            background-color: var(--accent);
                        }
                        .member-img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            display: block;
                            mix-blend-mode: multiply;
                            filter: grayscale(100%) contrast(1.2);
                            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
                        }
                        .member-info {
                            position: absolute;
                            bottom: 30px;
                            left: 30px;
                            z-index: 10;
                            pointer-events: none;
                        }
                        .m-name {
                            font-size: 3rem;
                            font-weight: 900;
                            line-height: 0.8;
                            margin: 0;
                            color: var(--text-main);
                            letter-spacing: -2px;
                            transition: transform 0.5s ease;
                        }
                        .m-role {
                            display: block;
                            font-size: 0.9rem;
                            font-weight: 700;
                            color: var(--bg);
                            background-color: var(--accent);
                            padding: 4px 12px;
                            margin-top: 10px;
                            width: max-content;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            transition: all 0.4s ease;
                        }
                        .member-box:hover .member-img {
                            mix-blend-mode: normal;
                            filter: grayscale(0%) contrast(1);
                            transform: scale(1.05);
                        }
                        .member-box:hover .m-name {
                            transform: translateY(-5px);
                        }
                        .member-box:hover .m-role {
                            background-color: var(--text-main);
                            color: var(--bg);
                        }
                        .member-box::after {
                            content: "";
                            position: absolute;
                            top: 0; left: 0; width: 100%; height: 100%;
                            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), 
                                        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                            background-size: 100% 4px, 3px 100%;
                            pointer-events: none;
                            opacity: 0.3;
                        }
                    `}</style>
                </div>
            </section>

            {/* Global Recognition - Infinite Flow Marquee */}
            <div style={{ marginTop: '0', overflow: 'hidden', padding: '6rem 0', position: 'relative' }}>
                {/* Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', ...fadeInUp }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 900,
                        marginBottom: '0.5rem',
                        color: isDarkTheme ? '#FFF' : '#2D2D2D'
                    }}>
                        Global <span style={{ color: '#FF9B50' }}>Momentum</span>
                    </h2>
                    <p style={{ opacity: 0.6, fontSize: '1.1rem' }}>Driving the future of education across borders</p>
                </div>

                {/* Track 1: Giant Text */}
                <div className="marquee-container" style={{ marginBottom: '2rem' }}>
                    <div className="marquee-content slow">
                        {[1, 2, 3, 4].map((i) => (
                            <span key={i} style={{
                                fontSize: 'clamp(4rem, 8vw, 6rem)',
                                fontWeight: 900,
                                color: 'transparent',
                                WebkitTextStroke: '1px #FF9B50',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                marginRight: '2rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                Innovation • Impact • Experience • Scale • Immersive •
                            </span>
                        ))}
                    </div>
                </div>

                {/* Track 2: Logos / Awards */}
                <div className="marquee-container" style={{ marginBottom: '3rem', transform: 'rotate(-2deg) scale(1.05)' }}>
                    <div className="marquee-content reverse">
                        {[
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award'
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: isDarkTheme ? '#333' : '#FFF',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                marginRight: '2rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                whiteSpace: 'nowrap',
                                border: isDarkTheme ? '1px solid #444' : '1px solid #EEE',
                                color: isDarkTheme ? '#FFF' : '#333',
                                fontWeight: 700
                            }}>
                                {item}
                            </div>
                        ))}
                        {[
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award',
                            'Award'
                        ].map((item, i) => (
                            <div key={`dup-${i}`} style={{
                                background: isDarkTheme ? '#333' : '#FFF',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                marginRight: '2rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                whiteSpace: 'nowrap',
                                border: isDarkTheme ? '1px solid #444' : '1px solid #EEE',
                                color: isDarkTheme ? '#FFF' : '#333',
                                fontWeight: 700
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Track 3: Stats */}
                <div className="marquee-container">
                    <div className="marquee-content medium">
                        {[
                            { num: '5+', label: 'Countries' },
                            { num: '3000+', label: 'Schools' },
                            { num: '50K+', label: 'Students' },
                            { num: '1M+', label: 'Sessions' },
                            { num: '120+', label: 'Partners' }
                        ].map((stat, i) => (
                            <div key={i} style={{
                                marginRight: '6rem',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                whiteSpace: 'nowrap'
                            }}>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#FF9B50' }}>{stat.num}</span>
                                <span style={{ fontSize: '1rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</span>
                            </div>
                        ))}
                        {[
                            { num: '5+', label: 'Countries' },
                            { num: '3000+', label: 'Schools' },
                            { num: '50K+', label: 'Students' },
                            { num: '1M+', label: 'Sessions' },
                            { num: '120+', label: 'Partners' }
                        ].map((stat, i) => (
                            <div key={`dup-${i}`} style={{
                                marginRight: '6rem',
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                whiteSpace: 'nowrap'
                            }}>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#FF9B50' }}>{stat.num}</span>
                                <span style={{ fontSize: '1rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    .marquee-container {
                        width: 100%;
                        overflow: hidden;
                        display: flex;
                    }
                    .marquee-content {
                        display: flex;
                        animation: scrollLeft 20s linear infinite;
                    }
                    .marquee-content.slow {
                        animation-duration: 40s;
                    }
                    .marquee-content.reverse {
                        animation-direction: reverse;
                        animation-duration: 25s;
                    }
                    .marquee-content.medium {
                        animation-duration: 30s;
                    }
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); } 
                    }
                `}</style>
            </div>
        </div>
    );
}
