import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';

export default function UserManager() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'content_manager' // Default role
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user || user.role !== 'superadmin') {
            navigate('/admin/dashboard');
            return;
        }
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const token = JSON.parse(sessionStorage.getItem('user'))?.token;
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}api/auth/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const token = JSON.parse(sessionStorage.getItem('user'))?.token;
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}api/auth/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess('User created successfully!');
                setShowModal(false);
                setFormData({ username: '', password: '', role: 'content_manager' });
                fetchUsers();
            } else {
                setError(data.error || 'Failed to create user');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    const handleDelete = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;

        try {
            const token = JSON.parse(sessionStorage.getItem('user'))?.token;
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}api/auth/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.ok) {
                fetchUsers();
            } else {
                alert('Failed to delete user');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    <AdminNav />
                    <div style={{ height: '100px' }}></div>

                    <div className="admin-container" style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b' }}>User Management</h2>
                                <p style={{ color: '#64748b' }}>Manage system users and their access roles.</p>
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                style={{
                                    background: '#FF9B50',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                Add New User
                            </button>
                        </div>

                        {error && <div style={{ padding: '15px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '20px' }}>{error}</div>}
                        {success && <div style={{ padding: '15px', background: '#dcfce7', color: '#166534', borderRadius: '8px', marginBottom: '20px' }}>{success}</div>}

                        <div className="table-container" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                            {loading ? (
                                <div style={{ padding: '40px', textAlign: 'center' }}>Loading users...</div>
                            ) : (
                                <table className="dashboard-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Username</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Role</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Created At</th>
                                            <th style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#475569' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                <td style={{ padding: '16px', fontWeight: '500' }}>{user.username}</td>
                                                <td style={{ padding: '16px' }}>
                                                    <span style={{
                                                        background: '#e0f2fe',
                                                        color: '#0369a1',
                                                        padding: '4px 10px',
                                                        borderRadius: '20px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600'
                                                    }}>{user.role}</span>
                                                </td>
                                                <td style={{ padding: '16px', color: '#64748b' }}>
                                                    {new Date(user.created_at).toLocaleDateString()}
                                                </td>
                                                <td style={{ padding: '16px', textAlign: 'right' }}>
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
                                                        style={{
                                                            padding: '6px 12px',
                                                            background: '#fee2e2',
                                                            color: '#991b1b',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer',
                                                            fontWeight: '600',
                                                            fontSize: '0.85rem'
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <div style={{
                        background: 'white',
                        padding: '30px',
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '500px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>Add New User</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>Role</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        fontSize: '1rem'
                                    }}
                                >
                                    <option value="superadmin">Super Admin</option>
                                    <option value="content_manager">Content Manager</option>
                                    <option value="sales">Sales</option>
                                    <option value="hr">HR</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    style={{
                                        padding: '10px 20px',
                                        background: 'transparent',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '10px 24px',
                                        background: '#FF9B50',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
