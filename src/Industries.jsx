import React from 'react';

export default function Industries({ onNavigate, isDarkTheme }) {
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
        </div>
    );
}
