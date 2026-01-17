import React, { useState, useEffect } from 'react';
import footerService from '../services/footerService';

export default function ContactInfoModal({ isOpen, onClose, isDarkTheme }) {
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            const loadConfig = async () => {
                try {
                    const res = await footerService.getFooterConfig();
                    if (res.data) setConfig(res.data);
                } catch (error) {
                    console.error("Failed to load contact info", error);
                } finally {
                    setLoading(false);
                }
            };
            loadConfig();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const modalBg = isDarkTheme ? '#1A1A1A' : '#ffffff';
    const textColor = isDarkTheme ? '#fff' : '#000';
    const subTextColor = isDarkTheme ? '#aaa' : '#666';
    const accentColor = '#FF9B50';
    const itemBg = isDarkTheme ? '#262626' : '#f9f9f9';
    const borderColor = isDarkTheme ? '#333' : '#e0e0e0';

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20000,
            padding: '1rem'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: modalBg,
                padding: '3rem',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: isDarkTheme
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                maxHeight: '90vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        color: textColor,
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                        zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = isDarkTheme ? '#333' : '#f0f0f0';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'none';
                    }}
                >
                    ×
                </button>

                <div>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        marginBottom: '0.5rem',
                        color: textColor,
                        textAlign: 'center'
                    }}>Contact Us</h2>
                    <div style={{ height: '4px', width: '60px', background: accentColor, margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', color: subTextColor }}>Loading contact info...</div>
                ) : config && config.contact ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Email */}
                        {config.contact.email && (
                            <div style={{
                                background: itemBg,
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                transition: 'transform 0.2s',
                            }}>
                                <div style={{
                                    background: accentColor,
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: textColor, marginBottom: '0.3rem', fontSize: '0.9rem' }}>Email Address</strong>
                                    <a href={`mailto:${config.contact.email}`} style={{ color: subTextColor, textDecoration: 'none', fontSize: '1rem', fontWeight: 500, wordBreak: 'break-all' }}>
                                        {config.contact.email}
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Phone */}
                        {config.contact.phone && (
                            <div style={{
                                background: itemBg,
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    background: accentColor,
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: textColor, marginBottom: '0.3rem', fontSize: '0.9rem' }}>Phone Number</strong>
                                    <a href={`tel:${config.contact.phone}`} style={{ color: subTextColor, textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                                        {config.contact.phone}
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Address */}
                        {config.contact.address && (
                            <div style={{
                                background: itemBg,
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    background: accentColor,
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: textColor, marginBottom: '0.3rem', fontSize: '0.9rem' }}>Address</strong>
                                    <span style={{ color: subTextColor, fontSize: '0.95rem', lineHeight: '1.5' }}>
                                        {config.contact.address}
                                    </span>
                                </div>
                            </div>
                        )}

                    </div>
                ) : (
                    <div style={{ textAlign: 'center', color: subTextColor }}>Contact information unavailable.</div>
                )}
            </div>
        </div>
    );
}
