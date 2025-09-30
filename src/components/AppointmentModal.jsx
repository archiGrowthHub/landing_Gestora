import React, { useState, useEffect } from "react";
import "./AppointmentModal.css";

const AppointmentModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    tipoTramite: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    paisNacimiento: "",
    ascendenciaItaliana: "",
    parentesco: "",
    mensaje: "",
    consentimiento: false,
    honeypot: "", // Campo anti-spam oculto
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevenir scroll del body
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Validaciones
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "tipoTramite":
        if (!value) {
          newErrors.tipoTramite = "Seleccione un tipo de trámite";
        } else {
          delete newErrors.tipoTramite;
        }
        break;

      case "nombre":
        if (!value.trim()) {
          newErrors.nombre = "El nombre es requerido";
        } else if (value.trim().length < 2) {
          newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
        } else if (!/^[a-záéíóúñü\s]+$/i.test(value.trim())) {
          newErrors.nombre = "El nombre solo puede contener letras";
        } else {
          delete newErrors.nombre;
        }
        break;

      case "apellido":
        if (!value.trim()) {
          newErrors.apellido = "El apellido es requerido";
        } else if (value.trim().length < 2) {
          newErrors.apellido = "El apellido debe tener al menos 2 caracteres";
        } else if (!/^[a-záéíóúñü\s]+$/i.test(value.trim())) {
          newErrors.apellido = "El apellido solo puede contener letras";
        } else {
          delete newErrors.apellido;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "El email es requerido";
        } else if (!emailRegex.test(value.trim())) {
          newErrors.email = "Ingrese un email válido";
        } else {
          delete newErrors.email;
        }
        break;

      case "telefono":
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!value.trim()) {
          newErrors.telefono = "El teléfono es requerido";
        } else if (!phoneRegex.test(value.trim().replace(/\s/g, ""))) {
          newErrors.telefono = "Ingrese un teléfono válido";
        } else {
          delete newErrors.telefono;
        }
        break;

      case "paisNacimiento":
        if (!value.trim()) {
          newErrors.paisNacimiento = "El país de nacimiento es requerido";
        } else if (value.trim().length < 2) {
          newErrors.paisNacimiento = "El país debe tener al menos 2 caracteres";
        } else {
          delete newErrors.paisNacimiento;
        }
        break;

      case "ascendenciaItaliana":
        if (!value) {
          newErrors.ascendenciaItaliana = "Seleccione una opción";
        } else {
          delete newErrors.ascendenciaItaliana;
        }
        break;

      case "parentesco":
        if (formData.ascendenciaItaliana === "si" && !value.trim()) {
          newErrors.parentesco =
            "El parentesco es requerido si tiene ascendencia italiana";
        } else {
          delete newErrors.parentesco;
        }
        break;

      case "mensaje":
        if (!value.trim()) {
          newErrors.mensaje = "El mensaje es requerido";
        } else if (value.trim().length < 10) {
          newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
        } else {
          delete newErrors.mensaje;
        }
        break;

      case "consentimiento":
        if (!value) {
          newErrors.consentimiento = "Debe aceptar el aviso de privacidad";
        } else {
          delete newErrors.consentimiento;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Validar en tiempo real
    validateField(name, newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar honeypot (campo anti-spam)
    if (formData.honeypot) {
      // Si el honeypot tiene valor, es probablemente spam
      return;
    }

    setIsSubmitting(true);

    // Validar todos los campos
    let hasErrors = false;
    const fieldsToValidate = [
      "tipoTramite",
      "nombre",
      "apellido",
      "email",
      "telefono",
      "paisNacimiento",
      "ascendenciaItaliana",
      "mensaje",
      "consentimiento",
    ];

    // Validar parentesco solo si tiene ascendencia italiana
    if (formData.ascendenciaItaliana === "si") {
      fieldsToValidate.push("parentesco");
    }

    fieldsToValidate.forEach((field) => {
      const isValid = validateField(field, formData[field]);
      if (!isValid) hasErrors = true;
    });

    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    // Simular envío (en un caso real aquí iría la llamada a la API)
    setTimeout(() => {
      const submissionData = {
        ...formData,
        fechaEnvio: new Date().toISOString(),
        id: Date.now().toString(),
      };

      // Remover honeypot del objeto final
      delete submissionData.honeypot;

      onSubmit(submissionData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal"
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <div className="modal__header">
          <h2 id="modal-title" className="modal__title">
            Solicitar Turno
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* Tipo de Trámite */}
            <div className="form-group form-group--full">
              <label htmlFor="tipoTramite" className="form-label">
                Tipo de Trámite *
              </label>
              <select
                id="tipoTramite"
                name="tipoTramite"
                className={`form-select ${
                  errors.tipoTramite ? "form-select--error" : ""
                }`}
                value={formData.tipoTramite}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccione un tipo de trámite</option>
                <option value="ciudadania">Ciudadanía Italiana</option>
                <option value="residencia">Residencia Europea</option>
                <option value="visado">Visado</option>
                <option value="otro">Otro</option>
              </select>
              {errors.tipoTramite && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.tipoTramite}
                </span>
              )}
            </div>

            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className={`form-input ${
                  errors.nombre ? "form-input--error" : ""
                }`}
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingrese su nombre"
                required
              />
              {errors.nombre && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.nombre}
                </span>
              )}
            </div>

            {/* Apellido */}
            <div className="form-group">
              <label htmlFor="apellido" className="form-label">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className={`form-input ${
                  errors.apellido ? "form-input--error" : ""
                }`}
                value={formData.apellido}
                onChange={handleInputChange}
                placeholder="Ingrese su apellido"
                required
              />
              {errors.apellido && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.apellido}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${
                  errors.email ? "form-input--error" : ""
                }`}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ejemplo@email.com"
                required
              />
              {errors.email && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono" className="form-label">
                Teléfono/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className={`form-input ${
                  errors.telefono ? "form-input--error" : ""
                }`}
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="+54 9 11 1234-5678"
                required
              />
              {errors.telefono && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.telefono}
                </span>
              )}
            </div>

            {/* País de Nacimiento */}
            <div className="form-group form-group--full">
              <label htmlFor="paisNacimiento" className="form-label">
                País de Nacimiento *
              </label>
              <input
                type="text"
                id="paisNacimiento"
                name="paisNacimiento"
                className={`form-input ${
                  errors.paisNacimiento ? "form-input--error" : ""
                }`}
                value={formData.paisNacimiento}
                onChange={handleInputChange}
                placeholder="Ejemplo: Argentina"
                required
              />
              {errors.paisNacimiento && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.paisNacimiento}
                </span>
              )}
            </div>

            {/* Ascendencia Italiana */}
            <div className="form-group form-group--full">
              <fieldset className="form-fieldset">
                <legend className="form-label">
                  ¿Tenés ascendencia italiana? *
                </legend>
                <div className="form-radio-group">
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ascendenciaItaliana"
                      value="si"
                      checked={formData.ascendenciaItaliana === "si"}
                      onChange={handleInputChange}
                      required
                    />
                    <span>Sí</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ascendenciaItaliana"
                      value="no"
                      checked={formData.ascendenciaItaliana === "no"}
                      onChange={handleInputChange}
                      required
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>
              {errors.ascendenciaItaliana && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.ascendenciaItaliana}
                </span>
              )}
            </div>

            {/* Parentesco (condicional) */}
            {formData.ascendenciaItaliana === "si" && (
              <div className="form-group form-group--full">
                <label htmlFor="parentesco" className="form-label">
                  Parentesco con el antepasado italiano *
                </label>
                <input
                  type="text"
                  id="parentesco"
                  name="parentesco"
                  className={`form-input ${
                    errors.parentesco ? "form-input--error" : ""
                  }`}
                  value={formData.parentesco}
                  onChange={handleInputChange}
                  placeholder="Ejemplo: Bisabuelo paterno"
                  required
                />
                {errors.parentesco && (
                  <span className="form-error" role="alert" aria-live="polite">
                    {errors.parentesco}
                  </span>
                )}
              </div>
            )}

            {/* Mensaje */}
            <div className="form-group form-group--full">
              <label htmlFor="mensaje" className="form-label">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className={`form-textarea ${
                  errors.mensaje ? "form-textarea--error" : ""
                }`}
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntenos sobre su caso, dudas específicas, documentos disponibles, etc."
                rows="4"
                required
              />
              {errors.mensaje && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.mensaje}
                </span>
              )}
            </div>

            {/* Campo honeypot (oculto) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Consentimiento */}
            <div className="form-group form-group--full">
              <label
                className={`form-checkbox ${
                  errors.consentimiento ? "form-checkbox--error" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="consentimiento"
                  checked={formData.consentimiento}
                  onChange={handleInputChange}
                  required
                />
                <span>
                  Acepto el{" "}
                  <a
                    href="#aviso-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aviso de Privacidad
                  </a>{" "}
                  y autorizo el tratamiento de mis datos personales *
                </span>
              </label>
              {errors.consentimiento && (
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.consentimiento}
                </span>
              )}
            </div>
          </div>

          <div className="modal__footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="spinner"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeOpacity="0.3"
                    />
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar Solicitud"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
