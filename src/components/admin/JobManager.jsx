import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jobService from '../../services/jobService';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';

export default function JobManager() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingJob, setEditingJob] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        description: '',
        requirements: '',
        responsibilities: '',
        status: 'Published' // Default to Published for better UX, or let user choose
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await jobService.getAllJobs();
            setJobs(response.data || []);
        } catch (error) {
            console.error("Failed to fetch jobs", error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingJob) {
                await jobService.updateJob(editingJob.id, formData);
            } else {
                // Ensure we send a valid status
                await jobService.createJob({
                    ...formData,
                    status: 'Published',
                    isVisible: true
                });
            }
            fetchJobs();
            closeForm();
        } catch (error) {
            console.error("Failed to save job", error.response?.data || error);
            alert(`Failed to save job: ${error.response?.data?.error || error.message}`);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this job? This will also remove associated applications.")) {
            try {
                await jobService.deleteJob(id);
                fetchJobs();
            } catch (error) {
                console.error("Failed to delete job", error);
            }
        }
    };

    const handleToggleVisibility = async (id) => {
        try {
            await jobService.toggleJobVisibility(id);
            fetchJobs();
        } catch (error) {
            console.error("Failed to toggle visibility", error);
        }
    };

    const openForm = (job = null) => {
        if (job) {
            setEditingJob(job);
            setFormData({
                title: job.title || '',
                department: job.department || '',
                location: job.location || '',
                type: job.type || 'Full-time',
                description: job.description || '',
                requirements: job.requirements || '',
                responsibilities: job.responsibilities || ''
            });
        } else {
            setEditingJob(null);
            setFormData({
                title: '',
                department: '',
                location: '',
                type: 'Full-time',
                description: '',
                requirements: '',
                responsibilities: ''
            });
        }
        setIsFormOpen(true);
    };



    const closeForm = () => {
        setIsFormOpen(false);
        setEditingJob(null);
    };

    return (
        <>
            <AdminNav />
            <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', paddingTop: '80px' }}>
                <AdminSidebar />
                <div style={{ flex: 1, padding: '40px', marginLeft: '280px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* HEADERS & FORM TOGGLING */}
                        {isFormOpen ? (
                            <div className="admin-container" style={{ margin: 0, padding: 0, maxWidth: 'none' }}>
                                <div className="admin-header">
                                    <h1>{editingJob ? 'Edit Job Opening' : 'Create New Job'}</h1>
                                    <button onClick={closeForm} className="admin-btn" style={{ background: '#64748b', borderColor: '#64748b', boxShadow: 'none' }}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="dashboard-content">
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
                                        {/* ... form fields existing ... */}
                                        <div>
                                            <label className="input-label">Job Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                required
                                                className="admin-input"
                                                placeholder="e.g. Senior VR Developer"
                                            />
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                            <div>
                                                <label className="input-label">Department</label>
                                                <input
                                                    type="text"
                                                    name="department"
                                                    value={formData.department}
                                                    onChange={handleInputChange}
                                                    className="admin-input"
                                                    placeholder="e.g. Engineering"
                                                />
                                            </div>
                                            <div>
                                                <label className="input-label">Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    className="admin-input"
                                                    placeholder="e.g. Surat, India (Remote)"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="input-label">Employment Type</label>
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleInputChange}
                                                className="admin-input"
                                            >
                                                <option value="Full-time">Full-time</option>
                                                <option value="Part-time">Part-time</option>
                                                <option value="Contract">Contract</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="input-label">Description</label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="admin-input"
                                                placeholder="Overview of the role..."
                                                style={{ minHeight: '120px' }}
                                            />
                                        </div>

                                        <div>
                                            <label className="input-label">Requirements</label>
                                            <textarea
                                                name="requirements"
                                                value={formData.requirements}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="admin-input"
                                                placeholder="• 3+ years of React experience&#10;• Knowledge of VR/AR principles..."
                                                style={{ minHeight: '120px' }}
                                            />
                                        </div>

                                        <div>
                                            <label className="input-label">Responsibilities</label>
                                            <textarea
                                                name="responsibilities"
                                                value={formData.responsibilities}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="admin-input"
                                                placeholder="• Develop immersion features&#10;• Optimize 3D rendering..."
                                                style={{ minHeight: '120px' }}
                                            />
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                                            <button type="submit" className="admin-btn">
                                                {editingJob ? 'Update Job' : 'Publish Job'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="admin-container" style={{ margin: 0, padding: 0, maxWidth: 'none' }}>
                                <div className="admin-header">
                                    <h1>Job Openings</h1>
                                    <button onClick={() => openForm()} className="admin-btn">
                                        + Add New Job
                                    </button>
                                </div>

                                <div className="dashboard-content">
                                    {loading ? (
                                        <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading jobs...</div>
                                    ) : (
                                        <div className="table-container">
                                            <table className="dashboard-table">
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Department</th>
                                                        <th>Location</th>
                                                        <th>Status</th>
                                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {jobs.length === 0 ? (
                                                        <tr>
                                                            <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                                                                No job openings found. Click "Add New Job" to create one.
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        jobs.map(job => (
                                                            <tr key={job.id}>
                                                                <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{job.title}</td>
                                                                <td style={{ color: 'var(--text-secondary)' }}>{job.department}</td>
                                                                <td style={{ color: 'var(--text-secondary)' }}>{job.location}</td>
                                                                <td style={{ textAlign: 'center' }}>
                                                                    <button
                                                                        onClick={() => handleToggleVisibility(job.id)}
                                                                        className={`status-badge ${job.status === 'Published' ? 'published' : 'draft'}`}
                                                                        style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
                                                                    >
                                                                        <span className={`status-badge ${job.status === 'Published' ? 'published' : 'draft'}`}>
                                                                            {job.status}
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                                <td style={{ textAlign: 'right' }}>
                                                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                                                        <button
                                                                            onClick={() => openForm(job)}
                                                                            className="action-btn edit-btn"
                                                                            title="Edit Job"
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleDelete(job.id)}
                                                                            className="action-btn delete-btn"
                                                                            title="Delete Job"
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
