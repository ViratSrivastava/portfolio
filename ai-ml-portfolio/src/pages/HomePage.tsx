import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage