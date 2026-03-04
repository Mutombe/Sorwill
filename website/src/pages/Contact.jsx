import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Envelope, MapPin, Clock, PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react';
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/AnimatedSection';
import { companyInfo } from '../data/content';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const handleSubmit = (e) => { e.preventDefault(); toast.success('Message sent!', { description: 'Our team will respond within 24 hours.' }); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); };

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center mesh-gradient overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">Get In Touch</span></span>
            <h1 className="text-display-xl text-white mb-4">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Us</span></h1>
            <p className="text-lg text-white/50 max-w-lg">We're ready to discuss your next project.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-16 z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24" staggerDelay={0.08}>
            {[
              { icon: Phone, label: 'Call Us', value: companyInfo.phone[0], sub: companyInfo.phone[1], href: `tel:${companyInfo.phone[0]}` },
              { icon: Envelope, label: 'Email', value: companyInfo.email, sub: 'Quick response', href: `mailto:${companyInfo.email}` },
              { icon: MapPin, label: 'Visit Us', value: '14 Barrow Road', sub: 'Southerton, Harare', href: '#' },
              { icon: Clock, label: 'Hours', value: 'Mon-Fri: 7AM-5PM', sub: 'Sat: 8AM-1PM', href: '#' },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <StaggerItem key={label}>
                <a href={href} className="block bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl hover:border-sorwil-blue/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-sorwil-red/5 group-hover:bg-sorwil-red/10 flex items-center justify-center mb-4 transition-colors"><Icon size={22} className="text-sorwil-red" weight="duotone" /></div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{label}</div>
                  <div className="text-sm font-bold text-sorwil-navy">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedSection variant="fadeRight" className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10">
                <h2 className="text-display-md text-sorwil-navy mb-2">Send a Message</h2>
                <p className="text-gray-500 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Full Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="Your name" /></div>
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="you@company.com" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="+263 7XX XXX XXX" /></div>
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Subject</label><select value={formData.subject} onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all appearance-none"><option value="">Select subject</option><option>Product Inquiry</option><option>Quote Request</option><option>Technical Support</option><option>Partnership</option><option>Other</option></select></div>
                  </div>
                  <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Message</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all resize-none" placeholder="Tell us about your project..." /></div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-sorwil-red hover:bg-sorwil-red-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20">Send Message <PaperPlaneTilt size={18} weight="bold" /></button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeLeft" delay={0.2} className="lg:col-span-2">
              <div className="bg-sorwil-navy rounded-3xl overflow-hidden h-full min-h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sorwil-blue/20 to-sorwil-navy"><div className="absolute inset-0 grid-pattern opacity-10" /></div>
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sorwil-red/20 flex items-center justify-center mb-6"><MapPin size={24} className="text-sorwil-red" weight="fill" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Visit Our Facility</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">14 Barrow Road, Southerton<br />Harare, Zimbabwe</p>
                    <div className="space-y-3">
                      <div className="text-sm text-white/50"><span className="font-semibold text-white/70">Mon - Fri:</span> 7:00 AM - 5:00 PM</div>
                      <div className="text-sm text-white/50"><span className="font-semibold text-white/70">Saturday:</span> 8:00 AM - 1:00 PM</div>
                      <div className="text-sm text-white/50"><span className="font-semibold text-white/70">Sunday:</span> Closed</div>
                    </div>
                  </div>
                  <div className="space-y-3 mt-8">
                    <a href="https://wa.me/263772203806" className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors"><WhatsappLogo size={18} weight="fill" /> WhatsApp Us</a>
                    <a href={`tel:${companyInfo.phone[0]}`} className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold rounded-xl transition-colors"><Phone size={18} /> Call Direct</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
