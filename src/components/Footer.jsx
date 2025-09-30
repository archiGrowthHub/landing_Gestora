import React from 'react'
import './Footer.css'

const Footer = ({ onOpenAppointment }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Contact Section */}
      <section id="contacto" className="footer__contact">
        <div className="container">
          <div className="footer__contact-content">
            <div className="footer__contact-info">
              <h2 className="footer__contact-title">¿Listo para comenzar tu proceso?</h2>
              <p className="footer__contact-subtitle">
                Contactanos hoy mismo para una consulta gratuita. Nuestro equipo de especialistas 
                está listo para evaluar tu caso y guiarte en cada paso.
              </p>
              
              <div className="footer__contact-methods">
                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="contact-method__info">
                    <strong>WhatsApp</strong>
                    <span>+54 9 11 1234-5678</span>
                    <small>Respuesta inmediata</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="contact-method__info">
                    <strong>Email</strong>
                    <span>info@turnosyexpediente.com</span>
                    <small>Respuesta en 24 hs</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" fill="currentColor"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-method__info">
                    <strong>Oficina</strong>
                    <span>Av. Corrientes 1234, CABA</span>
                    <small>Lun a Vie 9 a 18 hs</small>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary footer__contact-cta"
                onClick={onOpenAppointment}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor"/>
                </svg>
                Solicitar Consulta Gratuita
              </button>
            </div>

            <div className="footer__contact-visual">
              <div className="footer__contact-image">
                {/* Illustration */}
                <svg 
                  width="400" 
                  height="300" 
                  viewBox="0 0 400 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer__illustration"
                  aria-hidden="true"
                >
                  {/* Background */}
                  <circle cx="200" cy="150" r="120" fill="#f0f9ff" opacity="0.6"/>
                  
                  {/* Phone */}
                  <rect x="160" y="100" width="80" height="100" rx="8" fill="white" stroke="#2563eb" strokeWidth="2"/>
                  <circle cx="200" cy="115" r="3" fill="#2563eb"/>
                  <rect x="175" y="125" width="50" height="3" rx="1.5" fill="#e5e7eb"/>
                  <rect x="175" y="135" width="30" height="3" rx="1.5" fill="#e5e7eb"/>
                  <rect x="175" y="145" width="40" height="3" rx="1.5" fill="#e5e7eb"/>
                  
                  {/* Speech bubbles */}
                  <ellipse cx="120" cy="80" rx="30" ry="20" fill="#2563eb"/>
                  <path d="M135 95l-10-5v-5" fill="#2563eb"/>
                  <text x="120" y="86" textAnchor="middle" fill="white" fontSize="12">Hola!</text>
                  
                  <ellipse cx="280" cy="220" rx="35" ry="25" fill="#059669"/>
                  <path d="M265 205l10 5v5" fill="#059669"/>
                  <text x="280" y="226" textAnchor="middle" fill="white" fontSize="10">¡Perfecto!</text>
                  
                  {/* Decorative elements */}
                  <circle cx="100" cy="200" r="4" fill="#f59e0b" opacity="0.4"/>
                  <circle cx="320" cy="100" r="6" fill="#dc2626" opacity="0.3"/>
                  <circle cx="80" cy="120" r="5" fill="#059669" opacity="0.4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            {/* Company Info */}
            <div className="footer__column footer__column--company">
              <div className="footer__logo">
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
                <span className="footer__logo-text">Turnos y Expediente</span>
              </div>
              
              <p className="footer__description">
                Especialistas en gestión de ciudadanía italiana, residencia europea y trámites migratorios. 
                Más de 10 años de experiencia ayudando a familias a lograr sus objetivos.
              </p>

              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook" title="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a href="#" className="footer__social-link" aria-label="Instagram" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C8.396 0 7.914.016 6.69.072 5.467.13 4.66.333 3.967.63c-.72.3-1.33.703-1.937 1.31C1.423 2.548 1.02 3.158.72 3.878c-.297.693-.5 1.5-.558 2.723C.016 7.825 0 8.307 0 11.928s.016 4.103.072 5.328c.058 1.223.261 2.03.558 2.723.3.72.703 1.33 1.31 1.937.607.607 1.217 1.01 1.937 1.31.693.297 1.5.5 2.723.558C7.825 23.984 8.307 24 11.928 24s4.103-.016 5.328-.072c1.223-.058 2.03-.261 2.723-.558.72-.3 1.33-.703 1.937-1.31.607-.607 1.01-1.217 1.31-1.937.297-.693.5-1.5.558-2.723C23.984 16.103 24 15.621 24 11.928s-.016-4.103-.072-5.328c-.058-1.223-.261-2.03-.558-2.723-.3-.72-.703-1.33-1.31-1.937C21.453 1.333 20.843.93 20.123.63c-.693-.297-1.5-.5-2.723-.558C16.175.016 15.693 0 12.017 0zM12.017 2.17c3.555 0 3.975.015 5.38.072 1.297.059 2.004.277 2.474.46.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.183.47.401 1.177.46 2.474.057 1.405.072 1.825.072 5.38s-.015 3.975-.072 5.38c-.059 1.297-.277 2.004-.46 2.474-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.47.183-1.177.401-2.474.46-1.405.057-1.825.072-5.38.072s-3.975-.015-5.38-.072c-1.297-.059-2.004-.277-2.474-.46-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.183-.47-.401-1.177-.46-2.474C2.185 15.992 2.17 15.572 2.17 12.017s.015-3.975.072-5.38c.059-1.297.277-2.004.46-2.474.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.47-.183 1.177-.401 2.474-.46C8.042 2.185 8.462 2.17 12.017 2.17zm0 3.405c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm0 10.718c-2.324 0-4.218-1.894-4.218-4.218 0-2.324 1.894-4.218 4.218-4.218 2.324 0 4.218 1.894 4.218 4.218 0 2.324-1.894 4.218-4.218 4.218zM18.72 5.288c0 .837-.678 1.515-1.515 1.515s-1.515-.678-1.515-1.515.678-1.515 1.515-1.515 1.515.678 1.515 1.515z"/>
                  </svg>
                </a>
                
                <a href="#" className="footer__social-link" aria-label="LinkedIn" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a href="https://wa.me/5491112345678" className="footer__social-link footer__social-link--whatsapp" aria-label="WhatsApp" title="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="footer__column">
              <h4 className="footer__column-title">Servicios</h4>
              <ul className="footer__links">
                <li><a href="#servicios">Ciudadanía Italiana</a></li>
                <li><a href="#servicios">Residencia Europea</a></li>
                <li><a href="#servicios">Visados y Permisos</a></li>
                <li><a href="#servicios">Legalización</a></li>
                <li><a href="#servicios">Asesoría Genealógica</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer__column">
              <h4 className="footer__column-title">Empresa</h4>
              <ul className="footer__links">
                <li><a href="#como-funciona">Cómo funciona</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#faq">Preguntas frecuentes</a></li>
                <li><a href="#aviso-privacidad">Aviso de Privacidad</a></li>
                <li><a href="#terminos">Términos y Condiciones</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__column">
              <h4 className="footer__column-title">Contacto</h4>
              <ul className="footer__contact-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>+54 9 11 1234-5678</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>info@turnosyexpediente.com</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Av. Corrientes 1234, CABA</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>Lun a Vie: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Turnos y Expediente. Todos los derechos reservados.
            </p>
            
            <div className="footer__legal">
              <a href="#aviso-privacidad">Privacidad</a>
              <span className="footer__separator">•</span>
              <a href="#terminos">Términos</a>
              <span className="footer__separator">•</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer