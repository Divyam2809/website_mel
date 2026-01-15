import React, { useState, useRef } from 'react';

const DragDropFile = ({ onFileSelect, preview, accept = "image/*,video/*", altText, onAltChange }) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file) => {
        // Validate file type based on accept prop
        if (accept) {
            const fileType = file.type;
            const acceptedTypes = accept.split(',').map(t => t.trim());

            const isValid = acceptedTypes.some(type => {
                if (type.endsWith('/*')) {
                    // Handle wildcard types like image/* or video/*
                    const mainType = type.split('/')[0];
                    return fileType.startsWith(mainType + '/');
                }
                // Handle specific types (.ext or mime/type) - simplified to mime mostly
                return fileType === type;
            });

            if (!isValid) {
                alert(`Invalid file type. Accepted types: ${accept}`);
                return;
            }
        }

        // Check file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('File is too large! Please upload an image smaller than 2MB.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            onFileSelect(reader.result, file);
        };
        reader.readAsDataURL(file);
    };

    const isVideo = (url) => {
        if (!url) return false;
        return url.startsWith('data:video') || url.endsWith('.mp4') || url.endsWith('.webm');
    };

    return (
        <div
            className={`file-upload-zone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
        >
            <input
                ref={inputRef}
                type="file"
                className="file-input-hidden"
                onChange={handleChange}
                accept={accept}
            />

            {preview ? (
                <div className="preview-container" style={{ flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {isVideo(preview) ? (
                            <video src={preview} className="file-preview" controls />
                        ) : (
                            <img src={preview} alt={altText || "Preview"} className="file-preview" />
                        )}

                        {/* Replace Overlay */}
                        <div
                            onClick={(e) => { e.stopPropagation(); inputRef.current.click(); }}
                            className="overlay-change"
                            style={{ cursor: 'pointer', zIndex: 10 }}
                        >
                            <span>Click or Drop to Replace</span>
                        </div>

                        {/* Remove Button */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onFileSelect(null, null);
                            }}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 20,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                fontSize: '1.2rem'
                            }}
                            title="Remove Image"
                        >
                            ×
                        </button>
                    </div>

                    {/* Alt Text Input - Only if onAltChange provided */}
                    {onAltChange && (
                        <div style={{ marginTop: '1rem', width: '100%', textAlign: 'left', zIndex: 10, position: 'relative' }} onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#374151' }}>
                                Alt Text <span style={{ fontWeight: 400, color: '#6b7280' }}>(Accessibility)</span>
                            </label>
                            <textarea
                                value={altText || ''}
                                onChange={(e) => {
                                    if (e.target.value.length <= 1000) onAltChange(e.target.value);
                                }}
                                placeholder="Describe this image for people who can't see it..."
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '6px',
                                    fontSize: '0.9rem',
                                    minHeight: '80px',
                                    fontFamily: 'inherit',
                                    resize: 'vertical',
                                    cursor: 'text'
                                }}
                                maxLength={1000}
                            />
                            <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#6b7280', marginTop: '4px' }}>
                                {(altText || '').length}/1,000
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="upload-placeholder">
                    <div className="upload-icon">📁</div>
                    <p className="upload-text">Drag & Drop your file here</p>
                    <p className="upload-subtext">Supports JPG, PNG, GIF, MP4</p>
                    <button type="button" className="upload-btn">Browse Files</button>
                </div>
            )}
        </div>
    );
};

export default DragDropFile;
