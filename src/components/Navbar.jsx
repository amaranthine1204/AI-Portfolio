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
borderColor: scrolled
? "rgba(84,92,255,0.18)"
: "var(--border)",

        background: isDark
          ? scrolled
            ? "rgba(8,9,13,0.82)"
            : "rgba(8,9,13,0.62)"
          : scrolled
            ? "rgba(245,247,251,0.88)"
            : "rgba(245,247,251,0.72)",

        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",

        boxShadow: scrolled
          ? isDark
            ? "0 18px 55px rgba(0,0,0,0.28)"
            : "0 18px 55px rgba(30,35,55,0.10)"
          : "none",
      }}
    >
      <div className="flex min-h-[40px] items-center justify-between">
        {/* =================================================
            BRAND
        ================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          className="group relative rounded-md text-sm font-bold tracking-[0.16em] outline-none sm:tracking-[0.2em]"
          style={{
            color: "var(--text-primary)",
          }}
          aria-label="Tech-thusiast home"
        >
          TECH
          <span
            className="transition-colors duration-300 group-hover:text-[var(--accent-light)]"
            style={{
              color: "var(--accent)",
            }}
          >
            -
          </span>
          THUSIAST

          {/* tiny active indicator */}

          <span
            className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
            style={{
              background: "var(--accent)",
            }}
          />
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-1 py-2 text-sm outline-none transition-colors duration-300"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <span className="transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                {link.label}
              </span>

              <span
                className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--cyan))",
                }}
              />
            </a>
          ))}

          {/* THEME TOGGLE */}

          <button
            type="button"
            onClick={toggleTheme}
            className="group flex h-9 w-9 items-center justify-center rounded-full border outline-none transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              color: "var(--text-secondary)",
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
                className="transition-all duration-500 group-hover:rotate-45 group-hover:text-[var(--accent-light)]"
              />
            ) : (
              <Moon
                size={15}
                strokeWidth={1.8}
                className="transition-all duration-500 group-hover:-rotate-12 group-hover:text-[var(--accent)]"
              />
            )}
          </button>

          {/* CONTACT CTA */}

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "rgba(84,92,255,0.35)",
              background: "var(--gradient-primary)",
              boxShadow:
                "0 8px 28px rgba(84,92,255,0.16)",
            }}
          >
            Let's Talk

            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* =================================================
            MOBILE CONTROLS
        ================================================== */}

        <div className="flex items-center gap-2 md:hidden">
          {/* THEME */}

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border outline-none transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              color: "var(--text-secondary)",
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

          {/* MENU */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="rounded-full border px-4 py-2 text-xs font-medium outline-none transition-all duration-300 hover:border-[rgba(84,92,255,0.35)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              background: "var(--surface)",
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

      {/* =================================================
          MOBILE NAVIGATION
      ================================================== */}

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t pt-3 md:hidden"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group relative rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 hover:pl-5"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {link.label}

                <span
                  className="absolute bottom-2 left-4 h-px w-0 transition-all duration-300 group-hover:w-8"
                  style={{
                    background: "var(--accent)",
                  }}
                />
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-primary)",
                boxShadow:
                  "0 10px 30px rgba(84,92,255,0.14)",
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