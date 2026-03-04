import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlass, List, X, CaretDown, Phone, Envelope,
  MapPin, ArrowRight, FacebookLogo, LinkedinLogo, InstagramLogo
} from '@phosphor-icons/react';
import { navLinks, companyInfo } from '../data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="h-full bg-sorwil-navy/90 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-xs text-white/70">
            <div className="hidden md:flex items-center gap-6">
              <a href={`tel:${companyInfo.phone[0]}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={12} weight="fill" /> {companyInfo.phone[0]}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Envelope size={12} weight="fill" /> {companyInfo.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} weight="fill" /> {companyInfo.address}
              </span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="#" className="hover:text-white transition-colors"><FacebookLogo size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><LinkedinLogo size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><InstagramLogo size={14} /></a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'top-0 bg-sorwil-navy/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-2'
            : 'top-10 bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#2a5aa8" strokeWidth="2" opacity="0.3" />
                  <path d="M20 4 C30 4, 36 12, 36 20 C36 28, 30 36, 20 36" stroke="#1a3a6b" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M20 36 C10 36, 4 28, 4 20 C4 12, 10 4, 20 4" stroke="#d42027" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M20 10 C26 10, 30 14, 30 20 C30 26, 26 30, 20 30" stroke="#c8cdd3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">SORWIL</span>
                <span className="text-xl font-extrabold text-sorwil-red tracking-tight ml-1">STEEL</span>
                <div className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-medium -mt-0.5">Innovative Solutions</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {link.label}
                    <CaretDown size={12} weight="bold" className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-sorwil-navy/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 p-2 min-w-[280px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 group/item transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sorwil-red/10 flex items-center justify-center mt-0.5 group-hover/item:bg-sorwil-red/20 transition-colors">
                                <ArrowRight size={14} className="text-sorwil-red" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover/item:text-sorwil-red transition-colors">{child.label}</div>
                                <div className="text-xs text-white/40 mt-0.5">{child.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button onClick={() => setSearchOpen(true)} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all border border-white/5">
                <MagnifyingGlass size={18} />
              </button>
              <Link to="/quote" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-sorwil-red hover:bg-sorwil-red-dark text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-red-500/20">
                Get Quote <ArrowRight size={14} weight="bold" />
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
                {mobileOpen ? <X size={20} /> : <List size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-sorwil-navy border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6 pt-24">
                {navLinks.map((group) => (
                  <div key={group.label} className="mb-6">
                    <div className="text-xs tracking-[0.2em] text-sorwil-red font-semibold uppercase mb-3">{group.label}</div>
                    {group.children.map((link) => (
                      <Link key={link.href} to={link.href} className="block py-2.5 text-white/70 hover:text-white text-sm font-medium transition-colors pl-3 border-l border-white/10 hover:border-sorwil-red mb-1">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link to="/contact" className="block py-2.5 text-white/70 hover:text-white text-sm font-medium">Contact Us</Link>
                <Link to="/quote" className="flex items-center justify-center gap-2 mt-6 w-full py-3 bg-sorwil-red text-white font-semibold rounded-xl">
                  Request a Quote <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
    else setQuery('');
  }, [isOpen]);

  const searchable = [
    { title: 'Deformed Bars', section: 'Products', path: '/products#deformed-bars', keywords: 'rebar reinforcement' },
    { title: 'Mesh Wire', section: 'Products', path: '/products#meshwire', keywords: 'welded wire mesh' },
    { title: 'Angle Iron', section: 'Products', path: '/products#angle-iron', keywords: 'structural L-shape' },
    { title: 'Flat Bars', section: 'Products', path: '/products#flat-bars', keywords: 'flat steel' },
    { title: 'Beams & Lintels', section: 'Products', path: '/products#beams-lintels', keywords: 'universal beam' },
    { title: 'Cutting & Bending', section: 'Services', path: '/services#cutting-bending', keywords: 'CNC precision' },
    { title: 'Fabrication & Erection', section: 'Services', path: '/services#fabrication-erection', keywords: 'structural welding' },
    { title: 'Special Foundations', section: 'Services', path: '/services#special-foundation', keywords: 'piling ground beam' },
    { title: 'About Sorwil', section: 'Company', path: '/about', keywords: 'history team Zimbabwe' },
    { title: 'Our Projects', section: 'Portfolio', path: '/projects', keywords: 'completed work' },
    { title: 'Career Opportunities', section: 'Careers', path: '/careers', keywords: 'jobs hiring' },
    { title: 'Contact Us', section: 'Contact', path: '/contact', keywords: 'phone email address' },
    { title: 'Request a Quote', section: 'Quote', path: '/quote', keywords: 'pricing order' },
  ];

  const results = query.length > 1
    ? searchable.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-70 flex items-start justify-center pt-[15vh]">
          <div className="absolute inset-0 bg-sorwil-navy/90 backdrop-blur-xl" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="relative w-full max-w-2xl mx-4">
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 p-5 border-b border-white/10">
                <MagnifyingGlass size={22} className="text-white/40" />
                <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products, services, pages..." className="flex-1 bg-transparent text-white text-lg placeholder:text-white/30 outline-none" />
                <button onClick={onClose} className="text-white/40 hover:text-white transition-colors"><X size={20} /></button>
              </div>
              {results.length > 0 && (
                <div className="p-3 max-h-[40vh] overflow-y-auto">
                  {results.map((item, i) => (
                    <button key={i} onClick={() => { navigate(item.path); onClose(); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-left transition-all group">
                      <div className="w-8 h-8 rounded-lg bg-sorwil-red/10 flex items-center justify-center">
                        <ArrowRight size={14} className="text-sorwil-red" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <div className="text-xs text-white/40">{item.section}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {query.length > 1 && results.length === 0 && (
                <div className="p-8 text-center text-white/40 text-sm">No results found for "{query}"</div>
              )}
              {query.length <= 1 && (
                <div className="p-5 text-xs text-white/30">
                  <span className="text-white/50 font-medium">Quick links: </span>
                  {['Products', 'Services', 'Careers', 'Contact'].map((q) => (
                    <button key={q} onClick={() => setQuery(q)} className="inline-block px-2 py-1 bg-white/5 rounded-md mr-2 mt-1 hover:bg-white/10 transition-colors text-white/50">{q}</button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
