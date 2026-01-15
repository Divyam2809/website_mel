import { useEffect } from 'react';

export const useLazyLoadImages = () => {
    useEffect(() => {
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        // If image has data-src, load it
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }

                        // Add loaded class for fade-in effect
                        img.classList.add('loaded');

                        // Stop observing this image
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px' // Start loading 50px before image enters viewport
            });

            // Observe all images with loading="lazy"
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => imageObserver.observe(img));

            // Cleanup
            return () => {
                lazyImages.forEach(img => imageObserver.unobserve(img));
            };
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
            });
        }
    }, []);
};

// Helper function to add lazy loading attributes to images
export const addLazyLoadingToImages = () => {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // Skip images that are already in viewport or very small
        const rect = img.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isInViewport && img.height > 50) {
            img.setAttribute('loading', 'lazy');
        }
    });
};
