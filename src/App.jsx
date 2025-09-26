import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code, Trophy, Mail, Github, Linkedin, ExternalLink, Star, Zap } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import ParticleSystem from './components/ParticleSystem';
import TypingAnimation from './components/TypingAnimation';
import GamingCursor from './components/GamingCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

// Import gaming assets
import cyberpunkBg from './assets/31V9OTXREvlm.jpg';
import gamingBg from './assets/31V9OTXREvlm.jpg';
import neonGraphics from './assets/31V9OTXREvlm.jpg';
import controllerIcon from './assets/6ghgj6wkvZOk.png';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [particles, setParticles] = useState([]);

  // Generate particles for background animation
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 6,
        size: Math.random() * 3 + 1,
      });
    }
    setParticles(newParticles);
  }, []);

  const skills = [
    { name: 'React/JavaScript', level: 90, icon: Code },
    { name: 'Web Development', level: 85, icon: Gamepad2 },
    { name: 'Java Full Stack', level: 80, icon: Star },
    { name: 'Node.js/Backend', level: 75, icon: Zap },
  ];

  const projects = [
    {
      id: 1,
      title: 'TaskForge AI',
      description: 'A fullstack task management system with AI-powered task assignment and productivity insights. Features include task CRUD operations, sprint management, and intelligent recommendations.',
      image: cyberpunkBg,
      tech: ['React', 'Express.js', 'Node.js', 'PostgreSQL', 'AI APIs'],
      status: 'Completed',
      link: 'https://github.com/Niharika-solanki'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive gaming-themed portfolio website built with React and modern web technologies.',
      image: neonGraphics,
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      link: 'https://github.com/Niharika-solanki'
    },
    {
      id: 3,
      title: 'PlantsWorld E-commerce Website',
      description: 'An online shopping platform for plants with product listings, cart management, and responsive UI. Built with modern web technologies for smooth user experience.',
      image: gamingBg,
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      link: 'https://github.com/Niharika-solanki'
    }
  ];

  const achievements = [
    { title: 'First Webapplication Published', year: '2024', description: 'Released my first indie E-commerce platform' },
    { title: 'Java Programming', year: '2025', description: 'Completed Java programming certification covering OOPs, DSA, and problem-solving.' },
    { title: 'Web Development', year: '2025', description: 'Completed Scaler web development track focusing on React, Node.js, Express, and APIs.' },
    { title: 'Full Stack Certification', year: '2022', description: 'Completed advanced web development course' }
  ];

  return (
    <div className="min-h-screen gaming-bg text-white">
      {/* Interactive Components */}
      <ParticleSystem />
      <GamingCursor />
      <ScrollProgress />
      {/* Particle Background */}
      <div className="particle-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <img src={controllerIcon} alt="Controller" className="w-8 h-8" />
              <span className="text-xl font-bold neon-text">GameDev Portfolio</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <img 
          src={cyberpunkBg} 
          alt="Gaming Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="container mx-auto px-6 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="glitch-text" data-text="LEVEL UP">
                LEVEL UP
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 neon-text">
              <TypingAnimation 
                texts={[
                  "Web Developer",
                  "Full Stack Engineer", 
                  "Creative Coder",
                  "Digital Artist"
                ]}
                speed={150}
                deleteSpeed={100}
                pauseTime={2000}
              />
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Welcome to my digital realm where code meets creativity. I'm a passionate Software developer 
              and full-stack engineer crafting immersive experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gaming-button text-lg px-8 py-4">
                View Projects
              </Button>

            <a href="/Niharika_Solanki_Resume_2025_.pdf" download>
             <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 text-lg px-8 py-4">
              Download Resume
              </Button>
            </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">About Me</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              I'm a creative developer with a passion for building interactive experiences. 
              From web applications to indie games, I love bringing ideas to life through code.
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-3">
                      <motion.div
                        className="skill-progress h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Game Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized in Unity and Unreal Engine with experience in 2D/3D game development, 
                  physics simulation, and interactive storytelling.</p>
                </CardContent>
              </Card>

              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-purple-400">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Full-stack development using React, Node.js, and modern web technologies. 
                  Focus on creating responsive and interactive user experiences.</p>
                </CardContent>
              </Card>

              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-green-400">Creative Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>UI/UX design with a focus on gaming aesthetics, user engagement, 
                  and creating memorable digital experiences.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">Featured Projects</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              A showcase of my latest work in game development and web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="gaming-card h-full overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-cyan-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-500 text-purple-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full gaming-button">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">Achievements</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Milestones and accomplishments in my development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="gaming-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-cyan-400">{achievement.title}</CardTitle>
                      <Badge className="bg-purple-600">{achievement.year}</Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">Let's Connect</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Ready to collaborate on your next project? Let's build something amazing together!
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="gaming-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <motion.a
                    href="mailto:contact@example.com"
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-8 h-8 text-cyan-400" />
                    <span className="font-semibold">Email</span>
                    <span className="text-sm opacity-75">solankiniharika35@gmail.com</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Niharika-solanki"
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-purple-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-8 h-8 text-purple-400" />
                    <span className="font-semibold">GitHub</span>
                    <span className="text-sm opacity-75">@Niharika-solanki</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/niharika-solanki-484691264/"
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-green-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-8 h-8 text-green-400" />
                    <span className="font-semibold">LinkedIn</span>
                    <span className="text-sm opacity-75">Niharika Solanki</span>
                  </motion.a>
                </div>

                <div className="mt-8 text-center">
                  <Button className="gaming-button text-lg px-8 py-4">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-6 text-center">
          <p className="opacity-75">
            © 2024 Gaming Portfolio. Built with React and passion for gaming.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

