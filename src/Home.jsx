import React, { useState, useEffect } from 'react';

export default function Home({ onNavigate, isDarkTheme, onBookDemo }) {
    return (
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
                    backgroundImage: 'url(/images/classroom-hero.jpg)',
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
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.65) 50%), rgba(37, 34, 34, 0.5) 0%',
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
                        Virtual Reality Labs That Transform <br></br>
                        <span style={{ color: '#ff770eff', fontSize: '3rem', letterSpacing: '2px' }}>Learning, Training, and Experience</span>
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
                        Curriculum-aligned VR Labs, simulators, and immersive training systems for schools, institutions, industries, and government programs across India.

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
                            Explore Our Products
                        </button>
                        <button style={{
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
                            Contact Us
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
            <section style={{
                backgroundColor: '#1a1a1a',
                padding: '1.5rem 0',
                overflow: 'hidden',
                position: 'relative',

            }}>
                <div style={{
                    display: 'flex',
                    animation: 'scroll 30s linear infinite',
                    whiteSpace: 'nowrap'
                }}>
                    {/* Duplicate content for seamless loop */}
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3rem',
                            paddingRight: '3rem'
                        }}>
                            <span style={{
                                color: '#ffffff',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                fontFamily: 'Inter, sans-serif'
                            }}>USED BY 120+ INSTITUTIONS ACROSS INDIA</span>
                            <span style={{
                                color: '#FF9B50',
                                fontSize: '0.5rem'
                            }}>●</span>
                            <span style={{
                                color: '#ffffff',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                fontFamily: 'Inter, sans-serif'
                            }}>COVERS K-10 TO HIGHER EDUCATION & INDUSTRIAL TRAINING</span>
                            <span style={{
                                color: '#FF9B50',
                                fontSize: '0.5rem'
                            }}>●</span>
                            <span style={{
                                color: '#ffffff',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                fontFamily: 'Inter, sans-serif'
                            }}>1,200+ STUDENTS IMPACTED PER LAB ANNUALLY</span>
                            <span style={{
                                color: '#FF9B50',
                                fontSize: '0.5rem'
                            }}>●</span>
                            <span style={{
                                color: '#ffffff',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                fontFamily: 'Inter, sans-serif'
                            }}>WORKS WITH CSR, GOVERNMENT & PRIVATE INSTITUTIONS</span>
                            <span style={{
                                color: '#FF9B50',
                                fontSize: '0.5rem'
                            }}>●</span>
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333%); }
                    }
                `}</style>
            </section>

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
                padding: '5rem 5%',
                position: 'relative',
                overflow: 'hidden',
                background: isDarkTheme
                    ? 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)'
                    : 'linear-gradient(135deg, #FFF5EC 0%, #FFFFFF 100%)' // Very subtle orange tint
            }}>
                {/* Grid Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: isDarkTheme
                        ? 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '4rem',
                        textAlign: 'center',
                        color: '#FF9B50'
                    }}>
                        Our Products
                    </h2>

                    <ProductCarousel onNavigate={onNavigate} isDarkTheme={isDarkTheme} />
                </div>
            </section>

            {/* Why VR Works Section */}
            <section style={{
                padding: '5rem 5%',
                borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    maxWidth: '1000px',
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
                        Why Virtual Reality Works in <span style={{ color: '#FF9B50' }}>Classrooms & Training</span>
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
                        Virtual Reality enables learners to <strong style={{ color: '#FF9B50' }}>see, interact, and practice</strong> instead of only reading or listening. Melzo VR Labs are designed to support <strong>CBSE, ICSE, State Boards</strong>, vocational training, and enterprise skill development.
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
                        {/* Case Study 1 */}
                        <div style={{
                            background: isDarkTheme ? '#262626' : '#ffffff',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
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
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.2) 0%, rgba(255, 155, 80, 0.1) 100%)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                📈
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                            }}>
                                Surat CBSE School
                            </h3>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                15% rise in admissions
                            </p>
                        </div>

                        {/* Case Study 2 */}
                        <div style={{
                            background: isDarkTheme ? '#262626' : '#ffffff',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
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
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.2) 0%, rgba(255, 155, 80, 0.1) 100%)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                🧪
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                            }}>
                                Ahmedabad Govt School
                            </h3>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                Improved science comprehension
                            </p>
                        </div>

                        {/* Case Study 3 */}
                        <div style={{
                            background: isDarkTheme ? '#262626' : '#ffffff',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
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
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.2) 0%, rgba(255, 155, 80, 0.1) 100%)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                🤝
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                            }}>
                                CSR Program (Gujarat)
                            </h3>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                1,200 students/year impact
                            </p>
                        </div>

                        {/* Case Study 4 */}
                        <div style={{
                            background: isDarkTheme ? '#262626' : '#ffffff',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
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
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.2) 0%, rgba(255, 155, 80, 0.1) 100%)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                🛡️
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                            }}>
                                Polytechnic Institute
                            </h3>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                color: '#FF9B50',
                                fontWeight: 600
                            }}>
                                Safer industrial training
                            </p>
                        </div>
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
                        >
                            View All Case Studies →
                        </button>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
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


            {/* Stats Section */}
            <section style={{
                padding: '5rem 5%'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                            fontWeight: 900,
                            color: '#FF9B50',
                            marginBottom: '0.5rem'
                        }}>
                            <CountUpAnimation end={100} suffix="+" duration={2000} />
                        </div>
                        <div style={{
                            fontSize: '1.1rem',
                            opacity: 0.7,
                            fontWeight: 500
                        }}>Institutions Served</div>
                    </div>
                    <div>
                        <div style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                            fontWeight: 900,
                            color: '#FF9B50',
                            marginBottom: '0.5rem'
                        }}>
                            <CountUpAnimation end={75} suffix="%" duration={2000} />
                        </div>
                        <div style={{
                            fontSize: '1.1rem',
                            opacity: 0.7,
                            fontWeight: 500
                        }}>Increased Learning Retention</div>
                    </div>
                    <div>
                        <div style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                            fontWeight: 900,
                            color: '#FF9B50',
                            marginBottom: '0.5rem'
                        }}>
                            <CountUpAnimation end={50} suffix="K+" duration={2000} />
                        </div>
                        <div style={{
                            fontSize: '1.1rem',
                            opacity: 0.7,
                            fontWeight: 500
                        }}>Students Impacted</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '5rem 5%',
                background: 'linear-gradient(45deg, #FF9B50 0%, #ffffffff 100%)',
                color: '#000',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '1.5rem'
                    }}>
                        Ready to Transform Education?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '2.5rem',
                        opacity: 0.95,
                        lineHeight: '1.6'
                    }}>
                        Join hundreds of institutions already revolutionizing learning with Melzo's innovative solutions.
                    </p>
                    <button style={{
                        background: '#fff',
                        color: '#FF9B50',
                        border: 'none',
                        padding: '1.2rem 3rem',
                        cursor: 'pointer',
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                        onClick={() => onBookDemo && onBookDemo()}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                        }}>
                        Book A Demo Today
                    </button>
                </div>
            </section>



        </div>
    );
}

// Modern Minimal Product Carousel Component
function ProductCarousel({ onNavigate, isDarkTheme }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const products = [
        {
            id: 'hardware-solutions',
            icon: '/images/vr-chair.png',
            isImage: true,
            title: 'Hardware Solutions',
            tagline: 'Cutting-Edge VR Equipment',
            description: 'Premium VR headsets, motion chairs, haptic devices, and complete hardware setups for immersive experiences across education and entertainment.',

        },
        {
            id: 'education-training',
            icon: '/images/stu-vr.png',
            isImage: true,
            title: 'Education & Training',
            tagline: 'Transform Learning Experiences',
            description: 'Comprehensive VR solutions for K-10 to higher education, including curriculum-aligned labs, interactive experiments, and skill development programs.',

        },
        {
            id: 'industrial-enterprise',
            icon: '/images/indus.png',
            isImage: true,
            title: 'Industrial & Enterprise Solutions',
            tagline: 'Professional Training at Scale',
            description: 'Enterprise-grade VR training systems for industrial operations, safety protocols, employee onboarding, and professional skill enhancement.',

        },
        {
            id: 'simulation-defense',
            icon: '/images/defence1.png',
            isImage: true,
            title: 'Defence Simulation',
            tagline: 'Mission-Critical Training',
            description: 'Advanced simulation systems for defense training, tactical operations, emergency response, and high-stakes scenario preparation.',

        },
        {
            id: 'tourism',
            icon: '/images/tour.png',
            isImage: true,
            title: 'Tourism',
            tagline: 'Innovation & Future Tech',
            description: 'Exploring new frontiers in VR technology including healthcare simulations, architectural visualization, tourism, and next-generation applications.',

        },
        {
            id: 'emerging-applications',
            icon: '/images/add.png',
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
                                            height: '200px',
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
                                marginBottom: '0.5rem',
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
                                onClick={() => onNavigate && onNavigate(product.id)}
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

// CountUp Animation Component
function CountUpAnimation({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCount();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return <span ref={countRef}>{count}{suffix}</span>;
}
