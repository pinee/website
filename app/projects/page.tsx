import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  technologies: string[]
}

const personalProjects: Project[] = [
  {
    title: "AI-Powered Wardrobe Management App",
    description:
      "Developed a full-stack app for wardrobe management using GenAI (Vercel, Cursor.ai) to solve decision fatigue in clothing choices.",
    technologies: ["Vercel", "Cursor.ai", "GenAI"],
  },
  // You can add more personal projects here as needed
]

const professionalProjects: Project[] = [
  // Add your professional/work projects here as needed
]

function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">No projects to show yet.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-3xl font-bold mb-6">Personal Projects</h1>
        <ProjectGrid projects={personalProjects} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Professional Projects</h2>
        <ProjectGrid projects={professionalProjects} />
      </section>
    </div>
  )
}
