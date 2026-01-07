import React, { useEffect } from 'react';
import './VRLiveStream.css';
import AppNav from './AppNav';

export default function VRLiveStream({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="vrlivestream"
            />
            <div className={`vr-livestream-container ${themeClass}`}>
                {/* Hero Section */}
                <section
                    className="vr-livestream-hero"
                    style={{
                        backgroundImage: `url('/images/vr_livestream_hero.png')`
                    }}
                >
                    <div className="vr-livestream-hero-content">
                        <div className="vr-livestream-badge">
                            Live Stream Simulation
                        </div>
                        <h1>
                            Democratizing the VR Experience: Stream Beyond the Lab
                        </h1>
                        <p>
                            Breaking the walls of the physical classroom. Broadcast your immersive VR sessions to a global audience with real-time interactivity and zero geographical limits.
                        </p>
                        <div className="vr-livestream-hero-buttons">
                            <button
                                onClick={onBookDemo}
                                className="vr-livestream-btn-primary"
                            >
                                Launch Your Global Stream
                            </button>
                            <button className="vr-livestream-btn-secondary">
                                Watch a Live Demo
                            </button>
                        </div>
                    </div>
                </section>


                {/* The Connectivity Trio */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        The Connectivity Trio
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        Revolutionary streaming technology for global VR experiences
                    </p>

                    <div className="vr-livestream-feature-grid">
                        {[
                            {
                                title: 'Low-Latency 360° Broadcasting',
                                desc: 'Technology that allows viewers to look around the virtual environment in real-time without lag.',
                                icon: '📡'
                            },
                            {
                                title: 'Bi-Directional Interaction',
                                desc: 'Remote participants can influence the VR environment, ask questions, or trigger events within the simulation.',
                                icon: '🔄'
                            },
                            {
                                title: 'Universal Access',
                                desc: 'Compatible with browsers, mobile devices, and standalone headsets—no high-end PC required for the audience.',
                                icon: '🌐'
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="vr-livestream-feature-card">
                                <div className="vr-livestream-feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="vr-livestream-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="vr-livestream-feature-desc">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* The Expansion Pillars */}
                <section className="vr-livestream-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-livestream-section-title">
                            The Expansion Pillars
                        </h2>
                        <p className="vr-livestream-section-subtitle">
                            Scaling immersive experiences beyond physical boundaries
                        </p>

                        <div className="vr-livestream-pillar-list">
                            {[
                                {
                                    num: '01',
                                    title: 'The Infinite Classroom',
                                    desc: 'Turning a 20-person physical VR lab into a 2,000-person global seminar.'
                                },
                                {
                                    num: '02',
                                    title: 'Hybrid Event Mastery',
                                    desc: 'Host physical exhibitions while allowing virtual attendees to \'walk\' the floor and interact with speakers.'
                                },
                                {
                                    num: '03',
                                    title: 'Remote Expert Guidance',
                                    desc: 'Allowing a specialist in one country to lead a hands-on technical training session for a team in another.'
                                }
                            ].map((pillar, idx) => (
                                <div key={idx} className="vr-livestream-pillar-card">
                                    <div className="vr-livestream-pillar-number">
                                        {pillar.num}
                                    </div>
                                    <div>
                                        <h3 className="vr-livestream-pillar-title">
                                            {pillar.title}
                                        </h3>
                                        <p className="vr-livestream-pillar-desc">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Target Audience Value Props */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        Who Benefits from VR Live Streaming
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        Transforming how organizations connect and educate globally
                    </p>

                    <div className="vr-livestream-feature-grid">
                        {[
                            {
                                audience: 'Higher Education & MOOCs',
                                focus: 'Massive Scale',
                                benefit: 'Scaling specialized labs to thousands of remote students simultaneously, democratizing access to premium education.'
                            },
                            {
                                audience: 'Corporate HR & L&D',
                                focus: 'Global Consistency',
                                benefit: 'Consistent, high-impact \'Town Hall\' training for decentralized, global workforces with unified messaging.'
                            },
                            {
                                audience: 'Event & Media Agencies',
                                focus: 'Virtual Front-Row',
                                benefit: 'Offering virtual front-row seats for product launches or cultural performances to unlimited audiences worldwide.'
                            }
                        ].map((segment, idx) => (
                            <div key={idx} className="vr-livestream-audience-card">
                                <div className="vr-livestream-audience-badge">
                                    {segment.focus}
                                </div>
                                <h3 className="vr-livestream-audience-title">
                                    {segment.audience}
                                </h3>
                                <p className="vr-livestream-audience-desc">
                                    {segment.benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Global Connection Map */}
                <section className="vr-livestream-section alt-bg">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="vr-livestream-section-title">
                            Global Reach, Local Impact
                        </h2>
                        <p className="vr-livestream-section-subtitle">
                            Connect with audiences across continents in real-time
                        </p>

                        <div className="vr-livestream-stats-grid">
                            {[
                                { region: 'North America', connections: '5,000+', icon: '🌎' },
                                { region: 'Europe', connections: '3,500+', icon: '🌍' },
                                { region: 'Asia Pacific', connections: '8,000+', icon: '🌏' },
                                { region: 'Global Total', connections: '20K+', icon: '🌐' }
                            ].map((stat, idx) => (
                                <div key={idx} className="vr-livestream-stat-card">
                                    <div className="vr-livestream-stat-icon">
                                        {stat.icon}
                                    </div>
                                    <div className="vr-livestream-stat-value">
                                        {stat.connections}
                                    </div>
                                    <div className="vr-livestream-stat-label">
                                        {stat.region}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Comparison */}
                <section className="vr-livestream-section">
                    <h2 className="vr-livestream-section-title">
                        10x the Engagement
                    </h2>
                    <p className="vr-livestream-section-subtitle">
                        VR live streaming vs. traditional video conferencing
                    </p>

                    <div className="vr-livestream-comparison-grid">
                        {[
                            { metric: 'Attention Retention', vr: '92%', video: '35%' },
                            { metric: 'Active Participation', vr: '85%', video: '20%' },
                            { metric: 'Knowledge Retention', vr: '75%', video: '25%' },
                            { metric: 'Session Completion', vr: '88%', video: '45%' }
                        ].map((comparison, idx) => (
                            <div key={idx} className="vr-livestream-comparison-card">
                                <h3 className="vr-livestream-comparison-metric">
                                    {comparison.metric}
                                </h3>
                                <div className="vr-livestream-comparison-values">
                                    <div className="vr-livestream-comparison-item">
                                        <div className="vr-livestream-comparison-vr">
                                            {comparison.vr}
                                        </div>
                                        <div className="vr-livestream-comparison-label">
                                            VR Stream
                                        </div>
                                    </div>
                                    <div className="vr-livestream-comparison-vs">
                                        vs
                                    </div>
                                    <div className="vr-livestream-comparison-item">
                                        <div className="vr-livestream-comparison-video">
                                            {comparison.video}
                                        </div>
                                        <div className="vr-livestream-comparison-label">
                                            Video Call
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Melzo Live Section */}
                <section className="vr-livestream-why-melzo">
                    <div className="vr-livestream-why-melzo-content">
                        <h2 className="vr-livestream-section-title">
                            Why Melzo Live: Simplicity and Engagement
                        </h2>
                        <p className="vr-livestream-why-melzo-text">
                            Melzo removes the 'technical barrier' of VR, making it as easy to join an immersive 3D world as it is to join a standard video call, while maintaining 10x the engagement. No downloads, no complex setup—just click and immerse.
                        </p>

                        <div className="vr-livestream-why-melzo-stats">
                            {[
                                { label: 'Setup Time', value: '< 30s' },
                                { label: 'Concurrent Viewers', value: '10K+' },
                                { label: 'Platform Compatibility', value: '100%' },
                                { label: 'Engagement Boost', value: '10x' }
                            ].map((stat, idx) => (
                                <div key={idx} className="vr-livestream-why-melzo-stat">
                                    <div className="vr-livestream-why-melzo-stat-value">
                                        {stat.value}
                                    </div>
                                    <div className="vr-livestream-why-melzo-stat-label">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onBookDemo}
                            className="vr-livestream-btn-primary"
                        >
                            Start Broadcasting Today →
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
