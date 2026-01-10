import React, { useEffect } from 'react';
import AppNav from './components/AppNav';

const Section = ({ title, children, theme }) => (
    <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 800,
            color: theme.sectionTitle,
            marginBottom: '1.5rem',
            borderBottom: `2px solid ${theme.accent}`,
            display: 'inline-block',
            paddingBottom: '0.5rem'
        }}>
            {title}
        </h2>
        <div style={{ paddingLeft: '1rem' }}>
            {children}
        </div>
    </section>
);

const SubSection = ({ title, children, theme }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: theme.text,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: theme.accent,
                borderRadius: '50%',
                display: 'inline-block'
            }}></span>
            {title}
        </h3>
        <div style={{ color: theme.text, opacity: 0.9, lineHeight: '1.7' }}>
            {children}
        </div>
    </div>
);

const CheckList = ({ items, theme }) => (
    <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
            <li key={index} style={{
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                color: theme.text,
                opacity: 0.9
            }}>
                <span style={{
                    color: theme.accent,
                    fontWeight: 'bold',
                    minWidth: '20px'
                }}>✓</span>
                {item}
            </li>
        ))}
    </ul>
);

const ContactCard = ({ title, info, theme }) => (
    <div style={{
        padding: '1.5rem',
        backgroundColor: theme.cardBg,
        borderRadius: '12px',
        border: `1px solid ${theme.border}`,
        boxShadow: theme.shadow,
        flex: 1,
        minWidth: '250px'
    }}>
        <h4 style={{ color: theme.accent, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{title}</h4>
        <p style={{ color: theme.text, fontWeight: 500 }}>{info}</p>
    </div>
);

export default function Guidelines({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = {
        bg: isDarkTheme ? '#111111' : '#ffffff',
        text: isDarkTheme ? '#E0E0E0' : '#2D2D2D',
        cardBg: isDarkTheme ? '#1E1E1E' : '#ffffff',
        accent: '#FF9B50',
        sectionTitle: isDarkTheme ? '#FF9B50' : '#5F634F',
        heroBg: isDarkTheme
            ? 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(95, 99, 79, 0.08) 0%, transparent 100%)',
        border: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        shadow: isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.06)'
    };

    return (
        <div style={{ backgroundColor: theme.bg, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="guidelines"
            />

            <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '120px 20px 60px' }}>

                {/* Hero / Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem',
                    padding: '3rem 2rem',
                    background: theme.heroBg,
                    borderRadius: '20px',
                    border: `1px solid ${theme.border}`
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: theme.text,
                        marginBottom: '1rem',
                        letterSpacing: '-1px'
                    }}>
                        Product <span style={{ color: theme.accent }}>Guidelines</span>
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: theme.text,
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Everything you need to know about setting up, using, and maintaining your Melzo Anubhav Chair.
                    </p>
                </div>

                {/* 1. Components Overview */}
                <Section title="1. Components Overview" theme={theme}>
                    <SubSection title="The Chair" theme={theme}>
                        <p>The Melzo Anubhav Chair is a 7D/5D motion simulated seat designed for immersive learning. It includes:</p>
                        <CheckList items={[
                            "360-degree rotation base",
                            "Vibration and haptic feedback sensors",
                            "Integrated joystick controls (if applicable)",
                            "Safety harness and ergonomic cushioning"
                        ]} theme={theme} />
                    </SubSection>

                    <SubSection title="VR Headset" theme={theme}>
                        <p>Compatible with Meta Quest 2, Quest 3, and other supported VR headsets. The headset provides the visual and audio interface for the simulations.</p>
                    </SubSection>

                    <SubSection title="Control Unit" theme={theme}>
                        <p>The central processing unit that synchronizes the VR content with the varied chair movements.</p>
                    </SubSection>
                </Section>

                {/* 2. Setup & Safety */}
                <Section title="2. Setup & Safety" theme={theme}>
                    <SubSection title="Space Requirements" theme={theme}>
                        <p>Ensure you have a clearance of at least <strong>1.5 meters (5 feet)</strong> around the chair to allow for full rotation and safety.</p>
                    </SubSection>
                    <SubSection title="Power Connection" theme={theme}>
                        <p>Connect the chair to a standard 220V power outlet. Use the provided surge protector to prevent electrical damage.</p>
                    </SubSection>
                    <SubSection title="Safety Precautions" theme={theme}>
                        <CheckList items={[
                            "Always fasten the seatbelt before starting any simulation.",
                            "Do not stand on the chair or footrest.",
                            "Keep hands and feet inside the chair boundaries during motion.",
                            "Not recommended for users with severe motion sickness, heart conditions, or pregnancy."
                        ]} theme={theme} />
                    </SubSection>
                </Section>

                {/* 3. User Guide */}
                <Section title="3. User Guide" theme={theme}>
                    <SubSection title="Starting a Session" theme={theme}>
                        <ol style={{ paddingLeft: '1.2rem', color: theme.text, lineHeight: '1.8' }}>
                            <li>Sit comfortably and fasten the seatbelt.</li>
                            <li>Put on the VR headset and adjust the strap for a clear view.</li>
                            <li>Use the controller to select your desired module from the library.</li>
                            <li>The chair will automatically calibrate before starting.</li>
                        </ol>
                    </SubSection>
                    <SubSection title="During the Experience" theme={theme}>
                        <p>If you feel uncomfortable at any point, simply close your eyes or remove the headset. The session can be paused using the controller menu button.</p>
                    </SubSection>
                </Section>

                {/* 4. Maintenance */}
                <Section title="4. Maintenance" theme={theme}>
                    <SubSection title="Cleaning" theme={theme}>
                        <p>Wipe the leather surfaces with a clean, damp cloth. Do not use harsh chemicals. Clean the VR headset lenses with the provided microfiber cloth only.</p>
                    </SubSection>
                    <SubSection title="Routine Checks" theme={theme}>
                        <p>Inspect cables and connections weekly to ensure they are secure and undamaged.</p>
                    </SubSection>
                </Section>

                {/* 5. Support */}
                <Section title="5. Customer Support" theme={theme}>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <ContactCard title="Technical Support" info="+91 1800-123-4567" theme={theme} />
                        <ContactCard title="Email Us" info="support@melzo.com" theme={theme} />
                        <ContactCard title="Website" info="www.melzo.com" theme={theme} />
                    </div>
                </Section>

            </main>

            <footer style={{
                borderTop: `1px solid ${theme.border}`,
                textAlign: 'center',
                padding: '2rem',
                color: theme.text,
                opacity: 0.7
            }}>
                <button
                    onClick={() => onNavigate('home')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: theme.accent,
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 600
                    }}
                >
                    &larr; Back to Home
                </button>
            </footer>
        </div>
    );
}
