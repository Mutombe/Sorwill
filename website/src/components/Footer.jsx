import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, Envelope, MapPin, X, ArrowUp,
  FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo
} from '@phosphor-icons/react';
import { companyInfo } from '../data/content';
import { AnimatedSection } from './AnimatedSection';

export function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="relative bg-sorwil-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sorwil-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sorwil-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* CTA Banner */}
        <div className="relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <AnimatedSection variant="fadeUp">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-sorwil-red to-sorwil-red-dark rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay" />
                <div className="relative z-10">
                  <h3 className="text-display-md text-white">Ready to Build?</h3>
                  <p className="text-white/70 mt-2 text-lg max-w-md">Get a custom quote for your next project. Our team responds within 24 hours.</p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/quote" className="px-8 py-4 bg-white text-sorwil-navy font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl">
                    Request Quote <ArrowRight size={18} weight="bold" />
                  </Link>
                  <a href={`tel:${companyInfo.phone[0]}`} className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20">
                    <Phone size={18} /> Call Us Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Main Footer */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <path d="M20 4 C30 4, 36 12, 36 20 C36 28, 30 36, 20 36" stroke="#1a3a6b" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M20 36 C10 36, 4 28, 4 20 C4 12, 10 4, 20 4" stroke="#d42027" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
                <div>
                  <span className="text-lg font-extrabold text-white">SORWIL</span>
                  <span className="text-lg font-extrabold text-sorwil-red ml-1">STEEL</span>
                </div>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-6">Zimbabwe's premier steel distribution and fabrication partner. Building the future with innovative steel solutions.</p>
              <div className="flex gap-3">
                {[FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sorwil-red/20 flex items-center justify-center text-white/40 hover:text-sorwil-red transition-all border border-white/5">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Products</h4>
              <div className="space-y-3">
                {['Deformed Bars', 'Mesh Wire', 'Angle Iron', 'Flat Bars', 'Beams & Lintels', 'Window Sections', 'Deck Pans'].map((item) => (
                  <Link key={item} to="/products" className="block text-sm text-white/40 hover:text-sorwil-red transition-colors">{item}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Services</h4>
              <div className="space-y-3">
                {['Cutting & Bending', 'Fabrication & Erection', 'Assembling & Fixing', 'Special Foundations', 'Window & Door Frames', 'Shuttering'].map((item) => (
                  <Link key={item} to="/services" className="block text-sm text-white/40 hover:text-sorwil-red transition-colors">{item}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Get in Touch</h4>
              <div className="space-y-4 mb-8">
                <a href={`tel:${companyInfo.phone[0]}`} className="flex items-start gap-3 text-sm text-white/40 hover:text-white transition-colors">
                  <Phone size={16} className="text-sorwil-red mt-0.5 shrink-0" />
                  <span>{companyInfo.phone.join(' | ')}</span>
                </a>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 text-sm text-white/40 hover:text-white transition-colors">
                  <Envelope size={16} className="text-sorwil-red mt-0.5 shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-white/40">
                  <MapPin size={16} className="text-sorwil-red mt-0.5 shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
              </div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 outline-none focus:border-sorwil-red/50 transition-colors" />
                <button className="px-4 py-2.5 bg-sorwil-red rounded-xl text-white hover:bg-sorwil-red-dark transition-colors">
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">© {new Date().getFullYear()} Sorwil Steel. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <button onClick={() => setPolicyOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => setCookieOpen(true)} className="hover:text-white transition-colors">Cookie Policy</button>
              <span>Terms of Service</span>
            </div>
            <button onClick={scrollToTop} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-sorwil-red/20 flex items-center justify-center text-white/40 hover:text-white transition-all border border-white/5">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      <PolicyModal isOpen={policyOpen} onClose={() => setPolicyOpen(false)} title="Privacy Policy">
        <p>Sorwil Steel ("we", "our", "us") is committed to protecting your personal information and your right to privacy.</p>
        <h4 className="font-bold mt-4 mb-2">Information We Collect</h4>
        <p>We collect personal information that you voluntarily provide when you express interest in our products and services. This includes names, phone numbers, email addresses, and mailing addresses.</p>
        <h4 className="font-bold mt-4 mb-2">How We Use Your Information</h4>
        <p>We use information to facilitate account creation, send administrative information, fulfill orders, and respond to inquiries. We do not sell personal information to third parties.</p>
        <h4 className="font-bold mt-4 mb-2">Contact Us</h4>
        <p>For questions about this policy, contact us at {companyInfo.email}.</p>
      </PolicyModal>

      <PolicyModal isOpen={cookieOpen} onClose={() => setCookieOpen(false)} title="Cookie Policy">
        <p>This Cookie Policy explains how Sorwil Steel uses cookies and similar technologies.</p>
        <h4 className="font-bold mt-4 mb-2">What Are Cookies</h4>
        <p>Cookies are small data files placed on your device when you visit a website.</p>
        <h4 className="font-bold mt-4 mb-2">Cookies We Use</h4>
        <p><strong>Essential cookies:</strong> Required for the website to function. <strong>Analytics cookies:</strong> Help us understand visitor interaction. <strong>Marketing cookies:</strong> Used to deliver relevant advertisements.</p>
        <h4 className="font-bold mt-4 mb-2">Managing Cookies</h4>
        <p>Most browsers allow you to control cookies through their settings.</p>
      </PolicyModal>
    </>
  );
}

function PolicyModal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-80 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold">{title}</h3>
              <button onClick={onClose} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"><X size={16} /></button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-gray-600 leading-relaxed">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-60">
      <div className="bg-sorwil-navy border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/30">
        <p className="text-sm text-white/70 mb-4">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <div className="flex gap-3">
          <button onClick={() => setShow(false)} className="flex-1 px-4 py-2 bg-sorwil-red text-white text-sm font-semibold rounded-xl hover:bg-sorwil-red-dark transition-colors">Accept All</button>
          <button onClick={() => setShow(false)} className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10">Decline</button>
        </div>
      </div>
    </motion.div>
  );
}
