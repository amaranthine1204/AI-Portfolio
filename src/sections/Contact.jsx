import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"

function Contact() {
  const email = "sanniabiola61@gmail.com"

  return (
    <section
      id="contact"
      className="section-divider relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
      style={{
        background: "var(--bg-primary)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(154,61,88,0.08) 0%, rgba(201,162,39,0.025) 35%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[2rem] border"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(145deg, var(--surface-strong), var(--surface))",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(154,61,88,0.06) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(154,61,88,0.06) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 75%)",
            }}
          />

          <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
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
                delay: 0.1,
              }}
              className="flex items-center justify-center gap-4"
            >
              <span
                className="h-px w-8 sm:w-10"
                style={{
                  background: "var(--border-strong)",
                }}
              />

              <p
                className="text-[10px] font-semibold tracking-[0.3em] sm:text-xs"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                GET IN TOUCH
              </p>

              <span
                className="h-px w-8 sm:w-10"
                style={{
                  background: "var(--border-strong)",
                }}
              />
            </motion.div>

            <motion.h2
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mx-auto mt-7 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Have a process worth
              <span
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {" "}
                automating?
              </span>
            </motion.h2>

            <motion.p
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
                duration: 0.7,
                delay: 0.25,
              }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 sm:mt-8 sm:text-lg sm:leading-8"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              I'm interested in practical problems where AI, automation
              and thoughtful systems design can make work simpler,
              faster and more scalable.
            </motion.p>

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
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row"
            >
              <a
                href={`mailto:${email}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                style={{
                  background:
                    "linear-gradient(135deg, var(--wine), var(--wine-light))",
                  boxShadow:
                    "0 10px 30px rgba(111,32,56,0.2)",
                }}
              >
                <Mail
                  size={16}
                  strokeWidth={1.8}
                />

                Start a conversation

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            <motion.a
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              href={`mailto:${email}`}
              className="mt-6 inline-block text-xs tracking-[0.08em] transition-colors duration-300"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {email}
            </motion.a>
          </div>

          <div
            className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[8px] tracking-[0.2em]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--green-light)",
              }}
            />

            OPEN TO OPPORTUNITIES
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact