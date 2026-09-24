import { motion } from "framer-motion"
import { ArrowUp, ArrowUpRight } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-secondary)",
      }}
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main footer */}
        <div className="border-b py-14 sm:py-20" style={{ borderColor: "var(--border)" }}>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#home"
                className="inline-flex items-center gap-3"
                aria-label="Back to home"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-bold"
                  style={{
                    background: "var(--surface-strong)",
                    borderColor: "var(--border)",
                    color: "var(--accent-light)",
                  }}
                >
                  T
                </span>

                <span
                  className="text-sm font-bold tracking-[0.18em]"
                  style={{ color: "var(--text-primary)" }}
                >
                  TECH-THUSIAST
                </span>
              </a>

              <h2
                className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{ color: "var(--text-primary)" }}
              >
                Building systems that
                <span style={{ color: "var(--text-secondary)" }}>
                  {" "}make work smarter.
                </span>
              </h2>

              <p
                className="mt-5 max-w-xl text-sm leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                AI automation, digital operations and practical technology
                solutions — built with curiosity, structure and a focus on
                solving real problems.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:justify-self-end"
            >
              <p
                className="font-mono text-[10px] tracking-[0.22em]"
                style={{ color: "var(--text-muted)" }}
              >
                NAVIGATE
              </p>

              <nav className="mt-5 grid grid-cols-2 gap-x-12 gap-y-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      style={{ color: "var(--accent-light)" }}
                    />
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              © {new Date().getFullYear()} Tech-thusiast
            </p>

            <span
              className="hidden h-1 w-1 rounded-full sm:block"
              style={{ background: "var(--text-muted)" }}
            />

            <p
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              AI Automation · Digital Operations · Technology
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 self-start rounded-xl border px-3 py-2 text-xs transition-all duration-300 hover:-translate-y-0.5 sm:self-auto"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            Back to top

            <span
              className="flex h-6 w-6 items-center justify-center rounded-lg"
              style={{
                background: "var(--surface-strong)",
                color: "var(--accent-light)",
              }}
            >
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer