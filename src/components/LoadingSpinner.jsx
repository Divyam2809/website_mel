import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#FF9B50', fullScreen = false }) => {
    const sizes = {
        small: '20px',
        medium: '40px',
        large: '60px'
    };

    const spinnerSize = sizes[size] || sizes.medium;

    const spinnerStyle = {
        width: spinnerSize,
        height: spinnerSize,
        border: `3px solid rgba(255, 155, 80, 0.1)`,
        borderTop: `3px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
    };

    const containerStyle = fullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 9998
    } : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    };

    return (
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default LoadingSpinner;
