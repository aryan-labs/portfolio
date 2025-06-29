import React from 'react';
import { GraduationCap, Code, Target, Calendar, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: "Expected Graduation", value: "2028" },
    { icon: Code, label: "Technologies", value: "9+" },
    { icon: Award, label: "Projects", value: "15+" },
    { icon: Users, label: "Years Learning", value: "3+" }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "B.Tech Computer Science Engineering",
      description: "Jabalpur Engineering College"
    },
    {
      icon: Code,
      title: "Specialization",
      subtitle: "Full-Stack Development",
      description: "Modern web technologies and frameworks"
    },
    {
      icon: Target,
      title: "Focus",
      subtitle: "Innovation & Problem Solving",
      description: "Creating impactful digital solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated to continuous learning and creating meaningful technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science Engineering student at 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Jabalpur Engineering College</span>, 
              dedicated to leveraging technology to solve real-world problems and create 
              meaningful digital experiences.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in programming began with curiosity and has evolved into a 
              commitment to continuous learning and innovation. I believe in writing 
              clean, efficient code and building user-centric applications.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-3 mx-auto">
                    <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Technology is most powerful when it brings people together and solves real problems. 
            I strive to create solutions that are not just functional, but intuitive, 
            accessible, and impactful."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;