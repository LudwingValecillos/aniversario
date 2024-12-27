'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FlorAnimada() {
  const flowerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const flower = flowerRef.current
    if (flower) {
      const petals = flower.querySelectorAll('.petal')
      petals.forEach((petal, index) => {
        petal.animate(
          [
            { transform: 'rotate(0deg) translateY(0)' },
            { transform: `rotate(${360 / petals.length * index}deg) translateY(-10px)` },
            { transform: 'rotate(0deg) translateY(0)' }
          ],
          {
            duration: 2000 + index * 100,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        )
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="relative"
      >
        <svg
          ref={flowerRef}
          viewBox="0 0 200 200"
          width="300"
          height="300"
          className="transform-origin-center"
        >
          <defs>
            <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FF69B4" />
              <stop offset="100%" stopColor="#FF1493" />
            </radialGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d="M100,100 Q120,60 100,20 Q80,60 100,100"
              fill="url(#petalGradient)"
              className="petal"
              style={{
                transformOrigin: '100px 100px',
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
          <circle cx="100" cy="100" r="20" fill="#FFD700" />
        </svg>
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}

