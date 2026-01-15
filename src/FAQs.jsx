import React, { useState, useEffect } from 'react';

import AppNav from './components/AppNav';

import mockStorage from './services/mockStorage';

export default function FAQs({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await mockStorage.getFAQs();
                const visible = response.data.filter(f =>
                    f.status === 'Published' || (!f.status && f.isVisible !== false)
                );
                setFaqs(visible);
            } catch (error) {
                console.error("Failed to load FAQs", error);
            }
        };
        fetchFAQs();
    }, []);

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
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{item.question}</h3>
                            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
