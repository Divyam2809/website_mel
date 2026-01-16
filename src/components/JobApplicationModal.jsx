import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import jobService from '../services/jobService';

export default function JobApplicationModal({ job, isOpen, onClose, isDarkTheme }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        note: '',
        resume: null
    });

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !job) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Include job info in application
            const applicationData = {
                job_id: job.id || job._id,
                applicant_name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                portfolio_link: formData.linkedin,
                cover_letter: formData.note,
                resume_link: formData.resume ? formData.resume.name : null // In real app, upload file and get link
            };

            await jobService.createApplication(applicationData);
            alert('Application submitted successfully!');
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            const errorMessage = error.response?.data?.error || error.message || 'Failed to submit application.';
            alert(`Failed to submit application: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(5px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    };

    const modalStyle = {
        backgroundColor: isDarkTheme ? '#1A1A1A' : '#ffffff',
        width: '100%',
        maxWidth: '1200px',
        height: '90vh', // Fixed height for scrolling content inside
        borderRadius: '24px',
        display: 'flex',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
        position: 'relative',
        border: isDarkTheme ? '1px solid rgba(255,255,255,0.1)' : 'none'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        background: 'transparent',
        border: 'none',
        color: isDarkTheme ? '#fff' : '#000',
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: 10,
        lineHeight: 1,
        padding: '0.5rem'
    };

    const columnStyle = {
        flex: 1,
        padding: '3rem',
        overflowY: 'auto',
        height: '100%'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 600,
        fontSize: '0.9rem',
        opacity: 0.9
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: '12px',
        border: isDarkTheme ? '1px solid #333' : '1px solid #e0e0e0',
        backgroundColor: isDarkTheme ? '#2A2A2A' : '#F7F7F7',
        color: isDarkTheme ? '#fff' : '#000',
        fontSize: '1rem',
        fontFamily: 'inherit',
        marginBottom: '1.5rem',
        outline: 'none',
        transition: 'border-color 0.2s'
    };

    // Helper for input focus
    const handleFocus = (e) => e.target.style.borderColor = '#FF9B50';
    const handleBlur = (e) => e.target.style.borderColor = isDarkTheme ? '#333' : '#e0e0e0';

    return createPortal(
        <div style={overlayStyle} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div style={modalStyle}>
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>

                {/* LEFT COLUMN: Job Details */}
                <div style={{ ...columnStyle, borderRight: isDarkTheme ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>{job.title}</h2>

                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Purpose</h3>
                        <p style={{ lineHeight: '1.7', opacity: 0.8 }}>
                            {job.purpose || "Join our team to build the future of immersive technology. You will play a key role in shaping how millions of users experience VR."}
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Your Mission</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', opacity: 0.8 }}>
                            {(job.mission || [
                                "Collaborate with cross-functional teams to deliver high-quality features.",
                                "Optimize application performance for maximum speed and scalability.",
                                "Participate in code reviews and contribute to engineering best practices.",
                                "Innovate with new technologies to solve complex problems."
                            ])
                                .flatMap(item => {
                                    if (typeof item === 'string') return [item];
                                    if (item.type === 'list' && Array.isArray(item.items)) return item.items;
                                    return [item.content];
                                })
                                .filter(Boolean)
                                .map((text, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{text}</li>
                                ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>You Should Have</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', opacity: 0.8 }}>
                            {(job.requirements || [
                                "Strong proficiency in modern web technologies.",
                                "Experience with VR/AR frameworks is a plus.",
                                "Passion for creating intuitive and beautiful user interfaces.",
                                "Excellent problem-solving skills and attention to detail."
                            ])
                                .flatMap(item => {
                                    if (typeof item === 'string') return [item];
                                    if (item.type === 'list' && Array.isArray(item.items)) return item.items;
                                    return [item.content];
                                })
                                .filter(Boolean)
                                .map((text, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{text}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN: Application Form */}
                <div style={{ ...columnStyle, backgroundColor: isDarkTheme ? '#1F1F1F' : '#FDFDFD' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Apply Now</h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={labelStyle}>Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                placeholder="Enter your full name"
                                style={inputStyle}
                                value={formData.fullName}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={labelStyle}>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    style={inputStyle}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Enter your phone number"
                                    style={inputStyle}
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>LinkedIn Profile *</label>
                            <input
                                type="url"
                                name="linkedin"
                                required
                                placeholder="https://linkedin.com/in/yourprofile"
                                style={inputStyle}
                                value={formData.linkedin}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Tell us why you're excited about this *</label>
                            <textarea
                                name="note"
                                required
                                rows="4"
                                placeholder="I would love to join because..."
                                style={{ ...inputStyle, resize: 'none' }}
                                value={formData.note}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Resume/CV</label>
                            <div style={{
                                border: isDarkTheme ? '2px dashed #444' : '2px dashed #ddd',
                                borderRadius: '12px',
                                padding: '2rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                marginBottom: '2rem',
                                backgroundColor: isDarkTheme ? '#2A2A2A' : '#FAFAFA'
                            }}
                                onClick={() => document.getElementById('resume-upload').click()}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF9B50'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = isDarkTheme ? '#444' : '#ddd'}
                            >
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📄</span>
                                <span style={{ fontWeight: 600, color: '#FF9B50' }}>Upload your resume</span>
                                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>
                                    {formData.resume ? formData.resume.name : "PDF, DOCX up to 10MB"}
                                </span>
                                <input
                                    id="resume-upload"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                borderRadius: '12px',
                                backgroundColor: isSubmitting ? '#666' : '#000',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                border: 'none',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(-2px)')}
                            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            {isSubmitting ? 'Submitting...' : 'Apply Application'}
                        </button>

                        <p style={{ marginTop: '1rem', fontSize: '0.75rem', opacity: 0.5, textAlign: 'center' }}>
                            By applying, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </form>
                </div>
            </div>

            {/* Mobile Responsive Tweaks */}
            <style>{`
                @media (max-width: 900px) {
                    div[style*="maxWidth: 1200px"] {
                        flex-direction: column;
                        height: auto !important;
                        max-height: 95vh;
                        overflow-y: auto !important;
                    }
                    div[style*="flex: 1"] {
                        overflow-y: visible !important;
                    }
                }
            `}</style>
        </div>,
        document.body
    );
}
