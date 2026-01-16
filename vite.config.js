import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
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
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                rewrite: (path) => path // keep /api prefix since backend uses it
            }
        }
    }
})
