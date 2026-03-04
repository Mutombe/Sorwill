import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, PaperPlaneTilt, ShieldCheck, Clock, Truck } from '@phosphor-icons/react';
import { products, services } from '../data/content';
import { toast } from 'sonner';

export default function Quote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', projectType: '', products: [], services: [], quantity: '', timeline: '', details: '' });

  const handleSubmit = () => { toast.success('Quote request submitted!', { description: 'Our sales team will contact you within 24 hours.' }); setStep(4); };
  const toggleItem = (arr, item, key) => { setForm(p => ({ ...p, [key]: arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item] })); };

  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center mesh-gradient overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <h1 className="text-display-xl text-white mb-4">Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sorwil-red to-[#ff6b6b]">Quote</span></h1>
            <p className="text-lg text-white/50 max-w-lg">Get competitive pricing. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            {['Your Details', 'Requirements', 'Review'].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-sorwil-red text-white shadow-lg shadow-red-500/20' : 'bg-gray-100 text-gray-400'}`}>
                  {step > i + 1 ? <CheckCircle size={18} weight="fill" /> : i + 1}
                </div>
                <span className={`text-sm font-medium hidden sm:block ${step >= i + 1 ? 'text-sorwil-navy' : 'text-gray-400'}`}>{label}</span>
                {i < 2 && <div className={`w-12 lg:w-24 h-0.5 ${step > i + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-sorwil-navy mb-6">Your Information</h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Full Name *</label><input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="Your full name" /></div>
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Company</label><input type="text" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="Company name" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Email *</label><input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="you@company.com" /></div>
                    <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Phone *</label><input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all" placeholder="+263 7XX XXX XXX" /></div>
                  </div>
                  <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Project Type</label><select value={form.projectType} onChange={e => setForm(p => ({ ...p, projectType: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all appearance-none"><option value="">Select type</option><option>Commercial Building</option><option>Residential</option><option>Industrial</option><option>Infrastructure</option><option>Other</option></select></div>
                </div>
                <button onClick={() => setStep(2)} className="mt-8 flex items-center gap-2 px-8 py-4 bg-sorwil-red hover:bg-sorwil-red-dark text-white font-bold rounded-xl transition-all">Next Step <ArrowRight size={16} weight="bold" /></button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-sorwil-navy mb-6">What Do You Need?</h2>
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Products</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {products.map(p => (<button key={p.id} onClick={() => toggleItem(form.products, p.name, 'products')} className={`p-3 rounded-xl text-sm font-medium border transition-all text-left ${form.products.includes(p.name) ? 'bg-sorwil-blue/5 border-sorwil-blue text-sorwil-blue' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>{form.products.includes(p.name) && <CheckCircle size={14} weight="fill" className="inline mr-1" />}{p.name}</button>))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Services</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map(s => (<button key={s.id} onClick={() => toggleItem(form.services, s.title, 'services')} className={`p-3 rounded-xl text-sm font-medium border transition-all text-left ${form.services.includes(s.title) ? 'bg-sorwil-red/5 border-sorwil-red text-sorwil-red' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>{form.services.includes(s.title) && <CheckCircle size={14} weight="fill" className="inline mr-1" />}{s.title}</button>))}
                  </div>
                </div>
                <div><label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Additional Details</label><textarea rows={4} value={form.details} onChange={e => setForm(p => ({ ...p, details: e.target.value }))} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-sorwil-blue transition-all resize-none" placeholder="Specifications, quantities, timeline..." /></div>
                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 flex items-center gap-2"><ArrowLeft size={16} /> Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-sorwil-red hover:bg-sorwil-red-dark text-white font-bold rounded-xl">Review <ArrowRight size={16} weight="bold" /></button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold text-sorwil-navy mb-6">Review Your Request</h2>
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-400">Name:</span> <span className="font-medium text-sorwil-navy">{form.name || '-'}</span></div>
                    <div><span className="text-gray-400">Company:</span> <span className="font-medium text-sorwil-navy">{form.company || '-'}</span></div>
                    <div><span className="text-gray-400">Email:</span> <span className="font-medium text-sorwil-navy">{form.email || '-'}</span></div>
                    <div><span className="text-gray-400">Phone:</span> <span className="font-medium text-sorwil-navy">{form.phone || '-'}</span></div>
                  </div>
                  {form.products.length > 0 && <div className="pt-4 border-t"><span className="text-xs text-gray-400 uppercase tracking-wider">Products:</span><div className="flex flex-wrap gap-2 mt-2">{form.products.map(p => <span key={p} className="px-3 py-1 bg-sorwil-blue/5 text-sorwil-blue text-xs rounded-lg font-medium">{p}</span>)}</div></div>}
                  {form.services.length > 0 && <div className="pt-4 border-t"><span className="text-xs text-gray-400 uppercase tracking-wider">Services:</span><div className="flex flex-wrap gap-2 mt-2">{form.services.map(s => <span key={s} className="px-3 py-1 bg-sorwil-red/5 text-sorwil-red text-xs rounded-lg font-medium">{s}</span>)}</div></div>}
                  {form.details && <div className="pt-4 border-t"><span className="text-xs text-gray-400 uppercase">Details:</span><p className="text-sm text-gray-600 mt-1">{form.details}</p></div>}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 flex items-center gap-2"><ArrowLeft size={16} /> Back</button>
                  <button onClick={handleSubmit} className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-sorwil-red hover:bg-sorwil-red-dark text-white font-bold rounded-xl shadow-lg shadow-red-500/20">Submit <PaperPlaneTilt size={18} weight="bold" /></button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-center py-16">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-green-500" weight="fill" /></motion.div>
                  <h2 className="text-3xl font-bold text-sorwil-navy mb-3">Quote Requested!</h2>
                  <p className="text-gray-500 max-w-md mx-auto mb-8">Thank you! Our sales team will send a detailed quotation within 24 hours.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[{ icon: Clock, label: '24hr response' }, { icon: ShieldCheck, label: 'No obligation' }, { icon: Truck, label: 'Free delivery quotes' }].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg"><Icon size={16} className="text-sorwil-red" weight="duotone" /><span className="text-sm text-gray-600 font-medium">{label}</span></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
