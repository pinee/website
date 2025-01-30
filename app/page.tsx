import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Prutha Kale's Personal Website</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="float-left mr-6 mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prutha_headshot-Nxl6eq2vhDH1ixkNRaLj4UfZZ7blLT.jpeg"
            alt="Prutha Kale"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="space-y-4">
          <p>
            Hello! I'm Prutha Kale, a passionate MBA candidate at The Wharton School, University of Pennsylvania, with a
            background in Data Science and Product Management. I have expertise in AI/ML, fraud detection, and product
            development.
          </p>
          <p>
            I'm currently pursuing my MBA at The Wharton School, University of Pennsylvania, with a double major in
            Entrepreneurship and Finance (STEM).
          </p>
          <p>
            Prior to Wharton, I completed my B. Tech. and M. Tech in Aerospace Engineering from the Indian Institute of
            Technology Kharagpur (IIT-KGP), where I graduated with a GPA of 9.04 and ranked 2nd in my department.
          </p>

          <h3 className="text-xl font-semibold pt-2">Technical Skills</h3>
          <p>Python, PySpark, Git, SQL, NoSQL, JIRA, Figma, Excel, Snowflake, Airflow, Tableau, Docker, Splunk, AWS</p>

          <h3 className="text-xl font-semibold pt-2">Relevant Courses</h3>
          <ul className="list-disc pl-5">
            <li>Graph Theory</li>
            <li>Econometric Analysis</li>
            <li>Probability and Statistics</li>
            <li>Programming and Data Structures</li>
            <li>Object Oriented Programming</li>
            <li>Machine Learning by Andrew Ng</li>
          </ul>
        </div>
      </section>
      <div className="clear-both"></div>

      <p>
        Feel free to explore my work experiences, check out my projects, dive into my research, or read my blog posts
        about product management and AI/ML.
      </p>
    </div>
  )
}

