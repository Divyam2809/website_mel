import React, { useState } from 'react';

export default function Industries({ onNavigate, isDarkTheme }) {
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showCSRModal, setShowCSRModal] = useState(false);
    const [showGovernmentModal, setShowGovernmentModal] = useState(false);
    const [showIndustryModal, setShowIndustryModal] = useState(false);

    const industries = [
        {
            id: 'education',
            title: 'Education',

            description: 'Curriculum-aligned VR labs for Science, Math, History, Geography.',
            tags: ['K-12', 'STEM', 'Labs'],
            size: 'large'
        },
        {
            id: 'csr',
            title: 'CSR & Foundations',

            description: 'Measurable impact, scalable deployment, and comprehensive reporting support.',
            tags: ['Impact', 'Scale', 'Social Good'],
            size: 'large'
        },
        {
            id: 'government',
            title: 'Government & Public Sector',

            description: 'Skill development, safety training, and immersive awareness programs.',
            tags: ['Skilling', 'Safety', 'Civic'],
            size: 'large'
        },
        {
            id: 'defence',
            title: 'Industry & Defence',

            description: 'Simulation-based training with reduced risk and cost for mission-critical operations.',
            tags: ['Simulation', 'Tactical', 'Training'],
            size: 'large'
        }
    ];

    return (
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
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    marginBottom: '1rem',
                    color: '#FF9B50'
                }}>
                    Industries We Serve
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    opacity: 0.8,
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Pioneering Virtual Reality solutions tailored for specific industrial needs and sectors.
                </p>
            </section>

            {/* Industries Grid */}
            <section style={{
                padding: '2rem 5% 6rem 5%',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {industries.map((industry, index) => {
                        const bgImage = {
                            'education': '/images/education-bg.jpg',
                            'csr': '/images/csr-bg.jpg'
                        }[industry.id];
                        const hasBg = !!bgImage;

                        return (
                            <div key={industry.id}
                                onClick={() => {
                                    if (industry.id === 'education') {
                                        setShowEducationModal(true);
                                    } else if (industry.id === 'csr') {
                                        setShowCSRModal(true);
                                    } else if (industry.id === 'government') {
                                        setShowGovernmentModal(true);
                                    } else if (industry.id === 'defence') {
                                        setShowIndustryModal(true);
                                    }
                                }}
                                style={{
                                    background: hasBg
                                        ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${bgImage})`
                                        : (isDarkTheme ? '#262626' : '#ffffff'),
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    border: hasBg ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    gridColumn: industry.size === 'large' ? 'span 2' : 'span 1',
                                    boxShadow: hasBg ? '0 20px 40px rgba(0,0,0,0.2)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                                    e.currentTarget.style.zIndex = '2';
                                    if (!hasBg) {
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                        e.currentTarget.style.borderColor = '#FF9B50';
                                    } else {
                                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.zIndex = '1';
                                    if (!hasBg) {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                                    } else {
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                                    }
                                }}
                            >
                                {industry.icon && (
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: hasBg ? '#FF9B50' : (isDarkTheme ? 'rgba(255, 155, 80, 0.15)' : '#FFF3E0'),
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        marginBottom: '1.5rem',
                                        color: hasBg ? '#FFF' : 'inherit'
                                    }}>
                                        {industry.icon}
                                    </div>
                                )}

                                <h2 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem',
                                    color: hasBg ? '#FFFFFF' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D')
                                }}>
                                    {industry.title}
                                </h2>

                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.6',
                                    color: hasBg ? '#EAEAEA' : (isDarkTheme ? '#EAEAEA' : '#555'),
                                    marginBottom: '2rem',
                                    flex: 1
                                }}>
                                    {industry.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '0.8rem',
                                    flexWrap: 'wrap'
                                }}>
                                    {industry.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.85rem',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            background: hasBg ? 'rgba(255,255,255,0.25)' : (isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F5F5'),
                                            color: hasBg ? '#FFF' : (isDarkTheme ? '#AAA' : '#666'),
                                            fontWeight: 600,
                                            backdropFilter: hasBg ? 'blur(10px)' : 'none'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '4rem 5%',
                background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, transparent 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '1.5rem',
                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                    }}>
                        Ready to Transform Your Industry?
                    </h2>
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
                    }}>
                        Contact Sales
                    </button>
                </div>
            </section>

            {/* Education Modal */}
            {showEducationModal && (
                <div
                    onClick={() => setShowEducationModal(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            animation: 'slideUp 0.4s ease-out'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowEducationModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'rgba(255, 155, 80, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: '#FF9B50',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#FF9B50';
                                e.target.style.color = '#fff';
                                e.target.style.transform = 'rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                                e.target.style.color = '#FF9B50';
                                e.target.style.transform = 'rotate(0deg)';
                            }}
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div style={{ padding: '3rem' }}>
                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                {/* Decorative Accent Bar */}
                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: '#FF9B50',
                                    margin: '0 auto 1.5rem',
                                    borderRadius: '2px'
                                }} />
                                <h2 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-1px',
                                    marginBottom: '0.5rem',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    lineHeight: '1.2'
                                }}>
                                    Virtual Reality Solutions for Schools, Colleges & Training Institutes
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: isDarkTheme ? '#EAEAEA' : '#555',
                                    lineHeight: '1.6',
                                    marginTop: '1rem',
                                    maxWidth: '700px',
                                    margin: '1rem auto 0'
                                }}>
                                    Melzo designs VR solutions for education in India that support classroom learning, lab-based subjects, and skill development programs.
                                </p>
                            </div>

                            {/* Who Uses Section - Vertical List */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Who uses our education VR labs
                                </h3>
                                <div style={{
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { number: '01', text: 'K–12 schools (CBSE, ICSE, State Boards)' },
                                        { number: '02', text: 'Junior colleges and degree colleges' },
                                        { number: '03', text: 'ITIs, polytechnics, and vocational institutes' },
                                        { number: '04', text: 'EdTech and digital learning centers' }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem',
                                                padding: '1rem 0',
                                                borderBottom: idx < 3 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.paddingLeft = '1rem';
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.03)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.paddingLeft = '0';
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <span style={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 900,
                                                    color: '#fff'
                                                }}>
                                                    {item.number}
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.5',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What Problems VR Solves - Horizontal Steps */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    What problems VR solves
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '2rem 3rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { text: 'Limited physical lab access' },
                                        { text: 'Safety risks in experiments' },
                                        { text: 'Low student engagement' },
                                        { text: 'Concept memorization without understanding' }
                                    ].map((problem, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {/* Checkmark */}
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                                    <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p style={{
                                                fontSize: '0.95rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                lineHeight: '1.6',
                                                fontWeight: 500
                                            }}>
                                                {problem.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Use Cases - Table Layout */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Use cases
                                </h3>
                                <div style={{
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        {
                                            badge: 'LAB',
                                            title: 'Science lab simulations',
                                            description: 'Conduct virtual experiments safely without physical lab constraints'
                                        },
                                        {
                                            badge: 'MATH',
                                            title: 'Mathematics and geometry visualization',
                                            description: 'Visualize complex 3D shapes and mathematical concepts interactively'
                                        },
                                        {
                                            badge: 'EXPLORE',
                                            title: 'History and geography immersion',
                                            description: 'Explore historical events and geographical locations in immersive VR'
                                        },
                                        {
                                            badge: 'CAREER',
                                            title: 'Career and skill exploration',
                                            description: 'Experience different careers and develop practical skills virtually'
                                        }
                                    ].map((useCase, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: '100px 1fr',
                                                gap: '1.5rem',
                                                padding: '1.5rem 0',
                                                borderBottom: idx < 3 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.paddingLeft = '1rem';
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.03)' : 'rgba(255, 155, 80, 0.02)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.paddingLeft = '0';
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            {/* Badge Column */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                paddingTop: '0.2rem'
                                            }}>
                                                <div style={{
                                                    padding: '0.5rem 1rem',
                                                    background: '#FF9B50',
                                                    borderRadius: '8px',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    <span style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: 700,
                                                        color: '#fff',
                                                        letterSpacing: '1px'
                                                    }}>
                                                        {useCase.badge}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Content Column */}
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1.1rem',
                                                    fontWeight: 700,
                                                    marginBottom: '0.5rem',
                                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                                }}>
                                                    {useCase.title}
                                                </h4>
                                                <p style={{
                                                    fontSize: '0.95rem',
                                                    lineHeight: '1.6',
                                                    color: isDarkTheme ? '#AAAAAA' : '#666666',
                                                    margin: 0
                                                }}>
                                                    {useCase.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: isDarkTheme ? '#262626' : '#f8f8f8',
                                borderRadius: '12px'
                            }}>
                                {[
                                    { value: '120+', label: 'Schools' },
                                    { value: '50K+', label: 'Students' },
                                    { value: '75%', label: 'Better Retention' }
                                ].map((stat, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: '#FF9B50',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {stat.value}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: isDarkTheme ? '#AAAAAA' : '#666666'
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <button
                                    onClick={() => {
                                        setShowEducationModal(false);
                                        onNavigate && onNavigate('education-training');
                                    }}
                                    style={{
                                        background: '#FF9B50',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
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
                                >
                                    Learn More →
                                </button>
                                <button
                                    onClick={() => {
                                        setShowEducationModal(false);
                                        // You can add contact or demo booking logic here
                                    }}
                                    style={{
                                        background: 'transparent',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#2D2D2D';
                                        e.target.style.color = '#fff';
                                        e.target.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CSR Modal */}
            {showCSRModal && (
                <div
                    onClick={() => setShowCSRModal(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            animation: 'slideUp 0.4s ease-out'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowCSRModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'rgba(255, 155, 80, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: '#FF9B50',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#FF9B50';
                                e.target.style.color = '#fff';
                                e.target.style.transform = 'rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                                e.target.style.color = '#FF9B50';
                                e.target.style.transform = 'rotate(0deg)';
                            }}
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div style={{ padding: '3rem' }}>
                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                {/* Decorative Accent Bar */}
                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: '#FF9B50',
                                    margin: '0 auto 1.5rem',
                                    borderRadius: '2px'
                                }} />
                                <h2 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-1px',
                                    marginBottom: '0.5rem',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    lineHeight: '1.2'
                                }}>
                                    Virtual Reality for Education-Focused CSR Programs
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: isDarkTheme ? '#EAEAEA' : '#555',
                                    lineHeight: '1.6',
                                    marginTop: '1rem',
                                    maxWidth: '700px',
                                    margin: '1rem auto 0'
                                }}>
                                    Melzo works with CSR foundations and education trusts to deploy scalable VR learning labs with reporting and measurable impact.
                                </p>
                            </div>

                            {/* Ideal For Section - Vertical List */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Ideal for
                                </h3>
                                <div style={{
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { number: '01', text: 'Education-focused CSR initiatives' },
                                        { number: '02', text: 'School modernization programs' },
                                        { number: '03', text: 'STEM and skill development projects' },
                                        { number: '04', text: 'Foundation-led digital education programs' }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem',
                                                padding: '1rem 0',
                                                borderBottom: idx < 3 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.paddingLeft = '1rem';
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.03)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.paddingLeft = '0';
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <span style={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 900,
                                                    color: '#fff'
                                                }}>
                                                    {item.number}
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.5',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why CSR Teams Choose VR - 2-Column Checklist */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Why CSR teams choose VR
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '2rem 3rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { text: 'Standardized learning delivery' },
                                        { text: 'Annual student impact tracking' },
                                        { text: 'Low recurring operational cost' },
                                        { text: 'Easy reporting for audits' }
                                    ].map((benefit, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {/* Checkmark */}
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                                    <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p style={{
                                                fontSize: '0.95rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                lineHeight: '1.6',
                                                fontWeight: 500
                                            }}>
                                                {benefit.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: isDarkTheme ? '#262626' : '#f8f8f8',
                                borderRadius: '12px'
                            }}>
                                {[
                                    { value: '50+', label: 'CSR Programs' },
                                    { value: '25K+', label: 'Students Reached' },
                                    { value: '100%', label: 'Audit Compliant' }
                                ].map((stat, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: '#FF9B50',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {stat.value}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: isDarkTheme ? '#AAAAAA' : '#666666'
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <button
                                    onClick={() => {
                                        setShowCSRModal(false);
                                        onNavigate && onNavigate('csr');
                                    }}
                                    style={{
                                        background: '#FF9B50',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
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
                                >
                                    Learn More →
                                </button>
                                <button
                                    onClick={() => {
                                        setShowCSRModal(false);
                                    }}
                                    style={{
                                        background: 'transparent',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#2D2D2D';
                                        e.target.style.color = '#fff';
                                        e.target.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Government Modal */}
            {showGovernmentModal && (
                <div
                    onClick={() => setShowGovernmentModal(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            animation: 'slideUp 0.4s ease-out'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowGovernmentModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'rgba(255, 155, 80, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: '#FF9B50',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#FF9B50';
                                e.target.style.color = '#fff';
                                e.target.style.transform = 'rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                                e.target.style.color = '#FF9B50';
                                e.target.style.transform = 'rotate(0deg)';
                            }}
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div style={{ padding: '3rem' }}>
                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                {/* Decorative Accent Bar */}
                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: '#FF9B50',
                                    margin: '0 auto 1.5rem',
                                    borderRadius: '2px'
                                }} />
                                <h2 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-1px',
                                    marginBottom: '0.5rem',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    lineHeight: '1.2'
                                }}>
                                    Virtual Reality Training for Government Institutions
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: isDarkTheme ? '#EAEAEA' : '#555',
                                    lineHeight: '1.6',
                                    marginTop: '1rem',
                                    maxWidth: '700px',
                                    margin: '1rem auto 0'
                                }}>
                                    Melzo delivers VR government training solutions for skill development, safety training, and awareness programs.
                                </p>
                            </div>

                            {/* Used By Section - Vertical List */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Used by
                                </h3>
                                <div style={{
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { number: '01', text: 'Government schools and colleges' },
                                        { number: '02', text: 'Skill development missions' },
                                        { number: '03', text: 'Public safety and disaster response teams' },
                                        { number: '04', text: 'Training academies' }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem',
                                                padding: '1rem 0',
                                                borderBottom: idx < 3 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.paddingLeft = '1rem';
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.03)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.paddingLeft = '0';
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <span style={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 900,
                                                    color: '#fff'
                                                }}>
                                                    {item.number}
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.5',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Training Areas - 2-Column Checklist */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Training areas
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '2rem 3rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { text: 'Skill-based vocational training' },
                                        { text: 'Safety and compliance training' },
                                        { text: 'Public awareness simulations' },
                                        { text: 'Workforce readiness programs' }
                                    ].map((area, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {/* Checkmark */}
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                                    <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p style={{
                                                fontSize: '0.95rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                lineHeight: '1.6',
                                                fontWeight: 500
                                            }}>
                                                {area.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: isDarkTheme ? '#262626' : '#f8f8f8',
                                borderRadius: '12px'
                            }}>
                                {[
                                    { value: '30+', label: 'Govt Institutions' },
                                    { value: '15K+', label: 'Trainees' },
                                    { value: '85%', label: 'Skill Improvement' }
                                ].map((stat, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: '#FF9B50',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {stat.value}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: isDarkTheme ? '#AAAAAA' : '#666666'
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <button
                                    onClick={() => {
                                        setShowGovernmentModal(false);
                                        onNavigate && onNavigate('government');
                                    }}
                                    style={{
                                        background: '#FF9B50',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
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
                                >
                                    Learn More →
                                </button>
                                <button
                                    onClick={() => {
                                        setShowGovernmentModal(false);
                                    }}
                                    style={{
                                        background: 'transparent',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#2D2D2D';
                                        e.target.style.color = '#fff';
                                        e.target.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Industry & Defence Modal */}
            {showIndustryModal && (
                <div
                    onClick={() => setShowIndustryModal(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '2rem',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            animation: 'slideUp 0.4s ease-out'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowIndustryModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'rgba(255, 155, 80, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: '#FF9B50',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#FF9B50';
                                e.target.style.color = '#fff';
                                e.target.style.transform = 'rotate(90deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                                e.target.style.color = '#FF9B50';
                                e.target.style.transform = 'rotate(0deg)';
                            }}
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div style={{ padding: '3rem' }}>
                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                {/* Decorative Accent Bar */}
                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: '#FF9B50',
                                    margin: '0 auto 1.5rem',
                                    borderRadius: '2px'
                                }} />
                                <h2 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-1px',
                                    marginBottom: '0.5rem',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    lineHeight: '1.2'
                                }}>
                                    Simulation-Based VR Training for High-Risk Environments
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: isDarkTheme ? '#EAEAEA' : '#555',
                                    lineHeight: '1.6',
                                    marginTop: '1rem',
                                    maxWidth: '700px',
                                    margin: '1rem auto 0'
                                }}>
                                    Melzo builds VR simulators for industrial and defence training where real-world practice is costly or unsafe.
                                </p>
                            </div>

                            {/* Industries Served Section - Vertical List */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Industries served
                                </h3>
                                <div style={{
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { number: '01', text: 'Manufacturing' },
                                        { number: '02', text: 'Infrastructure and utilities' },
                                        { number: '03', text: 'Defence and security training' },
                                        { number: '04', text: 'Industrial safety programs' }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem',
                                                padding: '1rem 0',
                                                borderBottom: idx < 3 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.paddingLeft = '1rem';
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.03)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.paddingLeft = '0';
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <span style={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 900,
                                                    color: '#fff'
                                                }}>
                                                    {item.number}
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.5',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications - 2-Column Checklist */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Applications
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '2rem 3rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { text: 'Machine operation training' },
                                        { text: 'Safety drills and emergency response' },
                                        { text: 'Technical skill simulations' },
                                        { text: 'Risk-free repeat practice' }
                                    ].map((app, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {/* Checkmark */}
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#FF9B50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                                    <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p style={{
                                                fontSize: '0.95rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                margin: 0,
                                                lineHeight: '1.6',
                                                fontWeight: 500
                                            }}>
                                                {app.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: isDarkTheme ? '#262626' : '#f8f8f8',
                                borderRadius: '12px'
                            }}>
                                {[
                                    { value: '40+', label: 'Industrial Clients' },
                                    { value: '20K+', label: 'Workers Trained' },
                                    { value: '90%', label: 'Safety Improvement' }
                                ].map((stat, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: '#FF9B50',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {stat.value}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: isDarkTheme ? '#AAAAAA' : '#666666'
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <button
                                    onClick={() => {
                                        setShowIndustryModal(false);
                                        onNavigate && onNavigate('industry');
                                    }}
                                    style={{
                                        background: '#FF9B50',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
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
                                >
                                    Learn More →
                                </button>
                                <button
                                    onClick={() => {
                                        setShowIndustryModal(false);
                                    }}
                                    style={{
                                        background: 'transparent',
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                        padding: '1rem 2rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#2D2D2D';
                                        e.target.style.color = '#fff';
                                        e.target.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Responsive Grid Fix */}
            <style>{`
                @media (max-width: 900px) {
                    div[style*="gridColumn"] {
                        grid-column: span 1 !important;
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
