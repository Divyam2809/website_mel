import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './admin.css';

const AdminSidebar = ({ stats = {} }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Professional Inline SVGs (Lucide-style)
    const Icons = {
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
        Industries: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        ),
        Ticker: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
        ),
        Global: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        Footer: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="2" y1="15" x2="22" y2="15"></line>
                <line x1="6" y1="22" x2="6" y2="15"></line>
                <line x1="10" y1="22" x2="10" y2="15"></line>
                <line x1="14" y1="22" x2="14" y2="15"></line>
                <line x1="18" y1="22" x2="18" y2="15"></line>
            </svg>
        ),
        Policy: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        )
    };

    const menuItems = [
        { name: 'Blog', path: '/admin/content/blog', icon: Icons.Blog },
        { name: 'News', path: '/admin/content/news', icon: Icons.News },
        { name: 'Awards', path: '/admin/content/awards', icon: Icons.Awards },
        { name: 'FAQs', path: '/admin/content/faqs', icon: Icons.FAQs },
        { name: 'Team Details', path: '/admin/content/teamdetails', icon: Icons.Team },
        { name: 'Case Study', path: '/admin/content/casestudy', icon: Icons.CaseStudy },
        { name: 'Industries', path: '/admin/content/industries', icon: Icons.Industries },
        { name: 'Testimonials', path: '/admin/content/testimonials', icon: Icons.Testimonials },
        { name: 'Ticker', path: '/admin/content/ticker', icon: Icons.Ticker },
        { name: 'Global Momentum', path: '/admin/content/globalMomentum', icon: Icons.Global },
        { name: 'Privacy Policy', path: '/admin/content/privacyPolicy', icon: Icons.Policy },
        { name: 'Footer Manager', path: '/admin/footer', icon: Icons.Footer }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="admin-sidebar">
            <div className="sidebar-header">
                <h2>Content Management</h2>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <div className="sidebar-item-content">
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-label">{item.name}</span>
                        </div>
                        {/* Count badge removed as per request */}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;
