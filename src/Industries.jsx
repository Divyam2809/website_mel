import React, { useState } from 'react';

export default function Industries({ onNavigate, isDarkTheme }) {
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showCSRModal, setShowCSRModal] = useState(false);
    const [showGovernmentModal, setShowGovernmentModal] = useState(false);
    const [showDefenceModal, setShowDefenceModal] = useState(false);

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
                        // Smooth white to orange gradient
                        const cardGradient = 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F0 30%, #FFDCC8 60%, #FF9B50 100%)';

                        return (
                            <div key={industry.id} style={{
                                background: cardGradient,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '28px',
                                padding: '0',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '0',
                                alignItems: 'stretch',
                                position: 'relative',
                                overflow: 'hidden',
                                gridColumn: industry.size === 'large' ? 'span 2' : 'span 1',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.08)';
                                    e.currentTarget.style.zIndex = '10';
                                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.3) inset, 0 0 40px rgba(255, 255, 255, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.zIndex = '1';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
                                }}
                                onClick={() => {
                                    if (industry.id === 'education') {
                                        setShowEducationModal(true);
                                    } else if (industry.id === 'csr') {
                                        setShowCSRModal(true);
                                    } else if (industry.id === 'government') {
                                        setShowGovernmentModal(true);
                                    } else if (industry.id === 'defence') {
                                        setShowDefenceModal(true);
                                    }
                                }}
                            >
                                {/* Content wrapper for Education card */}
                                <div style={{
                                    flex: '1 1 99%',
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
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
                                            marginBottom: '0.75rem',
                                            color: hasBg ? '#FFF' : 'inherit'
                                        }}>
                                            {industry.icon}
                                        </div>
                                    )}

                                    <h2 style={{
                                        fontSize: '2rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#2D2D2D',
                                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
                                        letterSpacing: '-0.5px'
                                    }}>
                                        {industry.title}
                                    </h2>

                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.7',
                                        color: '#4A4A4A',
                                        marginBottom: '1.5rem',
                                        flex: 1,
                                        textShadow: 'none'
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
                                                fontSize: '0.9rem',
                                                padding: '0.5rem 1.2rem',
                                                borderRadius: '25px',
                                                background: 'rgba(45, 45, 45, 0.08)',
                                                color: '#2D2D2D',
                                                fontWeight: 700,
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(45, 45, 45, 0.15)',
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Image for Education card - right side full height */}
                                {industry.id === 'education' && (
                                    <div style={{
                                        flex: '1 1 40%',
                                        display: 'flex',
                                        alignItems: 'stretch'
                                    }}>
                                        <img
                                            src="/images/education-img.png"
                                            alt="VR Education Classroom"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0 28px 28px 0'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Image for Defence card - right side full height */}
                                {industry.id === 'defence' && (
                                    <div style={{
                                        flex: '1 1 40%',
                                        display: 'flex',
                                        alignItems: 'stretch'
                                    }}>
                                        <img
                                            src="/images/defence-img.png"
                                            alt="Industry & Defence"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0 28px 28px 0'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Image for Government card - right side full height */}
                                {industry.id === 'government' && (
                                    <div style={{
                                        flex: '1 1 40%',
                                        display: 'flex',
                                        alignItems: 'stretch'
                                    }}>
                                        <img
                                            src="/images/government-img.png"
                                            alt="Government & Public Sector"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0 28px 28px 0'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Image for CSR card - right side full height */}
                                {industry.id === 'csr' && (
                                    <div style={{
                                        flex: '1 1 40%',
                                        display: 'flex',
                                        alignItems: 'stretch'
                                    }}>
                                        <img
                                            src="/images/csr-img.jpg"
                                            alt="CSR & Foundations"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0 28px 28px 0'
                                            }}
                                        />
                                    </div>
                                )}
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

            {/* Responsive Grid Fix */}
            <style>{`
                @media (max-width: 900px) {
                    div[style*="gridColumn"] {
                        grid-column: span 1 !important;
                    }
                }
            `}</style>

            {/* Education Modal */}
            {showEducationModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease'
                }}
                    onClick={() => setShowEducationModal(false)}
                >
                    <div style={{
                        backgroundColor: isDarkTheme ? '#0F0F0F' : '#ffffff',
                        borderRadius: '24px',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        boxShadow: isDarkTheme ? '0 20px 60px rgba(0, 0, 0, 0.8)' : '0 20px 60px rgba(0, 0, 0, 0.15)',
                        border: `1px solid ${isDarkTheme ? '#2A2A2A' : '#E5E5E5'}`,
                        animation: 'slideUp 0.3s ease'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '2.5rem',
                            borderBottom: `1px solid ${isDarkTheme ? '#2A2A2A' : '#E5E5E5'}`,
                            position: 'sticky',
                            top: 0,
                            backgroundColor: isDarkTheme ? '#0F0F0F' : '#ffffff',
                            zIndex: 10,
                            borderRadius: '24px 24px 0 0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#FF9B50',
                                        letterSpacing: '-1px'
                                    }}>
                                        Virtual Reality Solutions for Education
                                    </h2>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: isDarkTheme ? '#B0B0B0' : '#666666',
                                        margin: 0
                                    }}>
                                        VR solutions for Schools, Colleges & Training Institutes in India
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowEducationModal(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                        color: isDarkTheme ? '#888888' : '#666666',
                                        padding: '0.5rem',
                                        lineHeight: 1,
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.color = '#FF9B50'; e.target.style.transform = 'rotate(90deg)'; }}
                                    onMouseLeave={(e) => { e.target.style.color = isDarkTheme ? '#888888' : '#666666'; e.target.style.transform = 'rotate(0deg)'; }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: '2.5rem' }}>
                            {/* Introduction */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: isDarkTheme ? '#B0B0B0' : '#666666',
                                marginBottom: '3rem',
                                textAlign: 'center'
                            }}>
                                Melzo designs VR solutions for education in India that support classroom learning, lab-based subjects, and skill development programs.
                            </p>

                            {/* Who Uses Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Who uses our education VR labs
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { num: '01', text: 'K–12 schools (CBSE, ICSE, State Boards)' },
                                        { num: '02', text: 'Junior colleges and degree colleges' },
                                        { num: '03', text: 'ITIs, polytechnics, and vocational institutes' },
                                        { num: '04', text: 'EdTech and digital learning centers' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            padding: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                        >
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                {item.num}
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1.05rem',
                                                color: isDarkTheme ? '#D0D0D0' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Problems VR Solves */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    What problems VR solves
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem',
                                    maxWidth: '900px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        'Limited physical lab access',
                                        'Safety risks in experiments',
                                        'Low student engagement',
                                        'Concept memorization without understanding'
                                    ].map((problem, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem'
                                        }}>
                                            <div style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1rem',
                                                color: isDarkTheme ? '#D0D0D0' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {problem}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Use Cases */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Use cases
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { label: 'LAB', title: 'Science lab simulations', desc: 'Conduct virtual experiments safely without physical lab constraints' },
                                        { label: 'MATH', title: 'Mathematics and geometry visualization', desc: 'Visualize complex 3D shapes and mathematical concepts interactively' },
                                        { label: 'EXPLORE', title: 'History and geography immersion', desc: 'Explore historical events and geographical locations in immersive VR' },
                                        { label: 'CAREER', title: 'Career and skill exploration', desc: 'Experience different careers and develop practical skills virtually' }
                                    ].map((useCase, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            padding: '1.5rem',
                                            backgroundColor: isDarkTheme ? '#1A1A1A' : '#F8F8F8',
                                            borderRadius: '12px',
                                            border: `1px solid ${isDarkTheme ? '#2A2A2A' : '#E5E5E5'}`,
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#FF9B50';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = isDarkTheme ? '0 8px 20px rgba(255, 155, 80, 0.2)' : '0 8px 20px rgba(255, 155, 80, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = isDarkTheme ? '#2A2A2A' : '#E5E5E5';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                flexShrink: 0,
                                                alignSelf: 'flex-start'
                                            }}>
                                                {useCase.label}
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1.15rem',
                                                    fontWeight: 700,
                                                    marginBottom: '0.5rem',
                                                    color: isDarkTheme ? '#EEEEEE' : '#2D2D2D'
                                                }}>
                                                    {useCase.title}
                                                </h4>
                                                <p style={{
                                                    margin: 0,
                                                    fontSize: '0.95rem',
                                                    color: isDarkTheme ? '#B0B0B0' : '#666666',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {useCase.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Statistics */}
                            <div style={{
                                marginBottom: '2rem',
                                padding: '2.5rem',
                                background: isDarkTheme ? '#1A1A1A' : '#F8F8F8',
                                borderRadius: '16px',
                                border: `1px solid ${isDarkTheme ? '#2A2A2A' : 'transparent'}`
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '2rem',
                                    textAlign: 'center'
                                }}>
                                    {[
                                        { number: '120+', label: 'Schools' },
                                        { number: '50K+', label: 'Students' },
                                        { number: '75%', label: 'Better Retention' }
                                    ].map((stat, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                color: '#FF9B50',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1
                                            }}>
                                                {stat.number}
                                            </div>
                                            <div style={{
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: isDarkTheme ? '#B0B0B0' : '#666666'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '2rem'
                            }}>
                                <button style={{
                                    background: '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                <button style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#EEEEEE' : '#2D2D2D',
                                    border: `2px solid ${isDarkTheme ? '#EEEEEE' : '#2D2D2D'}`,
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = isDarkTheme ? '#EEEEEE' : '#2D2D2D';
                                        e.target.style.color = isDarkTheme ? '#000' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#EEEEEE' : '#2D2D2D';
                                    }}
                                    onClick={() => setShowEducationModal(false)}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>

                    <style>{`
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
            )}

            {/* CSR Modal */}
            {showCSRModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease'
                }}
                    onClick={() => setShowCSRModal(false)}
                >
                    <div style={{
                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                        borderRadius: '24px',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                        animation: 'slideUp 0.3s ease'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '2.5rem',
                            borderBottom: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                            position: 'sticky',
                            top: 0,
                            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                            zIndex: 10,
                            borderRadius: '24px 24px 0 0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#FF9B50',
                                        letterSpacing: '-1px'
                                    }}>
                                        Virtual Reality for CSR Programs
                                    </h2>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        margin: 0
                                    }}>
                                        Education-Focused CSR Initiatives
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowCSRModal(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        padding: '0.5rem',
                                        lineHeight: 1,
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.color = '#FF9B50'; e.target.style.transform = 'rotate(90deg)'; }}
                                    onMouseLeave={(e) => { e.target.style.color = isDarkTheme ? '#AAAAAA' : '#666666'; e.target.style.transform = 'rotate(0deg)'; }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: '2.5rem' }}>
                            {/* Introduction */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: isDarkTheme ? '#AAAAAA' : '#666666',
                                marginBottom: '3rem',
                                textAlign: 'center'
                            }}>
                                Melzo works with CSR foundations and education trusts to deploy scalable VR learning labs with reporting and measurable impact.
                            </p>

                            {/* Ideal For Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Ideal for
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { num: '01', text: 'Education-focused CSR initiatives' },
                                        { num: '02', text: 'School modernization programs' },
                                        { num: '03', text: 'STEM and skill development projects' },
                                        { num: '04', text: 'Foundation-led digital education programs' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            padding: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                        >
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                {item.num}
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1.05rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why CSR Teams Choose VR */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Why CSR teams choose VR
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem',
                                    maxWidth: '900px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        'Standardized learning delivery',
                                        'Annual student impact tracking',
                                        'Low recurring operational cost',
                                        'Easy reporting for audits'
                                    ].map((reason, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem'
                                        }}>
                                            <div style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {reason}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    CSR program features
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { label: 'IMPACT', title: 'Measurable student outcomes', desc: 'Track learning progress and skill development with detailed analytics and reporting' },
                                        { label: 'SCALE', title: 'Multi-location deployment', desc: 'Deploy consistent VR learning experiences across multiple schools and regions' },
                                        { label: 'REPORT', title: 'Comprehensive audit trails', desc: 'Generate detailed reports for stakeholders, auditors, and compliance requirements' },
                                        { label: 'SUPPORT', title: 'Ongoing program management', desc: 'Dedicated support team ensures smooth operations and maximum program impact' }
                                    ].map((feature, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            padding: '1.5rem',
                                            backgroundColor: isDarkTheme ? '#262626' : '#F8F8F8',
                                            borderRadius: '12px',
                                            border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#FF9B50';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#eee';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                flexShrink: 0,
                                                alignSelf: 'flex-start'
                                            }}>
                                                {feature.label}
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1.15rem',
                                                    fontWeight: 700,
                                                    marginBottom: '0.5rem',
                                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                                }}>
                                                    {feature.title}
                                                </h4>
                                                <p style={{
                                                    margin: 0,
                                                    fontSize: '0.95rem',
                                                    color: isDarkTheme ? '#AAAAAA' : '#666666',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Statistics */}
                            <div style={{
                                marginBottom: '2rem',
                                padding: '2.5rem',
                                background: isDarkTheme ? '#262626' : '#F8F8F8',
                                borderRadius: '16px'
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '2rem',
                                    textAlign: 'center'
                                }}>
                                    {[
                                        { number: '50+', label: 'CSR Partners' },
                                        { number: '200+', label: 'Schools Impacted' },
                                        { number: '100K+', label: 'Students Reached' }
                                    ].map((stat, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                color: '#FF9B50',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1
                                            }}>
                                                {stat.number}
                                            </div>
                                            <div style={{
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: isDarkTheme ? '#AAAAAA' : '#666666'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '2rem'
                            }}>
                                <button style={{
                                    background: '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                    Partner With Us →
                                </button>
                                <button style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.color = isDarkTheme ? '#000' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    }}
                                    onClick={() => setShowCSRModal(false)}
                                >
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                    </div>

                    <style>{`
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
            )}

            {/* Government Modal */}
            {showGovernmentModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease'
                }}
                    onClick={() => setShowGovernmentModal(false)}
                >
                    <div style={{
                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                        borderRadius: '24px',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                        animation: 'slideUp 0.3s ease'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '2.5rem',
                            borderBottom: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                            position: 'sticky',
                            top: 0,
                            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                            zIndex: 10,
                            borderRadius: '24px 24px 0 0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#FF9B50',
                                        letterSpacing: '-1px'
                                    }}>
                                        VR Training for Government Institutions
                                    </h2>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        margin: 0
                                    }}>
                                        Government & Public Sector Solutions
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowGovernmentModal(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        padding: '0.5rem',
                                        lineHeight: 1,
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.color = '#FF9B50'; e.target.style.transform = 'rotate(90deg)'; }}
                                    onMouseLeave={(e) => { e.target.style.color = isDarkTheme ? '#AAAAAA' : '#666666'; e.target.style.transform = 'rotate(0deg)'; }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: '2.5rem' }}>
                            {/* Introduction */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: isDarkTheme ? '#AAAAAA' : '#666666',
                                marginBottom: '3rem',
                                textAlign: 'center'
                            }}>
                                Melzo delivers VR government training solutions for skill development, safety training, and awareness programs.
                            </p>

                            {/* Used By Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Used by
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { num: '01', text: 'Government schools and colleges' },
                                        { num: '02', text: 'Skill development missions' },
                                        { num: '03', text: 'Public safety and disaster response teams' },
                                        { num: '04', text: 'Training academies' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            padding: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                        >
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                {item.num}
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1.05rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Training Areas */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Training areas
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem',
                                    maxWidth: '900px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        'Skill-based vocational training',
                                        'Safety and compliance training',
                                        'Public awareness simulations',
                                        'Workforce readiness programs'
                                    ].map((area, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem'
                                        }}>
                                            <div style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {area}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Government training solutions
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { label: 'SKILL', title: 'Vocational skill development', desc: 'Hands-on VR training for technical skills, trades, and industry-specific competencies' },
                                        { label: 'SAFETY', title: 'Emergency response training', desc: 'Realistic disaster management and public safety simulations for first responders' },
                                        { label: 'AWARE', title: 'Public awareness campaigns', desc: 'Interactive VR experiences for citizen education and social awareness programs' },
                                        { label: 'READY', title: 'Workforce development', desc: 'Comprehensive training programs to prepare citizens for employment opportunities' }
                                    ].map((feature, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            padding: '1.5rem',
                                            backgroundColor: isDarkTheme ? '#262626' : '#F8F8F8',
                                            borderRadius: '12px',
                                            border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#FF9B50';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#eee';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                flexShrink: 0,
                                                alignSelf: 'flex-start'
                                            }}>
                                                {feature.label}
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1.15rem',
                                                    fontWeight: 700,
                                                    marginBottom: '0.5rem',
                                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                                }}>
                                                    {feature.title}
                                                </h4>
                                                <p style={{
                                                    margin: 0,
                                                    fontSize: '0.95rem',
                                                    color: isDarkTheme ? '#AAAAAA' : '#666666',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Statistics */}
                            <div style={{
                                marginBottom: '2rem',
                                padding: '2.5rem',
                                background: isDarkTheme ? '#262626' : '#F8F8F8',
                                borderRadius: '16px'
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '2rem',
                                    textAlign: 'center'
                                }}>
                                    {[
                                        { number: '30+', label: 'Government Projects' },
                                        { number: '100+', label: 'Training Centers' },
                                        { number: '50K+', label: 'Trainees' }
                                    ].map((stat, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                color: '#FF9B50',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1
                                            }}>
                                                {stat.number}
                                            </div>
                                            <div style={{
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: isDarkTheme ? '#AAAAAA' : '#666666'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '2rem'
                            }}>
                                <button style={{
                                    background: '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                    Request Proposal →
                                </button>
                                <button style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.color = isDarkTheme ? '#000' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    }}
                                    onClick={() => setShowGovernmentModal(false)}
                                >
                                    View Solutions
                                </button>
                            </div>
                        </div>
                    </div>

                    <style>{`
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
            )}

            {/* Defence Modal */}
            {showDefenceModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease'
                }}
                    onClick={() => setShowDefenceModal(false)}
                >
                    <div style={{
                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                        borderRadius: '24px',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                        animation: 'slideUp 0.3s ease'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '2.5rem',
                            borderBottom: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                            position: 'sticky',
                            top: 0,
                            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                            zIndex: 10,
                            borderRadius: '24px 24px 0 0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#FF9B50',
                                        letterSpacing: '-1px'
                                    }}>
                                        VR Training for High-Risk Environments
                                    </h2>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        margin: 0
                                    }}>
                                        Industry & Defence Solutions
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowDefenceModal(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                        color: isDarkTheme ? '#AAAAAA' : '#666666',
                                        padding: '0.5rem',
                                        lineHeight: 1,
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.color = '#FF9B50'; e.target.style.transform = 'rotate(90deg)'; }}
                                    onMouseLeave={(e) => { e.target.style.color = isDarkTheme ? '#AAAAAA' : '#666666'; e.target.style.transform = 'rotate(0deg)'; }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: '2.5rem' }}>
                            {/* Introduction */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: isDarkTheme ? '#AAAAAA' : '#666666',
                                marginBottom: '3rem',
                                textAlign: 'center'
                            }}>
                                Melzo builds VR simulators for industrial and defence training where real-world practice is costly or unsafe.
                            </p>

                            {/* Industries Served Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Industries served
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { num: '01', text: 'Manufacturing' },
                                        { num: '02', text: 'Infrastructure and utilities' },
                                        { num: '03', text: 'Defence and security training' },
                                        { num: '04', text: 'Industrial safety programs' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            padding: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                        >
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                {item.num}
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1.05rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Applications
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '1.5rem',
                                    maxWidth: '900px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        'Machine operation training',
                                        'Safety drills and emergency response',
                                        'Technical skill simulations',
                                        'Risk-free repeat practice'
                                    ].map((app, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem'
                                        }}>
                                            <div style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.25rem',
                                                fontWeight: 900,
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: '1rem',
                                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                                fontWeight: 500
                                            }}>
                                                {app}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    color: '#FF9B50',
                                    textAlign: 'center'
                                }}>
                                    Simulation-based training solutions
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {[
                                        { label: 'MACHINE', title: 'Heavy machinery operation', desc: 'Master complex equipment controls in a safe virtual environment before operating real machinery' },
                                        { label: 'SAFETY', title: 'Emergency protocols', desc: 'Practice critical safety procedures and emergency responses without real-world risks' },
                                        { label: 'TECH', title: 'Technical competency', desc: 'Develop specialized technical skills through realistic hands-on simulations' },
                                        { label: 'REPEAT', title: 'Unlimited practice', desc: 'Train repeatedly without equipment costs, downtime, or safety concerns' }
                                    ].map((feature, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            padding: '1.5rem',
                                            backgroundColor: isDarkTheme ? '#262626' : '#F8F8F8',
                                            borderRadius: '12px',
                                            border: `1px solid ${isDarkTheme ? '#333' : '#eee'}`,
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#FF9B50';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#eee';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                backgroundColor: '#FF9B50',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                flexShrink: 0,
                                                alignSelf: 'flex-start'
                                            }}>
                                                {feature.label}
                                            </div>
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1.15rem',
                                                    fontWeight: 700,
                                                    marginBottom: '0.5rem',
                                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                                }}>
                                                    {feature.title}
                                                </h4>
                                                <p style={{
                                                    margin: 0,
                                                    fontSize: '0.95rem',
                                                    color: isDarkTheme ? '#AAAAAA' : '#666666',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Statistics */}
                            <div style={{
                                marginBottom: '2rem',
                                padding: '2.5rem',
                                background: isDarkTheme ? '#262626' : '#F8F8F8',
                                borderRadius: '16px'
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '2rem',
                                    textAlign: 'center'
                                }}>
                                    {[
                                        { number: '40+', label: 'Industrial Clients' },
                                        { number: '80%', label: 'Safety Improvement' },
                                        { number: '60K+', label: 'Workers Trained' }
                                    ].map((stat, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                color: '#FF9B50',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1
                                            }}>
                                                {stat.number}
                                            </div>
                                            <div style={{
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: isDarkTheme ? '#AAAAAA' : '#666666'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '2rem'
                            }}>
                                <button style={{
                                    background: '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
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
                                    Schedule Demo →
                                </button>
                                <button style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: `2px solid ${isDarkTheme ? '#FFFFFF' : '#2D2D2D'}`,
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                        e.target.style.color = isDarkTheme ? '#000' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    }}
                                    onClick={() => setShowDefenceModal(false)}
                                >
                                    View Simulators
                                </button>
                            </div>
                        </div>
                    </div>

                    <style>{`
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
            )}
        </div>
    );
}
