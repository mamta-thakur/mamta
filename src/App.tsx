import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Briefcase, Wallet, Server, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('All Projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const tabs = ['All', 'Laravel', 'CodeIgniter', 'WordPress', 'Core PHP'];

  const projects = [
    {
      title: "Courier Service - AQUANTUO",
      description: "The AQUANTUO project is an e-commerce and logistics platform that offers customized solutions for individuals, small businesses, and large enterprises. Their main goal is to connect Africa with the global market, providing efficient and tailored logistics services to save time and money for their customers. The project is built using Laravel 8, a popular PHP web application framework known for its robustness and ease of development.",
      tech: ["Laravel", "MongoDB", "Slim", "Ajax", "Stripe", "Cellulent Tingg", "MTN"],
      category: "Laravel",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/11e34629-1b02-43a6-8189-750886ab4aa2",
      demoLink: "https://aquantuo.com/",
      codeLink: "https://github.com/username/project"
    },
    {
      title: "Online Course Platform",
      description: "A comprehensive online course platform with user registration, course management, payment integration and admin dashboard. This project is designed to provide a seamless learning experience for users, allowing them to access a wide range of courses and manage their learning journey effectively. Courses will be available according to the user's subscription plan, ensuring that they have access to the content they need.",
      tech: ["Laravel", "MySQL", "Vue.js", "Stripe"],
      category: "Laravel",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "",
      codeLink: "https://github.com/username/project"
    },
    {
      title: "Dating App",
      description: "The Meetown project is a modern dating application with user profiles, chat functionality, and location-based matching features. It aims to connect travelers with others who share a similar passion for travel The platform serves as a meeting place for individuals seeking travel companions or simply looking to connect with like-minded people who enjoy exploring new places, cultures, and experiences.",
      tech: ["CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
      category: "CodeIgniter",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/906d0c7a-cae9-4710-9636-91ef4bbafe8c",
      demoLink: "https://www.meetown.com/",
      codeLink: ""
    },
    {
      title: "Monetization with articles",
      description: "ITMOAMUN (I Take My Own Adventure, Model United Nations) appears to be a project built on WordPress, with a focus on empowering users to create custom articles related to Model United Nations (MUN) and other topics The project utilizes several technologies, with WordPress being the primary content management system.",
      tech: ["WordPress", "Custom Plugin", "Ajax", "MySQL", "CSS3", "HTML5", "PayPal"],
      category: "WordPress",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/55c3cf07-e23e-4ff6-acd8-7addf97ee600",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Waterfallsinks",
      description: "Waterfall Sinks are equipped with an intelligent Smart Control Button for hands-free water drainage. Effortlessly manage water flow and drainage with a simple touch, revolutionizing cleanliness and convenience. Wave goodbye to messy hands and hello to seamless functionality The smart button takes care of your needs. Elevate your kitchen aesthetics and hygiene standards, and immerse yourself in the world of innovative design with our captivating Waterfall Sink.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Wordpress",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/9e0f4b42-f6eb-4cb0-9d11-69d1c90978d2",
      demoLink: "https://waterfallsinks.com.au/",
      codeLink: ""
    },
    {
      title: "FinsinHotel (Hotel Management Software)",
      description: "Transform your hotel's operations with FinsinHotel - the ultimate management software solution for seamless efficiency and guest satisfaction! Why juggle multiple tools when we can manage our entire hotel effortlessly? FinsinHotel combines all our management needs into one powerful platform. Simplify our operations and focus on delivering top-notch service to your guests!",
      tech: ["Laravel", "MySQL"],
      category: "Laravel",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "http://checkinmyhotel.com/",
      codeLink: ""
    },
    {
      title: "TV Show Fashion & Outfits",
      description: "ShopYourTV is a website that assists viewers in recognizing and obtaining items from TV series. From apparel to vehicles to music, the site covers an array of products. With more than 1,500 shows and 20,000 items cataloged, ShopYourTV stands as the largest website of its kind.",
      tech: ["Wordpress", "MySQL", "Ajax", "jQuery", "AWS S3"],
      category: "Wordpress",
      image: "https://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/678bae2c-235e-463d-9e82-7eff9974ad3a",
      demoLink: "https://www.shopyourtv.com/",
      codeLink: ""
    },
    {
      title: "FinsinERP",
      description: "FinsinERP is a comprehensive CRM solution designed to streamline and automate customer relationship management operations. It offers a range of features to enhance customer interactions, manage leads, and improve overall business efficiency.",
      tech: ["Laravel", "MySQL", "jQuery", "Ajax"],
      category: "Laravel",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Pure Healthy Fit",
      description: "Pure Healthy Fit is a prominent nonprofit health website that focuses on medical education and research in the field of health and wellness As a leading platform, its primary goal is to provide reliable and up-to-date information to its users, enabling them to make informed decisions about their health and well-being.",
      tech: ["WordPress", "MySQL", "jQuery", "Bootstrap", "Ajax"],
      category: "WordPress",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/196ec2c4-15b0-45fc-9eb8-37b3de90eabf",
      demoLink: "purehealthyfit.com",
      codeLink: ""
    },
    {
      title: "Shoprocket",
      description: "The Shoprocket project is a solution that allows users to add a fully responsive shopping cart and create a complete online store with ease It is designed to be integrated into existing websites, blogs, or landing pages, enabling users to start selling products online without the need for advanced coding skills.",
      tech: ["CodeIgniter", "MySQL", "Bootstrap", "Node.js", "Ajax", "Stripe", "PayPal"],
      category: "CodeIgniter",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/c7fed144-9111-45b9-bab2-173292d41d35",
      demoLink: "https://shoprocket.io/",
      codeLink: ""
    },
    {
      title: "Fitness Training and Holistic Nutrition",
      description: "Eatgoodfeelgood is an online support group and weight loss coaching program designed to help individuals who struggle with emotional eating, binge eating, late-night eating, and diet sabotage The platform aims to provide a supportive and nurturing environment for individuals seeking to overcome their challenges with food and achieve their weight loss goals.\
      \
      The website is built using a combination of technologies, including core PHP and WordPress. Core PHP is likely used for custom backend functionality, data handling, and other server-side operations.",
      tech: ["Core PHP", "MySQL", "JavaScript", "PayPal", "WordPress", "Bootstrap", "Ajax"],
      category: "Core PHP",
      image: "http://upwork.com/att/download/portfolio/persons/uid/1229104080431194112/profile/projects/files/a197692e-9121-4165-882a-f74cd7da33e9",
      demoLink: "https://www.eatgoodfeelgood.ca/",
      codeLink: ""
    }
  ];

  const filteredProjects = activeTab === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Mamta Thakur</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {/* MT */}
                <img src="https://www.upwork.com/profile-portraits/c1fJ_VZ-0VyCn9AR3dd3XYBD8byqnOHyok5IstFPC0iy20ManMWXTzZ3594ZsnC8ty" alt="Image" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Mamta <span className="text-blue-600">Thakur</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Senior PHP Developer & Team Lead
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Crafting robust web applications with 7+ years of experience in PHP, Laravel, Wordpress, and modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown className="mx-auto text-gray-400" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Senior PHP Developer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Senior PHP Developer with over 7 years of experience in creating scalable web applications 
                and robust backend systems. I specialize in PHP, Laravel, CodeIgniter, Wordpress and modern web development practices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans across full-stack development, database design, API development, Frontend, and cloud technologies. 
                I'm committed to writing clean, maintainable code and delivering high-quality solutions that drive business growth.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>mamtathakur11329111@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">7+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-green-600 mb-2">50+</h4>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">10+</h4>
                <p className="text-sm text-gray-600">Technologies Mastered</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-orange-600 mb-2">100%</h4>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Backend</h3>
              </div>
              <div className="space-y-2">
                {['Core PHP', 'Laravel', 'CodeIgniter', 'WordPress Customization', 'RESTful APIs', 'JWT Authentication', 'Database Design', 'Shopify', ].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Globe className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Frontend</h3>
              </div>
              <div className="space-y-2">
                {['JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'React.js', 'Node.js'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Wallet className="text-gray-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Payment Gateways</h3>
              </div>
              <div className="space-y-2">
                {['Stripe', 'PayPal ', 'Cellulent Tingg', 'MTN','Braintree'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Database</h3>
              </div>
              <div className="space-y-2">
                {['MySQL', 'MongoDB'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Cloud</h3>
              </div>
              <div className="space-y-2">
                {['Git', 'AWS S3', 'Google Cloud Platform', ].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="text-pink-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Project Management Tools</h3>
              </div>
              <div className="space-y-2">
                {['Trello', 'Asana', 'Jira', 'Freedcamp'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Featured Projects</h2>
          
          {/* Technology Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.demoLink && (
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                        <ExternalLink size={16} />
                        <a href={`${project.demoLink}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </button>
                    )}
                    {/* <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                      <Github size={16} />
                      <span>Code</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show message if no projects found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for this technology.</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Senior PHP Developer",
                company: "FinsinTech Pvt. Ltd.",
                period: "Nov 2023 - Dec 2024)",
                description: "Leading development of enterprise-level web applications using Laravel, WordPress Customization, AWS Integration, Google Drive API, React.js, MySQL, jQuery, Ajax. Mentoring junior developers and implementing best practices for code quality and performance optimization."
              },
              {
                title: "Software Developer",
                company: "Tech Habile",
                period: "Mar 2023 - Jul 2023",
                description: "Developed and maintained client projects using PHP, CodeIgniter, MySQL, Node.js, Stripe Payment Gateway. Collaborated with cross-functional teams to deliver high-quality web solutions on time and within budget."
              },
              {
                title: "Software Developer",
                company: "Ducktale IT Service",
                period: "Dec 2020 - Feb 2023",
                description: "Built responsive web applications and implemented RESTful APIs, Laravel, MongoDB, Stripe Payment Gateway, Cellulant, iPay, Slim Framework APIs, WordPress, MySQL. Worked on database design and optimization, ensuring scalable and efficient data management solutions. Mentoring junior developers and implementing best practices for code quality and performance optimization."
              },
              {
                title: "PHP Developer",
                company: "Quicky Coders",
                period: "Mar 2019 - Nov 2020",
                description: "Started career developing web applications using CodeIgniter,Laravel, MySQL, jQuery, WordPress (Custom Plugins, WooCommerce), Stripe, PayPal, Ajax, Bootstrap."
              },
              {
                title: "Junior PHP Developer",
                company: "Hiltweb Solutions",
                period: "Dec 2016 - Jun 2018",
                description: "Started career developing web applications using PHP, MySQL, CodeIgniter, Facebook & Instagram APIs, WordPress, Magento Product Management. Gained experience in backend technologies and learned industry best practices for software development."
              }
            ].map((job, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < 4 && <div className="w-0.5 h-24 bg-gray-300 mt-4"></div>}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{job.company} • {job.period}</p>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            
            {/* <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form> */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's work together</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to discuss how I can help bring your ideas to life!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-gray-600">mamtathakur11329111@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Phone</p>
                    <p className="text-gray-600">9459120428</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Location</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/mamta-thakur" target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mamtathakur1132/" target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Mamta Thakur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;