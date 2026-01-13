import React, { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import mockStorage from './services/mockStorage';

export default function Blog({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const response = await mockStorage.getBlogs();
            const visiblePosts = response.data
                .filter(post => post.isVisible !== false)
                .map(post => ({
                    ...post,
                    id: post._id,
                    date: post.publishDate || post.date,
                    authorName: post.author?.name || 'Melzo Team',
                    role: post.author?.role || 'Contributor'
                }));
            setPosts(visiblePosts);

            // Auto-open detailed post if one is "featured" or simply based on complexity? No, user clicks.
        } catch (error) {
            console.error('Failed to load blogs', error);
        }
    };

    const renderContent = (content) => {
        if (!content) return null;

        // Handle simple string content (fallback for old blogs)
        if (typeof content === 'string') {
            return <div className="blog-content-text" dangerouslySetInnerHTML={{ __html: content }} />;
        }

        // Handle Rich Content Array
        if (Array.isArray(content)) {
            return content.map((block, idx) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <h3 key={idx} style={{
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                marginTop: '3rem',
                                marginBottom: '1.5rem',
                                color: isDarkTheme ? '#fff' : '#111'
                            }}>
                                {block.content}
                            </h3>
                        );
                    case 'paragraph':
                        return (
                            <p key={idx} style={{
                                fontSize: '1.15rem',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem',
                                opacity: 0.9,
                                color: isDarkTheme ? '#eee' : '#333'
                            }}>
                                {block.content}
                            </p>
                        );
                    case 'quote':
                        return (
                            <blockquote key={idx} style={{
                                borderLeft: '4px solid #FF9B50',
                                margin: '2.5rem 0',
                                padding: '1.5rem 2rem',
                                fontSize: '1.5rem',
                                fontStyle: 'italic',
                                background: isDarkTheme ? 'rgba(255, 155, 80, 0.1)' : 'rgba(255, 155, 80, 0.05)',
                                borderRadius: '0 12px 12px 0',
                                color: isDarkTheme ? '#FF9B50' : '#444'
                            }}>
                                "{block.content}"
                            </blockquote>
                        );
                    case 'media':
                        const src = (block.content && typeof block.content === 'object') ? block.content.url : block.content;
                        const alt = (block.content && typeof block.content === 'object') ? block.content.alt : 'Blog Media';
                        return <div key={idx} style={{ margin: '2rem 0' }}>{renderMedia(src, true, alt)}</div>;
                    case 'list':
                        return (
                            <ul key={idx} style={{
                                margin: '1.5rem 0',
                                paddingLeft: '1.5rem',
                                listStyle: 'none'
                            }}>
                                {block.items.map((item, i) => (
                                    <li key={i} style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '1rem',
                                        lineHeight: 1.6,
                                        display: 'flex',
                                        gap: '12px'
                                    }}>
                                        <span style={{ color: '#FF9B50', fontWeight: 'bold' }}>•</span>
                                        <span style={{ color: isDarkTheme ? '#eee' : '#333' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    default:
                        return null;
                }
            });
        }
        return null;
    };

    const renderMedia = (source, isDetail = false, altText = "Blog Media") => {
        if (!source) return null;
        // Simple check for video extensions or data URI mime type
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
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                minHeight: '100vh',
                padding: '120px 5% 60px',
                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                fontFamily: 'Inter, sans-serif'
            }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '3rem', color: '#FF9B50' }}>Melzo Blog</h1>

                {selectedPost ? (
                    // Detailed View
                    <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
                        <button
                            onClick={() => setSelectedPost(null)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: isDarkTheme ? '#bbb' : '#666',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            ← Back to Articles
                        </button>

                        {renderMedia(selectedPost.image, true)}

                        <span style={{
                            color: '#FF9B50',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontSize: '0.9rem'
                        }}>
                            {selectedPost.category || 'Opinion'}
                        </span>

                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            marginTop: '1rem',
                            lineHeight: 1.1
                        }}>
                            {selectedPost.title}
                        </h1>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            margin: '2rem 0 3rem',
                            paddingBottom: '2rem',
                            borderBottom: isDarkTheme ? '1px solid #333' : '1px solid #eee'
                        }}>
                            <div>
                                <p style={{ fontWeight: 700, margin: 0 }}>{selectedPost.authorName}</p>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>{selectedPost.role} • {selectedPost.readTime ? `${selectedPost.readTime} min read` : selectedPost.date}</p>
                            </div>
                        </div>

                        <div className="blog-body">
                            {renderContent(selectedPost.content)}
                        </div>
                    </div>
                ) : (
                    // List View
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                        {posts.map((post) => (
                            <div key={post.id} style={{
                                padding: '0', // Removed padding to allow image full width
                                borderRadius: '24px',
                                background: isDarkTheme ? '#262626' : '#f9f9f9',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }}
                                onClick={() => setSelectedPost(post)}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {renderMedia(post.image, false)}
                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
                                        <span>{post.category || 'Article'}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 style={{ fontSize: '1.75rem', margin: '0 0 1rem', lineHeight: 1.3 }}>{post.title}</h2>
                                    <p style={{ opacity: 0.8, lineHeight: 1.6, flex: 1, marginBottom: '2rem' }}>{post.excerpt}</p>
                                    <div style={{
                                        color: '#FF9B50',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginTop: 'auto'
                                    }}>
                                        Read Article →
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
