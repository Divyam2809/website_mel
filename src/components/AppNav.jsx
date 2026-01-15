import React, { useState } from 'react';
import '../styles/AppNav.css';

export default function AppNav({ onNavigate, isDarkTheme, onToggleTheme, onBookDemo, currentPage = '' }) {
    const [resourcesHover, setResourcesHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Nav Link Component for consistent styling
    const NavLink = ({ label, id, isDropdown = false }) => (
        <span
            style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: currentPage === id || (isDropdown && ['casestudies', 'blog', 'faqs'].includes(currentPage)) ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D'),
                fontWeight: currentPage === id || (isDropdown && ['casestudies', 'blog', 'faqs'].includes(currentPage)) ? 600 : 500,
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                padding: '0.5rem 0',
                position: 'relative'
            }}
            onClick={() => !isDropdown && onNavigate(id)}
            onMouseEnter={(e) => {
                e.target.style.color = '#FF9B50';
            }}
            onMouseLeave={(e) => {
                e.target.style.color = currentPage === id || (isDropdown && ['casestudies', 'blog', 'faqs'].includes(currentPage)) ? '#FF9B50' : (isDarkTheme ? '#FFFFFF' : '#2D2D2D');
            }}
        >
            {label} {isDropdown && '▾'}
        </span>
    );

    return (
        <>
            {/* CSS for Responsive Nav */}
            <style>{`
                .desktop-nav { 
                    display: flex; 
                    gap: 3rem; 
                    align-items: center; 
                    position: absolute; 
                    left: 50%; 
                    transform: translateX(-50%);
                }
                .mobile-hamburger { display: none; }
                .nav-actions { display: flex; gap: 1rem; align-items: center; }
                
                @media (max-width: 1000px) {
                    .desktop-nav { display: none !important; }
                    .mobile-hamburger { display: flex !important; }
                    .nav-logo-text { display: none; } /* Hide tagline on smaller screens if needed */
                }
            `}</style>

            <nav style={{
                padding: '0.8rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: isDarkTheme ? '#403d3dff' : '#ffffff',
                zIndex: 1000,
                borderBottom: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.5)',
                boxShadow: isDarkTheme ? '0 8px 32px 0 rgba(0, 0, 0, 0.2)' : '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                transition: 'all 0.3s ease'
            }}>
                {/* LEFT: Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1002, position: 'relative' }}>
                    <img
                        src="/assets/Melzo_Logo.svg"
                        alt="Melzo"
                        onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
                        style={{
                            height: '55px',
                            cursor: 'pointer'
                        }}
                    />
                </div>

                {/* CENTER: Navigation Links */}
                <div className="desktop-nav">
                    <NavLink label="Home" id="home" />
                    <NavLink label="Products" id="products" />
                    <NavLink label="Industries" id="industries" />

                    {/* Resources Dropdown */}
                    <div
                        style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
                        onMouseEnter={() => setResourcesHover(true)}
                        onMouseLeave={() => setResourcesHover(false)}
                    >
                        <NavLink label="Resources" id="resources" isDropdown={true} />

                        {resourcesHover && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                paddingTop: '1.5rem',
                                zIndex: 1000
                            }}>
                                <div style={{
                                    background: isDarkTheme ? '#1F1F1F' : '#ffffff',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                    padding: '0.5rem',
                                    minWidth: '180px',
                                    border: isDarkTheme ? '1px solid #333' : '1px solid #eee'
                                }}>
                                    {[
                                        { label: 'Blog', id: 'blog' },
                                        { label: 'Case Studies', id: 'casestudies' },
                                        { label: 'Melzo in News', id: 'melzonews' },
                                        { label: 'FAQs', id: 'faqs' }
                                    ].map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                onNavigate(item.id);
                                                setResourcesHover(false);
                                            }}
                                            style={{
                                                padding: '0.9rem 1.2rem',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                color: isDarkTheme ? '#ccc' : '#444',
                                                transition: 'all 0.2s',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = isDarkTheme ? 'rgba(255, 155, 80, 0.15)' : '#FFF3E0';
                                                e.currentTarget.style.color = '#FF9B50';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = isDarkTheme ? '#ccc' : '#444';
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink label="About Us" id="about" />
                    <NavLink label="Careers" id="careers" />
                </div>

                {/* RIGHT: Actions */}
                <div className="nav-actions" style={{ zIndex: 1002, position: 'relative' }}>
                    <button
                        onClick={onBookDemo}
                        style={{
                            background: '#FF9B50',
                            color: '#fff',
                            border: 'none',
                            padding: '0.7rem 1.5rem',
                            cursor: 'pointer',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                            transition: 'transform 0.2s',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Book Demo
                    </button>

                    <button
                        onClick={onToggleTheme}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${isDarkTheme ? '#444' : '#E0E0E0'}`,
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            color: isDarkTheme ? '#FFD700' : '#444',
                            transition: 'all 0.3s',
                            padding: 0,
                            lineHeight: 1
                        }}
                        onMouseEnter={(e) => e.target.style.borderColor = '#FF9B50'}
                        onMouseLeave={(e) => e.target.style.borderColor = isDarkTheme ? '#444' : '#E0E0E0'}
                    >
                        {isDarkTheme ? '☀️' : '🌙'}
                    </button>

                    {/* Mobile Hamburger Button */}
                    <div className="mobile-hamburger"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '30px',
                            height: '20px',
                            cursor: 'pointer',
                            marginLeft: '1rem'
                        }}>
                        <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
                        <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></span>
                        <span style={{ width: '100%', height: '2px', background: isDarkTheme ? '#fff' : '#333', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></span>
                    </div>
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
                    opacity: isMobileMenuOpen ? 1 : 0,
                    overflowY: 'auto'
                }}>
                    <h2 onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>Home</h2>
                    <h2 onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>Products</h2>
                    <h2 onClick={() => { onNavigate('industries'); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>Industries</h2>

                    {/* Mobile Resources Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <h2
                            onClick={() => setResourcesHover(!resourcesHover)}
                            style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: isDarkTheme ? '#fff' : '#333',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            Resources <span style={{ fontSize: '1.5rem', transform: resourcesHover ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▾</span>
                        </h2>

                        {resourcesHover && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', animation: 'fadeIn 0.3s ease' }}>
                                {[
                                    { label: 'Blog', id: 'blog' },
                                    { label: 'Case Studies', id: 'casestudies' },
                                    { label: 'Melzo in News', id: 'melzonews' },
                                    { label: 'FAQs', id: 'faqs' }
                                ].map((item) => (
                                    <span
                                        key={item.id}
                                        onClick={() => {
                                            onNavigate(item.id);
                                            setIsMobileMenuOpen(false);
                                            setResourcesHover(false);
                                        }}
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                            color: isDarkTheme ? '#ccc' : '#666',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <h2 onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>About</h2>
                    <h2 onClick={() => { onNavigate('careers'); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>Careers</h2>
                    <h2 onClick={() => { onBookDemo(); setIsMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: isDarkTheme ? '#fff' : '#333', cursor: 'pointer' }}>Contact</h2>
                </div>
            </nav>
        </>
    );
}
