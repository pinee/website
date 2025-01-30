import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  company: string
  position: string
  location: string
  date: string
  description: string[]
  skills: string[]
  technologies: string[]
  overview: string
}

const experiences: Experience[] = [
  {
    company: "American Express",
    position: "MBA Intern | Investment Optimization - Consumer",
    location: "New York City, USA",
    date: "2024",
    description: [
      "Led cross-team collaboration to identify factors impacting the marketing budget; built a python based ML model to predict monthly budget and a dashboard linking key inputs to budget outcomes; improved forecast by 20% driving projected cost reduction of 10%",
      "Recognized need for unified platform for granular planned and actual data; interviewed 20+ stakeholders to uncover use cases & pain points; designed a data analytics platform using Figma integrating complex databases, doubling productivity and halving work time",
    ],
    skills: [
      "Cross-functional leadership",
      "Machine learning model development",
      "Stakeholder management",
      "Data analytics platform design",
      "User experience design",
    ],
    technologies: ["Python", "Machine Learning", "Figma", "Data Analytics"],
    overview:
      "This internship provided hands-on experience in applying machine learning to financial forecasting and designing data analytics platforms. It built upon my previous experiences by allowing me to lead cross-functional teams and design user-centric solutions in a Fortune 500 company setting.",
  },
  {
    company: "Goldman Sachs (Consumer Banking)",
    position: "Data Scientist: Associate | Senior Analyst",
    location: "Bangalore, India",
    date: "2020-2023",
    description: [
      "Led the development of a decision service for credit card transactions by defining the product vision, performing ROI analysis, and gaining leadership approval; projected $100M+ savings within 3 years and secured $1M budget for pilot",
      "Researched with 20+ engineers to assess feasibility, created a product roadmap, authored PRD, and secured engineering prioritization",
      "Collaborated with engineering and DevOps teams to design product roadmap, define timelines, and key milestones; worked to create and manage PERT charts and JIRA tickets, and outlined test cases and acceptance criteria, launching pilot in 6 months",
      "Formulated key metrics to monitor system performance; cut down error from >10% to 1%; calculated business impact of error",
      "Achieved $50M in 1 year in savings since MVP launch by reducing 3rd party vendor reliance; expanded to other banking products",
      "Defined metrics to measure fraud loss and customer experience; segmented transactions and built a waterfall framework to isolate fraud patterns, enabling swift action; achieved $70M savings for Apple and reduced GM fraud loss by 40% within 2 months of launch",
      "Developed a random forest algorithm to detect fraud patterns from 1B+ monthly data points using PySpark; designed an intuitive UI with parameter tuning, enabling use by 10+ strategy teams and doubling tool deployment and model adoption",
      "Elevated dispute investigation tool by mapping customer journey for fraud disputes, implemented logic for auto case closure and worked with agents to streamline the process for false declines; cut down dispute volume by 50% and freed up 15+ agent hours weekly",
      "Collaborated with data engg team to build data pipelines using Snowflake, Airflow integrating vendor data from Mastercard, FICO & internal scoring service using Kafka, Deltalake equipped to handle 10M+ transactions per month; prevented 3+ fraud attacks of $10M",
      "Conducted social media research and used advanced statistical methods to identify patterns in declined genuine transactions; reduced declines to less than 35 bps and attained rank 1 in J.D. Power's US Consumer Lending Satisfaction Study for Apple Card",
      "Built KPI dashboard using Tableau and Airflow; deployed fraud alerts using Splunk; managed portfolio of $8B+ annual revenue",
    ],
    skills: [
      "Product development",
      "ROI analysis",
      "Project management",
      "Machine learning algorithm development",
      "Data pipeline construction",
      "Fraud detection",
      "Customer journey mapping",
      "Statistical analysis",
      "Portfolio management",
    ],
    technologies: ["PySpark", "Snowflake", "Airflow", "Kafka", "Deltalake", "Tableau", "Splunk", "JIRA"],
    overview:
      "At Goldman Sachs, I transitioned from analytics to full-scale product development and management. This role allowed me to lead end-to-end projects, from conceptualization to implementation, significantly impacting fraud detection and customer experience in consumer banking. It built upon my previous experience by expanding my skills in machine learning, data engineering, and product management in a complex financial services environment.",
  },
  {
    company: "Flipkart",
    position: "Product Analytics, Inventory and Demand Planning",
    location: "Bangalore, India",
    date: "2019-2020",
    description: [
      "Developed and deployed ML-based sales forecasting model for Luggage and Travel category generating $30 Mn annual revenue; consolidated expected sales with inventory planning dashboard improving budget Vs. actual sales accuracy by 50%",
      "Built portable python codebase (2x faster than existing codebase) to fix reporting pipeline under stress and time crunch of < 12 hours during annual flagship Big Billion Day sale (Oct 2020) catalyzing visibility for $1 Bn+ revenue for management",
    ],
    skills: [
      "Machine learning model development",
      "Sales forecasting",
      "Inventory planning",
      "Python codebase optimization",
      "Data pipeline development",
    ],
    technologies: ["Python", "Machine Learning", "Data Analytics"],
    overview:
      "This was my first job out of school, allowing me to explore my interests in machine learning and analytics. At Flipkart, I gained hands-on experience in applying ML to real-world business problems in e-commerce, particularly in sales forecasting and inventory management. This role laid the foundation for my career in data science and analytics.",
  },
]

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gray-100">
              <CardTitle>{exp.position}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.location} | {exp.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4 text-sm italic">{exp.overview}</p>
              <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Skills Developed:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {exp.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Technologies Used:</h3>
              <p>{exp.technologies.join(", ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

