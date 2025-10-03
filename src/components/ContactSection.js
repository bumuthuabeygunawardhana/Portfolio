'use client';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'bumuthu@example.com',
      link: 'mailto:bumuthu@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: 'https://maps.google.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/bumuthu',
      link: 'https://linkedin.com/in/bumuthu'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/bumuthu', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/bumuthu', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/bumuthu', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/bumuthu', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/@bumuthu', color: 'hover:text-red-400' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com/users/bumuthu', color: 'hover:text-indigo-400' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6">Let's discuss your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl hover:border-purple-500/40 hover:scale-105 transition-all duration-300 group"
                >
                  <span className="text-2xl mr-4">{info.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 ${social.color} transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">🚀</span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-purple-500/20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-4">
            © 2024 Bumuthu Abeygunawardhana. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}