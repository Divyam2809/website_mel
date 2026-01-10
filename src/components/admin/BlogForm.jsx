import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import mockStorage from '../../services/mockStorage';
import './admin.css';

const BlogForm = () => {
    const { slug } = useParams(); // In our new logic, this is actually the ID
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialType = queryParams.get('type') || 'blog';

    const isEdit = !!slug;

    const [contentType, setContentType] = useState(initialType);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: 'EdTech',
        boards: [],
        content: '',
        description: '', // For Case Study
        seoKeywords: '',
        ctaType: 'Book a Demo',
        status: 'Draft',
        videoUrl: '', // For Case Study video
        date: new Date().toISOString().split('T')[0] // Default to today
    });
    const [featuredImage, setFeaturedImage] = useState(null); // File object or base64 string
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEdit) {
            fetchData();
        }
    }, [slug, contentType]);

    const fetchData = async () => {
        try {
            let data;
            if (contentType === 'blog') {
                const response = await mockStorage.getBlog(slug);
                data = response.data;
            } else {
                const response = await mockStorage.getCaseStudies(); // Warning: getCaseStudy(id) is strictly better but we can find it
                const allStudies = response.data;
                data = allStudies.find(s => s._id === slug);
            }

            if (data) {
                setFormData({
                    ...data,
                    boards: data.boards || [],
                    seoKeywords: Array.isArray(data.seoKeywords) ? data.seoKeywords.join(', ') : (data.seoKeywords || ''),
                    content: data.content || '',
                    description: data.description || '',
                    videoUrl: data.mediaUrl || '',
                    date: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
                });
                if (data.image) {
                    setImagePreview(data.image);
                    setFeaturedImage(data.image); // Keep existing image
                }
            }
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (content) => {
        setFormData({ ...formData, content });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFeaturedImage(reader.result);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBoardChange = (e) => {
        const { value, checked } = e.target;
        let updatedBoards = [...formData.boards];
        if (checked) {
            updatedBoards.push(value);
        } else {
            updatedBoards = updatedBoards.filter(b => b !== value);
        }
        setFormData({ ...formData, boards: updatedBoards });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const dataToSave = {
            ...formData,
            image: featuredImage, // Save base64 directly
            mediaUrl: formData.videoUrl, // Map videoUrl to mediaUrl for case studies
            type: contentType === 'casestudy' ? (formData.videoUrl ? 'video' : 'image') : undefined
        };

        // Clean up array fields
        if (typeof dataToSave.seoKeywords === 'string') {
            dataToSave.seoKeywords = dataToSave.seoKeywords.split(',').map(k => k.trim());
        }

        try {
            if (isEdit) {
                if (contentType === 'blog') {
                    await mockStorage.updateBlog(slug, dataToSave);
                } else {
                    await mockStorage.updateCaseStudy(slug, dataToSave);
                }
            } else {
                if (contentType === 'blog') {
                    await mockStorage.saveBlog(dataToSave);
                } else {
                    await mockStorage.saveCaseStudy(dataToSave);
                }
            }
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error saving content', error);
            alert('Error saving content');
        } finally {
            setLoading(false);
        }
    };

    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFeaturedImage(reader.result);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="admin-container">
            <div className="form-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: '#FF9B50' }}>{isEdit ? 'Edit' : 'Add New'} {contentType === 'blog' ? 'Blog' : 'Case Study'}</h2>
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

            <form onSubmit={handleSubmit} className="blog-form" style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px' }}>

                {/* Simplified Form Fields */}
                <label className="input-label">Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="admin-input"
                    style={{ marginBottom: '20px' }}
                    required
                />

                <label className="input-label">Title</label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={(e) => {
                        // Auto-generate slug from title
                        const newSlug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        setFormData({ ...formData, title: e.target.value, slug: newSlug });
                    }}
                    className="admin-input"
                    required
                />

                {/* Hidden Slug Input (Auto-generated) */}
                <input type="hidden" name="slug" value={formData.slug} />

                {/* Description Field (Rich Text for Blog, Textarea for Case Study) */}
                <label className="input-label">Description</label>
                {contentType === 'blog' ? (
                    <div style={{ backgroundColor: 'white', color: 'black', marginBottom: '20px', borderRadius: '5px' }}>
                        <ReactQuill theme="snow" value={formData.content} onChange={handleContentChange} style={{ height: '200px', marginBottom: '40px' }} />
                    </div>
                ) : (
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="admin-input"
                        style={{ height: '150px', paddingTop: '10px' }}
                        required
                    />
                )}

                {/* Image / Video Upload */}
                <label className="input-label">Image / Video Upload</label>
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    style={{
                        border: isDragging ? '2px dashed #FF9B50' : '1px dashed #444',
                        backgroundColor: isDragging ? 'rgba(255, 155, 80, 0.1)' : 'transparent',
                        padding: '40px',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                    }}
                >
                    <p style={{ marginBottom: '10px', fontSize: '1.1rem', fontWeight: 'bold', color: isDragging ? '#FF9B50' : '#888' }}>
                        {isDragging ? 'Drop Image Here' : 'Drag & Drop Image Here'}
                    </p>
                    <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>OR</p>

                    <input type="file" onChange={handleImageChange} className="admin-input" accept="image/*" style={{ marginBottom: '10px', maxWidth: '300px' }} />

                    <div style={{ margin: '15px 0', borderTop: '1px solid #333', paddingTop: '15px' }}>
                        <p style={{ marginBottom: '5px', fontSize: '0.9rem', color: '#888' }}>For Video, Paste URL:</p>
                        <input
                            name="videoUrl"
                            value={formData.videoUrl}
                            onChange={handleChange}
                            className="admin-input"
                            placeholder="Video URL (e.g., YouTube)"
                        />
                    </div>

                    {imagePreview && (
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontSize: '0.8rem', marginBottom: '5px', color: '#888' }}>Image Preview:</p>
                            <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} />
                        </div>
                    )}
                </div>

                {/* Hidden Defaults */}
                <input type="hidden" name="category" value={formData.category} />
                <input type="hidden" name="status" value="Published" />

                <button type="submit" className="admin-btn" disabled={loading} style={{ marginTop: '10px' }}>
                    {loading ? 'Saving...' : (isEdit ? 'Update' : 'Publish')}
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
