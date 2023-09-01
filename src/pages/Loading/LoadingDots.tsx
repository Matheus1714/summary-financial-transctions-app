import { useState, useEffect } from 'react'

export function LoadingDots() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length === 3) {
          return ''
        } else {
          return prev.concat('.')
        }
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <span>Loading{dots}</span>
}
