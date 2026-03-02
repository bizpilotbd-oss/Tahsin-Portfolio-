import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-emerald-500 hover:text-emerald-400 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            Tahsin<span className="text-emerald-500">.</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full ${tag.bgClass} ${tag.textClass}`}>
                  {tag.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              {project.shortDescription}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 mb-16"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Full Details</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900 p-8 rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold mb-6">Key Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-6 h-6 shrink-0 ${project.tags[0].textClass}`} />
                      <span className="text-zinc-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-500/10 p-8 rounded-[2rem] border border-emerald-500/20 text-center">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Want similar results?</h3>
                <p className="text-zinc-400 mb-6 text-sm">Let's discuss how we can scale your business.</p>
                <Link to="/#contact" className="inline-block w-full py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-zinc-500 text-sm mt-20">
        <p>© {new Date().getFullYear()} Tahsin. All rights reserved.</p>
      </footer>
    </div>
  );
}
