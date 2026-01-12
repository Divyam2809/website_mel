import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import Guidelines from '../Guidelines';
import GridBackground from '../components/GridBackground';
import ExpandableText from '../components/ExpandableText';



// 3D Model Component - loads the GLB file with dynamic path
function ChairModel({ modelPath }) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={30} position={[0, +0.2, 0]} rotation={[0, Math.PI * 0.15, 0]} />;
}

// Fallback component for Suspense
function LoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#5F634F" wireframe />
        </mesh>
    );
}

// Video Gallery Component
function VideoGallery({ videos, isDarkTheme }) {
    if (!videos || videos.length === 0) return null;

    return (
        <section style={{
            padding: '5rem 5%',
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#fff'
        }}>
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                letterSpacing: '-1px',
                marginBottom: '3rem',
                textAlign: 'center',
                color: '#FF9B50'
            }}>
                Video Gallery
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {videos.map((video) => (
                    <div key={video.id} style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        backgroundColor: isDarkTheme ? '#262626' : '#fff',
                        maxWidth: '1200px',
                        width: '100%',
                        margin: '0 auto'
                    }}>
                        {/* Force hide controls with CSS */}
                        <style>{`
                            video::-webkit-media-controls { display: none !important; }
                            video::-webkit-media-controls-enclosure { display: none !important; }
                        `}</style>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            style={{
                                width: '100%',
                                display: 'block',
                                backgroundColor: '#000',
                                pointerEvents: 'none' // Prevent interaction
                            }}
                            poster={video.thumbnail ? `/assets/videos/${video.thumbnail}` : undefined}
                        >
                            <source src={`/assets/videos/${video.filename}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                ))}
            </div>
        </section>
    );
}

// Photo Gallery Component
function PhotoGallery({ photos, isDarkTheme }) {
    if (!photos || photos.length === 0) return null;

    return (
        <section style={{
            padding: '5rem 5%',
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff'
        }}>
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                letterSpacing: '-1px',
                marginBottom: '3rem',
                textAlign: 'center',
                color: '#FF9B50'
            }}>
                Photo Gallery
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {photos.map((photo) => (
                    <div key={photo.id} style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        paddingBottom: '100%', // 1:1 aspect ratio
                        backgroundColor: '#fff'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.03)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                            const overlay = e.currentTarget.querySelector('.photo-overlay');
                            if (overlay) overlay.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                            const overlay = e.currentTarget.querySelector('.photo-overlay');
                            if (overlay) overlay.style.opacity = '0';
                        }}>
                        <img
                            src={`/assets/photos/${photo.filename}`}
                            alt={photo.title}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div
                            className="photo-overlay"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '1rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                color: '#fff',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}>
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: 700
                            }}>
                                {photo.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Bento Grid Component for Features
function BentoGrid({ isDarkTheme }) {
    const features = [
        {
            id: 1,
            title: "7D Labs Experiment",
            description: "Experience curriculum-based 7D lab experiments with Melzo Anubhav's virtual reality-powered labs like never before. Students can safely conduct physics experiments, chemical reactions, biological dissections, and engineering simulations in an immersive environment. Designed for schools, universities, and training centers, these lifelike 7D simulations bring science to life. From exploring Newton's Laws to dissecting virtual organisms, every experience is hands-on and engaging. With motion effects, real-time interaction, and stunning visuals, Melzo Anubhav overcomes the limitations of traditional labs.",
            // icon: "🔬",
            gradient: "linear-gradient(135deg, #5F634F 0%, #4a4d3f 100%)",
            glowColor: "rgba(95, 99, 79, 0.3)",
            size: "large" // Takes 2 columns and 2 rows
        },
        {
            id: 2,
            title: "VR Built-In",
            description: "Melzo Anubhav brings education to life through immersive Virtual Reality, allowing users to explore high-quality 3D simulations, lifelike virtual labs, and interactive content with unmatched clarity and depth. Students, educators, and professionals can experience hands-on training ,conduct virtual experiments, and engage in immersive storytelling—making complex concepts easier to grasp. With support for advanced VR headsets such as Meta Quest 2 and Meta Quest 3s, the experience is smooth, intuitive, and engaging. Melzo Anubhav redefines education by extending learning beyond books and screens into a truly experiential and impactful journey.",
            // icon: "🥽",
            gradient: "linear-gradient(135deg, #8B7E74 0%, #6d6157 100%)",
            glowColor: "rgba(139, 126, 116, 0.3)",
            size: "large"
        },
        {
            id: 3,
            title: "Virtual Tours",
            description: "Step into history and exploration like never before with Melzo Anubhav's interactive virtual tours. Experience the Apollo 11 Moon Landing, dive into an underwater adventure, witness African wildlife, and explore the beauty of Italy—all from your seat. Powered by 7D virtual reality and immersive effects, Melzo Anubhav lets you feel the atmosphere of historical events and walk through global landmarks as if you were truly there. Perfect for students, educators, and history enthusiasts, these realistic simulations make learning engaging and unforgettable. Melzo Anubhav turns history into an experience because the best way to learn it is to live it.",
            // icon: "🌍",
            gradient: "linear-gradient(135deg, #A0937D 0%, #857a68 100%)",
            glowColor: "rgba(160, 147, 125, 0.3)",
            size: "large"
        },
        {
            id: 4,
            title: "Immersive Ease",
            description: "Melzo Anubhav is thoughtfully designed to deliver both immersive education and superior comfort. The chair features premium cushioning made with high-quality, leather-like materials that offer a soft, supportive, and durable seating experience. This carefully chosen upholstery provides a smooth finish and luxurious feel, ensuring users remain comfortable during extended interactive sessions. Its easy-to-clean and wear-resistant surface makes it ideal for continuous use in educational environments such as schools, labs, and training centers.",
            // icon: "💺",
            gradient: "linear-gradient(135deg, #6B7C59 0%, #556347 100%)",
            glowColor: "rgba(107, 124, 89, 0.3)",
            size: "large" // Takes 2 columns, 1 row
        }
    ];

    return (
        <section style={{
            padding: '5rem 5%',
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(95, 99, 79, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(160, 147, 125, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '2s',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        marginBottom: '1rem',
                        color: '#FF9B50'
                    }}>
                        Core Offerings & Features
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        opacity: 0.7,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Discover the future of immersive education with cutting-edge VR technology
                    </p>
                </div>

                {/* Enhanced Bento Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                    gridAutoRows: '200px'
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            style={{
                                background: isDarkTheme ? '#262626' : '#ffffff',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                color: isDarkTheme ? '#FFF' : '#2D2D2D',
                                position: 'relative',
                                overflow: 'hidden',
                                gridColumn: feature.size === 'large' ? 'span 2' : feature.size === 'wide' ? 'span 2' : 'span 2',
                                gridRow: feature.size === 'large' ? 'span 2' : 'span 1',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                boxShadow: isDarkTheme ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                                border: isDarkTheme ? '1px solid #333' : '1px solid rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.25)';
                                e.currentTarget.style.borderColor = '#FF9B50';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                            }}
                        >
                            {/* Orange accent bar on left */}
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                background: '#FF9B50',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }} className="accent-bar" />

                            {/* Content */}
                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: feature.size === 'large' ? '2rem' : '1.5rem',
                                        fontWeight: 700,
                                        marginBottom: '1rem',
                                        letterSpacing: '-0.5px',
                                        color: isDarkTheme ? '#FFF' : '#000'
                                    }}>
                                        {feature.title}
                                    </h3>
                                </div>
                                <p style={{
                                    fontSize: feature.size === 'large' ? '1rem' : '0.95rem',
                                    lineHeight: '1.7',
                                    opacity: 0.8,
                                    color: isDarkTheme ? '#EAEAEA' : '#2D2D2D'
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add CSS animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes shimmer {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes blobMorph {
                    0%, 100% {
                        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    25% {
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                        transform: translate(-50%, -50%) rotate(90deg);
                    }
                    50% {
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                        transform: translate(-50%, -50%) rotate(180deg);
                    }
                    75% {
                        border-radius: 70% 30% 40% 60% / 40% 70% 50% 30%;
                        transform: translate(-50%, -50%) rotate(270deg);
                    }
                }

                /* Responsive adjustments */
                @media (max-width: 1024px) {
                    .bento-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }

                @media (max-width: 640px) {
                    .bento-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

import AppNav from '../components/AppNav';

// Feature Item with Scroll & Hover Animation
function FeatureItem({ feature, index, isDarkTheme }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    return (
        <div
            ref={domRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1}s`
            }}
        >
            <div
                style={{
                    paddingLeft: '1.5rem',
                    borderLeft: `4px solid ${isDarkTheme ? '#333' : '#e0e0e0'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    height: '100%',
                    cursor: 'default'
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderLeftColor = '#FF9B50';
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.background = isDarkTheme ? 'linear-gradient(90deg, rgba(255,155,80,0.05) 0%, transparent 100%)' : 'linear-gradient(90deg, rgba(255,155,80,0.05) 0%, transparent 100%)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderLeftColor = isDarkTheme ? '#333' : '#e0e0e0';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'transparent';
                }}
            >
                <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '0.8rem',
                    color: isDarkTheme ? '#fff' : '#000',
                    lineHeight: '1.2'
                }}>
                    {feature.title}
                </h3>
                <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: isDarkTheme ? '#AAA' : '#666',
                    margin: 0
                }}>
                    {feature.desc}
                </p>
            </div>
        </div>
    );
}

export default function AnubhavProduct({ onNavigate, isDarkTheme, onBookDemo, onToggleTheme }) {
    // const [mediaContent, setMediaContent] = useState({ videos: [], photos: [] }); // Removed dynamic state

    // 3D Model Carousel State
    const [currentModelIndex, setCurrentModelIndex] = useState(0);

    // News Articles State
    const [visibleArticles, setVisibleArticles] = useState(3);

    // Color Options State
    const colorOptions = [
        { name: 'Purple', image: '7d_chair/purple.webp', color: '#9C27B0' },
        { name: 'Sky Blue', image: '7d_chair/sky.webp', color: '#03A9F4' },
        { name: 'White', image: '7d_chair/white2.webp', color: '#F5F5F5' },
        { name: 'Yellow', image: '7d_chair/yellow.webp', color: '#FFEB3B' },
        { name: 'Brown', image: '7d_chair/brown.webp', color: '#795548' },
        { name: 'Green', image: '7d_chair/green.webp', color: '#4CAF50' },
        { name: 'Pink', image: '7d_chair/pink.webp', color: '#E91E63' },
    ];
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const nextColor = () => {
        setSelectedColorIndex((prev) => (prev + 1) % colorOptions.length);
    };

    const prevColor = () => {
        setSelectedColorIndex((prev) => (prev - 1 + colorOptions.length) % colorOptions.length);
    };


    const allArticles = [
        {
            publication: 'Indian Express',
            publicationColor: '#D32F2F',
            date: 'January 12, 2025',
            title: 'In a first, 5D laboratory in Surat school to help students \'hear, visualise\' curriculum',
            description: 'On Friday, the Sarvoday trust-run school at Bhatar launched the Melzo Anubhav 5D lab, which the school authorities claimed, is the first initiative of its kind for students.',
            image: '/images/news_indian_express.webp',
            link: '#'
        },
        {
            publication: 'News18 Gujarat',
            publicationColor: '#FF6B00',
            date: 'January 14, 2025',
            title: 'Surat student\'s turn! India\'s first 5D lab launched in this school',
            description: 'IG Desai School in Surat has launched India\'s first 5D lab. This lab will help school students understand science and social science subjects easily and experience them in re...',
            image: '/images/news_news18_gujarat.webp',
            link: '#'
        },
        {
            publication: 'Divya Bhaskar',
            publicationColor: '#E91E63',
            date: 'January 2025',
            title: 'IIT pass Gujarati created 5D lab for children',
            description: 'Students can see the outside world from a small room with 5D virtual-sensory chair; Education with VR, AR, AI\'s vision',
            image: '/images/gujarati-newspaper-5d-lab.webp',
            link: '#'
        },
        {
            publication: 'Times of India',
            publicationColor: '#000',
            date: 'January 25, 2025',
            title: 'Anubhav VR Lab: Revolutionizing Classroom Learning',
            description: 'Students can now explore complex scientific concepts through immersive VR experiences, making learning interactive and fun.',
            image: '/images/toi-vr-chairs-smc-full.webp',
            link: '#'
        },
        {
            publication: 'Education World',
            publicationColor: '#4CAF50',
            date: 'February 2, 2025',
            title: 'Top EdTech Innovations of 2025: Melzo Anubhav Leads the Way',
            description: 'Recognized for its impact on student engagement and retention, Melzo Anubhav is setting new standards in educational technology.',
            image: '/images/education-img.webp',
            link: '#'
        },
        {
            publication: 'Digital Learning',
            publicationColor: '#2196F3',
            date: 'February 10, 2025',
            title: 'Bridging the Gap: How 5D Labs are Transforming Rural Education',
            description: 'Access to advanced learning tools is no longer limited to urban centers. 5D labs are bringing world-class education to every corner of India.',
            image: '/assets/vr_elearning_hero.webp',
            link: '#'
        }
    ];


    // Array of chair models - Using 3D model from assets folder
    const chairModels = [
        { path: "/assets/recliner_chair.glb", name: "7D Chair", color: "#8B7E74" }
    ];


    // Static media content
    const mediaContent = {
        videos: [
            { id: 1, filename: 'Anubhav.mp4', title: 'Melzo Anubhav Experience' }
        ],
        photos: [
            { id: 1, filename: 'photo2.jpg', title: 'Immersion in Action' },
            { id: 2, filename: 'photo3.jpg', title: 'High fidelity learning' },
            { id: 3, filename: 'photo2 copy.jpg', title: 'Classroom Setup' },
            { id: 4, filename: 'photo2 copy 2.jpg', title: 'Student Engagement' }
        ]
    };

    // Carousel navigation functions
    const nextModel = () => {
        setCurrentModelIndex((prev) => (prev + 1) % chairModels.length);
    };

    const prevModel = () => {
        setCurrentModelIndex((prev) => (prev - 1 + chairModels.length) % chairModels.length);
    };


    return (
        <>
            <AppNav
                onNavigate={onNavigate}
                isDarkTheme={isDarkTheme}
                onToggleTheme={onToggleTheme}
                onBookDemo={onBookDemo}
                currentPage="anubhav"
            />
            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif' }}>


                <main style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    minHeight: '80vh',
                    alignItems: 'center',
                    padding: '120px 5% 0 5%',
                    gap: '3rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Grid Overlay Background */}
                    <GridBackground isDarkTheme={isDarkTheme} />

                    {/* Left Side: Content */}
                    <section style={{ maxWidth: '550px', position: 'relative', zIndex: 2 }}>

                        <img
                            src="/assets/Melzo_Anubhav_Logo.png"
                            alt="Melzo Anubhav Logo"
                            style={{
                                maxWidth: '250px',
                                marginBottom: '1.5rem',
                                filter: isDarkTheme ? 'brightness(0) invert(1)' : 'none'
                            }}
                        />

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            color: isDarkTheme ? '#FFFFFF' : '#000'
                        }}>

                            India's <span style={{ color: '#FF9B50' }}>First</span> Interactive <span style={{ color: '#FF9B50' }}>7D</span> Lab
                        </h1>

                        <hr style={{
                            border: 'none',
                            borderTop: '2px solid #FF9B50',
                            opacity: 0.75,
                            width: '100%'
                        }} />
                        <p style={{
                            fontSize: '1.2rem',
                            opacity: 0.8,
                            marginTop: '2.0rem',
                            lineHeight: '1.6'
                        }}>
                            Experience the future of education
                        </p>
                        <div style={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}>
                            <button style={{
                                background: '#FF9B50',
                                color: '#fff',
                                border: 'none',
                                padding: '1.0rem 2.0rem',
                                cursor: 'pointer',
                                borderRadius: '30px',
                                transition: 'all 0.3s ease',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(255, 155, 80, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                                }}>
                                Book A Demo
                            </button>
                            <button
                                onClick={() => onNavigate && onNavigate('guidelines')}
                                style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: isDarkTheme ? '2px solid #FFFFFF' : '2px solid #2D2D2D',
                                    padding: '1.0rem 2.0rem',
                                    cursor: 'pointer',
                                    borderRadius: '30px',
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#2D2D2D';
                                    e.target.style.color = '#fff';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    e.target.style.transform = 'translateY(0)';
                                }}>
                                View Guidelines
                            </button>
                            <button
                                onClick={() => onNavigate && onNavigate('fivedchair')}
                                style={{
                                    background: 'transparent',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    border: isDarkTheme ? '2px solid #FFFFFF' : '2px solid #2D2D2D',
                                    padding: '1.0rem 2.0rem',
                                    cursor: 'pointer',
                                    borderRadius: '30px',
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#FF9B50';
                                    e.target.style.color = '#fff';
                                    e.target.style.borderColor = '#FF9B50';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    e.target.style.borderColor = isDarkTheme ? '#FFFFFF' : '#2D2D2D';
                                    e.target.style.transform = 'translateY(0)';
                                }}>
                                Switch to 5D Lab
                            </button>
                        </div>
                        <div style={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '3rem',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            opacity: 0.6
                        }}>
                            {/* <div>
                            <div style={{ fontWeight: 700, fontSize: '1.5rem', opacity: 1, color: '#5F634F' }}>360°</div>
                            <div>Rotation</div>
                        </div> */}
                            {/* <div>
                            <div style={{ fontWeight: 700, fontSize: '1.5rem', opacity: 1, color: '#5F634F' }}>3D</div>
                            <div>View</div>
                        </div> */}
                        </div>
                    </section>

                    {/* Right Side: 3D Viewer */}
                    <section style={{
                        height: '70vh',
                        minHeight: '500px',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <Canvas
                                camera={{ position: [2, 1, 4.5], fov: 55 }}
                                dpr={[1, 2]}
                                style={{ cursor: 'grab' }}
                            >
                                <Suspense fallback={<LoadingFallback />}>
                                    <ambientLight intensity={0.5} />
                                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                                    <Environment preset="city" />
                                    <ChairModel key={currentModelIndex} modelPath={chairModels[currentModelIndex].path} />
                                    <OrbitControls
                                        makeDefault
                                        autoRotate
                                        autoRotateSpeed={0.5}
                                        enableZoom={false}
                                        minPolarAngle={Math.PI / 4}
                                        maxPolarAngle={Math.PI / 1.5}
                                    />
                                </Suspense>
                            </Canvas>
                        </div>
                    </section>

                </main>


                {/* Modern Feature Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#1A1A1A' : '#fff'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        letterSpacing: '-1px',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        color: '#FF9B50'
                    }}>
                        Get To Know
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '4rem',
                        maxWidth: '1200px',
                        margin: '4rem auto',
                        padding: '0 2rem'
                    }}>
                        {/* Feature Block 1: 7D Labs Experiment */}
                        <div style={{
                            padding: '2rem 0',
                            borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                            transition: 'all 0.4s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderTopColor = '#FF9B50';
                                e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderTopColor = isDarkTheme ? '#333' : '#eee';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                backgroundColor: isDarkTheme ? '#2d2d2d' : '#f5f5f5',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                            }}>
                                <img
                                    src="/images/7d_chair/Person using VR headset.webp"
                                    alt="7D Labs Experiment"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h2 style={{
                                fontSize: '1.75rem',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                color: isDarkTheme ? '#FFF' : '#000000',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{ color: '#FF9B50' }}>/</span>
                                7D Labs Experiment
                            </h2>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.8',
                                color: isDarkTheme ? '#AAA' : '#666',
                                maxWidth: '500px'
                            }}>
                                Experience curriculum-based 7D lab experiments with Melzo Anubhav's virtual reality-powered labs. Students can conduct physics experiments, chemical reactions, biological dissections, and engineering simulations in an immersive environment. Designed for schools, universities, and training centers, these lifelike 7D simulations bring science to life. From exploring Newton's Laws to dissecting virtual organisms, every experience is hands-on and engaging.
                            </p>
                        </div>

                        {/* Feature Block 2: VR Built-In */}
                        <div style={{
                            padding: '2rem 0',
                            borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                            transition: 'all 0.4s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderTopColor = '#FF9B50';
                                e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderTopColor = isDarkTheme ? '#333' : '#eee';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                backgroundColor: isDarkTheme ? '#2d2d2d' : '#f5f5f5',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                            }}>
                                <img
                                    src="/images/7d_chair/VR headset and controllers.webp"
                                    alt="VR Built-In"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h2 style={{
                                fontSize: '1.75rem',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                color: isDarkTheme ? '#FFF' : '#000000',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{ color: '#FF9B50' }}>/</span>
                                VR Built-In
                            </h2>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.8',
                                color: isDarkTheme ? '#AAA' : '#666',
                                maxWidth: '500px'
                            }}>
                                Melzo Anubhav brings education to life through immersive Virtual Reality, allowing users to explore high-quality 3D simulations, lifelike virtual labs, and interactive content with unmatched clarity and depth. Students, educators, and professionals can experience hands-on training, conduct virtual experiments, and engage in immersive storytelling—making complex concepts easier to grasp. With support for advanced VR headsets such as Meta Quest 2 and Meta Quest 3s, the experience is smooth, intuitive, and engaging.
                            </p>
                        </div>

                        {/* Feature Block 3: Virtual Tours */}
                        <div style={{
                            padding: '2rem 0',
                            borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                            transition: 'all 0.4s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderTopColor = '#FF9B50';
                                e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderTopColor = isDarkTheme ? '#333' : '#eee';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                backgroundColor: isDarkTheme ? '#2d2d2d' : '#f5f5f5',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                            }}>
                                <img
                                    src="/images/7d_chair/Virtual wildlife encounter with tiger.webp"
                                    alt="Virtual Tours"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h2 style={{
                                fontSize: '1.75rem',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                color: isDarkTheme ? '#FFF' : '#000000',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{ color: '#FF9B50' }}>/</span>
                                Virtual Tours
                            </h2>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.8',
                                color: isDarkTheme ? '#AAA' : '#666',
                                maxWidth: '500px'
                            }}>
                                Step into history and exploration like never before with Melzo Anubhav's interactive virtual tours. Experience the Apollo 11 Moon Landing, dive into an underwater adventure, witness African wildlife, and explore the beauty of Italy—all from your seat. Powered by 7D virtual reality and immersive effects, Melzo Anubhav lets you feel the atmosphere of historical events and walk through global landmarks as if you were truly there. Perfect for students, educators, and history enthusiasts.
                            </p>
                        </div>

                        {/* Feature Block 4: Immersive Ease */}
                        <div style={{
                            padding: '2rem 0',
                            borderTop: isDarkTheme ? '1px solid #333' : '1px solid #eee',
                            transition: 'all 0.4s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderTopColor = '#FF9B50';
                                e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderTopColor = isDarkTheme ? '#333' : '#eee';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                backgroundColor: isDarkTheme ? '#2d2d2d' : '#f5f5f5',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                            }}>
                                <img
                                    src="/images/7d_chair/Close-up of premium chair upholstery.webp"
                                    alt="Immersive Ease"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h2 style={{
                                fontSize: '1.75rem',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                color: isDarkTheme ? '#FFF' : '#000000',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{ color: '#FF9B50' }}>/</span>
                                Immersive Ease
                            </h2>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.8',
                                color: isDarkTheme ? '#AAA' : '#666',
                                maxWidth: '500px'
                            }}>
                                Melzo Anubhav is thoughtfully designed to deliver both immersive education and superior comfort. The chair features premium cushioning made with high-quality, leather-like materials that offer a soft, supportive, and durable seating experience. This carefully chosen upholstery provides a smooth finish and luxurious feel, ensuring users remain comfortable during extended interactive sessions. Its easy-to-clean and wear-resistant surface makes it ideal for continuous use in educational environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#151515' : '#FAFAFA'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            letterSpacing: '-1px',
                            marginBottom: '3rem',
                            textAlign: 'center',
                            color: '#FF9B50'
                        }}>
                            Key Features
                        </h2>

                        <div style={{
                            width: '100%',
                            maxWidth: '1000px',
                            margin: '0 auto',
                            aspectRatio: '16/9',
                            backgroundColor: '#000',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            border: isDarkTheme ? '1px solid #333' : '1px solid #eee'
                        }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                                <source src="/assets/videos/AnubhavFeatures.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#1A1A1A' : '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(95, 99, 79, 0.03) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '4rem'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                fontWeight: 900,
                                letterSpacing: '-1px',
                                marginBottom: '1rem',
                                color: '#FF9B50'
                            }}>
                                Proven Impact & Recognition
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                opacity: 0.7,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Our commitment to excellence is reflected in our achievements and the success of our users
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '3rem',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            {/* Stat 1: Publications */}
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                backgroundColor: isDarkTheme ? '#262626' : '#ffffff',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                border: '2px solid transparent', // Added to prevent layout shift
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#FF9B50'; // Turn border orange
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.25)'; // Orange shadow
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'transparent'; // Reset border
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; // Reset shadow
                                }}>

                                {/* Decorative corner accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '80px',
                                    height: '80px',

                                    pointerEvents: 'none'
                                }} />

                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontWeight: 600,
                                    opacity: 0.6,
                                    marginBottom: '1rem'
                                }}>
                                    COVERED IN
                                </div>
                                <div style={{
                                    fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                                    fontWeight: 900,
                                    color: '#FF9B50',
                                    letterSpacing: '-3px',
                                    marginBottom: '0.5rem',
                                    lineHeight: '1'
                                }}>
                                    13+
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: isDarkTheme ? '#E0E0E0' : '#2D2D2D',
                                    lineHeight: '1.4'
                                }}>
                                    Renowned Publications
                                </div>
                            </div>

                            {/* Stat 2: Learning Retention */}
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                backgroundColor: isDarkTheme ? '#262626' : '#ffffff',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                border: '2px solid transparent', // Added to prevent layout shift
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#FF9B50'; // Turn border orange
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.25)'; // Orange shadow
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'transparent'; // Reset border
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; // Reset shadow
                                }}>

                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '80px',
                                    height: '80px',

                                    pointerEvents: 'none'
                                }} />

                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontWeight: 600,
                                    opacity: 0.6,
                                    marginBottom: '1rem'
                                }}>
                                    UPTO
                                </div>
                                <div style={{
                                    fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                                    fontWeight: 900,
                                    color: '#FF9B50',
                                    letterSpacing: '-3px',
                                    marginBottom: '0.5rem',
                                    lineHeight: '1'
                                }}>
                                    75%
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: isDarkTheme ? '#E0E0E0' : '#2D2D2D',
                                    lineHeight: '1.4'
                                }}>
                                    Increased Learning Retention
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Choose Your Style Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#151515' : '#FAFAFA',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            letterSpacing: '-1px',
                            marginBottom: '1rem',
                            color: '#FF9B50'
                        }}>
                            Choose Your Style
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            opacity: 0.7,
                            marginBottom: '3rem',
                            color: isDarkTheme ? '#AAA' : '#666'
                        }}>
                            Available in a variety of colors to match your institution's theme
                        </p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2rem'
                        }}>
                            {/* Prev Button */}
                            <button
                                onClick={prevColor}
                                style={{
                                    background: isDarkTheme ? '#333' : '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    color: isDarkTheme ? '#fff' : '#333',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.style.backgroundColor = '#FF9B50';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.backgroundColor = isDarkTheme ? '#333' : '#fff';
                                    e.currentTarget.style.color = isDarkTheme ? '#fff' : '#333';
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            {/* Main Image Preview */}
                            <div style={{
                                width: '100%',
                                maxWidth: '800px',
                                height: '500px',
                                backgroundColor: isDarkTheme ? '#262626' : '#fff',
                                borderRadius: '20px',
                                padding: '2rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative'
                            }}>
                                <img
                                    src={`/images/${colorOptions[selectedColorIndex].image}`}
                                    alt={colorOptions[selectedColorIndex].name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        transition: 'all 0.3s ease'
                                    }}
                                />

                                {/* Label */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    background: 'rgba(0,0,0,0.6)',
                                    color: '#fff',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '30px',
                                    backdropFilter: 'blur(5px)',
                                    fontWeight: 600
                                }}>
                                    {colorOptions[selectedColorIndex].name}
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextColor}
                                style={{
                                    background: isDarkTheme ? '#333' : '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    color: isDarkTheme ? '#fff' : '#333',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.style.backgroundColor = '#FF9B50';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.backgroundColor = isDarkTheme ? '#333' : '#fff';
                                    e.currentTarget.style.color = isDarkTheme ? '#fff' : '#333';
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Anubhav 7D Chair Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#1A1A1A' : '#fff'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            letterSpacing: '-1px',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                            color: '#FF9B50'
                        }}>
                            Why Choose Melzo Anubhav 7D Chair
                        </h2>

                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: isDarkTheme ? '#AAA' : '#666',
                            textAlign: 'center',
                            maxWidth: '800px',
                            margin: '0 auto 4rem auto'
                        }}>
                            Melzo Anubhav is <span style={{ color: '#FF9B50' }}>India's First</span> interactive education revolution powered by virtual reality! Experience premium features with our 7D offering.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '3rem',
                            rowGap: '4rem'
                        }}>
                            {[
                                { title: "Built for Institutions", desc: "Designed specifically for schools, universities, and training centers." },
                                { title: "Immersive Learning", desc: "Blends cutting-edge motion effects with virtual reality simulations." },
                                { title: "Hands-on Virtual Experiments", desc: "Enable lifelike science and technology experiments in a safe, interactive environment." },
                                { title: "Historical Exploration", desc: "Let users journey through the pages of history like never before." },
                                { title: "Multi-Dimensional Education", desc: "Brings science, technology, and history to life in an entirely new dimension." },
                                { title: "Future-Ready Platform", desc: "The future of education isn't just coming—it's already here with Melzo Anubhav! Experience the future with our 7D premium features." }
                            ].map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    feature={feature}
                                    index={index}
                                    isDarkTheme={isDarkTheme}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compare Section */}
                <section style={{
                    padding: '5rem 5%',
                    backgroundColor: isDarkTheme ? '#151515' : '#fff',
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            letterSpacing: '-1px',
                            marginBottom: '3rem',
                            textAlign: 'center',
                            color: '#FF9B50'
                        }}>
                            VR Chair Comparison
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {/* 5D Chair Card */}
                            <div style={{
                                padding: '2.5rem',
                                borderRadius: '20px',
                                backgroundColor: isDarkTheme ? '#262626' : '#fff',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                border: isDarkTheme ? '1px solid #333' : '1px solid #eaeaea',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#FF9B50';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.25)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#eaeaea';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                }}
                            >
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: isDarkTheme ? '#fff' : '#000' }}>5D Chair</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        { label: "5 degree of Immersion", value: "360° Rotation, Vibration, Mist, Fragrance, Air Blasts" },
                                        { label: "VR Devices", value: "Meta Quest 2 and Meta Quest 3s" },
                                        { label: "Content Subscription", value: "3 years (included in price)" },
                                        { label: "Warranty", value: "3 years (chair), 1 year (electronics)" },
                                        { label: "Color Options", value: "Available in 5 colors" },
                                    ].map((item, idx) => (
                                        <div key={idx}>
                                            <span style={{ fontWeight: 700, color: isDarkTheme ? '#eee' : '#333' }}>{item.label}: </span>
                                            <span style={{ color: isDarkTheme ? '#aaa' : '#555' }}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 7D Chair Card */}
                            <div style={{
                                padding: '2.5rem',
                                borderRadius: '20px',
                                backgroundColor: isDarkTheme ? '#262626' : '#fff',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                border: isDarkTheme ? '1px solid #333' : '1px solid #eaeaea',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#FF9B50';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 155, 80, 0.25)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = isDarkTheme ? '#333' : '#eaeaea';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                }}
                            >
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: isDarkTheme ? '#fff' : '#000' }}>7D Chair</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <span style={{ fontWeight: 700, color: isDarkTheme ? '#eee' : '#333' }}>7 degree of Immersion: </span>
                                        <span style={{ color: isDarkTheme ? '#aaa' : '#555' }}>
                                            360° Rotation, Vibration, <span style={{ color: '#FF9B50', fontWeight: 600 }}>Rocking, Recliner</span>, Mist, Air Blasts, Fragrance
                                        </span>
                                    </div>
                                    {[
                                        { label: "VR Devices", value: "Meta Quest 2 and Meta Quest 3s" },
                                        { label: "Content Subscription", value: "3 years (included in price)" },
                                        { label: "Warranty", value: "3 years (chair), 1 year (electronics)" },
                                        { label: "Color Options", value: "Available in 7 colors" },
                                    ].map((item, idx) => (
                                        <div key={idx}>
                                            <span style={{ fontWeight: 700, color: isDarkTheme ? '#eee' : '#333' }}>{item.label}: </span>
                                            <span style={{ color: isDarkTheme ? '#aaa' : '#555' }}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div >
        </>
    );
}

