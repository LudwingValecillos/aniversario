'use client'

import Header from "@/components/Header"
import MessageWall from "@/components/MessageWall"
import PhotoGallery from "@/components/PhotoGallery"
import WelcomeMessage from "@/components/WelcomeMessage"
import { motion } from "framer-motion"
import Heart from "@/components/Heart"



export default function AnniversaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <WelcomeMessage />
        <PhotoGallery />
        <MessageWall />
      </motion.div>
      <Heart />
      
    </div>
  )
}

