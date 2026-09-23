import { motion } from "framer-motion"

function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex items-center gap-4"
    >
      <span
        className="h-px w-8 sm:w-10"
        style={{
          background:
            "linear-gradient(90deg, var(--wine-light), var(--gold))",
        }}
      />

      <p
        className="text-[10px] font-semibold tracking-[0.28em] sm:text-xs sm:tracking-[0.3em]"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {children}
      </p>
    </motion.div>
  )
}

export default SectionLabel