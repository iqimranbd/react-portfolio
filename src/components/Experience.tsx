import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React and Laravel. Mentoring junior developers and architecting scalable solutions for high-traffic applications.",
      achievements: [
        "Led team of 5 developers in building a SaaS platform serving 10,000+ users",
        "Improved application performance by 40% through optimization techniques",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Laravel", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications from conception to deployment. Collaborated with design team to create responsive, user-friendly interfaces.",
      achievements: [
        "Built e-commerce platform that generated $500K+ in revenue",
        "Reduced page load times by 50% through code optimization",
        "Implemented real-time features using WebSocket technology"
      ],
      technologies: ["Vue.js", "PHP", "MySQL", "Redis", "Node.js"]
    },
    {
      title: "Backend Developer",
      company: "WebDev Agency",
      location: "Remote",
      period: "2019 - 2020",
      description: "Focused on server-side development and API design. Built RESTful APIs and integrated third-party services for various client projects.",
      achievements: [
        "Developed APIs serving 1M+ requests per day",
        "Integrated payment systems for 20+ e-commerce projects",
        "Maintained 99.9% uptime across all deployed applications"
      ],
      technologies: ["Laravel", "MySQL", "REST APIs", "Payment APIs"]
    },
    {
      title: "Junior Developer",
      company: "Local Tech Company",
      location: "Denver, CO",
      period: "2018 - 2019",
      description: "Started my professional journey building websites and learning best practices. Contributed to various projects while expanding my technical skills.",
      achievements: [
        "Completed 15+ client projects with 100% satisfaction rate",
        "Learned modern development practices and agile methodologies",
        "Contributed to open-source projects and team documentation"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A journey of growth, learning, and delivering exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-slate-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-yellow-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;