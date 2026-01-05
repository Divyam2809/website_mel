import React, { useState } from 'react';

export default function Products({ onNavigate, isDarkTheme, onBookDemo }) {
    const [activeCategory, setActiveCategory] = useState("Hardware Solutions");

    const categories = [
        {
            title: "Hardware Solutions",
            id: "hardware",
            items: [
                { name: '5D Chair (VR)', icon: '💺', description: 'Immersive motion seat with 5 degrees of freedom.' },
                { name: '7D Chair (VR)', icon: '🎮', description: 'Advanced motion feedback with environmental effects.', link: 'anubhav' },
                { name: '9D Chair (VR)', icon: '🚀', description: 'Ultimate VR experience with 360-degree rotation.' },
                { name: '5D / 7D / 9D VR Hardware', icon: '⚙️', description: 'Complete range of motion simulation hardware.' },
                { name: 'VR Lab (Complete Hardware Setup)', icon: '🧪', description: 'Turnkey VR lab solution with headsets and PCs.' }
            ]
        },
        {
            title: "Education & Training",
            id: "education",
            items: [
                { name: 'E-Learning Solutions', icon: '📚', description: 'Interactive digital learning platforms for schools.' },
                { name: 'ERP Solutions', icon: '📊', description: 'Comprehensive management systems for institutions.' },
                { name: 'VR in Industrial Training (MELA)', icon: '🏭', description: 'Vocational training simulations for industry skills.' },
                { name: 'Animal Surgery Simulation', icon: '🐾', description: 'Risk-free veterinary surgical training in VR.' }
            ]
        },
        {
            title: "Industrial & Enterprise",
            id: "industrial",
            items: [
                { name: 'VR in Udyog', icon: '🏗️', description: 'Virtual prototyping and industrial process simulation.' },
                { name: 'VR in Real Estate', icon: '🏘️', description: 'Immersive property tours and architectural visualization.' },
                { name: 'VR in Hospitality', icon: '🏨', description: 'Virtual walkthroughs for hotels and resorts.' },
                { name: 'VR Exhibition Solutions', icon: '🎪', description: 'Virtual trade shows and interactive exhibitions.' },
                { name: 'VR in Kala', icon: '🎨', description: 'Preserving and exploring art and culture in VR.' }
            ]
        },
        {
            title: "Defence Simulation",
            id: "defense",
            items: [
                { name: 'VR Crime Scene Simulation', icon: '🕵️', description: 'Forensic training and crime scene analysis tools.' },
                { name: 'Drone Simulator', icon: '🚁', description: 'Professional drone flight training and scenarios.' },
                { name: 'Aircraft Simulator', icon: '✈️', description: 'Flight simulation for pilot training and practice.' },
                { name: 'VR in Defence', icon: '🛡️', description: 'Tactical combat training and mission simulations.' }
            ]
        },
        {
            title: "Tourism",
            id: "tourism",
            items: [
                { name: 'VR in Tourism', icon: '🏝️', description: 'Virtual travel experiences to global destinations.' },
                { name: 'Virtual Heritage Tours', icon: '🏛️', description: 'Explore historical sites and monuments virtually.' },
                { name: '360° City Guides', icon: '🗺️', description: 'Immersive city exploration for travelers.' }
            ]
        },
        {
            title: "Emerging Applications",
            id: "emerging",
            items: [
                { name: 'Live Stream Simulation', icon: '📡', description: 'Virtual production and broadcasting simulations.' },
                { name: 'Others / Custom', icon: '✨', description: 'Custom VR solutions for unique requirements.' }
            ]
        }
    ];

    const activeData = categories.find(c => c.title === activeCategory) || categories[0];

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>

            {/* Hero Section */}
            <section style={{
                paddingTop: '6rem',
                paddingBottom: '3rem',
                paddingLeft: '5%',
                paddingRight: '5%',
                background: isDarkTheme
                    ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                    : 'linear-gradient(180deg, rgba(255, 155, 80, 0.08) 0%, transparent 100%)',
                textAlign: 'center'
            }}>
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
                                fontSize: '2.5rem',
                                flexShrink: 0
                            }}>
                                {item.icon}
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
    );
}
