import React, { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import mockStorage from './services/mockStorage';
import './styles/Industries.css'; // Using the Industry Card styles

export default function CaseStudies({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);

    useEffect(() => {
        loadCases();
    }, []);

    const loadCases = async () => {
        try {
            const response = await mockStorage.getCaseStudies();
            setCases(response.data.filter(c => c.isVisible !== false));
        } catch (error) {
            console.error('Error loading case studies:', error);
        }
    };

    // Helper to render media (Same as Blog)
    const renderMedia = (source, isDetail = false, altText = "Case Study Media") => {
        if (!source) return null;
        const isVideo = source.match(/\.(mp4|webm|ogg)$/i) || source.startsWith('data:video');
        if (isVideo) {
            return (
                <video
                    src={source}
                    style={{
                        width: '100%',
                        height: isDetail ? 'auto' : '200px',
                        maxHeight: isDetail ? '600px' : 'none',
                        objectFit: 'cover',
                        borderRadius: isDetail ? '16px' : '16px 16px 0 0',
                        marginBottom: isDetail ? '2rem' : '0',
                        display: 'block'
                    }}
                    controls={isDetail}
                    muted={!isDetail}
                    autoPlay={!isDetail}
                    loop
                    playsInline
                />
            );
        }
        return (
            <img
                src={source}
                alt={altText}
                style={{
                    width: '100%',
                    height: isDetail ? 'auto' : '200px',
                    maxHeight: isDetail ? '500px' : 'none',
                    objectFit: 'cover',
                    borderRadius: isDetail ? '16px' : '16px 16px 0 0',
                    marginBottom: isDetail ? '2rem' : '0',
                    display: 'block'
                }}
            />
        );
    };

    // Helper to render content blocks (Same as Blog)
    const renderContent = (content) => {
        if (!content) return null;
        if (typeof content === 'string') return <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: isDarkTheme ? '#eee' : '#333' }}>{content}</p>;

        if (Array.isArray(content)) {
            return content.map((block, idx) => {
                switch (block.type) {
                    case 'heading':
                        return <h3 key={idx} style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '2.5rem', marginBottom: '1rem', color: isDarkTheme ? '#fff' : '#111' }}>{block.content}</h3>;
                    case 'paragraph':
                        return <p key={idx} style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9, color: isDarkTheme ? '#eee' : '#333' }}>{block.content}</p>;
                    case 'quote':
                        return (
                            <blockquote key={idx} style={{ borderLeft: '4px solid #FF9B50', margin: '2rem 0', padding: '1.5rem', fontStyle: 'italic', background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : 'rgba(255, 155, 80, 0.05)', borderRadius: '0 12px 12px 0', color: isDarkTheme ? '#FF9B50' : '#444' }}>
                                "{block.content}"
                            </blockquote>
                        );
                    case 'list':
                        return (
                            <ul key={idx} style={{ margin: '1.5rem 0', paddingLeft: '1.5rem', listStyle: 'none' }}>
                                {block.items.map((item, i) => (
                                    <li key={i} style={{ fontSize: '1.1rem', marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#FF9B50', fontWeight: 'bold' }}>•</span>
                                        <span style={{ color: isDarkTheme ? '#eee' : '#333' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'media':
                        const src = (block.content && typeof block.content === 'object') ? block.content.url : block.content;
                        const alt = (block.content && typeof block.content === 'object') ? block.content.alt : 'Case Study Media';
                        return <div key={idx} style={{ margin: '2rem 0' }}>{renderMedia(src, true, alt)}</div>;
                    default:
                        return null;
                }
            });
        }
        return null;
    };

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="casestudies"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>

                {/* Hero Section */}
                <section style={{
                    paddingTop: '140px',
                    paddingBottom: '4rem',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    textAlign: 'center',
                    background: isDarkTheme
                        ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(255, 155, 80, 0.08) 0%, transparent 100%)'
                }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1rem', color: '#FF9B50' }}>Success Stories</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>See how our partners are transforming their industries with Melzo's immersive technology.</p>
                </section>

                {/* Case Studies List - Inheriting Industry Card Style */}
                <section style={{ padding: '2rem 5% 6rem 5%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                    {cases.map((item) => (
                        <div
                            key={item._id}
                            className={`horizontal-card ${!isDarkTheme ? 'light-theme-card' : ''}`}
                            style={{ '--accent': '#FF9B50' }}
                        >
                            <div className="image-box">
                                {item.image ? (
                                    <div style={{
                                        width: '100%', height: '100%',
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', backgroundColor: isDarkTheme ? '#333' : '#eee' }} />
                                )}
                            </div>

                            <div className="main-content-box">
                                <div className="header-info">
                                    <h2>{item.title}</h2>
                                    <p className="summary">{item.description}</p>
                                </div>

                                <div className="expandable-content">
                                    <div className="inner-wrap">
                                        <span className="impact-label">HIGHLIGHTS</span>
                                        {/* Render first heading or summary from content as preview if available */}
                                        {Array.isArray(item.content) && (
                                            <div style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
                                                {item.content.find(b => b.type === 'list')?.items.slice(0, 3).map((li, i) => (
                                                    <div key={i}>• {li}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <a onClick={() => setSelectedCase(item)} className="explore-link">
                                    Read Full Case Study &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Case Study Detail Modal */}
                {selectedCase && (
                    <div
                        onClick={() => setSelectedCase(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 20000, padding: '2rem',
                            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'
                        }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                                borderRadius: '20px',
                                maxWidth: '900px', width: '100%', maxHeight: '90vh',
                                overflow: 'auto', position: 'relative',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                                padding: '0'
                            }}
                        >
                            <button
                                onClick={() => setSelectedCase(null)}
                                style={{
                                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                                    background: 'rgba(255, 155, 80, 0.2)', border: 'none',
                                    borderRadius: '50%', width: '40px', height: '40px',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', color: '#FF9B50', zIndex: 10
                                }}
                            >
                                ×
                            </button>

                            {selectedCase.image && (
                                <div style={{
                                    width: '100%', height: '300px',
                                    backgroundImage: `url(${selectedCase.image})`,
                                    backgroundSize: 'cover', backgroundPosition: 'center'
                                }} />
                            )}

                            <div style={{ padding: '3rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <div style={{ width: '60px', height: '4px', background: '#FF9B50', margin: '0 auto 1.5rem', borderRadius: '2px' }} />
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D' }}>
                                        {selectedCase.title}
                                    </h2>
                                </div>
                                <div className="case-study-rich-content">
                                    {renderContent(selectedCase.content)}
                                    {(!selectedCase.content || selectedCase.content.length === 0) && (
                                        <p>{selectedCase.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
