import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="text-2xl font-bold mb-4">
            Aryan Shrivastava
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
            Building the future through code, one project at a time.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 dark:bg-gray-800 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>by Aryan Shrivastava</span>
            </div>
            
            <div className="text-gray-400 dark:text-gray-500">
              © {currentYear} All rights reserved.
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 mx-auto block w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;