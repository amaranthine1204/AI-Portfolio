import { useState } from "react"

import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    )
  }

  return (
    <div className={`theme-${theme} min-h-screen overflow-x-hidden`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

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
  )
}

export default App