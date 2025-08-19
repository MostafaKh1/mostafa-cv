import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  slug: string
  image?: string
  shortDescription?: string
}

export function ProjectCard({ title, category, slug, shortDescription }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <Card className="bg-zinc-800/50 border-zinc-700 hover:border-cyan-500/50 transition-colors p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-cyan-400 mb-1">{category}</div>
            <h3 className="font-medium text-sm sm:text-base">{title}</h3>
            {shortDescription && (
              <p className="mt-1 text-xs sm:text-sm text-zinc-400 line-clamp-2">{shortDescription}</p>
            )}
          </div>
          <span className="text-cyan-400 text-xs">View</span>
        </div>
      </Card>
    </Link>
  )
}
