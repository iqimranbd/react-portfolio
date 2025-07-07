import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV-IBNUL-QUAYUM-IMRAN.pdf';
    link.download = 'Ibnul-Quayum-Imran-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-75"></div>
      
      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFDS-fZPPd9nw/profile-displayphoto-scale_400_400/B56Ze1NtsKG0Ak-/0/1751091962030?e=1757548800&v=beta&t=BoFeHYLqei62WvaJeGhjSXej0SEPpknjuBdZEyMthw0"
              alt="Professional Developer"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Ibnul Quayum Imran
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Full Stack Backend Engineer
          </p>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with modern technologies. 
            Specializing in PHP, Laravel, React, and backend architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            
            <button
              onClick={downloadResume}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
};

export default Hero;