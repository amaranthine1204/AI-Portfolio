import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isDark = theme === "dark"

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5">
        <nav
          aria-label="Primary navigation"
          className="relative rounded-2xl border px-4 py-3 transition-all duration-500 sm:rounded-full sm:px-5"
          style={{
            borderColor: "var(--border)",
            background: isDark
              ? "rgba(5, 5, 5, 0.82)"
              : "rgba(245, 240, 235, 0.88)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: scrolled
              ? isDark
                ? "0 20px 50px rgba(0,0,0,0.25)"
                : "0 20px 50px rgba(80,50,40,0.08)"
              : "none",
          }}
        >
          <div className="flex min-h-[40px] items-center justify-between">
            <a
              href="#home"
              onClick={closeMenu}
              className="group rounded-md text-sm font-bold tracking-[0.2em] outline-none"
              style={{ color: "var(--text-primary)" }}
              aria-label="Oluwaseyi home"
            >
              OLUWASEYI
              <span
                className="transition-colors duration-300"
                style={{ color: "var(--wine-light)" }}
              >
                .
              </span>
            </a>

            <div className="hidden items-center gap-5 md:flex lg:gap-7">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-md px-1 py-2 text-sm outline-none transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="transition-colors duration-300">
                    {link.label}
                  </span>

                  <span
                    className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--wine-light), var(--gold))",
                    }}
                  />
                </a>
              ))}

              <button
                type="button"
                onClick={toggleTheme}
                className="group flex h-9 w-9 items-center justify-center rounded-full border outline-none transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  background: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(69,19,38,0.05)",
                  color: "var(--gold)",
                }}
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <Sun
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-500 group-hover:-rotate-12"
                  />
                )}
              </button>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(154,61,88,0.35)",
                  background:
                    "linear-gradient(135deg, var(--wine), var(--wine-light))",
                  boxShadow:
                    "0 8px 25px rgba(111,32,56,0.18)",
                }}
              >
                Let's Talk
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border outline-none transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  background: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(69,19,38,0.05)",
                  color: "var(--gold)",
                }}
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <Sun size={15} strokeWidth={1.8} />
                ) : (
                  <Moon size={15} strokeWidth={1.8} />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="rounded-full border px-4 py-2 text-xs outline-none transition-all duration-300"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(69,19,38,0.04)",
                }}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="border-t pt-3 md:hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 hover:pl-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--wine), var(--wine-light))",
                  }}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar