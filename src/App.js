import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, Menu, X, Award, Briefcase, Code, GraduationCap, Hammer, FileText, ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import TypeEraseLoop from './TypeEraseLoop';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState({});
  const [expandedCertificate, setExpandedCertificate] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'PHP', icon: '/icons/php.svg' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Canva', icon: '/icons/canva.png' },
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Gemini', icon: '/icons/gemini.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'NPM', icon: '/icons/npm.svg' },
    { name: 'OpenAI', icon: '/icons/openai.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' },
  ];

  const experiences = [
    {
      company: 'Iloilo C&G Lending Investors Corp.',
      role: 'IT Support / System Administrator',
      period: 'Jan 2025 - Present',
      description: [
        'Performs daily check-ups, analysis of the status of hardware peripherals and units, and troubleshoots defects or abnormalities',
        'Oversee data and voice connections and operation, diagnosing and configuration of networks like IP Address and DNS',
        'Performs basic networking skills like crimping and mapping to ensure the effectiveness of LAN cables',
        'Monitors the performance of the system and identifies downed servers',
        'Setting up equipment for employee use, ensuring proper installation of cables, operating systems, or appropriate software, and performing minor and major repairs to hardware, software, or peripheral equipment following design or installation specifications'
      ],
      logo: '/icons/cg-lending.png',
      //link: '#'
    },
    {
      company: 'BlueShift Inc.',
      role: 'General Virtual Assistant',
      period: 'Oct 2020 - Apr 2022',
      description: [
      'Appointment setting for clients and partners.',
      'Collection reminder calls and account follow-ups.',
      'Lead generation and qualification for mortgage, student loan, payday loan settlement, and legal services.',
      'Conducted market research surveys to gather data and insights.',
      'Performed customer satisfaction surveys to assess service quality.',
      'Provided answering services and managed incoming client inquiries.',
      'Delivered help desk support for general and technical concerns.',
      'Offered customer service and technical assistance to ensure client satisfaction.',
      'Handled backend operations including documentation and data processing.',
      'Supported administrative tasks and client coordination as a virtual assistant.',
      'Performed quality control verification on client accounts and transactions.',
      'Conducted quality assurance audits to maintain service accuracy and compliance.'
      ],
      logo: '/icons/blueshift.png',
      link: 'https://blueshiftinc.net'
    },
  ];

  const projects = [
    { 
      title: 'Student Grading System', 
      description: 'A web-based application built using PHP, CSS, and JavaScript that allows administrators to manage students, subjects, and grades efficiently. The system provides CRUD functionality (Create, Read, Update, Delete) for student records, subject data, and grade entries. It features a clean, responsive interface and an intuitive admin dashboard for smooth navigation and management.', 
      tech: ['PHP', 'CSS', 'JavaScript'], 
      color: 'from-purple-500 to-pink-500',
      images: ['/projects/grading-1.png', '/projects/grading-2.png', '/projects/grading-3.png'],
      github: 'https://github.com/PatrickJohnFajardo/Grading-System',
      //live: '#'
    },
    { 
      title: 'E-Commerce Platform', 
      description: 'Full-stack e-commerce solution with payment integration', 
      tech: ['Next.js', 'Node.js', 'MongoDB'], 
      color: 'from-blue-500 to-cyan-500',
      images: ['/projects/ecommerce-1.png', '/projects/ecommerce-2.png', '/projects/ecommerce-3.png'],
      github: '#',
      //live: '#'
    },
    { 
      title: 'IOT Irrigation System', 
      description: 'An Arduino-based smart irrigation system that automatically waters plants based on real-time soil moisture readings. The system uses a Soil Moisture Sensor, Relay Module, and 5V DC Water Pump controlled by an Arduino Uno R3, with an LCD Display showing live sensor data and system status. It ensures efficient water use by activating the pump only when the soil is dry.', 
      tech: ['Arduino Uno R3', 'Esp32', 'Soil Moisture Sensor', 'Relay Module', '5V DC Water Pump', '16x2 LCD Display'], 
      color: 'from-green-500 to-teal-500',
      images: ['/projects/irrigation1.png', '/projects/irrigation2.png', '/projects/irrigation3.png', '/projects/irrigation4.png',],
      github: '#',
      //live: '#'
    },
    { 
      title: 'Social Media App', 
      description: 'Social networking platform with content sharing features', 
      tech: ['React Native', 'GraphQL', 'PostgreSQL'], 
      color: 'from-orange-500 to-red-500',
      images: ['/projects/social-1.png', '/projects/social-2.png', '/projects/social-3.png'],
      github: '#',
      //live: '#'
    }
  ];

  const certificates = [
    {
     name: 'Build Responsive Real-World Websites with HTML and CSS',
     issuer: 'Udemy',
     date: 'Nov 2025',
     description: [
       'Completed an immersive, 37.5-hour project-based course taught by Jonas Schmedtmann, focused on building responsive, modern, and visually appealing websites using HTML5 and CSS3. Learned advanced front-end design principles, layout techniques, and optimization practices to develop high-performance, professional-grade web interfaces compatible with all devices and browsers.',
       'Achievements',
       'Built a complete, fully responsive real-world website from scratch using semantic HTML and modular CSS',
       'Mastered Flexbox, CSS Grid, and media queries for fluid, adaptive page layouts',
       'Implemented animations, transitions, and hover effects to enhance user experience',
       'Optimized websites for speed, accessibility, and SEO best practices',
       'Strengthened front-end development foundations for real-world web projects and portfolios'
     ],
     image: '/certificates/html-css.png',
     link: 'https://www.udemy.com/certificate/UC-4bf8aae5-eddc-414d-9b91-de724c51b4b3/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com' 
   },
    {
     name: 'The Complete SQL Bootcamp: Go from Zero to Hero',
     issuer: 'Udemy',
     date: 'Nov 2025',
     description: [
       'Completed an in-depth SQL training course taught by Jose Portilla and Pierian Training, covering fundamental to advanced database concepts. Developed strong practical skills in writing, optimizing, and managing SQL queries using PostgreSQL. Learned how to design relational databases, extract meaningful insights from data, and apply SQL in real-world business analysis and application development scenarios.',
       'Achievements',
       'Mastered core SQL operations including SELECT, JOIN, GROUP BY, and subqueries for complex data retrieval',
       'Designed and normalized relational databases to ensure data integrity and efficiency',
       'Created and managed tables, constraints, and indexes to optimize database performance',
       'Applied SQL for data analytics, reporting, and real-world case studies using PostgreSQL',
       'Gained confidence in integrating SQL queries into real applications and backend systems'
     ], 
     image: '/certificates/sequel.png',
     link: 'https://www.udemy.com/certificate/UC-6e804d53-d529-4129-a4a6-e06c73d35742/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com' 
   },
    {
     name: 'PHP for Beginners - Become a PHP Master - CMS Project',
     issuer: 'Udemy',
     date: 'Sept 2025',
     description: [
       'Completed a comprehensive 40.5-hour PHP development course taught by Edwin Diaz of Coding Faculty Solutions, focusing on practical, project-based learning. Gained hands-on experience in building dynamic, database-driven web applications and a fully functional Content Management System (CMS) from scratch. Strengthened skills in backend programming, database design, and user authentication using PHP and MySQL.',
       'Achievements',
       'Developed a complete CMS platform with user registration, login systems, and admin dashboard',
       'Mastered core PHP fundamentals, including OOP (Object-Oriented Programming) and server-side logic',
       'Integrated MySQL databases for data storage, CRUD operations, and dynamic content management',
       'Implemented secure form handling, file uploads, and role-based access control',
       'Gained experience in debugging, deployment, and building scalable PHP-based web applications',
     ],
     image: '/certificates/php.png',
     link: 'https://www.udemy.com/certificate/UC-dfb8f1c4-1974-4f71-b7ed-60e2135c6985/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com' 
   }
  ];

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
    }
  };

  const renderLogo = (logo, company) => {
    if (typeof logo === 'string' && (logo.startsWith('/') || logo.startsWith('http'))) {
      return <img src={logo} alt={`${company} logo`} className="w-10 h-10 object-contain rounded" loading="lazy" />;
    }
    return <span className="text-4xl">{logo}</span>;
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      <nav className={`fixed top-0 w-full ${cardBg} border-b ${borderClass} z-50 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Patrick John Fajardo
          </div>

          <div className="hidden md:flex items-center gap-6">
            {['Skills', 'Experience', 'Projects', 'Education', 'Certificates', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`hover:text-blue-500 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}>
                {item}
              </button>
            ))}
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsSideMenuOpen(true)} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Menu size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg hover:bg-gray-700">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsSideMenuOpen(true)} className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isSideMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsSideMenuOpen(false)}>
            <div className={`fixed right-0 top-0 h-full w-80 ${cardBg} shadow-2xl transform transition-transform duration-300 flex flex-col`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end p-4">
                <button onClick={() => setIsSideMenuOpen(false)} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 flex flex-col">
                <div className="space-y-6">
                  {[
                    { label: 'Skills', icon: Code, section: 'skills' },
                    { label: 'Experience', icon: Briefcase, section: 'experience' },
                    { label: 'Projects', icon: Hammer, section: 'projects' },
                    { label: 'Education', icon: GraduationCap, section: 'education' },
                    { label: 'Certificates', icon: Award, section: 'certificates' }
                  ].map((item) => (
                    <button
                      key={item.section}
                      onClick={() => { scrollToSection(item.section); setIsSideMenuOpen(false); }}
                      onMouseEnter={() => setHoveredMenuItem(item.section)}
                      onMouseLeave={() => setHoveredMenuItem(null)}
                      className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                    >
                      <item.icon size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex-1 flex items-center justify-center mt-8">
                  <div className="relative w-full h-64 flex items-center justify-center">
                    {[
                      { name: 'skills', icon: Code },
                      { name: 'experience', icon: Briefcase },
                      { name: 'projects', icon: Hammer },
                      { name: 'education', icon: GraduationCap },
                      { name: 'certificates', icon: Award }
                    ].map((item) => (
                      <div key={item.name} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === item.name ? 'opacity-20' : 'opacity-0'}`}>
                        <item.icon size={200} />
                      </div>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
              <img 
                src={isDark ? '/profilepicture/whitebgpf.svg' : '/profilepicture/blackbgpf.svg'} 
                alt="Patrick John Fajardo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Software Engineer</span>
              <TypeEraseLoop/>
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              specializing in building responsive and interactive web applications
            </p>
            <div className="flex justify-center gap-4">
            <a href="/resume/PATRICK_JOHN_FAJARDO_RESUME (1).pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg transition-shadow flex items-center gap-2">
                <FileText size={20} /> Resume
              </button>
            </a>
              <button onClick={() => scrollToSection('contact')} className={`px-8 py-3 border ${borderClass} rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2`}>
                <Mail size={20} />Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Skills<span className="text-blue-500">.</span></h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className={`${cardBg} border ${borderClass} p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer text-center`}>
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-2 object-contain" />
                <div className="text-sm font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Experience<span className="text-blue-500">.</span></h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isExpanded = expandedExperience[i];
              const isArray = Array.isArray(exp.description);
              const displayItems = isArray 
                ? (isExpanded ? exp.description : [exp.description[0]]) 
                : [exp.description];
              
              return (
                <div key={i} className={`${cardBg} border ${borderClass} p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {renderLogo(exp.logo, exp.company)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          {exp.link ? (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{exp.company}</a>
                          ) : (
                            <span className="text-blue-500">{exp.company}</span>
                          )}
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} italic mt-1`}>{exp.period}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="font-semibold mb-2">Activities</h4>
                        <ul className="space-y-2">
                          {displayItems.map((item, idx) => (
                            <li key={idx} className={`flex gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              <span className="text-blue-500 mt-1">•</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {isArray && exp.description.length > 1 && (
                        <button
                          onClick={() => setExpandedExperience(prev => ({...prev, [i]: !prev[i]}))}
                          className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors text-sm`}
                        >
                          <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          {isExpanded ? 'Show less' : 'See more'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Hammer className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Projects<span className="text-blue-500">.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} onClick={() => openProject(project)} className={`${cardBg} border ${borderClass} rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group`}>
                <div className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center p-8 overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-90" style={{background: `linear-gradient(to bottom right, ${project.color.includes('purple') ? 'rgb(168, 85, 247), rgb(236, 72, 153)' : project.color.includes('blue') ? 'rgb(59, 130, 246), rgb(6, 182, 212)' : project.color.includes('green') ? 'rgb(34, 197, 94), rgb(20, 184, 166)' : 'rgb(249, 115, 22), rgb(239, 68, 68)'})`}}></div>
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Education<span className="text-blue-500">.</span></h2>
          </div>
          <div className={`${cardBg} border ${borderClass} p-6 rounded-xl mb-6`}>
            <div className="flex items-center gap-4">
              <img src="/icons/usa.png" alt="University Logo" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
                <a href="https://usa.edu.ph" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">University Of San Agustin</a>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>2022 - Present</p>
              </div>
            </div>
          </div>
          <div className={`${cardBg} border ${borderClass} p-6 rounded-xl`}>
            <div className="flex items-center gap-4">
              <img src="/icons/usa.png" alt="High School Logo" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold">Senior High School – STEM Strand</h3>
                <a href="https://usa.edu.ph" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">University Of San Agustin</a>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>2020 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Certificates<span className="text-blue-500">.</span></h2>
          </div>
          <div className="space-y-6">
            {certificates.map((cert, i) => {
              const isExpanded = expandedCertificate[i];
              const isArray = Array.isArray(cert.description);
              const displayItems = isArray 
                ? (isExpanded ? cert.description : [cert.description[0]]) 
                : [cert.description];
              
              return (
                <div key={i} className={`${cardBg} border ${borderClass} rounded-xl hover:shadow-lg transition-shadow overflow-hidden`}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Certificate Image */}
                    {cert.image && (
                      <div className="lg:w-1/3 p-6 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-auto object-contain rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    
                    {/* Certificate Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                          {cert.link ? (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-1 inline-block">
                              {cert.issuer} ↗
                            </a>
                          ) : (
                            <p className="text-blue-500 mb-1">{cert.issuer}</p>
                          )}
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} italic mb-4`}>{cert.date}</p>
                          
                          <ul className="space-y-2 mb-4">
                            {displayItems.map((item, idx) => (
                              <li key={idx} className={`flex gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                                <span className="text-blue-500 mt-1">•</span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {isArray && cert.description.length > 1 && (
                            <button
                              onClick={() => setExpandedCertificate(prev => ({...prev, [i]: !prev[i]}))}
                              className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors text-sm`}
                            >
                              <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                              {isExpanded ? 'Show less' : 'See more'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch<span className="text-blue-500">.</span></h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>Let's work together on your next project</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://www.facebook.com/patrickjohn.fajardo.355/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patrick80361@gmail.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}>
              <Mail size={20} />Email
            </a>
            <a href="https://github.com/PatrickJohnFajardo" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}>
              <Github size={20} />GitHub
            </a>
            <a href="https://www.linkedin.com/in/patrickjohn01" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}>
              <Linkedin size={20} />LinkedIn
            </a>
            <a href="https://www.youtube.com/@techtutorrr" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}>
              <Youtube size={20} />Youtube
            </a>

          </div>
        </div>
      </section>

      <footer className={`py-8 px-4 border-t ${borderClass}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>© 2024 Portfolio. Built with React and Tailwind CSS</p>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={closeProject}>
          <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-4" onClick={(e) => e.stopPropagation()}>
            <div className={`flex-1 ${cardBg} rounded-2xl overflow-hidden relative`}>
              <button onClick={closeProject} className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg transition-colors">
                <X size={24} className="text-white" />
              </button>

              <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center bg-gray-100">
                <img src={selectedProject.images[currentImageIndex]} alt={`${selectedProject.title} ${currentImageIndex + 1}`} className="max-w-full max-h-full object-contain" />

                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-colors">
                  <ChevronLeft size={24} className="text-white" />
                </button>

                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-colors">
                  <ChevronRight size={24} className="text-white" />
                </button>

                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-70 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-96 ${cardBg} rounded-2xl p-8 flex flex-col`}>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

              <div className="flex gap-3 mb-6">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
                  <Github size={18} />GitHub
                </a>
                {/* <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View
                </a> */}
              </div>

              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>{selectedProject.description}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, j) => (
                    <span key={j} className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
