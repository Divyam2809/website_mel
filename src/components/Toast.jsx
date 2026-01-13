import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getStyles = () => {
        const baseStyles = {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 9999,
            animation: 'slideIn 0.3s ease-out',
            maxWidth: '400px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 500
        };

        const typeStyles = {
            success: {
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(22, 163, 74, 0.95) 100%)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            },
            error: {
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            },
            warning: {
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.95) 0%, rgba(245, 158, 11, 0.95) 100%)',
                color: '#000',
                border: '1px solid rgba(0, 0, 0, 0.1)'
            },
            info: {
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }
        };

        return { ...baseStyles, ...typeStyles[type] };
    };

    const getIcon = () => {
        const iconStyle = { width: '20px', height: '20px', flexShrink: 0 };

        switch (type) {
            case 'success':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case 'error':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" strokeLinecap="round" />
                        <line x1="9" y1="9" x2="15" y2="15" strokeLinecap="round" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
                        <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" />
                    </svg>
                );
            default:
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" strokeLinecap="round" />
                        <line x1="12" y1="8" x2="12.01" y2="8" strokeLinecap="round" />
                    </svg>
                );
        }
    };

    return (
        <>
            <div style={getStyles()}>
                {getIcon()}
                <span style={{ flex: 1 }}>{message}</span>
                <button
                    onClick={onClose}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0.7,
                        transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                        <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default Toast;
