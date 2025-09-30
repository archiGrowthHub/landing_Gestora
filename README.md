# Turnos y Expediente - Landing Page

Landing page profesional para la agencia "Turnos y Expediente", especializada en gestión de ciudadanía italiana, residencia europea y trámites migratorios.

## 🚀 Características Implementadas

### ✅ Stack Tecnológico
- **React 18** con JavaScript
- **Vite** como build tool y dev server
- **CSS nativo** con variables CSS y metodología BEM
- **HTML semántico** con roles ARIA para accesibilidad
- Funcionalidad **100% client-side** (sin backend)

### ✅ Componentes Principales

#### 1. Header Interactivo
- Navegación sticky con efecto de scroll
- Logo SVG personalizado  
- **Botón "Darken Overlay"** - Activa overlay oscuro semitransparente
- Menú móvil hamburguesa responsive
- Navegación por teclado y accesibilidad completa

#### 2. Sección Hero
- Título impactante con call-to-action destacado
- Features list con iconos SVG
- Ilustración SVG custom con animación flotante
- Indicadores de confianza (estadísticas)
- Botón CTA que abre modal de formulario

#### 3. Servicios (5 Cards)
- **Ciudadanía Italiana** - Gestión completa de expedientes
- **Residencia Europea** - Trámites para UE  
- **Visados y Permisos** - Trabajo, estudio, turismo
- **Legalización de Documentos** - Apostillado y consulados
- **Asesoría Genealógica** - Investigación de antecedentes
- Animaciones hover y efectos visuales

#### 4. "Cómo Funciona" (3 Pasos)
- **Consulta Inicial** - Evaluación gratuita
- **Armado del Expediente** - Recopilación de documentos
- **Seguimiento y Resultado** - Proceso completo hasta finalización
- Conectores visuales entre pasos
- Features badges y CTA final

#### 5. Testimonios
- 3 testimonios ficticios con avatares SVG
- Sistema de rating con estrellas
- Card destacada (featured)
- Estadísticas de rendimiento
- CTA de conversión

#### 6. FAQ Interactiva
- 6 preguntas frecuentes expandibles
- Navegación por teclado (Enter/Escape)
- Sidebar con card de ayuda y contacto directo
- Animaciones suaves de expansión

#### 7. Footer Completo
- Sección de contacto con métodos múltiples
- Links de servicios y empresa
- Redes sociales con iconos SVG
- Información de contacto detallada
- Footer legal con copyright

### ✅ Formulario Avanzado

#### Campos Implementados
- **Tipo de Trámite** (Select): Ciudadanía/Residencia/Visado/Otro
- **Nombre y Apellido** (Text): Validación de longitud mínima
- **Email** (Email): Validación de formato
- **Teléfono/WhatsApp** (Tel): Validación de formato internacional
- **País de Nacimiento** (Text): Campo requerido
- **Ascendencia Italiana** (Radio): Sí/No con lógica condicional
- **Parentesco** (Text): Condicional si tiene ascendencia
- **Mensaje** (Textarea): Longitud mínima 10 caracteres
- **Consentimiento** (Checkbox): Link a Aviso de Privacidad
- **Campo Honeypot** (Hidden): Protección anti-spam

#### Validaciones Client-Side
- Validación en tiempo real (onChange)
- Mensajes de error inline con iconos
- Prevención de envío con errores
- Feedback visual con colores y estados
- Accesibilidad con ARIA labels y roles

#### Modal de Agradecimiento
- Animación de éxito con SVG checkmark
- **Resumen expandible** de datos enviados
- **Descarga de JSON** generado en el navegador
- **Copia al portapapeles** con feedback visual
- Información de próximos pasos
- Datos de contacto directo

### ✅ Accesibilidad y UX

#### Navegación por Teclado
- Tab navigation completa
- Enter/Space para activar elementos
- Escape para cerrar modales y overlays
- Focus visible personalizado

#### ARIA y Semántica
- Roles apropiados (navigation, dialog, etc.)
- Labels descriptivos para screen readers
- Live regions para feedback dinámico
- Estructura de headings jerárquica

#### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Grid adaptativo y flexible
- Imágenes y SVGs optimizados

### ✅ Interacciones Avanzadas

#### Darken Overlay
- Botón en header activa overlay semitransparente
- Efecto backdrop-filter blur
- Cierre con Escape o click fuera
- Previene scroll del body cuando activo
- Indicador visual de estado activo

#### Animaciones CSS
- Transiciones suaves en todos los elementos
- Keyframes para loading spinner
- Hover effects en cards y botones
- Animaciones de entrada para elementos
- Respeto por `prefers-reduced-motion`

#### Estados de Loading
- Spinner en formulario durante envío
- Feedback visual durante procesamiento
- Deshabilitación de botones durante operaciones
- Mensajes de confirmación claros

### ✅ Funcionalidades Cliente-Only

#### Descarga de Archivos
- Generación de JSON en el navegador
- Blob API para crear archivos
- Descarga automática sin servidor
- Nombres de archivo con timestamp

#### Gestión de Estado
- React hooks (useState, useEffect)
- Estado compartido entre componentes
- Validación de formularios en tiempo real
- Persistencia temporal en memoria

## 🛠 Instalación y Desarrollo

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd turnos-expediente-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles
```bash
# Desarrollo
npm run dev          # Servidor dev en http://localhost:3000

# Producción  
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Herramientas
npm run lint         # Linter ESLint para calidad de código
```

### Estructura del Proyecto
```
turnos-expediente-landing/
├── public/                 # Assets estáticos
│   ├── favicon.svg        # Favicon personalizado
│   └── og-image.jpg       # Open Graph image (placeholder)
├── src/                   # Código fuente
│   ├── components/        # Componentes React
│   │   ├── Header.jsx     # Navegación y darken overlay
│   │   ├── Hero.jsx       # Sección principal
│   │   ├── Services.jsx   # Grid de servicios
│   │   ├── HowItWorks.jsx # Proceso en 3 pasos
│   │   ├── Testimonials.jsx # Testimonios y stats
│   │   ├── FAQ.jsx        # Preguntas frecuentes
│   │   ├── Footer.jsx     # Footer y contacto
│   │   ├── AppointmentModal.jsx # Formulario principal
│   │   ├── ThankYouModal.jsx    # Modal de agradecimiento
│   │   └── DarkenOverlay.jsx    # Overlay oscuro
│   ├── styles/           # Estilos globales
│   │   └── global.css    # Variables CSS y reset
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Entry point
├── index.html           # HTML base con meta tags SEO
├── package.json         # Dependencias y scripts
└── vite.config.js      # Configuración de Vite
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 479px
- **Tablet**: 480px - 767px  
- **Desktop Small**: 768px - 1023px
- **Desktop Large**: 1024px+

## 🎨 Paleta de Colores

```css
:root {
  --primary-color: #2563eb;    /* Azul principal */
  --primary-dark: #1d4ed8;     /* Azul hover */
  --secondary-color: #059669;  /* Verde secundario */
  --accent-color: #dc2626;     /* Rojo de acento */
  --text-dark: #1f2937;       /* Texto principal */
  --text-light: #6b7280;      /* Texto secundario */
  --bg-white: #ffffff;        /* Fondo principal */
  --bg-light: #f9fafb;       /* Fondo alternativo */
}
```

## 🔒 Seguridad y Privacidad

### Protección Anti-Spam
- Campo honeypot oculto en formulario
- Validación client-side completa
- Sin envío a servidor externo

### Datos del Usuario
- Procesamiento solo en el navegador
- Descarga de datos en formato JSON
- Sin almacenamiento en servidor
- Link placeholder a Aviso de Privacidad

## 📊 SEO y Performance

### Meta Tags Implementados
- Title y description optimizados
- Open Graph para redes sociales
- Viewport para mobile
- Favicon SVG escalable

### Optimizaciones
- CSS variables para consistencia
- SVG inline para mejor rendimiento  
- Lazy loading ready (sin imágenes externas)
- Minificación automática en build

## 🎯 Próximas Mejoras Recomendadas

### Funcionalidad
- [ ] Integración con API de envío de emails
- [ ] Sistema de captcha más avanzado  
- [ ] Calendario para agendamiento de citas
- [ ] Chat en vivo o WhatsApp widget

### UX/UI
- [ ] Modo oscuro completo
- [ ] Más animaciones e interacciones
- [ ] Galería de casos de éxito
- [ ] Blog o centro de recursos

### Técnicas
- [ ] Tests unitarios con Jest
- [ ] TypeScript para mejor DX
- [ ] PWA con service worker
- [ ] Análisis de performance

## 📞 Información de Contacto

**Turnos y Expediente**
- 📱 WhatsApp: +54 9 11 1234-5678
- 📧 Email: info@turnosyexpediente.com  
- 📍 Dirección: Av. Corrientes 1234, CABA
- 🕒 Horario: Lun a Vie 9:00 - 18:00

---

## 💡 Notas para el Cliente

Esta landing page está completamente lista para ser desplegada. Todos los requisitos técnicos y funcionales han sido implementados:

### ✅ Cumplimiento Total de Requisitos
- ✅ React + Vite + CSS nativo
- ✅ Navegación semántica y accesible
- ✅ Botón darken overlay funcional
- ✅ Formulario completo con validaciones
- ✅ Modal de agradecimiento con descarga JSON
- ✅ Responsive mobile-first
- ✅ Funciona 100% en el navegador

### 🚀 Para Hacer Deploy
1. Ejecutar `npm run build`
2. Subir carpeta `dist/` a su hosting
3. Configurar servidor para SPA (redirigir a index.html)

### 🔧 Personalizaciones Fáciles
- **Colores**: Modificar variables en `src/styles/global.css`
- **Textos**: Editar directamente en componentes JSX
- **Datos de contacto**: Actualizar en `Footer.jsx` y `ThankYouModal.jsx`  
- **Logo**: Reemplazar SVG en `Header.jsx`

**¡La landing está lista para recibir clientes y generar conversiones!**