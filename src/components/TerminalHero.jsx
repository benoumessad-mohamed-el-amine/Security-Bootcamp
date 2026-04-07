import { useEffect, useRef } from 'react'

const LINES = [
  { text: '# CyberSec Bootcamp v2025.1', cls: 'comment' },
  { text: 'nmap -sV --script vuln target.lab', cls: 'cmd' },
  { text: 'Starting Nmap 7.94 ...', cls: 'result' },
  { text: '80/tcp   open  http  Apache 2.4.49', cls: 'result' },
  { text: '| CVE-2021-41773: Path Traversal!', cls: 'warn' },
  { text: 'msfconsole -q -x "use exploit/..."', cls: 'cmd' },
  { text: '[*] Meterpreter session 1 opened', cls: 'result' },
  { text: 'whoami', cls: 'cmd' },
  { text: 'root  uid=0(root) gid=0(root)', cls: 'result' },
  { text: '# Prêt pour le prochain module...', cls: 'comment' },
]

export default function TerminalHero() {
  const outputRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    let lineIdx = 0
    let charIdx = 0
    let currentEl = null

    const type = () => {
      const out = outputRef.current
      if (!out) return

      if (lineIdx >= LINES.length) {
        timeoutRef.current = setTimeout(() => {
          out.innerHTML = ''
          lineIdx = 0
          charIdx = 0
          currentEl = null
          type()
        }, 2000)
        return
      }

      const line = LINES[lineIdx]

      if (charIdx === 0) {
        currentEl = document.createElement('div')
        currentEl.className = `t-line t-${line.cls}`
        if (line.cls === 'cmd') {
          const p = document.createElement('span')
          p.className = 'prompt'
          p.textContent = 'root@lab:~$ '
          currentEl.appendChild(p)
        }
        out.appendChild(currentEl)
      }

      if (charIdx < line.text.length) {
        let span = currentEl.querySelector('span.typed')
        if (!span) {
          span = document.createElement('span')
          span.className = 'typed'
          currentEl.appendChild(span)
        }
        span.textContent += line.text[charIdx]
        charIdx++
        timeoutRef.current = setTimeout(type, 28 + Math.random() * 20)
      } else {
        charIdx = 0
        lineIdx++
        timeoutRef.current = setTimeout(type, 320)
      }
    }

    timeoutRef.current = setTimeout(type, 600)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="hero-terminal">
      <div className="terminal-header">
        <span className="t-dot red" />
        <span className="t-dot yellow" />
        <span className="t-dot green" />
        <span className="t-title">terminal — bash</span>
      </div>
      <div className="terminal-body">
        <div ref={outputRef} />
        <div className="terminal-line">
          <span className="prompt">root@cybersec:~$</span>
          <span className="cursor" />
        </div>
      </div>
    </div>
  )
}
