import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCarousel({ onNavigate, isDarkTheme }) {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const products = [
        {
            id: 'products', // Maps to Products page
            icon: '/images/vr-chair.webp',
            isImage: true,
            title: 'Hardware Solutions',
            tagline: 'Cutting-Edge VR Equipment',
            description: 'Premium VR headsets, motion chairs, haptic devices, and complete hardware setups for immersive experiences across education and entertainment.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/software_solutions.webp',
            isImage: true,
            title: 'Software Solutions',
            tagline: 'Cutting-Edge VR Solution',
            description: 'An all-in-one immersive software ecosystem that synchronizes spatial computing, kinetic telemetry, and haptic feedback to power high-fidelity simulation and interactive storytelling across any platform.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/stu-vr.webp',
            isImage: true,
            title: 'Education & Training',
            tagline: 'Transform Learning Experiences',
            description: 'Comprehensive VR solutions for K-10 to higher education, including curriculum-aligned labs, interactive experiments, and skill development programs.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/indus.webp',
            isImage: true,
            title: 'Industrial & Enterprise Solutions',
            tagline: 'Professional Training at Scale',
            description: 'Enterprise-grade VR training systems for industrial operations, safety protocols, employee onboarding, and professional skill enhancement.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/defence1.webp',
            isImage: true,
            title: 'Defence Simulation',
            tagline: 'Mission-Critical Training',
            description: 'Advanced simulation systems for defense training, tactical operations, emergency response, and high-stakes scenario preparation.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/tour.webp',
            isImage: true,
            title: 'Tourism',
            tagline: 'Innovation & Future Tech',
            description: 'Exploring new frontiers in VR technology including healthcare simulations, architectural visualization, tourism, and next-generation applications.',
        },
        {
            id: 'products', // Maps to Products page
            icon: '/images/add.webp',
            isImage: true,
            title: 'Emerging Applications',
            tagline: 'Innovation & Future Tech',
            description: 'Exploring new frontiers in VR technology including healthcare simulations, architectural visualization, tourism, and next-generation applications.',
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, products.length]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    return (
        <div style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
        }}>
            {/* Carousel Container */}
            <div style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px'
            }}>
                {/* Slides */}
                <div style={{
                    display: 'flex',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${currentSlide * 100}%)`
                }}>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            style={{
                                minWidth: '100%',
                                padding: '2rem',
                                textAlign: 'center'
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                fontSize: product.isImage ? 'inherit' : '5rem',
                                marginBottom: '0',
                                animation: currentSlide === index ? 'fadeInScale 0.6s ease-out' : 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {product.isImage ? (
                                    <img
                                        src={product.icon}
                                        alt={product.title}
                                        style={{
                                            width: '320px',
                                            height: '190px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                ) : (
                                    product.icon
                                )}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                                fontWeight: 800,
                                marginBottom: '0.2rem',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                animation: currentSlide === index ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none'
                            }}>
                                {product.title}
                            </h3>

                            {/* Tagline */}
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#FF9B50',
                                fontWeight: 600,
                                marginBottom: '1.5rem',
                                animation: currentSlide === index ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
                            }}>
                                {product.tagline}
                            </p>

                            {/* Description */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                                opacity: 0.8,
                                maxWidth: '700px',
                                margin: '0 auto 2rem',
                                animation: currentSlide === index ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none'
                            }}>
                                {product.description}
                            </p>

                            {/* Features */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: '2rem',
                                animation: currentSlide === index ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
                            }}>
                                {product.features && product.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            padding: '0.5rem 1.2rem',
                                            background: 'rgba(255, 155, 80, 0.1)',
                                            color: '#FF9B50',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>


                            {/* CTA Button */}
                            <button
                                onClick={() => {
                                    const categoryMap = {
                                        'Industrial & Enterprise Solutions': 'Industrial & Enterprise'
                                    };
                                    const category = categoryMap[product.title] || product.title;
                                    navigate('/products', { state: { category } });
                                }}
                                style={{
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
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                                    animation: currentSlide === index ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
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
                                Explore Now →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 155, 80, 0.1)',
                    border: 'none',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: '#FF9B50',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = '#FF9B50';
                    e.target.style.color = '#fff';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                    e.target.style.color = '#FF9B50';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                ←
            </button>

            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 155, 80, 0.1)',
                    border: 'none',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: '#FF9B50',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = '#FF9B50';
                    e.target.style.color = '#fff';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 155, 80, 0.1)';
                    e.target.style.color = '#FF9B50';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                →
            </button>

            {/* Dot Indicators */}
            <div style={{
                display: 'flex',
                gap: '0.8rem',
                justifyContent: 'center',
                marginTop: '3rem'
            }}>
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                            width: currentSlide === index ? '40px' : '12px',
                            height: '12px',
                            borderRadius: '6px',
                            border: 'none',
                            background: currentSlide === index ? '#FF9B50' : 'rgba(255, 155, 80, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: 0
                        }}
                        onMouseEnter={(e) => {
                            if (currentSlide !== index) {
                                e.target.style.background = 'rgba(255, 155, 80, 0.6)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (currentSlide !== index) {
                                e.target.style.background = 'rgba(255, 155, 80, 0.3)';
                            }
                        }}
                    />
                ))}
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Mobile responsive */
                @media (max-width: 768px) {
                    .carousel-arrow {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
