"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current!
    if (!canvas) return

    const ctx = canvas.getContext("2d")!
    if (!ctx) return

    let particles: any[] = []
    const particleCount = 60

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      vx: number
      vy: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.6
        this.vy = (Math.random() - 0.5) * 0.6
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "#4da6ff"
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function connectParticles() {

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {

          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = dx * dx + dy * dy

          if (distance < 20000) {

            ctx.beginPath()
            ctx.strokeStyle = "rgba(77,166,255,0.2)"
            ctx.lineWidth = 1
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()

          }
        }
      }
    }

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      connectParticles()

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}