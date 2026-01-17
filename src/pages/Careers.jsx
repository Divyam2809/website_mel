import React, { useRef, useState, useEffect } from 'react';
import AppNav from '../components/AppNav';
import JobApplicationModal from '../components/JobApplicationModal';
import EmployeeTestimonials from '../components/EmployeeTestimonials';
import GridBackground from '../components/GridBackground';
import LoadingSpinner from '../components/LoadingSpinner';
import mockStorage from '../services/mockStorage';
import jobService from '../services/jobService';

// Internal JobCard Component for Hover Logic
const JobCard = ({ job, isDarkTheme, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(job)}
            style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#F2F0EB', // Match the beige-ish look from image
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
                height: '100%' // Full height for grid
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = isDarkTheme ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {/* Header Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        margin: 0,
                        marginBottom: '0.5rem',
                        color: isDarkTheme ? '#fff' : '#000'
                    }}>
                        {job.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isDarkTheme ? '#aaa' : '#666', fontSize: '0.9rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{job.location || 'Surat, India'}</span>
                    </div>
                </div>
                <button style={{
                    backgroundColor: isDarkTheme ? '#fff' : '#000',
                    color: isDarkTheme ? '#000' : '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.6rem 1.2rem',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                }}>
                    Apply now
                </button>
            </div>

            {/* List Content (Always Visible) */}
            <ul style={{
                margin: 0,
                paddingLeft: '1.2rem',
                color: isDarkTheme ? '#ccc' : '#444',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                {(Array.isArray(job.mission) ? job.mission : [])
                    .flatMap(item => {
                        if (typeof item === 'string') return [item];
                        if (item.type === 'list' && Array.isArray(item.items)) return item.items;
                        return [item.content];
                    })
                    .filter(Boolean)
                    .slice(0, 4) // Show top 4 items
                    .map((text, idx) => (
                        <li key={idx}>{text}</li>
                    ))}
            </ul>
        </div>
    );
};

const gradientText = {
    background: 'linear-gradient(90deg, #FF9B50 0%, #FF6B00 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};



export default function Careers({ onNavigate, isDarkTheme, onToggleTheme, onBookDemo, onContactUs }) {
    const jobsRef = useRef(null);
    const containerRef = useRef(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]); // Gallery state
    const [searchTerm, setSearchTerm] = useState(''); // New search state
    const [showContainerScrollTop, setShowContainerScrollTop] = useState(false);
    const [content, setContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filter jobs based on search term
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(job.tags) ? job.tags.join(' ') : job.tags).toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await jobService.getAllJobs();
                if (response.data) {
                    // Map backend fields to frontend expectations
                    const formattedJobs = response.data
                        .filter(job => job.status === 'Published' || job.isVisible)
                        .map(job => ({
                            ...job,
                            purpose: job.description,
                            mission: job.responsibilities ? job.responsibilities.split('\n') : [],
                            requirements: job.requirements ? job.requirements.split('\n') : [],
                            tags: job.type ? [job.type, job.location, job.department].filter(Boolean) : []
                        }));
                    setJobs(formattedJobs);
                }
            } catch (error) {
                console.error("Failed to fetch jobs", error);
            }
        };

        // Fetch LIVE data immediately on page load
        fetch('/api/page-content/careers_live')
            .then(async res => {
                if (!res.ok) {
                    const errorText = await res.text();
                    console.error(`[Careers] Live data fetch failed: ${res.status} ${res.statusText}`, errorText);
                    throw new Error('Failed to fetch live data');
                }
                return res.json();
            })
            .then(data => {
                if (data && Object.keys(data.hero || {}).length > 0) {
                    setContent(data);
                }
            })
            .catch(err => console.error('[Careers] Error fetching live data:', err))
            .finally(() => setIsLoading(false));

        // Fetch Gallery Data
        mockStorage.getCareersGallery().then(res => {
            if (res.data) {
                // Sort by sort_order if available
                const sorted = res.data
                    .filter(item => item.status === 'Published' || item.isVisible)
                    .sort((a, b) => (a.sort_order || 99) - (b.sort_order || 99));
                setGalleryItems(sorted);
            }
        });

        fetchJobs();
    }, []);

    // Prevent main page scroll when modal is open
    useEffect(() => {
        if (selectedJob) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [selectedJob]);

    const handleContainerScroll = () => {
        if (containerRef.current) {
            setShowContainerScrollTop(containerRef.current.scrollTop > 100);
        }
    };

    const scrollToContainerTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToJobs = () => {
        if (jobsRef.current) {
            jobsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (isLoading) {
        return (
            <>
                <AppNav
                    onNavigate={onNavigate}
                    isDarkTheme={isDarkTheme}
                    onToggleTheme={onToggleTheme}
                    onBookDemo={onBookDemo}
                    currentPage="careers"
                />
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDarkTheme ? '#0A0A0A' : '#fff'
                }}>
                    <LoadingSpinner />
                </div>
            </>
        );
    }

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="careers"
            />

            {/* Modal */}
            <JobApplicationModal
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                isDarkTheme={isDarkTheme}
            />

            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                fontFamily: 'Inter, sans-serif',
                overflowX: 'hidden'
            }}>

                {/* --- Hero Section --- */}
                <section style={{
                    position: 'relative',
                    padding: '10rem 5% 5rem',
                    overflow: 'hidden',
                    textAlign: 'center'
                }}>


                    {/* Animated Gradient Blob */}
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255, 155, 80, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0,
                        animation: 'pulse 5s infinite ease-in-out'
                    }} />

                    {/* Grid Overlay */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                        <GridBackground isDarkTheme={isDarkTheme} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: 900,
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            letterSpacing: '-2px'
                        }}>
                            {content.hero.title}
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                            lineHeight: '1.6',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem',
                            opacity: 0.8
                        }}>
                            {content.hero.subtitle}
                        </p>

                        <button
                            onClick={scrollToJobs}
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                background: '#FF9B50',
                                color: '#fff',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 15px rgba(255, 155, 80, 0.4)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            {content.hero.button || 'View Open Positions'}
                        </button>
                    </div>
                </section>



                {/* --- Values Grid --- */}
                <section style={{ padding: '8rem 5%' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{content.values.title}</h2>
                            <p style={{ opacity: 0.7, fontSize: '1.2rem' }}>{content.values.subtitle}</p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '2rem'
                        }}>
                            {(content.values.items || []).map((value, i) => (
                                <div key={i} style={{
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.03)' : '#f9f9f9',
                                    border: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    height: '100%'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.05)' : '#fff';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.03)' : '#f9f9f9';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 900,
                                        marginBottom: '1rem',
                                        lineHeight: 1,
                                        ...gradientText,
                                        fontFamily: 'monospace'
                                    }}>
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.8rem' }}>{value.title}</h3>
                                        <p style={{ opacity: 0.7, lineHeight: '1.6', fontSize: '0.95rem' }}>{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Perks Section --- */}
                <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>{content.perks.title}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {(content.perks.items || []).map((perk, i) => (
                                <div key={i} style={{
                                    textAlign: 'left',
                                    padding: '2rem',
                                    borderLeft: '4px solid #FF9B50',
                                    backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.02)' : '#fff',
                                    borderRadius: '0 16px 16px 0',
                                    boxShadow: isDarkTheme ? 'none' : '0 4px 15px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                        e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.05)' : '#fff';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(255,255,255,0.02)' : '#fff';
                                        e.currentTarget.style.boxShadow = isDarkTheme ? 'none' : '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>{perk.title}</h3>
                                    <p style={{ opacity: 0.7 }}>{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Employee Testimonials --- */}
                <EmployeeTestimonials isDarkTheme={isDarkTheme} />

                {/* --- Photo Gallery (Life at Melzo) --- */}
                {galleryItems.length > 0 && (
                    <section style={{ padding: '8rem 5%', textAlign: 'center' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div style={{ marginBottom: '4rem' }}>
                                <h2 style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    marginBottom: '1rem',
                                    color: isDarkTheme ? '#fff' : '#2D2D2D'
                                }}>
                                    Life at Melzo: A Glimpse Inside
                                </h2>
                                <p style={{
                                    fontSize: '1.2rem',
                                    opacity: 0.7,
                                    maxWidth: '700px',
                                    margin: '0 auto'
                                }}>
                                    Where innovation meets culture. See what it's like to be part of our journey.
                                </p>
                            </div>

                            <div className="bento-grid">
                                {galleryItems.map((item, index) => {
                                    // Simple logic for Bento effect:
                                    // Make the 1st, 6th, 11th items span 2 rows and 2 cols
                                    // Make the 4th, 9th items span 2 columns
                                    // Adjust widely for variation
                                    const isBigSquare = (index % 10 === 0);
                                    const isWide = (index % 10 === 5 || index % 10 === 9);

                                    return (
                                        <div key={index}
                                            className="bento-item"
                                            style={{
                                                gridColumn: isBigSquare ? 'span 2' : (isWide ? 'span 2' : 'span 1'),
                                                gridRow: isBigSquare ? 'span 2' : 'span 1',
                                                position: 'relative',
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                height: '100%',
                                                minHeight: '250px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                transition: 'transform 0.5s ease',
                                                filter: isDarkTheme ? 'brightness(0.9)' : 'brightness(1)'
                                            }}
                                                className="bento-bg"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="bento-overlay" style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                padding: '1.5rem',
                                                textAlign: 'left'
                                            }}>
                                                <div>
                                                    <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h3>
                                                    {item.caption && <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{item.caption}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}


                {/* --- Open Positions --- */}
                <section ref={jobsRef} style={{
                    padding: '8rem 5% 4rem',
                    position: 'relative',
                    backgroundColor: isDarkTheme ? '#0A0A0A' : '#ffffff',
                    overflow: 'hidden',
                    isolation: 'isolate'
                }}>
                    {/* --- Dynamic Hexagon Background --- */}
                    <div className="hex-bg-container">
                        <div className="hex-grid" />
                        <div className="hex-gradient-overlay" />
                        <div className="hex-shimmer" />

                        {/* Floating Dynamic Hexagons */}
                        <div className="floating-hex-container">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className={`float-hex hex-${i}`} />
                            ))}
                        </div>
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '3.5rem',
                                fontWeight: 900,
                                marginBottom: '1rem',
                                background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-1px'
                            }}>
                                Current Openings
                            </h2>
                            <p style={{ opacity: 0.7, fontSize: '1.2rem' }}>Shape the future of immersive technology with us.</p>
                        </div>

                        {/* Search Bar */}
                        <div style={{
                            marginBottom: '3rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <input
                                type="text"
                                placeholder="Search roles, tags, or departments..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '50px',
                                    border: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                    background: isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(10px)',
                                    fontSize: '1rem',
                                    color: isDarkTheme ? '#fff' : '#333',
                                    outline: 'none',
                                    boxShadow: isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => {
                                    e.target.style.transform = 'scale(1.02)';
                                    e.target.style.borderColor = '#FF9B50';
                                    e.target.style.boxShadow = '0 8px 30px rgba(255, 155, 80, 0.2)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.borderColor = isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                                    e.target.style.boxShadow = isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)';
                                }}
                            />
                        </div>

                        {filteredJobs.length > 0 ? (
                            <div
                                className="job-listings-container"
                                ref={containerRef}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                    gap: '1.5rem',
                                    padding: '10px' // For shadow clearance
                                }}>
                                {filteredJobs.map((job, i) => (
                                    <JobCard
                                        key={i}
                                        job={job}
                                        isDarkTheme={isDarkTheme}
                                        onSelect={setSelectedJob}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '4rem 2rem',
                                borderRadius: '24px',
                                backgroundColor: isDarkTheme ? 'rgba(26, 26, 26, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(12px)',
                                border: isDarkTheme ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                                color: isDarkTheme ? '#ffffff' : '#111111'
                            }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                    {jobs.length === 0 ? "No Job Openings" : "No Matches Found"}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: isDarkTheme ? '#e2e2e2' : '#333333' }}>
                                    {jobs.length === 0
                                        ? "We don't have any open positions right now, but check back soon!"
                                        : `We couldn't find any roles matching "${searchTerm}". Try different keywords.`
                                    }
                                </p>
                            </div>
                        )}


                        {/* Spontaneous Application */}
                        <div style={{
                            marginTop: '4rem',
                            padding: '3rem',
                            borderRadius: '24px',
                            background: `linear-gradient(135deg, ${isDarkTheme ? '#2a1a10' : '#FFF3E0'} 0%, ${isDarkTheme ? '#1A1A1A' : '#ffffff'} 100%)`,
                            textAlign: 'center',
                            border: '1px solid rgba(255, 155, 80, 0.2)'
                        }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>Don't see your role?</h3>
                            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>We are always looking for exceptional talent. If you think you can make an impact, talk to us.</p>
                            <button
                                onClick={onContactUs}
                                style={{
                                    padding: '1rem 3rem',
                                    borderRadius: '50px',
                                    backgroundColor: '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>


                </section>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                    }

                    .modern-bg-orb {
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(80px);
                        z-index: -1;
                        pointer-events: none;
                        animation: float 20s infinite ease-in-out;
                        opacity: ${isDarkTheme ? '0.2' : '0.4'};
                    }

                    .orb-1 {
                        top: -100px;
                        right: -100px;
                        width: 600px;
                        height: 600px;
                        background: radial-gradient(circle, #FF9B50 0%, transparent 70%);
                        animation-delay: 0s;
                    }

                    .orb-2 {
                        bottom: -100px;
                        left: -100px;
                        width: 500px;
                        height: 500px;
                        background: radial-gradient(circle, #CC5500 0%, transparent 70%);
                        animation-delay: -10s;
                    }

                    /* --- Bento Grid Styles --- */
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-auto-rows: 250px;
                        gap: 1.5rem;
                    }

                    @media (max-width: 1024px) {
                        .bento-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (max-width: 600px) {
                        .bento-grid {
                            display: flex;
                            flex-direction: column;
                            gap: 1.5rem;
                        }
                        .bento-item {
                            height: 300px !important;
                        }
                    }

                    .bento-item:hover .bento-bg {
                        transform: scale(1.1);
                    }
                    .bento-item:hover .bento-overlay {
                        opacity: 1 !important;
                    }

                    /* --- Hexagon Background Styles --- */
                    .hex-bg-container {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        z-index: -1;
                        pointer-events: none;
                        overflow: hidden;
                    }

                    /* 1. The Base Grid Pattern (SVG data URI for Hexagon) */
                    .hex-grid {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        /* A seamless hexagon pattern */
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23FF9B50' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v2.2l6-3.46v-2.2L3 17.9zM1 31.75V16.75l13-7.5 13 7.5v15l-13 7.5L1 31.75zM15 14.44l-6 3.46v2.2l6-3.46v-2.2zM27 31.75l-6 3.46v-2.2l6-3.46v2.2zM15 44.56v-2.2l6-3.46v2.2l-6 3.46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                        background-size: 56px 98px; /* Scale up the pattern */
                        opacity: ${isDarkTheme ? '0.3' : '0.4'};
                        mask-image: linear-gradient(to top, black 40%, transparent 95%);
                        -webkit-mask-image: linear-gradient(to top, black 40%, transparent 95%);
                    }

                    /* 2. The Orange Gradient Overlay (Bottom Heavy) */
                    .hex-gradient-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 80%;
                        background: linear-gradient(to top, 
                            ${isDarkTheme ? 'rgba(255, 107, 0, 0.15)' : 'rgba(255, 155, 80, 0.2)'} 0%, 
                            ${isDarkTheme ? 'rgba(255, 107, 0, 0.05)' : 'rgba(255, 155, 80, 0.1)'} 40%,
                            transparent 100%);
                        z-index: 0;
                    }

                    /* 3. The scanline/shimmer effect */
                    .hex-shimmer {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: linear-gradient(to right, transparent 0%, rgba(255, 155, 80, 0.1) 50%, transparent 100%);
                        transform: skewX(-20deg) translateX(-150%);
                        animation: shimmer 6s infinite ease-in-out;
                        z-index: 1;
                    }

                    @keyframes shimmer {
                        0% { transform: skewX(-20deg) translateX(-150%); }
                        100% { transform: skewX(-20deg) translateX(150%); }
                    }

                    /* 4. Individual Floating Hexagons */
                    .float-hex {
                        position: absolute;
                        width: 40px;
                        height: 46px; /* Hexagon Ratio */
                        background-color: #FF9B50;
                        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                        opacity: 0;
                        animation: floatUp 8s infinite ease-in;
                    }

                    @keyframes floatUp {
                        0% { transform: translateY(100px) scale(0.5) rotate(0deg); opacity: 0; }
                        20% { opacity: ${isDarkTheme ? '0.4' : '0.6'}; }
                        80% { opacity: 0; }
                        100% { transform: translateY(-300px) scale(1.2) rotate(45deg); opacity: 0; }
                    }

                    /* Randomize positions for floating hexes */
                    .hex-0 { left: 10%; animation-delay: 0s; width: 30px; height: 34px; }
                    .hex-1 { left: 25%; animation-delay: 2s; width: 50px; height: 57px; background-color: #FF6B00; }
                    .hex-2 { left: 40%; animation-delay: 4s; }
                    .hex-3 { left: 60%; animation-delay: 1s; width: 20px; height: 23px; }
                    .hex-4 { left: 75%; animation-delay: 5s; background-color: #FF6B00; }
                    .hex-5 { left: 90%; animation-delay: 3s; }
                    .hex-6 { left: 15%; animation-delay: 6s; width: 45px; height: 52px; }
                    .hex-7 { left: 35%; animation-delay: 1.5s; background-color: #FF6B00; }
                    .hex-8 { left: 55%; animation-delay: 4.5s; }
                    .hex-9 { left: 80%; animation-delay: 2.5s; width: 35px; height: 40px; }
                    .hex-10 { left: 5%; animation-delay: 5.5s; background-color: #FF6B00; }
                    .hex-11 { left: 95%; animation-delay: 3.5s; }

                    @keyframes pulse {
                        0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; }
                        50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.8; }
                        100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; }
                    }

                    .job-listings-container::-webkit-scrollbar {
                        width: 8px;
                    }
                    .job-listings-container::-webkit-scrollbar-track {
                        background: ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
                        border-radius: 10px;
                        margin: 10px 0;
                    }
                    .job-listings-container::-webkit-scrollbar-thumb {
                        background: ${isDarkTheme ? 'rgba(255,155,80,0.3)' : 'rgba(255,155,80,0.5)'};
                        border-radius: 10px;
                    }
                    .job-listings-container::-webkit-scrollbar-thumb:hover {
                        background: #FF9B50;
                    }
                `}</style>

            </div >

            {/* Local Scroll To Top Button for Job Listings - Fixed Position High Visibility */}
            {showContainerScrollTop && (
                <button
                    onClick={scrollToContainerTop}
                    style={{
                        position: 'fixed',
                        bottom: '100px', // Positioned above the page scroll button
                        right: '30px',
                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#FFFFFF',
                        color: '#FF9B50',
                        width: '55px',
                        height: '55px',
                        borderRadius: '50%',
                        border: '2px solid #FF9B50',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: isDarkTheme ? '0 10px 30px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.15)',
                        zIndex: 99999,
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                        e.currentTarget.style.boxShadow = isDarkTheme ? '0 15px 35px rgba(0, 0, 0, 0.6)' : '0 15px 35px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = isDarkTheme ? '0 10px 30px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.15)';
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
