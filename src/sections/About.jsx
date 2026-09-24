import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Workflow,
  Zap,
} from "lucide-react"

const journey = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Started with Education",
    description:
      "My foundation began with English Language Education — learning how to communicate clearly, understand people, structure information and solve problems.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Moved into Digital Work",
    description:
      "Design, digital tools and remote projects introduced me to a different way of creating value: using technology to make ideas useful, accessible and repeatable.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Discovered Automation",
    description:
      "I became increasingly interested in what happens when separate tools can communicate, processes can run automatically and AI can handle parts of the work.",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "Building AI Systems",
    description:
      "Today, I'm focused on practical AI automation — connecting workflows, APIs, data and intelligent tools to build systems that solve real operational problems.",
  },
]

const principles = [
  {
    icon: Workflow,
    title: "Connect",
    text: "Bring tools, data and people into one workflow.",
  },
  {
    icon: Zap,
    title: "Automate",
    text: "Remove repetitive steps wherever technology can help.",
  },
  {
    icon: BrainCircuit,
    title: "Think",
    text: "Understand the process before trying to automate it.",
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, var(--accent-glow), transparent 25%), radial-gradient(circle at 10% 80%, var(--cyan-glow), transparent 20%)",
        }}
      />

      <div
        className="tech-grid absolute inset-0 opacity-20"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px w-8"
                style={{
                  background: "var(--accent)",
                }}
              />

              <span
                className="text-[10px] font-semibold tracking-[0.28em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                ABOUT · THE JOURNEY
              </span>
            </div>

            <p
              className="max-w-sm text-sm leading-6"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              A background in communication and education gradually led
              me toward digital systems, automation and AI.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            I don't just use technology.
            <br />

            <span className="accent-gradient-text">
              I build with it.
            </span>
          </motion.h2>
        </div>

        {/* =================================================
            STORY CARD
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-20 overflow-hidden rounded-3xl border"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}

            <div
              className="relative overflow-hidden p-7 sm:p-10 lg:p-12"
              style={{
                borderRight:
                  "1px solid var(--border)",
              }}
            >
              <div
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                style={{
                  background: "var(--accent-glow)",
                }}
              />

              <div className="relative">

                <div
                  className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-strong)",
                    color: "var(--accent-light)",
                  }}
                >
                  <BrainCircuit size={21} />
                </div>

                <p
                  className="text-[10px] font-semibold tracking-[0.25em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  THE IDEA
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  From communication
                  <br />
                  <span
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    to systems.
                  </span>
                </h3>

                <p
                  className="mt-6 max-w-md text-sm leading-7"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Technology became interesting to me when I stopped
                  seeing it only as a collection of tools and started
                  seeing it as a way to redesign how work gets done.
                </p>

                <div
                  className="mt-10 flex items-center gap-3 text-xs font-medium"
                  style={{
                    color: "var(--accent-light)",
                  }}
                >
                  <span
                    className="h-px w-8"
                    style={{
                      background: "var(--accent)",
                    }}
                  />

                  THINK · BUILD · IMPROVE
                </div>
              </div>
            </div>

            {/* RIGHT — JOURNEY */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="space-y-0">
                {journey.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.number}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group relative flex gap-5 py-5 first:pt-0 last:pb-0"
                    >

                      {/* connector */}

                      {index !== journey.length - 1 && (
                        <div
                          className="absolute left-[19px] top-[52px] h-[calc(100%-25px)] w-px"
                          style={{
                            background:
                              "var(--border)",
                          }}
                        />
                      )}

                      {/* number/icon */}

                      <div className="relative z-10 flex shrink-0 flex-col items-center">

                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--bg-secondary)",
                            color: "var(--accent-light)",
                          }}
                        >
                          <Icon size={16} />
                        </div>
                      </div>

                      {/* content */}

                      <div className="pb-1">

                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className="text-[9px] font-semibold tracking-[0.2em]"
                            style={{
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.number}
                          </span>

                          <h4 className="text-base font-semibold">
                            {item.title}
                          </h4>
                        </div>

                        <p
                          className="mt-2 max-w-xl text-sm leading-6"
                          style={{
                            color: "var(--text-secondary)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PRINCIPLES
        ================================================= */}

        <div className="mt-16 grid gap-4 md:grid-cols-3">

          {principles.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group rounded-2xl border p-6 transition-colors duration-300"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--accent-glow)",
                    color: "var(--accent-light)",
                  }}
                >
                  <Icon size={18} />
                </div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.text}
                </p>

                <ArrowUpRight
                  size={15}
                  className="mt-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* =================================================
            CLOSING STATEMENT
        ================================================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 border-l-2 pl-6 sm:pl-8"
          style={{
            borderColor: "var(--accent)",
          }}
        >
          <p
            className="max-w-3xl text-lg leading-8 sm:text-xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Curious by nature. Practical by approach.
            Always looking for a better way to make technology
            do more of the heavy lifting.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About