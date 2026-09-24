import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Palette,
  Puzzle,
  Workflow,
  Zap,
} from "lucide-react"

const skillGroups = [
  {
    number: "01",
    title: "Automation Core",
    description:
      "The building blocks I use to connect tools, structure processes, and automate repetitive work.",
    icon: Workflow,
    accent: "var(--accent)",
    skills: [
      "n8n",
      "Make",
      "Webhooks",
      "REST APIs",
      "JSON",
      "Workflow Logic",
    ],
  },
  {
    number: "02",
    title: "AI & Intelligent Systems",
    description:
      "Exploring practical ways to integrate AI into workflows, content systems, operations, and decision processes.",
    icon: BrainCircuit,
    accent: "var(--cyan)",
    skills: [
      "LLM Workflows",
      "Prompt Engineering",
      "AI Content Systems",
      "AI APIs",
      "Automation Logic",
      "AI Agents",
    ],
  },
  {
    number: "03",
    title: "Data & Operations",
    description:
      "Turning scattered information into structured systems that are easier to manage and act on.",
    icon: Database,
    accent: "var(--green-light)",
    skills: [
      "Airtable",
      "CRM Workflows",
      "Klaviyo",
      "Google Sheets",
      "Data Mapping",
      "Process Design",
    ],
  },
  {
    number: "04",
    title: "Digital & Creative",
    description:
      "A creative foundation that helps me approach automation from both the technical and user-facing side.",
    icon: Palette,
    accent: "#9b8cff",
    skills: [
      "Adobe Photoshop",
      "CorelDRAW",
      "Canva",
      "Microsoft Excel",
      "Microsoft Word",
      "Google Workspace",
    ],
  },
]

const principles = [
  {
    title: "Connect",
    description:
      "Bring tools, data, APIs and people into one connected workflow.",
    icon: Puzzle,
  },
  {
    title: "Automate",
    description:
      "Remove repetitive manual steps and create systems that keep working.",
    icon: Zap,
  },
  {
    title: "Structure",
    description:
      "Turn messy processes into clear, repeatable and maintainable systems.",
    icon: Workflow,
  },
  {
    title: "Integrate",
    description:
      "Make different platforms work together instead of operating in isolation.",
    icon: ArrowUpRight,
  },
]

function SkillGroup({ group, index }) {
  const Icon = group.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-3xl border p-6 sm:p-7"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      whileHover={{
        y: -5,
        borderColor: "var(--border-strong)",
      }}
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{
          background: group.accent,
        }}
      />

      <div className="relative z-10">
        <div className="mb-7 flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border)",
              color: group.accent,
            }}
          >
            <Icon size={22} strokeWidth={1.7} />
          </div>

          <span
            className="font-mono text-xs tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            {group.number}
          </span>
        </div>

        <h3
          className="text-xl font-semibold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {group.title}
        </h3>

        <p
          className="mt-3 min-h-[72px] text-sm leading-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {group.description}
        </p>

        <div
          className="my-6 h-px w-full"
          style={{ background: "var(--border)" }}
        />

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-300"
              style={{
                background: "var(--surface-strong)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function PrincipleCard({ principle, index }) {
  const Icon = principle.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: "var(--surface-strong)",
            color: "var(--accent-light)",
          }}
        >
          <Icon size={18} strokeWidth={1.8} />
        </div>

        <div>
          <h4
            className="font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {principle.title}
          </h4>

          <p
            className="mt-1 text-xs leading-5"
            style={{ color: "var(--text-muted)" }}
          >
            {principle.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{ background: "var(--accent)" }}
            />

            <span
              className="font-mono text-xs font-medium tracking-[0.25em]"
              style={{ color: "var(--accent-light)" }}
            >
              03 · SKILLS & SYSTEMS
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Tools are useful.
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              Systems are better.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            My toolkit sits at the intersection of automation, AI, data,
            digital operations and creative technology. I focus less on
            collecting tools and more on understanding how they work together.
          </p>
        </motion.div>

        {/* Skill architecture */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p
                className="font-mono text-xs tracking-[0.22em]"
                style={{ color: "var(--accent-light)" }}
              >
                HOW I THINK
              </p>

              <h3
                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                style={{ color: "var(--text-primary)" }}
              >
                Four principles behind the work.
              </h3>
            </div>

            <p
              className="max-w-md text-sm leading-6"
              style={{ color: "var(--text-muted)" }}
            >
              Technology changes quickly. The way I approach problems matters
              even when the tools change.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Learning signal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl border p-7 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, var(--surface-strong), var(--surface))",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--cyan)" }}
          />

          <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "var(--green-light)",
                    boxShadow: "0 0 14px var(--green-glow)",
                  }}
                />

                <span
                  className="font-mono text-xs tracking-[0.2em]"
                  style={{ color: "var(--green-light)" }}
                >
                  CURRENTLY LEARNING
                </span>
              </div>

              <h3
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
                style={{ color: "var(--text-primary)" }}
              >
                Always learning.
                <br />
                <span style={{ color: "var(--text-secondary)" }}>
                  Always experimenting.
                </span>
              </h3>
            </div>

            <div
              className="max-w-md text-sm leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                AI agents, deeper API integrations, advanced workflow
                architecture and better ways to turn business problems into
                practical automated systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills