import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNav from './AdminNav';
import globalMomentumService from '../../services/globalMomentumService';
import mockStorage from '../../services/mockStorage';

export default function GlobalMomentumManager() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [stats, setStats] = useState({});
    const [marqueeItems, setMarqueeItems] = useState([]);
    const [statsData, setStatsData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const [
                blogs, news, awards, faqs, team, cases, testimonials, timeline,
                globalMomentumData
            ] = await Promise.all([
                mockStorage.getBlogs(),
                mockStorage.getNews(),
                mockStorage.getAwards(),
                mockStorage.getFAQs(),
                mockStorage.getTeamDetails(),
                mockStorage.getCaseStudies(),
                mockStorage.getTestimonials(),
                mockStorage.getTimeline(),
                globalMomentumService.getConfig()
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

            // Handle marquee items with status
            if (globalMomentumData.marqueeItems && globalMomentumData.marqueeItems.length > 0) {
                // Check if items have status property (new format)
                const firstItem = globalMomentumData.marqueeItems[0];
                if (typeof firstItem === 'object' && firstItem.text !== undefined) {
                    setMarqueeItems(globalMomentumData.marqueeItems);
                } else {
                    // Legacy format: array of strings
                    setMarqueeItems(globalMomentumData.marqueeItems.map(text => ({ text, status: 'Published' })));
                }
            } else {
                setMarqueeItems([]);
            }

            // Handle stats with status
            if (globalMomentumData.stats && globalMomentumData.stats.length > 0) {
                // Check if stats have status property (new format)
                const firstStat = globalMomentumData.stats[0];
                if (firstStat.status !== undefined) {
                    setStatsData(globalMomentumData.stats);
                } else {
                    // Legacy format: objects without status
                    setStatsData(globalMomentumData.stats.map(stat => ({ ...stat, status: 'Published' })));
                }
            } else {
                setStatsData([]);
            }
        } catch (error) {
            console.error('Error loading global momentum config:', error);
            // Set defaults on error
            setMarqueeItems([
                { text: "Innovation", status: 'Published' },
                { text: "Immersive Learning", status: 'Published' },
                { text: "Virtual Reality", status: 'Published' },
                { text: "Augmented Reality", status: 'Published' },
                { text: "Future of Work", status: 'Published' },
                { text: "Education Revolution", status: 'Published' }
            ]);
            setStatsData([
                { num: '500+', label: 'Schools', status: 'Published' },
                { num: '50K+', label: 'Students', status: 'Published' },
                { num: '10+', label: 'Countries', status: 'Published' },
                { num: '100%', label: 'Engagement', status: 'Published' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            setSaving(true);
            await globalMomentumService.saveConfig({
                marqueeItems,
                stats: statsData
            });
            alert('Global Momentum configuration saved successfully!');
        } catch (error) {
            console.error('Error saving global momentum config:', error);
            alert('Failed to save configuration. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const addMarqueeItem = () => {
        setMarqueeItems([...marqueeItems, { text: '', status: 'Draft' }]);
    };

    const removeMarqueeItem = (index) => {
        setMarqueeItems(marqueeItems.filter((_, i) => i !== index));
    };

    const handleMarqueeChange = (index, value) => {
        const updated = [...marqueeItems];
        updated[index].text = value;
        setMarqueeItems(updated);
    };

    const toggleMarqueeStatus = (index) => {
        const updated = [...marqueeItems];
        updated[index].status = updated[index].status === 'Published' ? 'Draft' : 'Published';
        setMarqueeItems(updated);
    };

    const addStat = () => {
        setStatsData([...statsData, { num: '', label: '', status: 'Draft' }]);
    };

    const removeStat = (index) => {
        setStatsData(statsData.filter((_, i) => i !== index));
    };

    const handleStatChange = (index, field, value) => {
        const updated = [...statsData];
        updated[index][field] = value;
        setStatsData(updated);
    };

    const toggleStatStatus = (index) => {
        const updated = [...statsData];
        updated[index].status = updated[index].status === 'Published' ? 'Draft' : 'Published';
        setStatsData(updated);
    };

    if (loading) return <div style={{ padding: '2rem', color: '#fff' }}>Loading configuration...</div>;

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
                                    Global Momentum Manager
                                </h2>
                                <p style={{ color: '#64748b' }}>Manage the marquee items and statistics on the About Us page</p>
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

                            {/* Marquee Items Section */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                                    Marquee Items
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                                    These items scroll across the screen in the Global Momentum section
                                </p>

                                {marqueeItems.length === 0 && (
                                    <p style={{ color: '#94a3b8', fontStyle: 'italic', marginBottom: '1rem' }}>No marquee items added yet.</p>
                                )}

                                {marqueeItems.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                                        {/* Status Toggle */}
                                        <button
                                            type="button"
                                            onClick={() => toggleMarqueeStatus(index)}
                                            style={{
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                border: 'none',
                                                background: item.status === 'Published' ? '#dcfce7' : '#f1f5f9',
                                                color: item.status === 'Published' ? '#166534' : '#64748b',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                width: '100px',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {item.status}
                                        </button>

                                        <input
                                            type="text"
                                            value={item.text}
                                            onChange={(e) => handleMarqueeChange(index, e.target.value)}
                                            placeholder={`Marquee item ${index + 1}`}
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                borderRadius: '8px',
                                                border: '1px solid #e2e8f0',
                                                fontSize: '1rem'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeMarqueeItem(index)}
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
                                            title="Remove Item"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={addMarqueeItem}
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
                                    <span style={{ fontSize: '1.2rem' }}>+</span> Add Marquee Item
                                </button>
                            </div>

                            {/* Statistics Section */}
                            <div style={{ marginBottom: '30px', paddingTop: '30px', borderTop: '1px solid #f1f5f9' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                                    Statistics
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                                    Key metrics displayed below the marquee text
                                </p>

                                {statsData.length === 0 && (
                                    <p style={{ color: '#94a3b8', fontStyle: 'italic', marginBottom: '1rem' }}>No statistics added yet.</p>
                                )}

                                {statsData.map((stat, index) => (
                                    <div key={index} style={{ marginBottom: '10px' }}>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            {/* Status Toggle */}
                                            <button
                                                type="button"
                                                onClick={() => toggleStatStatus(index)}
                                                style={{
                                                    padding: '8px 12px',
                                                    borderRadius: '6px',
                                                    border: 'none',
                                                    background: stat.status === 'Published' ? '#dcfce7' : '#f1f5f9',
                                                    color: stat.status === 'Published' ? '#166534' : '#64748b',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    width: '100px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {stat.status}
                                            </button>

                                            <input
                                                type="text"
                                                value={stat.num}
                                                onChange={(e) => handleStatChange(index, 'num', e.target.value)}
                                                placeholder="Number (e.g., 500+)"
                                                style={{
                                                    flex: 1,
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            <input
                                                type="text"
                                                value={stat.label}
                                                onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                                placeholder="Label (e.g., Schools)"
                                                style={{
                                                    flex: 1,
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e2e8f0',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeStat(index)}
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
                                                title="Remove Statistic"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={addStat}
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
                                    <span style={{ fontSize: '1.2rem' }}>+</span> Add Statistic
                                </button>
                            </div>

                            {/* Save Button */}
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
}
