export interface Project {
  id: string;
  title: string;
  category: 'Web Systems' | 'Database' | 'Networking' | 'Campus Tools';
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  academicContext: string;
  date: string;
}

export interface Coursework {
  code: string;
  title: string;
  semester: string;
  description: string;
  gradeEquivalent?: string;
  status: 'Completed' | 'In Progress';
}

export interface GuestbookEntry {
  id: string;
  name: string;
  role: string;
  message: string;
  timestamp: string;
  rating?: number;
}

export const STUDENT_INFO = {
  name: "Mark E. Langomez",
  shortName: "Mark",
  yearLevel: "2nd Year College Student",
  degree: "Bachelor of Science in Information Technology (BSIT)",
  school: "Phil Countryville College",
  schoolWebsite: "https://philcountryville.com",
  contactNumber: "09552363611",
  formattedPhone: "+63 955 236 3611",
  email: "langomezmark707@gmail.com",
  facebookName: "Mark Langomez",
  facebookUrl: "https://www.facebook.com/search/top?q=Mark%20Langomez",
  location: "Philippines",
  motto: "Transforming ideas into resilient software through code and continuous learning.",
  bio: "Kumusta! I am Mark E. Langomez, a dedicated 2nd-year Information Technology student at Phil Countryville College. I specialize in web applications, database architecture, and computer networking. Eager to solve real-world problems with practical, well-engineered technological solutions.",
  bisayaGreeting: "Maayong adlaw! Welcome sa akong official digital portfolio.",
  avatar: "/028ba6c3-163a-49fb-99db-966a017af5f7.jpg",
  credentials: {
    username: "Mark",
    password: "Cute123",
  }
};

export const COURSES: Coursework[] = [
  {
    code: "IT211",
    title: "Web Systems and Technologies",
    semester: "2nd Year · 1st Semester",
    description: "Full-stack web fundamentals covering semantic HTML5, modern CSS/Tailwind, JavaScript DOM manipulation, PHP backend integration, and MySQL database queries.",
    status: "In Progress"
  },
  {
    code: "CC105",
    title: "Data Structures and Algorithms",
    semester: "2nd Year · 1st Semester",
    description: "Design and analysis of fundamental data structures: linked lists, stacks, queues, binary trees, sorting algorithms, and algorithmic time complexity (Big-O).",
    status: "In Progress"
  },
  {
    code: "IT212",
    title: "Database Management Systems",
    semester: "2nd Year · 1st Semester",
    description: "Relational database modeling, entity-relationship diagrams (ERD), normalization (1NF to 3NF), complex SQL queries, and ACID transaction safety.",
    status: "In Progress"
  },
  {
    code: "NET101",
    title: "Computer Networks & Data Communications",
    semester: "2nd Year · 1st Semester",
    description: "OSI and TCP/IP models, IPv4/IPv6 subnetting (CIDR/VLSM), Cisco Packet Tracer topologies, switch VLANs, and basic router configurations.",
    status: "In Progress"
  },
  {
    code: "CC104",
    title: "Object-Oriented Programming (Java / C++)",
    semester: "1st Year · 2nd Semester",
    description: "Mastered encapsulation, inheritance, polymorphism, abstraction, exception handling, and GUI development using standard OOP conventions.",
    status: "Completed",
    gradeEquivalent: "1.25"
  },
  {
    code: "CC101",
    title: "Introduction to Computing",
    semester: "1st Year · 1st Semester",
    description: "Overview of computing architectures, binary arithmetic, computing ethics, file systems, and command-line operating fundamentals.",
    status: "Completed",
    gradeEquivalent: "1.00"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    description: "Building responsive, mobile-first user interfaces with modern web standards.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Advanced", progress: 90 },
      { name: "CSS3 & Tailwind CSS", level: "Advanced", progress: 85 },
      { name: "JavaScript (ES6+)", level: "Intermediate", progress: 80 },
      { name: "React & Component UI", level: "Intermediate", progress: 75 },
      { name: "Responsive & Mobile-First Design", level: "Advanced", progress: 88 }
    ]
  },
  {
    title: "Backend & Databases",
    description: "Server logic, relational database schemas, and data manipulation.",
    skills: [
      { name: "PHP (Procedural & MVC)", level: "Intermediate", progress: 75 },
      { name: "MySQL & SQL Querying", level: "Intermediate", progress: 82 },
      { name: "Database Design & ERD Normalization", level: "Intermediate", progress: 80 },
      { name: "Node.js & Express Basics", level: "Beginner-Intermediate", progress: 65 },
      { name: "REST API Integration & JSON", level: "Intermediate", progress: 78 }
    ]
  },
  {
    title: "Networking & IT Infrastructure",
    description: "Network configuration, hardware diagnostics, and lab setup.",
    skills: [
      { name: "Cisco Packet Tracer Simulators", level: "Intermediate", progress: 78 },
      { name: "IPv4 Subnetting & Routing (VLSM)", level: "Intermediate", progress: 80 },
      { name: "PC Assembly & Hardware Troubleshooting", level: "Advanced", progress: 90 },
      { name: "LAN Cabling (Cat6 / RJ45 Crimping)", level: "Advanced", progress: 92 },
      { name: "Local Server Environments (XAMPP/Apache)", level: "Advanced", progress: 85 }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    description: "Modern workflows, version control, and collaboration software.",
    skills: [
      { name: "Git & GitHub Version Control", level: "Intermediate", progress: 80 },
      { name: "Visual Studio Code", level: "Advanced", progress: 95 },
      { name: "Figma UI/UX Prototyping", level: "Intermediate", progress: 70 },
      { name: "Postman API Testing", level: "Intermediate", progress: 72 },
      { name: "Windows & Linux OS Basics", level: "Intermediate", progress: 75 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pcc-portal",
    title: "Phil Countryville Student Academic Portal Concept",
    category: "Web Systems",
    description: "A centralized web platform for students to check academic grades, view class schedules, and review campus announcements.",
    longDescription: "Designed and developed as an academic showcase project representing Phil Countryville College. Provides an intuitive student interface for checking real-time GPA, semester enrollment status, subject schedules, and departmental bulletins with secure role-based navigation.",
    image: "/src/assets/images/project_campus_portal_1791726506628.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Responsive Grid"],
    keyFeatures: [
      "Student enrollment status and degree audit tracker",
      "Dynamic GPA calculation module with semester breakdown",
      "Real-time subject timetable schedule grid",
      "Campus announcement board and registrar advisory alerts",
      "Mobile-responsive dashboard interface"
    ],
    academicContext: "Phil Countryville College · Web Systems (IT211)",
    date: "First Semester 2024–2025"
  },
  {
    id: "barangay-system",
    title: "Barangay E-Records & Clearance Management System",
    category: "Database",
    description: "A digitized resident database system that expedites barangay clearances, residency certifications, and demographic records.",
    longDescription: "Created to replace slow paper-based record keeping in Philippine local barangay offices. Features searchable resident profiles, automated PDF clearance generation, incident blotter reports, and statistical demographic summaries.",
    image: "/src/assets/images/hero_tech_campus_1791726483084.jpg",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "XAMPP"],
    keyFeatures: [
      "Resident census directory with advanced filtering",
      "1-click Barangay Clearance and Certificate of Indigency generator",
      "Incident blotter log with confidentiality status",
      "Demographic analytics (voters, seniors, youth, employment)",
      "Secure administrative authentication and audit log"
    ],
    academicContext: "Phil Countryville College · Database Management (IT212)",
    date: "Midterm Capstone 2024"
  },
  {
    id: "lab-inventory",
    title: "Phil Countryville Computer Lab Hardware Tracker",
    category: "Campus Tools",
    description: "An internal inventory and maintenance tracker for college computer laboratory workstations and peripherals.",
    longDescription: "Tracks PC units, monitor serials, CPU configurations, RAM capacities, and maintenance schedules across PCC computer laboratories. Allows student assistants and lab technicians to report faulty hardware and manage repair logs.",
    image: "/src/assets/images/hero_tech_campus_1791726483084.jpg",
    techStack: ["JavaScript", "HTML5", "CSS3", "JSON Storage", "Chart.js"],
    keyFeatures: [
      "Workstation hardware specification catalog (CPU, RAM, GPU, Storage)",
      "Maintenance ticketing and defective component logging",
      "Lab room layout map and seat assignment tracking",
      "Exportable equipment audit inventory summaries"
    ],
    academicContext: "Phil Countryville College · Integrative Programming (IPT101)",
    date: "2024"
  },
  {
    id: "cisco-network",
    title: "Multi-Department Campus VLAN Network Topology",
    category: "Networking",
    description: "A simulated enterprise network architecture for Phil Countryville College campus using Cisco Packet Tracer.",
    longDescription: "Engineered a redundant, segmented network topology connecting academic departments (IT, Education, Criminology, Admin) using Inter-VLAN routing, Router-on-a-Stick, Access Control Lists (ACLs), and dynamic DHCP server pools.",
    image: "/src/assets/images/project_campus_portal_1791726506628.jpg",
    techStack: ["Cisco Packet Tracer", "Cisco IOS", "IPv4 Subnetting", "VLAN", "DHCP", "ACL"],
    keyFeatures: [
      "VLSM IPv4 address allocation across 5 campus subnets",
      "Inter-VLAN routing with 802.1Q encapsulation trunk links",
      "Standard and Extended ACL security rules restricting admin subnets",
      "Dynamic host configuration (DHCP) server redundancy",
      "Wired lab switches and secure wireless access points (WAP)"
    ],
    academicContext: "Phil Countryville College · Computer Networks (NET101)",
    date: "2024"
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: "gb-1",
    name: "Engr. R. Morales",
    role: "IT Faculty Instructor · PCC",
    message: "Impressive work Mark! You've shown consistent dedication in both our Web Systems and Database classes. Keep honing your technical craft.",
    timestamp: "2 days ago",
    rating: 5
  },
  {
    id: "gb-2",
    name: "Jayson B.",
    role: "BSIT Classmate · 2nd Year",
    message: "Solid kaayo imong portfolio bai Mark! Grabe ka limpyo ang design ug user interface. Salute sa Phil Countryville IT pride!",
    timestamp: "Yesterday",
    rating: 5
  },
  {
    id: "gb-3",
    name: "Maria Santos",
    role: "College of Computer Studies Officer",
    message: "Great digital portfolio Mark! Clear representation of our curriculum at Phil Countryville College.",
    timestamp: "Just now",
    rating: 5
  }
];
