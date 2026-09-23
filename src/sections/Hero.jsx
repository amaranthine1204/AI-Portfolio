import {
  lazy,
  Suspense,
} from "react"

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

const AutomationScene = lazy(
  () => import("../components/AutomationScene")
)
function Hero() {
  const { scrollY } = useScroll()

  const heroScale = useTransform(scrollY, [0, 600], [1, 0.92])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroY = useTransform(scrollY, [0, 600], [0, -80])

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const textX = useTransform(smoothX, [-1, 1], [-8, 8])
  const textY = useTransform(smoothY, [-1, 1], [-5, 5])
  const sceneX = useTransform(smoothX, [-1, 1], [12, -12])
  const sceneY = useTransform(smoothY, [-1, 1], [8, -8])

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    pointerX.set((x - 0.5) * 2)
    pointerY.set((y - 0.5) * 2)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-24"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, var(--bg-tertiary) 0%, var(--bg-primary) 48%, var(--bg-primary) 100%)",
      }}
    >
      {/* WINE ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[38%] top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(154,61,88,0.16) 0%, rgba(154,61,88,0) 70%)",
        }}
      />

      {/* GOLD ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[30%] h-[350px] w-[350px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0) 70%)",
        }}
      />

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
        }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:gap-8 lg:gap-12"
      >
        {/* TEXT */}
        <motion.div
          style={{
            x: textX,
            y: textY,
          }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5 flex items-center gap-3 sm:mb-6"
          >
            <span
              className="h-px w-7 sm:w-9"
              style={{
                background:
                  "linear-gradient(90deg, var(--wine-light), var(--gold))",
              }}
            />

            <p
              className="text-[10px] font-semibold tracking-[0.28em] sm:text-xs sm:tracking-[0.35em]"
              style={{
                color: "var(--gold-light)",
              }}
            >
              AI AUTOMATION & DIGITAL OPERATIONS
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Building intelligent
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--wine-light), var(--gold), var(--gold-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              systems with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mt-6 max-w-2xl text-sm leading-7 sm:mt-8 sm:text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            I design practical automation systems that connect AI,
            business processes and technology to turn repetitive work
            into smarter digital systems.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-start sm:gap-4"
          >
            <a
              href="#projects"
              className="rounded-full px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--wine), var(--wine-light))",
                boxShadow:
                  "0 10px 35px rgba(111,32,56,0.22)",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border px-7 py-3 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(201,162,39,0.35)",
                color: "var(--gold-dark)",
                background: "rgba(201,162,39,0.04)",
              }}
            >
              Let's Connect
            </a>
          </motion.div>

          {/* SYSTEM STATUS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.18em] sm:mt-10"
            style={{
              color: "var(--text-muted)",
            }}
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span
                className="absolute h-2 w-2 animate-ping rounded-full"
                style={{
                  background: "rgba(60,167,125,0.25)",
                }}
              />

              <span
                className="relative h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--green-light)",
                  boxShadow:
                    "0 0 10px rgba(60,167,125,0.6)",
                }}
              />
            </span>

            SYSTEMS THINKING · AUTOMATION · AI
          </motion.div>
        </motion.div>

        {/* 3D SCENE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: "easeOut",
          }}
          style={{
            x: sceneX,
            y: sceneY,
          }}
          className="relative h-[360px] w-full sm:h-[440px] md:h-[500px] lg:h-[560px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(111,32,56,0.14) 0%, rgba(201,162,39,0.05) 40%, rgba(255,255,255,0) 72%)",
            }}
          />

<div className="relative z-10 h-full w-full">
  <Suspense
    fallback={
      <div
        className="flex h-full w-full items-center justify-center rounded-3xl border"
        style={{
          borderColor: "var(--border)",
          background:
            "radial-gradient(circle at center, rgba(111,32,56,0.12), var(--surface))",
        }}
      >
        <div className="text-center">
          <div
            className="mx-auto mb-4 h-2 w-2 animate-pulse rounded-full"
            style={{
              background: "var(--gold)",
              boxShadow:
                "0 0 14px rgba(201,162,39,0.5)",
            }}
          />

          <p
            className="text-[10px] font-semibold tracking-[0.25em]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            INITIALIZING SYSTEM
          </p>
        </div>
      </div>
    }
  >
    <AutomationScene />
  </Suspense>
</div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span
          className="text-[9px] tracking-[0.25em]"
          style={{
            color: "var(--text-muted)",
          }}
        >
          SCROLL
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px"
          style={{
            background:
              "linear-gradient(var(--wine-light), var(--gold))",
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero