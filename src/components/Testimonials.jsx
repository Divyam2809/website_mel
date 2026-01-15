import React, { useState, useEffect } from 'react';
import mockStorage from '../services/mockStorage';

export default function Testimonials({ isDarkTheme }) {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await mockStorage.getTestimonials();
                // Filter visible and take latest 3? Or just map them.
                const visible = response.data.filter(t =>
                    t.status === 'Published' || (!t.status && t.isVisible !== false)
                );
                setTestimonials(visible);
            } catch (error) {
                console.error("Failed to load testimonials", error);
            }
        };
        fetchTestimonials();
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((item, index) => (
                        <div key={item._id || index} style={{
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
                                {item.testimonial || item.quote}
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
                                    {item.name || item.author}
                                </p>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#FF9B50',
                                    fontWeight: 600
                                }}>
                                    {item.position || item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
