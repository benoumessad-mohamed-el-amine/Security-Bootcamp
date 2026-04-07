import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEF<>{}[]|/\\'
    const fontSize = 13
    let drops = []
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drops = Array(Math.floor(canvas.width / fontSize)).fill(1)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 10, 14, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`
      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff88'
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      animId = requestAnimationFrame(draw)
    }

    // throttle to ~20fps
    let last = 0
    const throttled = (ts) => {
      if (ts - last > 50) { last = ts; draw() }
      else animId = requestAnimationFrame(throttled)
    }
    animId = requestAnimationFrame(throttled)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        opacity: 0.04,
        pointerEvents: 'none',
      }}
    />
  )
}
