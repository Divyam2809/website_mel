import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer({ isDarkTheme, onNavigate }) {
    const navigate = useNavigate();
    const textColor = isDarkTheme ? '#E0E0E0' : '#2D2D2D';
    const subTextColor = isDarkTheme ? '#AAA' : '#666';
    const bgColor = isDarkTheme ? '#0F0F0F' : '#F5F5F5';
    const borderColor = isDarkTheme ? 'rgba(255,255,255,0.1)' : '#E0E0E0';
    const iconBg = isDarkTheme ? '#262626' : '#E8E8E8';

    const exploreLinks = [
        { label: 'About Us', id: 'about' },
        { label: 'Case Study', id: 'casestudies' },
        { label: 'Blog', id: 'blog' },
        // { label: 'Event', id: null },
        { label: 'Melzo in News', id: 'melzonews' },
    ];

    return (
        <footer id="footer-contact" style={{
            backgroundColor: bgColor,
            padding: '4rem 5% 2rem',
            marginTop: '0',
            borderTop: `1px solid ${borderColor}`,
            color: textColor,
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
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
                    {/* ... (Left Side kept same via context, but I need to be careful with replace_file) ... */}
                    {/* Actually, I will just replace the top part and component definition to destructure onNavigate */}
                    {/* And then replace the specific Explore list */}

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
                            {/* *DUMMY TEXT ISO 0001 2015 certified company*<br /> */}
                            Melzo is an Indian EdTech company delivering immersive digital learning solutions for schools and institutions. Through VR Labs and Interactive Learning Platforms, Melzo helps educators simplify operations and enhance student understanding using modern technology.

                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '0.8rem'
                        }}>
                            {[
                                { name: 'linkedin', src: '/assets/linkedin.svg', link: 'https://www.linkedin.com/company/melzo/' },
                                { name: 'instagram', src: '/assets/insta.svg', link: 'https://www.instagram.com/melzoanubhav?igsh=MXJhMDdpYm4yd3BhZw==' },
                                { name: 'x', src: '/assets/x_logo.svg', link: 'https://x.com/melzo_e_learn?s=11' },
                                { name: 'gmail', src: '/assets/gmail.svg', link: 'mailto:contact@melzo.com' }
                            ].map((social) => (
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

                    {/* Explore Melzo Anubhav */}
                    <div>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginBottom: '1.2rem',
                            color: textColor
                        }}>
                            Explore Melzo Anubhav
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {exploreLinks.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.8rem' }}>
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.id && onNavigate) onNavigate(item.id);
                                        }}
                                        style={{
                                            color: subTextColor,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s ease',
                                            cursor: item.id ? 'pointer' : 'default',
                                            opacity: item.id ? 1 : 0.7
                                        }}
                                        onMouseEnter={(e) => item.id && (e.target.style.color = '#FF9B50')}
                                        onMouseLeave={(e) => e.target.style.color = subTextColor}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginBottom: '1.2rem',
                            color: textColor
                        }}>
                            Policies
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Terms of Services', 'Privacy and Refund Policy', 'Health & Safety'].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.8rem' }}>
                                    <a href="#" style={{
                                        color: subTextColor,
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.2s ease'
                                    }}
                                        onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                        onMouseLeave={(e) => e.target.style.color = subTextColor}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Offerings Combined for spacing */}
                    <div>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginBottom: '1.2rem',
                            color: textColor,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Our Offerings

                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                'Hardware Solutions',
                                'Software Solutions',
                                'Education & Training',
                                'Industrial & Enterprise',
                                'Defence Simulation',
                                'Tourism',
                                'Emerging Applications'
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.8rem' }}>
                                    <a href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate('/products', { state: { category: item } });
                                        }}
                                        style={{
                                            color: subTextColor,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                        onMouseLeave={(e) => e.target.style.color = subTextColor}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: textColor }}>Contact Us</h4>

                        <div style={{ marginBottom: '1rem' }}>
                            <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem', color: textColor }}>Phone Number -</strong>
                            <span style={{ color: subTextColor, fontSize: '0.9rem' }}>+91 - 9687588818 / 9687488818</span>
                        </div>

                        <div>
                            <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem', color: textColor }}>Registered Office Address -</strong>
                            <span style={{ color: subTextColor, fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>
                                Ship Maitri House, Bhatar Char Rasta, opp. Shiv Dham Temple, Surat, Gujarat 395017
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
