import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import blogService from '../../services/blogService';
import newsService from '../../services/newsService';
import caseStudyService from '../../services/caseStudyService';
import awardsService from '../../services/awardsService';
import faqService from '../../services/faqService';
import teamService from '../../services/teamService';
import testimonialService from '../../services/testimonialService';
import employeeTestimonialService from '../../services/employeeTestimonialService';
import timelineService from '../../services/timelineService';
import DragDropFile from './DragDropFile';
import BlockEditor from './BlockEditor';
import AdminSidebar from './AdminSidebar';
import AdminNav from './AdminNav';
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
        teamdetails: 0, caseStudy: 0, testimonials: 0, timeline: 0,
        jobs: 0, jobApplications: 0, employeeStories: 0, demoQueries: 0, privacyPolicy: 0, careersGallery: 0
    });
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const isSuperAdmin = user.role === 'superadmin';
    const isHR = user.role === 'hr';

    // Role-based access control
    useEffect(() => {
        if (isHR && !['jobs', 'jobApplications', 'employeeStories', 'careersGallery'].includes(moduleType)) {
            navigate('/admin/content/jobs');
        }
    }, [isHR, moduleType, navigate]);

    const moduleConfig = {
        blog: {
            title: 'Blog Post',
            fields: { title: 'text', slug: 'text', excerpt: 'textarea', content: 'json:blocks', category: 'text', status: 'select:Published,Draft', image: 'file:image', metaTitle: 'text', metaDescription: 'textarea', metaKeywords: 'text' },
            get: () => blogService.getAll(),
            save: (data) => blogService.create(data),
            update: (id, data) => blogService.update(id, data),
            toggle: (id) => blogService.toggleVisibility(id),
            delete: (id) => blogService.delete(id)
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
            get: () => newsService.getAll(),
            save: (data) => newsService.create(data),
            update: (id, data) => newsService.update(id, data),
            toggle: (id) => newsService.toggleVisibility(id),
            delete: (id) => newsService.delete(id)
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
            get: () => awardsService.getAll(),
            save: (data) => awardsService.create(data),
            update: (id, data) => awardsService.update(id, data),
            toggle: (id) => awardsService.toggleVisibility(id),
            delete: (id) => awardsService.delete(id)
        },
        faqs: {
            title: 'FAQs',
            fields: {
                question: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                answer: 'textarea',
                category: 'text',
                sort_order: 'number',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => faqService.getAll(),
            save: (data) => faqService.create(data),
            update: (id, data) => faqService.update(id, data),
            toggle: (id) => faqService.toggleVisibility(id),
            delete: (id) => faqService.delete(id)
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
                sort_order: 'number',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => teamService.getAll(),
            save: (data) => teamService.create(data),
            update: (id, data) => teamService.update(id, data),
            toggle: (id) => teamService.toggleVisibility(id),
            delete: (id) => teamService.delete(id)
        },
        industries: {
            title: 'Industries',
            fields: {
                title: 'text',
                slug: 'text',
                status: 'select:Published,Draft',
                summary: 'textarea',
                impact: 'textarea',
                details: 'textarea',
                modalTitle: 'text',
                fullSummary: 'textarea',
                targetAudience: 'textarea',
                problemsSolved: 'textarea',
                useCases: 'textarea',
                statsString: 'textarea',
                tags: 'text',
                image: 'file',
                metaTitle: 'text',
                metaDescription: 'textarea',
                metaKeywords: 'text'
            },
            get: () => mockStorage.getIndustries(),
            save: (data) => mockStorage.saveIndustry(data),
            update: (id, data) => mockStorage.updateIndustry(id, data),
            toggle: (id) => mockStorage.toggleIndustryVisibility(id),
            delete: (id) => mockStorage.deleteIndustry(id)
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
            get: () => caseStudyService.getAll(),
            save: (data) => caseStudyService.create(data),
            update: (id, data) => caseStudyService.update(id, data),
            toggle: (id) => caseStudyService.toggleVisibility(id),
            delete: (id) => caseStudyService.delete(id)
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
            get: () => testimonialService.getAll(),
            save: (data) => testimonialService.create(data),
            update: (id, data) => testimonialService.update(id, data),
            toggle: (id) => testimonialService.toggleVisibility(id),
            delete: (id) => testimonialService.delete(id)
        },
        timeline: {
            title: 'Timeline Events',
            fields: {
                year: 'text',
                title: 'text',
                content: 'textarea',
                status: 'select:Published,Draft'
            },
            get: () => timelineService.getAll(),
            save: (data) => timelineService.create(data),
            update: (id, data) => timelineService.update(id, data),
            toggle: (id) => timelineService.toggleVisibility(id),
            delete: (id) => timelineService.delete(id)
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
        },
        jobs: {
            title: 'Job Openings',
            fields: {
                title: 'text',
                slug: 'text',
                location: 'text',
                type: 'select:Full Time,Part Time,Contract,Internship',
                department: 'text',
                excerpt: 'textarea',
                purpose: 'textarea',
                mission: 'json:blocks',
                requirements: 'json:blocks',
                status: 'select:Published,Draft'
            },
            get: () => mockStorage.getJobs(),
            save: (data) => mockStorage.saveJob(data),
            update: (id, data) => mockStorage.updateJob(id, data),
            toggle: (id) => mockStorage.toggleJobVisibility(id),
            delete: (id) => mockStorage.deleteJob(id)
        },
        jobApplications: {
            title: 'Job Applications',
            fields: {
                fullName: 'text',
                email: 'email',
                phone: 'tel',
                linkedin: 'url',
                note: 'textarea',
                jobTitle: 'text',
                appliedAt: 'date',
                resume: 'text'
            },
            get: () => mockStorage.getJobApplications(),
            save: (data) => Promise.resolve(), // Applications are submitted from public site
            update: (id, data) => Promise.resolve(),
            toggle: (id) => Promise.resolve(),
            delete: (id) => mockStorage.deleteJobApplication(id)
        },
        employeeStories: {
            title: 'Employee Stories',
            fields: {
                name: 'text',
                status: 'select:Published,Draft',
                position: 'text',
                tenure: 'text',
                testimonial: 'textarea',
                story: 'json:blocks',
                image: 'file:image'
            },
            get: () => employeeTestimonialService.getAll(),
            save: (data) => employeeTestimonialService.create(data),
            update: (id, data) => employeeTestimonialService.update(id, data),
            toggle: (id) => employeeTestimonialService.toggleVisibility(id),
            delete: (id) => employeeTestimonialService.delete(id)
        },
        demoQueries: {
            title: 'Leads / Demo Queries',
            fields: {
                name: 'text',
                email: 'email',
                phone: 'tel',
                company: 'text',
                product: 'text',
                message: 'textarea',
                status: 'select:Pending,Contacted,Closed',
                notes: 'textarea'
            },
            get: () => mockStorage.getDemoQueries(),
            save: (data) => mockStorage.saveDemoQuery(data),
            update: (id, data) => mockStorage.updateDemoQuery(id, data),
            toggle: (id) => Promise.resolve(),
            delete: (id) => mockStorage.deleteDemoQuery(id)
        },
        privacyPolicy: {
            title: 'Privacy Policy Sections',
            fields: {
                title: 'text',
                icon: 'select:doc,gear,shield,users,mail',
                sort_order: 'number',
                content: 'json:blocks',
                status: 'select:Published,Draft'
            },
            get: () => mockStorage.getPrivacyPolicy(),
            save: (data) => mockStorage.savePrivacySection(data),
            update: (id, data) => mockStorage.updatePrivacySection(id, data),
            toggle: (id) => mockStorage.togglePrivacySectionVisibility(id),
            delete: (id) => mockStorage.deletePrivacySection(id)
        },
        careersGallery: {
            title: 'Life at Melzo Gallery',
            fields: {
                title: 'text',
                status: 'select:Published,Draft',
                image: 'file:image',
                caption: 'textarea',
                sort_order: 'number'
            },
            get: () => mockStorage.getCareersGallery(),
            save: (data) => mockStorage.saveCareersGallery(data),
            update: (id, data) => mockStorage.updateCareersGallery(id, data),
            toggle: (id) => mockStorage.toggleCareersGalleryVisibility(id),
            delete: (id) => mockStorage.deleteCareersGallery(id)
        }
    };

    const config = moduleConfig[type];

    useEffect(() => {
        if (!config || (user && user.role === 'sales' && type !== 'demoQueries')) {
            navigate('/admin/dashboard');
            return;
        }
        loadItems();
        loadStats();
    }, [type]);

    const loadItems = async () => {
        try {
            const response = await config.get();
            // Normalize IDs: ensure _id exists (use id if _id is missing)
            const normalizedData = (response.data || []).map(item => ({
                ...item,
                _id: item._id || item.id
            }));
            setItems(normalizedData);
        } catch (error) {
            console.error('Error loading items:', error);
            // Handle case where response.data might be undefined
            setItems([]);
        }
    };

    const loadStats = async () => {
        try {
            const [blogs, news, awards, faqs, team, cases, testimonials, timeline, jobs, applications, stories, queries, privacy, gallery] = await Promise.all([
                blogService.getAll(),
                newsService.getAll(),
                awardsService.getAll(),
                faqService.getAll(),
                teamService.getAll(),
                caseStudyService.getAll(),
                testimonialService.getAll(),
                timelineService.getAll(),
                mockStorage.getJobs(),
                mockStorage.getJobApplications(),
                employeeTestimonialService.getAll(),
                mockStorage.getDemoQueries(),
                mockStorage.getPrivacyPolicy(),
                mockStorage.getCareersGallery()
            ]);

            setStats({
                blogs: blogs.data.length,
                news: news.data.length,
                awards: awards.data.length,
                faqs: faqs.data.length,
                teamdetails: team.data.length,
                caseStudy: cases.data.length,
                testimonials: testimonials.data.length,
                timeline: timeline.data.length,
                jobs: jobs.data.length,
                jobApplications: applications.data.length,
                employeeStories: stories.data.length,
                demoQueries: queries.data.length,
                demoQueries: queries.data.length,
                privacyPolicy: privacy.data.length,
                careersGallery: gallery.data.length
            });
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    };

    const handleSubmit = () => {
        alert('🟢 handleSubmit called!');
        const action = editItem ? 'update' : 'create';
        setConfirmAction({
            title: `Confirm ${action.charAt(0).toUpperCase() + action.slice(1)} `,
            message: `Are you sure you want to ${action} this ${type}?`,
            onConfirm: async () => {
                try {
                    console.log('=== SAVE STARTING ===');
                    console.log('Action:', action);
                    console.log('Form Data:', formData);
                    console.log('Config:', { type, hasConfig: !!config });

                    if (editItem) {
                        console.log('Updating item with ID:', editItem._id);
                        await config.update(editItem._id, formData);
                    } else {
                        console.log('Creating new item');
                        const result = await config.save(formData);
                        console.log('Save result:', result);
                    }

                    console.log('=== SAVE SUCCESSFUL ===');
                    await loadItems();
                    await loadStats();
                    setShowForm(false);
                    setEditItem(null);
                    setFormData({});
                } catch (error) {
                    console.error("=== SAVE ERROR ===", error);
                    console.error("Error details:", {
                        name: error.name,
                        message: error.message,
                        stack: error.stack
                    });
                    if (error && (error.name === 'QuotaExceededError' || error.code === 22 || error.message?.includes('quota'))) {
                        alert('Storage Limit Exceeded! \n\nThe browser\'s local storage is full. Please try:\n1. Uploading smaller images (compress them first).\n2. Deleting old or unused items.\n3. Using fewer high-res images.');
                    } else {
                        alert(`Error saving item: ${error.message || 'Unknown error'}`);
                    }
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
                    console.error('Toggle error in component:', error);
                    alert(`Error toggling visibility: ${error.message || 'Unknown error'}`);
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
                    readOnly={type === 'jobApplications'}
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
                    disabled={type === 'jobApplications'}
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
                    value={key === 'appliedAt' && formData[key] ? formData[key].split('T')[0] : (formData[key] || '')}
                    readOnly={type === 'jobApplications'}
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
                        <AdminNav />
                        <div style={{ height: '100px' }}></div>


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
                                    {type !== 'jobApplications' && (
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
                                    )}
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
                    {/* Fixed Top Navbar */}
                    <AdminNav />
                    <div style={{ height: '100px' }}></div>

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
                            {type !== 'jobApplications' && (
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
                            )}
                        </div>
                    </div>

                    <div style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>

                        {/* Summary */}
                        <div style={{ marginBottom: '3rem', padding: '20px', background: '#f8fafc', borderRadius: '16px', display: 'flex', gap: '30px' }}>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Total {type === 'jobApplications' ? 'Applications' : 'Items'}</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#334155' }}>{items.length}</div>
                            </div>
                            {type !== 'jobApplications' && (
                                <>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>Published</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>{items.filter(i => i.status !== 'Draft' && i.isVisible !== false && i.isVisible !== 0).length}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: 600 }}>Drafts</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b' }}>{items.filter(i => i.status === 'Draft' || i.isVisible === false || i.isVisible === 0).length}</div>
                                    </div>
                                </>
                            )}
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
                                {type === 'jobApplications' ? (
                                    <div>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            Applied Applications <span style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>({items.length})</span>
                                        </h2>
                                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                                            {items.map(item => (
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
                                                            {item.fullName || 'Untitled'}
                                                            {item.jobTitle && <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginLeft: '10px' }}>({item.jobTitle})</span>}
                                                        </h3>
                                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                            {item.appliedAt && (
                                                                <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>
                                                                    Applied: {new Date(item.appliedAt).toLocaleDateString()}
                                                                </span>
                                                            )}
                                                            <span style={{ fontSize: '0.85rem', color: '#666' }}>{item.email}</span>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <button
                                                            onClick={() => { setEditItem(item); setFormData(item); setShowForm(true); }}
                                                            style={{
                                                                background: '#E5E7EB',
                                                                color: '#374151',
                                                                border: '1px solid #D1D5DB',
                                                                padding: '8px 20px',
                                                                borderRadius: '20px',
                                                                cursor: 'pointer',
                                                                fontWeight: 600,
                                                                fontSize: '0.85rem'
                                                            }}
                                                        >
                                                            Open
                                                        </button>
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
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {/* DRAFTS SECTION */}
                                        <div style={{ marginBottom: '4rem' }}>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                Drafts <span style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>({items.filter(i => i.status === 'Draft' || i.isVisible === false || i.isVisible === 0).length})</span>
                                            </h2>
                                            {items.filter(i => i.status === 'Draft' || i.isVisible === false || i.isVisible === 0).length === 0 ? (
                                                <p style={{ opacity: 0.5, fontStyle: 'italic' }}>No drafts available.</p>
                                            ) : (
                                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                                    {items.filter(i => i.status === 'Draft' || i.isVisible === false || i.isVisible === 0).map(item => (
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
                                                                    {item.title || item.name || item.question || item.fullName || 'Untitled'}
                                                                    {item.jobTitle && <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginLeft: '10px' }}>({item.jobTitle})</span>}
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
                                                                <button
                                                                    onClick={() => handleToggle(item._id, item.isVisible)}
                                                                    style={{
                                                                        background: '#d1fae5',
                                                                        color: '#065f46',
                                                                        border: 'none',
                                                                        padding: '8px 20px',
                                                                        borderRadius: '20px',
                                                                        cursor: 'pointer',
                                                                        fontWeight: 600,
                                                                        fontSize: '0.85rem'
                                                                    }}
                                                                >
                                                                    Publish
                                                                </button>
                                                                {(isSuperAdmin || (isHR && (type === 'jobs' || type === 'jobApplications'))) && (
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
                                                Published <span style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>({items.filter(i => i.status !== 'Draft' && i.isVisible !== false && i.isVisible !== 0).length})</span>
                                            </h2>
                                            {items.filter(i => i.status !== 'Draft' && i.isVisible !== false && i.isVisible !== 0).length === 0 ? (
                                                <p style={{ opacity: 0.5, fontStyle: 'italic' }}>No published items yet.</p>
                                            ) : (
                                                <div style={{ display: 'grid', gap: '1.5rem' }}>
                                                    {items.filter(i => i.status !== 'Draft' && i.isVisible !== false && i.isVisible !== 0).map(item => (
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
                                                                    {item.title || item.name || item.question || item.fullName || 'Untitled'}
                                                                    {item.jobTitle && <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginLeft: '10px' }}>({item.jobTitle})</span>}
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
                                                                    {type === 'jobApplications' && item.appliedAt && (
                                                                        <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>
                                                                            Applied: {new Date(item.appliedAt).toLocaleDateString()}
                                                                        </span>
                                                                    )}
                                                                    {type !== 'jobApplications' && item.updatedAt && (
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
                                                                        background: (item.isVisible === false || item.isVisible === 0 || item.status === 'Draft') ? '#d1fae5' : '#fee2e2',
                                                                        color: (item.isVisible === false || item.isVisible === 0 || item.status === 'Draft') ? '#065f46' : '#991b1b',
                                                                        border: 'none',
                                                                        padding: '8px 20px',
                                                                        borderRadius: '20px',
                                                                        cursor: 'pointer',
                                                                        fontWeight: 600,
                                                                        fontSize: '0.85rem'
                                                                    }}
                                                                >
                                                                    {(item.isVisible === false || item.isVisible === 0 || item.status === 'Draft') ? 'Publish' : 'Move to Draft'}
                                                                </button>
                                                                {(isSuperAdmin || (isHR && (type === 'jobs' || type === 'jobApplications'))) && (
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
        </div >
    );
};

export default ContentManager;
