import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNav from './components/AppNav';
import blogService from './services/blogService';
import GridBackground from './components/GridBackground';

export default function Blog({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await blogService.getAll();
                const visiblePosts = response.data.filter(post =>
                    post.status === 'Published' || (!post.status && post.isVisible !== false)
                );
                setPosts(visiblePosts);
            } catch (error) {
                console.error("Failed to load blogs", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
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
            {/* Background Container */}
            <div style={{
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden',
                background: isDarkTheme
                    ? 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
                    : 'linear-gradient(135deg, #FFF5EC 0%, #FFFFFF 100%)'
            }}>
                <GridBackground isDarkTheme={isDarkTheme} />

                {/* Content Container */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '120px 5%',
                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                    fontFamily: 'Inter, sans-serif',
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            marginBottom: '3rem',
                            color: isDarkTheme ? '#FFFFFF' : '#1A1A1A',
                            textAlign: 'center',
                            textShadow: isDarkTheme ? '0 0 40px rgba(255,155,80,0.3)' : 'none'
                        }}>
                            Latest <span style={{ color: '#FF9B50' }}>Insights</span>
                        </h1>

                        <div className="blog-grid">
                            {loading ? (
                                <p style={{ textAlign: 'center', width: '100%' }}>Loading posts...</p>
                            ) : posts.length > 0 ? (
                                posts.map((post) => (
                                    <div key={post._id || post.slug}
                                        style={{
                                            padding: '2.5rem',
                                            borderRadius: '24px',
                                            background: isDarkTheme
                                                ? 'rgba(30, 30, 30, 0.6)'
                                                : 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            border: isDarkTheme
                                                ? '1px solid rgba(255, 255, 255, 0.08)'
                                                : '1px solid rgba(0, 0, 0, 0.1)',
                                            boxShadow: isDarkTheme
                                                ? '0 10px 40px -10px rgba(0,0,0,0.5)'
                                                : '0 10px 40px -10px rgba(0,0,0,0.1)',
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '100%'
                                        }}
                                        onClick={() => navigate(`/blog/${post.slug}`)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                            e.currentTarget.style.borderColor = '#FF9B50';
                                            e.currentTarget.style.boxShadow = isDarkTheme
                                                ? '0 20px 60px -15px rgba(255, 155, 80, 0.15)'
                                                : '0 20px 60px -15px rgba(255, 155, 80, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.borderColor = isDarkTheme
                                                ? 'rgba(255, 255, 255, 0.08)'
                                                : 'rgba(0, 0, 0, 0.1)';
                                            e.currentTarget.style.boxShadow = isDarkTheme
                                                ? '0 10px 40px -10px rgba(0,0,0,0.5)'
                                                : '0 10px 40px -10px rgba(0,0,0,0.1)';
                                        }}
                                    >
                                        <div>
                                            {/* Featured Image */}
                                            {post.image && (
                                                <div style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    marginBottom: '1.5rem',
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                                }}>
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            transition: 'transform 0.5s ease'
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                    />
                                                </div>
                                            )}

                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '1.5rem',
                                                flexWrap: 'wrap',
                                                gap: '1rem'
                                            }}>
                                                {post.category && (
                                                    <span style={{
                                                        padding: '6px 14px',
                                                        backgroundImage: 'linear-gradient(135deg, #FF9B50 0%, #FF9B50 100%)',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 700,
                                                        letterSpacing: '0.5px',
                                                        boxShadow: '0 4px 10px rgba(255, 155, 80, 0.3)'
                                                    }}>
                                                        {post.category.toUpperCase()}
                                                    </span>
                                                )}
                                                <span style={{
                                                    opacity: 0.5,
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : post.publishDate}
                                                </span>
                                            </div>

                                            <h2 style={{
                                                fontSize: '1.75rem',
                                                margin: '0 0 1rem 0',
                                                lineHeight: 1.3,
                                                fontWeight: 800,
                                                background: isDarkTheme
                                                    ? 'linear-gradient(to right, #fff, #bbb)'
                                                    : 'linear-gradient(to right, #1A1A1A, #444)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                display: 'inline-block'
                                            }}>
                                                {post.title}
                                            </h2>

                                            <p style={{
                                                opacity: 0.8,
                                                marginBottom: '2rem',
                                                lineHeight: 1.6,
                                                fontSize: '1rem'
                                            }}>
                                                {post.excerpt
                                                    ? post.excerpt
                                                    : (post.content && Array.isArray(post.content)
                                                        ? post.content.find(b => b.type === 'paragraph')?.content?.substring(0, 120)
                                                        : 'Click to read more...')}
                                                ...
                                            </p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                                            <button style={{
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#FF9B50',
                                                padding: 0,
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                            >
                                                Read Article
                                                <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s' }}>→</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{
                                    gridColumn: '1 / -1',
                                    padding: '4rem',
                                    textAlign: 'center',
                                    background: isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                                    borderRadius: '20px',
                                    border: '1px dashed rgba(128,128,128,0.3)'
                                }}>
                                    <p style={{ opacity: 0.6, fontSize: '1.2rem' }}>No blog posts available at the moment.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .blog-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2.5rem;
                }
                @media (min-width: 768px) {
                    .blog-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .blog-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
