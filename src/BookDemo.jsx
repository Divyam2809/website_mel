import React, { useState } from 'react';

export default function BookDemo({ isOpen, onClose, isDarkTheme }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institute: '',
        designation: '',
        message: '',
        agreeToTerms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        alert('Thank you for your interest! We will contact you soon.');
        onClose();
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: '12px',
        border: isDarkTheme ? '1px solid #333' : '1px solid #e0e0e0',
        background: isDarkTheme ? '#262626' : '#f9f9f9',
        color: isDarkTheme ? '#fff' : '#666',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'Inter, sans-serif'
    };

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
            zIndex: 2000,
            padding: '1rem'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                padding: '3rem',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                boxShadow: isDarkTheme
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
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
                        color: isDarkTheme ? '#fff' : '#333',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease'
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

                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                    color: isDarkTheme ? '#fff' : '#000',
                    letterSpacing: '-1px'
                }}>Book A Demo</h2>

                <p style={{
                    marginBottom: '2.5rem',
                    color: isDarkTheme ? '#aaa' : '#666',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                }}>Experience the future of learning with Melzo. Fill out the form below and our team will get in touch with you.</p>

                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            style={inputStyle}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                    </div>

                    {/* Email and Phone */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            style={inputStyle}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            style={inputStyle}
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                    </div>

                    {/* Institute and Designation */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        <input
                            type="text"
                            placeholder="Institute"
                            required
                            style={inputStyle}
                            value={formData.institute}
                            onChange={e => setFormData({ ...formData, institute: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Designation"
                            required
                            style={inputStyle}
                            value={formData.designation}
                            onChange={e => setFormData({ ...formData, designation: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#FF9B50';
                                e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';
                                e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                            }}
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div style={{
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                    }}>
                        <input
                            type="checkbox"
                            id="terms"
                            checked={formData.agreeToTerms}
                            onChange={e => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                            style={{
                                width: '18px',
                                height: '18px',
                                cursor: 'pointer',
                                accentColor: '#FF9B50'
                            }}
                        />
                        <label
                            htmlFor="terms"
                            style={{
                                color: isDarkTheme ? '#aaa' : '#666',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                userSelect: 'none'
                            }}
                        >
                            I agree to the terms and conditions mentioned in the Privacy-Policy.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{
                        width: '100%',
                        padding: '1.1rem',
                        background: '#FF9B50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px'
                    }}
                        onMouseEnter={e => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 10px 25px rgba(255, 155, 80, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Book a Demo
                    </button>
                </form>
            </div>
        </div>
    );
}
