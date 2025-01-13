'use client'

import { motion } from "framer-motion"
import { Github, Instagram, Facebook } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub Profile"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      label: "Instagram Profile"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/yourusername",
      label: "Facebook Profile"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.footer 
      className="w-full bg-black text-white py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-6"
          variants={containerVariants}
        >
          {/* Social Links */}
          <motion.div 
            className="flex space-x-6"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-gray-400"
          >
            <p>© {new Date().getFullYear()} Raditya Alfarisi. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

