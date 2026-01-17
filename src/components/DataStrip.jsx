import { useState, useEffect } from 'react';
import dataStripService from '../services/dataStripService';

export default function DataStrip({ section = 'home' }) {
    // Default fallback messages
    const defaultMessages = {
        home: [
            "USED BY 120+ INSTITUTIONS ACROSS INDIA",
            "COVERS K-12 TO HIGHER EDUCATION & INDUSTRIAL TRAINING",
            "1,200+ STUDENTS IMPACTED PER LAB ANNUALLY",
            "WORKS WITH CSR, GOVERNMENT & PRIVATE INSTITUTIONS"
        ],
        about: [
            "INNOVATING LEARNING SINCE 2017",
            "PIONEERS IN VIRTUAL REALITY EDUCATION",
            "EMPOWERING 50K+ STUDENTS"
        ]
    };

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await dataStripService.getConfig();
                const data = res.data?.data;

                let targetMessages = [];

                if (Array.isArray(data)) {
                    // Legacy: It's just a home array
                    if (section === 'home') {
                        targetMessages = data;
                    }
                } else if (data && typeof data === 'object') {
                    // New Structure: { home: [], about: [] }
                    const sectionData = data[section] || [];
                    targetMessages = sectionData
                        .filter(item => item.status === 'Published')
                        .map(item => item.text);
                }

                // If nothing found or empty, use defaults
                if (targetMessages.length > 0) {
                    setMessages(targetMessages);
                } else {
                    setMessages(defaultMessages[section] || defaultMessages.home);
                }

            } catch (error) {
                console.error("Failed to load Data Strip config", error);
                setMessages(defaultMessages[section] || defaultMessages.home);
            }
        };
        fetchConfig();
    }, [section]);

    return (
        <section style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem 0',
            overflow: 'hidden',
            position: 'relative',

        }}>
            <div style={{
                display: 'flex',
                animation: 'scroll 60s linear infinite',
                whiteSpace: 'nowrap',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
            }}>
                {/* Duplicate content for seamless loop */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ display: 'flex' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3rem',
                                paddingRight: '3rem'
                            }}>
                                <span style={{
                                    color: '#ffffff',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '2px',
                                    fontFamily: 'Inter, sans-serif'
                                }}>{msg}</span>
                                <span style={{
                                    color: '#FF9B50',
                                    fontSize: '0.5rem'
                                }}>●</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
            `}</style>
        </section>
    );
}

