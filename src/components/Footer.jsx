import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import footerService from '../services/footerService';

export default function Footer({ isDarkTheme, onNavigate }) {
    const navigate = useNavigate();
    const textColor = isDarkTheme ? '#E0E0E0' : '#2D2D2D';
    const subTextColor = isDarkTheme ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    const bgColor = isDarkTheme ? '#0F0F0F' : '#FFFFFF';
    const borderColor = isDarkTheme ? 'rgba(255, 155, 80, 0.3)' : 'rgba(255, 155, 80, 0.3)';
    const iconBg = isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    const [config, setConfig] = useState(null);

    useEffect(() => {
        const loadFooter = async () => {
            try {
                const res = await footerService.getFooterConfig();
                if (res.data) setConfig(res.data);
            } catch (error) {
                console.error("Failed to load footer config", error);
            }
        };
        loadFooter();
    }, []);

    if (!config) return null; // Or a simple loader, or default static fallback if preferred. User asked for dynamic control.

    return (
        <footer id="footer-contact" style={{
            backgroundColor: bgColor,
            padding: '4rem 5%',
            marginTop: '5rem',
            color: textColor,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            position: 'relative',
            borderTop: `1px solid ${borderColor}`,
            boxShadow: isDarkTheme
                ? 'none'
                : '0 -4px 20px rgba(0, 0, 0, 0.05)'
        }} >


            <hr style={{ borderColor: borderColor, opacity: 0.3, marginBottom: '4rem', maxWidth: '1400px', margin: '0 auto 4rem auto' }} />

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 1.5fr) 1fr 0.8fr 1.2fr 1.2fr',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {/* Responsive override embedded style */}
                    <style>{`
                        @media (max-width: 1024px) {
                            div[style*="minmax(280px, 1.5fr)"] {
                                grid-template-columns: 1fr 1fr !important;
                            }
                        }
                        @media (max-width: 600px) {
                            div[style*="minmax(280px, 1.5fr)"] {
                                grid-template-columns: 1fr !important;
                            }
                        }
                    `}</style>

                    <div style={{ minWidth: '250px' }}>
                        <img
                            src="/assets/Melzo_Logo.svg"
                            alt="Melzo"
                            style={{
                                height: '50px',
                                marginBottom: '1rem',
                                display: 'block'
                            }}
                        />
                        <p style={{
                            fontSize: '0.9rem',
                            lineHeight: '1.6',
                            color: subTextColor,
                            marginBottom: '1.5rem',
                            maxWidth: '350px'
                        }}>
                            {config.description}
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '0.8rem'
                        }}>
                            {config.socialLinks.filter(l => l.isVisible).map((social) => (
                                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: iconBg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FF9B50';
                                        e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = iconBg;
                                        e.currentTarget.querySelector('img').style.filter = isDarkTheme ? 'brightness(0) invert(1)' : 'none';
                                    }}>
                                    <img
                                        src={social.src}
                                        alt={social.name}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            transition: 'filter 0.3s',
                                            filter: isDarkTheme ? 'brightness(0) invert(1)' : 'none'
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Columns */}
                    {config.columns.map((col, index) => (
                        <div key={index}>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                marginBottom: '1.2rem',
                                color: textColor,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                {col.title}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {col.links.filter(l => l.isVisible).map((link, lIndex) => (
                                    <li key={lIndex} style={{ marginBottom: '0.8rem' }}>
                                        <a href={link.link || '#'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (link.type === 'product') {
                                                    navigate(link.link, { state: { category: link.label } });
                                                } else if (link.type === 'internal') {
                                                    if (onNavigate && link.id) onNavigate(link.id);
                                                    else navigate(link.link || '/');
                                                } else {
                                                    // External or static
                                                    if (link.link && link.link !== '#') window.open(link.link, '_blank');
                                                }
                                            }}
                                            style={{
                                                color: subTextColor,
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                transition: 'color 0.2s ease',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                            onMouseLeave={(e) => e.target.style.color = subTextColor}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Us */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: textColor }}>Contact Us</h4>

                        {config.contact.email && (
                            <div style={{ marginBottom: '1rem' }}>
                                <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem', color: textColor }}>Email -</strong>
                                <a href={`mailto:${config.contact.email}`} style={{ color: subTextColor, fontSize: '0.9rem', textDecoration: 'none' }}>{config.contact.email}</a>
                            </div>
                        )}

                        <div style={{ marginBottom: '1rem' }}>
                            <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem', color: textColor }}>Phone Number -</strong>
                            <span style={{ color: subTextColor, fontSize: '0.9rem' }}>{config.contact.phone}</span>
                        </div>


                        <div>
                            <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem', color: textColor }}>Registered Office Address -</strong>
                            <span style={{ color: subTextColor, fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>
                                {config.contact.address}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div style={{
                    borderTop: `1px solid ${borderColor}`,
                    paddingTop: '2rem',
                    textAlign: 'center',
                    marginTop: '2rem'
                }}>
                    <p style={{
                        fontSize: '0.9rem',
                        color: subTextColor,
                        margin: 0
                    }}>
                        © 2026 Melzo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
