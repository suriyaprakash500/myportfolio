import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-b from-amber-900/90 to-black/90 border-2 border-amber-700/50 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-amber-500/70">
      <div className="absolute inset-0 bg-[url('/marble-texture.jpg')] opacity-10 mix-blend-overlay" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-serif font-bold text-amber-200 tracking-wide border-b-2 border-amber-700/50 pb-2">{title}</h3>
          <div className="w-12 h-12 rounded-full bg-amber-800/30 flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-amber-300 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        <p className="text-amber-100/90 leading-relaxed font-serif text-lg mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-sm bg-amber-800/40 text-amber-200 px-3 py-1.5 rounded-full border border-amber-700/30 hover:bg-amber-800/60 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors group-hover:underline"
        >
          Explore Project
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}
