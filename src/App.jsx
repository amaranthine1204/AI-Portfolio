import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme
    }

    return "dark"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    )
  }

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      {/* GLOBAL ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
          opacity: theme === "dark" ? 1 : 0.35,
        }}
      />

      {/* GLOBAL GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-0 z-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(154,61,88,0.08) 0%, rgba(201,162,39,0.025) 35%, rgba(255,255,255,0) 70%)"
              : "radial-gradient(circle, rgba(154,61,88,0.06) 0%, rgba(201,162,39,0.025) 35%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* NAVIGATION */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* CONTENT */}
<div
  className="relative z-10"
  style={{
    color: "var(--text-primary)",
  }}
>
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App