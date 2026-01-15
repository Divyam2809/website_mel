import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import AdminSidebar from './AdminSidebar';
import DragDropFile from './DragDropFile';

export default function FooterManager() {
    const navigate = useNavigate();
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role === 'superadmin') {
            setIsSuperAdmin(true);
        }
        loadConfig();
    }, []);

    const loadConfig = async () => {
        try {
            const res = await mockStorage.getFooterConfig();
            setConfig(res.data);
            setLoading(false);
        } catch (error) {
            console.error('Error loading footer config:', error);
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await mockStorage.saveFooterConfig(config);
            alert('Footer updated successfully!');
        } catch (error) {
            alert('Error updating footer');
        }
    };

    const updateField = (section, field, value) => {
        setConfig(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const updateColumnTitle = (colIndex, value) => {
        const newCols = [...config.columns];
        newCols[colIndex].title = value;
        setConfig({ ...config, columns: newCols });
    };

    const updateLink = (colIndex, linkIndex, field, value) => {
        const newCols = [...config.columns];
        newCols[colIndex].links[linkIndex][field] = value;
        setConfig({ ...config, columns: newCols });
    };

    const toggleLinkVisibility = (colIndex, linkIndex) => {
        const newCols = [...config.columns];
        newCols[colIndex].links[linkIndex].isVisible = !newCols[colIndex].links[linkIndex].isVisible;
        setConfig({ ...config, columns: newCols });
    };

    // Helper to add a new link to a column
    const addLink = (colIndex) => {
        const newCols = [...config.columns];
        newCols[colIndex].links.push({ label: 'New Link', link: '#', type: 'external', isVisible: true });
        setConfig({ ...config, columns: newCols });
    };

    // Helper to remove a link
    const removeLink = (colIndex, linkIndex) => {
        const newCols = [...config.columns];
        newCols[colIndex].links.splice(linkIndex, 1);
        setConfig({ ...config, columns: newCols });
    };

    const updateSocialLink = (index, field, value) => {
        const newLinks = [...config.socialLinks];
        newLinks[index][field] = value;
        setConfig({ ...config, socialLinks: newLinks });
    };

    const addSocialLink = () => {
        const newLinks = [...config.socialLinks];
        newLinks.push({ name: 'New Platform', link: '#', src: '/assets/Melzo_Logo.svg', alt: 'Melzo Logo', isVisible: true });
        setConfig({ ...config, socialLinks: newLinks });
    };

    const removeSocialLink = (index) => {
        const newLinks = [...config.socialLinks];
        newLinks.splice(index, 1);
        setConfig({ ...config, socialLinks: newLinks });
    };


    const logout = () => {
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    if (loading || !config) return <div>Loading...</div>;

    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    <div className="admin-header">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/assets/Melzo_Logo.svg" alt="Melzo" style={{ height: '40px', cursor: 'pointer' }} onClick={() => navigate('/admin/dashboard')} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {['Analytics', 'Recent Queries', 'Content Management'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => navigate('/admin/dashboard')}
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
                                onClick={logout}
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

                    <div style={{ padding: '0 5% 40px 5%', maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px 0 30px', gap: '15px' }}>
                            <button
                                onClick={() => navigate('/admin/dashboard')}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    padding: '8px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#666',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => { e.target.style.borderColor = '#FF9B50'; e.target.style.color = '#FF9B50'; }}
                                onMouseLeave={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.color = '#666'; }}
                            >
                                ← Dashboard
                            </button>

                            <button
                                onClick={handleSave}
                                style={{
                                    background: '#FF9B50',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 24px',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                                }}
                            >
                                Save Changes
                            </button>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#FF9B50', margin: 0 }}>Footer Management</h1>
                            <p style={{ opacity: 0.6, marginTop: '10px' }}>
                                Manage footer content, links, and visibility.
                                {!isSuperAdmin && <span style={{ color: '#ea6805' }}> (Super Admin access required to add/remove structure)</span>}
                            </p>
                        </div>

                        <form onSubmit={handleSave} style={{ maxWidth: '1000px' }}>

                            {/* Description Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Company Description</h3>
                                <textarea
                                    value={config.description}
                                    onChange={(e) => setConfig({ ...config, description: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        minHeight: '100px',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}
                                />
                            </div>

                            {/* Contact Info */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Contact Information</h3>
                                <div style={{ display: 'grid', gap: '15px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#666' }}>Phone Number</label>
                                        <input
                                            type="text"
                                            value={config.contact.phone}
                                            onChange={(e) => updateField('contact', 'phone', e.target.value)}
                                            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#666' }}>Address</label>
                                        <textarea
                                            value={config.contact.address}
                                            onChange={(e) => updateField('contact', 'address', e.target.value)}
                                            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Social Media Links</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
                                    {config.socialLinks && config.socialLinks.map((social, index) => (
                                        <div key={index} style={{
                                            background: '#f8fafc',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            border: '1px solid #e2e8f0',
                                            opacity: social.isVisible ? 1 : 0.6
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                                <input
                                                    type="text"
                                                    value={social.name}
                                                    onChange={(e) => updateSocialLink(index, 'name', e.target.value)}
                                                    placeholder="Platform Name"
                                                    style={{
                                                        fontWeight: 'bold',
                                                        color: '#333',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '4px',
                                                        padding: '4px 8px',
                                                        width: '50%'
                                                    }}
                                                />
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => updateSocialLink(index, 'isVisible', !social.isVisible)}
                                                        style={{
                                                            background: social.isVisible ? '#10b981' : '#94a3b8',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            padding: '4px 10px',
                                                            fontSize: '0.8rem',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        {social.isVisible ? 'Visible' : 'Hidden'}
                                                    </button>
                                                    {isSuperAdmin && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeSocialLink(index)}
                                                            style={{
                                                                background: '#ef4444',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                padding: '4px 10px',
                                                                fontSize: '0.8rem',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            ✕
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                <div>
                                                    <label style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '4px' }}>Icon</label>
                                                    <DragDropFile
                                                        preview={social.src}
                                                        onFileSelect={(dataUrl) => updateSocialLink(index, 'src', dataUrl)}
                                                        accept="image/svg+xml,image/png"
                                                        altText={social.alt || ''}
                                                        onAltChange={(val) => updateSocialLink(index, 'alt', val)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={social.src}
                                                        onChange={(e) => updateSocialLink(index, 'src', e.target.value)}
                                                        placeholder="Or enter icon path..."
                                                        style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem', marginTop: '5px' }}
                                                    />
                                                </div>
                                                <div>
                                                    <label style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '4px' }}>Profile URL</label>
                                                    <input
                                                        type="text"
                                                        value={social.link}
                                                        onChange={(e) => updateSocialLink(index, 'link', e.target.value)}
                                                        placeholder="https://..."
                                                        style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addSocialLink}
                                        style={{
                                            background: 'white',
                                            border: '2px dashed #cbd5e1',
                                            borderRadius: '8px',
                                            padding: '20px',
                                            color: '#64748b',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}
                                        onMouseEnter={(e) => { e.target.style.borderColor = '#FF9B50'; e.target.style.color = '#FF9B50'; }}
                                        onMouseLeave={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.color = '#64748b'; }}
                                    >
                                        + Add Social Link
                                    </button>
                                </div>
                            </div>

                            {/* Columns Management */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#333' }}>Footer Columns</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    {config.columns.map((col, colIndex) => (
                                        <div key={colIndex} style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                            <input
                                                type="text"
                                                value={col.title}
                                                onChange={(e) => updateColumnTitle(colIndex, e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    padding: '8px',
                                                    marginBottom: '15px',
                                                    fontWeight: 'bold',
                                                    border: '1px solid #cbd5e1',
                                                    borderRadius: '6px'
                                                }}
                                            />

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                {col.links.map((link, linkIndex) => (
                                                    <div key={linkIndex} style={{
                                                        background: 'white',
                                                        padding: '10px',
                                                        borderRadius: '6px',
                                                        border: '1px solid #e2e8f0',
                                                        opacity: link.isVisible ? 1 : 0.6
                                                    }}>
                                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
                                                            <input
                                                                type="text"
                                                                value={link.label}
                                                                onChange={(e) => updateLink(colIndex, linkIndex, 'label', e.target.value)}
                                                                placeholder="Label"
                                                                style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #e2e8f0' }}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleLinkVisibility(colIndex, linkIndex)}
                                                                style={{
                                                                    background: link.isVisible ? '#10b981' : '#94a3b8',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '4px',
                                                                    padding: '0 8px',
                                                                    fontSize: '0.8rem',
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                {link.isVisible ? 'Show' : 'Hide'}
                                                            </button>
                                                            {isSuperAdmin && (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeLink(colIndex, linkIndex)}
                                                                    style={{
                                                                        background: '#ef4444',
                                                                        color: 'white',
                                                                        border: 'none',
                                                                        borderRadius: '4px',
                                                                        padding: '0 8px',
                                                                        fontSize: '0.8rem',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                >
                                                                    x
                                                                </button>
                                                            )}
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={link.link || link.id || ''}
                                                            onChange={(e) => updateLink(colIndex, linkIndex, link.id ? 'id' : 'link', e.target.value)}
                                                            placeholder="Link / ID"
                                                            style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}
                                                        />
                                                    </div>
                                                ))}
                                                {isSuperAdmin && (
                                                    <button
                                                        type="button"
                                                        onClick={() => addLink(colIndex)}
                                                        style={{
                                                            marginTop: '10px',
                                                            padding: '8px',
                                                            background: 'white',
                                                            border: '1px dashed #cbd5e1',
                                                            color: '#64748b',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer',
                                                            width: '100%'
                                                        }}
                                                    >
                                                        + Add Link
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
