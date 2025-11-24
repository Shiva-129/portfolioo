'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  id: string
}

interface HeaderProps {
  visible?: boolean
}

/**
 * 3D Adaptive Navigation Pill
 * Smart navigation with scroll detection and hover expansion
 */
export default function Header({ visible = true }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home')
  const [expanded, setExpanded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const prevSectionRef = useRef('home')

  const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ]

  // Spring animations for smooth motion
  const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })

  // Handle initial expansion
  useEffect(() => {
    if (visible) {
      // Small delay to ensure smooth entry animation
      const timer = setTimeout(() => {
        setExpanded(true)
        pillWidth.set(580)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setExpanded(false)
      pillWidth.set(140) // Reset width if hidden
    }
  }, [pillWidth, visible])

  const handleSectionClick = (sectionId: string) => {
    // Trigger transition state
    setIsTransitioning(true)
    prevSectionRef.current = sectionId
    setActiveSection(sectionId)

    // Scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 400)
  }

  const activeItem = navItems.find(item => item.id === activeSection)

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-full pointer-events-auto"
        style={{
          width: pillWidth,
          height: '56px',
          backgroundColor: '#1e1e1e',
          boxShadow: `
              0 2px 4px rgba(0, 0, 0, 0.2),
              0 6px 12px rgba(0, 0, 0, 0.3),
              0 12px 24px rgba(0, 0, 0, 0.3),
              inset 0 1px 1px rgba(255, 255, 255, 0.1),
              inset 0 -1px 2px rgba(0, 0, 0, 0.5)
            `,
          x: pillShift,
          overflow: 'hidden',
          transition: 'box-shadow 0.3s ease-out',
        }}
      >
        {/* Top edge highlight */}
        <div
          className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        {/* Navigation items container */}
        <div
          ref={containerRef}
          className="relative z-10 h-full flex items-center justify-center px-6"
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
          }}
        >
          {/* Collapsed state - show only active section (only visible briefly on load) */}
          {!expanded && (
            <div className="flex items-center relative">
              <AnimatePresence mode="wait">
                {activeItem && (
                  <motion.span
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                    transition={{
                      duration: 0.35,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    style={{
                      fontSize: '15.5px',
                      fontWeight: 600,
                      color: '#ffffff',
                      letterSpacing: '0.45px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {activeItem.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Expanded state - show all sections */}
          {expanded && (
            <div className="flex items-center justify-evenly w-full">
              {navItems.map((item, index) => {
                const isActive = item.id === activeSection

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.25,
                      ease: 'easeOut'
                    }}
                    onClick={() => handleSectionClick(item.id)}
                    className="relative cursor-pointer transition-all duration-200"
                    style={{
                      fontSize: isActive ? '15.5px' : '15px',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#ffffff' : '#a0a0a0',
                      background: 'transparent',
                      border: 'none',
                      padding: '10px 16px',
                      outline: 'none',
                      whiteSpace: 'nowrap',
                      transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#e0e0e0'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#a0a0a0'
                      }
                    }}
                  >
                    {item.label}
                  </motion.button>
                )
              })}
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  )
}
