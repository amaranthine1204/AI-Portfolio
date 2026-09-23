import { motion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"

const experiences = [
  {
    period: "2025 — PRESENT",
    role: "AI Automation & Digital Operations",
    organization: "Independent / Freelance",
    description:
      "Designing and building practical automation workflows that connect AI, structured data and digital tools to solve repetitive operational problems.",
    tags: ["AI", "AUTOMATION", "OPERATIONS"],
  },
  {
    period: "2024 — 2025",
    role: "Subject Teacher & Digital Support",
    organization: "Precious Baptist Church Group of Schools",
    description:
      "Combined teaching, digital content creation, CBT administration and technical troubleshooting while supporting students and school operations.",
    tags: ["EDUCATION", "DIGITAL", "OPERATIONS"],
  },
  {
    period: "2025 — 2026",
    role: "NYSC Service",
    organization: "Akwa Ibom State",
    description:
      "Contributing to community development while taking on administrative, coordination and communication responsibilities.",
    tags: ["LEADERSHIP", "ADMIN", "COMMUNITY"],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="section-divider px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 sm:mb-20">
          <SectionLabel>
            EXPERIENCE
          </SectionLabel>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <h2
              className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              From education and creativity
              <span
                className="block"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                into technology and automation.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px sm:left-[11px]"
            style={{
              background:
                "linear-gradient(180deg, var(--wine-light), var(--gold), transparent)",
            }}
          />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.organization}-${experience.period}`}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4"
                  style={{
                    borderColor: "var(--bg-secondary)",
                    background: "var(--wine-light)",
                    boxShadow:
                      "0 0 16px rgba(154,61,88,0.35)",
                  }}
                />

                <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:gap-12">
                  <p
                    className="pt-1 text-[10px] font-semibold tracking-[0.2em]"
                    style={{
                      color: "var(--gold)",
                    }}
                  >
                    {experience.period}
                  </p>

                  <div>
                    <h3
                      className="text-xl font-semibold sm:text-2xl"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {experience.role}
                    </h3>

                    <p
                      className="mt-1 text-sm"
                      style={{
                        color: "var(--wine-light)",
                      }}
                    >
                      {experience.organization}
                    </p>

                    <p
                      className="mt-4 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {experience.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em]"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--surface)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience