import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">!Q !MR@N</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Code className="h-4 w-4" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Briefcase className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors p-2"
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors p-2"
              >
                <Code className="h-4 w-4" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors p-2"
              >
                <Briefcase className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;