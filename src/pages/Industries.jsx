import React, { useState, useEffect } from 'react';
import mockStorage from '../services/mockStorage';

import AppNav from '../components/AppNav';
import GridBackground from '../components/GridBackground';
import IndustryModal from '../components/IndustryModal';
import '../styles/Industries.css';

export default function Industries({ onNavigate, isDarkTheme, onBookDemo, onContactUs, onToggleTheme }) {
    const [showModal, setShowModal] = useState(false);
    const [activeIndustry, setActiveIndustry] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        mockStorage.getIndustries()
            .then(res => {
                if (res && res.data && Array.isArray(res.data)) {
                    const visible = res.data.filter(i => i.isVisible !== false && i.status !== 'Draft');
                    setItems(visible);
                }
            })
            .catch(err => {
                console.error('Error loading industries:', err);
                setItems([]); // Fallback to empty array on error
            });
    }, []);

    const defaultIndustries = [
        {
            id: 'education',
            slug: 'education',
            title: 'Education',
            image: '/images/education_modal_vr.webp',
            summary: 'Curriculum-aligned VR labs for Science, Math, History, Geography.',
            impact: 'Improve student retention rates by up to 75% and save 60% on physical lab infrastructure.',
            details: '• K-12 Integration\n• STEM Labs\n• Teacher Training',
            modalTitle: 'Virtual Reality Solutions for Schools, Colleges & Training Institutes',
            fullSummary: 'Melzo designs VR solutions for education in India that support classroom learning, lab-based subjects, and skill development programs.',
            targetAudience: 'K–12 schools (CBSE, ICSE, State Boards)\nJunior colleges and degree colleges\nITIs, polytechnics, and vocational institutes\nEdTech and digital learning centers',
            problemsSolved: 'Limited physical lab access\nSafety risks in experiments\nLow student engagement\nConcept memorization without understanding',
            useCases: 'LAB|Science lab simulations|Conduct virtual experiments safely without physical lab constraints\nMATH|Mathematics and geometry visualization|Visualize complex 3D shapes and mathematical concepts interactively\nEXPLORE|History and geography immersion|Explore historical events and geographical locations in immersive VR\nCAREER|Career and skill exploration|Experience different careers and develop practical skills virtually',
            statsString: '120+|Schools\n50K+|Students\n75%|Better Retention',
            tags: ['K-12', 'STEM', 'Labs']
        },
        {
            id: 'csr',
            slug: 'csr',
            title: 'CSR & Foundations',
            image: '/images/csr-bg.webp',
            summary: 'Measurable impact, scalable deployment, and comprehensive reporting support.',
            impact: 'Directly reached 15,000+ beneficiaries in rural sectors with quantifiable skill improvements.',
            details: '• Rural Development\n• Skill Alignment\n• Impact Reports',
            modalTitle: 'CSR Impact through Immersive Tech',
            fullSummary: 'Empowering foundations to deliver scalable training and development in rural and underserved areas.',
            targetAudience: 'Corporate CSR Initiatives\nNGOs and Foundations\nRural Development Programs',
            problemsSolved: 'Logistical challenges in remote training\nDifficulty in measuring impact\nScalability of skilled trainers',
            useCases: 'SKILL|Vocational Training|Immersive modules for welding, carpentry, and electrical work\nHEALTH|Hygiene Awareness|Interactive simulations showing importance of sanitation\nFARM|Agricultural Best Practices|Virtual demonstrations of modern farming techniques\nSAFETY|Disaster Preparedness|Emergency response training for communities',
            statsString: '15K+|Beneficiaries\n50+|Villages Reached\n40%|Faster Learning',
            tags: ['Impact', 'Scale', 'Social Good']
        },
        {
            id: 'government',
            slug: 'government',
            title: 'Government & Public Sector',
            image: '/images/government-bg.webp',
            summary: 'Skill development, safety training, and immersive awareness programs.',
            impact: 'Standardized training for 50,000+ personnel with zero safety incidents during simulation.',
            details: '• Public Safety\n• Urban Planning\n• Civic Awareness',
            modalTitle: 'Government Solutions for Skilling & Safety',
            fullSummary: 'Providing standardized, high-quality training and awareness modules for public sector departments and civic bodies.',
            targetAudience: 'Safety Departments (Fire, Police)\nUrban Planning Bodies\nSkill Development Missions\nCivic Awareness Drives',
            problemsSolved: 'High cost of live training drills\nRisk to personnel during safety training\nLack of standardized training across regions',
            useCases: 'FIRE|Fire Safety Drills|Realistic fire fighting simulations without real fire risks\nTRAFFIC|Traffic Management|Simulations for traffic police training\nCIVIC|Waste Management|Education on segregation and processing for citizens\nURBAN|City Planning Visualization|Visualizing infrastructure projects before construction',
            statsString: '50K+|Personnel Trained\n0|Safety Incidents\n100%|Standardization',
            tags: ['Skilling', 'Safety', 'Civic']
        },
        {
            id: 'defence',
            slug: 'defence',
            title: 'Industry & Defence',
            image: '/images/defence-bg.webp',
            summary: 'Simulation-based training with reduced risk and cost for mission-critical operations.',
            impact: 'Reduced training costs by 40% while increasing scenario exposure by 300%.',
            details: '• Tactical Sims\n• Equipment Handling\n• Strategy Planning',
            modalTitle: 'Advanced Simulation for Defence & Industry',
            fullSummary: 'High-fidelity simulations for critical operations, ensuring readiness and reducing training overheads.',
            targetAudience: 'Defence Forces\nHeavy Industries\nManufacturing Plants\nAviation & Aerospace',
            problemsSolved: 'Expensive equipment wear and tear\nRisk to life in live combat/industrial drills\nLimited availability of training scenarios',
            useCases: 'TACTICAL|Combat Scenarios|Mission planning and execution in virtual terrain\nMAINTENANCE|Heavy Machinery Repair|Step-by-step repair guides for complex engines\nFLIGHT|Drone/Flight Sims|Pilot training without risking expensive aircraft\nHAZARD|Industrial Safety|navigating hazardous environments safely',
            statsString: '40%|Cost Reduction\n300%|Scenario Exposure\n24/7|Training Availability',
            tags: ['Simulation', 'Tactical', 'Training']
        }
    ];

    const industries = items.length > 0 ? items : defaultIndustries;

    const handleExploreClick = (e, industry) => {
        e.preventDefault();
        // Prepare data with defaults if dynamic data is partial (though usually it should be complete)
        // Check if we need to split tags if they come as string
        const preparedIndustry = {
            ...industry,
            // Only split if it's a string, otherwise keep as is
            tags: typeof industry.tags === 'string' ? industry.tags.split(',') : (industry.tags || [])
        };
        setActiveIndustry(preparedIndustry);
        setShowModal(true);
    };

    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="industries"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>

                {/* Hero Section */}
                <section style={{
                    paddingTop: '120px',
                    paddingBottom: '4rem',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    background: isDarkTheme
                        ? 'linear-gradient(180deg, rgba(255, 155, 80, 0.05) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(255, 155, 80, 0.08) 0%, transparent 100%)',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <GridBackground isDarkTheme={isDarkTheme} />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1rem',
                            color: '#FF9B50'
                        }}>
                            Industries We Serve
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            opacity: 0.8,
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Pioneering Virtual Reality solutions tailored for specific industrial needs and sectors.
                        </p>
                    </div>
                </section>

                {/* Industries Grid */}
                <section style={{
                    padding: '2rem 5% 6rem 5%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3rem'
                }}>
                    {industries.map((industry, index) => {
                        const id = industry.id || industry.slug || industry._id || index;
                        const imageUrl = industry.image || '/images/default-industry.jpg';
                        // Handle tags potentially being a CSV string if from DB or array
                        const tagsList = Array.isArray(industry.tags)
                            ? industry.tags
                            : (typeof industry.tags === 'string' ? industry.tags.split(',') : []);

                        return (
                            <div
                                key={id}
                                className={`horizontal-card ${!isDarkTheme ? 'light-theme-card' : ''}`}
                                style={{
                                    '--accent': '#FF9B50'
                                }}
                            >
                                <div className="image-box">
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: `url(${imageUrl}), linear-gradient(135deg, #FF9B50 0%, #333 100%)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }} />
                                </div>

                                <div className="main-content-box">
                                    <div className="header-info">
                                        <h2>{industry.title}</h2>
                                        <p className="summary">{industry.summary}</p>
                                    </div>

                                    <div className="expandable-content">
                                        <div className="inner-wrap">
                                            <span className="impact-label">IMPACT</span>
                                            <p>{industry.impact}</p>
                                            <div className="extra-details">
                                                {(industry.details || '').split('\n').map((line, i) => (
                                                    <p key={i}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        onClick={(e) => handleExploreClick(e, industry)}
                                        className="explore-link"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Explore possibilities &rarr;
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* CTA Section */}
                <section style={{
                    padding: '4rem 5%',
                    background: 'linear-gradient(135deg, rgba(255, 155, 80, 0.1) 0%, transparent 100%)',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            marginBottom: '1.5rem',
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                        }}>
                            Ready to Transform Your Industry?
                        </h2>
                        <button
                            onClick={onContactUs}
                            style={{
                                background: '#FF9B50',
                                color: '#fff',
                                border: 'none',
                                padding: '1.2rem 3rem',
                                cursor: 'pointer',
                                borderRadius: '30px',
                                transition: 'all 0.3s ease',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                            }}>
                            Contact Sales
                        </button>
                    </div>
                </section>

                {/* Single Dynamic Modal */}
                <IndustryModal
                    industry={activeIndustry}
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    isDarkTheme={isDarkTheme}
                />
            </div>
        </>
    );
}
