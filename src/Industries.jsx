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
                        const bgImage = {
                            'education': '/images/education-bg.jpg',
                            'csr': '/images/csr-bg.jpg'
                        }[industry.id];
                        const hasBg = !!bgImage;

                        return (
                            <div key={industry.id} style={{
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
