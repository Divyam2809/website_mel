import React, { useState, useEffect } from 'react';
import mockStorage from '../services/mockStorage';

export default function EmployeeTestimonials({ isDarkTheme }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await mockStorage.getEmployeeStories();
                if (response.data) {
                    setTestimonials(response.data.filter(s => s.status === 'Published' || s.isVisible));
                }
            } catch (error) {
                console.error("Failed to fetch employee stories", error);
            }
        };
        fetchStories();
    }, []);

    const nextSlide = () => {
        if (isAnimating || testimonials.length === 0) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        if (isAnimating || testimonials.length === 0) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    if (testimonials.length === 0) return null;

    return (
        <section style={{ padding: '6rem 5%', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    marginBottom: '4rem',
                    textAlign: 'center',
                    color: isDarkTheme ? '#FFF' : '#333'
                }}>
                    Hear from our Employees
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '1rem',
                            color: '#FF9B50',
                            fontSize: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s',
                            zIndex: 2
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        ❮
                    </button>

                    {/* Content Area */}
                    <div style={{
                        flex: 1,
                        margin: '0 2rem',
                        minHeight: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            opacity: isAnimating ? 0 : 1,
                            transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
                            transition: 'all 0.5s ease',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center'
                        }}>
                            {/* Left: Quote */}
                            <div style={{ order: 1 }}> {/* Mobile handling usually stacks, but for simplicity keeping grid */}
                                <div style={{
                                    fontSize: '1.2rem',
                                    lineHeight: '1.8',
                                    fontStyle: 'italic',
                                    opacity: 0.8,
                                    marginBottom: '1rem'
                                }}>
                                    "{testimonials[currentIndex].quote}"
                                </div>
                            </div>

                            {/* Right: Details */}
                            <div style={{ order: 2, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{
                                    textAlign: 'right',
                                    fontSize: '2.5rem',
                                    fontWeight: 800,
                                    color: isDarkTheme ? '#FFF' : '#333'
                                }}>
                                    {testimonials[currentIndex].role}
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>{testimonials[currentIndex].name}</div>
                                        <div style={{ fontSize: '1.1rem', opacity: 0.6 }}>{testimonials[currentIndex].tenure}</div>
                                    </div>
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid #FF9B50'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '1rem',
                            color: '#FF9B50',
                            fontSize: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s',
                            zIndex: 2
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        ❯
                    </button>
                </div>

                {/* Dots Pagination */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '3rem' }}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: i === currentIndex ? '#FF9B50' : (isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'),
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        />
                    ))}
                </div>

                {/* Mobile Responsive Styles */}
                <style>{`
                    @media (max-width: 900px) {
                        div[style*="gridTemplateColumns"] {
                            grid-template-columns: 1fr !important;
                            text-align: center;
                            gap: 2rem !important;
                        }
                        div[style*="textAlign: right"] {
                            text-align: center !important;
                        }
                        div[style*="justifyContent: flex-end"] {
                            justify-content: center !important;
                            flex-direction: column-reverse; /* Img on top */
                        }
                        div[style*="order: 1"] {
                            order: 2 !important;
                        }
                        div[style*="order: 2"] {
                            order: 1 !important;
                        }
                    }
                `}</style>

            </div>
        </section>
    );
}
