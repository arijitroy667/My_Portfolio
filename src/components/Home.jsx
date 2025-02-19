import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Hero from './Home_elements/Hero'
import Skills from './Home_elements/Skills'
import Projects from './Home_elements/Projects'
function Home() {
  return (
    <div className='bg-gray-950'>
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
