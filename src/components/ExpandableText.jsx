
import React, { useState } from 'react';

// Expandable Text Component
export default function ExpandableText({ text, isDarkTheme, limit = 200 }) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= limit) {
        return (
            <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: isDarkTheme ? '#AAA' : '#666',
                maxWidth: '500px'
            }}>
                {text}
            </p>
        );
    }

    return (
        <div style={{ maxWidth: '500px' }}>
            <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: isDarkTheme ? '#AAA' : '#666',
                marginBottom: '0.5rem',
                display: 'inline'
            }}>
                {isExpanded ? text : text.slice(0, limit) + '...'}
            </p>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent parent clicks if any
                    setIsExpanded(!isExpanded);
                }}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#FF9B50',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '0',
                    marginLeft: '8px',
                    textDecoration: 'underline'
                }}
            >
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}
