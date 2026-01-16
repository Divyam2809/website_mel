import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminNav() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem'
        }}>
            {/* Logo */}
            {/* Logo */}
            <img
                src="/assets/Melzo_Logo.svg"
                alt="Melzo"
                style={{
                    height: '60px',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/admin/dashboard')}
            />

            {/* Center Navigation Links */}
            <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
            }}>
                {user?.role !== 'HR' && user?.role !== 'sales' && (
                    <NavLink
                        label="Analytics"
                        onClick={() => {
                            navigate('/admin/dashboard');
                            setTimeout(() => {
                                const element = document.getElementById('analytics');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }, 100);
                        }}
                    />
                )}
                {user?.role !== 'HR' && (
                    <NavLink
                        label="Recent Queries"
                        onClick={() => {
                            navigate('/admin/dashboard');
                            setTimeout(() => {
                                const element = document.getElementById('recent-queries');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }, 100);
                        }}
                    />
                )}
                <NavLink
                    label="Content Management"
                    onClick={() => {
                        navigate('/admin/dashboard');
                        setTimeout(() => {
                            const element = document.getElementById('content-management');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }}
                />
            </div>

            {/* User Info & Logout */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1f2937',
                    fontSize: '0.9rem',
                    background: '#f3f4f6',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontWeight: 600
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>
                        Admin
                    </span>
                </div>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #FF9B50 0%, #FF7F50 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(255, 155, 80, 0.3)',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 155, 80, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 155, 80, 0.3)';
                    }}
                >
                    Logout
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

// Helper component for navigation links
function NavLink({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                background: 'transparent',
                color: '#6b7280',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '0.9rem',
                padding: '8px 0',
                transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF9B50';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b7280';
            }}
        >
            {label}
        </button>
    );
}
