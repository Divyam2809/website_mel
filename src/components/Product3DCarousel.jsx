import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function Product3DCarousel({ onNavigate, isDarkTheme }) {
    const canvasContainerRef = useRef(null);
    const carouselRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const modelRef = useRef(null);
    const animationFrameRef = useRef(null);

    const lerpCurrentRef = useRef(0);
    const lerpTargetRef = useRef(0);
    const dragRotRef = useRef(0);

    // We keep isDragging as state because it affects the cursor UI
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const autoRotateSpeedRef = useRef(0.05); // Reduced speed (was 0.8)

    const products = [
        {
            id: '01',
            title: 'Hardware Solutions',
            tagline: 'Cutting-Edge VR Equipment',
            description: 'Premium VR headsets, motion chairs, haptic devices',
            link: 'products',
            image: '/images/vr-chair.webp'
        },
        {
            id: '02',
            title: 'Software Solutions',
            tagline: 'Immersive Ecosystem',
            description: 'Spatial computing & haptic feedback platform',
            link: 'products',
            image: '/images/software_solutions.webp'
        },
        {
            id: '03',
            title: 'Education & Training',
            tagline: 'Transform Learning',
            description: 'K-10 to higher education VR solutions',
            link: 'products',
            image: '/images/stu-vr.webp'
        },
        {
            id: '04',
            title: 'Industrial Solutions',
            tagline: 'Professional Training',
            description: 'Enterprise-grade VR training systems',
            link: 'products',
            image: '/images/indus.webp'
        },
        {
            id: '05',
            title: 'Defence Simulation',
            tagline: 'Mission-Critical',
            description: 'Advanced tactical operations training',
            link: 'products',
            image: '/images/defence1.webp'
        },
        {
            id: '06',
            title: 'Tourism & More',
            tagline: 'Innovation & Future Tech',
            description: 'Virtual tours & emerging applications',
            link: 'products',
            image: '/images/tour.webp'
        }
    ];

    const radius = 450;
    const count = products.length;

    // Initialize Three.js scene
    useEffect(() => {
        if (!canvasContainerRef.current) return;

        try {
            console.log('🎨 Initializing 3D Scene...');

            // Scene setup
            const scene = new THREE.Scene();
            sceneRef.current = scene;

            // Camera
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            camera.position.z = 4;
            cameraRef.current = camera;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(500, 500);
            renderer.setPixelRatio(window.devicePixelRatio);
            canvasContainerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            console.log('✅ Renderer initialized');

            // Enhanced Lighting Setup
            const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // Bright base lighting
            scene.add(ambientLight);

            const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
            mainLight.position.set(5, 10, 7);
            scene.add(mainLight);

            const fillLight = new THREE.DirectionalLight(0xff9b50, 2.0); // Warm orange fill
            fillLight.position.set(-5, 5, -5);
            scene.add(fillLight);

            const backLight = new THREE.DirectionalLight(0xffffff, 1.5); // Rim light for shape definition
            backLight.position.set(0, 5, -10);
            scene.add(backLight);

            console.log('💡 Enhanced Lights added');

            // Add a placeholder cube while model loads
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({
                color: 0xff9b50,
                metalness: 0.3,
                roughness: 0.4
            });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            console.log('📦 Placeholder cube added');

            // Load 3D Model with Draco support - Try multiple paths
            const loader = new GLTFLoader();

            // Set up Draco loader for compressed models (optional, with error handling)
            try {
                const dracoLoader = new DRACOLoader();
                dracoLoader.setDecoderPath('/draco-gltf/');
                dracoLoader.setDecoderConfig({ type: 'js' });
                loader.setDRACOLoader(dracoLoader);
                console.log('🔧 Draco loader configured');
            } catch (error) {
                console.warn('⚠️ Draco loader setup failed, continuing without compression support:', error.message);
            }

            const modelPaths = [
                '/assets/recliner_chair.glb',
                '/recliner_chair.glb',
                './assets/recliner_chair.glb',
                'recliner_chair.glb'
            ];

            let modelLoaded = false;

            const tryLoadModel = (pathIndex = 0) => {
                if (pathIndex >= modelPaths.length) {
                    console.error('❌ Failed to load model from all paths. Using placeholder cube.');
                    modelRef.current = cube;
                    return;
                }

                const path = modelPaths[pathIndex];
                console.log(`🔄 Attempting to load model from: ${path}`);

                loader.load(
                    path,
                    (gltf) => {
                        if (modelLoaded) return;
                        modelLoaded = true;

                        console.log('✅ Model loaded successfully!', gltf);

                        // Remove placeholder cube
                        scene.remove(cube);

                        const model = gltf.scene;
                        model.scale.set(25, 25, 25);
                        model.position.set(0, -0.2, 0); // Moved up (was -1.2)

                        // Initial rotation correction
                        model.rotation.y = Math.PI; // Face front (180 deg) if needed, adjusts based on model's default

                        scene.add(model);
                        modelRef.current = model;

                        console.log('🪑 Recliner chair model added to scene');
                    },
                    (progress) => {
                        const percent = (progress.loaded / progress.total * 100).toFixed(2);
                        console.log(`📥 Loading: ${percent}%`);
                    },
                    (error) => {
                        console.warn(`Failed to load from ${path}:`, error.message);
                        // Try next path
                        tryLoadModel(pathIndex + 1);
                    }
                );
            };

            tryLoadModel();

        } catch (error) {
            console.error('❌ Failed to initialize 3D scene:', error);
            setHasError(true);
            setErrorMessage(error.message || 'Failed to load 3D carousel');
        }

        // Cleanup
        return () => {
            console.log('🧹 Cleaning up 3D scene');
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (canvasContainerRef.current && rendererRef.current && rendererRef.current.domElement) {
                canvasContainerRef.current.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    // Animation loop
    useEffect(() => {
        const animate = () => {
            // Auto-rotation when enabled and not dragging
            if (isAutoRotating && !isDragging) {
                lerpTargetRef.current -= autoRotateSpeedRef.current;
            }

            // Smooth lerping for carousel rotation
            lerpCurrentRef.current = lerpCurrentRef.current + (lerpTargetRef.current - lerpCurrentRef.current) * 0.08;

            const current = lerpCurrentRef.current;
            const target = lerpTargetRef.current;
            const tilt = (target - current) * 0.6;

            // Update carousel rotation
            if (carouselRef.current) {
                carouselRef.current.style.transform = `rotateY(${current}deg) rotateX(${tilt}deg)`;
            }

            // Update 3D model - sync with carousel rotation
            if (modelRef.current) {
                // Convert degrees to radians and apply rotations
                modelRef.current.rotation.y = (current * Math.PI) / 180;

                // Add subtle floating effect
                modelRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;
            }

            // Render scene
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isAutoRotating, isDragging]);

    // Track total movement to distinguish click vs drag
    const totalDragRef = useRef(0);

    // Mouse event handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsAutoRotating(false); // Stop auto-rotation when user drags
        setStartX(e.pageX);
        dragRotRef.current = lerpTargetRef.current;
        totalDragRef.current = 0; // Reset drag distance
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.pageX - startX;
        lerpTargetRef.current = dragRotRef.current + deltaX * 0.2;
        totalDragRef.current += Math.abs(e.movementX); // Track movement
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Resume auto-rotation after 3 seconds of inactivity
        setTimeout(() => {
            setIsAutoRotating(true);
        }, 3000);
    };

    const handleCardClick = (link) => {
        // Only navigate if movement was minimal (click)
        // Threshold of 5 pixels prevents accidental triggering while dragging
        if (totalDragRef.current < 5) {
            onNavigate(link);
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX]);

    // Error fallback UI
    if (hasError) {
        return (
            <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <div style={{
                    fontSize: '4rem',
                    marginBottom: '1rem'
                }}>⚠️</div>
                <h3 style={{
                    fontSize: '1.5rem',
                    color: isDarkTheme ? '#FFF' : '#2D2D2D',
                    marginBottom: '1rem'
                }}>
                    3D Carousel Unavailable
                </h3>
                <p style={{
                    color: isDarkTheme ? '#AAA' : '#666',
                    marginBottom: '2rem'
                }}>
                    {errorMessage}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        background: '#FF9B50',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 600
                    }}
                >
                    Reload Page
                </button>
            </div>
        );
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '2000px',
            overflow: 'hidden'
        }}>
            {/* 3D Model Canvas */}
            <div
                ref={canvasContainerRef}
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            {/* Carousel */}
            <div
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                style={{
                    position: 'relative',
                    width: '260px',
                    height: '360px',
                    transformStyle: 'preserve-3d',
                    zIndex: 2,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    willChange: 'transform'
                }}
            >
                {products.map((product, i) => {
                    const angle = i * (360 / count);
                    return (
                        <div
                            key={product.id}
                            onClick={() => handleCardClick(product.link)}
                            style={{
                                position: 'absolute',
                                width: '260px',
                                height: '360px',
                                background: isDarkTheme
                                    ? 'rgba(255, 255, 255, 0.03)'
                                    : 'rgba(0, 0, 0, 0.03)',
                                border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '25px',
                                boxSizing: 'border-box',
                                backfaceVisibility: 'hidden',
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                transition: 'border 0.4s, background 0.4s',
                                cursor: 'pointer',
                                fontFamily: 'Inter, sans-serif'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#FF9B50';
                                e.currentTarget.style.background = isDarkTheme
                                    ? 'rgba(255, 155, 80, 0.05)'
                                    : 'rgba(255, 155, 80, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = isDarkTheme
                                    ? 'rgba(255, 255, 255, 0.1)'
                                    : 'rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.background = isDarkTheme
                                    ? 'rgba(255, 255, 255, 0.03)'
                                    : 'rgba(0, 0, 0, 0.03)';
                            }}
                        >
                            <h2 style={{
                                fontSize: '2rem',
                                margin: 0,
                                opacity: 0.1,
                                position: 'absolute',
                                top: '15px',
                                right: '20px',
                                color: isDarkTheme ? '#FFF' : '#000',
                                fontWeight: 900
                            }}>
                                {product.id}
                            </h2>

                            {/* Product Image */}
                            <div style={{
                                width: '100%',
                                height: '120px', // Reduced from 140px
                                marginBottom: '20px',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy" // Optimize loading
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    className="card-image"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)'
                                }} />
                            </div>

                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: 800,
                                letterSpacing: '-0.3px',
                                marginBottom: '6px',
                                color: isDarkTheme ? '#FFFFFF' : '#2D2D2D',
                                lineHeight: 1.2
                            }}>
                                {product.title}
                            </h3>
                            <p style={{
                                fontSize: '10px',
                                color: '#FF9B50',
                                fontWeight: 600,
                                marginBottom: '8px',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase'
                            }}>
                                {product.tagline}
                            </p>
                            <p style={{
                                fontSize: '9px',
                                opacity: 0.7,
                                marginBottom: '15px',
                                color: isDarkTheme ? '#CCC' : '#666',
                                lineHeight: 1.4,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {product.description}
                            </p>
                            <div
                                className="product-line"
                                style={{
                                    width: '30px',
                                    height: '2px',
                                    background: '#FF9B50',
                                    transition: 'width 0.4s'
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div style={{
                position: 'absolute',
                bottom: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                zIndex: 10,
                pointerEvents: 'none' // Let clicks pass through container
            }}>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent drag start
                        setIsAutoRotating(!isAutoRotating);
                    }}
                    style={{
                        pointerEvents: 'auto', // Enable clicks on button
                        background: 'rgba(255, 155, 80, 0.1)',
                        border: '1px solid rgba(255, 155, 80, 0.3)',
                        borderRadius: '20px',
                        padding: '8px 20px',
                        color: '#FF9B50',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#FF9B50';
                        e.currentTarget.style.color = '#FFF';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255, 155, 80, 0.1)';
                        e.currentTarget.style.color = '#FF9B50';
                    }}
                >
                    <span style={{ fontSize: '14px' }}>{isAutoRotating ? '⏸' : '▶'}</span>
                    {isAutoRotating ? 'Pause Rotation' : 'Resume Rotation'}
                </button>

                <div style={{
                    opacity: 0.3,
                    fontSize: '10px',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    color: isDarkTheme ? '#FFF' : '#666',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600
                }}>
                    Drag to Explore
                </div>
            </div>

            <style>{`
                .product-line {
                    transition: width 0.4s ease;
                }
                div:hover .product-line {
                    width: 80px !important;
                }
                div:hover .card-image {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}
