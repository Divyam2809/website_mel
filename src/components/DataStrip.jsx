import React, { useState, useEffect } from 'react';
import mockStorage from '../services/mockStorage';

export default function DataStrip() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        mockStorage.getTicker().then(res => {
            if (res.data) setItems(res.data);
        }).catch(err => console.error(err));
    }, []);

    const visibleItems = items.filter(i => i.isVisible);

    const displayItems = visibleItems;

    return (
        <section style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem 0',
            overflow: 'hidden',
            position: 'relative',

        }}>
            <div style={{
                display: 'flex',
                animation: 'scroll 20s linear infinite',
                whiteSpace: 'nowrap',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
            }}>
                {/* Duplicate content for seamless loop */}
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3rem',
                        paddingRight: '3rem'
                    }}>
                        {displayItems.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <span style={{
                                    color: '#ffffff',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '2px',
                                    fontFamily: 'Inter, sans-serif'
                                }}>{item.text}</span>
                                <span style={{
                                    color: '#FF9B50',
                                    fontSize: '0.5rem'
                                }}>●</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-33.333%, 0, 0); }
                }
            `}</style>
        </section>
    );
}
