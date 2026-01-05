import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Guidelines from './Guidelines.jsx'
import './index.css'

// Simple router component
function Router() {
    const [currentPage, setCurrentPage] = React.useState(
        window.location.pathname === '/guidelines' ? 'guidelines' : 'home'
    );

    React.useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(window.location.pathname === '/guidelines' ? 'guidelines' : 'home');
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Expose navigation function globally
    window.navigateTo = (page) => {
        setCurrentPage(page);
        window.history.pushState({}, '', page === 'guidelines' ? '/guidelines' : '/');
    };

    return currentPage === 'guidelines' ? <Guidelines /> : <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
)
