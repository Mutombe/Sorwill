import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from '@phosphor-icons/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { images } from '../data/content';

const projectData = [
  { id: 1, title: 'Eastgate Mall Extension', category: 'Commercial', location: 'Harare', year: '2023', tonnes: '450', desc: 'Complete structural steel package for the 3-storey retail extension.', image: images.cityscape },
  { id: 2, title: 'Hwange Power Station', category: 'Industrial', location: 'Hwange', year: '2022', tonnes: '1,200', desc: 'Heavy structural steel for turbine hall and auxiliary buildings.', image: images.fabrication },
  { id: 3, title: 'Sam Levy Village Parking', category: 'Commercial', location: 'Harare', year: '2023', tonnes: '320', desc: 'Multi-storey parking structure with composite deck flooring.', image: images.construction },
  { id: 4, title: 'Beitbridge Border Post', category: 'Infrastructure', location: 'Beitbridge', year: '2021', tonnes: '800', desc: 'Steel framework for new customs and immigration facilities.', image: images.bridge },
  { id: 5, title: 'Zimplats Mine Workshop', category: 'Industrial', location: 'Selous', year: '2022', tonnes: '650', desc: 'Portal frame workshop with overhead crane beams.', image: images.warehouse },
  { id: 6, title: 'Avondale Residences', category: 'Residential', location: 'Harare', year: '2024', tonnes: '180', desc: 'Reinforcement steel supply for luxury apartment complex.', image: images.office },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Commercial', 'Industrial', 'Infrastructure', 'Residential'];
  const filtered = filter === 'All' ? projectData : projectData.filter(p => p.category === filter);

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={images.construction} alt="Projects" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-sorwil-navy/95 via-sorwil-navy/80 to-sorwil-navy/50" /><div className="absolute inset-0 bg-gradient-to-t from-sorwil-navy via-transparent to-sorwil-navy/40" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">Portfolio</span></span>
            <h1 className="text-display-xl text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Projects</span></h1>
            <p className="text-lg text-white/50 max-w-lg">Showcasing our finest work across Zimbabwe and beyond.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
      </section>

      <section className="relative py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap mb-16">
            {cats.map((cat) => (<button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-sorwil-navy text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{cat}</button>))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className={`group relative rounded-3xl overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sorwil-navy via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-sorwil-navy/0 group-hover:bg-sorwil-navy/40 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 bg-sorwil-red text-white text-xs font-bold rounded-lg mb-3">{project.category}</span>
                    <h3 className={`font-bold text-white mb-2 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{project.title}</h3>
                    <p className="text-sm text-white/60 mb-3 line-clamp-2">{project.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {project.year}</span>
                      <span>{project.tonnes} tonnes</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"><ArrowUpRight size={16} className="text-white" /></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
