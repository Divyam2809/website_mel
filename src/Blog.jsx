import React from 'react';

import AppNav from './AppNav';

export default function Blog({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const posts = [
        { title: 'The Future of VR in Education', date: 'Oct 15, 2025', excerpt: 'How immersive technology is reshaping classrooms globally.' },
        { title: '5 Ways VR Improves Industrial Safety', date: 'Nov 02, 2025', excerpt: 'Reducing risks in high-hazard industries through simulation.' },
        { title: 'Melzo Wins Innovation Award', date: 'Dec 10, 2025', excerpt: 'Recognized for contribution to accessible VR technology.' }
    ];


    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="blog"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', padding: '120px 5%', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', color: '#FF9B50' }}>Melzo Blog</h1>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {posts.map((post, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            background: isDarkTheme ? '#262626' : '#f9f9f9',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{post.date}</p>
                            <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{post.title}</h2>
                            <p style={{ opacity: 0.8 }}>{post.excerpt}</p>
                            <button style={{
                                marginTop: '1rem',
                                background: 'transparent',
                                border: '1px solid #FF9B50',
                                color: '#FF9B50',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                cursor: 'pointer'
                            }}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
