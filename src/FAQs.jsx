import React, { useState } from 'react';

import AppNav from './components/AppNav';

export default function FAQs({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [faqs, setFaqs] = useState([
        { q: 'What hardware is required?', a: 'Our solutions are compatible with major VR headsets like Oculus, HTC Vive, and Pico.' },
        { q: 'Can I customize the content?', a: 'Yes, we offer tailored content development services to meet specific curriculum or industry needs.' },
        { q: 'Do you offer on-site support?', a: 'We provide comprehensive installation, training, and 24/7 technical support.' }
    ]);

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="faqs"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', padding: '120px 5%', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', color: '#FF9B50' }}>Frequently Asked Questions</h1>

                <div style={{ maxWidth: '800px' }}>
                    {faqs.map((item, index) => (
                        <div key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{item.q}</h3>
                            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
