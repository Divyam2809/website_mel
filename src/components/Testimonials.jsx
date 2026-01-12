import React from 'react';

export default function Testimonials({ isDarkTheme }) {
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
                    What Our <span style={{ color: '#FF9B50' }}>Clients Say</span>
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    opacity: 0.7,
                    marginBottom: '4rem',
                    color: isDarkTheme ? '#EAEAEA' : '#2D2D2D'
                }}>
                    Trusted by educators, trainers, and industry leaders
                </p>

                {/* Testimonial Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Testimonial 1 */}
                    <div style={{
                        background: isDarkTheme ? '#262626' : '#ffffff',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                    }}
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
                        {/* Quote Icon */}
                        <div style={{
                            fontSize: '3rem',
                            color: '#FF9B50',
                            opacity: 0.2,
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            "
                        </div>

                        {/* Quote Text */}
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic'
                        }}>
                            Students understand complex concepts faster with Melzo VR Labs.
                        </p>

                        {/* Author */}
                        <div style={{
                            borderTop: '2px solid rgba(255, 155, 80, 0.2)',
                            paddingTop: '1rem'
                        }}>
                            <p style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                marginBottom: '0.25rem'
                            }}>
                                Principal
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                CBSE School, Surat
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div style={{
                        background: isDarkTheme ? '#262626' : '#ffffff',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                    }}
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
                        {/* Quote Icon */}
                        <div style={{
                            fontSize: '3rem',
                            color: '#FF9B50',
                            opacity: 0.2,
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            "
                        </div>

                        {/* Quote Text */}
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic'
                        }}>
                            Our CSR education project achieved measurable learning outcomes.
                        </p>

                        {/* Author */}
                        <div style={{
                            borderTop: '2px solid rgba(255, 155, 80, 0.2)',
                            paddingTop: '1rem'
                        }}>
                            <p style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                marginBottom: '0.25rem'
                            }}>
                                CSR Head
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                Manufacturing Group
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div style={{
                        background: isDarkTheme ? '#262626' : '#ffffff',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                    }}
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
                        {/* Quote Icon */}
                        <div style={{
                            fontSize: '3rem',
                            color: '#FF9B50',
                            opacity: 0.2,
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            "
                        </div>

                        {/* Quote Text */}
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic'
                        }}>
                            VR crime scene training improved accuracy and confidence.
                        </p>

                        {/* Author */}
                        <div style={{
                            borderTop: '2px solid rgba(255, 155, 80, 0.2)',
                            paddingTop: '1rem'
                        }}>
                            <p style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                marginBottom: '0.25rem'
                            }}>
                                Police Training Officer
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                Law Enforcement
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div style={{
                        background: isDarkTheme ? '#262626' : '#ffffff',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                    }}
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
                        {/* Quote Icon */}
                        <div style={{
                            fontSize: '3rem',
                            color: '#FF9B50',
                            opacity: 0.2,
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            "
                        </div>

                        {/* Quote Text */}
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic'
                        }}>
                            Industrial VR reduced on-floor accidents during training.
                        </p>

                        {/* Author */}
                        <div style={{
                            borderTop: '2px solid rgba(255, 155, 80, 0.2)',
                            paddingTop: '1rem'
                        }}>
                            <p style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                marginBottom: '0.25rem'
                            }}>
                                HR Manager
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                Manufacturing Unit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
