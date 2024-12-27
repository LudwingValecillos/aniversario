import { motion } from 'framer-motion'

export default function Timeline() {
  const events = [
    { date: '2023', event: 'El inicio' },
    { date: '2023', event: 'Nuestra primera cita' },
    { date: '2022', event: 'Nos mudamos juntos' },
    { date: '2023', event: 'Nuestro compromiso' },
  ]

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center text-red-600">Nuestra Historia de Amor</h2>
      <div className="space-y-6">
        {events.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <div className="w-20 text-right font-bold">{item.date}</div>
            <div className="w-px h-16 bg-red-400"></div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              {item.event}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

