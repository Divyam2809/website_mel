import React from 'react';

export default function CTASection({ onBookDemo }) {
    return (
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
    );
}
