import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Mail,
  Network,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react"

const projects = [
  {
    number: "01",
    title: "AI-Powered Social Media System",
    category: "AI · CONTENT · AUTOMATION",
    status: "BUILT",
    accent: "var(--accent)",
    icon: Sparkles,

    description:
      "A practical automation system that moves content ideas through AI processing, structured storage and a distribution-ready workflow.",

    workflow: [
      {
        label: "Content Idea",
        icon: Sparkles,
      },
      {
        label: "AI Processing",
        icon: Zap,
      },
      {
        label: "Content Structure",
        icon: Layers3,
      },
      {
        label: "Airtable",
        icon: Database,
      },
      {
        label: "Distribution",
        icon: Globe,
      },
    ],

    tools: ["Make", "Gemini", "Airtable", "Social APIs"],

    caseStudy: {
      problem:
        "Content workflows can become repetitive when ideas, AI generation, organisation and distribution are handled as separate manual tasks.",

      objective:
        "Build a connected workflow that captures content ideas, processes them with AI, structures the output and prepares the content system for downstream distribution.",

      whatIBuilt: [
        "Designed an Airtable content system for storing structured ideas, content pillars and target platforms.",
        "Connected Make with Gemini to process content ideas through an AI generation step.",
        "Mapped data between automation modules and structured the workflow around reusable fields.",
        "Designed the system with multiple social distribution channels in mind.",
      ],

      technicalFocus: [
        "Make automation",
        "AI workflow integration",
        "Airtable data structure",
        "Data mapping",
        "Content workflows",
      ],

      learning:
        "The project strengthened my understanding of how AI becomes more useful when connected to structured data and a repeatable workflow rather than used as an isolated content-generation tool.",
    },
  },

  {
    number: "02",
    title: "AI Lead Qualification System",
    category: "AI · LEADS · CRM",
    status: "ARCHITECTURE",
    accent: "var(--cyan)",
    icon: GitBranch,

    description:
      "A workflow architecture for receiving leads, validating information, evaluating lead quality and routing qualified prospects into a CRM or follow-up process.",

    workflow: [
      {
        label: "Lead Capture",
        icon: Globe,
      },
      {
        label: "Validation",
        icon: CheckCircle2,
      },
      {
        label: "AI Evaluation",
        icon: Sparkles,
      },
      {
        label: "Lead Scoring",
        icon: Zap,
      },
      {
        label: "CRM Routing",
        icon: Network,
      },
    ],

    tools: ["n8n", "AI", "Webhooks", "CRM"],

    caseStudy: {
      problem:
        "Leads can arrive from different sources with inconsistent information, making manual validation, qualification and routing time-consuming.",

      objective:
        "Design a structured workflow that validates incoming lead information, evaluates it with AI-assisted logic and routes the result to the appropriate business process.",

      whatIBuilt: [
        "Designed a webhook-based lead intake architecture.",
        "Added validation stages before AI processing.",
        "Structured an AI-assisted evaluation layer for interpreting lead information.",
        "Designed a scoring and routing stage for downstream CRM actions.",
      ],

      technicalFocus: [
        "Webhooks",
        "Conditional logic",
        "AI evaluation",
        "Lead scoring",
        "CRM integration",
      ],

      learning:
        "This architecture strengthened my understanding of why validation and clear decision logic should come before AI processing and downstream automation.",
    },
  },

  {
    number: "03",
    title: "Automated Email Workflow",
    category: "EMAIL · AI · OPERATIONS",
    status: "TESTING",
    accent: "var(--green-light)",
    icon: Mail,

    description:
      "An event-driven email automation concept connecting triggers, audience data, AI-assisted content generation and campaign actions.",

    workflow: [
      {
        label: "Trigger",
        icon: Zap,
      },
      {
        label: "Data Processing",
        icon: Database,
      },
      {
        label: "Audience Check",
        icon: CheckCircle2,
      },
      {
        label: "AI Generation",
        icon: Sparkles,
      },
      {
        label: "Campaign Action",
        icon: Mail,
      },
    ],

    tools: ["Klaviyo", "Make", "Webhooks", "AI"],

    caseStudy: {
      problem:
        "Email automation can involve several disconnected steps, from receiving an event to checking audience information and preparing campaign content.",

      objective:
        "Explore a modular automation structure that can process an event, work with audience data, generate content with AI and trigger an appropriate email action.",

      whatIBuilt: [
        "Designed an event-driven email automation structure.",
        "Explored Make and Klaviyo integration for campaign-related workflow actions.",
        "Included audience and data-processing stages before campaign execution.",
        "Explored AI-assisted email generation as part of the workflow.",
      ],

      technicalFocus: [
        "Event-driven automation",
        "Audience data",
        "Email APIs",
        "AI content generation",
        "Workflow conditions",
      ],

      learning:
        "The project improved my understanding of how marketing automation depends on clean data flow, well-defined triggers and careful sequencing between automation steps.",
    },
  },

  {
    number: "04",
    title: "API & Workflow Experiments",
    category: "APIs · WEBHOOKS · INTEGRATION",
    status: "EXPERIMENTS",
    accent: "#9b8cff",
    icon: Network,

    description:
      "A collection of technical experiments exploring how applications communicate through APIs, webhooks and structured data transformations.",

    workflow: [
      {
        label: "App Event",
        icon: Globe,
      },
      {
        label: "Webhook",
        icon: Network,
      },
      {
        label: "Data Transform",
        icon: GitBranch,
      },
      {
        label: "API Request",
        icon: ArrowRight,
      },
      {
        label: "System Update",
        icon: CheckCircle2,
      },
    ],

    tools: ["REST APIs", "Webhooks", "n8n", "JSON"],

    caseStudy: {
      problem:
        "Different applications expose different data structures, authentication methods and API behaviours, making reliable integration an important part of automation work.",

      objective:
        "Build practical familiarity with the underlying mechanics of integrations rather than relying entirely on pre-built automation modules.",

      whatIBuilt: [
        "Experimented with webhook-based event handling.",
        "Worked with JSON structures and field mapping.",
        "Explored REST API requests and responses.",
        "Practised transforming data between workflow steps.",
        "Tested how application events can trigger downstream actions.",
      ],

      technicalFocus: [
        "REST APIs",
        "JSON",
        "Webhooks",
        "Data transformation",
        "System integration",
      ],

      learning:
        "These experiments have helped me understand what happens underneath no-code automation platforms and strengthened my foundation for building more reliable integrations.",
    },
  },
]

function WorkflowMap({ workflow, accent }) {
  return (
    <div className="relative">
      {/* DESKTOP */}
      <div className="hidden overflow-x-auto pb-3 lg:block">
        <div className="flex min-w-max items-center">
          {workflow.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.label}
                className="flex items-center"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-xl"
                    style={{
                      background: "var(--surface-strong)",
                      color: accent,
                    }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                    />
                  </span>

                  <span
                    className="whitespace-nowrap text-xs font-medium"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {step.label}
                  </span>
                </motion.div>

                {index < workflow.length - 1 && (
                  <div
                    className="mx-2 h-px w-8"
                    style={{
                      background: `linear-gradient(90deg, ${accent}, var(--border))`,
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* MOBILE */}
      <div className="space-y-2 lg:hidden">
        {workflow.map((step, index) => {
          const Icon = step.icon

          return (
            <div key={step.label}>
              <div
                className="flex items-center gap-3 rounded-xl border px-3 py-3"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "var(--surface-strong)",
                    color: accent,
                  }}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                  />
                </span>

                <span
                  className="text-xs font-medium"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {step.label}
                </span>
              </div>

              {index < workflow.length - 1 && (
                <div
                  className="ml-7 h-2 w-px"
                  style={{
                    background: "var(--border-strong)",
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CaseStudy({ project, onClose }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="overflow-hidden"
    >
      <div
        className="mt-6 rounded-2xl border p-5 sm:p-7"
        style={{
          background: "var(--surface-strong)",
          borderColor: "var(--border)",
        }}
      >
        {/* HEADER */}
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{
                color: project.accent,
              }}
            >
              CASE STUDY
            </p>

            <h4
              className="mt-2 text-xl font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Inside the system
            </h4>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-300"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
            aria-label="Close case study"
          >
            <X size={16} />
          </button>
        </div>

        {/* PROBLEM + OBJECTIVE */}
        <div className="grid gap-7 lg:grid-cols-2">
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.18em]"
              style={{
                color: project.accent,
              }}
            >
              THE PROBLEM
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <p
              className="font-mono text-[10px] tracking-[0.18em]"
              style={{
                color: project.accent,
              }}
            >
              OBJECTIVE
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {project.caseStudy.objective}
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="my-7 h-px"
          style={{
            background: "var(--border)",
          }}
        />

        {/* WHAT I BUILT */}
        <div>
          <p
            className="font-mono text-[10px] tracking-[0.18em]"
            style={{
              color: project.accent,
            }}
          >
            WHAT I BUILT
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.caseStudy.whatIBuilt.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 shrink-0"
                  style={{
                    color: project.accent,
                  }}
                  strokeWidth={1.8}
                />

                <p
                  className="text-sm leading-6"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL FOCUS + LEARNING */}
        <div
          className="my-7 h-px"
          style={{
            background: "var(--border)",
          }}
        />

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.18em]"
              style={{
                color: project.accent,
              }}
            >
              TECHNICAL FOCUS
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.caseStudy.technicalFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1.5 text-xs"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              className="font-mono text-[10px] tracking-[0.18em]"
              style={{
                color: project.accent,
              }}
            >
              WHAT I LEARNED
            </p>

            <p
              className="mt-3 text-sm leading-7"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {project.caseStudy.learning}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-3xl border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      whileHover={{
        y: -4,
        borderColor: "var(--border-strong)",
      }}
    >
      {/* ACCENT LINE */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: project.accent,
        }}
      />

      {/* GLOW */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
        style={{
          background: project.accent,
        }}
      />

      <div className="relative z-10 p-6 sm:p-8">

        {/* TOP */}
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
              style={{
                background: "var(--surface-strong)",
                borderColor: "var(--border)",
                color: project.accent,
              }}
            >
              <Icon
                size={21}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <span
                className="font-mono text-[10px] tracking-[0.2em]"
                style={{
                  color: project.accent,
                }}
              >
                {project.number}
              </span>

              <p
                className="mt-1 text-[10px] font-medium tracking-[0.16em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {project.category}
              </p>
            </div>
          </div>

          <span
            className="rounded-full border px-3 py-1.5 font-mono text-[9px] tracking-[0.16em]"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border)",
              color: project.accent,
            }}
          >
            {project.status}
          </span>
        </div>

        {/* TITLE */}
        <h3
          className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{
            color: "var(--text-primary)",
          }}
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {project.description}
        </p>

        {/* DIVIDER */}
        <div
          className="my-7 h-px"
          style={{
            background: "var(--border)",
          }}
        />

        {/* WORKFLOW */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Workflow
              size={14}
              style={{
                color: project.accent,
              }}
              strokeWidth={1.8}
            />

            <span
              className="font-mono text-[10px] tracking-[0.18em]"
              style={{
                color: "var(--text-muted)",
              }}
            >
              WORKFLOW
            </span>
          </div>

          <WorkflowMap
            workflow={project.workflow}
            accent={project.accent}
          />
        </div>

        {/* TOOLS + BUTTON */}
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border px-3 py-1.5 text-xs"
                style={{
                  background: "var(--surface-strong)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded((current) => !current)}
            className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {expanded
              ? "Close case study"
              : "Explore case study"}

            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              style={{
                color: project.accent,
              }}
            />
          </button>
        </div>

        {/* CASE STUDY */}
        <AnimatePresence initial={false}>
          {expanded && (
            <CaseStudy
              project={project}
              onClose={() => setExpanded(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, var(--accent-glow), transparent 25%), radial-gradient(circle at 90% 70%, var(--cyan-glow), transparent 20%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{
                background: "var(--accent)",
              }}
            />

            <span
              className="font-mono text-xs font-medium tracking-[0.25em]"
              style={{
                color: "var(--accent-light)",
              }}
            >
              02 · SELECTED SYSTEMS
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Systems,
            <br />

            <span
              style={{
                color: "var(--text-secondary)",
              }}
            >
              not just workflows.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            A selection of automation systems, architectures and
            technical experiments focused on connecting tools,
            structuring data and using AI to reduce repetitive work.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mt-14 flex flex-col gap-5 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          style={{
            background:
              "linear-gradient(135deg, var(--surface-strong), var(--surface))",
            borderColor: "var(--border)",
          }}
        >
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{
                color: "var(--accent-light)",
              }}
            >
              NEXT SYSTEM
            </p>

            <h3
              className="mt-2 text-xl font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Have a workflow in mind?
            </h3>

            <p
              className="mt-2 text-sm"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Let's turn the process into something that can
              work smarter.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Start a conversation

            <ArrowRight
              size={16}
              style={{
                color: "var(--accent-light)",
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects