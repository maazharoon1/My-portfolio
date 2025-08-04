"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Star, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './fallback/ImageWithFallback';
export function EnhancedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      longDescription: 'Built with Next.js and featuring live editing with Sanity, advanced filtering, and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['Next.js','TypeScript', 'Sanity', 'Clerk', 'Stripe'],
      category: 'web',
      liveUrl: 'https://maaz-next-ecommerce-maazs-projects-bc8ece73.vercel.app/',
      githubUrl: 'https://github.com/maazharoon1/next-ecommerce',
      featured: true,
      stats: { stars: 45, contributors: 3, year: '2025' },
      gradient: 'from-purple-500 to-pink-500',
    },
    
   {
  id: 2,
  title: 'Bussiness Website',
  description: 'A professional packaging company website featuring services and contact integration.',
  longDescription: 'Built for Al-Maaz Packages to showcase their corrugated packaging solutions and services with a modern design and responsive layout.',
  image: 'https://almaazpackages.vercel.app/assets/ImageSlider2-DkpgrNEQ.jpg',
  technologies: ['React', 'Vite', 'Tailwind CSS','EmailJS','ExpressJs' ],
  category: 'web',
  liveUrl: 'https://almaazpackages.vercel.app/',
  githubUrl: '#',
  featured: true,
  stats: { stars: 48, contributors: 1, year: '2025' },
  gradient: 'from-blue-500 to-purple-400',
}
,
 {
  id: 3,
  title: 'Spotify Clone',
  description: 'Music streaming app clone with playback controls and playlist features built using Node.js and JavaScript.',
  longDescription: 'A full-stack clone of Spotify. Backend powered by Node.js and frontend by  JavaScript with responsive design.',
  image: 'https://i.pcmag.com/imagery/roundups/05lFh69DK15xcYHSTZgr0zN-2.fit_lim.size_1600x900.v1669943421.jpg',
  technologies: ['Node.js', 'JavaScript', 'Express', 'Html'],
  category: 'web',
  liveUrl: '#', 
  githubUrl: 'https://github.com/maazharoon1/SpotifyClonePractice', 
  featured: false,
  stats: { stars: 25, contributors: 1, year: '2024' },
  gradient: 'from-green-500 to-blue-900',
},

    
  ];

 ;

  return (
    <section className="min-h-screen  pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of my recent work, featuring modern web applications built with 
            cutting-edge technologies and best practices.
          </p>

          {/* Category Filter */}
         
        </motion.div>

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {projects.length > 0 && (
              <div className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <Card className="overflow-hidden border-border/50 hover:border-border transition-all duration-500 h-full bg-card/50 backdrop-blur-sm">
                        <div className="relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-56 object-cover"
                            />
                          </motion.div>
                          
                          {/* Overlay with stats */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center justify-between text-white text-sm mb-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{project.stats.stars}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{project.stats.contributors}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{project.stats.year}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                {project.liveUrl && project.liveUrl !== '#' && (
                                <motion.a
                                  href={project.liveUrl}
                                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <ExternalLink className="w-4 h-4 text-white" />
                                </motion.a>
                                )}
                                {project.githubUrl && project.githubUrl !== "#" && (
                                <motion.a
                                  href={project.githubUrl}
                                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >

                                  <Github className="w-4 h-4 text-white" />
                                </motion.a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-medium group-hover:text-foreground transition-colors">
                              {project.title}
                            </h3>
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {hoveredProject === project.id ? project.longDescription : project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                            { project.liveUrl && project.liveUrl !== '#' ? 
                          <div className="flex space-x-3">
                            
                            <Button size="sm" className="flex-1" asChild>
                              <a href={project.liveUrl} className="flex items-center justify-center gap-2">
                                <Eye className="w-4 h-4" />
                                View Live
                              </a>
                            </Button>
                           { project.githubUrl && project.githubUrl !== '#' &&
                               <Button size="sm" variant="outline" asChild>
                              <a href={project.githubUrl} className="flex items-center justify-center gap-2">
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                            </Button> 
                            }
                          </div> :
                          <div className="flex space-x-3">
                            <Button size="sm" variant="outline" className="flex-1" asChild>
                              <a href={project.githubUrl} className="flex items-center justify-center gap-2">
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                            </Button>
                          </div>
                            }
                         
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

      
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}