import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react"

const experiences = [
  {
    period: "2023 — PRESENT",
    title: "Freelance Digital & Automation Work",
    company: "Independent · Remote",
    category: "DIGITAL · AUTOMATION · CREATIVE",
    icon: Code2,
    accent: "var(--accent)",
    description:
      "Building practical digital solutions while developing hands-on experience with automation, AI tools, workflow platforms and creative technology.",
    highlights: [
      "Delivered 15+ freelance digital design projects across social, print and business communication.",
      "Built and experimented with automation workflows using n8n, Make, webhooks and AI tools.",
      "Designed systems for content, communication and repetitive operational tasks.",
      "Managed client communication, revisions, requirements and delivery timelines.",
    ],
    tools: ["n8n", "Make", "AI Tools", "Webhooks", "Klaviyo", "Photoshop"],
  },
  {
    period: "NOV 2024 — DEC 2025",
    title: "Subject Teacher · Digital Operations",
    company: "Precious Baptist Church Group of Schools",
    category: "EDUCATION · TECHNOLOGY · OPERATIONS",
    icon: GraduationCap,
    accent: "var(--cyan)",
    description:
      "Combined teaching responsibilities with practical technology, digital administration and problem-solving within a school environment.",
    highlights: [
      "Taught classes of approximately 20–30 students while managing lesson preparation and academic activities.",
      "Set up, monitored and troubleshot CBT examinations and related digital processes.",
      "Created digital materials and supported technology-assisted learning activities.",
      "Worked with staff on coordination, documentation and day-to-day operational needs.",
    ],
    tools: [
      "Microsoft Word",
      "Excel",
      "Google Docs",
      "Photoshop",
      "CorelDRAW",
    ],
  },
  {
    period: "NOV 2025 — OCT 2026",
    title: "NYSC · Coordination & Administration",
    company: "Akwa Ibom State",
    category: "COORDINATION · ADMINISTRATION · COMMUNITY",
    icon: Users,
    accent: "var(--green-light)",
    description:
      "Developed practical experience in communication, coordination, administration and working with people across structured community programmes.",
    highlights: [
      "Coordinated communication, announcements, meetings and schedules for corps members.",
      "Handled administrative responsibilities and supported programme organisation.",
      "Worked collaboratively with teams to coordinate activities and communicate information clearly.",
      "Participated in community-focused activities requiring planning, teamwork and accountability.",
    ],
    tools: [
      "Communication",
      "Coordination",
      "Administration",
      "Teamwork",
    ],
  },
]

function ExperienceCard({ experience, index }) {
  const Icon = experience.icon

  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div
        className="absolute left-5 top-16 hidden h-[calc(100%+2rem)] w-px md:block"
        style={{
          background:
            "linear-gradient(to bottom, var(--border-strong), transparent)",
        }}
      />

      {/* Timeline node */}
      <div
        className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full border md:flex"
        style={{
          background: "var(--bg-primary)",
          borderColor: experience.accent,
          color: experience.accent,
          boxShadow: `0 0 0 6px var(--bg-primary), 0 0 22px ${experience.accent}`,
        }}
      >
        <Icon size={17} strokeWidth={1.7} />
      </div>

      <div className="md:pl-16">
        <div
          className="group relative overflow-hidden rounded-3xl border p-6 sm:p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Hover accent */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40"
            style={{
              background: experience.accent,
            }}
          />

          <div
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
            style={{
              background: experience.accent,
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="font-mono text-[11px] tracking-[0.18em]"
                    style={{ color: experience.accent }}
                  >
                    {experience.period}
                  </span>

                  <span
                    className="hidden h-1 w-1 rounded-full sm:block"
                    style={{ background: "var(--text-muted)" }}
                  />

                  <span
                    className="text-[11px] font-medium tracking-[0.12em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {experience.category}
                  </span>
                </div>

                <h3
                  className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {experience.title}
                </h3>

                <p
                  className="mt-2 text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {experience.company}
                </p>
              </div>

              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  background: "var(--surface-strong)",
                  borderColor: "var(--border)",
                  color: experience.accent,
                }}
              >
                <Icon size={20} strokeWidth={1.7} />
              </div>
            </div>

            {/* Description */}
            <p
              className="mt-6 max-w-3xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.description}
            </p>

            {/* Highlights */}
            <div
              className="my-7 h-px"
              style={{ background: "var(--border)" }}
            />

            <div className="space-y-4">
              {experience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: experience.accent }}
                    strokeWidth={1.8}
                  />

                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-7 flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
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
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
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
              04 · EXPERIENCE
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Experience that
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              shaped how I build.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            My path into automation has been built through a combination of
            digital work, technology, education, coordination and continuous
            experimentation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Career direction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border p-7 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, var(--surface-strong), var(--surface))",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--surface-strong)",
                  color: "var(--accent-light)",
                }}
              >
                <BriefcaseBusiness size={21} strokeWidth={1.7} />
              </div>

              <div>
                <p
                  className="font-mono text-[11px] tracking-[0.2em]"
                  style={{ color: "var(--accent-light)" }}
                >
                  CAREER DIRECTION
                </p>

                <h3
                  className="mt-2 text-2xl font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  AI Automation · Digital Operations · Technology
                </h3>
              </div>
            </div>

            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <CalendarDays size={16} />
              <span>Building toward what's next</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience