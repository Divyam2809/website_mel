import React, { useEffect, useState } from 'react';
import AppNav from '../components/AppNav';
import Footer from '../components/Footer';
import mockStorage from '../services/mockStorage';

export default function PrivacyPolicy(props) {
    const { onNavigate, isDarkTheme, onToggleTheme, onBookDemo } = props;
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    // Define colors relative to theme
    const accentColor = '#FF9B50';
    const bgCard = isDarkTheme ? '#262626' : '#F9F9F9';
    const bgPage = isDarkTheme ? '#1A1A1A' : '#ffffff';
    const textColor = isDarkTheme ? '#E0E0E0' : '#4A4A4A';
    const headingColor = isDarkTheme ? '#FFFFFF' : '#1F2937';
    const borderColor = isDarkTheme ? '#404040' : '#E5E7EB';

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const res = await mockStorage.getPrivacyPolicy();
                if (res.data) {
                    setSections(res.data.filter(item => item.isVisible && item.status === 'Published'));
                }
            } catch (error) {
                console.error("Failed to load privacy policy", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPolicy();
    }, []);

    const getIcon = (iconName) => {
        if (!iconName) return null;

        // Check if it's an uploaded image (data URL or path)
        if (iconName.startsWith('data:') || iconName.startsWith('/') || iconName.startsWith('http')) {
            return (
                <img
                    src={iconName}
                    alt="icon"
                    style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                />
            );
        }

        switch (iconName) {
            case 'gear':
                return (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                );
            case 'shield':
                return (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                );
            case 'users':
                return (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                );
            case 'mail':
                return (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                );
            case 'doc':
            default:
                return (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                );
        }
    };

    // Helper to render markdown-like content simply
    // Helper to render content (Block JSON or Legacy String)
    const renderContent = (content) => {
        if (!content) return null;

        // Legacy string support
        if (typeof content === 'string') {
            return content.split('\n').map((line, index) => {
                if (line.startsWith('*   **')) {
                    const parts = line.replace('*   ', '').split('**');
                    return (
                        <div key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                            <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: accentColor, marginTop: '10px' }} />
                            <div>
                                {parts[1] && <strong style={{ color: headingColor }}>{parts[1]}</strong>}
                                <span style={{ color: textColor, opacity: 0.9 }}>{parts[2]}</span>
                            </div>
                        </div>
                    );
                } else if (line.startsWith('* ')) {
                    return (
                        <div key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                            <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: accentColor, marginTop: '10px' }} />
                            <span style={{ color: textColor }}>{line.replace('* ', '')}</span>
                        </div>
                    );
                }
                return <p key={index} style={{ marginBottom: '1rem' }}>{line}</p>;
            });
        }

        // Block JSON support
        if (Array.isArray(content)) {
            return content.map((block) => {
                switch (block.type) {
                    case 'heading':
                        return <h3 key={block.id} style={{ fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0 1rem', color: headingColor }}>{block.content}</h3>;
                    case 'paragraph':
                        return <p key={block.id} style={{ marginBottom: '1rem', lineHeight: '1.7', color: textColor }}>{block.content}</p>;
                    case 'quote':
                        return (
                            <blockquote key={block.id} style={{ borderLeft: `4px solid ${accentColor}`, paddingLeft: '1rem', margin: '1.5rem 0', fontStyle: 'italic', color: textColor, background: isDarkTheme ? 'rgba(255,255,255,0.05)' : '#f9f9f9', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                                {block.content}
                            </blockquote>
                        );
                    case 'list':
                        return (
                            <ul key={block.id} style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                                {block.items.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                                        <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: accentColor, marginTop: '10px' }} />
                                        <span style={{ color: textColor }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'image':
                        return (
                            <div key={block.id} style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src={block.url} alt={block.caption || 'Content Image'} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                {block.caption && <p style={{ textAlign: 'center', fontSize: '0.9rem', color: textColor, marginTop: '0.5rem', opacity: 0.8 }}>{block.caption}</p>}
                            </div>
                        );
                    case 'video':
                        return (
                            <div key={block.id} style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden' }}>
                                <video src={block.url} controls style={{ width: '100%', display: 'block' }} />
                            </div>
                        );
                    default:
                        return null;
                }
            });
        }
        return null;
    };

    return (
        <div style={{
            backgroundColor: bgPage,
            minHeight: '100vh',
            color: textColor,
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.3s ease'
        }}>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="privacy-policy"
            />

            <main style={{ padding: '140px 5% 80px', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : 'rgba(255, 155, 80, 0.1)',
                        color: accentColor,
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        border: `1px solid ${isDarkTheme ? 'rgba(255, 155, 80, 0.3)' : 'rgba(255, 155, 80, 0.2)'}`
                    }}>
                        Last Updated: January 2026
                    </div>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-1px'
                    }}>
                        Privacy Policy
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: isDarkTheme ? '#ccc' : '#555',
                        lineHeight: '1.6'
                    }}>
                        At Melzo, we are committed to protecting your privacy and ensuring you have a positive experience on our website. Transparency is our core value.
                    </p>
                </div>

                {/* Content Sections - Stacked Cards */}
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>Loading policies...</div>
                    ) : (
                        sections.map((section) => (
                            <div key={section._id || section.id} style={{
                                backgroundColor: bgCard,
                                padding: '30px',
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: isDarkTheme ? 'none' : '0 4px 6px rgba(0,0,0,0.02)'
                            }}
                                onMouseEnter={(e) => {
                                    if (!isDarkTheme) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = isDarkTheme ? 'none' : '0 4px 6px rgba(0,0,0,0.02)';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: isDarkTheme ? 'rgba(255, 155, 80, 0.15)' : 'rgba(255, 155, 80, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {getIcon(section.icon)}
                                    </div>
                                    <h2 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: headingColor,
                                        margin: 0
                                    }}>
                                        {section.title}
                                    </h2>
                                </div>

                                <div style={{ color: textColor, paddingLeft: '5px' }}>
                                    {renderContent(section.content)}
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </main>
        </div>
    );
}
