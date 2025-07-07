import React from 'react';
import { Code, Server, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: "Backend",
      skills: [
        { name: "PHP", level: 95 },
        { name: "Laravel", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 93 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Database",
      skills: [
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 75 },
        { name: "Database Design", level: 90 }
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 88 },
        { name: "AWS", level: 85 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 85 },
        { name: "Nginx", level: 80 }
      ]
    }
  ];

  const technologies = [
    "React", "Laravel", "PHP", "TypeScript", "Node.js", "MySQL", "PostgreSQL", "MongoDB", 
    "Docker", "AWS", "Git", "TailwindCSS", "Vue.js", "Python", "Redis", "GraphQL"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-800 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;