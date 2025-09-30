import React, { useEffect, useState } from 'react'
import './ThankYouModal.css'

const ThankYouModal = ({ onClose, formData }) => {
  const [showDetails, setShowDetails] = useState(false)

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Función para descargar el JSON
  const downloadJSON = () => {
    if (!formData) return

    const dataStr = JSON.stringify(formData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `solicitud-turno-${formData.id || Date.now()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Función para copiar datos al portapapeles
  const copyToClipboard = async () => {
    if (!formData) return

    try {
      const dataStr = JSON.stringify(formData, null, 2)
      await navigator.clipboard.writeText(dataStr)
      
      // Feedback visual simple
      const button = document.querySelector('.copy-button')
      if (button) {
        const originalText = button.innerHTML
        button.innerHTML = '✅ Copiado'
        setTimeout(() => {
          button.innerHTML = originalText
        }, 2000)
      }
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  // Formatear datos para mostrar
  const formatDisplayData = () => {
    if (!formData) return {}

    const tipoTramiteLabels = {
      ciudadania: 'Ciudadanía Italiana',
      residencia: 'Residencia Europea', 
      visado: 'Visado',
      otro: 'Otro'
    }

    const ascendenciaLabels = {
      si: 'Sí',
      no: 'No'
    }

    return {
      'Tipo de Trámite': tipoTramiteLabels[formData.tipoTramite] || formData.tipoTramite,
      'Nombre Completo': `${formData.nombre} ${formData.apellido}`,
      'Email': formData.email,
      'Teléfono': formData.telefono,
      'País de Nacimiento': formData.paisNacimiento,
      'Ascendencia Italiana': ascendenciaLabels[formData.ascendenciaItaliana] || formData.ascendenciaItaliana,
      ...(formData.parentesco && { 'Parentesco': formData.parentesco }),
      'Mensaje': formData.mensaje,
      'Fecha de Envío': new Date(formData.fechaEnvio).toLocaleString('es-AR')
    }
  }

  const displayData = formatDisplayData()

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="thank-you-modal" role="dialog" aria-labelledby="thankyou-title" aria-modal="true">
        {/* Success Animation */}
        <div className="success-animation">
          <svg className="checkmark" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle 
              cx="40" 
              cy="40" 
              r="35" 
              stroke="#059669" 
              strokeWidth="3" 
              fill="none"
              className="checkmark-circle"
            />
            <path 
              d="M25 40l10 10 20-20" 
              stroke="#059669" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="checkmark-check"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="thank-you-modal__content">
          <h2 id="thankyou-title" className="thank-you-modal__title">
            ¡Solicitud Enviada Exitosamente!
          </h2>
          
          <p className="thank-you-modal__message">
            Gracias por contactarnos. Hemos recibido tu solicitud de turno y nos pondremos en contacto 
            contigo en las próximas <strong>24-48 horas hábiles</strong> para coordinar una consulta.
          </p>

          <div className="thank-you-modal__info">
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7C15 8.32608 14.4732 9.59785 13.5355 10.5355C12.5979 11.4732 11.3261 12 10 12C8.67392 12 7.40215 11.4732 6.46447 10.5355C5.52678 9.59785 5 8.32608 5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2ZM10 14.5C12.67 14.5 18 15.83 18 18.5V20H2V18.5C2 15.83 7.33 14.5 10 14.5Z" fill="currentColor"/>
              </svg>
              <span>Consulta inicial <strong>completamente gratuita</strong></span>
            </div>
            
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
              </svg>
              <span>Te contactaremos por <strong>WhatsApp y email</strong></span>
            </div>
            
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" fill="currentColor"/>
              </svg>
              <span>Respuesta en <strong>24-48 horas hábiles</strong></span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="thank-you-modal__summary">
            <button
              type="button"
              className="summary-toggle"
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
              aria-controls="summary-details"
            >
              <span>Resumen de tu solicitud</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={showDetails ? 'rotated' : ''}
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {showDetails && (
              <div id="summary-details" className="summary-details">
                {Object.entries(displayData).map(([key, value]) => (
                  <div key={key} className="summary-item">
                    <span className="summary-key">{key}:</span>
                    <span className="summary-value">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Download Section */}
          <div className="thank-you-modal__download">
            <h3>Guardar Copia de tu Solicitud</h3>
            <p>Descarga una copia de los datos enviados para tus archivos personales.</p>
            
            <div className="download-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={downloadJSON}
                title="Descargar archivo JSON"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12l-4-4h2.5V3h3v5H14l-4 4zM3 15h14v2H3v-2z" fill="currentColor"/>
                </svg>
                Descargar JSON
              </button>
              
              <button
                type="button"
                className="btn btn-ghost copy-button"
                onClick={copyToClipboard}
                title="Copiar al portapapeles"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" fill="currentColor"/>
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" fill="currentColor"/>
                </svg>
                Copiar Datos
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="thank-you-modal__next-steps">
            <h3>¿Qué sigue ahora?</h3>
            <ol className="steps-list">
              <li>Revisaremos tu consulta y caso específico</li>
              <li>Te contactaremos para agendar una cita</li>
              <li>Evaluaremos tus documentos de forma gratuita</li>
              <li>Te daremos un plan personalizado y presupuesto</li>
            </ol>
          </div>

          {/* Contact Info */}
          <div className="thank-you-modal__contact">
            <p>
              <strong>¿Tenés alguna urgencia?</strong><br/>
              Escribinos directamente por WhatsApp: 
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                +54 9 11 1234-5678
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="thank-you-modal__footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClose}
            >
              Perfecto, Entendido
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          className="thank-you-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ThankYouModal