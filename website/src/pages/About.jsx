import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Target, Leaf, Certificate, Lightning, ShieldCheck, Handshake, Heart, Globe } from '@phosphor-icons/react';
import { AnimatedSection, StaggerChildren, StaggerItem, ParallaxImage } from '../components/AnimatedSection';
import { images, companyInfo } from '../data/content';

export default function About() {
  return (<main><AboutHero /><StoryTimeline /><ValuesSection /><LeadershipTeam /><CertificationsSection /><SustainabilitySection /></main>);
}

function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0"><img src={images.about} alt="Sorwil Steel" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-sorwil-navy via-sorwil-navy/80 to-sorwil-navy/40" /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"><span className="text-xs font-medium text-white/60 tracking-wider uppercase">About Sorwil Steel</span></span>
          <h1 className="text-display-xl text-white mb-6">Forged in<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Excellence</span></h1>
          <p className="text-lg text-white/50 max-w-lg leading-relaxed">Since 1999, we've been shaping Zimbabwe's skyline with unwavering commitment to quality, innovation, and the communities we serve.</p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  );
}

function StoryTimeline() {
  const milestones = [
    { year: '1999', title: 'The Beginning', desc: "Founded in Southerton, Harare with a vision to transform Zimbabwe's steel supply chain." },
    { year: '2005', title: 'First Expansion', desc: 'Opened our cut-and-bend facility, first in Zimbabwe to offer CNC steel processing.' },
    { year: '2010', title: 'Regional Growth', desc: 'Extended distribution network across Zimbabwe — Bulawayo, Mutare, Masvingo.' },
    { year: '2015', title: 'Fabrication Division', desc: 'Launched structural steel fabrication offering complete design-to-installation packages.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Implemented digital inventory management and online ordering for faster service.' },
    { year: '2024', title: 'Market Leadership', desc: "Recognized as Zimbabwe's #1 steel distributor with the most comprehensive product range." },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Our Journey</span>
          <h2 className="text-display-lg text-sorwil-navy mt-3">25 Years of<br />Building Zimbabwe</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sorwil-red via-sorwil-blue to-sorwil-red/20" />
          {milestones.map((item, i) => (
            <AnimatedSection key={item.year} variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={i * 0.1}>
              <div className={`relative flex items-center gap-8 mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} pl-20 lg:pl-0`}>
                  <div className="inline-block px-4 py-1.5 bg-sorwil-navy text-sorwil-red text-sm font-bold rounded-full mb-3 font-mono">{item.year}</div>
                  <h3 className="text-xl font-bold text-sorwil-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm inline-block">{item.desc}</p>
                </div>
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sorwil-red border-4 border-white shadow-lg" />
                <div className="flex-1 hidden lg:block" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { icon: ShieldCheck, title: 'Integrity', desc: 'Transparency and honesty in every transaction, building trust that lasts generations.' },
    { icon: Target, title: 'Excellence', desc: 'Highest standards in product quality, service delivery, and technical expertise.' },
    { icon: Handshake, title: 'Partnership', desc: "We don't just supply steel — we partner to solve complex construction challenges." },
    { icon: Lightning, title: 'Innovation', desc: 'Continuous investment in technology for faster, smarter steel solutions.' },
    { icon: Heart, title: 'Community', desc: 'Empowering local communities through employment, training, and development.' },
    { icon: Leaf, title: 'Sustainability', desc: 'Responsible steel sourcing and recycling to minimize environmental footprint.' },
  ];
  return (
    <section className="relative py-32 bg-sorwil-gray/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="mb-20">
          <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Core Values</span>
          <h2 className="text-display-lg text-sorwil-navy mt-3">What Drives Us</h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sorwil-blue/10 to-sorwil-red/10 flex items-center justify-center mb-5"><v.icon size={26} className="text-sorwil-blue" weight="duotone" /></div>
                <h3 className="text-lg font-bold text-sorwil-navy mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  const team = [
    { name: 'Wilson Sorwil', role: 'Managing Director', desc: 'Visionary leader with 30+ years in the steel industry.' },
    { name: 'Grace Moyo', role: 'Operations Director', desc: 'Oversees production, logistics, and quality assurance.' },
    { name: 'Eng. Peter Nyathi', role: 'Technical Director', desc: 'Structural engineer leading our fabrication division.' },
    { name: 'Tendai Chikwanha', role: 'Commercial Director', desc: 'Driving sales growth and market expansion strategies.' },
  ];
  return (
    <section id="leadership" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Leadership</span>
          <h2 className="text-display-lg text-sorwil-navy mt-3">Our Team</h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-sorwil-blue/10 to-sorwil-navy/10 border border-gray-100 group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 flex items-center justify-center"><Users size={48} className="text-sorwil-blue/30" /></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sorwil-blue to-sorwil-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-sorwil-navy">{m.name}</h3>
                <div className="text-sm text-sorwil-red font-medium mb-2">{m.role}</div>
                <p className="text-xs text-gray-500">{m.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = [
    { title: 'ISO 9001:2015', desc: 'Quality Management System', icon: Certificate },
    { title: 'SAZ Certified', desc: 'Standards Association of Zimbabwe', icon: ShieldCheck },
    { title: 'SABS Approved', desc: 'South African Bureau of Standards', icon: Trophy },
    { title: 'BS 4449 Compliant', desc: 'British Standard Reinforcement', icon: Globe },
  ];
  return (
    <section id="certifications" className="relative py-24 mesh-gradient overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Certifications</span>
          <h2 className="text-display-md text-white mt-3">Quality You Can Trust</h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {certs.map((c) => (
            <StaggerItem key={c.title}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                <c.icon size={36} className="text-sorwil-red mx-auto mb-4" weight="duotone" />
                <h3 className="font-bold text-white">{c.title}</h3>
                <p className="text-xs text-white/40 mt-1">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant="fadeRight">
            <span className="text-xs tracking-[0.3em] text-sorwil-red font-bold uppercase">Sustainability</span>
            <h2 className="text-display-lg text-sorwil-navy mt-3 mb-6">Building Responsibly</h2>
            <p className="text-gray-600 text-body-lg mb-6">Steel is one of the most recycled materials on earth, and we're committed to maximizing its lifecycle.</p>
            <div className="space-y-4">
              {[{ label: 'Steel recycling rate', value: '92%' }, { label: 'Waste reduction target', value: '50% by 2026' }, { label: 'Local sourcing commitment', value: '70%' }].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold text-green-700">{item.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeLeft" delay={0.2}>
            <ParallaxImage src={images.cityscape} alt="Sustainable operations" className="rounded-3xl aspect-[4/3] shadow-2xl" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
