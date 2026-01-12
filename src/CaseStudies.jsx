import React, { useState } from 'react';

import AppNav from './components/AppNav';

export default function CaseStudies({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [caseStudies, setCaseStudies] = useState([
        {
            title: 'XYZ University',
            summary: 'Implemented VR Labs for 500+ students, resulting in 40% improved retention rates.'
        },
        {
            title: 'Global Manufacturing Corp',
            summary: 'Reduced safety training costs by 60% using our VR simulation modules.'
        }
    ]);

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="casestudies"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', padding: '120px 5%', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: '#FF9B50' }}>Case Studies</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem' }}>See how our partners are transforming their operations with Melzo.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {caseStudies.map((item, index) => (
                            <div key={index} style={{ padding: '2rem', background: isDarkTheme ? '#262626' : '#f5f5f5', borderRadius: '20px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p>{item.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
