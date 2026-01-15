import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import './admin.css';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [caseStudies, setCaseStudies] = useState([]);
    const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' or 'caseStudies'
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/admin/login');
            return;
        }
        fetchData();
    }, [user, navigate]);

    const fetchData = async () => {
        try {
            const blogData = await mockStorage.getBlogs();
            setBlogs(blogData.data);
            const caseData = await mockStorage.getCaseStudies();
            setCaseStudies(caseData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteItem = async (id, type) => {
        if (window.confirm(`Are you sure you want to delete this ${type === 'blogs' ? 'blog' : 'case study'}?`)) {
            try {
                if (type === 'blogs') {
                    await mockStorage.deleteBlog(id);
                } else {
                    await mockStorage.deleteCaseStudy(id);
                }
                fetchData();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <div>
                    <Link to="/admin/add-blog">
                        <button className="admin-btn" style={{ marginRight: '10px' }}>Add Content</button>
                    </Link>
                    <button className="admin-btn" onClick={logout} style={{ backgroundColor: '#222' }}>Logout</button>
                </div>
            </div>

            <div className="dashboard-tabs" style={{ marginBottom: '20px' }}>
                <button
                    className={`admin-btn ${activeTab === 'blogs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('blogs')}
                    style={{ marginRight: '10px', opacity: activeTab === 'blogs' ? 1 : 0.6 }}
                >
                    Blogs
                </button>
                <button
                    className={`admin-btn ${activeTab === 'caseStudies' ? 'active' : ''}`}
                    onClick={() => setActiveTab('caseStudies')}
                    style={{ opacity: activeTab === 'caseStudies' ? 1 : 0.6 }}
                >
                    Case Studies
                </button>
            </div>

            <div className="dashboard-content">
                <h2 style={{ marginBottom: '20px', color: '#FF9B50' }}>All {activeTab === 'blogs' ? 'Blogs' : 'Case Studies'}</h2>
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            {activeTab === 'blogs' ? <th>Category</th> : <th>Type</th>}
                            {activeTab === 'blogs' && <th>Status</th>}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(activeTab === 'blogs' ? blogs : caseStudies).map((item) => (
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                {activeTab === 'blogs' ? (
                                    <>
                                        <td>{item.category}</td>
                                        <td>
                                            <span className={`status-badge ${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </>
                                ) : (
                                    <td>{item.type}</td>
                                )}
                                <td>
                                    <Link to={`/admin/edit-blog/${item._id}?type=${activeTab === 'blogs' ? 'blog' : 'casestudy'}`}>
                                        <button className="action-btn edit-btn">Edit</button>
                                    </Link>
                                    <button className="action-btn delete-btn" onClick={() => deleteItem(item._id, activeTab)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
