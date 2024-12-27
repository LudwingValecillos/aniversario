import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      className="text-center py-10 px-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-red-600 mb-3">Feliz Aniversario amor de mi vida</h1>
      <p className="text-2xl text-pink-600">Gracias por cada dia juntos, eres lo mejor que me ha pasado</p>
    </motion.header>
  )
}

