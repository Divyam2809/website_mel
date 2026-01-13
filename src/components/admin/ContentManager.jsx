import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import DragDropFile from './DragDropFile';
import BlockEditor from './BlockEditor';
import AdminSidebar from './AdminSidebar';
import './admin.css';

const ContentManager = () => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);
    const [stats, setStats] = useState({
        blogs: 0, news: 0, awards: 0, faqs: 0,
        teamdetails: 0, caseStudy: 0, testimonials: 0
    });
    const navigate = useNavigate();

    const moduleConfig = {
        blog: {
            title: 'Blog Post',
            fields: { title: 'text', slug: 'text', excerpt: 'textarea', content: 'json:blocks', category: 'text', status: 'select:Published,Draft', image: 'file', metaTitle: 'text', metaDescription: 'textarea', metaKeywords: 'text' },
            get: () => mockStorage.getBlogs(),
            save: (data) => mockStorage.saveBlog(data),
            update: (id, data) => mockStorage.updateBlog(id, data),
            toggle: (id) => mockStorage.toggleBlogVisibility(id)
        },
        news: {
            title: 'News Articles',
            fields: {
                title: 'text',
                slug: 'text',
                date: 'date',
                category: 'text',
                language: 'select:English,Hindi,Gujarati',
                excerpt: 'textarea',
                content: 'textarea',
                image: 'file',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getNews(),
            save: (data) => mockStorage.saveNews(data),
            update: (id, data) => mockStorage.updateNews(id, data),
            toggle: (id) => mockStorage.toggleNewsVisibility(id)
        },
        awards: {
            title: 'Awards & Recognition',
            fields: { title: 'text', organization: 'text', date: 'date', description: 'textarea', image: 'file', metaTitle: 'text', metaDescription: 'textarea' },
            get: () => mockStorage.getAwards(),
            save: (data) => mockStorage.saveAward(data),
            update: (id, data) => mockStorage.updateAward(id, data),
            toggle: (id) => mockStorage.toggleAwardVisibility(id)
        },
        faqs: {
            title: 'FAQs',
            fields: { question: 'text', answer: 'textarea', category: 'text', order: 'number' },
            get: () => mockStorage.getFAQs(),
            save: (data) => mockStorage.saveFAQ(data),
            update: (id, data) => mockStorage.updateFAQ(id, data),
            toggle: (id) => mockStorage.toggleFAQVisibility(id)
        },
        teamdetails: {
            title: 'Team Members',
            fields: { name: 'text', position: 'text', bio: 'textarea', email: 'email', phone: 'text', linkedin: 'text', image: 'file', order: 'number' },
            get: () => mockStorage.getTeamDetails(),
            save: (data) => mockStorage.saveTeamDetail(data),
            update: (id, data) => mockStorage.updateTeamDetail(id, data),
            toggle: (id) => mockStorage.toggleTeamDetailVisibility(id)
        },
        casestudy: {
            title: 'Case Studies',
            fields: {
                title: 'text',
                slug: 'text',
                description: 'textarea',
                content: 'json:blocks', // Added Rich Content
                type: 'select:image,video',
                mediaUrl: 'text',
                image: 'file',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getCaseStudies(),
            save: (data) => mockStorage.saveCaseStudy(data),
            update: (id, data) => mockStorage.updateCaseStudy(id, data),
            toggle: (id) => mockStorage.toggleCaseStudyVisibility(id)
        },
        testimonials: {
            title: 'Testimonials',
            fields: { name: 'text', position: 'text', testimonial: 'textarea', rating: 'number', image: 'file', projectType: 'text' },
            get: () => mockStorage.getTestimonials(),
            save: (data) => mockStorage.saveTestimonial(data),
            update: (id, data) => mockStorage.updateTestimonial(id, data),
            toggle: (id) => mockStorage.toggleTestimonialVisibility(id)
        }
    };

    const config = moduleConfig[type];

    useEffect(() => {
        if (!config) {
            navigate('/admin/dashboard');
            return;
        }
        loadItems();
        loadStats();
    }, [type]);

    const loadItems = async () => {
        try {
            const response = await config.get();
            setItems(response.data);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    const loadStats = async () => {
        try {
            const [blogs, news, awards, faqs, team, cases, testimonials] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials()
            ]);

            setStats({
                blogs: blogs.data.length,
                news: news.data.length,
                awards: awards.data.length,
                faqs: faqs.data.length,
                teamdetails: team.data.length,
                caseStudy: cases.data.length,
                testimonials: testimonials.data.length
            });
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    };

    const handleSubmit = () => {
        const action = editItem ? 'update' : 'create';
        setConfirmAction({
            title: `Confirm ${action.charAt(0).toUpperCase() + action.slice(1)} `,
            message: `Are you sure you want to ${action} this ${type}?`,
            onConfirm: async () => {
                try {
                    if (editItem) {
                        await config.update(editItem._id, formData);
                    } else {
                        await config.save(formData);
                    }
                    await loadItems();
                    await loadStats();
                    setShowForm(false);
                    setEditItem(null);
                    setFormData({});
                } catch (error) {
                    alert('Error saving item');
                }
            }
        });
        setShowConfirm(true);
    };

    const handleToggle = (id, currentStatus) => {
        setConfirmAction({
            title: 'Confirm Visibility Change',
            message: `This will ${currentStatus ? 'hide' : 'show'} this item.Continue ? `,
            onConfirm: async () => {
                try {
                    await config.toggle(id);
                    await loadItems();
                    await loadStats();
                } catch (error) {
                    alert('Error toggling visibility');
                }
            }
        });
        setShowConfirm(true);
    };

    const renderField = (key, fieldType) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

        if (fieldType === 'textarea') {
            return (
                <textarea
                    className="admin-input"
                    placeholder={label}
                    value={formData[key] || ''}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    rows={5}
                />
            );
        } else if (fieldType === 'json:blocks') {
            return (
                <BlockEditor
                    value={formData[key]}
                    onChange={(newBlocks) => setFormData({ ...formData, [key]: newBlocks })}
                />
            );
        } else if (fieldType === 'file') {
            return (
                <DragDropFile
                    onFileSelect={(dataUrl) => setFormData({ ...formData, [key]: dataUrl })}
                    preview={formData[key]}
                    altText={formData[key + 'Alt'] || ''}
                    onAltChange={(newAlt) => setFormData({ ...formData, [key + 'Alt']: newAlt })}
                    accept="image/*,video/*"
                />
            );
        } else if (fieldType.startsWith('select:')) {
            const options = fieldType.split(':')[1].split(',');
            return (
                <select
                    className="admin-input"
                    value={formData[key] || ''}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                >
                    <option value="">Select {label}</option>
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            );
        } else {
            const inputType = fieldType === 'email' ? 'email' : fieldType === 'number' ? 'number' : fieldType === 'date' ? 'date' : 'text';
            return (
                <input
                    type={inputType}
                    className="admin-input"
                    placeholder={label}
                    value={formData[key] || ''}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                />
            );
        }
    };

    if (!config) return null;

    if (showForm) {
        return (
            <div className="admin-layout">
                <AdminSidebar stats={stats} />
                <div className="admin-main-content">
                    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                        {/* Fixed Top Navbar */}
                        <div className="admin-header">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/assets/Melzo_Logo.svg" alt="Melzo" style={{ height: '40px', cursor: 'pointer' }} onClick={() => navigate('/admin/dashboard')} />
                            </div>
                            <button
                                onClick={() => navigate('/admin/login')}
                                style={{
                                    background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 24px',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    boxShadow: '0 4px 12px rgba(255, 155, 80, 0.2)'
                                }}
                            >
                                Logout
                            </button>
                        </div>

                        {/* Page Header */}
                        <div className="content-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '30px 5%' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#FF9B50', margin: 0 }}>
                                {editItem ? 'Edit' : 'Add'} {config.title}
                            </h1>
                            <button
                                onClick={() => { setShowForm(false); setEditItem(null); setFormData({}); }}
                                style={{
                                    background: 'transparent',
                                    color: '#2D2D2D',
                                    border: '1px solid #FF9B50',
                                    padding: '10px 24px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}
                            >
                                ← Back
                            </button>
                        </div>

                        <div style={{ padding: '40px 5%', maxWidth: '800px', margin: '0 auto' }}>
                            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                                {Object.entries(config.fields).map(([key, fieldType]) => (
                                    <div key={key} className="admin-input-group">
                                        <label className="admin-input-label">
                                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                            {key.startsWith('meta') && <span style={{ opacity: 0.6, fontWeight: 400 }}> (SEO - Optional)</span>}
                                        </label>
                                        {renderField(key, fieldType)}
                                    </div>
                                ))}
                                <div style={{ display: 'flex', gap: '12px', marginTop: '2rem' }}>
                                    <button
                                        type="submit"
                                        style={{
                                            background: '#FF9B50',
                                            color: 'white',
                                            border: 'none',
                                            padding: '12px 32px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        {editItem ? 'Update' : 'Create'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setShowForm(false); setEditItem(null); setFormData({}); }}
                                        style={{
                                            background: 'transparent',
                                            color: '#6b7280',
                                            border: '1px solid #d1d5db',
                                            padding: '12px 32px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>

                        {showConfirm && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10000
                            }} onClick={() => setShowConfirm(false)}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    maxWidth: '500px',
                                    width: '90%',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                                }} onClick={(e) => e.stopPropagation()}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2D2D2D', margin: '0 0 1rem 0' }}>{confirmAction?.title}</h3>
                                    <p style={{ opacity: 0.8, margin: '0 0 1.5rem 0' }}>{confirmAction?.message}</p>
                                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                                        <button
                                            onClick={() => setShowConfirm(false)}
                                            style={{
                                                background: 'transparent',
                                                color: '#6b7280',
                                                border: '1px solid #d1d5db',
                                                padding: '10px 24px',
                                                borderRadius: '20px',
                                                cursor: 'pointer',
                                                fontWeight: 600
                                            }}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => { confirmAction?.onConfirm(); setShowConfirm(false); }}
                                            style={{
                                                background: '#FF9B50',
                                                color: 'white',
                                                border: 'none',
                                                padding: '10px 24px',
                                                borderRadius: '20px',
                                                cursor: 'pointer',
                                                fontWeight: 600
                                            }}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-layout">
            <AdminSidebar stats={stats} />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    {/* Fixed Top Navbar */}
                    <div className="admin-header">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/assets/Melzo_Logo.svg" alt="Melzo" style={{ height: '40px', cursor: 'pointer' }} onClick={() => navigate('/admin/dashboard')} />
                        </div>
                        <button
                            onClick={() => navigate('/admin/login')}
                            style={{
                                background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '10px 24px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                boxShadow: '0 4px 12px rgba(255, 155, 80, 0.2)'
                            }}
                        >
                            Logout
                        </button>
                    </div>

                    <div className="content-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 5%' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#FF9B50', margin: 0 }}>{config.title}</h1>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => navigate('/admin/dashboard')}
                                style={{
                                    background: 'transparent',
                                    color: '#2D2D2D',
                                    border: '1px solid #FF9B50',
                                    padding: '10px 24px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}
                            >
                                ← Dashboard
                            </button>
                            <button
                                onClick={() => setShowForm(true)}
                                style={{
                                    background: '#FF9B50',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 24px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}
                            >
                                + Add New
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', color: '#2D2D2D' }}>
                            All {config.title} ({items.length})
                        </h2>

                        {items.length === 0 ? (
                            <div style={{ padding: '4rem 2rem', background: '#f9f9f9', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <p style={{ opacity: 0.6, fontSize: '1.1rem', marginBottom: '1.5rem' }}>No {config.title.toLowerCase()} yet</p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    style={{
                                        background: '#FF9B50',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 32px',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Create First Entry
                                </button>
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {items.map(item => (
                                    <div key={item._id} style={{
                                        padding: '1.5rem',
                                        background: '#f9f9f9',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr auto',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2D2D2D', margin: '0 0 0.5rem 0' }}>
                                                {item.title || item.name || item.question || 'Untitled'}
                                            </h3>
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                <span style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: 600,
                                                    color: item.isVisible ? '#10b981' : '#ef4444',
                                                    background: item.isVisible ? '#d1fae5' : '#fee2e2',
                                                    padding: '4px 12px',
                                                    borderRadius: '12px'
                                                }}>
                                                    {item.isVisible ? '● Visible' : '○ Hidden'}
                                                </span>
                                                {item.updatedAt && (
                                                    <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>
                                                        Updated: {new Date(item.updatedAt).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button
                                                onClick={() => { setEditItem(item); setFormData(item); setShowForm(true); }}
                                                style={{
                                                    background: 'transparent',
                                                    color: '#FF9B50',
                                                    border: '1px solid #FF9B50',
                                                    padding: '8px 20px',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    fontWeight: 600,
                                                    fontSize: '0.85rem'
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleToggle(item._id, item.isVisible)}
                                                style={{
                                                    background: item.isVisible ? '#fee2e2' : '#d1fae5',
                                                    color: item.isVisible ? '#991b1b' : '#065f46',
                                                    border: 'none',
                                                    padding: '8px 20px',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    fontWeight: 600,
                                                    fontSize: '0.85rem'
                                                }}
                                            >
                                                {item.isVisible ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {showConfirm && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10000
                        }} onClick={() => setShowConfirm(false)}>
                            <div style={{
                                background: 'white',
                                borderRadius: '16px',
                                padding: '2rem',
                                maxWidth: '500px',
                                width: '90%',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                            }} onClick={(e) => e.stopPropagation()}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2D2D2D', margin: '0 0 1rem 0' }}>{confirmAction?.title}</h3>
                                <p style={{ opacity: 0.8, margin: '0 0 1.5rem 0' }}>{confirmAction?.message}</p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={() => setShowConfirm(false)}
                                        style={{
                                            background: 'transparent',
                                            color: '#6b7280',
                                            border: '1px solid #d1d5db',
                                            padding: '10px 24px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => { confirmAction?.onConfirm(); setShowConfirm(false); }}
                                        style={{
                                            background: '#FF9B50',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 24px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentManager;
