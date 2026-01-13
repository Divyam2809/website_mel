import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.toLowerCase();

        let title = 'Melzo - Immersive Education & VR Solutions'; // Default title

        // Map paths to specific titles
        if (path === '/' || path === '/home') {
            title = 'Melzo - Transforming Education with VR';
        } else if (path === '/products' || path.startsWith('/products/')) {
            // Check for specific products or fallback to generic
            if (path.includes('ninedchair')) title = '9D VR Chair Simulator - Melzo';
            else if (path.includes('fivedchair')) title = '5D/7D VR Chair - Melzo';
            else if (path.includes('anubhav')) title = 'Melzo Anubhav - VR for Schools';
            else if (path.includes('vrlab')) title = 'Melzo VR Lab Solutions';
            else title = 'Products - Melzo Immersive Solutions';
        } else if (path === '/industries') {
            title = 'Industries We Serve - Melzo';
        } else if (path === '/about') {
            title = 'About Us - Our Vision & Team';
        } else if (path === '/blog') {
            title = 'Blog - Latest in EdTech & VR';
        } else if (path === '/casestudies') {
            title = 'Case Studies - Melzo Impact';
        } else if (path === '/faqs') {
            title = 'FAQs - Common Questions';
        } else if (path === '/guidelines') {
            title = 'Usage Guidelines - Safety Protocols';
        } else if (path === '/melzonews') {
            title = 'Melzo in the News';
        }

        document.title = title;
    }, [location]);
};

export default usePageTitle;
