"use client";

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { LoadingScreen } from './components/LoadingScreen';
import { EnhancedHero } from './components/EnhancedHero';
import { About } from './components/About';
import { EnhancedProjects } from './components/EnhancedProjects';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';
import Footer from './components/ui/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleScrollToNext = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <EnhancedHero onScrollToNext={handleScrollToNext} />;
      case 'about':
        return <About />;
      case 'projects':
        return <EnhancedProjects />;
      case 'contact':
        return <Contact />;
      default:
        return <EnhancedHero onScrollToNext={handleScrollToNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden max-w-screen">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App */}
      <AnimatePresence>
        {!isLoading && (
          <div className='relative '>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {/* Navigation */}
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* Main Content */}
            <main className="pt-16 max-w-screen">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] // Custom easing for smooth transitions
                  }}
                >
                  {renderActiveSection()}
                </motion.div>
              </AnimatePresence>
            </main>
            
            {/* Enhanced Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <motion.div
                className="absolute top-1/4 left-1/4 w-screen h-96 bg-purple-500/3 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -50, 50, 0],
                  scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-screen h-80 bg-cyan-500/3 rounded-full blur-3xl"
                animate={{
                  x: [0, -80, 60, 0],
                  y: [0, 60, -40, 0],
                  scale: [1, 0.8, 1.3, 1],
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 5,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-screen h-64 bg-pink-500/2 rounded-full blur-3xl"
                animate={{
                  x: [0, 120, -80, 0],
                  y: [0, -80, 100, 0],
                  scale: [1, 1.4, 0.6, 1],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 10,
                }}
              />
            </div>

            {/* Progress Bar for Section Navigation */}
            <div className="fixed top-0 left-0 w-screen h-1 bg-muted/20 z-50">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ 
                  width: activeSection === 'home' ? '25%' : 
                         activeSection === 'about' ? '50%' : 
                         activeSection === 'projects' ? '75%' : '100%' 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            {/* Floating Action Button for Quick Actions */}
            <motion.div
              className="fixed bottom-6 left-6 z-40 hidden lg:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <motion.button
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection('contact')}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  💬
                </motion.div>
              </motion.button>
            </motion.div>
            {/* Toast Notifications */}
            <Toaster 
              position="bottom-right"
              toastOptions={{
                style: {
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  color: 'hsl(var(--card-foreground))',
                },
              }}
            />
          </motion.div>
       <Footer/>
          
          </div>
        )}

      </AnimatePresence>
    </div>
  );
}