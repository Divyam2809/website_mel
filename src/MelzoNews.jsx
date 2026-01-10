import React, { useState } from 'react';
import AppNav from './components/AppNav';

export default function MelzoNews({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [selectedNews, setSelectedNews] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const newsItems = [
        {
            id: 14,
            category: 'Times of India',
            date: 'January 10, 2026',
            title: 'VR chairs bring classrooms to life for SMC students',
            summary: 'The Surat Municipal Corporation (SMC) has introduced high-tech VR chairs and virtual reality headsets in its primary schools to provide students with an immersive, multi-sensory educational experience.',
            image: '/images/toi-vr-chairs-smc.png',
            language: 'English',
            content: `The Surat Municipal Corporation (SMC) has introduced high-tech VR chairs and virtual reality headsets in its primary schools to provide students with an immersive, multi-sensory educational experience.

This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.`
        },
        {
            id: 15,
            category: 'Times of India',
            date: 'January 10, 2026',
            title: 'VR chairs bring classrooms to life for SMC students',
            summary: 'In a bid to enhance learning for underprivileged students, Surat Municipal Corporation (SMC) has introduced multidimensional experience chairs in municipal schools, offering students an immersive education through virtual reality.',
            image: '/images/toi-vr-chairs-smc-full.png',
            language: 'English',
            content: `In a bid to enhance learning for underprivileged students, Surat Municipal Corporation (SMC) has introduced multidimensional experience chairs in municipal schools, offering students an immersive education through virtual reality.

This article highlights how the Melzo Experience 7D Lab, equipped with VR headsets and motion chairs that blow air and spray mist, is transforming education by allowing students to virtually visit space or historical sites and conduct interactive experiments.`
        },
        {
            id: 'new-1',
            category: 'Divya Bhaskar',
            date: 'January 2025',
            title: 'IIT pass Gujarati created 5D lab for children',
            summary: 'Students can see the outside world from a small room with 5D virtual-sensory chair; Education with VR, AR, AI',
            image: '/images/divya-bhaskar-5d-lab.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 2,
            category: 'Indian Express',
            date: 'January 12, 2025',
            title: 'In a first, 5D laboratory in Surat school to help students \'hear, visualise\' curriculum',
            summary: 'On Friday, the Sarvoday trust-run school at Bhatar launched the Melzo Anubhav 5D lab, which, the school authorities claimed, is the first initiative of its kind for students.',
            image: '/images/indian-express-5d-lab.png',
            language: 'English',
            content: `On Friday, the Sarvoday trust-run school at Bhatar launched the Melzo Anubhav 5D lab, which, the school authorities claimed, is the first initiative of its kind for students.

This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.`
        },
        {
            id: 3,
            category: 'News18 Gujarat',
            date: 'January 14, 2025',
            title: 'Surat student\'s turn! India\'s first 5D lab launched in this school',
            summary: 'IG Desai School in Surat has launched India\'s first 5D lab. This lab will help school students understand science and social science subjects easily and experience subjects in real life with the help of technology.',
            image: '/images/news18-surat-5d-lab-updated.png',
            language: 'Gujarati',
            content: `IG Desai School in Surat has launched India's first 5D lab. This lab will help school students understand science and social science subjects easily and experience subjects in real life with the help of technology.

This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 4,
            category: 'Gujarati Newspaper',
            date: 'January 2025',
            title: 'Hardik created software for free education of Gujarati medium students',
            summary: 'Software benefiting 2.80 lakh students; ranked first among 1200 startups in state government\'s startup scheme',
            image: '/images/melzo-partners-universities.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 5,
            category: 'Gujarati Newspaper',
            date: 'January 2025',
            title: 'Country\'s first 5D lab, students will do virtual experiments',
            summary: 'Innovation: Google\'s virtual reality and all technical-non-technical subjects at Surat\'s student media center in 5D',
            image: '/images/gujarati-newspaper-5d-lab.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 6,
            category: 'Gujarati Newspaper',
            date: 'January 10, 2025',
            title: 'Sarvoday Charitable Trust\'s IG Desai School in Surat Bhatar launches 5D technology for real education',
            summary: 'Modern technology to provide education to poor, middle-class students; parents also happy with the effort',
            image: '/images/sarvoday-ig-desai-5d.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 7,
            category: 'Hindi Newspaper',
            date: 'January 2025',
            title: 'Students in Surat learning complex subjects from India\'s first 5D lab',
            summary: 'The city\'s IT youth developed this with indigenous technology. Students can see biology, physics, chemistry and other subjects in 3D.',
            image: '/images/hindi-newspaper-5d-lab.png',
            language: 'Hindi',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Hindi. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 8,
            category: 'Gujarati Newspaper',
            date: 'January 2025',
            title: 'Melzo Anubhav 5D Lab launched at IG Desai School in Bhatar',
            summary: 'New initiative in education: Country\'s first 5D lab launched to make students\' educational experience more interactive and effective',
            image: '/images/melzo-anubhav-5d-lab.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 9,
            category: 'Gujarati Newspaper',
            date: 'January 13, 2025',
            title: 'Launch of India\'s first 5D laboratory for students at IG Desai School',
            summary: 'Developed by Surat youth at a cost equivalent to a laptop; lab costs 50 lakhs to set up in Disney World, Apple Center, and universities',
            image: '/images/ig-desai-5d-laboratory.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 10,
            category: 'Gujarati Newspaper',
            date: 'January 2025',
            title: '5D Lab launched to increase student\'s memory power',
            summary: 'This modern lab is a combination of virtual reality and sensory technology that provides a new way of teaching and learning',
            image: '/images/5d-lab-memory-power.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 11,
            category: 'Gujarati Newspaper',
            date: 'January 12, 2025',
            title: 'India\'s first 5D lab launched in Surat school',
            summary: 'Students at IG Desai School will now be able to learn and experience various subjects of science and social studies; 80% of students come from economically weaker backgrounds',
            image: '/images/surat-first-5d-lab.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 12,
            category: 'Gujarati Newspaper',
            date: 'January 10, 2025',
            title: 'India\'s First 5D Lab Revolutionizing Complex Educational Topics',
            summary: 'The first 5D lab of Melzo Anubhav is offering education to the world. This lab at IG Desai School is transforming how students learn complex subjects through immersive experiences.',
            image: '/images/5d-lab-revolutionizing-education.png',
            language: 'Gujarati',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        },
        {
            id: 13,
            category: 'Hindi Newspaper',
            date: 'January 2025',
            title: 'Students in Surat Learning Complex Subjects from India\'s First 5D Lab',
            summary: 'Developed by a local IT youth using indigenous technology, this 5D lab is helping students understand difficult subjects through immersive experiences and virtual reality.',
            image: '/images/hindi-surat-5d-lab-students.png',
            language: 'Hindi',
            content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.

Translation Note
This article is in Hindi. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`
        }
    ];

    // Filter and search logic
    const filteredNews = newsItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLanguage = selectedLanguage === 'All' || item.language === selectedLanguage;
        return matchesSearch && matchesLanguage;
    });

    // Show only first 3 if showAll is false
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
                                border: '1px solid rgba(0,0,0,0.05)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
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
