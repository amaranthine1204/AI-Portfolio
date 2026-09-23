import { motion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"

function About() {
  return (
    <section
      id="about"
      className="section-divider px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 sm:mb-16">
          <SectionLabel>
            ABOUT ME
          </SectionLabel>
        </div>

        <div className="grid min-w-0 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">

          {/* MAIN TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <h2
              className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              I build practical systems that connect
              <span
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {" "}
                AI, automation and people.
              </span>
            </h2>

            <div
              className="mt-8 max-w-2xl space-y-5 text-sm leading-7 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-8"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <p>
                I'm an educator, creative technologist and aspiring AI
                automation specialist interested in solving practical
                business and operational problems with technology.
              </p>

              <p>
                My approach is simple: understand the process, identify
                repetitive work, connect the right tools and build a system
                that makes the work smarter.
              </p>
            </div>
          </motion.div>

          {/* CURRENT FOCUS */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="lg:pt-4"
          >
            <div
              className="rounded-3xl border p-7 sm:p-8"
              style={{
                background:
                  "linear-gradient(145deg, var(--surface-strong), var(--surface))",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-[0.25em] sm:text-xs"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                CURRENT FOCUS
              </p>

              <div className="mt-7 space-y-6">
                <FocusItem
                  title="AI Automation"
                  description="Intelligent workflows & AI-powered systems"
                />

                <FocusItem
                  title="Digital Operations"
                  description="Processes, data & operational efficiency"
                />

                <FocusItem
                  title="Creative Technology"
                  description="Design, automation & emerging tools"
                  last
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function FocusItem({
  title,
  description,
  last = false,
}) {
  return (
    <div
      className={last ? "" : "border-b pb-5"}
      style={{
        borderColor: "var(--border)",
      }}
    >
      <p
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </p>

      <p
        className="mt-1 text-sm leading-6"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default About