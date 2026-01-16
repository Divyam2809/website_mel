import React, { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import newsService from './services/newsService';

export default function MelzoNews({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [selectedNews, setSelectedNews] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [showAll, setShowAll] = useState(false);

    // State for news data
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await newsService.getAll();
                // Ensure IDs are consistent
                const normalizedNews = (response.data || []).map(item => ({
                    ...item,
                    _id: item._id || item.id
                }));
                const visibleNews = normalizedNews.filter(item => item.isVisible);
                setNewsItems(visibleNews);
            } catch (error) {
                console.error("Failed to load news", error);
            }
        };

        fetchNews();
    }, []);

    // ... Keep existing filter logic ...
    const filteredNews = newsItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.summary && item.summary.toLowerCase().includes(searchTerm.toLowerCase()));

        // For Sanity items which don't have language field yet, we might want to show them on "All" or default to English
        const matchesLanguage = selectedLanguage === 'All' ||
            (item.language === selectedLanguage) ||
            (!item.language && selectedLanguage === 'English');

        return matchesSearch && matchesLanguage;
    });

    const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 3);

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="melzonews"
            />
            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                minHeight: '100vh',
                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                fontFamily: 'Inter, sans-serif',
                transition: 'background-color 0.3s ease',
                position: 'relative'
            }}>
                {/* Header Section */}
                <section style={{
                    padding: '120px 5% 4rem',
                    textAlign: 'center',
                    background: isDarkTheme
                        ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}>
                        Melzo <span style={{ color: '#FF9B50' }}>Newsroom</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Stay updated with the latest announcements, product launches, and stories from the world of immersive technology.
                    </p>
                </section>

                {/* Search and Filter Section */}
                <section style={{ padding: '0 5% 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {/* Search Bar */}
                        <div style={{ marginBottom: '2rem' }}>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1.5rem',
                                    fontSize: '1rem',
                                    borderRadius: '12px',
                                    border: isDarkTheme ? '1px solid #444' : '1px solid #ddd',
                                    background: isDarkTheme ? '#262626' : '#ffffff',
                                    color: isDarkTheme ? '#fff' : '#2D2D2D',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#FF9B50'}
                                onBlur={(e) => e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd'}
                            />
                        </div>

                        {/* Language Filter Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            {['All', 'Gujarati', 'Hindi', 'English'].map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => setSelectedLanguage(lang)}
                                    style={{
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: selectedLanguage === lang ? '#FF9B50' : (isDarkTheme ? '#262626' : '#f5f5f5'),
                                        color: selectedLanguage === lang ? '#fff' : (isDarkTheme ? '#fff' : '#2D2D2D'),
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedLanguage !== lang) {
                                            e.target.style.background = isDarkTheme ? '#333' : '#e8e8e8';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedLanguage !== lang) {
                                            e.target.style.background = isDarkTheme ? '#262626' : '#f5f5f5';
                                        }
                                    }}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section style={{ padding: '0 5% 6rem' }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {displayedNews.map((item) => (
                            <div key={item._id || item.id} style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                borderRadius: '16px',
                                border: isDarkTheme ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.12)',
                                boxShadow: isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onClick={() => setSelectedNews(item)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = isDarkTheme ? '0 12px 30px rgba(0,0,0,0.5)' : '0 12px 30px rgba(0,0,0,0.15)';
                                    e.currentTarget.style.borderColor = '#FF9B50';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)';
                                }}
                            >
                                {/* Placeholder for Image if we had real ones, mostly just gradient for now */}
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover',
                                            borderBottom: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        height: '200px',
                                        background: isDarkTheme
                                            ? 'linear-gradient(135deg, #333 0%, #222 100%)'
                                            : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FF9B50',
                                        fontSize: '3rem'
                                    }}>
                                        📰
                                    </div>
                                )}

                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1rem',
                                        fontSize: '0.85rem'
                                    }}>
                                        <span style={{
                                            background: 'rgba(255, 155, 80, 0.15)',
                                            color: '#FF9B50',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontWeight: 600
                                        }}>
                                            {item.category}
                                        </span>
                                        <span style={{ opacity: 0.6 }}>{item.date}</span>
                                    </div>

                                    <h2 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        marginBottom: '1rem',
                                        lineHeight: 1.4
                                    }}>
                                        {item.title}
                                    </h2>

                                    <p style={{
                                        fontSize: '1rem',
                                        opacity: 0.7,
                                        lineHeight: 1.6,
                                        marginBottom: '1.5rem',
                                        flex: 1
                                    }}>
                                        {item.summary}
                                    </p>

                                    <button style={{
                                        background: 'transparent',
                                        color: '#FF9B50',
                                        border: '1px solid #FF9B50',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        alignSelf: 'flex-start',
                                        transition: 'all 0.2s ease'
                                    }}
                                        onClick={() => setSelectedNews(item)}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#FF9B50';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent';
                                            e.target.style.color = '#FF9B50';
                                        }}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More/Less Button */}
                    {filteredNews.length > 3 && (
                        <div style={{
                            textAlign: 'center',
                            marginTop: '3rem'
                        }}>
                            <button
                                onClick={() => setShowAll(!showAll)}
                                style={{
                                    background: 'transparent',
                                    color: '#FF9B50',
                                    border: '2px solid #FF9B50',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#FF9B50';
                                    e.target.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#FF9B50';
                                }}
                            >
                                {showAll ? 'Show Less Articles' : 'Show More Articles'} {showAll ? '↑' : '↓'}
                            </button>
                        </div>
                    )}
                </section>

                {/* News Detail Modal */}
                {selectedNews && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backdropFilter: 'blur(5px)'
                    }} onClick={() => setSelectedNews(null)}>
                        <div style={{
                            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                            maxWidth: '800px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            borderRadius: '24px',
                            padding: '40px',
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }} onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedNews(null)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: isDarkTheme ? '#fff' : '#333'
                                }}
                            >
                                ✕
                            </button>

                            <span style={{
                                color: '#FF9B50',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                letterSpacing: '1px'
                            }}>
                                {selectedNews.category}
                            </span>

                            <h2 style={{
                                fontSize: '2rem',
                                margin: '1rem 0',
                                lineHeight: 1.2
                            }}>{selectedNews.title}</h2>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '2rem',
                                opacity: 0.7
                            }}>
                                <span>📅 {selectedNews.date}</span>
                            </div>

                            {selectedNews.image && (
                                <img
                                    src={selectedNews.image}
                                    alt={selectedNews.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '12px',
                                        marginBottom: '2rem',
                                        maxHeight: selectedNews.category.includes('Newspaper') ? '300px' : '500px',
                                        objectFit: 'contain',
                                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#f5f5f5',
                                        padding: '1rem'
                                    }}
                                />
                            )}

                            <div style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                whiteSpace: 'pre-line'
                            }}>
                                {selectedNews.content || selectedNews.summary}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
