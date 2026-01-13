import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductComparison = ({ isDarkTheme, onClose }) => {
    const navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const products = [
        {
            id: 'anubhav',
            name: '5D/7D VR Chair',
            category: 'Hardware',
            price: 'Contact for Quote',
            features: {
                'Motion Degrees': '5-7 DOF',
                'Capacity': '1-2 users',
                'Content Library': '100+ experiences',
                'Setup Time': '2 hours',
                'Space Required': '3m x 3m',
                'Maintenance': 'Low',
                'Best For': 'Schools, Malls'
            },
            link: '/products/anubhav'
        },
        {
            id: 'ninedchair',
            name: '9D VR Chair',
            category: 'Hardware',
            price: 'Contact for Quote',
            features: {
                'Motion Degrees': '9 DOF + 360°',
                'Capacity': '1-2 users',
                'Content Library': '150+ experiences',
                'Setup Time': '3 hours',
                'Space Required': '4m x 4m',
                'Maintenance': 'Medium',
                'Best For': 'Entertainment Centers'
            },
            link: '/products/ninedchair'
        },
        {
            id: 'vrlab',
            name: 'VR Lab Setup',
            category: 'Complete Solution',
            price: 'Custom Package',
            features: {
                'Motion Degrees': 'N/A',
                'Capacity': '10-30 students',
                'Content Library': 'Curriculum-aligned',
                'Setup Time': '1-2 weeks',
                'Space Required': 'Classroom size',
                'Maintenance': 'Medium',
                'Best For': 'Schools, Universities'
            },
            link: '/products/vrlab'
        },
        {
            id: 'vrelearning',
            name: 'E-Learning Platform',
            category: 'Software',
            price: 'Subscription',
            features: {
                'Motion Degrees': 'N/A',
                'Capacity': 'Unlimited',
                'Content Library': '500+ lessons',
                'Setup Time': 'Instant',
                'Space Required': 'Any device',
                'Maintenance': 'None',
                'Best For': 'Remote Learning'
            },
            link: '/products/vrelearning'
        },
        {
            id: 'vrindustrial',
            name: 'Industrial Training (MELA)',
            category: 'Training',
            price: 'Custom Package',
            features: {
                'Motion Degrees': 'N/A',
                'Capacity': '5-20 trainees',
                'Content Library': 'Industry-specific',
                'Setup Time': '1 week',
                'Space Required': 'Training room',
                'Maintenance': 'Low',
                'Best For': 'Vocational Training'
            },
            link: '/products/vrindustrial'
        },
        {
            id: 'dronesimulator',
            name: 'Drone Simulator',
            category: 'Simulation',
            price: 'Contact for Quote',
            features: {
                'Motion Degrees': 'N/A',
                'Capacity': '1 user',
                'Content Library': '50+ scenarios',
                'Setup Time': '1 day',
                'Space Required': '2m x 2m',
                'Maintenance': 'Low',
                'Best For': 'Pilot Training'
            },
            link: '/products/dronesimulator'
        }
    ];

    const toggleProduct = (productId) => {
        if (selectedProducts.includes(productId)) {
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        } else {
            if (selectedProducts.length < 3) {
                setSelectedProducts([...selectedProducts, productId]);
            }
        }
    };

    const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));
    const allFeatures = [...new Set(selectedProductsData.flatMap(p => Object.keys(p.features)))];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflowY: 'auto'
        }}>
            <div style={{
                background: isDarkTheme ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '20px',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative'
            }}>
                {/* Header */}
                <div style={{
                    padding: '2rem',
                    borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    position: 'sticky',
                    top: 0,
                    background: isDarkTheme ? '#1A1A1A' : '#FFFFFF',
                    zIndex: 1
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{
                            margin: 0,
                            fontSize: '2rem',
                            fontWeight: 800,
                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                        }}>
                            Compare Products
                        </h2>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                padding: '0.5rem',
                                lineHeight: 1
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <p style={{
                        margin: '0.5rem 0 0 0',
                        color: isDarkTheme ? '#EAEAEA' : '#666',
                        fontSize: '0.95rem'
                    }}>
                        Select up to 3 products to compare ({selectedProducts.length}/3 selected)
                    </p>
                </div>

                {/* Product Selection */}
                <div style={{
                    padding: '2rem',
                    borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '1rem'
                    }}>
                        {products.map(product => (
                            <button
                                key={product.id}
                                onClick={() => toggleProduct(product.id)}
                                disabled={!selectedProducts.includes(product.id) && selectedProducts.length >= 3}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: selectedProducts.includes(product.id)
                                        ? '2px solid #FF9B50'
                                        : `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                    background: selectedProducts.includes(product.id)
                                        ? 'rgba(255, 155, 80, 0.1)'
                                        : isDarkTheme ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                    cursor: (!selectedProducts.includes(product.id) && selectedProducts.length >= 3) ? 'not-allowed' : 'pointer',
                                    opacity: (!selectedProducts.includes(product.id) && selectedProducts.length >= 3) ? 0.5 : 1,
                                    transition: 'all 0.3s ease',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{product.name}</div>
                                <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{product.category}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                {selectedProducts.length > 0 ? (
                    <div style={{ padding: '2rem', overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.95rem'
                        }}>
                            <thead>
                                <tr>
                                    <th style={{
                                        padding: '1rem',
                                        textAlign: 'left',
                                        borderBottom: `2px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                        color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                        fontWeight: 700
                                    }}>
                                        Feature
                                    </th>
                                    {selectedProductsData.map(product => (
                                        <th key={product.id} style={{
                                            padding: '1rem',
                                            textAlign: 'center',
                                            borderBottom: `2px solid ${isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                            fontWeight: 700
                                        }}>
                                            {product.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{
                                        padding: '1rem',
                                        borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                        fontWeight: 600,
                                        color: isDarkTheme ? '#EAEAEA' : '#666'
                                    }}>
                                        Category
                                    </td>
                                    {selectedProductsData.map(product => (
                                        <td key={product.id} style={{
                                            padding: '1rem',
                                            textAlign: 'center',
                                            borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                        }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(255, 155, 80, 0.1)',
                                                color: '#FF9B50',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: 600
                                            }}>
                                                {product.category}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '1rem',
                                        borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                        fontWeight: 600,
                                        color: isDarkTheme ? '#EAEAEA' : '#666'
                                    }}>
                                        Pricing
                                    </td>
                                    {selectedProductsData.map(product => (
                                        <td key={product.id} style={{
                                            padding: '1rem',
                                            textAlign: 'center',
                                            borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                            color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                            fontWeight: 600
                                        }}>
                                            {product.price}
                                        </td>
                                    ))}
                                </tr>
                                {allFeatures.map(feature => (
                                    <tr key={feature}>
                                        <td style={{
                                            padding: '1rem',
                                            borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                            fontWeight: 600,
                                            color: isDarkTheme ? '#EAEAEA' : '#666'
                                        }}>
                                            {feature}
                                        </td>
                                        {selectedProductsData.map(product => (
                                            <td key={product.id} style={{
                                                padding: '1rem',
                                                textAlign: 'center',
                                                borderBottom: `1px solid ${isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                                            }}>
                                                {product.features[feature] || '—'}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Action Buttons */}
                        <div style={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {selectedProductsData.map(product => (
                                <button
                                    key={product.id}
                                    onClick={() => {
                                        navigate(product.link);
                                        onClose();
                                    }}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        background: '#FF9B50',
                                        border: 'none',
                                        borderRadius: '30px',
                                        color: '#FFFFFF',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(255, 155, 80, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(255, 155, 80, 0.3)';
                                    }}
                                >
                                    View {product.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        color: isDarkTheme ? '#EAEAEA' : '#666'
                    }}>
                        <p style={{ fontSize: '1.1rem' }}>Select products above to start comparing</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductComparison;
