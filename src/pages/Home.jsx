import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import AppNav from '../components/AppNav';
// Lazy load the 3D Carousel
const Product3DCarousel = React.lazy(() => import('../components/Product3DCarousel'));
import LoadingSpinner from '../components/LoadingSpinner';
import StatsSection from '../components/StatsSection';
import NewsletterSection from '../components/NewsletterSection';
import CTASection from '../components/CTASection';
import DataStrip from '../components/DataStrip';
import CaseStudyHighlights from '../components/CaseStudyHighlights';
import Testimonials from '../components/Testimonials';
import GridBackground from '../components/GridBackground';
import initialContent from '../data/homeContent.json';

export default function Home({ onNavigate, isDarkTheme, onBookDemo, onContactUs, onToggleTheme, scrollToContact }) {
    const [content, setContent] = useState(initialContent);

    useEffect(() => {
        fetch('/api/page-content/home_live')
            .then(res => res.json())
            .then(data => {
                if (data && data.hero) {
                    setContent(data);
                }
            })
            .catch(err => console.error('Error fetching home data:', err));
    }, []);

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="home"
            />
            <div style={{ minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

                {/* Hero Section */}
                <section style={{
                    padding: '9rem 5%',
                    background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background Image */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        backgroundImage: 'url(/images/classroom-hero.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.5,
                        zIndex: 0
                    }} />

                    {/* Gradient Overlay for better text readability */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: isDarkTheme
                            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.95) 100%)'
                            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.95) 100%)',
                        zIndex: 0
                    }} />

                    {/* Animated background elements */}
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        right: '10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255, 155, 80, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'float 8s ease-in-out infinite',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 4rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1'
                        }}>
                            {content.hero.titleLine1} <br></br>
                            <span style={{ color: '#ff770eff', fontSize: '3rem', letterSpacing: '2px' }}>{content.hero.titleHighlight}</span>
                            {/* Welcome to <span style={{ color: '#ff770eff' }}>Melzo</span> */}
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.2rem)',
                            opacity: 0.8,
                            maxWidth: '800px',
                            margin: '0 auto 3rem',
                            lineHeight: '1.6'
                        }}>
                            {/* Pioneering the Future of Immersive Education & Interactive Learning Solutions */}
                            {content.hero.description}

                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <button
                                onClick={() => onNavigate && onNavigate('products')}
                                style={{
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
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 8px 25px rgba(255, 155, 80, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                                }}>
                                {content.hero.primaryBtn}
                            </button>
                            <button
                                onClick={onContactUs}
                                style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: isDarkTheme ? '2px solid #FFFFFF' : '2px solid #2D2D2D',
                                    padding: '1.2rem 3rem',
                                    cursor: 'pointer',
                                    borderRadius: '30px',
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
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
                                }}>
                                {content.hero.secondaryBtn}
                            </button>
                        </div>
                    </div>

                    <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-30px); }
                    }
                `}</style>
                </section>

                {/* Data Strip */}
                <DataStrip section="home" />

                {/* About Section */}
                {/* <section style={{
                padding: '5rem 5%',
                backgroundColor: '#ffffff'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        color: '#FF9B50'
                    }}>
                        Who We Are
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        opacity: 0.85,
                        textAlign: 'center',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        Melzo is a leading innovator in educational technology, dedicated to transforming traditional learning
                        into immersive, engaging experiences. Through cutting-edge VR technology and interactive solutions,
                        we empower schools, universities, and training centers to deliver education that students can truly
                        experience, not just observe.
                    </p>
                </div>
            </section> */}

                {/* Products Preview Section - Carousel */}
                <section style={{
                    padding: '4rem 5% 3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    background: isDarkTheme
                        ? 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)'
                        : 'linear-gradient(135deg, #FFF5EC 0%, #FFFFFF 100%)' // Very subtle orange tint
                }}>
                    {/* Grid Overlay */}
                    <GridBackground isDarkTheme={isDarkTheme} />

                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '3rem',
                            textAlign: 'center',
                            color: '#FF9B50'
                        }}>
                            Our Products
                        </h2>

                        <Suspense fallback={
                            <div style={{
                                height: '600px',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <LoadingSpinner size="large" />
                            </div>
                        }>
                            <Product3DCarousel onNavigate={onNavigate} isDarkTheme={isDarkTheme} />
                        </Suspense>
                    </div>
                </section>

                {/* Why VR Works Section */}
                <section style={{
                    padding: '4rem 5%',
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            fontWeight: 900,
                            letterSpacing: '-1.5px',
                            marginBottom: '2rem',
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                            lineHeight: '1.2'
                        }}>
                            {content.whyVr.titleLine1} <span style={{ color: '#FF9B50' }}>{content.whyVr.titleHighlight}</span>
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.9',
                            color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                            opacity: 0.85,
                            marginBottom: '2.5rem',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}>
                            {content.whyVr.description}
                        </p>

                        {/* Supported Boards/Systems */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginTop: '2.5rem'
                        }}>
                            {['CBSE', 'ICSE', 'State Boards', 'Vocational Training', 'Enterprise'].map((board, idx) => (
                                <span
                                    key={idx}
                                    style={{
                                        padding: '0.7rem 1.5rem',
                                        background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, rgba(255, 155, 80, 0.05) 100%)',
                                        color: '#FF9B50',
                                        borderRadius: '25px',
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        border: '2px solid rgba(255, 155, 80, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#FF9B50';
                                        e.target.style.color = '#fff';
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, rgba(255, 155, 80, 0.05) 100%)';
                                        e.target.style.color = '#FF9B50';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {board}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Study Highlights Section */}
                <CaseStudyHighlights isDarkTheme={isDarkTheme} />


                {/* Testimonials Section */}
                <Testimonials isDarkTheme={isDarkTheme} />


                {/* Stats Section */}
                <StatsSection />


                {/* Newsletter Section */}
                <NewsletterSection isDarkTheme={isDarkTheme} />

                {/* CTA Section */}
                <CTASection onBookDemo={onBookDemo} />



            </div>
        </>
    );
}


