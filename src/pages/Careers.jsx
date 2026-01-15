import React, { useRef, useState, useEffect } from 'react';
import AppNav from '../components/AppNav';
import JobApplicationModal from '../components/JobApplicationModal';
import EmployeeTestimonials from '../components/EmployeeTestimonials';
import GridBackground from '../components/GridBackground';
import mockStorage from '../services/mockStorage';

// Internal JobCard Component for Hover Logic
const JobCard = ({ job, isDarkTheme, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                padding: '2rem',
                borderRadius: '24px',
                backgroundColor: isDarkTheme ? 'rgba(26, 26, 26, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: isHovered
                    ? '1px solid #FF9B50'
                    : (isDarkTheme ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)'),
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                boxShadow: isDarkTheme ? '0 8px 32px rgba(0,0,0,0.2)' : '0 8px 32px rgba(0,0,0,0.05)',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'flex-start',
                overflow: 'hidden',
                maxHeight: isHovered ? '500px' : '150px' // Animate height
            }}
            onClick={() => onSelect(job)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header Section (Always Visible) */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{job.title}</h3>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {(Array.isArray(job.tags) ? job.tags : (typeof job.tags === 'string' ? job.tags.split(',') : [])).map((tag, t) => (
                            <span key={t} style={{
                                fontSize: '0.8rem',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '20px',
                                backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : '#f0f0f0',
                                color: isDarkTheme ? '#ccc' : '#666'
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '30px',
                    background: isHovered ? '#FF9B50' : 'transparent',
                    border: '2px solid #FF9B50',
                    color: isHovered ? '#fff' : '#FF9B50',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    marginTop: '0.5rem' // Align with title
                }}>
                    Apply
                </div>
            </div>

            {/* Expanded Content (Visible on Hover) */}
            <div style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '100%',
                borderTop: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                paddingTop: isHovered ? '1.5rem' : '0',
                marginTop: isHovered ? '0' : '-10px', // Pull up to reduce gap when hidden
                visibility: isHovered ? 'visible' : 'hidden', // Use visibility instead of display for layout preservation
                height: isHovered ? 'auto' : '0', // Animate height implicitly via max-height of parent, but safer here
                overflow: 'hidden'
            }}>
                <p style={{
                    marginBottom: '1rem',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: isDarkTheme ? '#ddd' : '#444'
                }}>
                    {job.purpose}
                </p>
                <div style={{ paddingLeft: '1rem', borderLeft: '3px solid #FF9B50' }}>
                    <ul style={{
                        margin: 0,
                        paddingLeft: '1.2rem',
                        opacity: 0.8,
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                    }}>
                        {(Array.isArray(job.mission) ? job.mission : [])
                            .flatMap(item => {
                                if (typeof item === 'string') return [item];
                                if (item.type === 'list' && Array.isArray(item.items)) return item.items;
                                return [item.content];
                            })
                            .filter(Boolean) // Remove null/undefined/empty strings
                            .slice(0, 2)
                            .map((text, idx) => (
                                <li key={idx} style={{ marginBottom: '0.3rem' }}>{text}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const gradientText = {
    background: 'linear-gradient(90deg, #FF9B50 0%, #FF6B00 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};



export default function Careers({ onNavigate, isDarkTheme, onToggleTheme, onBookDemo }) {
    const jobsRef = useRef(null);
    const containerRef = useRef(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [showContainerScrollTop, setShowContainerScrollTop] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await mockStorage.getJobs();
                if (response.data) {
                    setJobs(response.data.filter(job => job.status === 'Published' || job.isVisible));
                }
            } catch (error) {
                console.error("Failed to fetch jobs", error);
            }
        };
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
                            We don't just build VR.<br />
                            We build <span style={gradientText}>Reality.</span>
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                            lineHeight: '1.6',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem',
                            opacity: 0.8
                        }}>
                            If you thrive on big challenges, cutting-edge tech, and shaping the future of education and enterprise—this is your launchpad.
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
                            View Open Positions
                        </button>
                    </div>
                </section>



                {/* --- Values Grid --- */}
                <section style={{ padding: '8rem 5%' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>What we seek in you</h2>
                            <p style={{ opacity: 0.7, fontSize: '1.2rem' }}>Our culture is built on these four pillars.</p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '2rem'
                        }}>
                            {[
                                { title: 'Innovation', desc: 'We don\'t just follow trends, we set them. We architect systems that structure experience over memorization.' },
                                { title: 'Impact', desc: 'We are on a mission to democratize education. Accessible, high-quality learning for everyone, everywhere.' },
                                { title: 'Empathy', desc: 'We build for the learner. User experience isn\'t an afterthought, it\'s our foundation.' },
                                { title: 'Scale', desc: 'Thinking big is in our DNA. We build solutions designed to reach millions of students.' }
                            ].map((value, i) => (
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
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>Perks & Benefits</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'Flexible Working Hours', desc: 'The company offers flexible working hours to support better work-life balance.' },
                                { title: 'Bonuses & Rewards', desc: 'There are performance-based bonuses and rewards for good work.' },
                                { title: 'Fun Culture', desc: 'The workplace promotes a fun and friendly culture with team activities and events.' },
                                { title: 'Recreational Facilities', desc: 'Employees have access to recreational and wellness facilities like games or fitness options.' },
                                { title: 'Learning & Growth', desc: 'The environment encourages learning, innovation, and growth in emerging tech like VR and EdTech.' },
                                { title: 'Leaves & Encashment', desc: 'Employees get paid leaves and leave encashment options.' },
                            ].map((perk, i) => (
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


                {/* --- Open Positions --- */}
                <section ref={jobsRef} style={{
                    padding: '8rem 5% 4rem',
                    position: 'relative',
                    backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
                    backgroundImage: isDarkTheme
                        ? `linear-gradient(115deg, #CC5500 29%, transparent 29%),
                           linear-gradient(115deg, transparent 29%, #121212 29%, #121212 30%, transparent 30%),
                           linear-gradient(135deg, rgba(255, 155, 80, 0.15) 40%, transparent 40%),
                           linear-gradient(115deg, transparent 70%, #121212 70%, #121212 71%, transparent 71%),
                           linear-gradient(115deg, transparent 71%, #CC5500 71%),
                           linear-gradient(135deg, transparent 60%, rgba(255, 155, 80, 0.15) 60%),
                           radial-gradient(rgba(255, 155, 80, 0.08) 1.5px, transparent 1.5px)`
                        : `linear-gradient(115deg, #FF9B50 29%, transparent 29%),
                           linear-gradient(115deg, transparent 29%, #ffffff 29%, #ffffff 30%, transparent 30%),
                           linear-gradient(135deg, #FFD180 40%, transparent 40%),
                           linear-gradient(115deg, transparent 70%, #ffffff 70%, #ffffff 71%, transparent 71%),
                           linear-gradient(115deg, transparent 71%, #FF9B50 71%),
                           linear-gradient(135deg, transparent 60%, #FFD180 60%),
                           radial-gradient(rgba(255, 155, 80, 0.3) 1.5px, transparent 1.5px)`,
                    backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 30px 30px',
                    backgroundAttachment: 'fixed',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Current Openings</h2>
                            <p style={{ opacity: 0.7, fontSize: '1.2rem' }}>Shape the future of immersive technology with us.</p>
                        </div>

                        {jobs.length > 0 ? (
                            <div
                                className="job-listings-container"
                                ref={containerRef}
                                onScroll={handleContainerScroll}
                                style={{
                                    display: 'grid',
                                    gap: '1.5rem',
                                    maxHeight: '720px', // Approx 4 cards (150px each + 1.5rem gap)
                                    overflowY: 'auto',
                                    paddingRight: '10px',
                                    paddingBottom: '10px' // For shadow
                                }}>
                                {jobs.map((job, i) => (
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
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>No Job Openings</h3>
                                <p style={{ fontSize: '1.1rem', color: isDarkTheme ? '#e2e2e2' : '#333333' }}>We don't have any open positions right now, but check back soon!</p>
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
                                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
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
                        bottom: '90px', // Positioned above the page scroll button
                        right: '30px',
                        backgroundColor: '#FFFFFF',
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
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                        zIndex: 99999,
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
