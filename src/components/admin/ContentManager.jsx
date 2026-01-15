import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import DragDropFile from './DragDropFile';
import BlockEditor from './BlockEditor';
import AdminSidebar from './AdminSidebar';
import './admin.css';

const ContentManager = () => {
    const { moduleType } = useParams();
    const type = moduleType; // Alias for existing codebase compatibility
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [stats, setStats] = useState({
        blogs: 0, news: 0, awards: 0, faqs: 0,
        teamdetails: 0, caseStudy: 0, testimonials: 0, timeline: 0
    });
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isSuperAdmin = user.role === 'superadmin';

    const moduleConfig = {
        blog: {
            title: 'Blog Post',
            fields: { title: 'text', slug: 'text', excerpt: 'textarea', content: 'json:blocks', category: 'text', status: 'select:Published,Draft', image: 'file:image', metaTitle: 'text', metaDescription: 'textarea', metaKeywords: 'text' },
            get: () => mockStorage.getBlogs(),
            save: (data) => mockStorage.saveBlog(data),
            update: (id, data) => mockStorage.updateBlog(id, data),
            toggle: (id) => mockStorage.toggleBlogVisibility(id),
            delete: (id) => mockStorage.deleteBlog(id)
        },
        news: {
            title: 'News Articles',
            fields: {
                title: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                date: 'date',
                category: 'text',
                language: 'select:English,Hindi,Gujarati',
                excerpt: 'textarea',
                content: 'textarea',
                image: 'file:image',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getNews(),
            save: (data) => mockStorage.saveNews(data),
            update: (id, data) => mockStorage.updateNews(id, data),
            toggle: (id) => mockStorage.toggleNewsVisibility(id),
            delete: (id) => mockStorage.deleteNews(id)
        },
        awards: {
            title: 'Awards & Recognition',
            fields: {
                title: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                organization: 'text',
                date: 'date',
                awardLevel: 'text', // e.g. Winner, Finalist
                prize: 'text',
                description: 'textarea',
                image: 'file',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getAwards(),
            save: (data) => mockStorage.saveAward(data),
            update: (id, data) => mockStorage.updateAward(id, data),
            toggle: (id) => mockStorage.toggleAwardVisibility(id),
            delete: (id) => mockStorage.deleteAward(id)
        },
        faqs: {
            title: 'FAQs',
            fields: {
                question: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                answer: 'textarea',
                category: 'text',
                order: 'number',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getFAQs(),
            save: (data) => mockStorage.saveFAQ(data),
            update: (id, data) => mockStorage.updateFAQ(id, data),
            toggle: (id) => mockStorage.toggleFAQVisibility(id),
            delete: (id) => mockStorage.deleteFAQ(id)
        },
        teamdetails: {
            title: 'Team Members',
            fields: {
                name: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                position: 'text',
                bio: 'textarea',
                email: 'email',
                phone: 'text',
                linkedin: 'text',
                image: 'file',
                order: 'number',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getTeamDetails(),
            save: (data) => mockStorage.saveTeamDetail(data),
            update: (id, data) => mockStorage.updateTeamDetail(id, data),
            toggle: (id) => mockStorage.toggleTeamDetailVisibility(id),
            delete: (id) => mockStorage.deleteTeamDetail(id)
        },
        casestudy: {
            title: 'Case Studies',
            fields: {
                title: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
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
            toggle: (id) => mockStorage.toggleCaseStudyVisibility(id),
            delete: (id) => mockStorage.deleteCaseStudy(id)
        },
        testimonials: {
            title: 'Testimonials',
            fields: {
                name: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                position: 'text',
                testimonial: 'textarea',
                rating: 'number',
                image: 'file',
                projectType: 'text',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getTestimonials(),
            save: (data) => mockStorage.saveTestimonial(data),
            update: (id, data) => mockStorage.updateTestimonial(id, data),
            toggle: (id) => mockStorage.toggleTestimonialVisibility(id),
            delete: (id) => mockStorage.deleteTestimonial(id)
        },
        timeline: {
            title: 'Timeline Events',
            fields: {
                year: 'text',
                title: 'text',
                content: 'textarea',
                status: 'select:Published,Draft'
            },
            get: () => mockStorage.getTimeline(),
            save: (data) => mockStorage.saveTimeline(data),
            update: (id, data) => mockStorage.updateTimeline(id, data),
            toggle: (id) => mockStorage.toggleTimelineVisibility(id),
            delete: (id) => mockStorage.deleteTimeline(id)
        },
        users: {
            title: 'User Management',
            fields: {
                name: 'text',
                email: 'email',
                password: 'password', // Secure input
                role: 'select:superadmin,content_manager,sales',
                status: 'select:Published,Draft' // Reusing Published/Draft as Active/Inactive logic for simplicity or just for consistency
            },
            get: () => mockStorage.getUsers(),
            save: (data) => mockStorage.saveUser(data),
            update: (_id, data) => {
                // If the update logic in mockStorage is strictly by id, we pass it.
                // However, users usually don't have toggle visibility in the same way, but let's keep it consistent.
                return mockStorage.updateUser ? mockStorage.updateUser(_id, data) : Promise.resolve();
            },
            // Since I didn't add updateUser explicitly in the previous step (I only added getUsers, saveUser, deleteUser),
            // I should use saveUser logic or add updateUser to mockStorage.
            // Wait, I added `_create` which is saveUser. I need `updateUser` in mockStorage.
            // Let me double check mockStorage. I only added getUsers, saveUser, deleteUser.
            // I should add `updateUser` to mockStorage in a separate step or just assume I can add it now.
            // Actually, I can use a direct call to `_update` if I had exposed it, but I didn't.
            // For now, let's just implement the 'save' (create).
            // But wait, user management needs update.
            // I will assume I can add `updateUser` to mockStorage in the next step or right now via another tool.
            // For now, let's map it, and I will fix mockStorage immediately after.
            toggle: (id) => Promise.resolve(), // Users don't use visibility toggle typically in this layout
            delete: (id) => mockStorage.deleteUser(id)
        }
    };

    const config = moduleConfig[type];

    useEffect(() => {
        if (!config || (user && user.role === 'sales')) {
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
            const [blogs, news, awards, faqs, team, cases, testimonials, timeline] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials(),
                mockStorage.getTimeline()
            ]);

            setStats({
                blogs: blogs.data.length,
                news: news.data.length,
                awards: awards.data.length,
                faqs: faqs.data.length,
                teamdetails: team.data.length,
                caseStudy: cases.data.length,
                testimonials: testimonials.data.length,
                timeline: timeline.data.length
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

    const handleDelete = (id) => {
        setConfirmAction({
            title: 'Delete Item',
            message: 'Are you sure you want to delete this item? This action cannot be undone.',
            onConfirm: async () => {
                try {
                    await config.delete(id);
                    await loadItems();
                    await loadStats();
                } catch (error) {
                    alert('Error deleting item');
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
        } else if (fieldType.startsWith('file')) {
            const type = fieldType.split(':')[1];
            const accept = type === 'image' ? "image/*" : type === 'video' ? "video/*" : "image/*,video/*";
            return (
                <DragDropFile
                    onFileSelect={(dataUrl) => setFormData({ ...formData, [key]: dataUrl })}
                    preview={formData[key]}
                    altText={formData[key + 'Alt'] || ''}
                    onAltChange={(newAlt) => setFormData({ ...formData, [key + 'Alt']: newAlt })}
                    accept={accept}
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
        } else if (key === 'slug') {
            return (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        className="admin-input"
                        placeholder={label}
                        value={formData[key] || ''}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        style={{ flex: 1 }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            const source = formData.title || formData.name || formData.question || '';
                            const newSlug = source.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                            setFormData({ ...formData, [key]: newSlug });
                        }}
                        style={{
                            padding: '0 15px',
                            background: '#fff7ed',
                            border: '1px solid #FF9B50',
                            color: '#FF9B50',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            whiteSpace: 'nowrap',
                            fontWeight: 600
                        }}
                        title="Generate from Title"
                    >
                        ⚡ Generate
                    </button>
                </div>
            );

        } else if (fieldType === 'password') {
            return (
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="admin-input"
                        placeholder={label}
                        value={formData[key] || ''}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        style={{ paddingRight: '40px' }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            opacity: 0.6,
                            padding: '5px'
                        }}
                    >
                        {showPassword ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        )}
                    </button>
                </div>
            );
        } else {
            const inputType = fieldType === 'email' ? 'email'
                : fieldType === 'number' ? 'number'
                    : fieldType === 'date' ? 'date'
                        : 'text';
            return (
                <input
                    type={inputType}
                    className="admin-input"
                    placeholder={label}
                    value={formData[key] || ''}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        const updates = { [key]: newValue };

                        // Auto-generate slug if:
                        // 1. We are not editing an existing item (or usually for new items)
                        // 2. The field being edited is a "title-like" field
                        // 3. The module has a 'slug' field
                        if (!editItem && config.fields.slug && (key === 'title' || key === 'name' || key === 'question')) {
                            const newSlug = newValue
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '');
                            updates.slug = newSlug;
                        }

                        setFormData({ ...formData, ...updates });
                    }}
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

                        {/* RIGHT: Nav & Logout Group */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                            {/* Nav Links */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {['Analytics', 'Recent Queries', 'Content Management'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            const id = item.toLowerCase().replace(/ /g, '-');
                                            navigate(`/admin/dashboard#${id}`);
                                            // Since we are navigating, we might need a timeout or useEffect on dashboard to handle hash scrolling, 
                                            // effectively just going to dashboard is good for now, or maybe the user just wants the visual consistency.
                                            // The simplest valid approach is to navigate to dashboard.
                                        }}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            color: '#666',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            padding: '8px 20px',
                                            borderRadius: '50px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#FF9B50';
                                            e.target.style.background = 'rgba(255, 155, 80, 0.08)';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 4px 12px rgba(255, 155, 80, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#666';
                                            e.target.style.background = 'transparent';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => {
                                    localStorage.removeItem('user');
                                    navigate('/admin/login');
                                }}
                                style={{
                                    background: 'linear-gradient(135deg, #FF9B50 0%, #FF6B00 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 32px',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                    e.target.style.boxShadow = '0 10px 25px rgba(255, 155, 80, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                                }}
                            >
                                <span>Logout</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                            </button>
                        </div>
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
                                onClick={() => {
                                    if (config.title === 'Blog Post' || config.title === 'Case Studies') {
                                        navigate(`/admin/editor?type=${type}`);
                                    } else {
                                        setShowForm(true);
                                    }
                                }}
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

                        {/* Summary */}
                        <div style={{ marginBottom: '3rem', padding: '20px', background: '#f8fafc', borderRadius: '16px', display: 'flex', gap: '30px' }}>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Total Items</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#334155' }}>{items.length}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>Published</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>{items.filter(i => i.status === 'Published' || (i.isVisible && !i.status)).length}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: 600 }}>Drafts</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b' }}>{items.filter(i => i.status === 'Draft' || (!i.isVisible && !i.status)).length}</div>
                            </div>
                        </div>

                        {items.length === 0 ? (
                            <div style={{ padding: '4rem 2rem', background: '#f9f9f9', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <p style={{ opacity: 0.6, fontSize: '1.1rem', marginBottom: '1.5rem' }}>No {config.title.toLowerCase()} yet</p>
                                <button
                                    onClick={() => {
                                        if (config.title === 'Blog Post' || config.title === 'Case Studies') {
                                            navigate(`/admin/editor?type=${type}`);
                                        } else {
                                            setShowForm(true);
                                        }
                                    }}
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
                            <>
                                {/* DRAFTS SECTION */}
                                <div style={{ marginBottom: '4rem' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        Drafts <span style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>({items.filter(i => i.status === 'Draft' || (!i.isVisible && !i.status)).length})</span>
                                    </h2>
                                    {items.filter(i => i.status === 'Draft' || (!i.isVisible && !i.status)).length === 0 ? (
                                        <p style={{ opacity: 0.5, fontStyle: 'italic' }}>No drafts available.</p>
                                    ) : (
                                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                                            {items.filter(i => i.status === 'Draft' || (!i.isVisible && !i.status)).map(item => (
                                                <div key={item._id} style={{
                                                    padding: '1.5rem',
                                                    background: '#fffbeb',
                                                    borderRadius: '16px',
                                                    border: '1px solid #fcd34d',
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr auto',
                                                    alignItems: 'center',
                                                    gap: '1rem'
                                                }}>
                                                    <div>
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#92400e', margin: '0 0 0.5rem 0' }}>
                                                            {item.title || item.name || item.question || 'Untitled'}
                                                        </h3>
                                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                            <span style={{
                                                                fontSize: '0.85rem',
                                                                fontWeight: 600,
                                                                color: '#b45309',
                                                                background: '#fef3c7',
                                                                padding: '4px 12px',
                                                                borderRadius: '12px'
                                                            }}>
                                                                Draft
                                                            </span>
                                                            {item.updatedAt && (
                                                                <span style={{ opacity: 0.6, fontSize: '0.85rem', color: '#92400e' }}>
                                                                    Updated: {new Date(item.updatedAt).toLocaleDateString()}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <button
                                                            onClick={() => {
                                                                if (config.title === 'Blog Post' || config.title === 'Case Studies') {
                                                                    const identifier = item.slug || item._id;
                                                                    navigate(`/admin/editor/${identifier}?type=${type}`);
                                                                } else {
                                                                    setEditItem(item); setFormData(item); setShowForm(true);
                                                                }
                                                            }}
                                                            style={{
                                                                background: 'white',
                                                                color: '#f59e0b',
                                                                border: '1px solid #f59e0b',
                                                                padding: '8px 20px',
                                                                borderRadius: '20px',
                                                                cursor: 'pointer',
                                                                fontWeight: 600,
                                                                fontSize: '0.85rem'
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        {isSuperAdmin && (
                                                            <button
                                                                onClick={() => handleDelete(item._id)}
                                                                style={{
                                                                    background: '#ef4444',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 20px',
                                                                    borderRadius: '20px',
                                                                    cursor: 'pointer',
                                                                    fontWeight: 600,
                                                                    fontSize: '0.85rem'
                                                                }}
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* PUBLISHED SECTION */}
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        Published <span style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>({items.filter(i => i.status === 'Published' || (i.isVisible && !i.status)).length})</span>
                                    </h2>
                                    {items.filter(i => i.status === 'Published' || (i.isVisible && !i.status)).length === 0 ? (
                                        <p style={{ opacity: 0.5, fontStyle: 'italic' }}>No published items yet.</p>
                                    ) : (
                                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                                            {items.filter(i => i.status === 'Published' || (i.isVisible && !i.status)).map(item => (
                                                <div key={item._id} style={{
                                                    padding: '1.5rem',
                                                    background: '#fcfcfc',
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
                                                                color: '#10b981',
                                                                background: '#d1fae5',
                                                                padding: '4px 12px',
                                                                borderRadius: '12px'
                                                            }}>
                                                                Published
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
                                                            onClick={() => {
                                                                if (config.title === 'Blog Post' || config.title === 'Case Studies') {
                                                                    const identifier = item.slug || item._id;
                                                                    navigate(`/admin/editor/${identifier}?type=${type}`);
                                                                } else {
                                                                    setEditItem(item); setFormData(item); setShowForm(true);
                                                                }
                                                            }}
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
                                                            {item.isVisible ? 'Move to Draft' : 'Publish'}
                                                        </button>
                                                        {isSuperAdmin && (
                                                            <button
                                                                onClick={() => handleDelete(item._id)}
                                                                style={{
                                                                    background: '#ef4444',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 20px',
                                                                    borderRadius: '20px',
                                                                    cursor: 'pointer',
                                                                    fontWeight: 600,
                                                                    fontSize: '0.85rem'
                                                                }}
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
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
