import React, { useState, useEffect } from 'react';
import { productsData } from './productsData';

// Video Gallery Component (Internal)
function VideoGallery({ videos, isDarkTheme }) {
    if (!videos || videos.length === 0) return null;

    return (
        <section style={{
            padding: '5rem 5%',
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#fff'
        }}>
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                letterSpacing: '-1px',
                marginBottom: '3rem',
                textAlign: 'center',
                color: '#FF9B50'
            }}>
                Video Gallery
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {videos.map((video, idx) => (
                    <div key={idx} style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        backgroundColor: isDarkTheme ? '#262626' : '#fff',
                        maxWidth: '600px',
                        width: '100%',
                        margin: '0 auto'
                    }}>
                        <video
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                display: 'block',
                                backgroundColor: '#000'
                            }}
                        >
                            <source src={video.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function GenericProduct({ productId, onNavigate, isDarkTheme, onBookDemo }) {
    const product = productsData[productId] || {};

    useEffect(() => {
        if (product.title) {
            document.title = `${product.title} - Melzo`;
        }
        return () => {
            document.title = 'Melzo - Immersive Education & Training'; // Reset on unmount if needed
        };
    }, [product]);

    // Default fallback if product not strictly found but component loaded
    if (!product.title) return (
        <div style={{
            padding: '10rem 5%',
            textAlign: 'center',
            color: isDarkTheme ? '#fff' : '#000',
            background: isDarkTheme ? '#1A1A1A' : '#fff',
            minHeight: '80vh'
        }}>
            <h1>Product Not Found</h1>
            <button onClick={() => onNavigate('products')} style={{
                marginTop: '1rem',
                padding: '0.8rem 2rem',
                background: '#FF9B50',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer'
            }}>Back to Products</button>
        </div>
    );

    return (
        <div style={{
            fontFamily: 'Inter, sans-serif',
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
            overflowX: 'hidden'
        }}>
            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '120px' // Nav height augmented
            }}>
                {/* Background - Similar to Anubhav */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(255, 155, 80, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 5%',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    zIndex: 1
                }}>
                    {/* Text Content */}
                    <div>
                        <div style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: 600,
                            color: '#FF9B50',
                            marginBottom: '1rem'
                        }}>
                            {product.tagline || 'Innovation'}
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1'
                        }}>
                            {product.title}
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            opacity: 0.8,
                            maxWidth: '600px',
                            marginBottom: '2.5rem'
                        }}>
                            {product.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button style={{
                                background: '#FF9B50',
                                color: '#fff',
                                padding: '1rem 2.5rem',
                                borderRadius: '30px',
                                border: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: '0 10px 30px rgba(255, 155, 80, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                                onClick={onBookDemo}
                                onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                                onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                            >
                                Book A Demo
                            </button>
                            <button style={{
                                background: 'transparent',
                                color: isDarkTheme ? '#fff' : '#2D2D2D',
                                padding: '1rem 2.5rem',
                                borderRadius: '30px',
                                border: isDarkTheme ? '1px solid #444' : '1px solid #ddd',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onClick={() => onNavigate('contact')} // Or similar
                                onMouseEnter={e => e.target.style.borderColor = '#FF9B50'}
                                onMouseLeave={e => e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd'}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Image / Visual Placeholder */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: isDarkTheme ?
                                'linear-gradient(135deg, #262626 0%, #1A1A1A 100%)' :
                                'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                fontSize: '5rem',
                                opacity: 0.2
                            }}>
                                {/* Placeholder Icon */}
                                📦
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {product.features && product.features.length > 0 && (
                <section style={{
                    padding: '5rem 5%',
                    background: isDarkTheme ? '#151515' : '#FAFAFA'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            marginBottom: '3rem',
                            textAlign: 'center'
                        }}>Key Features</h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {product.features.map((feature, idx) => (
                                <div key={idx} style={{
                                    padding: '2rem',
                                    backgroundColor: isDarkTheme ? '#262626' : '#fff',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: '#FF9B50',
                                        flexShrink: 0
                                    }} />
                                    <span style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600
                                    }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <VideoGallery videos={product.videoGallery} isDarkTheme={isDarkTheme} />

        </div>
    );
}
