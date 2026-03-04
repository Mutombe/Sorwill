import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Footer, CookieConsent } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import { WhatsappLogo, ArrowUp } from '@phosphor-icons/react';

/* ========== PRELOADER ========== */
function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); setTimeout(onComplete, 400); return 100; }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#0a1628] flex flex-col items-center justify-center"
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          <motion.circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <motion.path
            d="M40 8 C58 8, 72 22, 72 40 C72 58, 58 72, 40 72"
            stroke="#1a3a6b"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M40 72 C22 72, 8 58, 8 40 C8 22, 22 8, 40 8"
            stroke="#d42027"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M40 18 C52 18, 62 28, 62 40 C62 52, 52 62, 40 62"
            stroke="#c8cdd3"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-1">
          SORWIL <span className="text-[#d42027]">STEEL</span>
        </h2>
        <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Innovative Steel Solutions</p>
      </motion.div>
      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/5 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1a3a6b] via-[#d42027] to-[#d42027] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <motion.span
        className="text-[11px] font-mono text-white/20 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.min(Math.round(progress), 100)}%
      </motion.span>
    </motion.div>
  );
}

/* ========== CUSTOM CURSOR (desktop only) ========== */
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#d42027] pointer-events-none z-[90] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[90] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hovering ? 50 : 28, height: hovering ? 50 : 28, borderColor: hovering ? 'rgba(212,32,39,0.5)' : 'rgba(255,255,255,0.2)' }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

/* ========== FLOATING ACTION BUTTONS ========== */
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-[#0a1628]/80 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/10 hover:bg-[#0a1628] transition-colors"
          >
            <ArrowUp size={18} weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/263772203806"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl shadow-green-500/30 hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <WhatsappLogo size={24} weight="fill" />
      </motion.a>
    </div>
  );
}

/* ========== SCROLL PROGRESS BAR ========== */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px]">
      <motion.div
        className="h-full bg-gradient-to-r from-[#1a3a6b] via-[#d42027] to-[#ff6b6b]"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/quote" element={<PageTransition><Quote /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ScrollToTop />
          <ScrollProgress />
          <CustomCursor />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#0a1628',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
              },
            }}
          />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <FloatingActions />
          <CookieConsent />
        </motion.div>
      )}
    </HashRouter>
  );
}
