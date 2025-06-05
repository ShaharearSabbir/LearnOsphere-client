const categories = [
  {
    name: "Web Development",
    description:
      "Courses covering front-end, back-end, and full-stack web development.",
    thumbnail: "url_to_web_dev_image.jpg",
  },
  {
    name: "Data Science",
    description:
      "Courses focused on data analysis, machine learning, and artificial intelligence.",
    thumbnail: "url_to_data_science_image.jpg",
  },
  {
    name: "Marketing",
    description:
      "Courses in digital marketing, social media, SEO, and content strategy.",
    thumbnail: "url_to_marketing_image.jpg",
  },
  {
    name: "Graphic Design",
    description:
      "Courses for visual communication, UI/UX design, and creative software.",
    thumbnail: "url_to_graphic_design_image.jpg",
  },
  {
    name: "Business",
    description:
      "Courses on entrepreneurship, project management, and business administration.",
    thumbnail: "url_to_business_image.jpg",
  },
  {
    name: "Photography",
    description:
      "Courses from basic camera skills to advanced photo editing and composition.",
    thumbnail: "url_to_photography_image.jpg",
  },
  {
    name: "Music Production",
    description:
      "Courses on sound engineering, music theory, and digital audio workstations.",
    thumbnail: "url_to_music_image.jpg",
  },
  {
    name: "Health & Fitness",
    description:
      "Courses covering nutrition, exercise, and overall well-being.",
    thumbnail: "url_to_health_image.jpg",
  },
];

const courses = [
  // Web Development (7 courses)
  {
    title: "Mastering React Hooks",
    description:
      "Deep dive into React Hooks for building efficient and scalable web applications.",
    thumbnail: "https://example.com/thumbnails/react_hooks.jpg",
    category: "Web Development",
    price: 99.99,
    free: false,
    topics: [
      "React",
      "Hooks",
      "Frontend Development",
      "JavaScript",
      "State Management",
    ],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Node.js & Express API Development",
    description:
      "Learn to build robust RESTful APIs using Node.js, Express, and MongoDB.",
    thumbnail: "https://example.com/thumbnails/nodejs_api.jpg",
    category: "Web Development",
    price: 129.0,
    free: false,
    topics: ["Node.js", "Express.js", "MongoDB", "Backend Development", "API"],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    description:
      "Comprehensive bootcamp covering MERN stack development from scratch.",
    thumbnail: "https://example.com/thumbnails/fullstack_mern.jpg",
    category: "Web Development",
    price: 499.0,
    free: false,
    topics: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Web Development",
    ],
    seat: 30,
    dynamicItems: [],
  },
  {
    title: "Introduction to HTML5 & CSS3",
    description:
      "Beginner-friendly course to master the fundamentals of web page structuring and styling.",
    thumbnail: "https://example.com/thumbnails/html_css.jpg",
    category: "Web Development",
    price: 0,
    free: true,
    topics: ["HTML5", "CSS3", "Web Design", "Frontend Basics"],
    seat: 100,
    dynamicItems: [],
  },
  {
    title: "Advanced JavaScript Concepts",
    description:
      "Explore closures, prototypes, async/await, and other advanced JavaScript features.",
    thumbnail: "https://example.com/thumbnails/advanced_js.jpg",
    category: "Web Development",
    price: 79.99,
    free: false,
    topics: ["JavaScript", "ES6+", "Asynchronous JavaScript", "Prototypes"],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Responsive Web Design with Bootstrap 5",
    description:
      "Build beautiful and responsive websites using Bootstrap 5 framework.",
    thumbnail: "https://example.com/thumbnails/bootstrap_responsive.jpg",
    category: "Web Development",
    price: 49.99,
    free: false,
    topics: ["Bootstrap 5", "Responsive Design", "CSS Frameworks", "Frontend"],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Building Progressive Web Apps (PWAs)",
    description:
      "Learn to create fast, reliable, and engaging Progressive Web Applications.",
    thumbnail: "https://example.com/thumbnails/pwa.jpg",
    category: "Web Development",
    price: 119.0,
    free: false,
    topics: ["PWA", "Service Workers", "Web Manifest", "Offline Capabilities"],
    seat: 40,
    dynamicItems: [],
  },

  // Data Science (7 courses)
  {
    title: "Python for Data Science",
    description:
      "Essential Python programming for data analysis, manipulation, and visualization.",
    thumbnail: "https://example.com/thumbnails/python_data.jpg",
    category: "Data Science",
    price: 89.0,
    free: false,
    topics: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "Machine Learning with Python",
    description:
      "Implement popular machine learning algorithms using Scikit-learn and TensorFlow.",
    thumbnail: "https://example.com/thumbnails/ml_python.jpg",
    category: "Data Science",
    price: 159.0,
    free: false,
    topics: [
      "Machine Learning",
      "Scikit-learn",
      "TensorFlow",
      "Deep Learning",
      "Python",
    ],
    seat: 35,
    dynamicItems: [],
  },
  {
    title: "Data Visualization with D3.js",
    description:
      "Create interactive and dynamic data visualizations for the web using D3.js.",
    thumbnail: "https://example.com/thumbnails/d3js.jpg",
    category: "Data Science",
    price: 109.99,
    free: false,
    topics: ["D3.js", "Data Visualization", "JavaScript", "SVG", "Web Data"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "SQL for Data Analysts",
    description:
      "Master SQL for querying, managing, and analyzing relational databases.",
    thumbnail: "https://example.com/thumbnails/sql_data.jpg",
    category: "Data Science",
    price: 69.99,
    free: false,
    topics: [
      "SQL",
      "Database Management",
      "Data Querying",
      "Relational Databases",
    ],
    seat: 65,
    dynamicItems: [],
  },
  {
    title: "Big Data Fundamentals with Apache Spark",
    description:
      "Introduction to big data processing and analytics using Apache Spark.",
    thumbnail: "https://example.com/thumbnails/spark_bigdata.jpg",
    category: "Data Science",
    price: 139.0,
    free: false,
    topics: [
      "Big Data",
      "Apache Spark",
      "Data Processing",
      "Distributed Computing",
    ],
    seat: 30,
    dynamicItems: [],
  },
  {
    title: "Introduction to R for Statistical Analysis",
    description:
      "Learn the basics of R programming for statistical computing and graphics.",
    thumbnail: "https://example.com/thumbnails/r_stats.jpg",
    category: "Data Science",
    price: 0,
    free: true,
    topics: [
      "R Programming",
      "Statistical Analysis",
      "Data Graphics",
      "Statistics",
    ],
    seat: 80,
    dynamicItems: [],
  },
  {
    title: "Natural Language Processing (NLP) Basics",
    description:
      "Understand the fundamentals of NLP and build simple text processing applications.",
    thumbnail: "https://example.com/thumbnails/nlp_basics.jpg",
    category: "Data Science",
    price: 110.0,
    free: false,
    topics: ["NLP", "Text Processing", "Linguistics", "Machine Learning"],
    seat: 45,
    dynamicItems: [],
  },

  // Marketing (7 courses)
  {
    title: "Digital Marketing Fundamentals",
    description:
      "An essential guide to digital marketing strategies and online presence.",
    thumbnail: "https://example.com/thumbnails/digital_marketing.jpg",
    category: "Marketing",
    price: 75.0,
    free: false,
    topics: [
      "Digital Marketing",
      "Online Presence",
      "Marketing Strategy",
      "Branding",
    ],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Social Media Marketing 2025",
    description:
      "Leverage social media platforms for brand growth and audience engagement.",
    thumbnail: "https://example.com/thumbnails/social_media_marketing.jpg",
    category: "Marketing",
    price: 85.0,
    free: false,
    topics: [
      "Social Media",
      "Content Marketing",
      "Audience Engagement",
      "Facebook Ads",
    ],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "SEO for Beginners: Rank Higher on Google",
    description:
      "Learn search engine optimization techniques to improve website visibility and traffic.",
    thumbnail: "https://example.com/thumbnails/seo_google.jpg",
    category: "Marketing",
    price: 65.0,
    free: false,
    topics: [
      "SEO",
      "Search Engine Optimization",
      "Keyword Research",
      "Google Rankings",
    ],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "Content Marketing Strategy",
    description:
      "Develop effective content strategies to attract, engage, and convert your audience.",
    thumbnail: "https://example.com/thumbnails/content_marketing.jpg",
    category: "Marketing",
    price: 95.0,
    free: false,
    topics: [
      "Content Strategy",
      "Copywriting",
      "Blogging",
      "Audience Engagement",
    ],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Email Marketing Automation",
    description:
      "Automate your email campaigns for better customer relationships and sales.",
    thumbnail: "https://example.com/thumbnails/email_automation.jpg",
    category: "Marketing",
    price: 70.0,
    free: false,
    topics: ["Email Marketing", "Automation", "CRM", "Lead Nurturing"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Google Ads & PPC Campaigns",
    description:
      "Create and manage successful pay-per-click campaigns on Google Ads.",
    thumbnail: "https://example.com/thumbnails/google_ads.jpg",
    category: "Marketing",
    price: 105.0,
    free: false,
    topics: ["Google Ads", "PPC", "Paid Advertising", "Campaign Management"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Influencer Marketing Masterclass",
    description:
      "Understand how to identify, collaborate with, and measure influencer campaigns.",
    thumbnail: "https://example.com/thumbnails/influencer_marketing.jpg",
    category: "Marketing",
    price: 120.0,
    free: false,
    topics: [
      "Influencer Marketing",
      "Partnerships",
      "Brand Awareness",
      "Campaign Measurement",
    ],
    seat: 35,
    dynamicItems: [],
  },

  // Graphic Design (6 courses)
  {
    title: "Adobe Photoshop Essential Training",
    description:
      "A complete guide to Adobe Photoshop for beginners and intermediate users.",
    thumbnail: "https://example.com/thumbnails/photoshop.jpg",
    category: "Graphic Design",
    price: 80.0,
    free: false,
    topics: [
      "Adobe Photoshop",
      "Image Editing",
      "Graphic Design",
      "Retouching",
    ],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Illustrator CC: Creating Vector Graphics",
    description:
      "Master vector illustration and logo design using Adobe Illustrator.",
    thumbnail: "https://example.com/thumbnails/illustrator.jpg",
    category: "Graphic Design",
    price: 85.0,
    free: false,
    topics: [
      "Adobe Illustrator",
      "Vector Graphics",
      "Logo Design",
      "Illustration",
    ],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the core principles of User Interface and User Experience design.",
    thumbnail: "https://example.com/thumbnails/ui_ux_design.jpg",
    category: "Graphic Design",
    price: 110.0,
    free: false,
    topics: ["UI Design", "UX Design", "Figma", "Wireframing", "Prototyping"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Typography for Designers",
    description:
      "Understand the art and science of typography for effective visual communication.",
    thumbnail: "https://example.com/thumbnails/typography.jpg",
    category: "Graphic Design",
    price: 55.0,
    free: false,
    topics: [
      "Typography",
      "Font Pairing",
      "Design Principles",
      "Visual Hierarchy",
    ],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "InDesign for Print & Digital Publishing",
    description:
      "Create professional layouts for brochures, magazines, and interactive PDFs.",
    thumbnail: "https://example.com/thumbnails/indesign.jpg",
    category: "Graphic Design",
    price: 90.0,
    free: false,
    topics: [
      "Adobe InDesign",
      "Layout Design",
      "Print Design",
      "Digital Publishing",
    ],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Motion Graphics with After Effects",
    description:
      "Animate graphics and create stunning visual effects using After Effects.",
    thumbnail: "https://example.com/thumbnails/after_effects.jpg",
    category: "Graphic Design",
    price: 130.0,
    free: false,
    topics: ["After Effects", "Motion Graphics", "Animation", "Video Editing"],
    seat: 30,
    dynamicItems: [],
  },

  // Business (6 courses)
  {
    title: "Project Management Professional (PMP) Prep",
    description:
      "Prepare for the PMP certification exam with this comprehensive course.",
    thumbnail: "https://example.com/thumbnails/pmp_prep.jpg",
    category: "Business",
    price: 250.0,
    free: false,
    topics: ["Project Management", "PMP Certification", "Agile", "Scrum"],
    seat: 25,
    dynamicItems: [],
  },
  {
    title: "Start Your Own Online Business",
    description:
      "A step-by-step guide to launching and growing your online venture.",
    thumbnail: "https://example.com/thumbnails/online_business.jpg",
    category: "Business",
    price: 120.0,
    free: false,
    topics: ["Entrepreneurship", "E-commerce", "Business Plan", "Startup"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Financial Accounting Basics",
    description:
      "Understand the fundamentals of financial accounting for business success.",
    thumbnail: "https://example.com/thumbnails/financial_accounting.jpg",
    category: "Business",
    price: 80.0,
    free: false,
    topics: ["Accounting", "Finance", "Balance Sheets", "Income Statements"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Leadership and Management Skills",
    description:
      "Develop essential leadership qualities and effective team management skills.",
    thumbnail: "https://example.com/thumbnails/leadership.jpg",
    category: "Business",
    price: 90.0,
    free: false,
    topics: ["Leadership", "Management", "Team Building", "Communication"],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Negotiation Skills for Professionals",
    description:
      "Master the art of negotiation for better business deals and personal outcomes.",
    thumbnail: "https://example.com/thumbnails/negotiation.jpg",
    category: "Business",
    price: 70.0,
    free: false,
    topics: [
      "Negotiation",
      "Communication",
      "Conflict Resolution",
      "Deal Making",
    ],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "Digital Transformation Strategies",
    description:
      "Guide your organization through successful digital transformation initiatives.",
    thumbnail: "https://example.com/thumbnails/digital_transformation.jpg",
    category: "Business",
    price: 150.0,
    free: false,
    topics: [
      "Digital Transformation",
      "Innovation",
      "Technology Adoption",
      "Business Strategy",
    ],
    seat: 30,
    dynamicItems: [],
  },

  // Photography (6 courses)
  {
    title: "Photography Fundamentals: A Beginner's Guide",
    description:
      "Learn camera basics, composition, and light for stunning photos.",
    thumbnail: "https://example.com/thumbnails/photo_basics.jpg",
    category: "Photography",
    price: 59.99,
    free: false,
    topics: ["Photography", "Camera Basics", "Composition", "Lighting"],
    seat: 80,
    dynamicItems: [],
  },
  {
    title: "Portrait Photography Masterclass",
    description:
      "Techniques for capturing beautiful portraits, from lighting to posing.",
    thumbnail: "https://example.com/thumbnails/portrait_photo.jpg",
    category: "Photography",
    price: 89.0,
    free: false,
    topics: [
      "Portrait Photography",
      "Posing",
      "Studio Lighting",
      "Outdoor Portraits",
    ],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Landscape Photography: From Capture to Edit",
    description:
      "Capture breathtaking landscapes and master post-processing techniques.",
    thumbnail: "https://example.com/thumbnails/landscape_photo.jpg",
    category: "Photography",
    price: 99.0,
    free: false,
    topics: [
      "Landscape Photography",
      "Post-processing",
      "Lightroom",
      "Nature Photography",
    ],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Mobile Photography: Shoot Like a Pro",
    description:
      "Unlock the full potential of your smartphone camera for amazing photos.",
    thumbnail: "https://example.com/thumbnails/mobile_photo.jpg",
    category: "Photography",
    price: 0,
    free: true,
    topics: [
      "Mobile Photography",
      "Smartphone Camera",
      "Editing Apps",
      "Composition",
    ],
    seat: 100,
    dynamicItems: [],
  },
  {
    title: "Street Photography: Capturing Candid Moments",
    description:
      "Learn to observe and capture the essence of urban life and candid moments.",
    thumbnail: "https://example.com/thumbnails/street_photo.jpg",
    category: "Photography",
    price: 75.0,
    free: false,
    topics: [
      "Street Photography",
      "Candid Shots",
      "Urban Life",
      "Photojournalism",
    ],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Product Photography for E-commerce",
    description:
      "Create professional product images that sell for your online store.",
    thumbnail: "https://example.com/thumbnails/product_photo.jpg",
    category: "Photography",
    price: 110.0,
    free: false,
    topics: [
      "Product Photography",
      "E-commerce",
      "Lighting Setup",
      "Post-production",
    ],
    seat: 35,
    dynamicItems: [],
  },

  // Music Production (6 courses)
  {
    title: "Music Production with Ableton Live",
    description:
      "Learn electronic music production, mixing, and mastering with Ableton Live.",
    thumbnail: "https://example.com/thumbnails/ableton_live.jpg",
    category: "Music Production",
    price: 149.0,
    free: false,
    topics: [
      "Ableton Live",
      "Music Production",
      "Mixing",
      "Mastering",
      "Electronic Music",
    ],
    seat: 30,
    dynamicItems: [],
  },
  {
    title: "Songwriting & Music Theory Basics",
    description:
      "Understand fundamental music theory to enhance your songwriting skills.",
    thumbnail: "https://example.com/thumbnails/songwriting.jpg",
    category: "Music Production",
    price: 70.0,
    free: false,
    topics: ["Songwriting", "Music Theory", "Composition", "Harmony"],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Mixing & Mastering in Logic Pro X",
    description:
      "Achieve professional-sounding mixes and masters using Logic Pro X.",
    thumbnail: "https://example.com/thumbnails/logic_pro.jpg",
    category: "Music Production",
    price: 120.0,
    free: false,
    topics: ["Logic Pro X", "Mixing", "Mastering", "Audio Engineering", "DAW"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Introduction to Sound Design",
    description: "Explore the art of creating unique sounds for various media.",
    thumbnail: "https://example.com/thumbnails/sound_design.jpg",
    category: "Music Production",
    price: 95.0,
    free: false,
    topics: ["Sound Design", "Synthesizers", "Audio Effects", "Foley"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Producing Vocals: Recording to Release",
    description:
      "Everything you need to know about recording, editing, and mixing vocals.",
    thumbnail: "https://example.com/thumbnails/vocal_production.jpg",
    category: "Music Production",
    price: 105.0,
    free: false,
    topics: [
      "Vocal Production",
      "Recording",
      "Vocal Mixing",
      "Audio Engineering",
    ],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Electronic Music Production: Synthesis",
    description:
      "Dive deep into various synthesis techniques for creating electronic music.",
    thumbnail: "https://example.com/thumbnails/electronic_synthesis.jpg",
    category: "Music Production",
    price: 115.0,
    free: false,
    topics: [
      "Electronic Music",
      "Synthesis",
      "Sound Design",
      "Analog Synths",
      "Digital Synths",
    ],
    seat: 35,
    dynamicItems: [],
  },

  // Health & Fitness (6 courses)
  {
    title: "Nutrition for Optimal Health",
    description:
      "Learn about healthy eating habits, meal planning, and dietary guidelines.",
    thumbnail: "https://example.com/thumbnails/nutrition.jpg",
    category: "Health & Fitness",
    price: 60.0,
    free: false,
    topics: [
      "Nutrition",
      "Healthy Eating",
      "Meal Planning",
      "Dietary Guidelines",
    ],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Yoga for Beginners: Foundations",
    description:
      "Discover the basic poses, breathing techniques, and philosophy of yoga.",
    thumbnail: "https://example.com/thumbnails/yoga_basics.jpg",
    category: "Health & Fitness",
    price: 0,
    free: true,
    topics: ["Yoga", "Beginner Yoga", "Mindfulness", "Flexibility"],
    seat: 90,
    dynamicItems: [],
  },
  {
    title: "High-Intensity Interval Training (HIIT)",
    description:
      "Boost your fitness with effective HIIT workouts for all levels.",
    thumbnail: "https://example.com/thumbnails/hiit_workout.jpg",
    category: "Health & Fitness",
    price: 45.0,
    free: false,
    topics: ["HIIT", "Cardio", "Strength Training", "Home Workouts"],
    seat: 80,
    dynamicItems: [],
  },
  {
    title: "Mindfulness & Meditation Guide",
    description:
      "Practice mindfulness and meditation to reduce stress and improve focus.",
    thumbnail: "https://example.com/thumbnails/mindfulness.jpg",
    category: "Health & Fitness",
    price: 50.0,
    free: false,
    topics: ["Mindfulness", "Meditation", "Stress Reduction", "Mental Health"],
    seat: 75,
    dynamicItems: [],
  },
  {
    title: "Strength Training for All Levels",
    description:
      "Build muscle and increase strength with safe and effective training programs.",
    thumbnail: "https://example.com/thumbnails/strength_training.jpg",
    category: "Health & Fitness",
    price: 55.0,
    free: false,
    topics: [
      "Strength Training",
      "Weightlifting",
      "Workout Programs",
      "Fitness",
    ],
    seat: 65,
    dynamicItems: [],
  },
  {
    title: "Holistic Wellness: Body, Mind, Spirit",
    description:
      "Explore a comprehensive approach to well-being, integrating physical, mental, and spiritual health.",
    thumbnail: "https://example.com/thumbnails/holistic_wellness.jpg",
    category: "Health & Fitness",
    price: 80.0,
    free: false,
    topics: [
      "Holistic Health",
      "Well-being",
      "Self-care",
      "Integrative Health",
    ],
    seat: 50,
    dynamicItems: [],
  },

  // Remaining courses to reach 50 (distribute among categories or create new ones)
  // Let's add more to existing categories for diversity

  // Web Development (adds 3 more)
  {
    title: "Vue.js 3 - The Complete Guide",
    description:
      "Master Vue.js 3 fundamentals and build powerful single-page applications.",
    thumbnail: "https://example.com/thumbnails/vuejs.jpg",
    category: "Web Development",
    price: 109.0,
    free: false,
    topics: ["Vue.js", "Frontend Development", "JavaScript Framework", "SPA"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Gatsby.js for Modern Websites",
    description:
      "Build blazing fast, modern websites with React and Gatsby.js.",
    thumbnail: "https://example.com/thumbnails/gatsbyjs.jpg",
    category: "Web Development",
    price: 95.0,
    free: false,
    topics: ["Gatsby.js", "React", "GraphQL", "Static Site Generator"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Web Security Fundamentals",
    description:
      "Learn common web vulnerabilities and how to protect your applications.",
    thumbnail: "https://example.com/thumbnails/web_security.jpg",
    category: "Web Development",
    price: 85.0,
    free: false,
    topics: [
      "Web Security",
      "OWASP",
      "Authentication",
      "Authorization",
      "Cybersecurity",
    ],
    seat: 60,
    dynamicItems: [],
  },

  // Data Science (adds 3 more)
  {
    title: "Deep Learning with Keras and TensorFlow",
    description: "Build and train neural networks for various AI applications.",
    thumbnail: "https://example.com/thumbnails/deep_learning.jpg",
    category: "Data Science",
    price: 179.0,
    free: false,
    topics: ["Deep Learning", "Keras", "TensorFlow", "Neural Networks", "AI"],
    seat: 30,
    dynamicItems: [],
  },
  {
    title: "Time Series Analysis in Python",
    description:
      "Analyze and forecast time series data using Python libraries.",
    thumbnail: "https://example.com/thumbnails/time_series.jpg",
    category: "Data Science",
    price: 125.0,
    free: false,
    topics: ["Time Series", "Forecasting", "Python", "StatsModels", "ARIMA"],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "Data Ethics & Privacy",
    description:
      "Understand the ethical implications of data science and data privacy regulations.",
    thumbnail: "https://example.com/thumbnails/data_ethics.jpg",
    category: "Data Science",
    price: 60.0,
    free: false,
    topics: ["Data Ethics", "Data Privacy", "GDPR", "Responsible AI"],
    seat: 50,
    dynamicItems: [],
  },

  // Marketing (adds 3 more)
  {
    title: "Marketing Analytics & Data-Driven Decisions",
    description:
      "Use data to measure marketing performance and optimize campaigns.",
    thumbnail: "https://example.com/thumbnails/marketing_analytics.jpg",
    category: "Marketing",
    price: 115.0,
    free: false,
    topics: ["Marketing Analytics", "Data Analysis", "Google Analytics", "ROI"],
    seat: 45,
    dynamicItems: [],
  },
  {
    title: "Brand Storytelling for Business Growth",
    description:
      "Craft compelling brand narratives that resonate with your audience.",
    thumbnail: "https://example.com/thumbnails/brand_storytelling.jpg",
    category: "Marketing",
    price: 90.0,
    free: false,
    topics: [
      "Brand Strategy",
      "Storytelling",
      "Content Creation",
      "Brand Identity",
    ],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "Public Relations (PR) Essentials",
    description:
      "Build strong public relations strategies for positive brand image.",
    thumbnail: "https://example.com/thumbnails/pr_essentials.jpg",
    category: "Marketing",
    price: 80.0,
    free: false,
    topics: [
      "Public Relations",
      "Media Relations",
      "Crisis Communication",
      "Reputation Management",
    ],
    seat: 60,
    dynamicItems: [],
  },

  // Graphic Design (adds 3 more)
  {
    title: "Figma UI Design Collaboration",
    description: "Collaborate effectively on UI/UX projects using Figma.",
    thumbnail: "https://example.com/thumbnails/figma_collaboration.jpg",
    category: "Graphic Design",
    price: 70.0,
    free: false,
    topics: ["Figma", "UI Design", "Collaboration Tools", "Prototyping"],
    seat: 65,
    dynamicItems: [],
  },
  {
    title: "Logo Design & Branding Masterclass",
    description:
      "Create memorable logos and comprehensive brand identity systems.",
    thumbnail: "https://example.com/thumbnails/logo_branding.jpg",
    category: "Graphic Design",
    price: 120.0,
    free: false,
    topics: [
      "Logo Design",
      "Branding",
      "Brand Guidelines",
      "Adobe Illustrator",
    ],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "3D Design for Beginners (Blender)",
    description:
      "Introduction to 3D modeling, sculpting, and rendering using Blender.",
    thumbnail: "https://example.com/thumbnails/blender_3d.jpg",
    category: "Graphic Design",
    price: 100.0,
    free: false,
    topics: ["Blender", "3D Modeling", "Sculpting", "Rendering", "Animation"],
    seat: 35,
    dynamicItems: [],
  },

  // Business (adds 3 more)
  {
    title: "Effective Communication in the Workplace",
    description:
      "Improve your verbal, non-verbal, and written communication skills.",
    thumbnail: "https://example.com/thumbnails/communication.jpg",
    category: "Business",
    price: 65.0,
    free: false,
    topics: [
      "Communication Skills",
      "Workplace Communication",
      "Presentation Skills",
      "Interpersonal Skills",
    ],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Excel for Business Analytics",
    description:
      "Utilize Excel's powerful features for data analysis and reporting.",
    thumbnail: "https://example.com/thumbnails/excel_analytics.jpg",
    category: "Business",
    price: 55.0,
    free: false,
    topics: [
      "Excel",
      "Business Analytics",
      "Data Analysis",
      "Spreadsheets",
      "Reporting",
    ],
    seat: 80,
    dynamicItems: [],
  },
  {
    title: "Human Resources (HR) Management",
    description:
      "Learn the core functions and best practices of HR management.",
    thumbnail: "https://example.com/thumbnails/hr_management.jpg",
    category: "Business",
    price: 95.0,
    free: false,
    topics: [
      "HR Management",
      "Recruitment",
      "Employee Relations",
      "Training & Development",
    ],
    seat: 50,
    dynamicItems: [],
  },

  // Photography (adds 3 more)
  {
    title: "Lightroom Classic: Photo Editing Workflow",
    description:
      "Master photo organization and editing techniques in Adobe Lightroom Classic.",
    thumbnail: "https://example.com/thumbnails/lightroom_workflow.jpg",
    category: "Photography",
    price: 85.0,
    free: false,
    topics: [
      "Lightroom Classic",
      "Photo Editing",
      "Workflow",
      "Photo Organization",
    ],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Astrophotography: Capturing the Night Sky",
    description:
      "Techniques and gear for photographing stars, galaxies, and celestial events.",
    thumbnail: "https://example.com/thumbnails/astrophotography.jpg",
    category: "Photography",
    price: 130.0,
    free: false,
    topics: ["Astrophotography", "Night Sky", "Telescopes", "Star Trails"],
    seat: 30,
    dynamicItems: [],
  },
  {
    title: "Drone Photography & Videography",
    description:
      "Learn to fly drones and capture stunning aerial photos and videos.",
    thumbnail: "https://example.com/thumbnails/drone_photography.jpg",
    category: "Photography",
    price: 150.0,
    free: false,
    topics: [
      "Drone Photography",
      "Drone Videography",
      "Aerial Cinematography",
      "UAV",
    ],
    seat: 25,
    dynamicItems: [],
  },

  // Music Production (adds 3 more)
  {
    title: "Guitar for Beginners: Play Your First Songs",
    description:
      "Learn basic chords, strumming patterns, and play popular songs on guitar.",
    thumbnail: "https://example.com/thumbnails/guitar_basics.jpg",
    category: "Music Production",
    price: 60.0,
    free: false,
    topics: ["Guitar", "Beginner Guitar", "Chords", "Strumming"],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Introduction to FL Studio",
    description:
      "Get started with FL Studio for beat making and music production.",
    thumbnail: "https://example.com/thumbnails/fl_studio.jpg",
    category: "Music Production",
    price: 85.0,
    free: false,
    topics: ["FL Studio", "Beat Making", "Music Production Software", "DAW"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Live Sound Engineering Basics",
    description:
      "Understand the fundamentals of setting up and mixing live audio.",
    thumbnail: "https://example.com/thumbnails/live_sound.jpg",
    category: "Music Production",
    price: 90.0,
    free: false,
    topics: ["Live Sound", "Audio Mixing", "Sound Systems", "PA Systems"],
    seat: 40,
    dynamicItems: [],
  },

  // Health & Fitness (adds 3 more)
  {
    title: "Weight Loss & Healthy Habits",
    description:
      "Develop sustainable habits for effective and healthy weight loss.",
    thumbnail: "https://example.com/thumbnails/weight_loss.jpg",
    category: "Health & Fitness",
    price: 70.0,
    free: false,
    topics: ["Weight Loss", "Healthy Habits", "Diet", "Exercise"],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Pilates for Core Strength",
    description:
      "Build core strength, flexibility, and improve posture with Pilates.",
    thumbnail: "https://example.com/thumbnails/pilates.jpg",
    category: "Health & Fitness",
    price: 55.0,
    free: false,
    topics: ["Pilates", "Core Strength", "Flexibility", "Posture"],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Running for Beginners to 5K",
    description:
      "A training program to go from beginner to confidently running a 5K.",
    thumbnail: "https://example.com/thumbnails/running_5k.jpg",
    category: "Health & Fitness",
    price: 40.0,
    free: false,
    topics: ["Running", "5K Training", "Cardio", "Endurance"],
    seat: 85,
    dynamicItems: [],
  },

  // New Categories or further distribution to reach 50
  // Adding a new category "Languages" and "Personal Development" to fill the remaining
  // Languages (5 courses)
  {
    title: "Spanish for Travelers",
    description:
      "Learn essential Spanish phrases and cultural tips for your next trip.",
    thumbnail: "https://example.com/thumbnails/spanish_travel.jpg",
    category: "Languages",
    price: 60.0,
    free: false,
    topics: ["Spanish", "Travel Phrases", "Culture", "Beginner Language"],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "French: Beginner to Intermediate",
    description:
      "Comprehensive French language course covering grammar and conversation.",
    thumbnail: "https://example.com/thumbnails/french_intermediate.jpg",
    category: "Languages",
    price: 120.0,
    free: false,
    topics: ["French", "Grammar", "Conversation", "Language Learning"],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Mandarin Chinese for Business",
    description:
      "Learn fundamental Mandarin for business interactions and networking.",
    thumbnail: "https://example.com/thumbnails/mandarin_business.jpg",
    category: "Languages",
    price: 150.0,
    free: false,
    topics: [
      "Mandarin Chinese",
      "Business Language",
      "Chinese Culture",
      "Negotiation",
    ],
    seat: 40,
    dynamicItems: [],
  },
  {
    title: "German: Speak Like a Native",
    description:
      "Advanced German course focusing on fluency and idiomatic expressions.",
    thumbnail: "https://example.com/thumbnails/german_native.jpg",
    category: "Languages",
    price: 130.0,
    free: false,
    topics: ["German", "Fluency", "Idioms", "Advanced Grammar"],
    seat: 35,
    dynamicItems: [],
  },
  {
    title: "Japanese: Hiragana & Katakana",
    description:
      "Master the basic Japanese syllabaries for reading and writing.",
    thumbnail: "https://example.com/thumbnails/japanese_kana.jpg",
    category: "Languages",
    price: 70.0,
    free: false,
    topics: ["Japanese", "Hiragana", "Katakana", "Writing System"],
    seat: 60,
    dynamicItems: [],
  },

  // Personal Development (5 courses)
  {
    title: "Time Management & Productivity",
    description:
      "Strategies to manage your time effectively and boost productivity.",
    thumbnail: "https://example.com/thumbnails/time_management.jpg",
    category: "Personal Development",
    price: 55.0,
    free: false,
    topics: ["Time Management", "Productivity", "Goal Setting", "Organization"],
    seat: 70,
    dynamicItems: [],
  },
  {
    title: "Public Speaking Mastery",
    description:
      "Overcome fear and deliver impactful presentations with confidence.",
    thumbnail: "https://example.com/thumbnails/public_speaking.jpg",
    category: "Personal Development",
    price: 85.0,
    free: false,
    topics: [
      "Public Speaking",
      "Presentation Skills",
      "Confidence Building",
      "Communication",
    ],
    seat: 50,
    dynamicItems: [],
  },
  {
    title: "Emotional Intelligence for Success",
    description:
      "Develop emotional intelligence to improve relationships and decision-making.",
    thumbnail: "https://example.com/thumbnails/emotional_intelligence.jpg",
    category: "Personal Development",
    price: 75.0,
    free: false,
    topics: [
      "Emotional Intelligence",
      "Self-awareness",
      "Empathy",
      "Social Skills",
    ],
    seat: 60,
    dynamicItems: [],
  },
  {
    title: "Creative Thinking & Problem Solving",
    description:
      "Unlock your creativity and develop innovative solutions to challenges.",
    thumbnail: "https://example.com/thumbnails/creative_thinking.jpg",
    category: "Personal Development",
    price: 65.0,
    free: false,
    topics: [
      "Creative Thinking",
      "Problem Solving",
      "Innovation",
      "Brainstorming",
    ],
    seat: 55,
    dynamicItems: [],
  },
  {
    title: "Building Healthy Habits",
    description:
      "Learn how to establish and maintain habits for long-term well-being.",
    thumbnail: "https://example.com/thumbnails/healthy_habits.jpg",
    category: "Personal Development",
    price: 45.0,
    free: false,
    topics: ["Habit Formation", "Self-Improvement", "Discipline", "Well-being"],
    seat: 80,
    dynamicItems: [],
  },
];
