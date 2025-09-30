import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Ciudadana Italiana",
      location: "Buenos Aires, Argentina",
      content: "Excelente atención desde el primer momento. Me guiaron paso a paso en todo el proceso de mi ciudadanía italiana. Siempre estuvieron disponibles para resolver mis dudas y el resultado fue exitoso. ¡Totalmente recomendable!",
      rating: 5,
      avatar: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#f0f9ff"/>
          <circle cx="30" cy="22" r="8" fill="#2563eb"/>
          <path d="M14 46c0-8 7-16 16-16s16 8 16 16" fill="#2563eb"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Carlos Rossi",
      role: "Residencia Europea",
      location: "Córdoba, Argentina",
      content: "Profesionales muy capacitados y confiables. El proceso de residencia fue más rápido de lo esperado gracias a su experiencia. La comunicación fue constante y clara en todo momento.",
      rating: 5,
      avatar: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#f0fdf4"/>
          <circle cx="30" cy="22" r="8" fill="#059669"/>
          <path d="M14 46c0-8 7-16 16-16s16 8 16 16" fill="#059669"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Ana Fernández",
      role: "Ciudadanía Italiana",
      location: "Rosario, Argentina",
      content: "Increíble servicio personalizado. Me ayudaron a encontrar documentos que pensé que eran imposibles de conseguir. Su dedicación y conocimiento hicieron la diferencia. ¡Mil gracias!",
      rating: 5,
      avatar: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#fef3c7"/>
          <circle cx="30" cy="22" r="8" fill="#f59e0b"/>
          <path d="M14 46c0-8 7-16 16-16s16 8 16 16" fill="#f59e0b"/>
        </svg>
      )
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={index < rating ? "#f59e0b" : "#e5e7eb"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))
  }

  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">Qué Dicen Nuestros Clientes</h2>
          <p className="testimonials__subtitle">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Conocé las experiencias de quienes ya lograron sus objetivos con nuestra ayuda.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card ${index === 1 ? 'testimonial-card--featured' : ''}`}>
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  {testimonial.avatar}
                </div>
                
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{testimonial.name}</h4>
                  <p className="testimonial-card__role">{testimonial.role}</p>
                  <p className="testimonial-card__location">{testimonial.location}</p>
                </div>
              </div>

              <div className="testimonial-card__rating">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="testimonial-card__content">
                <svg className="testimonial-card__quote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                </svg>
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="testimonials__stats">
          <div className="stat">
            <div className="stat__number">500+</div>
            <div className="stat__label">Casos exitosos</div>
          </div>
          
          <div className="stat">
            <div className="stat__number">98%</div>
            <div className="stat__label">Satisfacción</div>
          </div>
          
          <div className="stat">
            <div className="stat__number">10+</div>
            <div className="stat__label">Años de experiencia</div>
          </div>
          
          <div className="stat">
            <div className="stat__number">5★</div>
            <div className="stat__label">Valoración promedio</div>
          </div>
        </div>

        <div className="testimonials__cta">
          <h3>¿Querés ser el próximo caso de éxito?</h3>
          <p>Únete a cientos de personas que ya obtuvieron su ciudadanía italiana con nuestra ayuda.</p>
          <a href="#contacto" className="btn btn-primary">
            Comenzar Mi Proceso
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials