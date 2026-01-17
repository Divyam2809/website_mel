import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ApplicationViewModal({ application, onClose }) {
    // Prevent background scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!application) return null;

    // Styling
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(4px)',
        zIndex: 1050,
        display: 'flex',
        alignItems: 'flex-start', // Start from top instead of center
        justifyContent: 'center',
        padding: '1.5rem',
        paddingTop: '100px', // Push down to avoid nav clash
        animation: 'fadeIn 0.2s ease-out'
    };

    const modalStyle = {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '700px',
        borderRadius: '16px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
        overflow: 'hidden',
        animation: 'slideUp 0.3s ease-out'
    };

    const headerStyle = {
        padding: '1.5rem 2rem',
        borderBottom: '1px solid #f1f5f9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f8fafc'
    };

    const contentStyle = {
        padding: '2rem',
        overflowY: 'auto',
        color: '#334155'
    };

    const footerStyle = {
        padding: '1.5rem 2rem',
        borderTop: '1px solid #f1f5f9',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
        background: '#fff'
    };

    const rowStyle = {
        marginBottom: '1.5rem'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#64748b',
        marginBottom: '0.4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    const valueStyle = {
        fontSize: '1rem',
        color: '#1e293b',
        fontWeight: '500',
        lineHeight: '1.5'
    };

    return createPortal(
        <div style={overlayStyle} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
            <div style={modalStyle}>
                <div style={headerStyle}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>Application Details</h2>
                        <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.9rem' }}>
                            Applied for <span style={{ color: '#0f172a', fontWeight: 600 }}>{application.job_title}</span>
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', cursor: 'pointer', color: '#94a3b8' }}
                    >
                        &times;
                    </button>
                </div>

                <div style={contentStyle}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
                        <div>
                            <span style={labelStyle}>Applicant Name</span>
                            <div style={valueStyle}>{application.applicant_name}</div>
                        </div>
                        <div>
                            <span style={labelStyle}>Status</span>
                            <span style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '999px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                backgroundColor: application.status === 'Hired' ? '#dcfce7' : application.status === 'Rejected' ? '#fee2e2' : '#f1f5f9',
                                color: application.status === 'Hired' ? '#166534' : application.status === 'Rejected' ? '#991b1b' : '#475569'
                            }}>
                                {application.status}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', ...rowStyle }}>
                        <div>
                            <span style={labelStyle}>Email Address</span>
                            <div style={valueStyle}>
                                <a href={`mailto:${application.email}`} style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                                    {application.email}
                                </a>
                            </div>
                        </div>
                        <div>
                            <span style={labelStyle}>Phone Number</span>
                            <div style={valueStyle}>
                                <a href={`tel:${application.phone}`} style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                                    {application.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={rowStyle}>
                        <span style={labelStyle}>Portfolio / LinkedIn</span>
                        <div style={valueStyle}>
                            {application.portfolio_link ? (
                                <a href={application.portfolio_link} target="_blank" rel="noreferrer" style={{ color: '#0ea5e9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    {application.portfolio_link} ↗
                                </a>
                            ) : (
                                <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Not provided</span>
                            )}
                        </div>
                    </div>

                    <div style={rowStyle}>
                        <span style={labelStyle}>Cover Letter / Note</span>
                        <div style={{
                            ...valueStyle,
                            background: '#f8fafc',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {application.cover_letter || "No cover letter provided."}
                        </div>
                    </div>

                    {application.resume_link && (
                        <div style={rowStyle}>
                            <span style={labelStyle}>Resume / CV</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f0f9ff', padding: '1rem', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                <span style={{ fontSize: '1.5rem' }}>📄</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, color: '#0369a1' }}>Resume Attached</div>
                                    <div style={{ fontSize: '0.8rem', color: '#0ea5e9' }}>{application.resume_link}</div>
                                </div>
                                <a
                                    href={application.resume_link}
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        background: '#0ea5e9',
                                        color: 'white',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div style={footerStyle}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            color: '#64748b',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
