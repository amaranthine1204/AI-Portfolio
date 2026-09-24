import { motion } from "framer-motion"

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="ambient-background"
    >
      <motion.div
        className="ambient-orb ambient-orb-one"
        animate={{
          x: [0, 45, -20, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="ambient-orb ambient-orb-two"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="ambient-grid" />
    </div>
  )
}