import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  GitBranch,
  Layers3,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react"

function Hero() {
  const { scrollY } = useScroll()

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.15])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96])
  const heroY = useTransform(scrollY, [0, 500], [0, -45])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 18,
  })

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 18,
  })

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window

    const x = (event.clientX / innerWidth - 0.5) * 2
    const y = (event.clientY / innerHeight - 0.5) * 2

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="tech-grid absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 75% 40%, var(--accent-glow), transparent 28%), radial-gradient(circle at 20% 80%, var(--cyan-glow), transparent 20%)",
        }}
      />

      {/* =====================================================
          TOP FADE
      ===================================================== */}

      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg-primary), transparent)",
        }}
      />

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-28 sm:px-8 lg:px-10"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="max-w-3xl">

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span
                className="h-px w-8"
                style={{
                  background: "var(--accent)",
                }}
              />

              <span
                className="text-[10px] font-semibold tracking-[0.28em] sm:text-xs"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                AI AUTOMATION · DIGITAL OPERATIONS
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Build intelligent
              <br />

              <span
                className="accent-gradient-text"
              >
                systems that work.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-2xl text-base leading-7 sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              I design practical automation systems that connect AI,
              business processes and digital tools — turning repetitive
              work into smarter, scalable workflows.
            </motion.p>

            {/* CTAs */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300"
                style={{
                  background: "var(--accent)",
                  color: "#ffffff",
                  boxShadow: "var(--shadow-accent)",
                }}
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-300"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                }}
              >
                Let's Connect

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* Tech tags */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-9 flex flex-wrap gap-x-5 gap-y-2"
            >
              {[
                "AI",
                "AUTOMATION",
                "WORKFLOWS",
                "APIs",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-medium tracking-[0.2em]"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE — SYSTEM VISUAL
          ================================================= */}

          <motion.div
            style={{
              x: useTransform(springX, [-1, 1], [-10, 10]),
              y: useTransform(springY, [-1, 1], [-8, 8]),
            }}
            className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[500px]"
          >

            {/* Outer rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
              style={{
                borderColor: "var(--accent-glow)",
              }}
            />

            {/* Connection lines */}

            <div
              className="absolute left-[10%] top-[22%] h-px w-[80%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--border-strong), transparent)",
              }}
            />

            <div
              className="absolute left-[20%] top-[70%] h-px w-[60%] rotate-[18deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--border), transparent)",
              }}
            />

            {/* Floating node — AI */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[4%] top-[17%] hidden rounded-2xl border px-4 py-3 sm:block"
              style={{
                borderColor: "var(--border)",
                background: "var(--glass-bg)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--accent-glow)",
                    color: "var(--accent-light)",
                  }}
                >
                  <Bot size={16} />
                </div>

                <div>
                  <p
                    className="text-[9px] font-semibold tracking-widest"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    AI WORKFLOW
                  </p>

                  <p
                    className="mt-0.5 text-[9px]"
                    style={{
                      color: "var(--green-light)",
                    }}
                  >
                    ● ACTIVE
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating node — automation */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] right-[1%] hidden rounded-2xl border px-4 py-3 sm:block"
              style={{
                borderColor: "var(--border)",
                background: "var(--glass-bg)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--cyan-glow)",
                    color: "var(--cyan)",
                  }}
                >
                  <Workflow size={16} />
                </div>

                <div>
                  <p
                    className="text-[9px] font-semibold tracking-widest"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    AUTOMATION
                  </p>

                  <p
                    className="mt-0.5 text-[9px]"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    n8n · MAKE · API
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CENTRAL SYSTEM
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 sm:h-[280px] sm:w-[280px]"
            >

              {/* Glow */}

              <div
                className="absolute inset-8 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                }}
              />

              {/* Avatar container */}

              <div
                className="absolute inset-5 overflow-hidden rounded-[42%] border"
                style={{
                  background:
                    "linear-gradient(145deg, var(--surface-strong), var(--surface))",
                  borderColor: "var(--border-strong)",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.28), 0 0 50px var(--accent-glow)",
                  backdropFilter: "blur(18px)",
                }}
              >

                {/* Decorative code lines */}

                <div
                  className="absolute left-4 top-5 flex gap-1.5 opacity-50"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>

                <div
                  className="absolute right-5 top-5"
                  style={{
                    color: "var(--accent-light)",
                  }}
                >
                  <Code2 size={14} />
                </div>

                {/* Avatar */}

                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Head */}

                  <div
                    className="relative h-[105px] w-[88px] rounded-[45%] border sm:h-[120px] sm:w-[100px]"
                    style={{
                      background:
                        "linear-gradient(145deg, #202431, #0d0f14)",
                      borderColor: "var(--border-strong)",
                      boxShadow:
                        "0 0 35px var(--accent-glow)",
                    }}
                  >

                    {/* Hair */}

                    <div
                      className="absolute -left-1 -top-2 h-12 w-[102%] rounded-t-[50%]"
                      style={{
                        background:
                          "linear-gradient(135deg, #11131a, #2a2f3c)",
                      }}
                    />

                    {/* Eyes */}

                    <div className="absolute left-1/2 top-[48%] flex -translate-x-1/2 gap-7">
                      <span
                        className="h-1.5 w-3 rounded-full"
                        style={{
                          background: "var(--cyan)",
                          boxShadow: "0 0 10px var(--cyan)",
                        }}
                      />

                      <span
                        className="h-1.5 w-3 rounded-full"
                        style={{
                          background: "var(--cyan)",
                          boxShadow: "0 0 10px var(--cyan)",
                        }}
                      />
                    </div>

                    {/* Face accent */}

                    <div
                      className="absolute bottom-[20%] left-1/2 h-1 w-7 -translate-x-1/2 rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.7,
                      }}
                    />
                  </div>

                  {/* Body */}

                  <div
                    className="absolute bottom-[13%] h-[75px] w-[155px] rounded-t-[55px] border sm:h-[85px] sm:w-[175px]"
                    style={{
                      background:
                        "linear-gradient(145deg, #171a23, #0b0d12)",
                      borderColor: "var(--border)",
                    }}
                  >

                    <div
                      className="absolute left-1/2 top-7 -translate-x-1/2 text-[8px] font-semibold tracking-[0.25em]"
                      style={{
                        color: "var(--accent-light)",
                      }}
                    >
                      TECH-THUSIAST
                    </div>
                  </div>
                </div>

                {/* System status */}

                <div
                  className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[8px] font-semibold tracking-[0.14em]"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--glass-bg)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "var(--green-light)",
                      boxShadow: "0 0 8px var(--green-light)",
                    }}
                  />

                  BUILDING · AUTOMATING · LEARNING
                </div>
              </div>
            </motion.div>

            {/* =================================================
                SMALL ORBIT NODES
            ================================================= */}

            {[
              {
                icon: Zap,
                position: "left-[20%] top-[63%]",
                color: "var(--green-light)",
              },
              {
                icon: GitBranch,
                position: "right-[17%] top-[25%]",
                color: "var(--cyan)",
              },
              {
                icon: Cpu,
                position: "left-[25%] bottom-[11%]",
                color: "var(--accent-light)",
              },
            ].map((node, index) => {
              const Icon = node.icon

              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, index % 2 === 0 ? -6 : 6, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${node.position} flex h-9 w-9 items-center justify-center rounded-xl border`}
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--glass-bg)",
                    color: node.color,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Icon size={15} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-medium tracking-[0.25em] sm:flex"
        style={{
          color: "var(--text-muted)",
        }}
      >
        SCROLL

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={13} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero