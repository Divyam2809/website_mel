import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metaDescriptions = {
    '/home': 'Melzo offers cutting-edge VR labs, simulators, and immersive training systems for schools, institutions, industries, and government programs across India. Transform learning with virtual reality.',
    '/products': 'Explore Melzo\'s comprehensive range of VR solutions including 5D/7D/9D chairs, VR labs, e-learning platforms, industrial training, and custom VR applications for education and enterprise.',
    '/about': 'Learn about Melzo, India\'s leading innovator in educational VR technology. We empower institutions with immersive learning experiences through cutting-edge virtual reality solutions.',
    '/blog': 'Stay updated with the latest insights on VR in education, immersive learning technologies, case studies, and industry trends from Melzo\'s expert team.',
    '/industries': 'Discover how Melzo\'s VR solutions serve education, healthcare, defense, tourism, real estate, hospitality, and industrial training sectors across India.',
    '/casestudies': 'Read success stories and case studies showcasing how Melzo\'s VR solutions have transformed learning outcomes in schools, universities, and training centers.',
    '/faqs': 'Find answers to frequently asked questions about Melzo\'s VR products, implementation, pricing, support, and curriculum integration.',
    '/melzonews': 'Latest news, updates, and announcements from Melzo. Stay informed about new product launches, partnerships, and VR education initiatives.',
    '/products/anubhav': 'Anubhav 5D/7D VR Chair - Immersive motion seat with multiple degrees of freedom for educational and entertainment VR experiences.',
    '/products/ninedchair': '9D VR Chair - Ultimate VR experience with 360-degree rotation, motion effects, and immersive simulations for training and entertainment.',
    '/products/vrlab': 'Complete VR Lab Setup - Turnkey solution with VR headsets, PCs, and curriculum-aligned content for schools and training centers.',
    '/products/vrelearning': 'VR E-Learning Solutions - Interactive digital learning platforms with immersive VR content for CBSE, ICSE, and state board curricula.',
    '/products/vrindustrial': 'VR Industrial Training (MELA) - Vocational training simulations for manufacturing, assembly, safety, and industrial skills development.',
    '/products/vrkala': 'VR in Kalaa - Preserve and explore Indian art, culture, and heritage through immersive virtual reality experiences.',
    '/products/vrudyog': 'VR in Udyog - Virtual prototyping, industrial process simulation, and manufacturing training for enterprises.',
    '/products/vrrealestate': 'VR Real Estate Solutions - Immersive property tours, architectural visualization, and virtual walkthroughs for real estate projects.',
    '/products/vrhospitality': 'VR Hospitality Solutions - Virtual hotel tours, resort walkthroughs, and immersive guest experiences for the hospitality industry.',
    '/products/vrexhibition': 'VR Exhibition Solutions - Virtual trade shows, interactive exhibitions, and immersive product showcases for businesses.',
    '/products/vrcrimescene': 'VR Crime Scene Simulation - Forensic training and crime scene analysis tools for law enforcement and investigation training.',
    '/products/dronesimulator': 'Drone Flight Simulator - Professional drone pilot training with realistic flight scenarios and mission simulations.',
    '/products/aircraftsimulator': 'Aircraft Flight Simulator - Comprehensive flight simulation for pilot training, practice, and skill development.',
    '/products/vrdefence': 'VR Defence Training - Tactical combat training, mission simulations, and defense skill development in virtual reality.',
    '/products/vrtourism': 'VR Tourism Solutions - Virtual travel experiences to global destinations, cultural sites, and tourist attractions.',
    '/products/virtualheritage': 'Virtual Heritage Tours - Explore historical sites, monuments, and UNESCO world heritage locations in immersive VR.',
    '/products/cityguides': '360° City Guides - Immersive city exploration and virtual tours for travelers and tourism promotion.',
    '/products/vrlivestream': 'VR Live Stream Simulation - Virtual production, broadcasting simulations, and live event experiences in VR.',
    '/products/vranimalsurgery': 'VR Animal Surgery Simulation - Risk-free veterinary surgical training with realistic anatomy and procedures.',
    '/products/fivedchair': '5D VR Chair - Motion-enabled VR seat with synchronized effects for immersive educational and entertainment content.'
};

const useMetaDescription = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const description = metaDescriptions[path] || 'Melzo - Leading provider of VR solutions for education, training, and immersive experiences across India.';

        // Update or create meta description tag
        let metaTag = document.querySelector('meta[name="description"]');

        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = 'description';
            document.head.appendChild(metaTag);
        }

        metaTag.content = description;

        // Also update Open Graph description for social sharing
        let ogDescTag = document.querySelector('meta[property="og:description"]');

        if (!ogDescTag) {
            ogDescTag = document.createElement('meta');
            ogDescTag.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescTag);
        }

        ogDescTag.content = description;

        // Update Twitter description
        let twitterDescTag = document.querySelector('meta[name="twitter:description"]');

        if (!twitterDescTag) {
            twitterDescTag = document.createElement('meta');
            twitterDescTag.name = 'twitter:description';
            document.head.appendChild(twitterDescTag);
        }

        twitterDescTag.content = description;

    }, [location.pathname]);
};

export default useMetaDescription;
