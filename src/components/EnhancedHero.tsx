"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin,  Download } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

interface EnhancedHeroProps {
  onScrollToNext: () => void;
}

export function EnhancedHero({ onScrollToNext }: EnhancedHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/mycv.pdf"; // ✅ Correct path
  link.download = "Maaz Cv.pdf"; // ✅ Desired download name
  document.body.appendChild(link); // Optional but safe for Firefox
  link.click();
  document.body.removeChild(link); // Cleanup
};



  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black w-screen">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(6, 182, 212, 0.3) 100%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(6, 182, 212, 0.3) 100%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(34, 197, 94, 0.3) 100%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(6, 182, 212, 0.3) 100%)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#06b6d4',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-lg sm:text-xl text-purple-400 mt-3 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hey, I'm
          </motion.p>

          {/* Name with enhanced typography */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-medium mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Maaz Haroon
            </span>
          </motion.h1>
          
          {/* Animated Role */}
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-purple-200 to-white bg-300% bg-clip-text text-transparent"
            >
              Creative Developer & Designer
            </motion.span>
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I craft beautiful digital experiences with modern technologies. 
            Passionate about clean code, elegant design, and creating meaningful user interactions 
            that make a difference.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-4 rounded-full text-base shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              onClick={onScrollToNext}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={()=> handleDownload()}
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-full text-base backdrop-blur-sm"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4"
                 />
                Download CV
              </motion.span>
            </Button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/maazharoon1", label: "GitHub", color: "hover:text-purple-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/maaz-haroon-b278372a0/", label: "LinkedIn", color: "hover:text-blue-400" },
              // { icon: Mail, href: "#", label: "Email", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`group relative p-4 rounded-full bg-white/5 border border-white/10 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-110`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-white transition-colors duration-300" />
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mb-"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={onScrollToNext}
              className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-medium  ">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 rounded-full border mb-3 border-white/20 group-hover:border-white/40 transition-colors duration-300"
              >
                <ArrowDown className="w-4 h-4 " />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}