import React from 'react';

export default function DataStrip() {
    return (
        <section style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem 0',
            overflow: 'hidden',
            position: 'relative',

        }}>
            <div style={{
                display: 'flex',
                animation: 'scroll 20s linear infinite',
                whiteSpace: 'nowrap',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
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
                        }}>COVERS K-12 TO HIGHER EDUCATION & INDUSTRIAL TRAINING</span>
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
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-33.333%, 0, 0); }
                }
            `}</style>
        </section>
    );
}
