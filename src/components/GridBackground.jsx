import React from 'react';

const GridBackground = ({ isDarkTheme }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: isDarkTheme
                ? 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            zIndex: 1,
            pointerEvents: 'none'
        }} />
    );
};

export default GridBackground;
