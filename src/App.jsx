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
const MelzoNews = React.lazy(() => import('./MelzoNews'));

import Footer from './Footer';
import BookDemo from './BookDemo';

import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';

// Wrapper for GenericProduct to extract route params
const GenericProductWrapper = (props) => {
    const { productId } = useParams();
    return <GenericProduct {...props} productId={productId} />;
};

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Custom cursor effect
    useEffect(() => {
        // ... (keeping existing cursor logic exactly as is)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

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

    // Scroll to top when path changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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

    // Navigation Adapter for existing components
    const handleNavigate = (page) => {
        if (page === 'home') navigate('/home');
        else if (page.startsWith('product-')) navigate(`/product/${page.replace('product-', '')}`);
        else navigate(`/${page}`);
    };

    // Helper to determine active "page" for AppNav highlighting
    const getCurrentPage = () => {
        const path = location.pathname;
        if (path === '/' || path === '/home') return 'home';
        if (path.startsWith('/product/')) return 'product-' + path.split('/')[2];
        return path.substring(1);
    };

    const commonProps = {
        onNavigate: handleNavigate, // Pass the adapter
        isDarkTheme,
        onBookDemo: () => setIsDemoOpen(true),
        onToggleTheme: () => setIsDarkTheme(!isDarkTheme)
    };

    // Note: We pass getCurrentPage() implicitly by components possibly using window.location or we rely on AppNav processing commonProps?
    // Looking at AppNav usage in children, it usually takes "currentPage" prop. 
    // BUT we are passing generic commonProps, so we need to ensure AppNav inside children gets the right page.
    // The previous code passed `currentPage` explicitly to AppNav inside each page component (e.g. <AppNav currentPage="home" .../>).
    // So the page components THEMSELVES hardcode their "currentPage" prop to AppNav.
    // However, some pages might need to know they are active? 
    // Actually, looking at previous file view, <Home> calls <AppNav currentPage="home">. 
    // So we don't need to pass `currentPage` prop to the page components themselves for navigation to work!
    // We just need to render the right component.

    return (
        <>
            {/* Custom Cursor Elements */}
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorDotRef} className="custom-cursor-dot"></div>

            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease' }}>

                {/* Page Routing - Wrapped in Suspense */}
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home {...commonProps} />} />
                        <Route path="/products" element={<Products {...commonProps} />} />
                        <Route path="/anubhav" element={<AnubhavProduct {...commonProps} />} />
                        <Route path="/industries" element={<Industries {...commonProps} />} />
                        <Route path="/blog" element={<Blog {...commonProps} />} />
                        <Route path="/casestudies" element={<CaseStudies {...commonProps} />} />
                        <Route path="/faqs" element={<FAQs {...commonProps} />} />
                        <Route path="/about" element={<About {...commonProps} />} />
                        <Route path="/guidelines" element={<Guidelines {...commonProps} />} />

                        {/* Dynamic Product Route */}
                        <Route path="/product/:productId" element={<GenericProductWrapper {...commonProps} />} />

                        {/* Individual Product Pages */}
                        <Route path="/ninedchair" element={<NineDChair {...commonProps} />} />
                        <Route path="/vrlab" element={<VRLab {...commonProps} />} />
                        <Route path="/vrelearning" element={<VRElearning {...commonProps} />} />
                        <Route path="/vrerp" element={<VRERP {...commonProps} />} />
                        <Route path="/vrindustrial" element={<VRIndustrial {...commonProps} />} />
                        <Route path="/vranimalsurgery" element={<VRAnimalSurgery {...commonProps} />} />
                        <Route path="/vrudyog" element={<VRUdyog {...commonProps} />} />
                        <Route path="/vrrealestate" element={<VRRealEstate {...commonProps} />} />
                        <Route path="/vrhospitality" element={<VRHospitality {...commonProps} />} />
                        <Route path="/vrexhibition" element={<VRExhibition {...commonProps} />} />
                        <Route path="/vrkala" element={<VRKala {...commonProps} />} />
                        <Route path="/vrcrimescene" element={<VRCrimeScene {...commonProps} />} />
                        <Route path="/dronesimulator" element={<DroneSimulator {...commonProps} />} />
                        <Route path="/aircraftsimulator" element={<AircraftSimulator {...commonProps} />} />
                        <Route path="/vrdefence" element={<VRDefence {...commonProps} />} />
                        <Route path="/vrlivestream" element={<VRLiveStream {...commonProps} />} />
                        <Route path="/melzonews" element={<MelzoNews {...commonProps} />} />

                        {/* Fallback */}
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </Suspense>

                {/* Common Footer for all pages */}
                <Footer isDarkTheme={isDarkTheme} onNavigate={handleNavigate} />

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
