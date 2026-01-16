import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNav from './AdminNav';
import dataStripService from '../../services/dataStripService';
import mockStorage from '../../services/mockStorage';

const DataStripManager = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [homeMessages, setHomeMessages] = useState([]);
    const [aboutMessages, setAboutMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [stats, setStats] = useState({});

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [
                blogs, news, awards, faqs, team, cases, testimonials,
                configRes
            ] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials(),
                dataStripService.getConfig()
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

            const data = configRes.data?.data;
            if (Array.isArray(data)) {
                // Legacy Format: Array of strings
                setHomeMessages(data.map(text => ({ text, status: 'Published' })));
                setAboutMessages([]);
            } else if (data && typeof data === 'object') {
                // New Format: { home: [], about: [] }
                setHomeMessages(data.home || []);
                setAboutMessages(data.about || []);
            } else {
                // Fallback defaults if empty
                setHomeMessages([
                    { text: "USED BY 120+ INSTITUTIONS ACROSS INDIA", status: 'Published' },
                    { text: "COVERS K-12 TO HIGHER EDUCATION & INDUSTRIAL TRAINING", status: 'Published' },
                    { text: "1,200+ STUDENTS IMPACTED PER LAB ANNUALLY", status: 'Published' },
                    { text: "WORKS WITH CSR, GOVERNMENT & PRIVATE INSTITUTIONS", status: 'Published' }
                ]);
                setAboutMessages([]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error loading data:', error);
            setLoading(false);
        }
    };

    const handleMessageChange = (index, value) => {
        if (activeTab === 'home') {
            const newMessages = [...homeMessages];
            newMessages[index].text = value;
            setHomeMessages(newMessages);
        } else {
            const newMessages = [...aboutMessages];
            newMessages[index].text = value;
            setAboutMessages(newMessages);
        }
    };

    const toggleStatus = (index) => {
        if (activeTab === 'home') {
            const newMessages = [...homeMessages];
            newMessages[index].status = newMessages[index].status === 'Published' ? 'Draft' : 'Published';
            setHomeMessages(newMessages);
        } else {
            const newMessages = [...aboutMessages];
            newMessages[index].status = newMessages[index].status === 'Published' ? 'Draft' : 'Published';
            setAboutMessages(newMessages);
        }
    };

    const addMessage = () => {
        const newItem = { text: "", status: 'Draft' };
        if (activeTab === 'home') {
            setHomeMessages([...homeMessages, newItem]);
        } else {
            setAboutMessages([...aboutMessages, newItem]);
        }
    };

    const removeMessage = (index) => {
        if (activeTab === 'home') {
            const newMessages = homeMessages.filter((_, i) => i !== index);
            setHomeMessages(newMessages);
        } else {
            const newMessages = aboutMessages.filter((_, i) => i !== index);
            setAboutMessages(newMessages);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const payload = {
                home: homeMessages,
                about: aboutMessages
            };
            await dataStripService.saveConfig(payload);
            alert('Data Strip updated successfully!');
        } catch (error) {
            console.error('Error updating Data Strip:', error);
            alert('Failed to update Data Strip');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div style={{ padding: '2rem', color: '#fff' }}>Loading configuration...</div>;

    const currentMessages = activeTab === 'home' ? homeMessages : aboutMessages;

    return (
        <>
            <AdminNav />
            <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', paddingTop: '80px' }}>
                <AdminSidebar stats={stats} />
                <div style={{ flex: 1, padding: '40px', marginLeft: '280px' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '8px' }}>
                                    Data Strip Manager
                                </h2>
                                <p style={{ color: '#64748b' }}>Manage the scrolling text strip on Home/About pages</p>
                            </div>
                            <button
                                onClick={() => navigate('/admin/dashboard')}
                                style={{
                                    padding: '10px 20px',
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    color: '#64748b'
                                }}
                            >
                                Back to Dashboard
                            </button>
                        </div>

                        <form onSubmit={handleSave} style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>

                            {/* Tabs */}
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0' }}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('home')}
                                    style={{
                                        padding: '12px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: activeTab === 'home' ? '2px solid #FF9B50' : '2px solid transparent',
                                        fontWeight: 700,
                                        color: activeTab === 'home' ? '#FF9B50' : '#64748b',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Home Page Strip
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('about')}
                                    style={{
                                        padding: '12px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: activeTab === 'about' ? '2px solid #FF9B50' : '2px solid transparent',
                                        fontWeight: 700,
                                        color: activeTab === 'about' ? '#FF9B50' : '#64748b',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                >
                                    About Us Strip
                                </button>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '15px', fontWeight: 600, color: '#334155' }}>
                                    {activeTab === 'home' ? 'Home Page' : 'About Us Page'} Scrolling Messages
                                </label>

                                {currentMessages.length === 0 && (
                                    <p style={{ color: '#94a3b8', fontStyle: 'italic', marginBottom: '1rem' }}>No messages added yet.</p>
                                )}

                                {currentMessages.map((msg, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>

                                        {/* Status Toggle */}
                                        <button
                                            type="button"
                                            onClick={() => toggleStatus(index)}
                                            style={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                border: 'none',
                                                background: msg.status === 'Published' ? '#dcfce7' : '#f1f5f9',
                                                color: msg.status === 'Published' ? '#166534' : '#64748b',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                width: '100px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {msg.status}
                                        </button>

                                        {/* Text Input */}
                                        <input
                                            type="text"
                                            value={msg.text}
                                            onChange={(e) => handleMessageChange(index, e.target.value)}
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                borderRadius: '8px',
                                                border: '1px solid #e2e8f0',
                                                fontSize: '1rem'
                                            }}
                                            placeholder={`Message ${index + 1}`}
                                        />

                                        {/* Remove Button */}
                                        <button
                                            type="button"
                                            onClick={() => removeMessage(index)}
                                            style={{
                                                padding: '0 15px',
                                                height: '45px',
                                                background: '#fee2e2',
                                                color: '#ef4444',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontWeight: 700
                                            }}
                                            title="Remove Message"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={addMessage}
                                    style={{
                                        marginTop: '10px',
                                        background: '#f1f5f9',
                                        color: '#475569',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem' }}>+</span> Add Message
                                </button>
                            </div>

                            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    style={{
                                        background: '#FF9B50',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 32px',
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        opacity: saving ? 0.7 : 1
                                    }}
                                >
                                    {saving ? 'Saving...' : 'Save All Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataStripManager;
