import React from 'react';

export default function CaseStudyModal({ study, onClose, isDarkTheme }) {
    if (!study) return null;

    // Helper to render structured content blocks
    const renderContentBlock = (block, index) => {
        switch (block.type) {
            case 'heading':
                return (
                    <h3 key={index} style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        margin: '1.5rem 0 1rem',
                        color: isDarkTheme ? '#FF9B50' : '#d97706'
                    }}>
                        {block.content}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p key={index} style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        marginBottom: '1rem',
                        color: isDarkTheme ? '#EAEAEA' : '#4A4A4A'
                    }}>
                        {block.content}
                    </p>
                );
            case 'quote':
                return (
                    <div key={index} style={{
                        borderLeft: '4px solid #FF9B50',
                        padding: '1rem 1.5rem',
                        margin: '1.5rem 0',
                        background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : 'rgba(255, 155, 80, 0.05)',
                        fontStyle: 'italic',
                        borderRadius: '0 12px 12px 0',
                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                    }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: '#FF9B50' }}>"</span>
                        {block.content}
                        <span style={{ fontSize: '1.5rem', marginLeft: '0.5rem', color: '#FF9B50' }}>"</span>
                    </div>
                );
            case 'list':
                return (
                    <ul key={index} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        {block.items.map((item, i) => (
                            <li key={i} style={{
                                marginBottom: '0.5rem',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                color: isDarkTheme ? '#EAEAEA' : '#4A4A4A',
                                listStyleType: 'disc',
                                '::marker': { color: '#FF9B50' }
                            }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            case 'image':
                return block.url ? (
                    <img
                        key={index}
                        src={block.url}
                        alt="Case Study Detail"
                        style={{
                            width: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem 0',
                            maxHeight: '400px',
                            objectFit: 'cover'
                        }}
                    />
                ) : null;
            default:
                return null;
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(5px)',
            animation: 'fadeIn 0.2s ease-out'
        }} onClick={onClose}>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                animation: 'slideUp 0.3s ease-out'
            }} onClick={e => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: isDarkTheme ? '#fff' : '#333',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#FF9B50';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
                        e.currentTarget.style.color = isDarkTheme ? '#fff' : '#333';
                    }}
                >
                    ✕
                </button>

                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        color: isDarkTheme ? '#FFFFFF' : '#1A1A1A',
                        lineHeight: 1.2
                    }}>{study.title}</h2>

                    {study.image && (
                        <img
                            src={study.image}
                            alt={study.title}
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '16px',
                                marginTop: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        />
                    )}
                </div>

                <div style={{
                    borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                    paddingTop: '2rem'
                }}>
                    {/* Render Introduction Description if exists outside content array */}
                    {study.description && (
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            fontWeight: 500,
                            color: isDarkTheme ? '#EAEAEA' : '#4A4A4A'
                        }}>
                            {study.description}
                        </p>
                    )}

                    {/* Render Structured Content */}
                    {study.content && study.content.map((block, i) => renderContentBlock(block, i))}
                </div>
            </div>
        </div>
    );
}
