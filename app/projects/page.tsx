import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Challenge {
  problem: string
  solution: string
}

interface Project {
  title: string
  description: string
  technologies: string[]
  context?: string
  problems?: string[]
  actions?: string[]
  challenges?: Challenge[]
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
  {
    title: "Claude Code-Based Ticket Segmentation Model",
    description:
      "Built a Claude Code-based classification model that automatically segments each incoming developer question/ticket into L1, L2, and L3 levels.",
    technologies: ["Claude Code", "Claude Skills", "SQL", "Databricks", "MCP"],
    context:
      "As a Support PM, our team had no automatic way of tagging different types of incoming tickets, making prioritization and analysis manual and inconsistent.",
    problems: [
      "Support team was unable to prioritize tickets based on ticket type.",
      "No way to conduct post-analysis to isolate effects on team metrics such as resolution SLA and contact rate based on the type of developer question.",
      "No way to know the ticket volume coming into each category in order to prioritize product building that reduces ticket volume.",
    ],
    actions: [
      "Worked with PMs and engineers to define an L1, L2, and L3 map and secured sign-off so that each ticket type maps to a specific segment. For example, Compliance, FX, and Wallets were distinct L1 categories, and each L1 had its own L2s — Compliance included KYC, KYB, Customer API, etc.",
      "Built a Claude skill that inspects key words in the message, runs SQL queries in the backend to check conditions, and maps each ticket accordingly.",
      "Built a human-in-the-loop process with support agents to continuously monitor segmentation quality and deploy weekly changes to refine and fine-tune the logic.",
      "Conducted weekly meetings with PMs across the wider organization to highlight upticks in certain segments or volume in specific categories and discuss potential solutions.",
    ],
    challenges: [
      {
        problem: "Incorrect segmentation for unknown ticket patterns due to AI hallucination.",
        solution:
          "Introduced a human-in-the-loop check and changed prompts so the AI only classifies when certain checks are fulfilled, labeling tickets as \"Others\" when not confident so they can be manually reviewed.",
      },
      {
        problem:
          "Data issues leading to incomplete data in background tables, causing incorrect classification or delay/failure of daily routine checks.",
        solution:
          "Built dashboards and alerts that monitor the data quality of background tables and notify the DS team when issues arise.",
      },
      {
        problem: "MCP disconnects while running daily routines.",
        solution:
          "Ran the skill using multiple subagents and added Databricks warm-up and other engineering fixtures to the skill to ensure successful routine runs.",
      },
    ],
  },
  // Add more professional/work projects here as needed
]

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">{title}</h4>
      <ul className="list-disc pl-5 flex flex-col gap-1.5 leading-relaxed">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const hasDetails = project.context || project.problems || project.actions || project.challenges

  return (
    <Card className={hasDetails ? "md:col-span-2" : undefined}>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2 leading-relaxed">{project.description}</p>

        {project.context && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">Context</h4>
            <p className="leading-relaxed">{project.context}</p>
          </div>
        )}

        {project.problems && <DetailList title="Problems" items={project.problems} />}
        {project.actions && <DetailList title="Actions" items={project.actions} />}

        {project.challenges && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">Challenges</h4>
            <ul className="flex flex-col gap-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">Challenge:</span> {challenge.problem}
                  <br />
                  <span className="font-medium">Solution:</span> {challenge.solution}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-4">
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      </CardContent>
    </Card>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">No projects to show yet.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
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
