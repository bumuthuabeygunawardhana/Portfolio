'use client';
import { useState, useEffect } from 'react';
import "../app/globals.css";

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2020 - 2024",
      grade: "First Class Honours",
      description: "Specialized in Software Engineering and AI. Completed thesis on Machine Learning applications in web development.",
      subjects: ["Data Structures", "Algorithms", "Web Development", "AI/ML", "Database Systems"],
      
    },
    {
      degree: "Advanced Diploma in Software Development",
      institution: "Tech Institute",
      year: "2018 - 2020",
      grade: "Distinction",
      description: "Focused on full-stack development and modern web technologies. Built several real-world projects.",
      subjects: ["JavaScript", "React", "Node.js", "Python", "UI/UX Design"],
      
    },
    {
      degree: "Advanced Level (Science Stream)",
      institution: "Royal College",
      year: "2016 - 2018",
      grade: "3 A's",
      description: "Subjects: Combined Mathematics, Physics, Chemistry. School prefect and head of the Computer Society.",
      subjects: ["Mathematics", "Physics", "Chemistry", "ICT"],
      
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", year: "2024", icon: "☁️" },
    { name: "Google Cloud Professional", year: "2023", icon: "🌐" },
    { name: "React Professional Certificate", year: "2023", icon: "⚛️" },
    { name: "AI/ML Specialization", year: "2022", icon: "🤖" },
    { name: "UI/UX Design Certificate", year: "2022", icon: "🎨" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 py-20 flex flex-col justify-center">
      <div className="w-full">
        <div className="h-8"></div>
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="h-4"></div>
          <p className="text-gray-400 text-xl mt-6">My academic journey and continuous learning path</p>
        </div>
        {/* Centered container for stacked sections */}
        <div className="w-full flex flex-col items-center">
          
          {/* Academic Background Section */}
          <div className="mb-20 w-full max-w-4xl">
            <div className="h-4"></div>
            <h3 className={`text-3xl font-bold text-white mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Academic Background
            </h3>
            <div className="h-4"></div>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="h-10"></div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 text-lg font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {edu.year}
                      </div>
                      <div className="text-green-400 font-semibold mt-2">{edu.grade}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="bg-slate-700/50 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
           <div className="h-8"></div>
          {/* Certifications Section */}
          <div className="mb-12 w-full max-w-4xl">
            <h3 className={`text-3xl font-bold text-white mb-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Certifications
            </h3>
            <div className="h-4"></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 w-full max-w-xs ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-8"></div>
            {/* Learning Philosophy */}
            
              <h4 className="text-white font-bold mb-3 text-center"> My Learning Philosophy</h4>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                I believe in continuous learning and staying updated with the latest technologies. 
                Every project is an opportunity to learn something new and improve my skills.
              </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}