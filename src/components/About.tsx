"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'ExpressJs', level: 70, category: 'backened' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Next.js', level: 70, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Rest Api', level: 80, category: 'Communication' },
    { name: 'TypeScript', level: 40, category: 'Language' },
  ];

  const experiences = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern frameworks and best practices.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and user experience.',
      gradient: 'from-cyan-500 to-green-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams ',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="min-h-screen  w-screen mx-auto py-20 px-4  sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm a passionate web developer with hands-on experience in building modern, responsive websites and web applications. I enjoy working with technologies like React, Next.js, and Tailwind CSS to create clean, user-friendly interfaces.

          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${experience.gradient} flex items-center justify-center mb-4`}
                >
                  <experience.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-medium mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium flex items-center gap-2">
                    {skill.name}
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border-border/50">
            <p className="text-lg leading-relaxed mb-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge through blog posts and mentoring.
            </p>
            <p className="text-muted-foreground">
              Let's build something amazing together! ✨
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}