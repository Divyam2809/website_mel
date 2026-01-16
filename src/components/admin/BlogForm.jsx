import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import BlockEditor from './BlockEditor';
import DragDropFile from './DragDropFile';
import AdminSidebar from './AdminSidebar';
import AdminNav from './AdminNav';
import blogService from '../../services/blogService';
import caseStudyService from '../../services/caseStudyService';
import mockStorage from '../../services/mockStorage';
import './admin.css';

const BlogForm = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const initialType = searchParams.get('type') || 'blog';

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isSuperAdmin = user.role === 'superadmin';
    const isHR = user.role === 'HR';
    const [contentType, setContentType] = useState(initialType);
    const isEdit = !!slug;

    // Role-based access control
    useEffect(() => {
        if (isHR) {
            navigate('/admin/content/jobs');
        }
    }, [isHR, navigate]);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        status: 'Published',
        date: new Date().toISOString().split('T')[0],
        author: '',
        description: '', // Used for excerpt
        content: [], // Block content
        image: '',
        videoUrl: '',
        category: 'General',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        seoKeywords: '', // Legacy support
        boards: []
    });

    const [featuredImage, setFeaturedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [stats, setStats] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
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
        loadStats();

        if (isEdit) {
            fetchData();
        }
    }, [slug, contentType]);

    const fetchData = async () => {
        try {
            let data;
            if (contentType === 'blog') {
                const response = await blogService.getById(slug);
                data = response.data;
            } else {
                const response = await caseStudyService.getAll();
                const allStudies = response.data;
                data = allStudies.find(s => s._id === slug || s.slug === slug || s.id === slug);
            }

            if (data) {
                setFormData({
                    ...data,
                    status: data.status || (data.isVisible ? 'Published' : 'Draft'),
                    boards: data.boards || [],
                    author: typeof data.author === 'object' ? (data.author?.name || '') : (data.author || ''),
                    metaKeywords: data.metaKeywords || (Array.isArray(data.seoKeywords) ? data.seoKeywords.join(', ') : (data.seoKeywords || '')),
                    content: Array.isArray(data.content) ? data.content : [],
                    description: data.description || data.excerpt || '',
                    videoUrl: data.mediaUrl || '',
                    date: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
                });
                if (data.image) {
                    setImagePreview(data.image);
                    setFeaturedImage(data.image);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            console.error('Slug:', slug);
            console.error('Content Type:', contentType);
            // Don't show alert for new posts
            if (slug) {
                alert(`Error loading ${contentType}: ${error.message}`);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (newBlocks) => {
        setFormData({ ...formData, content: newBlocks });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const confirmPublish = async () => {
        setShowConfirm(false);
        setLoading(true);

        const dataToSave = {
            ...formData,
            image: featuredImage,
            mediaUrl: formData.videoUrl,
            type: contentType === 'casestudy' ? (formData.videoUrl ? 'video' : 'image') : undefined,
            content: formData.content,
            isVisible: formData.status === 'Published',
            author: { name: formData.author } // Ensure author is saved as an object
        };

        if (typeof dataToSave.metaKeywords === 'string') {
            dataToSave.seoKeywords = dataToSave.metaKeywords.split(',').map(k => k.trim());
        }

        try {
            if (isEdit) {
                const idToUpdate = formData._id || formData.id || slug;
                if (contentType === 'blog') {
                    await blogService.update(idToUpdate, dataToSave);
                } else {
                    await caseStudyService.update(idToUpdate, dataToSave);
                }
            } else {
                if (contentType === 'blog') {
                    await blogService.create(dataToSave);
                } else {
                    await caseStudyService.create(dataToSave);
                }
            }
            navigate(`/admin/content/${contentType}`);
        } catch (error) {
            console.error('Error saving content', error);
            if (error.name === 'QuotaExceededError' || (error.code === 22) || (error.number === -2147024882)) {
                alert('Storage Full! The image you are trying to upload is likely too large. Please try a smaller image (under 500KB).');
            } else {
                alert(`Error saving item: ${error.message || 'Unknown error'}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this content?')) return;
        try {
            const idToDelete = formData._id || formData.id || slug;
            if (contentType === 'blog') {
                await blogService.delete(idToDelete);
            } else {
                await caseStudyService.delete(idToDelete);
            }
            navigate(`/admin/content/${contentType}`);
        } catch (error) {
            alert('Error deleting content');
        }
    };

    return (
        <div className="admin-layout">
            <AdminSidebar stats={stats} />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    {/* Header */}
                    {/* Header */}
                    <AdminNav />
                    <div style={{ height: '100px' }}></div>

                    {/* Sub Header for Navigation Back */}
                    <div style={{ padding: '0 5%', maxWidth: '1400px', margin: '20px auto 0' }}>
                        <button onClick={() => navigate(`/admin/content/${contentType}`)} style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                            ← Back to {contentType === 'blog' ? 'Blogs' : 'Case Studies'}
                        </button>
                    </div>

                    <div className="admin-container" style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="form-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ color: '#FF9B50', fontSize: '2rem', fontWeight: 900 }}>{isEdit ? 'Edit' : 'Add New'} {contentType === 'blog' ? 'Blog' : 'Case Study'}</h2>
                            {!isEdit && (
                                <select
                                    value={contentType}
                                    onChange={(e) => setContentType(e.target.value)}
                                    className="admin-input"
                                    style={{ width: 'auto' }}
                                >
                                    <option value="blog">Blog</option>
                                    <option value="casestudy">Case Study</option>
                                </select>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="blog-form" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>

                            {/* Status Bar */}
                            <div style={{ marginBottom: '2rem', padding: '15px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ fontWeight: 600, color: '#64748b' }}>Status:</span>
                                <select
                                    name="status"
                                    value={formData.status || 'Published'}
                                    onChange={handleChange}
                                    style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontWeight: 600, color: formData.status === 'Draft' ? '#ef4444' : '#10b981' }}
                                >
                                    <option value="Published">Published</option>
                                    <option value="Draft">Draft</option>
                                </select>
                            </div>

                            {/* Standard Fields */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <div className="admin-input-group">
                                        <label className="admin-input-label">Date</label>
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="admin-input" required />
                                    </div>
                                    <div className="admin-input-group">
                                        <label className="admin-input-label">Author</label>
                                        <input
                                            name="author"
                                            value={formData.author}
                                            onChange={handleChange}
                                            className="admin-input"
                                            placeholder="Author Name"
                                        />
                                    </div>
                                    <div className="admin-input-group">
                                        <label className="admin-input-label">Title</label>
                                        <input
                                            name="title"
                                            value={formData.title}
                                            onChange={(e) => {
                                                const newSlug = e.target.value
                                                    .toLowerCase()
                                                    .replace(/[^a-z0-9]+/g, '-')
                                                    .replace(/(^-|-$)+/g, '');

                                                if (!isEdit) {
                                                    setFormData({ ...formData, title: e.target.value, slug: newSlug });
                                                } else {
                                                    setFormData({ ...formData, title: e.target.value });
                                                }
                                            }}
                                            className="admin-input"
                                            required
                                        />
                                    </div>

                                    <div className="admin-input-group">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <label className="admin-input-label" style={{ marginBottom: 0 }}>Slug (URL)</label>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const source = formData.title || '';
                                                    const newSlug = source.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                                    setFormData({ ...formData, slug: newSlug });
                                                }}
                                                style={{ fontSize: '0.8rem', color: '#FF9B50', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                            >
                                                Generate from Title
                                            </button>
                                        </div>
                                        <input
                                            name="slug"
                                            value={formData.slug}
                                            onChange={handleChange}
                                            className="admin-input"
                                            style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#666' }}
                                            required
                                        />
                                    </div>

                                    <div className="admin-input-group">
                                        <label className="admin-input-label">{contentType === 'blog' ? 'Excerpt' : 'Description'}</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="admin-input"
                                            style={{ height: '100px' }}
                                        />
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <div className="admin-input-group" style={{ height: '100%' }}>
                                        <label className="admin-input-label">Featured Image</label>
                                        <DragDropFile
                                            onFileSelect={(dataUrl) => {
                                                setFeaturedImage(dataUrl);
                                                setImagePreview(dataUrl);
                                            }}
                                            preview={imagePreview}
                                            accept="image/*"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* BLOCK EDITOR */}
                            <div className="admin-input-group">
                                <label className="admin-input-label">Content Blocks</label>
                                <BlockEditor
                                    value={formData.content}
                                    onChange={handleContentChange}
                                />
                            </div>

                            {/* SEO SECTION */}
                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px dashed #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#334155', marginBottom: '1.5rem' }}>SEO Settings</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div className="admin-input-group">
                                        <label className="admin-input-label">Meta Title</label>
                                        <input
                                            name="metaTitle"
                                            value={formData.metaTitle || ''}
                                            onChange={handleChange}
                                            className="admin-input"
                                            placeholder="SEO Title (defaults to Title)"
                                        />
                                    </div>
                                    <div className="admin-input-group">
                                        <label className="admin-input-label">Meta Keywords</label>
                                        <input
                                            name="metaKeywords"
                                            value={formData.metaKeywords || ''}
                                            onChange={handleChange}
                                            className="admin-input"
                                            placeholder="React, VR, Education, ..."
                                        />
                                    </div>
                                    <div className="admin-input-group" style={{ gridColumn: '1 / -1' }}>
                                        <label className="admin-input-label">Meta Description</label>
                                        <textarea
                                            name="metaDescription"
                                            value={formData.metaDescription || ''}
                                            onChange={handleChange}
                                            className="admin-input"
                                            placeholder="SEO Description (defaults to Excerpt)"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                                <button type="submit" className="admin-btn" disabled={loading} style={{ background: '#FF9B50', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '50px', fontWeight: 700, cursor: 'pointer', flex: 1 }}>
                                    {loading ? 'Saving...' : (isEdit ? 'Update' : 'Publish')}
                                </button>
                                <button type="button" onClick={() => navigate(`/admin/content/${contentType}`)} style={{ background: 'transparent', border: '1px solid #cbd5e1', color: '#64748b', padding: '12px 32px', borderRadius: '50px', fontWeight: 600, cursor: 'pointer' }}>
                                    Cancel
                                </button>
                                {isEdit && isSuperAdmin && (
                                    <button
                                        type="button"
                                        onClick={handleDelete}
                                        style={{ background: '#fee2e2', border: 'none', color: '#991b1b', padding: '12px 32px', borderRadius: '50px', fontWeight: 600, cursor: 'pointer' }}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Confirmation Modal */}
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
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2D2D2D', margin: '0 0 1rem 0' }}>
                                Confirm {isEdit ? 'Update' : 'Publish'}
                            </h3>
                            <p style={{ opacity: 0.8, margin: '0 0 1.5rem 0' }}>
                                Are you sure you want to {isEdit ? 'update' : 'publish'} this {contentType === 'blog' ? 'blog post' : 'case study'}?
                            </p>
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
                                    onClick={confirmPublish}
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
    );
};

export default BlogForm;
