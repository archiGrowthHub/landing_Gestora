import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "¿Cuánto tiempo demora el proceso de ciudadanía italiana?",
      answer: "El tiempo varía según cada caso, pero generalmente el proceso completo toma entre 6 meses y 2 años. Depende de factores como la complejidad de la documentación, los tiempos de respuesta de los organismos oficiales y si se requiere búsqueda genealógica adicional. Te mantenemos informado en cada etapa del proceso."
    },
    {
      id: 2,
      question: "¿Qué documentos necesito para iniciar el trámite?",
      answer: "Los documentos base incluyen: actas de nacimiento, matrimonio y defunción del antepasado italiano y de todos los descendientes hasta vos, certificados de naturalización (si los hubiera), y documentos de identidad actuales. Cada caso es único, por eso en la consulta inicial evaluamos específicamente qué documentos necesitás."
    },
    {
      id: 3,
      question: "¿Puedo obtener la ciudadanía si mi antepasado se naturalizó argentino?",
      answer: "Sí, es posible en muchos casos. La clave está en las fechas: si tu antepasado se naturalizó argentino después del nacimiento de su hijo/a (tu ascendiente), el derecho a la ciudadanía se mantiene. Si se naturalizó antes, hay alternativas legales que podemos evaluar en tu consulta gratuita."
    },
    {
      id: 4,
      question: "¿Ofrecen garantías en sus servicios?",
      answer: "Sí, ofrecemos garantía de satisfacción en nuestros servicios. Si por alguna razón el proceso no puede completarse por causas imputables a nuestro trabajo, devolvemos el dinero. Sin embargo, es importante aclarar que hay factores externos (como cambios en la legislación) que están fuera de nuestro control."
    },
    {
      id: 5,
      question: "¿Cuáles son los costos del proceso?",      
      answer: "Los costos varían según la complejidad del caso y los servicios requeridos. Incluyen nuestros honorarios profesionales, tasas consulares, apostillados, traducciones oficiales y búsqueda de documentos. En la consulta gratuita te damos un presupuesto detallado y transparente sin sorpresas."
    },
    {
      id: 6,
      question: "¿Pueden ayudarme si no tengo todos los documentos?",
      answer: "¡Por supuesto! Una de nuestras especialidades es la búsqueda y recuperación de documentos faltantes. Tenemos contactos y experiencia en archivos de Argentina, Italia y otros países. Muchos clientes llegan sin documentación completa y logramos armar exitosamente sus expedientes."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleFAQ(index)
    }
  }

  return (
    <section id="faq" className="faq section section-alt">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">Preguntas Frecuentes</h2>
          <p className="faq__subtitle">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos. 
            Si tenés alguna consulta específica, no dudes en contactarnos.
          </p>
        </div>

        <div className="faq__content">
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <div key={faq.id} className={`faq-item ${activeIndex === index ? 'faq-item--active' : ''}`}>
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-item__question-text">{faq.question}</span>
                  <span className="faq-item__icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d={activeIndex === index ? "M15 8l-5 5-5-5" : "M7 8l5-5 5 5"} 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                
                <div 
                  id={`faq-answer-${faq.id}`}
                  className="faq-item__answer"
                  aria-hidden={activeIndex !== index}
                >
                  <div className="faq-item__answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq__sidebar">
            <div className="faq__help-card">
              <div className="faq__help-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#f0f9ff" stroke="#2563eb" strokeWidth="2"/>
                  <path d="M18 20c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2-1 3-3 4l-1 2h-4l-1-2c-2-1-3-2-3-4z" fill="#2563eb"/>
                  <circle cx="24" cy="32" r="2" fill="#2563eb"/>
                </svg>
              </div>
              
              <h3>¿No encontrás tu respuesta?</h3>
              <p>Nuestro equipo está listo para resolver todas tus dudas específicas.</p>
              
              <a href="#contacto" className="btn btn-primary">
                Hacer una Consulta
              </a>
            </div>

            <div className="faq__contact-card">
              <h4>Contacto Directo</h4>
              
              <div className="faq__contact-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
                </svg>
                <div>
                  <strong>WhatsApp</strong>
                  <span>+54 9 11 1234-5678</span>
                </div>
              </div>
              
              <div className="faq__contact-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="currentColor"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="currentColor"/>
                </svg>
                <div>
                  <strong>Email</strong>
                  <span>info@turnosyexpediente.com</span>
                </div>
              </div>
              
              <div className="faq__contact-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" fill="currentColor"/>
                </svg>
                <div>
                  <strong>Horario</strong>
                  <span>Lun a Vie 9 a 18 hs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ