
// Initial Data Seeding
const initialBlogs = [
    {
        _id: 'virtual-characters-and-ip-world',
        title: "From Mascots to Worlds: Why the Future Belongs to Virtual Characters and IP",
        slug: 'virtual-characters-and-ip-world',
        author: {
            name: "Scene9 Editorial",
            role: "Virtual IP & World Building"
        },
        publishDate: "02 Mar 2025",
        readTime: 15,
        category: "Virtual Characters & IP Worlds",
        excerpt: "For decades, characters have been used as short-term tools—mascots created for campaigns... The future belongs to a different kind of character.",
        status: 'Published',
        isVisible: true,
        image: null,
        content: [
            {
                type: "paragraph",
                content: "For decades, characters have been used as short-term tools—mascots created for campaigns, cartoons designed for seasons, or avatars built for novelty. Most of them disappear as quickly as they arrive."
            },
            {
                type: "paragraph",
                content: "The future of storytelling, branding, and digital culture belongs to a different kind of character—one designed not for a moment, but for longevity. Virtual characters are no longer assets. They are intellectual property, cultural interfaces, and living systems."
            },

            {
                type: "heading",
                content: "The Shift from Characters to IP Worlds"
            },
            {
                type: "paragraph",
                content: "A character becomes powerful not because of how it looks, but because of the world it belongs to. Context gives meaning. Narrative gives continuity."
            },
            {
                type: "paragraph",
                content: "IP worlds transform isolated characters into evolving entities—capable of existing across platforms, formats, and time. Films, games, education, branding, and immersive media all become expressions of the same universe."
            },
            {
                type: "quote",
                content: "A character is remembered. A world is returned to."
            },

            {
                type: "heading",
                content: "Global Trends in Virtual Characters"
            },
            {
                type: "paragraph",
                content: "Globally, virtual characters are increasingly being designed as long-term intellectual property rather than campaign visuals."
            },
            {
                type: "list",
                items: [
                    "Virtual Brand Ambassadors: Characters representing brands consistently over years",
                    "Digital Influencers: Virtual personalities with evolving identities and audiences",
                    "Transmedia Storytelling: Characters moving across film, social media, games, and XR",
                    "Education & Training Avatars: Characters designed to teach, guide, and explain",
                    "Persistent Virtual Worlds: IP designed to scale into platforms and ecosystems"
                ]
            },

            {
                type: "heading",
                content: "AI and the Flood of Disposable Characters"
            },
            {
                type: "paragraph",
                content: "AI has made character creation easier than ever. Faces, voices, and animations can be generated instantly. While this lowers barriers, it also creates saturation."
            },
            {
                type: "paragraph",
                content: "Most AI-generated characters lack continuity, ownership, and narrative responsibility. They exist as outputs, not entities."
            },
            {
                type: "quote",
                content: "AI can generate characters. It cannot generate legacy."
            },
            {
                type: "paragraph",
                content: "As volume increases, meaning becomes scarce. The value shifts from creation to curation, evolution, and stewardship."
            },

            {
                type: "heading",
                content: "What Makes a Character Endure"
            },
            {
                type: "paragraph",
                content: "Enduring virtual characters share a common foundation: clear identity, defined values, and room for growth."
            },
            {
                type: "list",
                items: [
                    "Consistent Personality: Predictable behavior without becoming static",
                    "Narrative Depth: A past, present, and implied future",
                    "Adaptability: Ability to exist across platforms and contexts",
                    "Ownership & Control: Clear IP stewardship and evolution strategy",
                    "Cultural Sensitivity: Awareness of audience, time, and place"
                ]
            },

            {
                type: "heading",
                content: "Scene9’s Approach to Virtual IP"
            },
            {
                type: "paragraph",
                content: "At Scene9, we do not design characters in isolation. We design ecosystems. Characters emerge from worlds, and worlds are governed by rules, values, and narrative logic."
            },
            {
                type: "paragraph",
                content: "Our process treats characters as long-term collaborators—capable of representing brands, teaching ideas, guiding users, and evolving alongside the organizations they serve."
            },

            {
                type: "heading",
                content: "IP Worlds Across Industries"
            },
            {
                type: "paragraph",
                content: "Virtual characters and IP worlds are no longer limited to entertainment. Their applications span industries."
            },
            {
                type: "list",
                items: [
                    "Branding: Long-term brand identity through consistent virtual presence",
                    "Education: Characters that simplify complex knowledge",
                    "Healthcare & Training: Simulation guides and procedural assistants",
                    "Civic Communication: Characters explaining public systems and policy",
                    "Culture & Storytelling: Original narratives rooted in modern realities"
                ]
            },

            {
                type: "heading",
                content: "India’s Opportunity in IP Creation"
            },
            {
                type: "paragraph",
                content: "India possesses one of the world’s richest storytelling traditions, yet its presence in global IP creation remains underrepresented."
            },
            {
                type: "paragraph",
                content: "As the nation moves toward 2047, virtual characters and IP worlds offer an opportunity to translate cultural depth into global digital presence—without losing authenticity."
            },

            {
                type: "heading",
                content: "From Novelty to Responsibility"
            },
            {
                type: "paragraph",
                content: "The future of virtual characters demands responsibility. Characters influence behavior, shape perception, and build trust over time."
            },
            {
                type: "paragraph",
                content: "Designing such entities requires more than tools. It requires ethical thinking, long-term vision, and respect for audience intelligence."
            },
            {
                type: "quote",
                content: "The most powerful characters are not created. They are cared for."
            },

            {
                type: "paragraph",
                content: "As digital environments become more immersive, virtual characters will increasingly serve as the human interface of technology. The studios that understand this shift will not just create content—they will create culture."
            }
        ]
    }
];

const initialCaseStudies = [
    {
        _id: '1',
        title: 'Education Revolution: XYZ University',
        slug: 'xyz-university',
        description: 'Implemented VR Labs for 500+ students, resulting in 40% improved retention rates.',
        image: '/images/education_modal_vr.webp',
        type: 'image',
        mediaUrl: '',
        isVisible: true,
        content: [
            { type: 'heading', content: 'The Challenge' },
            { type: 'paragraph', content: 'XYZ University faced a significant bottleneck: limited physical lab resources meant students could only perform experiments once a semester. This led to poor retention of complex scientific concepts.' },
            { type: 'heading', content: 'The Melzo Solution' },
            { type: 'paragraph', content: 'We deployed a 50-headset VR Lab pre-loaded with comprehensive Physics, Chemistry, and Biology curriculums. Students can now perform dangerous experiments safely and repeat them endlessly.' },
            { type: 'quote', content: "VR has transformed our science department. Grades are up by 15% in just one term." },
            { type: 'heading', content: 'Key Outcomes' },
            { type: 'list', items: ['40% Improvement in Concept Retention', 'Zero Safety Incidents', '3x More Lab Time Per Student'] }
        ]
    },
    {
        _id: '2',
        title: 'Industrial Safety: Global Mfg Corp',
        slug: 'global-manufacturing-corp',
        description: 'Reduced safety training costs by 60% using our VR simulation modules.',
        image: '/images/defence-bg.webp',
        type: 'image',
        mediaUrl: '',
        isVisible: true,
        content: [
            { type: 'heading', content: 'The Challenge' },
            { type: 'paragraph', content: 'Traditional safety training was expensive, risky, and logistically difficult. Organizing live fire drills or machinery failure simulations caused downtime.' },
            { type: 'heading', content: 'The Melzo Solution' },
            { type: 'paragraph', content: 'We created a custom "Hazard Awareness" VR module. Employees navigate a virtual factory floor, identifying and fostering risks in a hyper-realistic environment.' },
            { type: 'quote', content: "Training that used to take days now takes hours, and it sticks." },
            { type: 'heading', content: 'Key Outcomes' },
            { type: 'list', items: ['60% Reduction in Training Cost', '100% Compliance Rate', 'Real-time Analytics on Employee Performance'] }
        ]
    }
];

const initialNews = [
    {
        _id: '14',
        category: 'Times of India',
        date: 'January 10, 2026',
        title: 'VR chairs bring classrooms to life for SMC students',
        excerpt: 'The Surat Municipal Corporation (SMC) has introduced high-tech VR chairs and virtual reality headsets in its primary schools to provide students with an immersive, multi-sensory educational experience.',
        image: '/images/toi-vr-chairs-smc.webp',
        language: 'English',
        content: `The Surat Municipal Corporation (SMC) has introduced high-tech VR chairs and virtual reality headsets in its primary schools to provide students with an immersive, multi-sensory educational experience.\n\nThis article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.`,
        isVisible: true
    },
    {
        _id: '15',
        category: 'Times of India',
        date: 'January 10, 2026',
        title: 'VR chairs bring classrooms to life for SMC students',
        excerpt: 'In a bid to enhance learning for underprivileged students, Surat Municipal Corporation (SMC) has introduced multidimensional experience chairs in municipal schools, offering students an immersive education through virtual reality.',
        image: '/images/toi-vr-chairs-smc-full.webp',
        language: 'English',
        content: `In a bid to enhance learning for underprivileged students, Surat Municipal Corporation (SMC) has introduced multidimensional experience chairs in municipal schools, offering students an immersive education through virtual reality.\n\nThis article highlights how the Melzo Experience 7D Lab, equipped with VR headsets and motion chairs that blow air and spray mist, is transforming education by allowing students to virtually visit space or historical sites and conduct interactive experiments.`,
        isVisible: true
    },
    {
        _id: 'new-1',
        category: 'Divya Bhaskar',
        date: 'January 2025',
        title: 'IIT pass Gujarati created 5D lab for children',
        excerpt: 'Students can see the outside world from a small room with 5D virtual-sensory chair; Education with VR, AR, AI',
        image: '/images/divya-bhaskar-5d-lab.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '2',
        category: 'Indian Express',
        date: 'January 12, 2025',
        title: 'In a first, 5D laboratory in Surat school to help students \'hear, visualise\' curriculum',
        excerpt: 'On Friday, the Sarvoday trust-run school at Bhatar launched the Melzo Anubhav 5D lab, which, the school authorities claimed, is the first initiative of its kind for students.',
        image: '/images/indian-express-5d-lab.webp',
        language: 'English',
        content: `On Friday, the Sarvoday trust-run school at Bhatar launched the Melzo Anubhav 5D lab, which, the school authorities claimed, is the first initiative of its kind for students.\n\nThis article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.`,
        isVisible: true
    },
    {
        _id: '3',
        category: 'News18 Gujarat',
        date: 'January 14, 2025',
        title: 'Surat student\'s turn! India\'s first 5D lab launched in this school',
        excerpt: 'IG Desai School in Surat has launched India\'s first 5D lab. This lab will help school students understand science and social science subjects easily and experience subjects in real life with the help of technology.',
        image: '/images/news18-surat-5d-lab-updated.webp',
        language: 'Gujarati',
        content: `IG Desai School in Surat has launched India's first 5D lab. This lab will help school students understand science and social science subjects easily and experience subjects in real life with the help of technology.\n\nThis article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '4',
        category: 'Gujarati Newspaper',
        date: 'January 2025',
        title: 'Hardik Software created for free education of Gujarati medium students',
        excerpt: 'Software benefiting 2.80 lakh students; ranked first among 1200 startups in state government\'s startup scheme',
        image: '/images/melzo-partners-universities.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '5',
        category: 'Gujarati Newspaper',
        date: 'January 2025',
        title: 'Country\'s first 5D lab, students will do virtual experiments',
        excerpt: 'Innovation: Google\'s virtual reality and all technical-non-technical subjects at Surat\'s student media center in 5D',
        image: '/images/gujarati-newspaper-5d-lab.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '6',
        category: 'Gujarati Newspaper',
        date: 'January 10, 2025',
        title: 'Sarvoday Charitable Trust\'s IG Desai School in Surat Bhatar launches 5D technology for real education',
        excerpt: 'Modern technology to provide education to poor, middle-class students; parents also happy with the effort',
        image: '/images/sarvoday-ig-desai-5d.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '7',
        category: 'Hindi Newspaper',
        date: 'January 2025',
        title: 'Students in Surat learning complex subjects from India\'s first 5D lab',
        excerpt: 'The city\'s IT youth developed this with indigenous technology. Students can see biology, physics, chemistry and other subjects in 3D.',
        image: '/images/hindi-newspaper-5d-lab.webp',
        language: 'Hindi',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Hindi. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '8',
        category: 'Gujarati Newspaper',
        date: 'January 2025',
        title: 'Melzo Anubhav 5D Lab launched at IG Desai School in Bhatar',
        excerpt: 'New initiative in education: Country\'s first 5D lab launched to make students\' educational experience more interactive and effective',
        image: '/images/melzo-anubhav-5d-lab.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '9',
        category: 'Gujarati Newspaper',
        date: 'January 13, 2025',
        title: 'Launch of India\'s first 5D laboratory for students at IG Desai School',
        excerpt: 'Developed by Surat youth at a cost equivalent to a laptop; lab costs 50 lakhs to set up in Disney World, Apple Center, and universities',
        image: '/images/ig-desai-5d-laboratory.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '10',
        category: 'Gujarati Newspaper',
        date: 'January 2025',
        title: '5D Lab launched to increase student\'s memory power',
        excerpt: 'This modern lab is a combination of virtual reality and sensory technology that provides a new way of teaching and learning',
        image: '/images/5d-lab-memory-power.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '11',
        category: 'Gujarati Newspaper',
        date: 'January 12, 2025',
        title: 'India\'s first 5D lab launched in Surat school',
        excerpt: 'Students at IG Desai School will now be able to learn and experience various subjects of science and social studies; 80% of students come from economically weaker backgrounds',
        image: '/images/surat-first-5d-lab.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '12',
        category: 'Gujarati Newspaper',
        date: 'January 10, 2025',
        title: 'India\'s First 5D Lab Revolutionizing Complex Educational Topics',
        excerpt: 'The first 5D lab of Melzo Anubhav is offering education to the world. This lab at IG Desai School is transforming how students learn complex subjects through immersive experiences.',
        image: '/images/5d-lab-revolutionizing-education.webp',
        language: 'Gujarati',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Gujarati. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    },
    {
        _id: '13',
        category: 'Hindi Newspaper',
        date: 'January 2025',
        title: 'Students in Surat Learning Complex Subjects from India\'s First 5D Lab',
        excerpt: 'Developed by a local IT youth using indigenous technology, this 5D lab is helping students understand difficult subjects through immersive experiences and virtual reality.',
        image: '/images/hindi-surat-5d-lab-students.webp',
        language: 'Hindi',
        content: `This article highlights how Anubhav's 5D lab technology is transforming education across India, providing students with immersive learning experiences that make complex subjects easier to understand and remember.\n\nTranslation Note\nThis article is in Hindi. The title and excerpt have been translated to English for your convenience. The original article discusses the innovative 5D lab technology implemented at IG Desai School in Surat and its positive impact on student learning.`,
        isVisible: true
    }
];

const initialTestimonials = [
    {
        _id: 't1',
        testimonial: "Students understand complex concepts faster with Melzo VR Labs.",
        name: "Principal",
        position: "CBSE School, Surat",
        isVisible: true
    },
    {
        _id: 't2',
        testimonial: "A game-changer for our technical training program.",
        name: "Director",
        position: "Industrial Training Institute",
        isVisible: true
    },
    {
        _id: 't3',
        testimonial: "The most affordable and effective VR solution we've found.",
        name: "HOD",
        position: "University Engineering Dept",
        isVisible: true
    }
];

const initialFAQs = [
    { _id: 'f1', question: 'What hardware is required?', answer: 'Our solutions are compatible with major VR headsets like Oculus, HTC Vive, and Pico.', status: 'Published', slug: 'hardware-required', isVisible: true },
    { _id: 'f2', question: 'Can I customize the content?', answer: 'Yes, we offer tailored content development services to meet specific curriculum or industry needs.', status: 'Published', slug: 'customize-content', isVisible: true },
    { _id: 'f3', question: 'Do you offer on-site support?', answer: 'We provide comprehensive installation, training, and 24/7 technical support.', status: 'Published', slug: 'onsite-support', isVisible: true }
];

const initialAwards = [
    { _id: 'a1', title: "WhatsApp Startup India", organization: "Grand Challenge 2019", awardLevel: "Winner", prize: "$50,000", image: "/images/whatsapp.webp", status: 'Published', slug: 'whatsapp-startup-india', isVisible: true },
    { _id: 'a2', title: "Vibrant Gujarat", organization: "Startup Summit 2018", awardLevel: "Winner", prize: "₹30,00,000", image: "/images/gujarat.webp", status: 'Published', slug: 'vibrant-gujarat', isVisible: true },
    { _id: 'a3', title: "Dubai Future Accelerators", organization: "Cohort 7 & 8 (2020)", awardLevel: "Finalist", prize: "KHDA Challenge", image: "/images/dubai.webp", status: 'Published', slug: 'dubai-future-accelerators', isVisible: true },
    { _id: 'a4', title: "Data Innovation Bazaar", organization: "Western Digital 2020", awardLevel: "National Top 5", prize: "₹2,00,000", image: "/images/data.webp", status: 'Published', slug: 'data-innovation-bazaar', isVisible: true }
];

const initialIndustries = [
    {
        _id: 'education',
        title: 'Education',
        slug: 'education',
        summary: 'Curriculum-aligned VR labs for Science, Math, History, Geography.',
        impact: 'Improve student retention rates by up to 75% and save 60% on physical lab infrastructure.',
        details: '• K-12 Integration\n• STEM Labs\n• Teacher Training',
        modalTitle: 'Virtual Reality Solutions for Schools, Colleges & Training Institutes',
        fullSummary: 'Melzo designs VR solutions for education in India that support classroom learning, lab-based subjects, and skill development programs.',
        targetAudience: 'K–12 schools (CBSE, ICSE, State Boards)\nJunior colleges and degree colleges\nITIs, polytechnics, and vocational institutes\nEdTech and digital learning centers',
        problemsSolved: 'Limited physical lab access\nSafety risks in experiments\nLow student engagement\nConcept memorization without understanding',
        useCases: 'LAB|Science lab simulations|Conduct virtual experiments safely without physical lab constraints\nMATH|Mathematics and geometry visualization|Visualize complex 3D shapes and mathematical concepts interactively\nEXPLORE|History and geography immersion|Explore historical events and geographical locations in immersive VR\nCAREER|Career and skill exploration|Experience different careers and develop practical skills virtually',
        statsString: '120+|Schools\n50K+|Students\n75%|Better Retention',
        tags: 'K-12, STEM, Labs',
        image: '/images/education_modal_vr.webp',
        status: 'Published',
        isVisible: true
    },
    {
        _id: 'csr',
        title: 'CSR & Foundations',
        slug: 'csr',
        summary: 'Measurable impact, scalable deployment, and comprehensive reporting support.',
        impact: 'Directly reached 15,000+ beneficiaries in rural sectors with quantifiable skill improvements.',
        details: '• Rural Development\n• Skill Alignment\n• Impact Reports',
        tags: 'Impact, Scale, Social Good',
        image: '/images/csr-bg.webp',
        status: 'Published',
        isVisible: true
    },
    {
        _id: 'government',
        title: 'Government & Public Sector',
        slug: 'government',
        summary: 'Skill development, safety training, and immersive awareness programs.',
        impact: 'Standardized training for 50,000+ personnel with zero safety incidents during simulation.',
        details: '• Public Safety\n• Urban Planning\n• Civic Awareness',
        tags: 'Skilling, Safety, Civic',
        image: '/images/government-bg.webp',
        status: 'Published',
        isVisible: true
    },
    {
        _id: 'defence',
        title: 'Industry & Defence',
        slug: 'defence',
        summary: 'Simulation-based training with reduced risk and cost for mission-critical operations.',
        impact: 'Reduced training costs by 40% while increasing scenario exposure by 300%.',
        details: '• Tactical Sims\n• Equipment Handling\n• Strategy Planning',
        tags: 'Simulation, Tactical, Training',
        image: '/images/defence-bg.webp',
        status: 'Published',
        isVisible: true
    }
];

const initialTeam = [
    { _id: 't1', name: 'HARDIK DESAI', position: 'Founder & CEO', image: '/team/hardiksir.webp', status: 'Published', slug: 'hardik-desai', isVisible: true },
    { _id: 't2', name: 'BHAVIK MEHTA', position: 'Chief Technology Officer', image: '/team/bhaviksir.webp', status: 'Published', slug: 'bhavik-mehta', isVisible: true },
    { _id: 't3', name: 'SOMNATH CHAUDHARI', position: 'Sales Head', image: '/team/somnathsir.webp', status: 'Published', slug: 'somnath-chaudhari', isVisible: true },
    { _id: 't4', name: 'TAPAN DESAI', position: 'Production Head', image: '/team/tapansir.webp', status: 'Published', slug: 'tapan-desai', isVisible: true },
    { _id: 't5', name: 'GAYATRI BANSHIWAL', position: 'SR. HR Manager', image: '/team/gayatrimaam.webp', status: 'Published', slug: 'gayatri-banshiwal', isVisible: true }
];

const initialTimeline = [
    { _id: 'tl1', year: '2017', title: 'Inception', content: 'Founded in 2017, ShilpMIS Technologies Private Limited began its journey as India\'s pioneer in immersive technology.', isVisible: true, status: 'Published' },
    { _id: 'tl2', year: '2019', title: 'First Lab', content: 'Launched our first fully immersive VR lab in Gujarat.', isVisible: true, status: 'Published' },
    { _id: 'tl3', year: '2021', title: 'Expansion', content: 'Expanded operations to cover Education, CSR, and Enterprise training.', isVisible: true, status: 'Published' },
    { _id: 'tl4', year: '2023', title: 'Innovation', content: 'Developed proprietary VR hardware and software ecosystem.', isVisible: true, status: 'Published' },
    { _id: 'tl5', year: '2024', title: 'Global Reach', content: 'Partnered with international institutions for content exchange.', isVisible: true, status: 'Published' },
    { _id: 'tl6', year: 'Future', title: 'Next Gen', content: 'Building the metaverse of education.', isVisible: true, status: 'Published' }
];

const initialDemoQueries = [
    {
        _id: 'dq1',
        name: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        phone: '9876543210',
        institute: 'Delhi Public School',
        designation: 'Principal',
        date: '2026-02-15',
        message: 'Interested in VR labs for grades 9-12.',
        agreeToTerms: true,
        status: 'Pending',
        createdAt: '2026-01-14T10:00:00.000Z',
        isVisible: true
    }
];

const ADMIN_USERS = [
    { email: 'superadmin@melzo.com', password: 'superadmin123', role: 'superadmin', name: 'Super Admin' },
    { email: 'contentmanager@melzo.com', password: 'contentmanager123', role: 'content_manager', name: 'Content Manager' },
    { email: 'sales@melzo.com', password: 'sales123', role: 'sales', name: 'Sales Team' },
    { email: 'hr@melzo.com', password: 'hr123', role: 'HR', name: 'HR Manager' }
];

class MockStorageService {
    constructor() {
        this.init();
    }


    updateUser(id, data) {
        return this._update('users', id, data);
    }

    deleteUser(id) {
        return this._delete('users', id);
    }

    init() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(ADMIN_USERS.map((u, i) => ({ ...u, _id: `u${i}`, isVisible: true, status: 'Published' }))));
        }
        if (!localStorage.getItem('jobs')) {
            localStorage.setItem('jobs', JSON.stringify([]));
        }
        if (!localStorage.getItem('jobApplications')) {
            localStorage.setItem('jobApplications', JSON.stringify([]));
        }
        if (!localStorage.getItem('employeeStories')) {
            localStorage.setItem('employeeStories', JSON.stringify([]));
        }
        if (!localStorage.getItem('blogs')) {
            localStorage.setItem('blogs', JSON.stringify(initialBlogs));
        }
        if (!localStorage.getItem('caseFile')) {
            localStorage.setItem('caseFile', JSON.stringify(initialCaseStudies));
        }
        // Initialize News
        const existingNews = localStorage.getItem('news');
        if (!existingNews || existingNews === '[]') {
            localStorage.setItem('news', JSON.stringify(initialNews));
        }

        // Initialize Testimonials
        if (!localStorage.getItem('testimonials')) {
            localStorage.setItem('testimonials', JSON.stringify(initialTestimonials));
        }

        // Initialize Awards
        if (!localStorage.getItem('awards')) {
            localStorage.setItem('awards', JSON.stringify(initialAwards));
        }

        // Initialize FAQs
        if (!localStorage.getItem('faqs')) {
            localStorage.setItem('faqs', JSON.stringify(initialFAQs));
        }

        // Initialize Team Details
        if (!localStorage.getItem('teamdetails')) {
            localStorage.setItem('teamdetails', JSON.stringify(initialTeam));
        }

        // Initialize Timeline
        if (!localStorage.getItem('timeline')) {
            localStorage.setItem('timeline', JSON.stringify(initialTimeline));
        }

        if (!localStorage.getItem('demoQueries')) {
            localStorage.setItem('demoQueries', JSON.stringify(initialDemoQueries));
        }

        // Initialize Industries (From HEAD)
        if (!localStorage.getItem('industries')) {
            localStorage.setItem('industries', JSON.stringify(initialIndustries));
        }

        // --- MIGRATION: Auto-Generate Slugs for Legacy Data (From HEAD) ---
        const collections = ['blogs', 'news', 'caseFile', 'awards', 'faqs', 'teamdetails', 'testimonials', 'jobs', 'employeeStories', 'jobApplications', 'industries'];

        collections.forEach(key => {
            const items = JSON.parse(localStorage.getItem(key) || '[]');
            let modified = false;

            items.forEach(item => {
                if (!item.slug) {
                    // Determine source field for slug
                    const sourceText = item.title || item.name || item.question || 'untitled';
                    item.slug = sourceText
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)+/g, '');
                    modified = true;
                }
            });

            if (modified) {
                localStorage.setItem(key, JSON.stringify(items));
                console.log(`Migrated slugs for ${key}`);
            }
        });

        // --- MIGRATION: Fix Industries Images (From HEAD) ---
        try {
            const storedIndustries = JSON.parse(localStorage.getItem('industries') || '[]');
            let indModified = false;
            const imageMap = {
                'education': '/images/education_modal_vr.webp',
                'csr': '/images/csr-bg.webp',
                'government': '/images/government-bg.webp',
                'defence': '/images/defence-bg.webp'
            };

            storedIndustries.forEach(ind => {
                const id = ind._id || ind.id;
                if (imageMap[id] && ind.image !== imageMap[id]) {
                    ind.image = imageMap[id];
                    indModified = true;
                }
            });

            if (indModified) {
                localStorage.setItem('industries', JSON.stringify(storedIndustries));
                console.log('Migrated industries images');
            }
        } catch (e) {
            console.error('Error migrating industries images', e);
        }

        // --- MIGRATION: Update 'admin' role to 'content_manager' and Update Credentials ---
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        let usersModified = false;
        users.forEach(u => {
            // General role migration
            if (u.role === 'admin') {
                u.role = 'content_manager';
                u.name = 'Content Manager';
                usersModified = true;
            }
            // Specific email/password update for the default admin user
            if (u.email === 'admin@melzo.com') {
                u.email = 'contentmanager@melzo.com';
                u.password = 'contentmanager123';
                u.role = 'content_manager'; // Ensure role is updated
                u.name = 'Content Manager';
                usersModified = true;
            }
        });

        // Ensure HR and Sales users exist
        ADMIN_USERS.forEach(adminUser => {
            if (!users.find(u => u.email === adminUser.email)) {
                users.push({ ...adminUser, _id: `u${users.length}`, isVisible: true, status: 'Published' });
                usersModified = true;
            }
        });

        if (usersModified) {
            localStorage.setItem('users', JSON.stringify(users));
            console.log('Migrated admin user to contentmanager credentials');
        }
    }

    // Generic CRUD with Visibility
    _getAll(key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
    }

    _save(key, items) {
        localStorage.setItem(key, JSON.stringify(items));
    }

    _create(key, data) {
        return new Promise((resolve) => {
            const items = this._getAll(key);
            const newItem = {
                ...data,
                _id: Date.now().toString(),
                isVisible: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            items.push(newItem);
            this._save(key, items);
            resolve({ data: newItem });
        });
    }

    _update(key, id, data) {
        return new Promise((resolve, reject) => {
            const items = this._getAll(key);
            const index = items.findIndex(i => i._id === id);
            if (index !== -1) {
                items[index] = { ...items[index], ...data, updatedAt: new Date().toISOString() };
                this._save(key, items);
                resolve({ data: items[index] });
            } else {
                reject({ message: 'Not found' });
            }
        });
    }

    _toggleVisibility(key, id) {
        return new Promise((resolve, reject) => {
            const items = this._getAll(key);
            const index = items.findIndex(i => i._id === id);
            if (index !== -1) {
                const newVisibility = !items[index].isVisible;
                items[index].isVisible = newVisibility;

                // Sync status if it exists
                if (items[index].status) {
                    items[index].status = newVisibility ? 'Published' : 'Draft';
                }

                items[index].updatedAt = new Date().toISOString();
                this._save(key, items);
                resolve({ data: items[index] });
            } else {
                reject({ message: 'Not found' });
            }
        });
    }

    _delete(key, id) {
        return new Promise((resolve, reject) => {
            const items = this._getAll(key);
            const filteredItems = items.filter(i => i._id !== id);
            if (items.length !== filteredItems.length) {
                this._save(key, filteredItems);
                resolve({ message: 'Deleted successfully' });
            } else {
                reject({ message: 'Not found' });
            }
        });
    }

    // --- Blogs ---
    getBlogs() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('blogs') });
        });
    }

    getBlog(slugOrId) {
        return new Promise((resolve, reject) => {
            const blogs = this._getAll('blogs');
            const blog = blogs.find(b => b.slug === slugOrId || b._id === slugOrId);
            if (blog) resolve({ data: blog });
            else reject({ message: 'Blog not found' });
        });
    }

    saveBlog(data) {
        return this._create('blogs', { ...data, date: new Date().toISOString().split('T')[0] });
    }

    updateBlog(id, data) {
        return this._update('blogs', id, data);
    }

    deleteBlog(id) {
        return this._delete('blogs', id);
    }

    toggleBlogVisibility(id) {
        return this._toggleVisibility('blogs', id);
    }

    // --- Case Studies ---
    getCaseStudies() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('caseFile') });
        });
    }

    saveCaseStudy(data) {
        return this._create('caseFile', data);
    }

    updateCaseStudy(id, data) {
        return this._update('caseFile', id, data);
    }

    deleteCaseStudy(id) {
        return this._delete('caseFile', id);
    }

    toggleCaseStudyVisibility(id) {
        return this._toggleVisibility('caseFile', id);
    }

    // --- News ---
    getNews() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('news') });
        });
    }

    saveNews(data) {
        return this._create('news', data);
    }

    updateNews(id, data) {
        return this._update('news', id, data);
    }

    deleteNews(id) {
        return this._delete('news', id);
    }

    toggleNewsVisibility(id) {
        return this._toggleVisibility('news', id);
    }

    // --- Awards ---
    getAwards() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('awards') });
        });
    }

    saveAward(data) {
        return this._create('awards', data);
    }

    updateAward(id, data) {
        return this._update('awards', id, data);
    }

    deleteAward(id) {
        return this._delete('awards', id);
    }

    toggleAwardVisibility(id) {
        return this._toggleVisibility('awards', id);
    }

    // --- FAQs ---
    getFAQs() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('faqs') });
        });
    }

    saveFAQ(data) {
        return this._create('faqs', data);
    }

    updateFAQ(id, data) {
        return this._update('faqs', id, data);
    }

    deleteFAQ(id) {
        return this._delete('faqs', id);
    }

    toggleFAQVisibility(id) {
        return this._toggleVisibility('faqs', id);
    }

    // --- Team Details ---
    getTeamDetails() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('teamdetails') });
        });
    }

    saveTeamDetail(data) {
        return this._create('teamdetails', data);
    }

    updateTeamDetail(id, data) {
        return this._update('teamdetails', id, data);
    }

    deleteTeamDetail(id) {
        return this._delete('teamdetails', id);
    }

    toggleTeamDetailVisibility(id) {
        return this._toggleVisibility('teamdetails', id);
    }

    // --- Testimonials ---
    getTestimonials() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('testimonials') });
        });
    }

    saveTestimonial(data) {
        return this._create('testimonials', data);
    }

    updateTestimonial(id, data) {
        return this._update('testimonials', id, data);
    }

    deleteTestimonial(id) {
        return this._delete('testimonials', id);
    }

    toggleTestimonialVisibility(id) {
        return this._toggleVisibility('testimonials', id);
    }

    // --- Timeline ---
    getTimeline() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('timeline') });
        });
    }

    saveTimeline(data) {
        return this._create('timeline', data);
    }

    updateTimeline(id, data) {
        return this._update('timeline', id, data);
    }

    deleteTimeline(id) {
        return this._delete('timeline', id);
    }

    toggleTimelineVisibility(id) {
        return this._toggleVisibility('timeline', id);
    }

    // --- Industries ---
    getIndustries() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('industries') });
        });
    }

    saveIndustry(data) {
        return this._create('industries', data);
    }

    updateIndustry(id, data) {
        return this._update('industries', id, data);
    }

    deleteIndustry(id) {
        return this._delete('industries', id);
    }

    toggleIndustryVisibility(id) {
        return this._toggleVisibility('industries', id);
    }

    // --- Demo Queries ---
    async getDemoQueries() {
        try {
            const response = await fetch('http://localhost:3000/api/messages');
            if (response.ok) {
                const result = await response.json();
                // Map backend fields to frontend model
                const mappedData = result.data.map(item => ({
                    _id: item.id.toString(),
                    ...item,
                    date: item.demo_date,
                    createdAt: item.created_at,
                    status: 'Pending', // Default status for now as backend doesn't store it yet
                    isVisible: true
                }));
                return { data: mappedData };
            }
        } catch (error) {
            console.warn("Backend fetch failed, falling back to local storage", error);
        }

        // Fallback
        return new Promise((resolve) => {
            resolve({ data: this._getAll('demoQueries').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) });
        });
    }

    saveDemoQuery(data) {
        return this._create('demoQueries', {
            ...data,
            status: 'Pending', // New, Contacted, Closed
            notes: ''
        });
    }

    updateDemoQuery(id, data) {
        return this._update('demoQueries', id, data);
    }

    // --- Footer Config ---
    async getFooterConfig() {
        try {
            const response = await fetch('http://localhost:3000/api/footer');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Failed to fetch footer config from backend:', error);
        }
        return { data: null };
    }

    async saveFooterConfig(data) {
        try {
            const response = await fetch('http://localhost:3000/api/footer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Failed to save footer config to backend:', error);
            throw error;
        }
    }

    deleteDemoQuery(id) {
        return this._delete('demoQueries', id);
    }

    // --- Careers/Jobs ---
    getJobs() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('jobs') });
        });
    }

    saveJob(data) {
        return this._create('jobs', {
            ...data,
            mission: data.mission || [],
            requirements: data.requirements || []
        });
    }

    updateJob(id, data) {
        return this._update('jobs', id, data);
    }

    deleteJob(id) {
        return this._delete('jobs', id);
    }

    toggleJobVisibility(id) {
        return this._toggleVisibility('jobs', id);
    }

    // --- Job Applications ---
    getJobApplications() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('jobApplications') });
        });
    }

    saveJobApplication(data) {
        return this._create('jobApplications', {
            ...data,
            appliedAt: data.appliedAt || new Date().toISOString()
        });
    }

    deleteJobApplication(id) {
        return this._delete('jobApplications', id);
    }

    // --- Employee Stories ---
    getEmployeeStories() {
        return new Promise((resolve) => {
            resolve({ data: this._getAll('employeeStories') });
        });
    }

    saveEmployeeStory(data) {
        return this._create('employeeStories', data);
    }

    updateEmployeeStory(id, data) {
        return this._update('employeeStories', id, data);
    }

    deleteEmployeeStory(id) {
        return this._delete('employeeStories', id);
    }

    toggleEmployeeStoryVisibility(id) {
        return this._toggleVisibility('employeeStories', id);
    }
}


export const mockStorage = new MockStorageService();
export default mockStorage;
