import { motion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"

const skillGroups = [
  {
    title: "AI & AUTOMATION",
    skills: [
      "AI Workflow Design",
      "Prompt Engineering",
      "Make",
      "n8n",
      "AI APIs",
      "Workflow Logic",
    ],
  },
  {
    title: "DIGITAL OPERATIONS",
    skills: [
      "Process Design",
      "Data Management",
      "CRM Workflows",
      "Content Operations",
      "KYC / Administration",
      "Documentation",
    ],
  },
  {
    title: "TOOLS & TECHNOLOGY",
    skills: [
      "Airtable",
      "Google Workspace",
      "Microsoft Office",
      "Klaviyo",
      "Canva",
      "Photoshop",
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="section-divider px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
      style={{
        background: "var(--bg-primary)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 sm:mb-20">
          <SectionLabel>
            SKILLS & TOOLS
          </SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Tools are useful.
              <span
                className="block"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Systems are the goal.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.1,
              }}
className="interactive-lift interactive-glow rounded-3xl border p-6 sm:p-7"
              style={{
                background:
                  "linear-gradient(145deg, var(--surface-strong), var(--surface))",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center justify-between">
                <p
                  className="text-[10px] font-semibold tracking-[0.22em]"
                  style={{
                    color: "var(--gold)",
                  }}
                >
                  {group.title}
                </p>

                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--wine-light)",
                    boxShadow:
                      "0 0 10px rgba(154,61,88,0.45)",
                  }}
                />
              </div>

              <div className="mt-7 space-y-1">
                {group.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="interactive-lift group flex items-center justify-between rounded-lg border-b px-2 py-3 last:border-b-0"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    <span
                      className="text-sm transition-colors duration-300 group-hover:text-[var(--wine-light)]"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill}
                    </span>

                    <span
                      className="text-[9px]"
                      style={{
                        color: "var(--text-muted)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills