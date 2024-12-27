'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MessageWall(): React.JSX.Element {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center text-red-600">Mensajitos</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje de amor..."
          className="w-full p-2 border border-pink-300 rounded-lg"
        />
        <button
          type="submit"
          className="mt-3 w-full bg-red-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300 shadow-lg"
        >
          Enviar uwu
        </button>
      </form>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            {message}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
