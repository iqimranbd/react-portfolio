import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Laravel backend and React frontend. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Laravel", "React", "MySQL", "Stripe API", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates. Built with React frontend and Node.js backend, featuring drag-and-drop interface, team collaboration, and progress tracking.",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: true
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway built with PHP and Laravel. Handles authentication, rate limiting, request routing, and response caching for multiple backend services.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["PHP", "Laravel", "Redis", "MySQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search, virtual tours, and agent dashboard. Features responsive design and optimized performance.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "AWS S3", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts and real-time data visualization. Built with React and D3.js for complex data representation.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, posts, comments, and real-time notifications. Implemented with proper authentication and rate limiting.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      technologies: ["Laravel", "MySQL", "Redis", "JWT", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-slate-800">{project.title}</h4>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-slate-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-500 text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-slate-600 hover:text-slate-700 transition-colors text-sm"
                  >
                    <Github className="h-3 w-3" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;