import React from 'react';

export default function IndustryModal({ industry, isOpen, onClose, isDarkTheme }) {
    if (!isOpen || !industry) return null;

    // Helper to determine dynamic section titles based on industry slug or ID
    const getAudienceTitle = (id) => {
        const map = {
            education: "Who uses our education VR labs",
            csr: "Ideal for",
            government: "Used by",
            defence: "Industries served"
        };
        return map[id] || "Target Audience";
    };

    const getProblemsTitle = (id) => {
        const map = {
            education: "What problems VR solves",
            csr: "Why CSR teams choose VR",
            government: "Training areas", // Government modal had "Training areas" for the 2nd section
            defence: "Applications" // Defence modal had "Applications"
        };
        return map[id] || "Key Benefits";
    };

    // Parse helper functions
    const parseList = (text) => {
        if (!text) return [];
        // Handle if it's already an array
        if (Array.isArray(text)) return text;
        return text.split('\n').filter(line => line.trim() !== '');
    };

    const parseUseCases = (text) => {
        if (!text) return [];
        return text.split('\n').filter(line => line.trim() !== '').map(line => {
            const parts = line.split('|');
            return {
                badge: parts[0] || 'INFO',
                title: parts[1] || '',
                description: parts[2] || ''
            };
        });
    };

    const parseStats = (text) => {
        if (!text) return [];
        return text.split('\n').filter(line => line.trim() !== '').map(line => {
            const parts = line.split('|');
            return {
                value: parts[0] || '0',
                label: parts[1] || ''
            };
        });
    };

    const targetAudience = parseList(industry.targetAudience);
    const problemsSolved = parseList(industry.problemsSolved);
    const useCases = parseUseCases(industry.useCases);
    const stats = parseStats(industry.statsString);

    const audienceTitle = getAudienceTitle(industry.slug || industry.id);
    const problemsTitle = getProblemsTitle(industry.slug || industry.id);

    return (
        <div
            onClick={onClose}
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
                zIndex: 20000,
                padding: '2rem',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
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
                    onClick={onClose}
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

                {/* Hero Image if available */}
                {industry.image && (
                    <div style={{
                        width: '100%',
                        height: '300px',
                        backgroundImage: `url(${industry.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }} />
                )}

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
                            {industry.modalTitle || industry.title}
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: isDarkTheme ? '#EAEAEA' : '#555',
                            lineHeight: '1.6',
                            marginTop: '1rem',
                            maxWidth: '700px',
                            margin: '1rem auto 0'
                        }}>
                            {industry.fullSummary || industry.summary}
                        </p>
                    </div>

                    {/* Target Audience Section - Vertical List */}
                    {targetAudience.length > 0 && (
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                color: '#FF9B50',
                                textAlign: 'center'
                            }}>
                                {audienceTitle}
                            </h3>
                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                {targetAudience.map((text, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            padding: '1rem 0',
                                            borderBottom: idx < targetAudience.length - 1 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
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
                                                {'0' + (idx + 1)}
                                            </span>
                                        </div>
                                        <p style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                            margin: 0,
                                            fontWeight: 500
                                        }}>
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Problems Solved / Benefits - Grid */}
                    {problemsSolved.length > 0 && (
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                marginBottom: '2rem',
                                color: '#FF9B50',
                                textAlign: 'center'
                            }}>
                                {problemsTitle}
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '2rem 3rem',
                                maxWidth: '700px',
                                margin: '0 auto'
                            }}>
                                {problemsSolved.map((text, idx) => (
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
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Use Cases - Table Layout */}
                    {useCases.length > 0 && (
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
                            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                {useCases.map((useCase, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '100px 1fr',
                                            gap: '1.5rem',
                                            padding: '1.5rem 0',
                                            borderBottom: idx < useCases.length - 1 ? `1px solid ${isDarkTheme ? '#333' : '#eee'}` : 'none',
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
                                        <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '0.2rem' }}>
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
                    )}

                    {/* Stats Section */}
                    {stats.length > 0 && (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '2rem',
                            padding: '2rem',
                            background: isDarkTheme ? '#262626' : '#f8f8f8',
                            borderRadius: '12px'
                        }}>
                            {stats.map((stat, idx) => (
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
                    )}

                </div>
            </div>
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
