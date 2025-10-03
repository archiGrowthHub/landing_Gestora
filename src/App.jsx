import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import ThankYouModal from './components/ThankYouModal'
import DarkenOverlay from './components/DarkenOverlay'

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false)
  const [isDarkenOverlayActive, setIsDarkenOverlayActive] = useState(false)
  const [formData, setFormData] = useState(null)

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true)
  }

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false)
  }

  const handleFormSubmit = (data) => {
    setFormData(data)
    setIsAppointmentModalOpen(false)
    setIsThankYouModalOpen(true)
  }

  const closeThankYouModal = () => {
    setIsThankYouModalOpen(false)
    setFormData(null)
  }

  // const toggleDarkenOverlay = () => {
  //   setIsDarkenOverlayActive(prev => !prev)
  // }

  return (
    <div className="app">
      <Header 
        onOpenAppointment={openAppointmentModal}
        // onToggleDarken={toggleDarkenOverlay}
        // isDarkenActive={isDarkenOverlayActive}
      />
      <main>
        <Hero onOpenAppointment={openAppointmentModal} />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onOpenAppointment={openAppointmentModal} />
      
      {isAppointmentModalOpen && (
        <AppointmentModal 
          onClose={closeAppointmentModal}
          onSubmit={handleFormSubmit}
        />
      )}
      
      {isThankYouModalOpen && (
        <ThankYouModal 
          onClose={closeThankYouModal}
          formData={formData}
        />
      )}
      
      <DarkenOverlay 
        isActive={isDarkenOverlayActive}
        onClose={() => setIsDarkenOverlayActive(false)}
      />
    </div>
  )
}

export default App