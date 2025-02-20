import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Intro from './About_elements/Intro'
import Tech from './About_elements/Tech'
import Experiance from './About_elements/Experiance'
import Milestone from './About_elements/Milestone'
function About() {
  return (
    <div>
      <Intro/>
      <Tech/>
      <Experiance/>
      <Milestone/>
    </div>
  )
}

export default About
