import React from 'react'
export default function Guidelines({ onNavigate }) {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            color: '#2D2D2D',
            fontFamily: 'Inter, sans-serif'
        }}>

            {/* Back to Home Button */}
            <div style={{
                padding: '2rem 5%',
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
                <button
                    onClick={() => onNavigate && onNavigate('anubhav')}
                    style={{
                        background: '#FF9B50',
                        color: '#fff',
                        border: 'none',
                        padding: '0.8rem 2rem',
                        borderRadius: '30px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(255, 155, 80, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                    }}>
                    ← Back to Home
                </button>
            </div>

            {/* Hero Section */}
            <section style={{
                padding: '4rem 5%',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(95, 99, 79, 0.08) 0%, transparent 100%)'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    marginBottom: '1rem',
                    color: '#FF9B50',

                }}>
                    User Guidelines & Manual
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    opacity: 0.7,
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    Everything you need to know to safely operate and maintain your Melzo Anubhav 7D Interactive Lab
                </p>
            </section>

            {/* Main Content */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '3rem 5%'
            }}>
                {/* Section 1: Components Overview */}
                <Section title="1. Components Overview">
                    <p style={styles.paragraph}>
                        The Melzo Anubhav system consists of high-tech hardware designed for full sensory immersion.
                    </p>

                    <SubSection title="7D Interactive Chair">
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>Motion Control System:</strong> Powers the physical movement of the unit.
                            </li>
                            <li style={styles.listItem}>
                                <strong>Sensory Effects:</strong>
                                <ul style={styles.nestedList}>
                                    <li style={styles.listItem}><strong>Vibration Sensor:</strong> For tactile feedback.</li>
                                    <li style={styles.listItem}><strong>Air Blower:</strong> Provides hot and cold air effects.</li>
                                    <li style={styles.listItem}><strong>Water Mist System:</strong> Releases fine moisture during specific simulations.</li>
                                    <li style={styles.listItem}><strong>Fragrance:</strong> Disperses scents to match the environment.</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>
                                <strong>Movement:</strong> 180-degree bi-directional rotation and recliner functionality.
                            </li>
                        </ul>
                    </SubSection>

                    <SubSection title="VR Headset Kit">
                        <ul style={styles.list}>
                            <li style={styles.listItem}><strong>HMD:</strong> Head-mounted Display for high-fidelity visuals.</li>
                            <li style={styles.listItem}><strong>Controllers:</strong> Two touch controllers for interaction.</li>
                            <li style={styles.listItem}><strong>Charging:</strong> USB-C charger for power management.</li>
                        </ul>
                    </SubSection>
                </Section>

                {/* Section 2: Safety Precautions */}
                <Section title="2. Safety Precautions">
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Space:</strong> Maintain a clear <strong>3-foot radius</strong> around the chair, free from all obstructions.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Supervision:</strong> Children must be supervised by an adult at all times.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Electrical:</strong> Use a grounded outlet. Check all cables for frays or damage before use. Do not operate in wet or damp environments.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Health:</strong>
                            <ul style={styles.nestedList}>
                                <li style={styles.listItem}>Consult a doctor if you have varicose veins, deep vein thrombosis, or are pregnant.</li>
                                <li style={styles.listItem}>Take regular breaks to avoid fatigue.</li>
                            </ul>
                        </li>
                        <li style={styles.listItem}>
                            <strong>Motion Sickness:</strong> If you feel unwell, remove the headset immediately.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Handling:</strong> Avoid touching moving parts while in operation. Keep food and drinks away from the equipment.
                        </li>
                    </ul>
                </Section>

                {/* Section 3: Shifting & Transportation */}
                <Section title="3. Shifting & Transportation">
                    <p style={styles.paragraph}>
                        To safely move the 5D/7D chair, follow these specific steps:
                    </p>
                    <ol style={styles.orderedList}>
                        <li style={styles.listItem}>
                            <strong>Unplug Power:</strong> Disconnect from the power supply to prevent electrical hazards.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Empty Water:</strong> Locate the water containers under the side covers and <strong>empty them completely</strong> to prevent spills and reduce weight.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Lifting:</strong> <strong>Do not drag</strong> the chair. Lift it properly from the bottom section only.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Placement:</strong> Place only on a stable, flat surface to maintain integrity.
                        </li>
                    </ol>
                </Section>

                {/* Section 4: VR Headset & Software Usage */}
                <Section title="4. VR Headset & Software Usage">
                    <SubSection title="Basic Navigation">
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>Exit App:</strong> Press the <strong>Oculus button</strong> on the right controller to access the main menu and quit.
                            </li>
                            <li style={styles.listItem}>
                                <strong>Settings:</strong> Accessible via the app list to customize the VR experience.
                            </li>
                            <li style={styles.listItem}>
                                <strong>Connectivity:</strong> Connect to Wi-Fi via the Settings menu for full functionality.
                            </li>
                        </ul>
                    </SubSection>

                    <SubSection title="Advanced Features">
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <strong>PC Link:</strong> Connect via cable or Wi-Fi (AirLink) using the <strong>Meta Horizon</strong> app on a VR-ready PC.
                            </li>
                            <li style={styles.listItem}>
                                <strong>Software Updates:</strong> When available, an "Update" button will appear in a pop-up window. Ensure Wi-Fi is connected before starting the update.
                            </li>
                        </ul>
                    </SubSection>
                </Section>

                {/* Section 5: Using the VR Experience */}
                <Section title="5. Using the VR Experience">
                    <ol style={styles.orderedList}>
                        <li style={styles.listItem}>
                            <strong>Start:</strong> Launch the app → Select a Standard (Grade) → Choose a Subject (Physics, Chemistry, Biology, etc.).
                        </li>
                        <li style={styles.listItem}>
                            <strong>Explore:</strong> Click <strong>Experience</strong>, then press <strong>Explore</strong> to enter the simulation.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Experiment:</strong> Click <strong>NEXT</strong> to exit the setup and begin the hands-on experiment.
                        </li>
                        <li style={styles.listItem}>
                            <strong>End Test:</strong> Click <strong>Test Off</strong>. Note: The test automatically deactivates after 6 seconds of inactivity.
                        </li>
                    </ol>
                </Section>

                {/* Section 6: Support & Assistance */}
                <Section title="6. Support & Assistance">
                    <p style={styles.paragraph}>
                        If you require technical help or a first-time setup expert, contact the Melzo team:
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        <ContactCard
                            icon="📞"
                            title="Phone"
                            content="+91 96874 88818"
                            link="tel:+919687488818"
                        />
                        <ContactCard
                            icon="✉️"
                            title="Email"
                            content="contact@melzo.com"
                            link="mailto:contact@melzo.com"
                        />
                        <ContactCard
                            icon="📍"
                            title="Address"
                            content="Ship Maitri House, Bhatar Char Rasta, Surat, Gujarat 395017"
                        />
                    </div>
                </Section>
            </main>

            {/* Footer */}
            <footer style={{
                padding: '3rem 5%',
                textAlign: 'center',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                marginTop: '4rem'
            }}>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    © 2026 Melzo Anubhav. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

// Helper Components
function Section({ title, children }) {
    return (
        <section style={{
            marginBottom: '4rem',
            padding: '2.5rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
        }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                color: '#5F634F',
                letterSpacing: '-1px'
            }}>
                {title}
            </h2>
            {children}
        </section>
    );
}

function SubSection({ title, children }) {
    return (
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#2D2D2D'
            }}>
                {title}
            </h3>
            {children}
        </div>
    );
}

function ContactCard({ icon, title, content, link }) {
    const card = (
        <div style={{
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: link ? 'pointer' : 'default'
        }}
            onMouseEnter={(e) => {
                if (link) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }
            }}
            onMouseLeave={(e) => {
                if (link) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }
            }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.5' }}>{content}</p>
        </div>
    );

    return link ? <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>{card}</a> : card;
}

// Styles
const styles = {
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
        opacity: 0.85
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: '1rem 0'
    },
    orderedList: {
        paddingLeft: '1.5rem',
        margin: '1rem 0'
    },
    listItem: {
        fontSize: '1.05rem',
        lineHeight: '1.8',
        marginBottom: '1rem',
        opacity: 0.85,
        paddingLeft: '1.5rem',
        position: 'relative'
    },
    nestedList: {
        listStyle: 'none',
        paddingLeft: '1.5rem',
        marginTop: '0.5rem'
    }
};
