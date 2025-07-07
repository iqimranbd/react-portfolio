import React from 'react';
import { Code, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: "Backend Engineering",
      description: "Developing robust server-side applications with PHP, Laravel, and RESTful API design."
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for performance and scalability."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Implementing best practices for fast, scalable, and maintainable web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A passionate developer with over 5 years of experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Crafting Digital Solutions
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              I'm a full-stack developer who loves turning complex problems into simple, beautiful solutions. 
              My journey began with a Computer Science degree and has evolved through working with startups 
              and established companies alike.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              I specialize in building scalable web applications using modern technologies like React, 
              PHP/Laravel, and various database systems. I'm passionate about clean code, user experience, 
              and staying current with industry best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">
                {highlight.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;