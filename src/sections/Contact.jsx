import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react"

const opportunities = [
  {
    title: "Automation Projects",
    description:
      "Workflow automation, AI integrations, data processing and practical business systems.",
    icon: Sparkles,
    accent: "var(--accent)",
  },
  {
    title: "Career Opportunities",
    description:
      "AI automation, digital operations, technology and entry-level technical roles.",
    icon: BriefcaseBusiness,
    accent: "var(--cyan)",
  },
  {
    title: "Collaboration",
    description:
      "Projects, experiments and opportunities to build, learn and solve problems together.",
    icon: MessageCircle,
    accent: "var(--green-light)",
  },
]

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "WA",
    href: "https://wa.me/YOUR_NUMBER",
    label: "Chat",
  },
  {
    name: "Facebook",
    icon: "f",
    href: "https://facebook.com/YOUR_USERNAME",
    label: "Facebook",
  },
  {
    name: "X",
    icon: "𝕏",
    href: "https://x.com/YOUR_USERNAME",
    label: "Follow",
  },
  {
    name: "LinkedIn",
    icon: "in",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    label: "Connect",
  },
  {
    name: "GitHub",
    icon: "GH",
    href: "https://github.com/YOUR_USERNAME",
    label: "Projects",
  },
]

function Contact() {
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status === "sending") {
      return
    }

    setStatus("sending")
    setErrorMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),

      _subject: `Portfolio enquiry: ${formData.get("subject")}`,
      _replyto: formData.get("email"),
      _captcha: "true",
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sannabiola61@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      )

      const result = await response.json()

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Something went wrong while sending the message."
        )
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("error")
      setErrorMessage(
        error.message ||
          "We couldn't send your message. Please try again."
      )
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent)" }}
        />

        <div
          className="absolute bottom-20 right-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--cyan)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
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
              05 · CONTACT
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Have a problem
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              worth automating?
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether it is an automation idea, a technology opportunity or a
            process that could work better, I am open to meaningful
            conversations and practical projects.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border p-6 sm:p-8"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="mb-8 flex items-start justify-between gap-5">
              <div>
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--surface-strong)",
                    color: "var(--accent-light)",
                  }}
                >
                  <Send size={19} strokeWidth={1.7} />
                </div>

                <h3
                  className="text-2xl font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Start a conversation
                </h3>

                <p
                  className="mt-2 max-w-lg text-sm leading-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tell me a little about what you are building, what is
                  slowing you down, or what you would like to explore.
                </p>
              </div>

              <span
                className="hidden rounded-full border px-3 py-1.5 font-mono text-[9px] tracking-[0.16em] sm:block"
                style={{
                  background: "var(--surface-strong)",
                  borderColor: "var(--border)",
                  color: "var(--green-light)",
                }}
              >
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border p-7 text-center"
                style={{
                  background: "var(--surface-strong)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--green-glow)",
                    color: "var(--green-light)",
                  }}
                >
                  <CheckCircle2 size={28} strokeWidth={1.7} />
                </div>

                <h3
                  className="mt-5 text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message sent.
                </h3>

                <p
                  className="mx-auto mt-2 max-w-md text-sm leading-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Thanks for reaching out. Your message has been submitted
                  successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl border px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      minLength={2}
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        background: "var(--surface-strong)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        background: "var(--surface-strong)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    What can I help with?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{
                      background: "var(--surface-strong)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Automation project">
                      Automation project
                    </option>
                    <option value="Career opportunity">
                      Career opportunity
                    </option>
                    <option value="Collaboration">
                      Collaboration
                    </option>
                    <option value="Something else">
                      Something else
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about the problem, project or opportunity..."
                    required
                    minLength={10}
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{
                      background: "var(--surface-strong)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {status === "error" && (
                  <div
                    className="rounded-xl border px-4 py-3 text-sm leading-6"
                    style={{
                      background: "rgba(239, 68, 68, 0.06)",
                      borderColor: "rgba(239, 68, 68, 0.18)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    background: "var(--accent)",
                    borderColor: "var(--accent)",
                    color: "#ffffff",
                    boxShadow: "var(--shadow-accent)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon

              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--surface-strong)",
                        color: opportunity.accent,
                      }}
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3
                        className="font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {opportunity.title}
                      </h3>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <div
              className="rounded-3xl border p-6"
              style={{
                background:
                  "linear-gradient(135deg, var(--surface-strong), var(--surface))",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--surface-strong)",
                    color: "var(--accent-light)",
                  }}
                >
                  <Mail size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="font-mono text-[10px] tracking-[0.18em]"
                    style={{ color: "var(--accent-light)" }}
                  >
                    DIRECT CONTACT
                  </p>

                  <a
                    href="mailto:sannabiola61@gmail.com"
                    className="mt-1 block text-sm transition-colors duration-300 hover:opacity-80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    sannabiola61@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="mt-5 flex items-start gap-3 rounded-2xl border p-4"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--green-light)" }}
                />

                <p
                  className="text-xs leading-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  I am currently open to automation projects, entry-level
                  technology opportunities, digital operations roles and
                  collaborative learning opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-8 rounded-3xl border p-6 sm:p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p
                className="font-mono text-[10px] tracking-[0.2em]"
                style={{ color: "var(--accent-light)" }}
              >
                ELSEWHERE
              </p>

              <h3
                className="mt-2 text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Find me around the web.
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface-strong)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    className="font-mono font-semibold"
                    style={{ color: "var(--accent-light)" }}
                  >
                    {social.icon}
                  </span>

                  <span>{social.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact