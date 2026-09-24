import { useEffect, useState } from "react"

export default function CursorSpotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="cursor-spotlight"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  )
}