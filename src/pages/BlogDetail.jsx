import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppNav from '../components/AppNav';
import { blogData } from '../data/blogData';
import ModernGradientBackground from '../components/ModernGradientBackground';

export default function BlogDetail({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Instant load from static data
        if (blogData[slug]) {
            setPost(blogData[slug]);
        }
        setLoading(false);
    }, [slug]);

    if (!post && !loading) {
        return (
            <>
                <AppNav
                    onNavigate={onNavigate}
                    isDarkTheme={isDarkTheme}
                    onToggleTheme={onToggleTheme}
                    onBookDemo={onBookDemo}
                    currentPage="blog"
                />
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    <h1>Post Not Found</h1>
                    <button
                        onClick={() => onNavigate('blog')}
                        style={{
                            marginTop: '1rem',
                            padding: '10px 20px',
                            background: '#FF9B50',
                            border: 'none',
                            color: 'white',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Back to Blog
                    </button>
                </div>
            </>
        );
    }

    if (loading) {
        return (
            <div style={{ height: '100vh', background: isDarkTheme ? '#1A1A1A' : '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Loading...
            </div>
        )
    }

    // Determine data source format
    const isSanity = !!post.body;

    // Normalize props
    const title = post.title;
    const authorName = post.name || (post.author && post.author.name) || 'Scene9 Editorial';
    const authorRole = post.author && post.author.role ? post.author.role : 'Contributor';
    const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : post.publishDate;
    const readTime = post.readTime || 5;
    const category = Array.isArray(post.categories) ? post.categories[0] : (post.category || 'Opinion');

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
            <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
                <ModernGradientBackground isDarkTheme={isDarkTheme} />

                {/* Content Container */}
                <article style={{
                    position: 'relative',
                    zIndex: 1,
                    color: isDarkTheme ? '#EAEAEA' : '#2D2D2D',
                    fontFamily: 'Inter, sans-serif',
                    minHeight: '100vh',
                    paddingTop: '120px',
                    paddingBottom: '80px'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '40px',
                    }}>
                        {/* Header */}
                        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '6px 16px',
                                backgroundColor: 'rgba(255, 155, 80, 0.1)',
                                color: '#FF9B50',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '1.5rem'
                            }}>
                                {typeof category === 'string' ? category : 'Blog'}
                            </span>

                            <h1 style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontWeight: 800,
                                lineHeight: 1.2,
                                marginBottom: '2rem',
                                color: isDarkTheme ? '#FFFFFF' : '#1A1A1A'
                            }}>
                                {title}
                            </h1>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                flexWrap: 'wrap',
                                color: isDarkTheme ? '#AAAAAA' : '#666666',
                                fontSize: '0.95rem'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontWeight: 600, color: isDarkTheme ? '#FFFFFF' : '#000' }}>{authorName}</span>
                                    {!isSanity && <span>|</span>}
                                    {!isSanity && <span>{authorRole}</span>}
                                </div>
                                <div>
                                    {date} • {readTime} min read
                                </div>
                            </div>
                        </header>

                        {/* Content */}
                        <div className="blog-content" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                            {isSanity ? (
                                <PortableText
                                    value={post.body}
                                    components={PortableTextComponents(isDarkTheme)}
                                />
                            ) : (
                                // Fallback Static Renderer
                                post.content?.map((block, index) => {
                                    switch (block.type) {
                                        case 'paragraph':
                                            return (
                                                <p key={index} style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                                    {block.content}
                                                </p>
                                            );
                                        case 'heading':
                                            return (
                                                <h2 key={index} style={{
                                                    fontSize: '2rem',
                                                    fontWeight: 700,
                                                    marginTop: '3.5rem',
                                                    marginBottom: '1.5rem',
                                                    color: isDarkTheme ? '#FFFFFF' : '#1A1A1A',
                                                    borderLeft: '4px solid #FF9B50',
                                                    paddingLeft: '1rem'
                                                }}>
                                                    {block.content}
                                                </h2>
                                            );
                                        case 'quote':
                                            return (
                                                <blockquote key={index} style={{
                                                    margin: '3rem 0',
                                                    padding: '2rem',
                                                    borderLeft: '4px solid #FF9B50',
                                                    backgroundColor: isDarkTheme ? 'rgba(255, 155, 80, 0.05)' : 'rgba(255, 155, 80, 0.05)',
                                                    borderRadius: '0 12px 12px 0',
                                                    fontSize: '1.4rem',
                                                    fontStyle: 'italic',
                                                    fontWeight: 500,
                                                    color: isDarkTheme ? '#FFFFFF' : '#1A1A1A'
                                                }}>
                                                    "{block.content}"
                                                </blockquote>
                                            );
                                        case 'list':
                                            return (
                                                <ul key={index} style={{
                                                    marginBottom: '2rem',
                                                    paddingLeft: '1.5rem',
                                                    listStyle: 'none'
                                                }}>
                                                    {block.items.map((item, i) => (
                                                        <li key={i} style={{
                                                            marginBottom: '1rem',
                                                            position: 'relative',
                                                            paddingLeft: '2rem'
                                                        }}>
                                                            <span style={{
                                                                position: 'absolute',
                                                                left: 0,
                                                                top: '10px',
                                                                width: '8px',
                                                                height: '8px',
                                                                backgroundColor: '#FF9B50',
                                                                borderRadius: '50%'
                                                            }}></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        default:
                                            return null;
                                    }
                                })
                            )}
                        </div>

                        {/* Footer / Share / Next */}
                        <div style={{
                            marginTop: '5rem',
                            paddingTop: '3rem',
                            borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                            textAlign: 'center'
                        }}>
                            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', opacity: 0.7 }}>
                                Enjoyed this read? Share it with your network.
                            </p>
                            <button
                                onClick={() => onNavigate('blog')}
                                style={{
                                    padding: '12px 30px',
                                    background: 'transparent',
                                    border: '2px solid #FF9B50',
                                    color: isDarkTheme ? '#FFFFFF' : '#1A1A1A',
                                    borderRadius: '30px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#FF9B50';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = isDarkTheme ? '#FFFFFF' : '#1A1A1A';
                                }}
                            >
                                Back to All Articles
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
