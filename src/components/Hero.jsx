import React from 'react'
import './Hero.css'

const Hero = ({ onOpenAppointment }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Gestión profesional de tu
              <span className="hero__title-highlight"> ciudadanía italiana</span>
            </h1>
            
            <p className="hero__subtitle">
              Asesoría especializada en trámites de ciudadanía italiana, residencia y visados. 
              Te acompañamos en cada paso del proceso con la experiencia y dedicación que necesitás.
            </p>
            
            <div className="hero__features">
              <div className="hero__feature">
                <svg className="hero__feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                <span>Asesoría personalizada</span>
              </div>
              
              <div className="hero__feature">
                <svg className="hero__feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                <span>Gestión completa de expedientes</span>
              </div>
              
              <div className="hero__feature">
                <svg className="hero__feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                </svg>
                <span>Seguimiento paso a paso</span>
              </div>
            </div>
            
            <div className="hero__actions">
              <button
                type="button"
                className="btn btn-primary hero__cta"
                onClick={onOpenAppointment}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
                </svg>
                Solicitar Turno
              </button>
              
              <a href="#como-funciona" className="btn btn-secondary hero__learn-more">
                Cómo funciona
              </a>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__image">
              {/* SVG Illustration placeholder */}
              <svg 
                className="hero__illustration" 
                width="500" 
                height="400" 
                viewBox="0 0 500 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Background */}
                <circle cx="250" cy="200" r="180" fill="#f0f9ff" opacity="0.5"/>
                
                {/* Main document */}
                <rect x="180" y="120" width="140" height="160" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* Document lines */}
                <rect x="200" y="140" width="100" height="4" rx="2" fill="#d1d5db"/>
                <rect x="200" y="156" width="80" height="4" rx="2" fill="#d1d5db"/>
                <rect x="200" y="172" width="90" height="4" rx="2" fill="#d1d5db"/>
                <rect x="200" y="188" width="70" height="4" rx="2" fill="#d1d5db"/>
                
                {/* Italian flag colors */}
                <rect x="200" y="220" width="20" height="30" fill="#009246"/>
                <rect x="220" y="220" width="20" height="30" fill="white" stroke="#e5e7eb"/>
                <rect x="240" y="220" width="20" height="30" fill="#ce2b37"/>
                
                {/* Checkmark */}
                <circle cx="350" cy="160" r="20" fill="#059669"/>
                <path d="M343 160l5 5 10-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Floating elements */}
                <circle cx="150" cy="140" r="6" fill="#2563eb" opacity="0.3"/>
                <circle cx="370" cy="100" r="4" fill="#dc2626" opacity="0.4"/>
                <circle cx="120" cy="240" r="8" fill="#059669" opacity="0.3"/>
                <circle cx="380" cy="280" r="5" fill="#f59e0b" opacity="0.4"/>
              </svg>
            </div>
            
            {/* Trust indicators */}
            <div className="hero__trust">
              <div className="hero__trust-item">
                <span className="hero__trust-number">500+</span>
                <span className="hero__trust-label">Casos exitosos</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-number">98%</span>
                <span className="hero__trust-label">Tasa de éxito</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-number">5★</span>
                <span className="hero__trust-label">Valoración</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero