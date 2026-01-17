import ReactGA from "react-ga4";

let isInitialized = false;

export const initGA = () => {
    if (isInitialized) return;

    // IMPORTANT: Check for environment variable and log appropriately
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'; // Fallback for dev

    ReactGA.initialize(measurementId);
    isInitialized = true;
    console.log(`[Analytics] Initialized with ID: ${measurementId}`);
};

export const logPageView = () => {
    if (!isInitialized) return;
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
    if (!isInitialized) return;
    ReactGA.event({ category, action, label });
};
