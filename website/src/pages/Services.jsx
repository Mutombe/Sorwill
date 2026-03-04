import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Ruler, Factory, Buildings, Cube, Columns, GridNine } from '@phosphor-icons/react';
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/AnimatedSection';
import { images, services } from '../data/content';

export default function Services() {
  const [expanded, setExpanded] = useState(services[0].id);
  const iconMap = { Scissors: Ruler, Wrench: Factory, Gear: Buildings, House: Cube, Door: Columns, Wall: GridNine };

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={images.fabrication} alt="Steel Services" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-sorwil-navy/95 via-sorwil-navy/80 to-sorwil-navy/50" /><div className="absolute inset-0 bg-gradient-to-t from-sorwil-navy via-transparent to-sorwil-navy/40" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">Our Capabilities</span></span>
            <h1 className="text-display-xl text-white mb-4">Steel <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Services</span></h1>
            <p className="text-lg text-white/50 max-w-lg">End-to-end steel solutions from processing to installation.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(100% 100%, 0 100%, 0 0)' }} />
      </section>

      <section className="relative py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="mb-16">
            <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">What We Offer</span>
            <h2 className="text-display-lg text-sorwil-navy mt-3">Complete Solutions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Factory;
              const isOpen = expanded === service.id;
              return (
                <AnimatedSection key={service.id} variant="fadeUp" delay={i * 0.05}>
                  <div id={service.id} className={`rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen ? 'border-sorwil-blue/20 shadow-xl bg-white' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'}`}>
                    <button onClick={() => setExpanded(isOpen ? null : service.id)} className="w-full flex items-center gap-6 p-6 lg:p-8 text-left">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 ${isOpen ? 'bg-sorwil-red/10' : 'bg-sorwil-navy/5'}`}>
                        <Icon size={24} className={`transition-colors duration-500 ${isOpen ? 'text-sorwil-red' : 'text-sorwil-navy'}`} weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3"><span className="text-xs font-mono text-sorwil-red">0{i + 1}</span><h3 className="text-xl font-bold text-sorwil-navy">{service.title}</h3></div>
                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-sorwil-red rotate-180' : 'bg-gray-100'}`}>
                        {isOpen ? <Minus size={14} className="text-white" weight="bold" /> : <Plus size={14} className="text-gray-500" weight="bold" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          <div className="px-6 lg:px-8 pb-8 pt-2">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <div>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.longDescription}</p>
                                <Link to="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-sorwil-red hover:bg-sorwil-red-dark text-white text-sm font-semibold rounded-xl transition-colors">Request This Service <ArrowRight size={14} weight="bold" /></Link>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(service.stats).map(([key, val]) => (
                                  <div key={key} className="bg-sorwil-gray/50 rounded-2xl p-5">
                                    <div className="text-2xl font-extrabold text-sorwil-navy">{val}</div>
                                    <div className="text-xs text-gray-500 capitalize mt-1">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Our Process</span>
            <h2 className="text-display-md text-white mt-3">How We Work</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[{ step: '01', title: 'Consult', desc: 'We review your specifications and project requirements.' }, { step: '02', title: 'Quote', desc: 'Competitive pricing with detailed material breakdowns.' }, { step: '03', title: 'Process', desc: 'Precision cutting, bending, and fabrication to spec.' }, { step: '04', title: 'Deliver', desc: 'On-time delivery with full quality documentation.' }].map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="text-5xl font-extrabold text-sorwil-red/20 mb-4 font-mono">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
