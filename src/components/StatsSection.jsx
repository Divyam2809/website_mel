import React from 'react';
import CountUpAnimation from './CountUpAnimation';

export default function StatsSection() {
    return (
        <section style={{
            padding: '5rem 5%'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                textAlign: 'center'
            }}>
                <div>
                    <div style={{
                        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                        fontWeight: 900,
                        color: '#FF9B50',
                        marginBottom: '0.5rem'
                    }}>
                        <CountUpAnimation end={100} suffix="+" duration={2000} />
                    </div>
                    <div style={{
                        fontSize: '1.1rem',
                        opacity: 0.7,
                        fontWeight: 500
                    }}>Institutions Served</div>
                </div>
                <div>
                    <div style={{
                        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                        fontWeight: 900,
                        color: '#FF9B50',
                        marginBottom: '0.5rem'
                    }}>
                        <CountUpAnimation end={75} suffix="%" duration={2000} />
                    </div>
                    <div style={{
                        fontSize: '1.1rem',
                        opacity: 0.7,
                        fontWeight: 500
                    }}>Increased Learning Retention</div>
                </div>
                <div>
                    <div style={{
                        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                        fontWeight: 900,
                        color: '#FF9B50',
                        marginBottom: '0.5rem'
                    }}>
                        <CountUpAnimation end={50} suffix="K+" duration={2000} />
                    </div>
                    <div style={{
                        fontSize: '1.1rem',
                        opacity: 0.7,
                        fontWeight: 500
                    }}>Students Impacted</div>
                </div>
            </div>
        </section>
    );
}
