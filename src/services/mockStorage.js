
// Initial Data Seeding
const initialBlogs = [
    {
        _id: '1',
        title: 'The Future of VR in Education',
        slug: 'future-of-vr-education',
        date: '2025-10-15',
        excerpt: 'How immersive technology is reshaping classrooms globally.',
        content: '<p>Full content about VR in education...</p>',
        category: 'EdTech',
        status: 'Published',
        image: null
    },
    {
        _id: '2',
        title: '5 Ways VR Improves Industrial Safety',
        slug: 'vr-industrial-safety',
        date: '2025-11-02',
        excerpt: 'Reducing risks in high-hazard industries through simulation.',
        content: '<p>Full content about Industrial Safety...</p>',
        category: 'Infrastructure',
        status: 'Published',
        image: null
    },
    {
        _id: '3',
        title: 'Melzo Wins Innovation Award',
        slug: 'melzo-innovation-award',
        date: '2025-12-10',
        excerpt: 'Recognized for contribution to accessible VR technology.',
        content: '<p>Full content about the award...</p>',
        category: 'News',
        status: 'Published',
        image: null
    }
];

const initialCaseStudies = [
    {
        _id: '1',
        title: 'XYZ University',
        slug: 'xyz-university',
        description: 'Implemented VR Labs for 500+ students, resulting in 40% improved retention rates.',
        image: null,
        type: 'video', // or image
        mediaUrl: '' // URL for video/image
    },
    {
        _id: '2',
        title: 'Global Manufacturing Corp',
        slug: 'global-manufacturing-corp',
        description: 'Reduced safety training costs by 60% using our VR simulation modules.',
        image: null,
        type: 'image',
        mediaUrl: ''
    }
];

const ADMIN_CREDENTIALS = {
    email: 'admin@melzo.com',
    password: 'admin123'
};

class MockStorageService {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem('blogs')) {
            localStorage.setItem('blogs', JSON.stringify(initialBlogs));
        }
        if (!localStorage.getItem('caseFile')) { // Using 'caseFile' to distinct from potential other keys
            localStorage.setItem('caseFile', JSON.stringify(initialCaseStudies));
        }
    }

    // --- Auth ---
    login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
                    const user = { email, role: 'admin', token: 'mock-token-123' };
                    resolve({ data: user });
                } else {
                    reject({ response: { data: { message: 'Invalid credentials' } } });
                }
            }, 500);
        });
    }

    // --- Blogs ---
    getBlogs() {
        return new Promise((resolve) => {
            const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            resolve({ data: blogs });
        });
    }

    getBlog(slugOrId) {
        return new Promise((resolve, reject) => {
            const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            const blog = blogs.find(b => b.slug === slugOrId || b._id === slugOrId);
            if (blog) resolve({ data: blog });
            else reject({ message: 'Blog not found' });
        });
    }

    saveBlog(blogData) {
        return new Promise((resolve) => {
            const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            const newBlog = {
                ...blogData,
                _id: Date.now().toString(),
                date: new Date().toISOString().split('T')[0] // Simple date format
            };
            blogs.push(newBlog);
            localStorage.setItem('blogs', JSON.stringify(blogs));
            resolve({ data: newBlog });
        });
    }

    updateBlog(id, blogData) {
        return new Promise((resolve, reject) => {
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            const index = blogs.findIndex(b => b._id === id);
            if (index !== -1) {
                blogs[index] = { ...blogs[index], ...blogData };
                localStorage.setItem('blogs', JSON.stringify(blogs));
                resolve({ data: blogs[index] });
            } else {
                reject({ message: 'Blog not found' });
            }
        });
    }

    deleteBlog(id) {
        return new Promise((resolve) => {
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            blogs = blogs.filter(b => b._id !== id);
            localStorage.setItem('blogs', JSON.stringify(blogs));
            resolve({ data: { message: 'Deleted successfully' } });
        });
    }

    // --- Case Studies ---
    getCaseStudies() {
        return new Promise((resolve) => {
            const studies = JSON.parse(localStorage.getItem('caseFile') || '[]');
            resolve({ data: studies });
        });
    }

    saveCaseStudy(studyData) {
        return new Promise((resolve) => {
            const studies = JSON.parse(localStorage.getItem('caseFile') || '[]');
            const newStudy = {
                ...studyData,
                _id: Date.now().toString()
            };
            studies.push(newStudy);
            localStorage.setItem('caseFile', JSON.stringify(studies));
            resolve({ data: newStudy });
        });
    }

    updateCaseStudy(id, studyData) {
        return new Promise((resolve, reject) => {
            let studies = JSON.parse(localStorage.getItem('caseFile') || '[]');
            const index = studies.findIndex(s => s._id === id);
            if (index !== -1) {
                studies[index] = { ...studies[index], ...studyData };
                localStorage.setItem('caseFile', JSON.stringify(studies));
                resolve({ data: studies[index] });
            } else {
                reject({ message: 'Case Study not found' });
            }
        });
    }

    deleteCaseStudy(id) {
        return new Promise((resolve) => {
            let studies = JSON.parse(localStorage.getItem('caseFile') || '[]');
            studies = studies.filter(s => s._id !== id);
            localStorage.setItem('caseFile', JSON.stringify(studies));
            resolve({ data: { message: 'Deleted successfully' } });
        });
    }
}

export const mockStorage = new MockStorageService();
export default mockStorage;
