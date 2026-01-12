import React, { useState, useEffect } from 'react';

// CountUp Animation Component
export default function CountUpAnimation({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCount();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return <span ref={countRef}>{count}{suffix}</span>;
}
