import React from 'react';
import DragDropFile from './DragDropFile';

const BlockEditor = ({ value, onChange }) => {
    // Value is expected to be an array of objects. If string (legacy), wrap it.
    const blocks = Array.isArray(value) ? value : (value ? [{ type: 'paragraph', content: value }] : []);

    const updateBlock = (index, field, content) => {
        const newBlocks = [...blocks];
        newBlocks[index] = { ...newBlocks[index], [field]: content };
        onChange(newBlocks);
    };

    const addBlock = (type) => {
        const newBlock = type === 'list'
            ? { type, items: [''] }
            : { type, content: '' };
        onChange([...blocks, newBlock]);
    };

    const removeBlock = (index) => {
        const newBlocks = blocks.filter((_, i) => i !== index);
        onChange(newBlocks);
    };

    const updateListItem = (blockIndex, itemIndex, content) => {
        const newBlocks = [...blocks];
        const newItems = [...newBlocks[blockIndex].items];
        newItems[itemIndex] = content;
        newBlocks[blockIndex] = { ...newBlocks[blockIndex], items: newItems };
        onChange(newBlocks);
    };

    const addListItem = (blockIndex) => {
        const newBlocks = [...blocks];
        newBlocks[blockIndex].items.push('');
        onChange(newBlocks);
    };

    const removeListItem = (blockIndex, itemIndex) => {
        const newBlocks = [...blocks];
        newBlocks[blockIndex].items = newBlocks[blockIndex].items.filter((_, i) => i !== itemIndex);
        onChange(newBlocks);
    };

    const moveBlock = (index, direction) => {
        if (direction === -1 && index === 0) return;
        if (direction === 1 && index === blocks.length - 1) return;
        const newBlocks = [...blocks];
        const temp = newBlocks[index];
        newBlocks[index] = newBlocks[index + direction];
        newBlocks[index + direction] = temp;
        onChange(newBlocks);
    };

    return (

        <div className="block-editor" style={{ border: '1px solid #e2e8f0', padding: '24px', borderRadius: '24px', background: '#f8fafc' }}>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>

                {/* LEFT COLUMN: Blocks List */}
                <div className="custom-scrollbar" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0, maxHeight: '70vh', overflowY: 'auto', paddingRight: '10px' }}>
                    {blocks.length === 0 && (
                        <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#94a3b8', border: '2px dashed #cbd5e1', borderRadius: '16px', background: 'white' }}>
                            <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem', color: '#64748b' }}>Start building your content</p>
                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Select a block from the right menu to begin</p>
                        </div>
                    )}

                    {blocks.map((block, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            padding: '24px',
                            borderRadius: '16px',
                            border: '1px solid #f1f5f9',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                            position: 'relative',
                            transition: 'all 0.2s',
                            animation: 'fadeIn 0.3s ease-out'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '16px',
                                borderBottom: '1px solid #f8fafc',
                                paddingBottom: '12px'
                            }}>
                                <span style={{
                                    textTransform: 'uppercase',
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    color: '#cbd5e1',
                                    letterSpacing: '1.5px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    {block.type} BLOCK
                                </span>
                                <div className="block-actions">
                                    <button type="button" onClick={() => moveBlock(index, -1)} disabled={index === 0} className="block-action-btn btn-move" title="Move Up">↑</button>
                                    <button type="button" onClick={() => moveBlock(index, 1)} disabled={index === blocks.length - 1} className="block-action-btn btn-move" title="Move Down">↓</button>
                                    <button type="button" onClick={() => removeBlock(index)} className="block-action-btn btn-remove" title="Remove Block">✕</button>
                                </div>
                            </div>

                            {/* Block Content Rendering */}
                            {block.type === 'list' ? (
                                <div>
                                    {block.items.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                                            <span style={{ color: '#FF9B50', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                                            <input
                                                type="text"
                                                value={item}
                                                onChange={(e) => updateListItem(index, i, e.target.value)}
                                                style={{ flex: 1, padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }}
                                                placeholder="List item..."
                                            />
                                            <button type="button" onClick={() => removeListItem(index, i)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#94a3b8', padding: '4px' }}>×</button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addListItem(index)} style={{ fontSize: '0.85rem', color: '#FF9B50', background: 'none', border: 'none', cursor: 'pointer', padding: '5px 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <span>+</span> Add Item
                                    </button>
                                </div>
                            ) : block.type === 'media' ? (
                                <DragDropFile
                                    onFileSelect={(dataUrl) => {
                                        const currentAlt = (block.content && typeof block.content === 'object') ? block.content.alt : '';
                                        updateBlock(index, 'content', { url: dataUrl, alt: currentAlt });
                                    }}
                                    preview={(block.content && typeof block.content === 'object') ? block.content.url : block.content}
                                    altText={(block.content && typeof block.content === 'object') ? block.content.alt : ''}
                                    onAltChange={(newAlt) => {
                                        const currentUrl = (block.content && typeof block.content === 'object') ? block.content.url : block.content;
                                        updateBlock(index, 'content', { url: currentUrl, alt: newAlt });
                                    }}
                                    accept="image/*,video/*"
                                />
                            ) : block.type === 'paragraph' || block.type === 'quote' ? (
                                <textarea
                                    value={block.content}
                                    onChange={(e) => updateBlock(index, 'content', e.target.value)}
                                    style={{
                                        width: '100%',
                                        minHeight: block.type === 'quote' ? '80px' : '150px',
                                        padding: '16px',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '12px',
                                        fontFamily: 'inherit',
                                        resize: 'vertical',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.6,
                                        background: block.type === 'quote' ? '#fffbeb' : 'white',
                                        borderLeft: block.type === 'quote' ? '4px solid #f59e0b' : '1px solid #e2e8f0'
                                    }}
                                    placeholder={`Enter ${block.type} text...`}
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={block.content}
                                    onChange={(e) => updateBlock(index, 'content', e.target.value)}
                                    style={{ width: '100%', padding: '14px', border: '1px solid #e2e8f0', borderRadius: '10px', fontWeight: '700', fontSize: '1.2rem', color: '#1e293b' }}
                                    placeholder="Enter Heading..."
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN: Sticky Controls */}
                <div className="sticky-tools-sidebar" style={{ width: '240px', position: 'sticky', top: '100px', flexShrink: 0 }}>
                    <div className="tools-card" style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f8fafc' }}>
                            Add Components
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {['Heading', 'Paragraph', 'Quote', 'List', 'Media'].map(type => (
                                <button
                                    key={type}
                                    type="button"
                                    className={`add-block-btn-vertical btn-${type.toLowerCase()}`}
                                    onClick={(e) => {
                                        addBlock(type.toLowerCase());
                                        const btn = e.currentTarget;
                                        btn.classList.add('clicked');
                                        setTimeout(() => btn.classList.remove('clicked'), 200);
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem', fontWeight: 300 }}>+</span>
                                    {type}
                                </button>
                            ))}
                        </div>

                        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f8fafc', fontSize: '0.8rem', color: '#cbd5e1', textAlign: 'center', fontStyle: 'italic' }}>
                            Click to append
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockEditor;
