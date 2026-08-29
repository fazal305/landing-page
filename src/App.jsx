import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Credibility } from './components/Credibility'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Process } from './components/Process'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <div id="top" />
        <Hero />
        <Credibility />
        <Services />
        <Work />
        <Process />
        <About />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
