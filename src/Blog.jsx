import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNav from './components/AppNav';
import { blogData } from './data/blogData';

export default function Blog({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial static data
        const staticPosts = Object.entries(blogData).map(([slug, data]) => ({
            slug,
            ...data,
            isStatic: true
        }));

        setPosts(staticPosts);
        setLoading(false);
    }, []);

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
                    {loading ? (
                        <p>Loading posts...</p>
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.slug} style={{
                                padding: '2rem',
                                borderRadius: '16px',
                                background: isDarkTheme ? '#262626' : '#f9f9f9',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                cursor: 'pointer'
                            }}
                                onClick={() => navigate(`/blog/${post.slug}`)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    {post.category && (
                                        <span style={{
                                            padding: '4px 12px',
                                            backgroundColor: 'rgba(255, 155, 80, 0.1)',
                                            color: '#FF9B50',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600
                                        }}>
                                            {post.category}
                                        </span>
                                    )}
                                    <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : post.publishDate}
                                    </span>
                                </div>
                                <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0', lineHeight: 1.3 }}>{post.title}</h2>
                                <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
                                    {post.excerpt
                                        ? post.excerpt
                                        : (post.content && Array.isArray(post.content)
                                            ? post.content.find(b => b.type === 'paragraph')?.content?.substring(0, 150)
                                            : 'Click to read more...')}
                                    ...
                                </p>
                                <button style={{
                                    background: 'transparent',
                                    border: '1px solid #FF9B50',
                                    color: '#FF9B50',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontWeight: 600
                                }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent double navigation
                                        navigate(`/blog/${post.slug}`);
                                    }}
                                >Read More</button>
                            </div>
                        ))
                    ) : (
                        <p style={{ opacity: 0.7 }}>No blog posts available at the moment.</p>
                    )}
                </div>
            </div>
        </>
    );
}
