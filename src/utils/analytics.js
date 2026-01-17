import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = ""; // TODO: Enter your Google Analytics Measurement ID here (e.g., G-XXXXXXXXXX)

export const initGA = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        console.log("Google Analytics Initialized");
    } else {
        console.warn("Google Analytics Measurement ID is missing. Analytics will not be tracked.");
    }
};

export const logPageView = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
};
