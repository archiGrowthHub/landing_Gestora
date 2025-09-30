import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ onOpenAppointment, onToggleDarken, isDarkenActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para efecto de header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al hacer click en un link
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  // Manejar tecla Escape para cerrar menú móvil
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Navegación principal">
          {/* Logo */}
          <div className="nav__logo">
            <a href="#home" className="nav__logo-link" onClick={handleNavClick}>
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="8" fill="#2563eb"/>
                <path 
                  d="M12 14h16v2H12v-2zM12 18h12v2H12v-2zM12 22h16v2H12v-2zM12 26h10v2H12v-2z" 
                  fill="white"
                />
                <circle cx="30" cy="10" r="4" fill="#dc2626"/>
              </svg>
              <span className="nav__logo-text">
                Turnos y Expediente
              </span>
            </a>
          </div>

          {/* Navegación desktop */}
          <ul className="nav__links" role="menubar">
            <li role="none">
              <a 
                href="#servicios" 
                className="nav__link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Servicios
              </a>
            </li>
            <li role="none">
              <a 
                href="#como-funciona" 
                className="nav__link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Cómo funciona
              </a>
            </li>
            <li role="none">
              <a 
                href="#testimonios" 
                className="nav__link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Testimonios
              </a>
            </li>
            <li role="none">
              <a 
                href="#faq" 
                className="nav__link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                FAQ
              </a>
            </li>
            <li role="none">
              <a 
                href="#contacto" 
                className="nav__link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Botones de acción */}
          <div className="nav__actions">
            {/* Botón Darken Overlay */}
            <button
              type="button"
              className={`nav__darken-btn ${isDarkenActive ? 'nav__darken-btn--active' : ''}`}
              onClick={onToggleDarken}
              aria-label={isDarkenActive ? 'Desactivar overlay oscuro' : 'Activar overlay oscuro'}
              title={isDarkenActive ? 'Desactivar overlay oscuro' : 'Activar overlay oscuro'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7C15 8.32608 14.4732 9.59785 13.5355 10.5355C12.5979 11.4732 11.3261 12 10 12C8.67392 12 7.40215 11.4732 6.46447 10.5355C5.52678 9.59785 5 8.32608 5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2ZM10 4C9.20435 4 8.44129 4.31607 7.87868 4.87868C7.31607 5.44129 7 6.20435 7 7C7 7.79565 7.31607 8.55871 7.87868 9.12132C8.44129 9.68393 9.20435 10 10 10C10.7956 10 11.5587 9.68393 12.1213 9.12132C12.6839 8.55871 13 7.79565 13 7C13 6.20435 12.6839 5.44129 12.1213 4.87868C11.5587 4.31607 10.7956 4 10 4ZM10 14.5C12.67 14.5 18 15.83 18 18.5V20H2V18.5C2 15.83 7.33 14.5 10 14.5Z" 
                  fill="currentColor"
                  opacity={isDarkenActive ? "0.3" : "1"}
                />
              </svg>
            </button>

            {/* Botón CTA */}
            <button
              type="button"
              className="btn btn-primary nav__cta"
              onClick={onOpenAppointment}
            >
              Solicitar Turno
            </button>

            {/* Botón menú móvil */}
            <button
              type="button"
              className={`nav__mobile-toggle ${isMenuOpen ? 'nav__mobile-toggle--active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Menú móvil */}
        <div 
          id="mobile-menu"
          className={`nav__mobile ${isMenuOpen ? 'nav__mobile--open' : ''}`}
          role="menu"
        >
          <ul className="nav__mobile-links">
            <li role="none">
              <a 
                href="#servicios" 
                className="nav__mobile-link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Servicios
              </a>
            </li>
            <li role="none">
              <a 
                href="#como-funciona" 
                className="nav__mobile-link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Cómo funciona
              </a>
            </li>
            <li role="none">
              <a 
                href="#testimonios" 
                className="nav__mobile-link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Testimonios
              </a>
            </li>
            <li role="none">
              <a 
                href="#faq" 
                className="nav__mobile-link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                FAQ
              </a>
            </li>
            <li role="none">
              <a 
                href="#contacto" 
                className="nav__mobile-link" 
                role="menuitem"
                onClick={handleNavClick}
              >
                Contacto
              </a>
            </li>
          </ul>
          
          <div className="nav__mobile-cta">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onOpenAppointment()
                setIsMenuOpen(false)
              }}
            >
              Solicitar Turno
            </button>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menú móvil */}
      {isMenuOpen && (
        <div 
          className="nav__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header