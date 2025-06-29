import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          {/* Coding Avatar - At the top with padding */}
          <div className="pt-8 mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Developer coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Aryan Shrivastava
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
            Computer Science Engineering Student
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            B.Tech CSE • Graduating 2028 • Jabalpur Engineering College
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Passionate about creating innovative solutions through code. 
            Focused on full-stack development and emerging technologies.
          </p>
        </div>

        {/* Professional Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/aryan-labs" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aryan-shrivastava-25206132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </a>
          <a 
            href="mailto:aryan.shrivastava234@gmail.com" 
            className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;