import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Icon Component for rendering SVG icons
const Icon = ({ type, color = '#FF9B50' }) => {
    const icons = {
        // Hardware
        rocket: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.5-2 3.5-2 5.5 2 0 4-0.5 5.5-2L18 10l-4-4L4.5 16.5z" />
                <path d="M14 6l4 4" />
                <path d="M8 12l4 4" />
                <path d="M22 2L15 9" />
            </svg>
        ),
        gamepad: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="12" x2="10" y2="12" />
                <line x1="8" y1="10" x2="8" y2="14" />
                <line x1="15" y1="13" x2="15.01" y2="13" />
                <line x1="18" y1="11" x2="18.01" y2="11" />
                <rect x="2" y="6" width="20" height="12" rx="2" />
            </svg>
        ),

        // Software
        wrench: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        server: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        brush: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 12l-8.5 8.5a2.121 2.121 0 0 1-3-3L15 9" />
                <path d="M15 9l5-5C21 3 22 3 22 5c0 2-2 3-3 4z" />
            </svg>
        ),

        // Education
        graduation: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        stethoscope: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 5a6 6 0 0 1 12 0v1a6 6 0 1 1-12 0v-1Z" />
                <path d="M12 17v-1" />
                <path d="M2 2v6a5 5 0 0 0 10 0V4" />
                <path d="M22 2v6a5 5 0 0 1-10 0V4" />
            </svg>
        ),

        // Industrial
        briefcase: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        building: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="9" y1="22" x2="9" y2="22" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
            </svg>
        ),
        coffee: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
        ),
        store: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21v-8" />
                <path d="M19 21v-8" />
                <path d="M2 10.5l1.5-1.5 2 2 2.5-2.5 2.5 2.5 2.5-2.5 3 3 1.5-1.5" />
                <path d="M14 6.8l-5-5-5 5" />
                <path d="M14 6.8V13" />
            </svg>
        ),

        // Defense
        key: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7.5" cy="15.5" r="5.5" />
                <path d="m21 2-9.6 9.6" />
                <path d="m15.5 7.5 3 3L22 7l-3-3" />
            </svg>
        ),
        aperture: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
        ),
        send: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
        ),
        shield: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),

        // Tourism
        globe: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        camera: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
        map: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
        ),

        // Emerging
        video: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        ),
        zap: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),

        sparkles: (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-3.5Z" />
                <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                <path d="M17.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                <path d="M12 18.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-3.5Z" />
                <path d="m19 5-2 2" />
                <path d="m5 19 2-2" />
                <path d="m5 5 2 2" />
                <path d="m19 19-2-2" />
            </svg>
        )
    };

    return icons[type] || icons.sparkles;
};

import AppNav from '../components/AppNav';
import GridBackground from '../components/GridBackground';

export default function Products({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState("Hardware Solutions");

    useEffect(() => {
        if (location.state?.category) {
            setActiveCategory(location.state.category);
        }
    }, [location.state]);

    const categories = [
        {
            title: "Hardware Solutions",
            id: "hardware",
            items: [
                { name: '5D /7D Chair (VR)', icon: '/images/vr-chair.webp', isImage: true, description: 'Immersive motion seat with 5 & 7 degrees of freedom.', link: 'anubhav' },
                { name: '9D Chair (VR)', icon: '/images/9d_chair_icon.webp', isImage: true, description: 'Ultimate VR experience with 360-degree rotation.', link: 'ninedchair' },
            ]
        },
        {
            title: "Software Solutions",
            id: "software",
            items: [

                { name: 'VR in Industrial Training (MELA)', icon: '/assets/mela.png', isImage: true, description: 'Vocational training simulations for industry skills.', link: 'vrindustrial' },
                { name: 'VR Lab (Complete Hardware Setup)', icon: 'server', description: 'Turnkey VR lab solution with headsets and PCs.', link: 'vrlab' },
                { name: 'VR in Kalaa', icon: '/assets/kalaa.png', isImage: true, description: 'Preserving and exploring art and culture in VR.', link: 'vrkala' }
            ]
        },
        {
            title: "Education & Training",
            id: "education",
            items: [
                { name: 'E-Learning Solutions', icon: 'graduation', description: 'Interactive digital learning platforms for schools.', link: 'vrelearning' },

                { name: 'Animal Surgery Simulation', icon: 'stethoscope', description: 'Risk-free veterinary surgical training in VR.', link: 'vranimalsurgery' }
            ]
        },
        {
            title: "Industrial & Enterprise",
            id: "industrial",
            items: [
                { name: 'VR in Udyog', icon: '/assets/udyog.png', isImage: true, description: 'Virtual prototyping and industrial process simulation.', link: 'vrudyog' },
                { name: 'VR in Real Estate', icon: 'building', description: 'Immersive property tours and architectural visualization.', link: 'vrrealestate' },
                { name: 'VR in Hospitality', icon: 'coffee', description: 'Virtual walkthroughs for hotels and resorts.', link: 'vrhospitality' },
                { name: 'VR Exhibition Solutions', icon: 'store', description: 'Virtual trade shows and interactive exhibitions.', link: 'vrexhibition' },

            ]
        },
        {
            title: "Defence Simulation",
            id: "defense",
            items: [
                { name: 'VR Crime Scene Simulation', icon: 'key', description: 'Forensic training and crime scene analysis tools.', link: 'vrcrimescene' },
                { name: 'Drone Simulator', icon: 'aperture', description: 'Professional drone flight training and scenarios.', link: 'dronesimulator' },
                { name: 'Aircraft Simulator', icon: 'send', description: 'Flight simulation for pilot training and practice.', link: 'aircraftsimulator' },
                { name: 'VR in Defence', icon: 'shield', description: 'Tactical combat training and mission simulations.', link: 'vrdefence' }
            ]
        },
        {
            title: "Tourism",
            id: "tourism",
            items: [
                { name: 'VR in Tourism', icon: 'globe', description: 'Virtual travel experiences to global destinations.', link: 'vrtourism' },
                { name: 'Virtual Heritage Tours', icon: 'camera', description: 'Explore historical sites and monuments virtually.', link: 'virtualheritage' },
                { name: '360° City Guides', icon: 'map', description: 'Immersive city exploration for travelers.', link: 'cityguides' }
            ]
        },
        {
            title: "Emerging Applications",
            id: "emerging",
            items: [
                { name: 'Live Stream Simulation', icon: 'video', description: 'Virtual production and broadcasting simulations.', link: 'vrlivestream' },
                { name: 'Others / Custom', icon: 'zap', description: 'Custom VR solutions for unique requirements.', link: 'product-custom-solutions' }
            ]
        }
    ];

    const activeData = categories.find(c => c.title === activeCategory) || categories[0];

    return (

        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="products"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>

                {/* Hero Section */}
                <section style={{
                    paddingTop: '120px',
                    paddingBottom: '4rem',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    background: isDarkTheme
                        ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(255, 155, 80, 0.08) 0%, transparent 100%)',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <GridBackground isDarkTheme={isDarkTheme} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1rem',
                            color: '#FF9B50'
                        }}>
                            Our Products
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            opacity: 0.8,
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Explore our comprehensive range of Virtual Reality solutions designed for every industry.
                        </p>
                    </div>
                </section>

                {/* Tab Navigation */}
                <div style={{
                    position: 'sticky',
                    top: '80px', // Below the main nav
                    zIndex: 90,
                    backgroundColor: isDarkTheme ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '0 5%',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat.title}
                                onClick={() => setActiveCategory(cat.title)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: activeCategory === cat.title ? '#FF9B50' : (isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F0F0F0'),
                                    color: activeCategory === cat.title ? '#fff' : (isDarkTheme ? '#AAA' : '#555'),
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeCategory === cat.title ? '0 4px 15px rgba(255, 155, 80, 0.3)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeCategory !== cat.title) {
                                        e.target.style.background = isDarkTheme ? 'rgba(255,255,255,0.1)' : '#E0E0E0';
                                        e.target.style.color = isDarkTheme ? '#FFF' : '#222';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeCategory !== cat.title) {
                                        e.target.style.background = isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F0F0F0';
                                        e.target.style.color = isDarkTheme ? '#AAA' : '#555';
                                    }
                                }}>
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '4rem 5%',
                    minHeight: '50vh'
                }}>
                    {/* Section Title */}
                    <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                        <h2 style={{
                            marginTop: 0,
                            fontSize: '2rem',
                            fontWeight: 800,
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <span style={{
                                width: '40px',
                                height: '4px',
                                background: '#FF9B50',
                                display: 'inline-block',
                                borderRadius: '2px'
                            }}></span>
                            {activeData.title}
                        </h2>
                    </div>

                    {/* Grid Layout - Horizontal Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                        gap: '2rem'
                    }}>
                        {activeData.items.map((item, index) => (
                            <div key={index} style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                cursor: item.link ? 'pointer' : 'default',
                                animation: `fadeIn 0.5s ease forwards ${index * 0.05}s`,
                                opacity: 0,
                                transform: 'translateY(10px)'
                            }}
                                onClick={() => item.link && onNavigate(item.link)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.border = '1px solid rgba(255, 155, 80, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.border = '1px solid rgba(0,0,0,0.05)';
                                }}
                            >
                                {/* Icon Container */}
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '12px',
                                    background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : '#FFF3E0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    overflow: 'hidden',
                                    padding: item.isImage ? '0' : '1rem'
                                }}>
                                    {item.isImage ? (
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: (item.icon.includes('mela.png') || item.icon.includes('kalaa.png') || item.icon.includes('udyog.png')) ? 'contain' : 'cover',
                                                padding: (item.icon.includes('mela.png') || item.icon.includes('kalaa.png') || item.icon.includes('udyog.png')) ? '5px' : '0'
                                            }}
                                        />
                                    ) : (
                                        <Icon type={item.icon} color="#FF9B50" />
                                    )}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        margin: '0 0 0.5rem 0',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                    }}>
                                        {item.name}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5',
                                        color: isDarkTheme ? '#EAEAEA' : '#666',
                                        opacity: 0.9
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animation Styles */}
                <style>{`
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width: 768px) {
                    div[style*="gridTemplateColumns"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

                {/* CTA Section */}
                <section style={{
                    padding: '4rem 5%',
                    background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, transparent 100%)',
                    textAlign: 'center',
                    marginTop: '0rem'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1.5rem',
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                        }}>
                            Interested in Our Solutions?
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            opacity: 0.8,
                            marginBottom: '2rem',
                            lineHeight: '1.6'
                        }}>
                            Get in touch with our team to learn more about how Melzo can transform education at your institution.
                        </p>
                        <button style={{
                            background: '#FF9B50',
                            color: '#fff',
                            border: 'none',
                            padding: '1.2rem 3rem',
                            cursor: 'pointer',
                            borderRadius: '30px',
                            transition: 'all 0.3s ease',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px rgba(255, 155, 80, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                            }}
                            onClick={() => onBookDemo && onBookDemo()}
                        >
                            Schedule a Demo
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
