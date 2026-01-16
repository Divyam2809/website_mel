import React, { useState, useEffect } from 'react';
import jobService from '../../services/jobService';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';
import ApplicationViewModal from './ApplicationViewModal';

export default function JobApplications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewingApp, setViewingApp] = useState(null);
    const statuses = ['Pending', 'Reviewed', 'Interviewed', 'Hired', 'Rejected'];

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const response = await jobService.getApplications();
            setApplications(response.data || []);
        } catch (error) {
            console.error("Failed to fetch applications", error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            await jobService.updateApplicationStatus(id, newStatus);
            // Optimistic update
            setApplications(prev => prev.map(app =>
                app.id === id ? { ...app, status: newStatus } : app
            ));
        } catch (error) {
            console.error("Failed to update status", error);
            alert("Failed to update status");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this application?")) {
            try {
                await jobService.deleteApplication(id);
                setApplications(prev => prev.filter(app => app.id !== id));
                if (viewingApp && viewingApp.id === id) setViewingApp(null);
            } catch (error) {
                console.error("Failed to delete application", error);
            }
        }
    };

    const openViewModal = (app) => {
        setViewingApp(app);
    };

    const closeViewModal = () => {
        setViewingApp(null);
    };


    const renderApplicationTable = (apps, title) => (
        <div style={{ marginBottom: '40px' }}>
            <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                {title}
                <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 'normal',
                    color: 'var(--text-secondary)',
                    background: '#e2e8f0',
                    padding: '2px 8px',
                    borderRadius: '12px'
                }}>
                    {apps.length}
                </span>
            </h2>
            <div className="table-container">
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Applied For</th>
                            <th>Contact</th>
                            <th>Date</th>
                            <th style={{ textAlign: 'center' }}>Status</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apps.map(app => (
                            <tr key={app.id}>
                                <td style={{ padding: '16px' }}>
                                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{app.applicant_name}</div>
                                    <div style={{ fontSize: '13px', marginTop: '4px' }}>
                                        {app.resume_link ? (
                                            <a
                                                href={app.resume_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{ color: 'var(--action-edit-text)', textDecoration: 'none', fontWeight: '500' }}
                                            >
                                                📄 View Resume
                                            </a>
                                        ) : (
                                            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No Resume</span>
                                        )}
                                    </div>
                                </td>
                                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{app.job_title || 'Unknown Job'}</td>
                                <td style={{ fontSize: '14px' }}>
                                    <div style={{ color: 'var(--text-primary)' }}>{app.email}</div>
                                    <div style={{ color: 'var(--text-secondary)' }}>{app.phone}</div>
                                </td>
                                <td style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    {new Date(app.created_at).toLocaleDateString()}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <select
                                        value={app.status}
                                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                                        style={{
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            border: '1px solid var(--border-subtle)',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            backgroundColor:
                                                app.status === 'Hired' ? '#dcfce7' :
                                                    app.status === 'Rejected' ? '#fee2e2' :
                                                        app.status === 'Interviewed' ? '#e0f2fe' :
                                                            app.status === 'Reviewed' ? '#fef3c7' : '#f1f5f9',
                                            color:
                                                app.status === 'Hired' ? '#166534' :
                                                    app.status === 'Rejected' ? '#991b1b' :
                                                        app.status === 'Interviewed' ? '#075985' :
                                                            app.status === 'Reviewed' ? '#92400e' : '#475569'
                                        }}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Reviewed">Reviewed</option>
                                        <option value="Interviewed">Interviewed</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <button
                                        onClick={() => openViewModal(app)}
                                        className="action-btn edit-btn"
                                        title="View Details"
                                        style={{ marginRight: '8px' }}
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleDelete(app.id)}
                                        className="action-btn delete-btn"
                                        title="Delete Application"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <>
            <AdminNav />
            <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', paddingTop: '80px' }}>
                <AdminSidebar />
                <div style={{ flex: 1, padding: '40px', marginLeft: '280px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="admin-container" style={{ margin: 0, padding: 0, maxWidth: 'none', boxShadow: 'none', background: 'transparent' }}>
                            <div className="admin-header" style={{ marginBottom: '40px' }}>
                                <h1>Job Applications</h1>
                            </div>

                            <div className="dashboard-content" style={{ padding: 0 }}>
                                {loading ? (
                                    <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading applications...</div>
                                ) : applications.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                        No applications found.
                                    </div>
                                ) : (
                                    <>
                                        {statuses.map(status => {
                                            const statusApps = applications.filter(app => app.status === status);
                                            if (statusApps.length === 0) return null;
                                            return <React.Fragment key={status}>{renderApplicationTable(statusApps, status)}</React.Fragment>;
                                        })}
                                        {/* Catch-all for any status not in list? Usually not needed if list is comprehensive */}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {viewingApp && (
                <ApplicationViewModal
                    application={viewingApp}
                    onClose={closeViewModal}
                />
            )}
        </>
    );
}
