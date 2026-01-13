import React, { useState, useEffect } from 'react';
import AppNav from './components/AppNav';
import mockStorage from './services/mockStorage';

export default function MelzoNews({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [selectedNews, setSelectedNews] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [showAll, setShowAll] = useState(false);

    // State for news data
    const [newsItems, setNewsItems] = useState([
        {
            id: 1,
            category: 'Times of India',
            date: 'January 10, 2026',
            title: 'VR chairs bring classrooms to life for SMC students',
            summary: 'The Surat Municipal Corporation (SMC) has introduced high-tech VR chairs to enhance learning experiences in municipal schools.',
            content: 'In a first-of-its-kind initiative, the Surat Municipal Corporation (SMC) has deployed Virtual Reality (VR) chairs in its schools. This move aims to modernize education and provide students with immersive learning opportunities. The 5D chairs allow students to experience educational content in a realistic, engaging manner, covering subjects from science to history. Officials state this will significantly improve retention and student interest.',
            image: '/images/toi-vr-chairs-smc.webp',
            language: 'English'
        },
        {
            id: 2,
            category: 'News18 Gujarati',
            date: 'December 12, 2025',
            title: 'Surat: First 5D Education Lab Launched',
            summary: 'News18 Gujarati covers the inauguration of the first 5D Education Lab in Surat, revolutionizing local education.',
            content: 'Surat witnesses a major leap in educational technology with the launch of its first 5D Education Lab. This facility, powered by Melzo, offers students a unique way to learn complex concepts. The report highlights the enthusiasm among students and teachers alike as they embrace this new era of digital learning.',
            image: '/images/news18-gujarat-5d-lab.webp',
            language: 'Gujarati'
        },
        {
            id: 3,
            category: 'Indian Express',
            date: 'November 05, 2025',
            title: 'I.G. Desai School Adopts VR Learning',
            summary: 'The Indian Express features I.G. Desai School\'s adoption of Melzo\'s VR solutions for their curriculum.',
            content: 'I.G. Desai School has become a pioneer in adopting Virtual Reality for school education. By integrating Melzo\'s VR modules, the school aims to provide a holistic learning environment. The principal emphasized that visual learning through VR helps students grasp difficult topics with ease.',
            image: '/images/indian-express-5d-lab.webp',
            language: 'English'
        },
        {
            id: 4,
            category: 'Divya Bhaskar',
            date: 'October 20, 2025',
            title: 'Virtual Reality: The Future of School Education',
            summary: 'Divya Bhaskar discusses how VR labs are becoming the new standard in Gujarati medium schools.',
            content: 'A detailed report on how Virtual Reality technology is transforming the educational landscape in Gujarat. The article features interviews with students who describe their experience as "magical" and "unforgettable". It also notes the cost-effectiveness of these digital labs compared to traditional physical labs.',
            image: '/images/divya-bhaskar-5d-lab.webp',
            language: 'Gujarati'
        },
        {
            id: 5,
            category: 'Gujarat Samachar',
            date: 'September 15, 2025',
            title: 'Melzo Anubhav: 5D Lab Success Story',
            summary: 'Coverage of the successful implementation of Melzo Anubhav 5D labs in multiple districts.',
            content: 'The Melzo Anubhav initiative has reached a milestone with successful implementations in Surat and surrounding districts. The 5D labs are not just about watching videos; they provide a sensory experience that aids memory retention. The article outlines future plans to expand this model to rural schools.',
            image: '/images/gujarati-newspaper-5d-lab.webp',
            language: 'Gujarati'
        },
        {
            id: 6,
            category: 'Dainik Bhaskar',
            date: 'August 10, 2025',
            title: 'Hindi Medium Schools Embrace VR Tech',
            summary: 'how Hindi medium schools are bridging the digital divide using VR technology.',
            content: 'Breaking language barriers, Melzo\'s localized content is now empowering Hindi medium schools. The report focuses on a school in Surat where students are learning geography and history through VR headsets, making education interactive and fun.',
            image: '/images/hindi-newspaper-5d-lab.webp',
            language: 'Hindi'
        },
        {
            id: 7,
            category: 'Sarvoday',
            date: 'July 22, 2025',
            title: 'Sarvoday School Inaugurates Hi-Tech VR Class',
            summary: 'Sarvoday School steps into the future with a new VR classroom facility.',
            content: 'Inauguration ceremony of the new VR classroom at Sarvoday School. The event was attended by local dignitaries who praised the school management for investing in future-ready technology. The VR setup includes 5D chairs and a library of educational content aligned with the state board curriculum.',
            image: '/images/sarvoday-5d-lab.webp',
            language: 'Gujarati'
        },
        {
            id: 8,
            category: 'Rajasthan Patrika',
            date: 'June 05, 2025',
            title: 'Students Explore Science in 5D',
            summary: 'A look at how students are exploring science concepts using 5D technology.',
            content: 'Science class has never been this exciting. Students are now diving into the human bloodstream and flying into space, all while sitting in their classroom. This Hindi report captures the wonder and excitement of young learners experiencing 5D education for the first time.',
            image: '/images/hindi-surat-5d-lab-students.webp',
            language: 'Hindi'
        },
        {
            id: 9,
            category: 'Tech Media',
            date: 'May 18, 2025',
            title: 'Hardik Desai on the Future of EdTech',
            summary: 'Founder Hardik Desai discusses the vision behind Melzo and the role of immersive tech.',
            content: 'In an exclusive interview, Hardik Desai, the brain behind Melzo, shares his vision. "We want to structure experience over memorization," he says. The article explores the technical challenges and the triumphs of building an indigenous VR platform for India.',
            image: '/images/hardik-software-gujarati.webp',
            language: 'Gujarati'
        },
        {
            id: 10,
            category: 'News18',
            date: 'April 30, 2025',
            title: 'Surat 5D Lab: A Model for the Nation',
            summary: 'News18 reports on how Surat\'s 5D lab model is being replicated across the country.',
            content: 'What started in Surat is now a model for schools nationwide. The 5D lab setup, which combines hardware and software for an immersive experience, is drawing attention from educational boards in other states. The report details the scalability and impact of this innovation.',
            image: '/images/news18-surat-5d-lab-updated.webp',
            language: 'English'
        }
    ]);

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
                            <div key={item.id} style={{
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
