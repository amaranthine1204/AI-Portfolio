import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Component } from "react"
import {
  Float,
  OrbitControls,
  Text,
  Line,
  Environment,
} from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

const nodes = [
  {
    id: "idea",
    label: "IDEA",
    position: [-2.8, 1.7, 0],
    scale: 0.75,
  },
  {
    id: "make",
    label: "MAKE",
    position: [-1.3, 0.3, 0.4],
    scale: 0.85,
  },
  {
    id: "ai",
    label: "AI CORE",
    position: [0, 1.8, 0],
    scale: 1.15,
  },
  {
    id: "gemini",
    label: "GEMINI",
    position: [1.9, 0.9, 0.2],
    scale: 0.85,
  },
  {
    id: "web",
    label: "WEB",
    position: [2.8, -0.8, 0],
    scale: 0.75,
  },
  {
    id: "airtable",
    label: "AIRTABLE",
    position: [0.7, -1.5, 0.4],
    scale: 0.8,
  },
  {
    id: "social",
    label: "SOCIAL",
    position: [-1.7, -1.4, 0],
    scale: 0.75,
  },
  {
    id: "api",
    label: "API",
    position: [0.1, -0.2, 1.1],
    scale: 0.65,
  },
]

const connections = [
  ["idea", "make"],
  ["make", "ai"],
  ["ai", "gemini"],
  ["gemini", "web"],
  ["web", "airtable"],
  ["airtable", "social"],
  ["social", "make"],
  ["ai", "api"],
  ["api", "airtable"],
]

/* =========================================================
   CAMERA INTERACTION
   ========================================================= */

function CameraRig() {
  useFrame((state) => {
    const { camera, pointer, size } = state

    const isMobile = size.width < 768

    const movementX = isMobile ? 0.18 : 0.45
    const movementY = isMobile ? 0.12 : 0.3

    const targetX = pointer.x * movementX
    const targetY = pointer.y * movementY

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.035
    )

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.035
    )

    camera.lookAt(0, 0, 0)
  })

  return null
}

/* =========================================================
   AUTOMATION NODE
   ========================================================= */

function SceneNode({ node }) {
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef()

  const isCore = node.id === "ai"

  useFrame((state) => {
    if (!meshRef.current) return

    const targetScale = hovered
      ? node.scale * 1.18
      : node.scale

    meshRef.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.12
    )

    meshRef.current.rotation.y += 0.003

    meshRef.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.5
      ) * 0.08
  })

  const nodeColor =
    node.id === "ai"
      ? "#9a3d58"
      : node.id === "api"
        ? "#3ca77d"
        : "#6f2038"

  const nodeEmissive =
    node.id === "ai"
      ? "#6f2038"
      : node.id === "api"
        ? "#247a5b"
        : "#3d101f"

  const labelColor =
    node.id === "ai"
      ? "#d88aa0"
      : node.id === "api"
        ? "#6cc59d"
        : "#75696b"

  const lightColor =
    node.id === "ai"
      ? "#9a3d58"
      : node.id === "api"
        ? "#3ca77d"
        : "#c9a227"

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => {
          setHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
      >
        <icosahedronGeometry args={[0.34, 2]} />

        <meshStandardMaterial
          color={
            hovered
              ? "#e2c45c"
              : nodeColor
          }
          emissive={
            hovered
              ? "#c9a227"
              : nodeEmissive
          }
          emissiveIntensity={
            hovered
              ? 1.8
              : isCore
                ? 0.9
                : 0.55
          }
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <pointLight
        color={lightColor}
        intensity={
          isCore
            ? hovered
              ? 2.4
              : 1.1
            : hovered
              ? 1.4
              : 0.35
        }
        distance={
          isCore
            ? 4
            : 2.5
        }
      />

      {isCore && (
        <>
          <mesh
            rotation={[
              Math.PI / 2,
              0,
              0,
            ]}
          >
            <torusGeometry
              args={[
                0.58,
                0.018,
                8,
                64,
              ]}
            />

            <meshBasicMaterial
              color="#c9a227"
              transparent
              opacity={0.55}
            />
          </mesh>

          <mesh
            rotation={[
              Math.PI / 2,
              0,
              0,
            ]}
          >
            <torusGeometry
              args={[
                0.78,
                0.008,
                8,
                64,
              ]}
            />

            <meshBasicMaterial
              color="#9a3d58"
              transparent
              opacity={0.28}
            />
          </mesh>
        </>
      )}

      <Text
        position={[0, -0.62, 0]}
        fontSize={0.16}
        color={
          hovered
            ? "#e2c45c"
            : labelColor
        }
        anchorX="center"
        anchorY="middle"
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ "
      >
        {node.label}
      </Text>
    </group>
  )
}

/* =========================================================
   CONNECTIONS
   ========================================================= */

function Connection({ from, to }) {
  const fromNode = nodes.find(
    (node) => node.id === from
  )

  const toNode = nodes.find(
    (node) => node.id === to
  )

  if (!fromNode || !toNode) {
    return null
  }

  const start = new THREE.Vector3(
    ...fromNode.position
  )

  const end = new THREE.Vector3(
    ...toNode.position
  )

  const midpoint = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5)

  midpoint.z += 0.25

  const curve =
    new THREE.QuadraticBezierCurve3(
      start,
      midpoint,
      end
    )

  const points = curve.getPoints(24)

  return (
    <Line
      points={points}
      color="#9a3d58"
      opacity={0.22}
      transparent
      lineWidth={1}
    />
  )
}

/* =========================================================
   DATA FLOW
   ========================================================= */

function MovingParticle({
  from,
  to,
  delay = 0,
}) {
  const meshRef = useRef()
  const progress = useRef(delay)

  const fromNode = nodes.find(
    (node) => node.id === from
  )

  const toNode = nodes.find(
    (node) => node.id === to
  )

  if (!fromNode || !toNode) {
    return null
  }

  const start = new THREE.Vector3(
    ...fromNode.position
  )

  const end = new THREE.Vector3(
    ...toNode.position
  )

  const midpoint = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5)

  midpoint.z += 0.25

  const curve =
    new THREE.QuadraticBezierCurve3(
      start,
      midpoint,
      end
    )

  useFrame((_, delta) => {
    if (!meshRef.current) return

    progress.current += delta * 0.28

    if (progress.current > 1) {
      progress.current = 0
    }

    const point = curve.getPoint(
      progress.current
    )

    meshRef.current.position.copy(point)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry
        args={[0.045, 8, 8]}
      />

      <meshBasicMaterial
        color="#e2c45c"
        transparent
        opacity={0.95}
      />
    </mesh>
  )
}

/* =========================================================
   ORBIT RING
   ========================================================= */

function OrbitRing({
  radius = 3.5,
  rotation = [0, 0, 0],
}) {
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.z +=
      delta * 0.04
  })

  return (
    <group
      ref={groupRef}
      rotation={rotation}
    >
      <mesh>
        <torusGeometry
          args={[
            radius,
            0.008,
            8,
            100,
          ]}
        />

        <meshBasicMaterial
          color="#c9a227"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}

/* =========================================================
   BACKGROUND PARTICLES
   ========================================================= */

function FloatingParticles() {
  const particlesRef = useRef()
  const { size } = useThree()

  const isMobile = size.width < 768
  const count = isMobile ? 45 : 90

  const positions = new Float32Array(
    count * 3
  )

  for (let i = 0; i < count; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 8

    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 7

    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 5
  }

  useFrame((state) => {
    if (!particlesRef.current) {
      return
    }

    particlesRef.current.rotation.y =
      state.clock.elapsedTime * 0.015

    particlesRef.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.08
      ) * 0.05
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={isMobile ? 0.014 : 0.018}
        color="#e2c45c"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

/* =========================================================
   SCENE
   ========================================================= */

function Scene() {
  const { size } = useThree()
  const isMobile = size.width < 768

  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1}
        color="#fff4df"
      />

      <pointLight
        position={[0, 2, 2]}
        intensity={1.5}
        distance={7}
        color="#6f2038"
      />

      <Float
        speed={1}
        rotationIntensity={0.15}
        floatIntensity={0.35}
      >
        <group
          scale={isMobile ? 0.78 : 0.95}
        >
          {connections.map(
            ([from, to]) => (
              <Connection
                key={`${from}-${to}`}
                from={from}
                to={to}
              />
            )
          )}

          {connections.map(
            ([from, to], index) => (
              <MovingParticle
                key={`particle-${from}-${to}`}
                from={from}
                to={to}
                delay={index * 0.08}
              />
            )
          )}

          {nodes.map((node) => (
            <SceneNode
              key={node.id}
              node={node}
            />
          ))}

          <OrbitRing
            radius={3.2}
            rotation={[
              Math.PI / 2.7,
              0,
              0,
            ]}
          />

          <OrbitRing
            radius={3.8}
            rotation={[
              Math.PI / 3,
              Math.PI / 5,
              0,
            ]}
          />
        </group>
      </Float>

      <FloatingParticles />

      <gridHelper
        args={[
          10,
          20,
          "#3d101f",
          "#160b0f",
        ]}
        position={[
          0,
          -2.5,
          -1,
        ]}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
        rotateSpeed={0.35}
      />

      <CameraRig />

      <Environment preset="night" />
    </>
  )
}
class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error) {
    console.error("3D scene error:", error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex h-full w-full items-center justify-center rounded-3xl border"
          style={{
            borderColor: "var(--border)",
            background:
              "radial-gradient(circle at center, rgba(111,32,56,0.12), var(--surface))",
          }}
        >
          <div className="px-6 text-center">
            <div
              className="mx-auto mb-4 h-2 w-2 rounded-full"
              style={{
                background: "var(--gold)",
                boxShadow:
                  "0 0 14px rgba(201,162,39,0.5)",
              }}
            />

            <p
              className="text-[10px] font-semibold tracking-[0.25em]"
              style={{
                color: "var(--text-muted)",
              }}
            >
              AUTOMATION SYSTEM
            </p>

            <p
              className="mt-2 text-xs"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Interactive visualization unavailable
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
/* =========================================================
   AUTOMATION SCENE
   ========================================================= */
function AutomationScene() {
  return (
    <SceneErrorBoundary>
      <div className="h-full w-full overflow-hidden rounded-3xl">
        <Canvas
          dpr={[1, 1.25]}
          camera={{
            position: [0, 0, 8],
            fov: 42,
            near: 0.1,
            far: 100,
          }}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <color
            attach="background"
            args={["#050304"]}
          />

          <fog
            attach="fog"
            args={["#050304", 7, 14]}
          />

          <Scene />
        </Canvas>
      </div>
    </SceneErrorBoundary>
  )
}
export default AutomationScene