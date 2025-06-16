import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <div className="frame group relative overflow-hidden bg-black/70 border border-amber-700 rounded-lg p-6 shadow-lg">
      <div className="relative">
        <h3 className="text-xl font-bold text-amber-300">{title}</h3>
        <p className="text-amber-100 mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-amber-800 text-amber-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-300 mt-4 hover:underline">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
