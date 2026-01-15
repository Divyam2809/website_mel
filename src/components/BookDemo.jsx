import React, { useState } from 'react';
import { validators, validateForm } from '../utils/validation';
import mockStorage from '../services/mockStorage';

export default function BookDemo({ isOpen, onClose, isDarkTheme }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institute: '',
        designation: '',
        date: '',
        message: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = {
        name: [validators.required, validators.minLength(2)],
        email: [validators.required, validators.email],
        phone: [validators.required, validators.phone],
        institute: [validators.required],
        designation: [validators.required],
        date: [validators.required]
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});

        // Validate terms checkbox
        if (!formData.agreeToTerms) {
            setErrors({ agreeToTerms: 'Please agree to the terms and conditions' });
            return;
        }

        // Validate form
        const { isValid, errors: validationErrors } = validateForm(formData, validationSchema);

        if (!isValid) {
            setErrors(validationErrors);
            return;
        }

        // Simulate API call
        setIsLoading(true);

        try {
            await mockStorage.saveDemoQuery(formData);

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would normally send data to your backend
            console.log('Form submitted:', formData);

            setIsSubmitted(true);
        } catch (error) {
            setErrors({ submit: 'Something went wrong. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setErrors({});
        setIsLoading(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            institute: '',
            designation: '',
            date: '',
            message: '',
            agreeToTerms: false
        });
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
            zIndex: 20000,
            padding: '1rem'
        }} onClick={handleClose}>
            <div style={{
                backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
                padding: '3rem',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                boxShadow: isDarkTheme
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                minHeight: isSubmitted ? '400px' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isSubmitted ? 'center' : 'flex-start',
                transition: 'all 0.5s ease'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button
                    onClick={handleClose}
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

                {isSubmitted ? (
                    <div style={{
                        textAlign: 'center',
                        animation: 'fadeIn 0.5s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}>
                        {/* Success Icon Animation */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: '#FF9B50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(255, 155, 80, 0.4)',
                            animation: 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>

                        <style>{`
                            @keyframes scaleIn {
                                0% { transform: scale(0); opacity: 0; }
                                100% { transform: scale(1); opacity: 1; }
                            }
                            @keyframes fadeIn {
                                0% { opacity: 0; transform: translateY(20px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                        `}</style>

                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            color: isDarkTheme ? '#fff' : '#000',
                            marginBottom: '0.5rem'
                        }}>Request Received!</h2>

                        <p style={{
                            fontSize: '1.1rem',
                            color: isDarkTheme ? '#aaa' : '#666',
                            maxWidth: '80%',
                            lineHeight: '1.6'
                        }}>
                            Thank you, <span style={{ color: '#FF9B50', fontWeight: 700 }}>{formData.name.split(' ')[0]}</span>. We have received your demo request. Our team will contact you shortly to confirm the schedule.
                        </p>

                        <button
                            onClick={handleClose}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem 3rem',
                                background: 'transparent',
                                border: '2px solid #FF9B50',
                                color: isDarkTheme ? '#fff' : '#000',
                                borderRadius: '30px',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.target.style.background = '#FF9B50';
                                e.target.style.color = '#fff';
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = isDarkTheme ? '#fff' : '#000';
                            }}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
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
                                    style={{
                                        ...inputStyle,
                                        borderColor: errors.name ? '#ef4444' : (isDarkTheme ? '#333' : '#e0e0e0')
                                    }}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = errors.name ? '#ef4444' : '#FF9B50';
                                        e.target.style.background = isDarkTheme ? '#2a2a2a' : '#fff';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = errors.name ? '#ef4444' : (isDarkTheme ? '#333' : '#e0e0e0');
                                        e.target.style.background = isDarkTheme ? '#262626' : '#f9f9f9';
                                    }}
                                />
                                {errors.name && (
                                    <div style={{
                                        color: '#ef4444',
                                        fontSize: '0.85rem',
                                        marginTop: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                        {errors.name}
                                    </div>
                                )}
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

                            {/* Date Selection */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: isDarkTheme ? '#ccc' : '#444' }}>Preferred Demo Date</label>
                                <input
                                    type="date"
                                    required
                                    style={inputStyle}
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
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
                            {errors.agreeToTerms && (
                                <div style={{
                                    color: '#ef4444',
                                    fontSize: '0.85rem',
                                    marginTop: '-1rem',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                    {errors.agreeToTerms}
                                </div>
                            )}

                            {/* General Submit Error */}
                            {errors.submit && (
                                <div style={{
                                    padding: '1rem',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid #ef4444',
                                    borderRadius: '12px',
                                    color: '#ef4444',
                                    fontSize: '0.9rem',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="15" y1="9" x2="9" y2="15" />
                                        <line x1="9" y1="9" x2="15" y2="15" />
                                    </svg>
                                    {errors.submit}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                style={{
                                    width: '100%',
                                    padding: '1.1rem',
                                    background: isLoading ? '#ccc' : '#FF9B50',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '30px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    cursor: isLoading ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '0.5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem'
                                }}
                                onMouseEnter={e => {
                                    if (!isLoading) {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 10px 25px rgba(255, 155, 80, 0.4)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                {isLoading ? (
                                    <>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                            borderTop: '2px solid white',
                                            borderRadius: '50%',
                                            animation: 'spin 0.8s linear infinite'
                                        }}></div>
                                        Processing...
                                    </>
                                ) : (
                                    'Book a Demo'
                                )}
                            </button>
                            <style>{`
                                @keyframes spin {
                                    0% { transform: rotate(0deg); }
                                    100% { transform: rotate(360deg); }
                                }
                            `}</style>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
