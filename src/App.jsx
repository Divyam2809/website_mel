import React, { useState, useRef, useEffect, Suspense } from 'react';

// Lazy Load Pages for Performance Optimization
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const AnubhavProduct = React.lazy(() => import('./pages/AnubhavProduct'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Blog = React.lazy(() => import('./Blog'));
const CaseStudies = React.lazy(() => import('./CaseStudies'));
const FAQs = React.lazy(() => import('./FAQs'));
const About = React.lazy(() => import('./pages/About'));
const Guidelines = React.lazy(() => import('./Guidelines'));
const GenericProduct = React.lazy(() => import('./GenericProduct'));
const NineDChair = React.lazy(() => import('./pages/NineDChair'));
const FiveDChair = React.lazy(() => import('./pages/FiveDChair'));
const VRLab = React.lazy(() => import('./pages/VRLab'));
const VRElearning = React.lazy(() => import('./pages/VRElearning'));
const VRERP = React.lazy(() => import('./pages/VRERP'));
const VRAnimalSurgery = React.lazy(() => import('./pages/VRAnimalSurgery'));
const VRUdyog = React.lazy(() => import('./pages/VRUdyog'));
const VRRealEstate = React.lazy(() => import('./pages/VRRealEstate'));
const VRHospitality = React.lazy(() => import('./pages/VRHospitality'));
const VRExhibition = React.lazy(() => import('./pages/VRExhibition'));
const VRKala = React.lazy(() => import('./pages/VRKala'));
const VRCrimeScene = React.lazy(() => import('./pages/VRCrimeScene'));
const DroneSimulator = React.lazy(() => import('./pages/DroneSimulator'));
const AircraftSimulator = React.lazy(() => import('./pages/AircraftSimulator'));
const VRDefence = React.lazy(() => import('./pages/VRDefence'));
const VRLiveStream = React.lazy(() => import('./pages/VRLiveStream'));
const VRTourism = React.lazy(() => import('./pages/VRTourism'));
const VirtualHeritage = React.lazy(() => import('./pages/VirtualHeritage'));
const CityGuides = React.lazy(() => import('./pages/CityGuides'));
const OthersCustom = React.lazy(() => import('./pages/OthersCustom'));
const MelzoNews = React.lazy(() => import('./MelzoNews'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const Careers = React.lazy(() => import('./pages/Careers'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));


// Admin Panel Components
const AdminLogin = React.lazy(() => import('./components/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./components/admin/AdminDashboard'));
const ContentManager = React.lazy(() => import('./components/admin/ContentManager'));
const BlogForm = React.lazy(() => import('./components/admin/BlogForm'));
const FooterManager = React.lazy(() => import('./components/admin/FooterManager'));
const DataStripManager = React.lazy(() => import('./components/admin/DataStripManager'));
const GlobalMomentumManager = React.lazy(() => import('./components/admin/GlobalMomentumManager'));

import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import Toast from './components/Toast';
import ProductComparison from './components/ProductComparison';
import VRIndustrial from './pages/VRIndustrial';

import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';

import usePageTitle from './hooks/usePageTitle';
import useMetaDescription from './hooks/useMetaDescription';
import { useToast } from './hooks/useToast';

// Wrapper for GenericProduct to extract route params
const GenericProductWrapper = (props) => {
    const { productId } = useParams();
    return <GenericProduct {...props} productId={productId} />;
};

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isComparisonOpen, setIsComparisonOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { toasts, removeToast, success, error, warning, info } = useToast();

    // Call custom hooks for SEO
    usePageTitle();
    useMetaDescription();



    // Scroll to top when path changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // PREVENT SCROLL RESTORATION ON REFRESH
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

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
    const handleNavigate = (page, options = {}) => {
        // Known top-level pages that should stay at the root
        const topLevelPages = [
            'home',
            'products',
            'industries',
            'blog',
            'casestudies',
            'faqs',
            'about',
            'careers',
            'guidelines',
            'melzonews'
        ];

        // Normalized page string (handle lowercase/trim if needed, though usually strict)
        const targetPage = page.toLowerCase();

        if (topLevelPages.includes(targetPage)) {
            navigate(`/${targetPage}`, options);
        } else if (targetPage.startsWith('product-')) {
            // Handle generic product wrapper links (e.g. product-custom-solutions)
            navigate(`/products/${targetPage.replace('product-', '')}`, options);
        } else {
            // Assume it's a specific product page and route to /products/<name>
            navigate(`/products/${targetPage}`, options);
        }
    };

    // Helper to determine active "page" for AppNav highlighting
    const getCurrentPage = () => {
        const path = location.pathname;
        if (path === '/' || path === '/home') return 'home';
        // if path is /products/something, we might still want to highlight 'products'
        if (path.startsWith('/products')) return 'products';
        return path.substring(1);
    };

    const commonProps = {
        onNavigate: handleNavigate, // Pass the adapter
        isDarkTheme,
        onBookDemo: () => setIsDemoOpen(true),
        onToggleTheme: () => setIsDarkTheme(!isDarkTheme),
        onCompareProducts: () => setIsComparisonOpen(true),
        showToast: { success, error, warning, info },
        scrollToContact: () => {
            const footer = document.getElementById('footer-contact');
            if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        }
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


            <div style={{ backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff', minHeight: '100vh', color: isDarkTheme ? '#FFFFFF' : '#2D2D2D', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease' }}>

                {/* Page Routing - Wrapped in Suspense */}
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home {...commonProps} />} />
                        <Route path="/products" element={<Products {...commonProps} />} />
                        <Route path="/industries" element={<Industries {...commonProps} />} />
                        <Route path="/blog" element={<Blog {...commonProps} />} />
                        <Route path="/blog/:slug" element={<BlogDetail {...commonProps} />} />
                        <Route path="/casestudies" element={<CaseStudies {...commonProps} />} />
                        <Route path="/faqs" element={<FAQs {...commonProps} />} />
                        <Route path="/about" element={<About {...commonProps} />} />
                        <Route path="/careers" element={<Careers {...commonProps} />} />
                        <Route path="/guidelines" element={<Guidelines {...commonProps} />} />
                        <Route path="/melzonews" element={<MelzoNews {...commonProps} />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy {...commonProps} />} />

                        {/* Product Pages Redesigned Route Structure */}

                        {/* Specific Product Routes (Nested under /products/ for cleaner browsing) */}
                        <Route path="/products/anubhav" element={<AnubhavProduct {...commonProps} />} />
                        <Route path="/products/ninedchair" element={<NineDChair {...commonProps} />} />
                        <Route path="/products/fivedchair" element={<FiveDChair {...commonProps} />} />
                        <Route path="/products/vrlab" element={<VRLab {...commonProps} />} />
                        <Route path="/products/vrelearning" element={<VRElearning {...commonProps} />} />
                        <Route path="/products/vrerp" element={<VRERP {...commonProps} />} />
                        <Route path="/products/vrindustrial" element={<VRIndustrial {...commonProps} />} />
                        <Route path="/products/vranimalsurgery" element={<VRAnimalSurgery {...commonProps} />} />
                        <Route path="/products/vrudyog" element={<VRUdyog {...commonProps} />} />
                        <Route path="/products/vrrealestate" element={<VRRealEstate {...commonProps} />} />
                        <Route path="/products/vrhospitality" element={<VRHospitality {...commonProps} />} />
                        <Route path="/products/vrexhibition" element={<VRExhibition {...commonProps} />} />
                        <Route path="/products/vrkala" element={<VRKala {...commonProps} />} />
                        <Route path="/products/vrcrimescene" element={<VRCrimeScene {...commonProps} />} />
                        <Route path="/products/dronesimulator" element={<DroneSimulator {...commonProps} />} />
                        <Route path="/products/aircraftsimulator" element={<AircraftSimulator {...commonProps} />} />
                        <Route path="/products/vrdefence" element={<VRDefence {...commonProps} />} />
                        <Route path="/products/vrlivestream" element={<VRLiveStream {...commonProps} />} />
                        <Route path="/products/vrtourism" element={<VRTourism {...commonProps} />} />
                        <Route path="/products/virtualheritage" element={<VirtualHeritage {...commonProps} />} />
                        <Route path="/products/cityguides" element={<CityGuides {...commonProps} />} />
                        <Route path="/products/custom-solutions" element={<OthersCustom {...commonProps} />} />

                        {/* Dynamic Generic Product Route */}
                        <Route path="/products/:productId" element={<GenericProductWrapper {...commonProps} />} />

                        {/* Admin Panel Routes */}
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/content/:moduleType" element={<ContentManager />} />
                        <Route path="/admin/footer" element={<FooterManager />} />
                        <Route path="/admin/data-strip" element={<DataStripManager />} />
                        <Route path="/admin/global-momentum" element={<GlobalMomentumManager />} />
                        <Route path="/admin/editor" element={<BlogForm />} />
                        <Route path="/admin/editor/:slug" element={<BlogForm />} />

                        {/* Fallback - 404 Page */}
                        <Route path="*" element={<NotFound {...commonProps} />} />
                    </Routes>
                </Suspense>

                {/* Common Footer for all pages - Hidden on Admin Routes */}
                {!location.pathname.startsWith('/admin') && (
                    <Footer isDarkTheme={isDarkTheme} onNavigate={handleNavigate} />
                )}

            </div>

            {/* Book Demo Modal */}
            <BookDemo
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
                isDarkTheme={isDarkTheme}
            />

            {/* Product Comparison Modal */}
            {isComparisonOpen && (
                <ProductComparison
                    isDarkTheme={isDarkTheme}
                    onClose={() => setIsComparisonOpen(false)}
                />
            )}

            {/* Toast Notifications */}
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}

            {/* Scroll To Top Button */}
            <ScrollToTopButton isDarkTheme={isDarkTheme} />


        </>
    );
}



// Internal ScrollToTop Component
function ScrollToTopButton({ isDarkTheme }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    title="Back to top"
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: isDarkTheme ? '#1A1A1A' : '#FFFFFF',
                        color: '#FF9B50',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: `2px solid ${isDarkTheme ? '#FF9B50' : '#FF9B50'}`, // Updated border color
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        boxShadow: isDarkTheme ? '0 8px 25px rgba(0,0,0,0.4)' : '0 8px 25px rgba(0,0,0,0.15)',
                        zIndex: 10000,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                        e.currentTarget.style.boxShadow = isDarkTheme ? '0 12px 30px rgba(0,0,0,0.6)' : '0 12px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = isDarkTheme ? '0 8px 25px rgba(0,0,0,0.4)' : '0 8px 25px rgba(0,0,0,0.15)';
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
