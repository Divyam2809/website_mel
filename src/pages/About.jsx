import React, { useEffect, useState } from 'react';
import Timeline from '../components/Timeline';
import GridBackground from '../components/GridBackground';

import AppNav from '../components/AppNav';

export default function About({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
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
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="about"
            />
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
                    <GridBackground isDarkTheme={isDarkTheme} />
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2 }}>
                        <span style={{
                            color: '#FF9B50',
                            fontWeight: 700,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '1.2rem',
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

                {/* Mission Vision Values - Minimal Text Layout */}
                <section style={{ padding: '0 5% 8rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        <div className="accordion-container">
                            {[
                                {
                                    id: '01',
                                    title: 'Our Mission',
                                    content: '"Democratizing effective learning through immersive technology." We are on a mission to dismantle the barriers of traditional education by providing high-quality, experiential learning tools that are accessible to everyone, everywhere.',
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                },
                                {
                                    id: '02',
                                    title: 'Our Vision',
                                    content: 'To redefine how people learn and train by using virtual reality, augmented reality, and immersive systems that connect learners with real-world understanding.',
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                },
                                {
                                    id: '03',
                                    title: 'Core Values',
                                    content: 'Innovation • Global Impact • Empathy • Scale. We believe in pushing boundaries daily, creating measurable change, designing for the user, and reaching every student.',
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                }
                            ].map((item, index) => (
                                <div key={index} className="accordion-item" tabIndex={0}>
                                    <div className="accordion-header">
                                        <span className="accordion-id">{item.id}</span>
                                        <h2 className="accordion-title">{item.title}</h2>
                                        <div className="accordion-icon-wrapper">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="accordion-body">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style>{`
                            .accordion-container {
                                display: flex;
                                flex-direction: column;
                            }
                            .accordion-item {
                                border-bottom: 1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
                                transition: all 0.5s ease;
                                cursor: pointer;
                                padding: 2.5rem 0;
                                position: relative;
                                overflow: hidden;
                            }
                            .accordion-item:first-child {
                                border-top: 1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
                            }
                            
                            .accordion-header {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                position: relative;
                                z-index: 2;
                            }
                            
                            .accordion-id {
                                font-size: 1.2rem;
                                font-family: monospace;
                                opacity: 0.5;
                                margin-right: 2rem;
                                color: ${isDarkTheme ? '#FFF' : '#333'};
                            }
                            
                            .accordion-title {
                                font-size: clamp(2rem, 5vw, 3.5rem);
                                font-weight: 800; /* Extra bold */
                                margin: 0;
                                flex: 1;
                                color: ${isDarkTheme ? '#FFF' : '#1D1D1F'};
                                transition: color 0.3s ease;
                                letter-spacing: -1px;
                            }
                            
                            .accordion-icon-wrapper {
                                width: 50px;
                                height: 50px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50%;
                                border: 1px solid ${isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
                                color: ${isDarkTheme ? '#FFF' : '#333'};
                                transition: all 0.3s ease;
                            }
                            .accordion-icon-wrapper svg {
                                width: 24px;
                                height: 24px;
                            }

                            .accordion-body {
                                max-height: 0;
                                overflow: hidden;
                                transition: max-height 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, margin-top 0.5s ease;
                                opacity: 0;
                                margin-top: 0;
                            }
                            .accordion-body p {
                                font-size: 1.25rem;
                                line-height: 1.6;
                                color: ${isDarkTheme ? '#AAA' : '#666'};
                                max-width: 80%;
                                margin-left: auto; /* Push content to right alignment under title */
                                padding-top: 1rem;
                            }

                            /* Interaction States */
                            .accordion-item:hover .accordion-title,
                            .accordion-item:focus .accordion-title {
                                color: #FF9B50;
                            }
                            .accordion-item:hover .accordion-icon-wrapper {
                                background: #FF9B50;
                                border-color: #FF9B50;
                                color: #FFF;
                                transform: rotate(90deg);
                            }
                            .accordion-item:hover .accordion-body,
                            .accordion-item:focus .accordion-body {
                                max-height: 200px; /* Estimate max height */
                                opacity: 1;
                                margin-top: 1rem;
                            }
                            
                            @media (max-width: 768px) {
                                .accordion-title {
                                    font-size: 1.8rem;
                                }
                                .accordion-body p {
                                    max-width: 100%;
                                    font-size: 1rem;
                                }
                                .accordion-id {
                                    display: none;
                                }
                            }
                        `}</style>
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
                                { year: '2017', title: 'Inception', content: 'Founded in 2017, ShilpMIS Technologies Private Limited began its journey as India\'s pioneer in immersive technology.' },
                                { year: '2019', title: 'First Lab', content: 'Launched our first fully immersive VR lab in Gujarat.' },
                                { year: '2021', title: 'Expansion', content: 'Expanded operations to cover Education, CSR, and Enterprise training.' },
                                { year: '2023', title: 'Innovation', content: 'Developed proprietary VR hardware and software ecosystem.' },
                                { year: '2024', title: 'Global Reach', content: 'Partnered with international institutions for content exchange.' },
                                { year: 'Future', title: 'Next Gen', content: 'Building the metaverse of education.' }
                            ]}
                        />
                    </div>
                </section>

                {/* Awards & Recognition Section */}
                <section style={{ padding: '6rem 5%', background: isDarkTheme ? '#111' : '#F9F9F9' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: 900,
                            marginBottom: '3rem',
                            textAlign: 'center',
                            color: isDarkTheme ? '#FFF' : '#2D2D2D'
                        }}>
                            Awards & <span style={{ color: '#FF9B50' }}>Recognition</span>
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem'
                        }}>
                            {[
                                {
                                    title: "WhatsApp Startup India",
                                    subtitle: "Grand Challenge 2019",
                                    status: "Winner",
                                    prize: "$50,000",
                                    icon: <img src="/images/whatsapp.png" alt="WhatsApp Startup India" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                },
                                {
                                    title: "Vibrant Gujarat",
                                    subtitle: "Startup Summit 2018",
                                    status: "Winner",
                                    prize: "₹30,00,000",
                                    icon: <img src="/images/gujarat.png" alt="Vibrant Gujarat" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                },
                                {
                                    title: "Dubai Future Accelerators",
                                    subtitle: "Cohort 7 & 8 (2020)",
                                    status: "Finalist",
                                    prize: "KHDA Challenge",
                                    icon: <img src="/images/dubai.png" alt="Dubai Future Accelerators" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                },
                                {
                                    title: "Data Innovation Bazaar",
                                    subtitle: "Western Digital 2020",
                                    status: "National Top 5",
                                    prize: "₹2,00,000",
                                    icon: <img src="/images/data.png" alt="Data Innovation Bazaar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                }
                            ].map((award, index) => (
                                <div key={index} style={{
                                    background: isDarkTheme ? '#1A1A1A' : '#FFF',
                                    borderRadius: '20px',
                                    padding: '2.5rem 2rem',
                                    textAlign: 'center',
                                    boxShadow: isDarkTheme ? '0 10px 40px rgba(0,0,0,0.2)' : '0 10px 40px rgba(255, 155, 80, 0.08)',
                                    border: `1px solid ${isDarkTheme ? '#333' : '#f0f0f0'}`,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.borderColor = '#FF9B50';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#f0f0f0';
                                    }}
                                >
                                    <div>
                                        <div style={{
                                            width: '90px',
                                            height: '90px',
                                            margin: '0 auto 1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2.5rem'
                                        }}>
                                            {award.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 800,
                                            marginBottom: '0.5rem',
                                            color: isDarkTheme ? '#FFF' : '#2D2D2D',
                                            lineHeight: '1.4'
                                        }}>
                                            {award.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: isDarkTheme ? '#AAA' : '#666',
                                            marginBottom: '2rem',
                                            fontWeight: 500
                                        }}>
                                            {award.subtitle}
                                        </p>
                                    </div>
                                    <div style={{
                                        borderTop: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                                        paddingTop: '1.5rem'
                                    }}>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            fontWeight: 700,
                                            color: '#FF9B50',
                                            textTransform: 'uppercase',
                                            marginBottom: '0.3rem',
                                            letterSpacing: '1px'
                                        }}>
                                            {award.status}
                                        </div>
                                        <div style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 900,
                                            color: isDarkTheme ? '#FFF' : '#2D2D2D'
                                        }}>
                                            {award.prize}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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


                        {/* CEO Section - Large Card */}
                        <div className="ceo-section">
                            <div className="ceo-box">
                                <img src="" className="ceo-img" alt="HARDIK DESAI" />
                                <div className="ceo-info">
                                    <div className="ceo-name-container">
                                        <h3 className="ceo-firstname">HARDIK</h3>
                                        <h3 className="ceo-surname">DESAI</h3>
                                    </div>
                                    <span className="ceo-role">Founder & CEO</span>
                                </div>
                            </div>
                        </div>

                        {/* Team Members - Single Row */}
                        <div className="team-row">
                            {[
                                { firstName: 'BHAVIK', surname: 'MEHTA', role: 'Chief Technology Officer', imgsrc: '/team/bhaviksir.png' },
                                { firstName: 'SOMNATH', surname: 'CHAUDHARI', role: 'Sales Head', imgsrc: '/team/somnathsir.jpeg' },
                                { firstName: 'TAPAN', surname: 'DESAI', role: 'Production Head', imgsrc: '/team/tapansir.jpeg' },
                                { firstName: 'GAYATRI', surname: 'BANSHIWAL', role: 'SR. HR Manager', imgsrc: '/team/gayatrimaam.png' }
                            ].map((member, idx) => (
                                <div key={idx} className="team-member-box">
                                    <img src={member.imgsrc} className="team-member-img" alt={`${member.firstName} ${member.surname}`} />
                                    <div className="team-member-info">
                                        <div className="team-member-name-container">
                                            <h4 className="team-member-firstname">{member.firstName}</h4>
                                            <h4 className="team-member-surname">{member.surname}</h4>
                                        </div>
                                        <span className="team-member-role">{member.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style>{`
                        /* CEO Section - Large Card */
                        .ceo-section {
                            display: flex;
                            justify-content: center;
                            margin-bottom: 60px;
                        }
                        .ceo-box {
                            position: relative;
                            width: 100%;
                            max-width: 400px;
                            aspect-ratio: 1 / 1;
                            overflow: hidden;
                            cursor: pointer;
                            background-color: var(--accent);
                            border-radius: 8px;
                        }
                        .ceo-img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: top;
                            display: block;
                            mix-blend-mode: multiply;
                            filter: grayscale(100%) contrast(1.2);
                            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
                        }
                        .ceo-info {
                            position: absolute;
                            bottom: 25px;
                            left: 25px;
                            z-index: 10;
                            pointer-events: none;
                        }
                        .ceo-name-container {
                            margin-bottom: 10px;
                        }
                        .ceo-firstname {
                            font-size: 2.5rem;
                            font-weight: 900;
                            line-height: 1;
                            margin: 0;
                            color: #FFFFFF;
                            letter-spacing: -2px;
                            transition: transform 0.5s ease;
                        }
                        .ceo-surname {
                            font-size: 2rem;
                            font-weight: 700;
                            line-height: 1;
                            margin: 0;
                            margin-top: 5px;
                            color: #FFFFFF;
                            letter-spacing: -1.5px;
                            opacity: 0.9;
                            transition: transform 0.5s ease;
                        }
                        .ceo-role {
                            display: block;
                            font-size: 0.85rem;
                            font-weight: 700;
                            color: var(--bg);
                            background-color: var(--accent);
                            padding: 5px 14px;
                            margin-top: 10px;
                            width: max-content;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            transition: all 0.4s ease;
                        }
                        .ceo-box:hover .ceo-img {
                            mix-blend-mode: normal;
                            filter: grayscale(0%) contrast(1);
                            transform: scale(1.05);
                        }
                        .ceo-box:hover .ceo-firstname,
                        .ceo-box:hover .ceo-surname {
                            transform: translateY(-5px);
                        }
                        .ceo-box:hover .ceo-role {
                            background-color: var(--text-main);
                            color: var(--bg);
                        }

                        /* Team Members Row - Smaller Cards */
                        .team-row {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 20px;
                            width: 100%;
                        }
                        .team-member-box {
                            position: relative;
                            aspect-ratio: 1 / 1;
                            overflow: hidden;
                            cursor: pointer;
                            background-color: var(--accent);
                            border-radius: 8px;
                        }
                        .team-member-img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: top;
                            display: block;
                            mix-blend-mode: multiply;
                            filter: grayscale(100%) contrast(1.2);
                            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
                        }
                        .team-member-info {
                            position: absolute;
                            bottom: 20px;
                            left: 20px;
                            z-index: 10;
                            pointer-events: none;
                        }
                        .team-member-name-container {
                            margin-bottom: 8px;
                        }
                        .team-member-firstname {
                            font-size: 1.5rem;
                            font-weight: 900;
                            line-height: 1;
                            margin: 0;
                            color: #FFFFFF;
                            letter-spacing: -1px;
                            transition: transform 0.5s ease;
                        }
                        .team-member-surname {
                            font-size: 1.2rem;
                            font-weight: 700;
                            line-height: 1;
                            margin: 0;
                            margin-top: 4px;
                            color: #FFFFFF;
                            letter-spacing: -0.5px;
                            opacity: 0.9;
                            transition: transform 0.5s ease;
                        }
                        .team-member-role {
                            display: block;
                            font-size: 0.7rem;
                            font-weight: 700;
                            color: var(--bg);
                            background-color: var(--accent);
                            padding: 3px 10px;
                            margin-top: 8px;
                            width: max-content;
                            text-transform: uppercase;
                            letter-spacing: 1.5px;
                            transition: all 0.4s ease;
                        }
                        .team-member-box:hover .team-member-img {
                            mix-blend-mode: normal;
                            filter: grayscale(0%) contrast(1);
                            transform: scale(1.05);
                        }
                        .team-member-box:hover .team-member-firstname,
                        .team-member-box:hover .team-member-surname {
                            transform: translateY(-3px);
                        }
                        .team-member-box:hover .team-member-role {
                            background-color: var(--text-main);
                            color: var(--bg);
                        }

                        /* Responsive Design */
                        @media (max-width: 1024px) {
                            .team-row {
                                grid-template-columns: repeat(2, 1fr);
                            }
                        }
                        @media (max-width: 640px) {
                            .team-row {
                                grid-template-columns: 1fr;
                            }
                            .ceo-name {
                                font-size: 3rem;
                            }
                            .team-member-name {
                                font-size: 1.5rem;
                            }
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
        </>
    );
}
