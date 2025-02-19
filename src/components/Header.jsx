"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              YourName
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/about" className="text-base font-medium text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="/projects" className="text-base font-medium text-muted-foreground hover:text-primary">
              Projects
            </Link>
            <Link href="/contact" className="text-base font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="default" className="ml-8 whitespace-nowrap">
              Download CV
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
              <span className="sr-only">Toggle dark mode</span>
              {isDarkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
          >
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-muted">
          <div className="flex items-center px-5">
            <Button variant="default" className="w-full">
              Download CV
            </Button>
          </div>
          <div className="mt-3 px-2">
            <Button variant="ghost" onClick={toggleDarkMode} className="w-full justify-start">
              <span className="sr-only">Toggle dark mode</span>
              {isDarkMode ? (
                <Sun className="h-5 w-5 mr-2" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5 mr-2" aria-hidden="true" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

