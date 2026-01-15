import React, { useState, useEffect } from 'react';
import mockStorage from '../services/mockStorage';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudyHighlights({ isDarkTheme }) {
    const [caseStudies, setCaseStudies] = useState([]);
    const [selectedStudy, setSelectedStudy] = useState(null);

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                const response = await mockStorage.getCaseStudies();
                // Take first 4 visible case studies
                const visible = response.data.filter(s =>
                    s.status === 'Published' || (!s.status && s.isVisible !== false)
                ).slice(0, 4);
                setCaseStudies(visible);
            } catch (error) {
                console.error("Failed to load case studies", error);
            }
        };
        fetchStudies();
    }, []);

    return (
        <section style={{
            padding: '5rem 5%'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                }}>
                    Case Study <span style={{ color: '#FF9B50' }}>Highlights</span>
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    opacity: 0.7,
                    marginBottom: '4rem',
                    color: isDarkTheme ? '#EAEAEA' : '#2D2D2D'
                }}>
                    Real-world impact across education and training institutions
                </p>

                {/* Case Study Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {caseStudies.length > 0 ? (
                        caseStudies.map((study) => (
                            <div key={study._id} style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onClick={() => setSelectedStudy(study)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 155, 80, 0.15)';
                                    e.currentTarget.style.borderColor = '#FF9B50';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#ff9c5090',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                                }}>
                                    <div style={{
                                        width: '18px',
                                        height: '18px',
                                        border: '2.5px solid white',
                                        transform: 'rotate(45deg)'
                                    }} />
                                </div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                }}>
                                    {study.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.6',
                                    color: '#FF9B50',
                                    fontWeight: 600,
                                    flex: 1
                                }}>
                                    {study.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.5, color: isDarkTheme ? '#fff' : '#000' }}>
                            <p>No case studies available.</p>
                        </div>
                    )}
                </div>

                {/* CTA Button */}
                <div style={{
                    textAlign: 'center'
                }}>
                    <button style={{
                        background: '#FF9B50',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2.5rem',
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
                        onClick={() => window.location.href = '/casestudies'}
                    >
                        View All Case Studies →
                    </button>
                </div>
            </div>

            <CaseStudyModal
                study={selectedStudy}
                onClose={() => setSelectedStudy(null)}
                isDarkTheme={isDarkTheme}
            />
        </section>
    );
}
