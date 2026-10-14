// Real project data from github.com/dilshan-d
const projects = [
  {
    id: 'tech-store',
    title: 'Tech-Store',
    type: 'fullstack',
    description:
      'A modern, full-stack e-commerce platform for electronic devices — with a React 19 storefront, Express/MongoDB backend, JWT auth, Supabase-powered image storage, and real-time toast notifications.',
    features: [
      'Product catalog with search & filter',
      'Shopping cart & order management',
      'JWT-based user authentication',
      'Supabase Storage for product images',
      'Role-based admin dashboard',
      'Responsive Tailwind CSS v4 UI',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Node.js', 'Express v5', 'MongoDB', 'Mongoose', 'JWT', 'Supabase'],
    repo_url: 'https://github.com/dilshan-d/Tech-Store',
    api_url: 'https://api.github.com/repos/dilshan-d/Tech-Store',
    status: 'complete',
  },
  {
    id: 'learn-mate',
    title: 'LearnMate — LMS',
    type: 'mobile',
    description:
      'A comprehensive Learning Management System built for educational institutions. Covers exam scheduling, timetable management, marks tracking, and real-time notifications through WebSockets — available as a mobile app (React Native) and admin web panel.',
    features: [
      'Exam scheduling & timetable management',
      'Marks tracking & performance analytics',
      'Real-time notifications via WebSocket',
      'Role-based access (students, staff, admin)',
      'In-app messaging module',
      'React Native mobile + React web admin',
    ],
    tech: ['React Native', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'JWT', 'Tailwind CSS'],
    repo_url: 'https://github.com/dilshan-d/Learn-Mate-Mobile-App',
    api_url: 'https://api.github.com/repos/dilshan-d/Learn-Mate-Mobile-App',
    status: 'complete',
  },
  {
    id: 'smart-water-tank',
    title: 'Smart Water Tank System',
    type: 'iot',
    description:
      'An end-to-end IoT platform for real-time water level and quality monitoring using ESP32 microcontrollers with ultrasonic and TDS sensors. Data is served via a Python Flask backend and visualised through both a web dashboard and a React Native mobile app.',
    features: [
      'Real-time water level monitoring (ultrasonic sensor)',
      'Water quality tracking via TDS sensor',
      'ESP32 embedded firmware (C++)',
      'Python Flask REST API backend',
      'Web dashboard (HTML/CSS/JS)',
      'React Native mobile companion app',
    ],
    tech: ['ESP32', 'C++', 'Python', 'Flask', 'React Native', 'HTML', 'CSS', 'JavaScript'],
    repo_url: 'https://github.com/dilshan-d/Smart-Water-Tank-System',
    api_url: 'https://api.github.com/repos/dilshan-d/Smart-Water-Tank-System',
    status: 'complete',
  },
  {
    id: 'quick-hub',
    title: 'Quick Hub — Chrome Extension',
    type: 'extension',
    description:
      'A glassmorphic shortcut manager Chrome Extension that lives in the toolbar. Lets you create, organise, and drag-and-drop bookmarks with a polished, modern UI — no account or sync required.',
    features: [
      'Drag-and-drop shortcut reordering (SortableJS)',
      'Glassmorphic modern popup UI',
      'Add / edit / delete shortcuts instantly',
      'Chrome Extension API integration',
      'Zero-dependency, no account needed',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'SortableJS', 'Chrome Extension API'],
    repo_url: 'https://github.com/dilshan-d/Quick-Hub-Google-extension',
    api_url: 'https://api.github.com/repos/dilshan-d/Quick-Hub-Google-extension',
    status: 'complete',
  },
  {
    id: 'todo-list',
    title: 'Task Manager Desktop App',
    type: 'desktop',
    description:
      'A modern desktop task manager built with Python and CustomTkinter — Dilshan\'s first Python project. Features a clean themed UI with local file-based persistence so your tasks survive app restarts.',
    features: [
      'Add, complete, and delete tasks',
      'Modern CustomTkinter UI with dark mode',
      'Persistent storage via local file handling',
      'Lightweight — no database required',
    ],
    tech: ['Python', 'CustomTkinter', 'Tkinter', 'File I/O'],
    repo_url: 'https://github.com/dilshan-d/Todo-List',
    api_url: 'https://api.github.com/repos/dilshan-d/Todo-List',
    status: 'complete',
  },
];

export default projects;
