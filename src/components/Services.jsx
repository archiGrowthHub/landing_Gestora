import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#f0f9ff" stroke="#2563eb" strokeWidth="2"/>
          <path d="M12 16h16v12H12V16z" fill="none" stroke="#2563eb" strokeWidth="2"/>
          <path d="M16 12v8M24 12v8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
          <rect x="18" y="20" width="4" height="4" fill="#2563eb"/>
        </svg>
      ),
      title: "Ciudadanía Italiana",
      description: "Gestión completa del expediente de ciudadanía italiana por descendencia. Asesoramiento en toda la documentación y proceso."
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#f0fdf4" stroke="#059669" strokeWidth="2"/>
          <path d="M15 20l3 3 7-7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="10" y="25" width="20" height="8" rx="2" fill="none" stroke="#059669" strokeWidth="2"/>
          <path d="M14 29h12M14 31h8" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Residencia Europea",
      description: "Trámites para obtener residencia en países de la Unión Europea. Te guiamos en cada paso del proceso migratorio."
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <rect x="12" y="14" width="16" height="12" rx="2" fill="none" stroke="#f59e0b" strokeWidth="2"/>
          <path d="M15 18h10M15 20h8M15 22h6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="25" cy="11" r="3" fill="#f59e0b"/>
        </svg>
      ),
      title: "Visados y Permisos",
      description: "Asesoría especializada en visados de trabajo, estudio y turismo. Maximizamos las posibilidades de aprobación."
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#fdf2f8" stroke="#dc2626" strokeWidth="2"/>
          <path d="M20 8v24M8 20h24" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="2" fill="#dc2626"/>
          <circle cx="24" cy="16" r="2" fill="#dc2626"/>
          <circle cx="16" cy="24" r="2" fill="#dc2626"/>
          <circle cx="24" cy="24" r="2" fill="#dc2626"/>
        </svg>
      ),
      title: "Legalización de Documentos",
      description: "Apostillado y legalización de documentos oficiales. Gestión integral ante consulados y organismos competentes."
    },
    {
      id: 5,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2"/>
          <circle cx="20" cy="16" r="4" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M12 28c0-4 3.5-8 8-8s8 4 8 8" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M26 12l4 4-4 4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Asesoría Genealógica",
      description: "Investigación de antecedentes familiares y búsqueda de documentación ancestral para procesos de ciudadanía."
    }
  ]

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">Nuestros Servicios</h2>
          <p className="services__subtitle">
            Ofrecemos asesoría integral en trámites migratorios con más de 10 años de experiencia. 
            Cada caso recibe atención personalizada y seguimiento detallado.
          </p>
        </div>
        
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__icon">
                {service.icon}
              </div>
              
              <h3 className="service-card__title">{service.title}</h3>
              
              <p className="service-card__description">
                {service.description}
              </p>
              
              <div className="service-card__footer">
                <span className="service-card__link">
                  Más información
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services__cta">
          <p className="services__cta-text">
            ¿No encontrás el servicio que necesitás?
          </p>
          <a href="#contacto" className="btn btn-secondary">
            Consultanos tu caso
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services