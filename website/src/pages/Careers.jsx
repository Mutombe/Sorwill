import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Briefcase, Buildings, CaretDown, PaperPlaneTilt } from '@phosphor-icons/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { images, careers } from '../data/content';
import { toast } from 'sonner';

export default function Careers() {
  const [expanded, setExpanded] = useState(null);
  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={images.team} alt="Careers" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-sorwil-navy/95 via-sorwil-navy/80 to-sorwil-navy/50" /><div className="absolute inset-0 bg-gradient-to-t from-sorwil-navy via-transparent to-sorwil-navy/40" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">Join Our Team</span></span>
            <h1 className="text-display-xl text-white mb-4">Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Career</span></h1>
            <p className="text-lg text-white/50 max-w-lg">Shape the future of steel in Zimbabwe.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
      </section>

      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[{ icon: '🚀', title: 'Growth', desc: 'Continuous learning and development opportunities.' }, { icon: '🤝', title: 'Team Spirit', desc: 'Dedicated professionals who share your passion.' }, { icon: '💪', title: 'Impact', desc: "Your work shapes Zimbabwe's infrastructure." }].map((item) => (
              <AnimatedSection key={item.title} variant="fadeUp">
                <div className="text-center p-8 rounded-3xl bg-sorwil-gray/30 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-sorwil-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variant="fadeUp" className="mb-12">
            <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Open Positions</span>
            <h2 className="text-display-md text-sorwil-navy mt-3">Current Opportunities</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {careers.map((job) => (
              <AnimatedSection key={job.id} variant="fadeUp">
                <div className={`rounded-2xl border transition-all overflow-hidden ${expanded === job.id ? 'border-sorwil-blue/20 shadow-lg' : 'border-gray-100 hover:border-gray-200'}`}>
                  <button onClick={() => setExpanded(expanded === job.id ? null : job.id)} className="w-full flex items-center justify-between p-6 text-left">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-sorwil-navy/5 flex items-center justify-center shrink-0"><Briefcase size={22} className="text-sorwil-navy" /></div>
                      <div>
                        <h3 className="font-bold text-sorwil-navy text-lg">{job.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Buildings size={12} /> {job.department}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                        </div>
                      </div>
                    </div>
                    <CaretDown size={16} className={`text-gray-400 transition-transform ${expanded === job.id ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expanded === job.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                          <p className="text-gray-600 text-sm leading-relaxed mb-6">{job.description}</p>
                          <button onClick={() => toast.success('Application submitted!', { description: `Applied for: ${job.title}` })} className="inline-flex items-center gap-2 px-6 py-3 bg-sorwil-red hover:bg-sorwil-red-dark text-white text-sm font-semibold rounded-xl transition-colors">
                            Apply Now <PaperPlaneTilt size={14} weight="bold" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
