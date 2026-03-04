import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Funnel, CheckCircle, DownloadSimple, Phone, Cube, GridNine, Columns, Ruler, Buildings, Stack } from '@phosphor-icons/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { images, products, companyInfo } from '../data/content';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);
  const iconMap = { Barbell: Cube, GridNine: GridNine, ArrowsOutCardinal: Ruler, Minus: Ruler, Columns: Columns, FrameCorners: Buildings, Stack: Stack, Cube: Cube };

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={images.products} alt="Steel Products" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-sorwil-navy/95 via-sorwil-navy/80 to-sorwil-navy/50" /><div className="absolute inset-0 bg-gradient-to-t from-sorwil-navy via-transparent to-sorwil-navy/40" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">Product Catalog</span></span>
            <h1 className="text-display-xl text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Products</span></h1>
            <p className="text-lg text-white/50 max-w-lg">Complete range of steel products for every construction requirement.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 30%, 100% 100%)' }} />
      </section>

      <section className="relative py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <Funnel size={18} className="text-gray-400" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeFilter === cat ? 'bg-sorwil-navy text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((product, i) => {
                const Icon = iconMap[product.icon] || Cube;
                return (
                  <motion.div key={product.id} id={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group relative rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:border-sorwil-blue/20 transition-all duration-500 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <img src={images.metalTexture} alt={product.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center"><Icon size={64} className="text-sorwil-navy/10 group-hover:text-sorwil-blue/20 transition-colors" weight="thin" /></div>
                      <div className="absolute top-4 left-4"><span className="px-3 py-1.5 bg-sorwil-navy text-white text-xs font-bold rounded-lg">{product.category}</span></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-sorwil-navy mb-3 group-hover:text-sorwil-blue transition-colors">{product.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {product.features.map((f) => (<div key={f} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle size={14} className="text-green-500 shrink-0" weight="fill" /><span>{f}</span></div>))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link to="/quote" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-sorwil-red hover:bg-sorwil-red-dark text-white text-sm font-semibold rounded-xl transition-colors">Get Quote <ArrowRight size={14} weight="bold" /></Link>
                        <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100"><DownloadSimple size={16} className="text-gray-500" /></button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-24 bg-sorwil-gray/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-display-md text-sorwil-navy mb-4">Can't Find What You Need?</h2>
            <p className="text-gray-500 text-body-lg mb-8">Our product range extends beyond what's listed here. Contact our sales team for special orders.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-sorwil-navy text-white font-bold rounded-2xl hover:bg-sorwil-blue transition-all flex items-center gap-2">Contact Sales <ArrowRight size={16} weight="bold" /></Link>
              <a href={`tel:${companyInfo.phone[0]}`} className="px-8 py-4 bg-white text-sorwil-navy font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2 border border-gray-200"><Phone size={16} /> Call Now</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
