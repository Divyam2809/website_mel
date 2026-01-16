import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { syncMelaContent } from './src/scripts/sync-mela.js'
import { syncVRLabContent } from './src/scripts/sync-vrlab.js'
import { syncVRKalaContent } from './src/scripts/sync-vrkala.js'
import { syncVRELearningContent } from './src/scripts/sync-vr-elearning.js'
import { syncVRAnimalSurgeryContent } from './src/scripts/sync-vr-animal-surgery.js'
import { syncVRUdyogContent } from './src/scripts/sync-vr-udyog.js'
import { syncVRRealEstateContent } from './src/scripts/sync-vr-realestate.js'
import { syncVRHospitalityContent } from './src/scripts/sync-vr-hospitality.js'
import { syncVRExhibitionContent } from './src/scripts/sync-vr-exhibition.js'
import { syncVRCrimeSceneContent } from './src/scripts/sync-vr-crimescene.js'
import { syncDroneSimulatorContent } from './src/scripts/sync-drone-simulator.js'
import { syncAircraftSimulationContent } from './src/scripts/sync-aircraft-simulation.js'
import { syncVRDefenceContent } from './src/scripts/sync-vr-defence.js'
import { syncVRTourismContent } from './src/scripts/sync-vr-tourism.js'
import { syncVirtualHeritageContent } from './src/scripts/sync-virtual-heritage.js'
import { syncCityGuideContent } from './src/scripts/sync-city-guide.js'
import { syncVRLiveStreamContent } from './src/scripts/sync-vr-livestream.js'
import { syncOthersCustomContent } from './src/scripts/sync-others-custom.js'
import { syncCareersContent } from './src/scripts/sync-careers.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'mela-live-api',
            configureServer(server) {
                server.middlewares.use('/api/mela-live', async (req, res) => {
                    try {
                        const data = await syncMelaContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vrlab-live', async (req, res) => {
                    try {
                        const data = await syncVRLabContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vrkala-live', async (req, res) => {
                    try {
                        const data = await syncVRKalaContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-elearning-live', async (req, res) => {
                    try {
                        const data = await syncVRELearningContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-animal-surgery-live', async (req, res) => {
                    try {
                        const data = await syncVRAnimalSurgeryContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-udyog-live', async (req, res) => {
                    try {
                        const data = await syncVRUdyogContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-realestate-live', async (req, res) => {
                    try {
                        const data = await syncVRRealEstateContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-hospitality-live', async (req, res) => {
                    try {
                        const data = await syncVRHospitalityContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-exhibition-live', async (req, res) => {
                    try {
                        const data = await syncVRExhibitionContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-crimescene-live', async (req, res) => {
                    try {
                        const data = await syncVRCrimeSceneContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/drone-simulator-live', async (req, res) => {
                    try {
                        const data = await syncDroneSimulatorContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/aircraft-simulation-live', async (req, res) => {
                    try {
                        const data = await syncAircraftSimulationContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-defence-live', async (req, res) => {
                    try {
                        const data = await syncVRDefenceContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-tourism-live', async (req, res) => {
                    try {
                        const data = await syncVRTourismContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/virtual-heritage-live', async (req, res) => {
                    try {
                        const data = await syncVirtualHeritageContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/city-guide-live', async (req, res) => {
                    try {
                        const data = await syncCityGuideContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/vr-livestream-live', async (req, res) => {
                    try {
                        const data = await syncVRLiveStreamContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/others-custom-live', async (req, res) => {
                    try {
                        const data = await syncOthersCustomContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });

                server.middlewares.use('/api/careers-live', async (req, res) => {
                    try {
                        const data = await syncCareersContent(false);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    } catch (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: err.message }));
                    }
                });
            }
        },
        {
            name: 'media-scanner',
            configureServer(server) {
                server.middlewares.use('/api/media', (req, res) => {
                    const videosPath = path.join(process.cwd(), 'public/assets/videos')
                    const photosPath = path.join(process.cwd(), 'public/assets/photos')

                    const videos = []
                    const photos = []

                    // Scan videos folder
                    if (fs.existsSync(videosPath)) {
                        const videoFiles = fs.readdirSync(videosPath).filter(file =>
                            file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mov')
                        )
                        videoFiles.forEach((file, index) => {
                            const name = file.replace(/\.[^/.]+$/, '') // Remove extension
                            const title = name.split(/[-_]/).map(word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')

                            videos.push({
                                id: index + 1,
                                title: title,
                                description: '',
                                filename: file
                            })
                        })
                    }

                    // Scan photos folder
                    if (fs.existsSync(photosPath)) {
                        const photoFiles = fs.readdirSync(photosPath).filter(file =>
                            file.endsWith('.jpg') || file.endsWith('.jpeg') ||
                            file.endsWith('.png') || file.endsWith('.webp')
                        )
                        photoFiles.forEach((file, index) => {
                            const name = file.replace(/\.[^/.]+$/, '') // Remove extension
                            const title = name.split(/[-_]/).map(word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')

                            photos.push({
                                id: index + 1,
                                title: title,
                                filename: file
                            })
                        })
                    }

                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ videos, photos }))
                })
            }
        }
    ],
})
