import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Play, Star, Quotes,
  Lightning, ShieldCheck, Truck, Ruler, Factory, Buildings,
  ArrowUpRight, CaretRight, Cube, GridNine, Columns,
  Phone, Envelope, Sparkle, Stack, Target,
  GlobeHemisphereWest, Gear, Scales, Certificate
} from '@phosphor-icons/react';
import { AnimatedSection, StaggerChildren, StaggerItem, CountUp, MagneticButton, ParallaxImage } from '../components/AnimatedSection';
import { images, products, services, stats, testimonials, companyInfo } from '../data/content';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <IntroStatement />
      <ProductsShowcase />
      <AboutPreview />
      <StatsSection />
      <ServicesGrid />
      <ParallaxDivider />
      <TestimonialsSection />
      <ProjectsCTA />
      <WhyChooseUs />
      <PartnersLogos />
      <NewsletterSection />
    </main>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: images.hero, title: ['Building', "Tomorrow's", 'Infrastructure'], subtitle: "Zimbabwe's #1 Steel Distribution & Fabrication Partner", accent: "Tomorrow's" },
    { image: images.hero3, title: ['Precision', 'Engineered', 'Steel Solutions'], subtitle: 'From concept to completion — excellence in every beam', accent: 'Engineered' },
    { image: images.hero2, title: ['Strength', 'You Can', 'Build On'], subtitle: 'Over 25 years delivering structural integrity', accent: 'Can' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden bg-[#0a1628]">
      <AnimatePresence>
        <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0" style={{ y, scale }}>
          <motion.img src={slides[currentSlide].image} alt="Sorwil Steel" className="w-full h-full object-cover"
            initial={{ scale: 1.1 }} animate={{ scale: 1.05 }} transition={{ duration: 6, ease: 'linear' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-white/[0.03] rounded-full" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] right-[5%] w-[350px] h-[350px] border border-white/[0.04] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-px bg-gradient-to-l from-[#d42027]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-[30%] w-px bg-gradient-to-t from-[#d42027]/30 to-transparent" />
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} />
        ))}
      </div>

      <motion.div style={{ opacity, y: textY }} className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#d42027] animate-pulse" />
              <span className="text-xs font-semibold text-white/60 tracking-[0.15em] uppercase">Est. 1999 — Harare, Zimbabwe</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} className="overflow-hidden">
                {slides[currentSlide].title.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1 initial={{ y: 120, opacity: 0, skewY: 4 }} animate={{ y: 0, opacity: 1, skewY: 0 }} exit={{ y: -60, opacity: 0 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="text-display-xl text-white leading-[0.95]">
                      {line === slides[currentSlide].accent ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d42027] via-[#ff6b6b] to-[#d42027]">{line}</span>
                      ) : line}
                    </motion.h1>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="text-lg lg:text-xl text-white/40 mt-8 max-w-lg leading-relaxed font-light">
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-wrap gap-4 mt-10">
              <MagneticButton>
                <Link to="/products" className="group relative flex items-center gap-3 px-9 py-4 bg-[#d42027] text-white font-bold rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Products <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div className="absolute inset-0 bg-[#a8181e]" initial={{ x: '-100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/about" className="group flex items-center gap-3 px-9 py-4 bg-white/[0.04] backdrop-blur-xl hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 hover:border-white/20">
                  <Play size={18} weight="fill" className="text-[#d42027]" /> Our Story
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
              className="hidden lg:flex items-center gap-8 mt-16 pt-8 border-t border-white/5">
              <a href={`tel:${companyInfo.phone[0]}`} className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors">
                <Phone size={14} className="text-[#d42027]" /> {companyInfo.phone[0]}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors">
                <Envelope size={14} className="text-[#d42027]" /> {companyInfo.email}
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-4 lg:left-8 flex items-center gap-3">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
                style={{ width: i === currentSlide ? 48 : 24 }}>
                <div className="absolute inset-0 bg-white/20" />
                {i === currentSlide && (
                  <motion.div className="absolute inset-0 bg-[#d42027] rounded-full"
                    initial={{ scaleX: 0, transformOrigin: 'left' }} animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: 'linear' }} key={`p-${currentSlide}`} />
                )}
              </button>
            ))}
            <span className="text-xs font-mono text-white/20 ml-3">0{currentSlide + 1}/0{slides.length}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
            className="absolute bottom-12 right-4 lg:right-8 flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.35em] text-white/20 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <ArrowDown size={14} className="text-white/20" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  const items = ['DEFORMED BARS', 'MESH WIRE', 'ANGLE IRON', 'FLAT BARS', 'BEAMS & LINTELS', 'CUTTING & BENDING', 'FABRICATION', 'SPECIAL FOUNDATIONS', 'WINDOW SECTIONS', 'DECK PANS'];
  return (
    <div className="bg-[#0a1628] border-y border-white/[0.03] py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-10 text-[13px] font-bold tracking-[0.25em] text-white/[0.07] uppercase flex items-center gap-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d42027]/20" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}

function IntroStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-white overflow-hidden">
      <motion.div style={{ opacity: textOpacity }} className="relative max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection variant="blur">
          <Sparkle size={28} className="text-[#d42027] mx-auto mb-6" weight="fill" />
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-[#0a1628] leading-[1.15] tracking-tight">
            We don't just distribute steel.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a3a6b] to-[#2a5aa8]">We engineer confidence</span>{' '}
            in every structure that rises from the ground.
          </h2>
          <div className="flex items-center justify-center gap-6 mt-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d42027]" />
            <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Since 1999</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d42027]" />
          </div>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}

function ProductsShowcase() {
  const featured = products.slice(0, 6);
  const iconMap = { Barbell: Cube, GridNine: GridNine, ArrowsOutCardinal: ArrowUpRight, Minus: Ruler, Columns: Columns, FrameCorners: Buildings };
  return (
    <section className="relative py-32 bg-[#f5f6f8] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a3a6b] via-[#d42027] to-[#1a3a6b]" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <AnimatedSection variant="fadeRight">
            <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Our Products</span>
            <h2 className="text-display-lg text-[#0a1628] mt-3">Steel Solutions for<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a3a6b] to-[#2a5aa8]">Every Project</span></h2>
          </AnimatedSection>
          <AnimatedSection variant="fadeLeft" delay={0.2}>
            <p className="text-gray-500 max-w-md text-body-lg">From reinforcement to structural steel, we supply the complete range for construction excellence.</p>
          </AnimatedSection>
        </div>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
          {featured.map((product, i) => {
            const Icon = iconMap[product.icon] || Cube;
            const isLarge = i === 0 || i === 3;
            return (
              <StaggerItem key={product.id} className={isLarge ? 'lg:col-span-2' : ''}>
                <Link to={`/products#${product.id}`} className="group block h-full">
                  <div className={`relative h-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white hover:border-[#1a3a6b]/20 transition-all duration-500 hover:shadow-2xl ${isLarge ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[80px] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className={`flex ${isLarge ? 'flex-col lg:flex-row lg:items-center gap-8' : 'flex-col gap-5'}`}>
                      <div className={`${isLarge ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-[#0a1628]/[0.03] group-hover:bg-[#d42027]/10 flex items-center justify-center transition-all duration-500 flex-shrink-0`}>
                        <Icon size={isLarge ? 28 : 22} className="text-[#0a1628]/60 group-hover:text-[#d42027] transition-colors duration-500" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#1a3a6b]/[0.06] text-[#1a3a6b] font-semibold uppercase tracking-wider">{product.category}</span>
                        <h3 className={`font-bold text-[#0a1628] group-hover:text-[#1a3a6b] transition-colors mt-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>{product.name}</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">{product.description}</p>
                        {isLarge && <div className="flex flex-wrap gap-2 mt-4">{product.features.map(f => (<span key={f} className="text-[11px] px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 border border-gray-100">{f}</span>))}</div>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#d42027] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Details <ArrowRight size={14} weight="bold" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3a6b] to-[#d42027] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
        <AnimatedSection variant="fadeUp" delay={0.3} className="text-center mt-14">
          <Link to="/products" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0a1628] text-white font-bold rounded-2xl hover:bg-[#1a3a6b] transition-all group shadow-xl">
            View Full Catalog <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <AnimatedSection variant="fadeRight" className="lg:col-span-5 relative">
            <div className="relative">
              <ParallaxImage src={images.about} alt="Sorwil Steel Facility" className="rounded-3xl aspect-[4/5] shadow-2xl bg-[#0a1628]/10" />
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -right-4 lg:-right-8 -bottom-8 bg-[#0a1628] text-white rounded-2xl p-6 shadow-2xl border border-white/5">
                <div className="text-5xl font-extrabold text-[#d42027] leading-none">25+</div>
                <div className="text-sm text-white/50 mt-1.5 font-medium">Years of<br/>Excellence</div>
              </motion.div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#1a3a6b]/15 rounded-tl-3xl" />
            </div>
          </AnimatedSection>
          <div className="lg:col-span-7 lg:pl-4">
            <AnimatedSection variant="fadeLeft">
              <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">About Sorwil Steel</span>
              <h2 className="text-display-lg text-[#0a1628] mt-3 mb-6">A Legacy of Steel,<br />A Foundation of <span className="text-[#1a3a6b]">Trust</span></h2>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-gray-500 text-body-lg mb-5 leading-relaxed">For over two decades, Sorwil Steel has been Zimbabwe's cornerstone of construction excellence. From our base at 14 Barrow Road, Southerton, we've supplied and fabricated steel for the nation's most ambitious projects.</p>
              <p className="text-gray-500 text-body-lg mb-8 leading-relaxed">With in-house CNC cutting and bending, structural fabrication, and a dedicated technical team, we deliver complete steel solutions.</p>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-2 gap-3 mb-8" staggerDelay={0.08}>
              {[
                { icon: ShieldCheck, label: 'ISO Certified Quality', color: 'from-blue-500/10 to-blue-600/5' },
                { icon: Lightning, label: '24-Hour Delivery', color: 'from-amber-500/10 to-amber-600/5' },
                { icon: Truck, label: 'Nationwide Distribution', color: 'from-green-500/10 to-green-600/5' },
                { icon: Factory, label: 'In-House Fabrication', color: 'from-red-500/10 to-red-600/5' },
              ].map(({ icon: Icon, label, color }) => (
                <StaggerItem key={label}>
                  <div className={`flex items-center gap-3 p-4 bg-gradient-to-br ${color} rounded-xl border border-gray-100/80 hover:shadow-md transition-all`}>
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={18} className="text-[#d42027]" weight="duotone" />
                    </div>
                    <span className="text-sm font-semibold text-[#0a1628]">{label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <AnimatedSection variant="fadeUp" delay={0.3}>
              <Link to="/about" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a1628] hover:bg-[#1a3a6b] text-white font-bold rounded-2xl transition-all shadow-xl">
                Discover Our Story <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2240] to-[#0a1628]" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">By The Numbers</span>
          <h2 className="text-display-md text-white mt-3">Impact at Scale</h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-white/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6">
                  <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight"><CountUp end={stat.value} suffix={stat.suffix} /></div>
                  <div className="text-sm font-bold text-[#d42027] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-xs text-white/25 leading-relaxed">{stat.description}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const iconMap = { Scissors: Ruler, Wrench: Factory, Gear: Gear, House: Cube, Door: Columns, Wall: GridNine };
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">What We Do</span>
          <h2 className="text-display-lg text-[#0a1628] mt-3">Comprehensive Steel<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d42027] to-[#ff6b6b]">Services & Capabilities</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Factory;
            return (
              <AnimatedSection key={service.id} variant="fadeUp" delay={i * 0.08}>
                <Link to={`/services#${service.id}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-gray-100 bg-white hover:bg-[#0a1628] transition-all duration-700 p-8 hover:shadow-2xl">
                    <div className="absolute top-6 right-6 text-7xl font-black text-gray-50 group-hover:text-white/[0.04] transition-colors duration-700 select-none leading-none">0{i + 1}</div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-[#0a1628]/[0.04] group-hover:bg-[#d42027]/15 flex items-center justify-center mb-6 transition-all duration-700">
                        <Icon size={26} className="text-[#0a1628]/70 group-hover:text-[#d42027] transition-colors duration-700" weight="duotone" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-white mb-3 transition-colors duration-700">{service.title}</h3>
                      <p className="text-sm text-gray-400 group-hover:text-white/40 leading-relaxed mb-6 transition-colors duration-700">{service.description}</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#d42027]">Learn More <CaretRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" /></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1a3a6b] to-[#d42027] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  return (
    <section ref={ref} className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={images.hero3} alt="Steel fabrication" className="w-full h-[140%] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/50 to-[#0a1628]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <AnimatedSection variant="scale">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            Where <span className="text-[#d42027]">Precision</span> Meets <span className="text-[#2a5aa8]">Performance</span>
          </h2>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative py-32 bg-[#f5f6f8] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Testimonials</span>
          <h2 className="text-display-lg text-[#0a1628] mt-3">Trusted by Industry Leaders</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-10 lg:p-14 shadow-xl border border-gray-100 text-center relative">
              <Quotes size={40} weight="fill" className="text-[#d42027]/10 mx-auto mb-6" />
              <p className="text-xl lg:text-2xl text-[#0a1628] font-medium leading-relaxed mb-8">"{testimonials[active].text}"</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonials[active].rating)].map((_, i) => (<Star key={i} size={16} weight="fill" className="text-amber-400" />))}
              </div>
              <div className="font-bold text-[#0a1628] text-lg">{testimonials[active].name}</div>
              <div className="text-sm text-gray-400">{testimonials[active].role}, {testimonials[active].company}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? 'w-8 h-2 bg-[#d42027]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.construction} alt="Construction" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant="fadeRight">
            <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Portfolio</span>
            <h2 className="text-display-lg text-white mt-3 mb-6">See What We've Built</h2>
            <p className="text-white/40 text-body-lg mb-8 max-w-lg">From high-rise developments to industrial complexes, our steel has formed the backbone of Zimbabwe's most significant construction projects.</p>
            <Link to="/projects" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a1628] font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
              View Projects <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
          <AnimatedSection variant="fadeLeft" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Commercial', count: '150+', icon: Buildings },
                { label: 'Industrial', count: '200+', icon: Factory },
                { label: 'Infrastructure', count: '80+', icon: GlobeHemisphereWest },
                { label: 'Residential', count: '100+', icon: Cube },
              ].map(({ icon: Icon, ...item }) => (
                <motion.div key={item.label} whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <Icon size={20} className="text-[#d42027] mb-3" weight="duotone" />
                  <div className="text-3xl font-extrabold text-white">{item.count}</div>
                  <div className="text-sm font-semibold text-white/60 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const advantages = [
    { title: 'Unmatched Stock', desc: 'The most comprehensive steel inventory in Zimbabwe.', icon: Stack, gradient: 'from-blue-500 to-blue-600' },
    { title: 'Technical Expertise', desc: 'Our engineers optimize schedules and reduce waste.', icon: Target, gradient: 'from-red-500 to-red-600' },
    { title: 'Speed of Delivery', desc: 'Same-day dispatch. Our fleet covers all of Zimbabwe.', icon: Lightning, gradient: 'from-amber-500 to-amber-600' },
    { title: 'Competitive Pricing', desc: 'Direct imports and bulk purchasing power.', icon: Scales, gradient: 'from-emerald-500 to-emerald-600' },
    { title: 'Quality Assurance', desc: 'Every batch tested. Full traceability mill to site.', icon: Certificate, gradient: 'from-purple-500 to-purple-600' },
    { title: 'One-Stop Solution', desc: 'Supply, fabrication, and erection — all in-house.', icon: Gear, gradient: 'from-cyan-500 to-cyan-600' },
  ];
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Why Sorwil</span>
          <h2 className="text-display-lg text-[#0a1628] mt-3">The Sorwil Advantage</h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
          {advantages.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div whileHover={{ y: -6 }}
                className="rounded-2xl p-8 bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 h-full group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className="text-white" weight="bold" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function PartnersLogos() {
  const logos = ['ZIMALLOYS', 'LAFARGE', 'MASIMBA', 'NATIONAL FOODS', 'OLD MUTUAL', 'ECONET', 'DELTA', 'ZPC'];
  return (
    <section className="relative py-20 bg-[#f5f6f8] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-gray-400 font-semibold uppercase">Trusted by leading organizations across Zimbabwe</p>
        </AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {logos.map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-lg lg:text-xl font-extrabold tracking-wider text-gray-200 hover:text-[#1a3a6b] transition-colors duration-300 cursor-default">{name}</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <span className="text-xs tracking-[0.3em] text-[#d42027] font-bold uppercase">Stay Updated</span>
          <h2 className="text-display-md text-[#0a1628] mt-3 mb-4">Industry Insights & News</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Get the latest steel prices, product updates, and construction industry news.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#1a3a6b] transition-all" />
            <button className="px-8 py-4 bg-[#d42027] hover:bg-[#a8181e] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={16} weight="bold" />
            </button>
          </div>
          <p className="text-xs text-gray-300 mt-4">No spam. Unsubscribe anytime.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
