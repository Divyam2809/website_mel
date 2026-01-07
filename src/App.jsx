import React, { useState, useRef, useEffect, Suspense } from 'react';

// Lazy Load Pages for Performance Optimization
const Home = React.lazy(() => import('./Home'));
const Products = React.lazy(() => import('./Products'));
const AnubhavProduct = React.lazy(() => import('./AnubhavProduct'));
const Industries = React.lazy(() => import('./Industries'));
const Blog = React.lazy(() => import('./Blog'));
const CaseStudies = React.lazy(() => import('./CaseStudies'));
const FAQs = React.lazy(() => import('./FAQs'));
const About = React.lazy(() => import('./About'));
const Guidelines = React.lazy(() => import('./Guidelines'));
const GenericProduct = React.lazy(() => import('./GenericProduct'));
const NineDChair = React.lazy(() => import('./NineDChair'));
const VRLab = React.lazy(() => import('./VRLab'));
const VRElearning = React.lazy(() => import('./VRElearning'));
const VRERP = React.lazy(() => import('./VRERP'));
const VRIndustrial = React.lazy(() => import('./VRIndustrial'));
const VRAnimalSurgery = React.lazy(() => import('./VRAnimalSurgery'));
const VRUdyog = React.lazy(() => import('./VRUdyog'));
const VRRealEstate = React.lazy(() => import('./VRRealEstate'));
const VRHospitality = React.lazy(() => import('./VRHospitality'));
const VRExhibition = React.lazy(() => import('./VRExhibition'));
const VRKala = React.lazy(() => import('./VRKala'));
const VRCrimeScene = React.lazy(() => import('./VRCrimeScene'));
const DroneSimulator = React.lazy(() => import('./DroneSimulator'));
const AircraftSimulator = React.lazy(() => import('./AircraftSimulator'));
const VRDefence = React.lazy(() => import('./VRDefence'));
const VRLiveStream = React.lazy(() => import('./VRLiveStream'));

import Footer from './Footer';
import BookDemo from './BookDemo';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [resourcesHover, setResourcesHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    // Custom cursor effect
    useEffect(() => {
        // Detect touch devices - disable custom cursor on mobile/tablets
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Hide cursor on touch devices
        if (isTouchDevice) {
            cursor.style.display = 'none';
            cursorDot.style.display = 'none';
            return;
        }

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.style.cursor === 'pointer'
            ) {
                cursor.classList.add('hover');
                cursorDot.classList.add('hover');
            }
        };

        const handleMouseOut = () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    // Loading Fallback
    const PageLoader = () => (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: isDarkTheme ? '#1A1A1A' : '#ffffff',
            color: '#FF9B50'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>Loading...</div>
        </div>
    );

    return (
        <>
            {/* Custom Cursor Elements */}
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorDotRef} className="custom-cursor-dot"></div>

            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease' }}>

                {/* Navigation Bar - Shows only on main pages */}
                {(['home', 'products', 'anubhav', 'industries', 'blog', 'casestudies', 'faqs', 'about'].includes(currentPage) || currentPage.startsWith('product-')) && (
                    <>
                        {/* CSS for Responsive Nav */}
                        <style>{`
                            .desktop-nav { display: flex; gap: 2.5rem; align-items: center; }
                            .mobile-hamburger { display: none; }
                            
                            @media (max-width: 900px) {
                                .desktop-nav { display: none !important; }
                                .mobile-hamburger { display: flex !important; }
                            }
                        `}</style>

                        <nav style={{
                            padding: '1.5rem 5%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            boxSizing: 'border-box',
                            backgroundColor: isDarkTheme ? 'rgba(38, 38, 38, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                            WebkitBackdropFilter: 'blur(12px)',
                            backdropFilter: 'blur(12px)',
                            zIndex: 1000,
                            boxShadow: isDarkTheme ? '0 2px 20px rgba(0,0,0,0.4)' : '0 2px 20px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease'
                        }}>
                            <img
                                src="/assets/Melzo_Logo.svg"
                                alt="Melzo"
                                onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
                                style={{
                                    height: '55px',
                                    cursor: 'pointer',
                                    zIndex: 1002,
                                    position: 'relative'
                                }}
                            />

                            {/* Desktop/Tablet Menu */}
                            <div className="desktop-nav">
                                <span style={{
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                    color: currentPage === 'home' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                                    fontWeight: currentPage === 'home' ? 600 : 500
                                }}
                                    onClick={() => setCurrentPage('home')}
                                    onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                    onMouseLeave={(e) => e.target.style.color = currentPage === 'home' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D')}
                                >Home</span>

                                <span style={{
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                    color: currentPage === 'products' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                                    fontWeight: currentPage === 'products' ? 600 : 500
                                }}
                                    onClick={() => setCurrentPage('products')}
                                    onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                    onMouseLeave={(e) => e.target.style.color = currentPage === 'products' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D')}
                                >Projects</span>

                                <span style={{
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                    color: currentPage === 'industries' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                                    fontWeight: currentPage === 'industries' ? 600 : 500
                                }}
                                    onClick={() => setCurrentPage('industries')}
                                    onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                    onMouseLeave={(e) => e.target.style.color = currentPage === 'industries' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D')}
                                >Industries</span>

                                <div
                                    style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
                                    onMouseEnter={() => setResourcesHover(true)}
                                    onMouseLeave={() => setResourcesHover(false)}
                                >
                                    <span style={{
                                        cursor: 'pointer',
                                        transition: 'color 0.3s',
                                        color: ['casestudies', 'blog', 'faqs'].includes(currentPage) ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                                        fontWeight: ['casestudies', 'blog', 'faqs'].includes(currentPage) ? 600 : 500
                                    }}
                                        onMouseEnter={(e) => { e.target.style.color = '#FF9B50'; }}
                                        onMouseLeave={(e) => { e.target.style.color = ['casestudies', 'blog', 'faqs'].includes(currentPage) ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'); }}
                                    >
                                        Resources ▾
                                    </span>
                                    {resourcesHover && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            paddingTop: '1rem',
                                            zIndex: 1000
                                        }}>
                                            <div style={{
                                                background: isDarkTheme ? '#262626' : '#ffffff',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                                padding: '0.5rem',
                                                minWidth: '160px',
                                                border: isDarkTheme ? '1px solid #333' : '1px solid #eee'
                                            }}>
                                                {[
                                                    { label: 'Blog', id: 'blog' },
                                                    { label: 'Case Studies', id: 'casestudies' },
                                                    { label: 'FAQs', id: 'faqs' }
                                                ].map((item) => (
                                                    <div
                                                        key={item.id}
                                                        onClick={() => {
                                                            setCurrentPage(item.id);
                                                            setResourcesHover(false);
                                                        }}
                                                        style={{
                                                            padding: '0.8rem 1.2rem',
                                                            borderRadius: '8px',
                                                            cursor: 'pointer',
                                                            color: isDarkTheme ? '#fff' : '#333',
                                                            transition: 'all 0.2s',
                                                            fontSize: '0.9rem',
                                                            fontWeight: 500
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.background = '#FF9B50';
                                                            e.target.style.color = '#fff';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.background = 'transparent';
                                                            e.target.style.color = isDarkTheme ? '#fff' : '#333';
                                                        }}
                                                    >
                                                        {item.label}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <span style={{
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                    color: currentPage === 'about' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                                    fontWeight: currentPage === 'about' ? 600 : 500
                                }}
                                    onClick={() => setCurrentPage('about')}
                                    onMouseEnter={(e) => e.target.style.color = '#FF9B50'}
                                    onMouseLeave={(e) => e.target.style.color = currentPage === 'about' ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D')}
                                >About Us</span>

                                <button
                                    onClick={() => setIsDemoOpen(true)}
                                    style={{
                                        background: '#FF9B50',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '0.8rem 1.8rem',
                                        cursor: 'pointer',
                                        borderRadius: '30px',
                                        fontWeight: 600,
                                        fontSize: '0.9rem'
                                    }}>
                                    Book Demo
                                </button>

                                <button
                                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid ' + (isDarkTheme ? '#444' : '#ddd'),
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    {isDarkTheme ? '☀️' : '🌙'}
                                </button>
                            </div>

                            {/* Mobile Hamburger Button */}
                            <div className="mobile-hamburger"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    width: '30px',
                                    height: '20px',
                                    cursor: 'pointer',
                                    zIndex: 1002
                                }}>
                                <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
                                <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></span>
                                <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></span>
                            </div>

                            {/* Mobile Menu Overlay */}
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: isDarkTheme ? '#1a1a1a' : '#ffffff',
                                zIndex: 1001,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                                opacity: isMobileMenuOpen ? 1 : 0
                            }}>
                                {['Home', 'Products', 'Industries', 'About', 'Book A Demo'].map((link) => (
                                    <h2 key={link}
                                        onClick={() => {
                                            if (link === 'Book A Demo') return;
                                            setCurrentPage(link.toLowerCase());
                                            setIsMobileMenuOpen(false);
                                        }}
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            color: isDarkTheme ? '#fff' : '#333',
                                            cursor: 'pointer'
                                        }}>
                                        {link}
                                    </h2>
                                ))}
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button
                                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '50%',
                                            border: '1px solid ' + (isDarkTheme ? '#444' : '#ddd'),
                                            background: 'transparent',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer'
                                        }}>
                                        {isDarkTheme ? '☀️' : '🌙'}
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </>
                )}

                {/* Page Routing - Wrapped in Suspense */}
                <Suspense fallback={<PageLoader />}>
                    {currentPage === 'home' && <Home onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'products' && <Products onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'anubhav' && <AnubhavProduct onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'industries' && <Industries onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} />}
                    {currentPage === 'blog' && <Blog onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} />}
                    {currentPage === 'casestudies' && <CaseStudies onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} />}
                    {currentPage === 'faqs' && <FAQs onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} />}
                    {currentPage === 'about' && <About onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} />}
                    {currentPage === 'guidelines' && <Guidelines onNavigate={setCurrentPage} />}
                    {currentPage.startsWith('product-') && <GenericProduct productId={currentPage.replace('product-', '')} onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'ninedchair' && <NineDChair onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrlab' && <VRLab onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrelearning' && <VRElearning onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrerp' && <VRERP onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrindustrial' && <VRIndustrial onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vranimalsurgery' && <VRAnimalSurgery onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrudyog' && <VRUdyog onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrrealestate' && <VRRealEstate onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrhospitality' && <VRHospitality onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrexhibition' && <VRExhibition onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrkala' && <VRKala onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrcrimescene' && <VRCrimeScene onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'dronesimulator' && <DroneSimulator onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'aircraftsimulator' && <AircraftSimulator onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrdefence' && <VRDefence onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                    {currentPage === 'vrlivestream' && <VRLiveStream onNavigate={setCurrentPage} isDarkTheme={isDarkTheme} onBookDemo={() => setIsDemoOpen(true)} />}
                </Suspense>

                {/* Common Footer for all pages */}
                <Footer isDarkTheme={isDarkTheme} onNavigate={setCurrentPage} />

            </div>

            {/* Book Demo Modal */}
            <BookDemo
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
                isDarkTheme={isDarkTheme}
            />
        </>
    );
}
