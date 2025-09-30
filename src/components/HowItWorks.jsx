import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Consulta Inicial",
      description: "Evaluamos tu caso de forma gratuita. Analizamos tu situación particular y te explicamos las opciones disponibles con plazos y costos.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="#f0f9ff" stroke="#2563eb" strokeWidth="2"/>
          <path d="M16 24l4 4 8-8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="36" cy="12" r="6" fill="#2563eb"/>
          <path d="M33 12h6M36 9v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      number: "02", 
      title: "Armado del Expediente",
      description: "Recopilamos y preparamos toda la documentación necesaria. Te guiamos en cada paso y nos encargamos de las gestiones ante organismos oficiales.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="#f0fdf4" stroke="#059669" strokeWidth="2"/>
          <rect x="16" y="18" width="16" height="12" rx="2" fill="none" stroke="#059669" strokeWidth="2"/>
          <path d="M18 22h12M18 25h10M18 28h8" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 13l4 4-4 4" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      number: "03",
      title: "Seguimiento y Resultado",
      description: "Realizamos el seguimiento completo del trámite hasta su finalización. Te mantenemos informado en cada etapa del proceso.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <path d="M24 8v32M8 24h32" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="18" r="3" fill="#f59e0b"/>
          <circle cx="30" cy="18" r="3" fill="#f59e0b"/>
          <circle cx="18" cy="30" r="3" fill="#f59e0b"/>
          <circle cx="30" cy="30" r="3" fill="#f59e0b"/>
        </svg>
      )
    }
  ]

  return (
    <section id="como-funciona" className="how-it-works section section-alt">
      <div className="container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">¿Cómo Funciona?</h2>
          <p className="how-it-works__subtitle">
            Nuestro proceso está diseñado para hacer tu experiencia lo más simple y transparente posible.
            Te acompañamos desde la primera consulta hasta obtener tus documentos.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step__visual">
                <div className="step__icon">
                  {step.icon}
                </div>
                
                <div className="step__number">
                  {step.number}
                </div>
              </div>

              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="step__connector" aria-hidden="true">
                  <svg width="100%" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="url(#stepGradient)" strokeWidth="2" strokeDasharray="5,5"/>
                    <defs>
                      <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works__features">
          <div className="feature-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Consulta gratuita</span>
          </div>
          
          <div className="feature-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            <span>Atención personalizada</span>
          </div>
          
          <div className="feature-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Seguimiento detallado</span>
          </div>
          
          <div className="feature-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Garantía de calidad</span>
          </div>
        </div>

        <div className="how-it-works__cta">
          <h3>¿Listo para comenzar?</h3>
          <p>El primer paso es una consulta gratuita donde evaluamos tu caso sin compromiso.</p>
          <a href="#contacto" className="btn btn-primary">
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks