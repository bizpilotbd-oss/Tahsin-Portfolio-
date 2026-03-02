import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, LineChart, Megaphone, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { projects } from '../data/projects';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">
            Tahsin<span className="text-emerald-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                I scale businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">data-driven</span> digital marketing.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                Hi, I'm Tahsin. A Full-Stack Digital Marketer specializing in SEO, PPC, and Web Development. I turn clicks into customers and ideas into revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-colors">
                  Start a Project <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[350px] md:max-w-[450px] lg:ml-auto"
            >
              <div className="relative aspect-[4/5] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Glow effect behind the transparent image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl -z-10" />
                <img 
                  src="https://bhpytzpfkkbfglrzrrba.supabase.co/storage/v1/object/public/image/profile-transparent.png.png" 
                  alt="Tahsin" 
                  className="w-full h-full object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">150%</div>
                    <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Avg. ROI Growth</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-zinc-400 max-w-2xl">Comprehensive digital solutions designed to increase your visibility, drive targeted traffic, and maximize conversions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-zinc-400 leading-relaxed">
                Dominate search rankings with technical SEO, content strategy, and high-quality link building that drives sustainable organic traffic.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PPC Campaigns</h3>
              <p className="text-zinc-400 leading-relaxed">
                Data-driven Google and Meta ad campaigns optimized for maximum ROI. I manage your ad spend like it's my own.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-zinc-400 leading-relaxed">
                High-performance, conversion-optimized websites built with modern tech stacks like React, Tailwind, and Supabase.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-zinc-400 max-w-2xl">A selection of recent projects where I've helped brands scale their digital presence and revenue.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} whileHover={{ y: -5 }} className="group rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className={`absolute inset-0 ${project.overlayClass} mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full ${tag.bgClass} ${tag.textClass}`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">{project.shortDescription}</p>
                  <Link to={`/project/${project.id}`} className={`inline-flex items-center gap-2 text-sm font-semibold text-white ${project.hoverTextClass} transition-colors mt-auto`}>
                    Read Case Study <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale?</h2>
            <p className="text-zinc-400 text-lg">Drop me a message below and let's discuss how we can grow your business together.</p>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-[2rem] border border-white/5">
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-400 mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    Something went wrong. Please make sure you have configured your Supabase credentials in the .env file.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-4 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Tahsin. All rights reserved.</p>
      </footer>
    </div>
  );
}
