import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Research {
  title: string
  description: string
  keyFindings: string[]
  publication?: string
}

const researchWorks: Research[] = [
  {
    title: "Integrated Study Project: Effects of Gen AI on Consumers",
    description:
      "This comprehensive study explores the transformative impact of Generative AI on consumer behavior, business strategies, and workforce dynamics. The research delves into AI-driven innovations in consumer products, enterprise adoption of AI, and the resulting shifts in the job market.",
    keyFindings: [
      "Generative AI is reshaping consumer experiences through personalization, enhanced customer support, and innovative product offerings.",
      "AI adoption in enterprises is driving operational efficiencies and creating new business models, particularly in areas like content creation, healthcare, and fintech.",
      "The job market is undergoing significant transformation, with AI potentially affecting 300 million full-time jobs worldwide while also creating new roles and skills demands.",
      "Investment trends show a shift towards AI-enabled consumer startups, with notable growth in sectors like content creation, healthcare, and productivity tools.",
      "Case studies of companies like Perplexity and Character.ai demonstrate the potential of AI in addressing consumer pain points and creating engaging user experiences.",
      "The research includes a hands-on exercise in developing an AI-powered wardrobe management app, showcasing practical applications of Gen AI in solving consumer problems.",
    ],
    publication: "Wharton School, University of Pennsylvania",
  },
]

export default function ResearchPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Research Work</h1>
      <div className="space-y-6">
        {researchWorks.map((research, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{research.title}</CardTitle>
              {research.publication && <CardDescription>Published in: {research.publication}</CardDescription>}
            </CardHeader>
            <CardContent>
              <p className="mb-4">{research.description}</p>
              <h3 className="font-semibold mb-2">Key Findings:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {research.keyFindings.map((finding, i) => (
                  <li key={i}>{finding}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

