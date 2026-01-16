import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './admin.css';

const AdminSidebar = ({ stats = {} }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedMenu, setExpandedMenu] = useState({});

    const toggleMenu = (name) => {
        setExpandedMenu(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    // ... Icons object ...
    // Professional Inline SVGs (Lucide-style)
    const Icons = {
        // ... existing icons ...
        Blog: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
        ),
        News: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
        ),
        Awards: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h8m-4-9v9m-8-3h16m-7-6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"></path>
                <path d="M6 9h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"></path>
            </svg>
        ),
        FAQs: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        ),
        Team: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        CaseStudy: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        ),
        Testimonials: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
        ),
        Timeline: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        ),
        Users: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        Footer: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="15" width="20" height="7" rx="2" ry="2"></rect>
                <line x1="2" y1="9" x2="22" y2="9"></line>
            </svg>
        ),
        DataStrip: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        ),
        GlobalMomentum: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        )
    };

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isSuperAdmin = user.role === 'superadmin';

    const menuItems = [
        { name: 'Blog', path: '/admin/content/blog', icon: Icons.Blog },
        { name: 'News', path: '/admin/content/news', icon: Icons.News },
        { name: 'Awards', path: '/admin/content/awards', icon: Icons.Awards },
        { name: 'FAQs', path: '/admin/content/faqs', icon: Icons.FAQs },
        { name: 'Team Details', path: '/admin/content/teamdetails', icon: Icons.Team },
        { name: 'Case Study', path: '/admin/content/casestudy', icon: Icons.CaseStudy },
        { name: 'Testimonials', path: '/admin/content/testimonials', icon: Icons.Testimonials },
        { name: 'Timeline', path: '/admin/content/timeline', icon: Icons.Timeline },
        { name: 'Footer', path: '/admin/footer', icon: Icons.Footer },
        { name: 'Data Strip', path: '/admin/data-strip', icon: Icons.DataStrip },
        { name: 'Global Momentum', path: '/admin/global-momentum', icon: Icons.GlobalMomentum }
    ];

    if (isSuperAdmin) {
        menuItems.push({ name: 'Users', path: '/admin/content/users', icon: Icons.Users });
    }

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Auto-expand menu if active child
    React.useEffect(() => {
        menuItems.forEach(item => {
            if (item.children) {
                const hasActiveChild = item.children.some(child => isActive(child.path));
                if (hasActiveChild) {
                    setExpandedMenu(prev => ({ ...prev, [item.name]: true }));
                }
            }
        });
    }, [location.pathname]);

    return (
        <div className="admin-sidebar">
            <div className="sidebar-header">
                <h2>Content Management</h2>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.children ? (
                            <>
                                <div
                                    className={`sidebar-item ${location.pathname.startsWith('/admin/content/jobs') || location.pathname.startsWith('/admin/content/employeeStories') ? 'active-parent' : ''}`}
                                    onClick={() => toggleMenu(item.name)}
                                    style={{ justifyContent: 'space-between', cursor: 'pointer' }}
                                >
                                    <div className="sidebar-item-content">
                                        <span className="sidebar-icon">{item.icon}</span>
                                        <span className="sidebar-label">{item.name}</span>
                                    </div>
                                    <span style={{
                                        transform: expandedMenu[item.name] ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        {Icons.ChevronDown}
                                    </span>
                                </div>
                                <div className={`sidebar-submenu ${expandedMenu[item.name] ? 'expanded' : ''}`}
                                    style={{
                                        maxHeight: expandedMenu[item.name] ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease-in-out',
                                        opacity: expandedMenu[item.name] ? 1 : 0
                                    }}>
                                    {item.children.map((child, cIdx) => (
                                        <div
                                            key={cIdx}
                                            className={`sidebar-item sub-item ${isActive(child.path) ? 'active' : ''}`}
                                            onClick={() => navigate(child.path)}
                                            style={{ paddingLeft: '3.5rem' }}
                                        >
                                            <span className="sidebar-label" style={{ fontSize: '0.9rem' }}>{child.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div
                                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                                onClick={() => navigate(item.path)}
                            >
                                <div className="sidebar-item-content">
                                    <span className="sidebar-icon">{item.icon}</span>
                                    <span className="sidebar-label">{item.name}</span>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;
