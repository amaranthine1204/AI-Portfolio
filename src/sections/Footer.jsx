function Footer() {
  return (
    <footer
      className="border-t px-6 py-8 lg:px-8"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between"
        style={{
          color: "var(--text-muted)",
        }}
      >
        <p>
          © 2026 Oluwaseyi Abiola Sanni
        </p>

        <p>
          AI Automation · Digital Operations · Creative Technology
        </p>
      </div>
    </footer>
  )
}

export default Footer