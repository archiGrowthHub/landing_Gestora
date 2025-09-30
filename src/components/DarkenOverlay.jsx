import React, { useEffect } from 'react'
import './DarkenOverlay.css'

const DarkenOverlay = ({ isActive, onClose }) => {
  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isActive) {
        onClose()
      }
    }

    if (isActive) {
      document.addEventListener('keydown', handleEscape)
      // Prevenir scroll del body cuando está activo
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isActive, onClose])

  if (!isActive) return null

  return (
    <div 
      className="darken-overlay"
      onClick={onClose}
      role="button"
      tabIndex={0}
      aria-label="Cerrar overlay oscuro"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClose()
        }
      }}
    >
      <div className="darken-overlay__content">
        <div className="darken-overlay__info">
          <h3>Modo de visualización oscuro</h3>
          <p>Haz clic en cualquier lugar o presiona Esc para cerrar</p>
        </div>
        
        <button
          type="button"
          className="darken-overlay__close"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Cerrar overlay"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M18 6L6 18M6 6l12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default DarkenOverlay