import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "ReactJS", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "NodeJS", level: 70 },
        { name: "ExpressJS", level: 65 },
        { name: "MongoDB", level: 60 }
      ]
    },
    {
      title: "Programming & Algorithms",
      icon: Brain,
      skills: [
        { name: "Data Structures & Algorithms (C++)", level: 75 },
        { name: "AI/ML (Learning)", level: 40 }
      ]
    }
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", 
    "MongoDB", "C++", "Git", "VS Code", "Responsive Design", "RESTful APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuously expanding my technical expertise through hands-on projects and learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <category.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-blue-600 dark:bg-blue-500 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
            "The beautiful thing about learning is that no one can take it away from you. 
            Every day brings new opportunities to grow, create, and push the boundaries 
            of what's possible."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;