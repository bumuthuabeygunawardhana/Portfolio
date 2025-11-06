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
      degree: "B.Sc. (Hons) in Information Technology",
      institution: "University of Moratuwa",
      year: "2023 - 2027",
      grade: "Class is loading...",
      description: "I am currently pursuing a Bachelor of Science Honours Degree in Information Technology at the University of Moratuwa, one of Sri Lanka’s leading technological universities. The program provides a strong foundation in software engineering, data management, networking, and emerging technologies",
      subjects: ["GPA: 3.42/4.0"],
      
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "H/Ruhunu vijayaba college",
      year: "2018 - 2020",
      grade: "1A, 2Bs",
      description: "Completed Advanced Level in Science stream with Physics,Chemistry,Biology",
      subjects: [""],
      
    },
    {
      degree: "Ordinary Level (O/L)",
      institution: "H/Ruhunu vijayaba college",
      year: "2017",
      grade: "7A, 2Bs",
      description: "Completed Ordinary Level examination with excellent results in Science and Mathematics subjects",
      subjects: [""],
      
    }
  ];

  const certifications = [
    { 
      name: "Udemy Full-Stack Developer", 
      year: "2025", 
      link: "https://www.linkedin.com/posts/bumuthu-abeygunawardhana-1289362b0_fullstack-webdevelopment-udemy-activity-7367144528190853121--oIU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErjiDABHJnU8x8G3Ph3Gj5lwCERA614-io",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="text-xl font-bold relative">
            Ü
            <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs">^</span>
          </span>
        </div>
      )
    },
    { 
      name: "Aviatrix Certified Engineer", 
      year: "2025", 
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7381339722813632512/",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      name: "UOM-Python for Beginners", 
      year: "2024", 
      link: "https://www.linkedin.com/posts/bumuthu-abeygunawardhana-1289362b0_oneyearago-throwback-continuouslearning-activity-7206383584608227329-7udv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErjiDABHJnU8x8G3Ph3Gj5lwCERA614-io",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 py-16 sm:py-20 flex flex-col justify-center">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="h-6 sm:h-8"></div>
        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Education
          </h2>
          <div className="h-3 sm:h-4"></div>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 px-4">My academic journey and continuous learning path</p>
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
                      <div className="text-gray-400 text-lg font-medium">
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
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 w-full max-w-xs cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-5">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>
                  </div>
                </a>
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