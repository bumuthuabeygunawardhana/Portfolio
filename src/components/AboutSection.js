'use client';
import { useState, useEffect } from 'react';
import { 
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaDatabase, FaFigma, FaGitAlt, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiAdobexd, SiSketch, SiInvision, SiIntellijidea,
  SiEclipseide, SiPostman, SiSlack, SiNotion
} from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Look for the parent section with id="about"
    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    Programming: [
      { name: 'Java', icon: <FaJava className="text-orange-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-500" /> },
      { name: 'C', icon: <SiC className="text-blue-600" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
      { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-500" /> }
    ],
    'Web Development': [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> }
    ],
    Database: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-600" /> }
    ],
    'UI/UX Design': [
      { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
      { name: 'Adobe XD', icon: <SiAdobexd className="text-pink-500" /> },
      { name: 'Sketch', icon: <SiSketch className="text-orange-500" /> },
      { name: 'InVision', icon: <SiInvision className="text-pink-600" /> }
    ],
    IDEs: [
      
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-red-600" /> },
      { name: 'Eclipse', icon: <SiEclipseide className="text-purple-600" /> }
    ],
    Other: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
      { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Slack', icon: <SiSlack className="text-purple-600" /> },
      { name: 'Notion', icon: <SiNotion className="text-gray-700" /> }
    ]
  };

  const handleSkillClick = (skillName) => {
    setActiveSkill(skillName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setActiveSkill(null), 300);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black flex flex-col items-center justify-start px-8 pt-24 pb-16">
      <div className="h-16"></div>
        {/* About Me Section */}
        <div className="w-full max-w-6xl text-center">
          <div className="mx-auto">
            {/* Section Title */}
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <div className="h-10"></div>
            {/* Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                I am <span className="text-blue-400 font-semibold">Bumuthu Abeygunawardhana</span>, a 3rd-year undergraduate pursuing a B.Sc. (Hons) in Information Technology at the University of Moratuwa, Faculty of Information Technology, Sri Lanka. I am passionate about technology, problem-solving, and continuously developing my skills in software engineering and IT-related fields. I aim to apply my knowledge and creativity to contribute effectively to innovative projects and real-world solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer between sections */}
        <div className="h-32"></div>

        {/* Tech Skills Section */}
        <div className="w-full max-w-6xl text-center">
          {/* Skills Title */}
          <div className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Click & View MyTech Skills
            </h3>
          </div>
          <div className="h-10"></div>
         {/* Skill Buttons - All in One Row */}
<div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  {/* All 6 Buttons in One Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
    {Object.keys(skillCategories).map((skill, index) => (
      <button
        key={skill}
        onClick={() => handleSkillClick(skill)}
        className="group relative overflow-hidden bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-xl border-2 border-purple-500/40 text-white px-8 py-6 rounded-3xl font-bold text-base md:text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-110 hover:border-purple-400/80 hover:-translate-y-2 active:scale-95"
      >
        <span className="relative z-10 whitespace-nowrap">{skill}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-3xl"></div>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
      </button>
    ))}
  </div>
</div>
        </div>

        {/* Enhanced Skills Popup */}
        {showPopup && activeSkill && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4" onClick={closePopup}>
            <div 
              className={`bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-2xl border-2 border-purple-500/50 rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl shadow-purple-500/20 transform transition-all duration-500 ${
                showPopup ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header - Enhanced */}
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-b-2 border-purple-500/30 p-8 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Category Icon */}
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                      <span className="text-4xl">💻</span>
                    </div>
                    <div>
                      <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                        {activeSkill}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {skillCategories[activeSkill]?.length} skills • Click on any skill to learn more
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="group p-4 bg-white/5 hover:bg-red-500/20 rounded-2xl border-2 border-white/10 hover:border-red-500/40 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-gray-400 group-hover:text-red-400 text-3xl font-bold leading-none">×</span>
                  </button>
                </div>
              </div>

              {/* Skills Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-8">
                {/* Skills Grid - Larger and More Professional */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                  {skillCategories[activeSkill]?.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 border-2 border-white/10 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
                    >
                      <div className="text-center">
                        {/* Skill Icon - Larger */}
                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                          {skill.icon}
                        </div>
                        
                        {/* Skill Name */}
                        <h5 className="text-white font-bold text-lg mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                          {skill.name}
                        </h5>
                        
                        {/* Decorative Line */}
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Skill Level Indicator (Optional) */}
                        <div className="mt-3 flex justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < 4 ? 'bg-purple-500' : 'bg-gray-600'
                              } group-hover:bg-purple-400`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                  <div className="text-center">
                    <h5 className="text-2xl font-bold text-white mb-3">
                      🚀 Constantly Learning & Growing
                    </h5>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      These are some of the technologies I work with in <span className="text-purple-400 font-semibold">{activeSkill}</span>. 
                      I'm always exploring new tools and frameworks to stay current with industry trends and deliver innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}