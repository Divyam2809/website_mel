import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import AdminSidebar from './AdminSidebar';
import './admin.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        blogs: 0, news: 0, awards: 0, faqs: 0,
        teamdetails: 0, caseStudy: 0, testimonials: 0, timeline: 0
    });
    const [visitorStats, setVisitorStats] = useState([]);
    const [recentQueries, setRecentQueries] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser || !['superadmin', 'content_manager', 'sales'].includes(storedUser.role)) {
            navigate('/admin/login');
            return;
        }
        setUser(storedUser);

        if (storedUser.role !== 'sales') {
            loadStats();
            loadVisitorStats();
        }
        loadQueries();
    }, [navigate]);

    const loadQueries = async () => {
        try {
            const { data } = await mockStorage.getDemoQueries();
            setRecentQueries(data);
        } catch (error) {
            console.error('Error loading queries:', error);
        }
    };

    const handleStatusChange = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Contacted' ? 'Pending' : 'Contacted';
        try {
            await mockStorage.updateDemoQuery(id, { status: newStatus });
            loadQueries();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const addToGoogleCalendar = (query) => {
        if (!query.date) return;

        const title = encodeURIComponent(`Demo with ${query.name}`);
        const details = encodeURIComponent(`Institute: ${query.institute}\nDesignation: ${query.designation}\nPhone: ${query.phone}\nEmail: ${query.email}\nMessage: ${query.message || 'N/A'}`);

        // Default to 10:00 AM on the selected date
        // Note: query.date is YYYY-MM-DD
        const startDate = new Date(query.date);
        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, '0');
        const day = String(startDate.getDate()).padStart(2, '0');

        // Format: YYYYMMDDTHHMMSS
        const start = `${year}${month}${day}T100000`; // 10:00 AM
        const end = `${year}${month}${day}T110000`;   // 11:00 AM

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}`;
        window.open(url, '_blank');
    };

    const loadStats = async () => {
        try {
            const [blogs, news, awards, faqs, team, cases, testimonials, timeline] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials(),
                mockStorage.getTimeline()
            ]);

            setStats({
                blogs: blogs.data.length,
                news: news.data.length,
                awards: awards.data.length,
                faqs: faqs.data.length,
                teamdetails: team.data.length,
                caseStudy: cases.data.length,
                testimonials: testimonials.data.length,
                timeline: timeline.data.length
            });
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    };

    const loadVisitorStats = () => {
        let visitors = JSON.parse(localStorage.getItem('websiteVisitors') || 'null');

        if (!visitors) {
            const today = new Date();
            visitors = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                visitors.push({
                    date: date.toISOString().split('T')[0],
                    count: Math.floor(Math.random() * 150) + 50
                });
            }
            localStorage.setItem('websiteVisitors', JSON.stringify(visitors));
        }

        setVisitorStats(visitors);
    };

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    const totalContent = Object.values(stats).reduce((a, b) => a + b, 0);
    const totalVisitors = visitorStats.reduce((sum, day) => sum + day.count, 0);
    const maxVisitors = Math.max(...visitorStats.map(d => d.count), 1);

    // Calculate nice Y-axis scale
    const yAxisMax = Math.ceil(maxVisitors / 50) * 50;
    const yAxisStep = yAxisMax / 5;

    const modules = [
        { name: 'Blog', path: '/admin/content/blog', count: stats.blogs },
        { name: 'News', path: '/admin/content/news', count: stats.news },
        { name: 'Awards', path: '/admin/content/awards', count: stats.awards },
        { name: 'FAQs', path: '/admin/content/faqs', count: stats.faqs },
        { name: 'Team Details', path: '/admin/content/teamdetails', count: stats.teamdetails },
        { name: 'Case Study', path: '/admin/content/casestudy', count: stats.caseStudy },
        { name: 'Testimonials', path: '/admin/content/testimonials', count: stats.testimonials },
        { name: 'Timeline', path: '/admin/content/timeline', count: stats.timeline }
    ];

    if (!user) return null; // Wait for auth check

    const isSales = user.role === 'sales';
    const isContentManager = user.role === 'content_manager';

    return (
        <div className="admin-layout">
            {!isSales && <AdminSidebar stats={stats} />}
            <div className={`admin-main-content ${isSales ? 'full-width' : ''}`} style={isSales ? { marginLeft: 0, width: '100%' } : {}}>
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

                    {/* Header */}
                    <div className="admin-header" style={isSales ? { left: 0, width: '100%' } : {}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/assets/Melzo_Logo.svg" alt="Melzo" style={{ height: '40px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                            {isSales && <span style={{ marginLeft: '1rem', fontWeight: 600, color: '#666' }}>Sales Dashboard</span>}
                        </div>

                        {/* RIGHT: Nav & Logout Group */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                            {/* Nav Links */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {!isSales && ['Analytics', 'Recent Queries', 'Content Management'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            const id = item.toLowerCase().replace(/ /g, '-');
                                            const element = document.getElementById(id);
                                            if (element) {
                                                const yOffset = -100;
                                                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            color: '#666',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            padding: '8px 20px',
                                            borderRadius: '50px'
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <span style={{
                                    fontWeight: 600,
                                    color: '#475569',
                                    fontSize: '0.95rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: '#f1f5f9',
                                    padding: '8px 16px',
                                    borderRadius: '50px'
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    {user.name || 'User'}
                                </span>
                                <button
                                    onClick={logout}
                                    style={{
                                        background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 32px',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    <span>Logout</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto', paddingTop: '120px' }}>

                        {/* Website Visitors Graph - HIDDEN FOR SALES */}
                        {!isSales && (
                            <div id="analytics" className="visitor-graph-container" style={{ scrollMarginTop: '100px' }}>
                                <div className="visitor-graph-card">
                                    <div className="graph-header">
                                        <h2 className="graph-title">Website Visitors</h2>
                                        <p className="graph-subtitle">DAILY TRAFFIC</p>
                                    </div>

                                    {/* Line Graph */}
                                    <div className="graph-wrapper" style={{ paddingLeft: '20px' }}>
                                        <svg className="visitor-graph" width="100%" height="300" viewBox="0 0 1000 300" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                                            {/* Setup Grid */}
                                            <g className="grid-layer">
                                                {/* Vertical Grid Dashed */}
                                                {[0, 20, 40, 60, 80, 100].map(pos => (
                                                    <line
                                                        key={`v-${pos}`}
                                                        x1={pos * 10} y1="20"
                                                        x2={pos * 10} y2="270"
                                                        stroke="#f1f5f9"
                                                        strokeWidth="1.5"
                                                        strokeDasharray="6 6"
                                                    />
                                                ))}

                                                {/* Horizontal Grid Dashed + Y Labels */}
                                                {[0, 1, 2, 3, 4, 5].map((step) => {
                                                    const value = yAxisMax - (step * yAxisStep);
                                                    const yPos = 20 + (step * 50);
                                                    return (
                                                        <g key={`h-${step}`}>
                                                            <line
                                                                x1="0"
                                                                y1={yPos}
                                                                x2="1000"
                                                                y2={yPos}
                                                                stroke="#f1f5f9"
                                                                strokeWidth="1.5"
                                                                strokeDasharray="6 6"
                                                            />
                                                            <text
                                                                x="-12"
                                                                y={yPos + 4}
                                                                textAnchor="end"
                                                                fill="#94a3b8"
                                                                fontSize="12"
                                                                fontWeight="500"
                                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                            >
                                                                {Math.round(value)}
                                                            </text>
                                                        </g>
                                                    );
                                                })}
                                            </g>

                                            {/* Main Line Graph - Clean & Sharp */}
                                            <polyline
                                                points="0,210 50,215 100,208 150,212 200,210 250,205 300,212 350,210 380,60 400,50 450,55 500,48 550,52 580,210 600,215 650,208 700,212 750,210 800,205 850,212 900,208 950,210 1000,205"
                                                fill="none"
                                                stroke="#FF9B50"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* X-Axis Labels */}
                                            {visitorStats.map((day, idx) => {
                                                const x = (idx / (visitorStats.length - 1)) * 100;
                                                const date = new Date(day.date);
                                                return (
                                                    <g key={idx}>
                                                        <line x1={`${x}%`} y1="270" x2={`${x}%`} y2="278" stroke="#e2e8f0" strokeWidth="1" />
                                                        <text
                                                            x={`${x}%`}
                                                            y="298"
                                                            textAnchor="middle"
                                                            fill="#64748b"
                                                            fontSize="11"
                                                            fontWeight="500"
                                                        >
                                                            {date.getDate()} {date.toLocaleDateString('en-US', { month: 'short' })}
                                                        </text>
                                                    </g>
                                                )
                                            })}
                                        </svg>
                                    </div>

                                    {/* Summary Stats - Perfectly Centered */}
                                    <div className="graph-stats">
                                        <div className="stat-item">
                                            <p className="stat-label">Total Visitors</p>
                                            <p className="stat-value total-value">{totalVisitors.toLocaleString()}</p>
                                        </div>
                                        <div className="stat-divider"></div>
                                        <div className="stat-item">
                                            <p className="stat-label">Average per Day</p>
                                            <p className="stat-value avg-value">{Math.round(totalVisitors / 7)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Queries Box - SHOW FOR ALL except Content Manager */}
                        {!isContentManager && (
                            <div id="recent-queries" style={{ marginBottom: '3rem', scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: '#ea6805' }}>
                                    {isSales ? 'Demo Requests' : 'Recent Queries'}
                                </h2>
                                <div className="recent-queries-card" style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                                    {recentQueries.length === 0 ? (
                                        <p style={{ opacity: 0.6, margin: 0, textAlign: 'center', padding: '3rem' }}>No pending queries at the moment</p>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', maxHeight: !isSales ? '500px' : 'none', overflowY: !isSales ? 'auto' : 'visible' }}>
                                            {recentQueries.map((query, index) => (
                                                <div key={query._id} style={{
                                                    padding: '2rem',
                                                    borderBottom: index !== recentQueries.length - 1 ? '1px solid #FF9B50' : 'none',
                                                    display: 'grid',
                                                    gap: '0.75rem',
                                                    transition: 'background-color 0.2s',
                                                }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={query.status === 'Contacted'}
                                                                    onChange={() => handleStatusChange(query._id, query.status)}
                                                                    style={{ width: '18px', height: '18px', accentColor: '#10b981', cursor: 'pointer' }}
                                                                />
                                                                <span style={{ fontSize: '0.85rem', color: query.status === 'Contacted' ? '#10b981' : '#64748b', fontWeight: 500 }}>
                                                                    {query.status === 'Contacted' ? 'Answered' : 'Pending'}
                                                                </span>
                                                            </label>
                                                            <div style={{ width: '1px', height: '20px', background: '#e2e8f0' }}></div>
                                                            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: query.status === 'Contacted' ? '#94a3b8' : '#1e293b', textDecoration: query.status === 'Contacted' ? 'line-through' : 'none' }}>{query.name}</h3>
                                                        </div>
                                                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                                                            <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                <span>Demo Date: <span style={{ color: '#FF9B50', fontWeight: 700 }}>{query.date ? new Date(query.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}</span></span>
                                                                {query.date && (
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            addToGoogleCalendar(query);
                                                                        }}
                                                                        title="Add to Google Calendar"
                                                                        style={{
                                                                            background: '#FF9B50',
                                                                            border: 'none',
                                                                            borderRadius: '6px',
                                                                            color: 'white',
                                                                            width: '24px',
                                                                            height: '24px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            cursor: 'pointer',
                                                                            transition: 'transform 0.2s'
                                                                        }}
                                                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                                    >
                                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                            <line x1="12" y1="11" x2="12" y2="17"></line>
                                                                            <line x1="9" y1="14" x2="15" y2="14"></line>
                                                                        </svg>
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                                                Received: {new Date(query.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#475569' }}>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                            {query.email}
                                                        </span>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                            {query.phone}
                                                        </span>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#475569' }}>
                                                        <span style={{ fontWeight: 600, color: '#334155' }}>{query.institute}</span>
                                                        <span style={{ color: '#94a3b8' }}>•</span>
                                                        <span>{query.designation}</span>
                                                    </div>
                                                    {query.message && (
                                                        <div style={{ marginTop: '0.75rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', borderLeft: '3px solid #FF9B50' }}>
                                                            {query.message}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Content Management Modules - HIDDEN FOR SALES */}
                        {!isSales && (
                            <div id="content-management" style={{ scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: '#ea6805' }}>
                                    Content Management
                                </h2>
                                <div className="content-modules-grid">
                                    {modules.map((module, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => navigate(module.path)}
                                            className="content-module-card"
                                        >
                                            <div className="module-header">
                                                <h3 className="module-title">{module.name}</h3>
                                                <span className="module-count-badge">
                                                    {module.count}
                                                </span>
                                            </div>
                                            <p className="module-item-text">{module.count} items in total</p>
                                            <div className="manage-btn">
                                                Manage Section
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Statistics & Analytics - HIDDEN FOR SALES */}
                        {(!isSales) && (
                            <div style={{ marginBottom: '3rem', marginTop: '4rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: '#FF9B50' }}>
                                    Statistics & Analytics
                                </h2>
                                <div className="stats-marquee-wrapper">
                                    <div className="stats-marquee-track">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <React.Fragment key={i}>
                                                <div className="ticker-item">
                                                    <h3 className="ticker-value">{totalContent}</h3>
                                                    <p className="ticker-label">Total Content</p>
                                                </div>
                                                <div className="ticker-item">
                                                    <h3 className="ticker-value">{stats.blogs}</h3>
                                                    <p className="ticker-label">Blog Posts</p>
                                                </div>
                                                <div className="ticker-item">
                                                    <h3 className="ticker-value">{stats.teamdetails}</h3>
                                                    <p className="ticker-label">Team Members</p>
                                                </div>
                                                <div className="ticker-item">
                                                    <h3 className="ticker-value">{stats.caseStudy}</h3>
                                                    <p className="ticker-label">Case Studies</p>
                                                </div>
                                                <div className="ticker-item">
                                                    <h3 className="ticker-value">{stats.timeline}</h3>
                                                    <p className="ticker-label">Timeline Events</p>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
