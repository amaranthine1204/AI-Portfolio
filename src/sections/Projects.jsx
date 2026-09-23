import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import SectionLabel from "../components/SectionLabel"

const projects = [
  {
    id: "social",
    number: "01",
    title: "AI-Powered Social Media Management",
    shortTitle: "Social Media Automation",
    description:
      "An automated content workflow that transforms ideas into structured, platform-ready social media content using AI, Airtable and Make.",
    tools: ["Make", "Gemini", "Airtable", "Facebook", "LinkedIn", "X"],
    category: "AI + AUTOMATION",
    status: "WORKING SYSTEM",
    statusColor: "green",
    workflow: [
      "Content Idea",
      "AI Processing",
      "Content Database",
      "Platform Publishing",
      "Analytics",
    ],
    problem:
      "Small businesses often spend significant time repeatedly creating, formatting and organizing social media content.",
    solution:
      "The system connects content planning, AI generation, structured storage and publishing into one automated workflow.",
    outcome:
      "Reduces repetitive content operations and creates a repeatable publishing pipeline.",
  },
  {
    id: "jobs",
    number: "02",
    title: "AI Job Discovery System",
    shortTitle: "AI Job Discovery",
    description:
      "A job-search automation concept designed to discover, filter and match relevant opportunities from multiple Nigerian job sources.",
    tools: ["Make", "AI", "RSS", "Web Search", "Data Processing"],
    category: "AI + OPERATIONS",
    status: "IN DEVELOPMENT",
    statusColor: "gold",
    workflow: [
      "Job Sources",
      "Data Collection",
      "AI Filtering",
      "Qualification Match",
      "Opportunity Database",
    ],
    problem:
      "Searching multiple job platforms manually makes it easy to miss opportunities and creates repetitive research work.",
    solution:
      "Automate job discovery and use structured criteria to identify opportunities that match a candidate's experience and target locations.",
    outcome:
      "Creates a centralized job-discovery pipeline instead of repeatedly searching multiple platforms.",
  },
  {
    id: "operations",
    number: "03",
    title: "Digital Operations Workflow",
    shortTitle: "Digital Operations",
    description:
      "A workflow concept for connecting business processes, structured data and automated actions into a single operational system.",
    tools: ["Make", "Airtable", "AI", "APIs", "Automation"],
    category: "OPERATIONS",
    status: "SYSTEM DESIGN",
    statusColor: "wine",
    workflow: [
      "Input",
      "Processing",
      "Decision",
      "Automation",
      "Output",
    ],
    problem:
      "Disconnected processes often create unnecessary manual work and make operational information harder to manage.",
    solution:
      "Map the process, structure the data and connect the repetitive steps through automation.",
    outcome:
      "Creates a clearer operational pipeline that can be monitored and improved over time.",
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section
      id="projects"
      className="section-divider px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 sm:mb-20">
          <SectionLabel>
            SELECTED SYSTEMS
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
              Automation projects built around
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(90deg, var(--wine-light), var(--gold))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                real problems.
              </span>
            </h2>

            <p
              className="mt-6 max-w-2xl text-sm leading-7 sm:text-lg sm:leading-8"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              A selection of systems exploring how AI, automation and
              structured workflows can reduce repetitive digital work.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          {/* PROJECT LIST */}
          <div className="space-y-2">
            {projects.map((project) => {
              const active = activeProject.id === project.id

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="group w-full text-left outline-none"
                >
                  <div
className="interactive-glow relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6"
                    style={{
                      borderColor: active
                        ? "var(--border-strong)"
                        : "var(--border)",
                      background: active
                        ? "linear-gradient(135deg, rgba(111,32,56,0.14), rgba(201,162,39,0.035))"
                        : "var(--surface)",
                    }}
                  >
                    {active && (
                      <motion.div
                        layoutId="project-active-line"
                        className="absolute left-0 top-0 h-full w-1"
                        style={{
                          background:
                            "linear-gradient(180deg, var(--wine-light), var(--gold))",
                        }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-[10px] font-semibold tracking-[0.2em]"
                          style={{
                            color: active
                              ? "var(--gold-light)"
                              : "var(--text-muted)",
                          }}
                        >
                          {project.number}
                        </p>

                        <h3
                          className="mt-2 text-base font-medium transition-colors duration-300 sm:text-lg"
                          style={{
                            color: active
                              ? "var(--text-primary)"
                              : "var(--text-muted)",
                          }}
                        >
                          {project.shortTitle}
                        </h3>
                      </div>

                      <span
                        className="mt-1 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background:
                            project.statusColor === "green"
                              ? "var(--green-light)"
                              : project.statusColor === "gold"
                                ? "var(--gold)"
                                : "var(--wine-light)",
                          boxShadow: active
                            ? `0 0 12px ${
                                project.statusColor === "green"
                                  ? "rgba(60,167,125,0.5)"
                                  : project.statusColor === "gold"
                                    ? "rgba(201,162,39,0.5)"
                                    : "rgba(154,61,88,0.5)"
                              }`
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* PROJECT DETAIL */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <div className="flex flex-wrap items-center gap-3">

                  <span
                    className="rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em]"
                    style={{
                      borderColor: "rgba(154,61,88,0.35)",
                      background: "rgba(111,32,56,0.08)",
                      color: "var(--wine-light)",
                    }}
                  >
                    {activeProject.category}
                  </span>

                  <span
                    className="rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em]"
                    style={{
                      borderColor: "var(--border)",
                      color:
                        activeProject.statusColor === "green"
                          ? "var(--green-light)"
                          : activeProject.statusColor === "gold"
                            ? "var(--gold-light)"
                            : "var(--wine-light)",
                    }}
                  >
                    ● {activeProject.status}
                  </span>

                </div>

                <h3
                  className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {activeProject.title}
                </h3>

                <p
                  className="mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {activeProject.description}
                </p>

                {/* TOOLS */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {activeProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border px-3 py-1.5 text-[10px]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                        background: "var(--surface)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* FLOW */}
                <div className="mt-10">
                  <p
                    className="mb-4 text-[10px] font-semibold tracking-[0.25em]"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    SYSTEM FLOW
                  </p>

                  <div className="overflow-x-auto overscroll-x-contain pb-3">
                    <div className="flex min-w-max items-center">
                      {activeProject.workflow.map((step, index) => (
                        <div
                          key={step}
                          className="flex items-center"
                        >
                          <div
                            className="rounded-xl border px-4 py-3"
                            style={{
                              borderColor:
                                index === 0
                                  ? "rgba(154,61,88,0.35)"
                                  : "var(--border)",
                              background:
                                index === 0
                                  ? "rgba(111,32,56,0.08)"
                                  : "var(--surface)",
                            }}
                          >
                            <p
                              className="text-xs font-medium"
                              style={{
                                color: "var(--text-secondary)",
                              }}
                            >
                              {step}
                            </p>
                          </div>

                          {index <
                            activeProject.workflow.length - 1 && (
                            <div
                              className="mx-2 h-px w-8"
                              style={{
                                background:
                                  "linear-gradient(90deg, rgba(154,61,88,0.5), rgba(201,162,39,0.3))",
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p
                    className="mt-2 text-[9px] tracking-[0.12em] sm:hidden"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    SWIPE TO EXPLORE →
                  </p>
                </div>

                {/* CASE STUDY */}
                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  <CaseStudy
                    label="THE PROBLEM"
                    text={activeProject.problem}
                  />

                  <CaseStudy
                    label="THE SOLUTION"
                    text={activeProject.solution}
                  />

                  <CaseStudy
                    label="THE OUTCOME"
                    text={activeProject.outcome}
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudy({ label, text }) {
  return (
    <div
      className="border-t pt-4"
      style={{
        borderColor: "var(--border)",
      }}
    >
      <p
        className="text-[9px] font-semibold tracking-[0.22em]"
        style={{
          color: "var(--gold)",
        }}
      >
        {label}
      </p>

      <p
        className="mt-3 text-sm leading-6"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {text}
      </p>
    </div>
  )
}

export default Projects