import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import AdminSidebar from './AdminSidebar';
import './admin.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        blogs: 0, news: 0, awards: 0, faqs: 0,
        teamdetails: 0, caseStudy: 0, testimonials: 0
    });
    const [visitorStats, setVisitorStats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user || user.role !== 'superadmin') {
            navigate('/admin/login');
            return;
        }

        loadStats();
        loadVisitorStats();
    }, [navigate]);

    const loadStats = async () => {
        try {
            const [blogs, news, awards, faqs, team, cases, testimonials] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials()
            ]);

            setStats({
                blogs: blogs.data.length,
                news: news.data.length,
                awards: awards.data.length,
                faqs: faqs.data.length,
                teamdetails: team.data.length,
                caseStudy: cases.data.length,
                testimonials: testimonials.data.length
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
        { name: 'Testimonials', path: '/admin/content/testimonials', count: stats.testimonials }
    ];

    return (
        <div className="admin-layout">
            <AdminSidebar stats={stats} />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    <div className="admin-header">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/assets/Melzo_Logo.svg" alt="Melzo" style={{ height: '40px' }} />
                        </div>

                        {/* RIGHT: Nav & Logout Group */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                            {/* Nav Links */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {['Analytics', 'Recent Queries', 'Content Management'].map((item) => (
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
                                            borderRadius: '50px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#FF9B50';
                                            e.target.style.background = 'rgba(255, 155, 80, 0.08)';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 4px 12px rgba(255, 155, 80, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#666';
                                            e.target.style.background = 'transparent';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

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
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                    e.target.style.boxShadow = '0 10px 25px rgba(255, 155, 80, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
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

                    <div style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>


                        {/* Website Visitors Graph */}
                        <div id="analytics" className="visitor-graph-container" style={{ scrollMarginTop: '100px' }}>
                            <div className="visitor-graph-card">
                                {/* Graph Header */}
                                <div className="graph-header">
                                    <h2 className="graph-title">Website Visitors</h2>
                                    <p className="graph-subtitle">DAILY TRAFFIC</p>
                                </div>

                                {/* Line Graph */}
                                <div className="graph-wrapper" style={{ paddingLeft: '20px' }}>
                                    <svg className="visitor-graph" width="100%" height="300" style={{ overflow: 'visible' }}>
                                        {/* Setup Grid */}
                                        <g className="grid-layer">
                                            {/* Vertical Grid Dashed */}
                                            {[0, 20, 40, 60, 80, 100].map(pos => (
                                                <line
                                                    key={`v-${pos}`}
                                                    x1={`${pos}%`} y1="20"
                                                    x2={`${pos}%`} y2="270"
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
                                                            x2="100%"
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
                                            points="0%,210 5%,215 10%,208 15%,212 20%,210 25%,205 30%,212 35%,210 38%,60 40%,50 45%,55 50%,48 55%,52 58%,210 60%,215 65%,208 70%,212 75%,210 80%,205 85%,212 90%,208 95%,210 100%,205"
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



                        {/* Queries Box */}
                        <div id="recent-queries" style={{ marginBottom: '3rem', scrollMarginTop: '100px' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: '#ea6805' }}>
                                Recent Queries
                            </h2>
                            <div className="recent-queries-card">
                                <p style={{ opacity: 0.6, margin: 0 }}>No pending queries at the moment</p>
                            </div>
                        </div>

                        {/* Content Management Modules */}
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

                        {/* Statistics & Analytics */}
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
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
