export const SITES_DATA = [
  {
    id: "mercadolibre",
    name: "Mercado Libre Colombia",
    url: "https://www.mercadolibre.com.co/",
    category: "E-Commerce",
    overallScore: 92,
    scores: {
      ux_writing: 94,
      miller_law: 90,
      jakob_law: 95,
      fitts_law: 89
    },
    summary: "Excelente implementación de patrones e-commerce modernos. Lenguaje transaccional muy refinado, CTAs claros e íconos convencionales.",
    checklist: {
      ux_clarity: { status: "cumple", score: 95, detail: "Uso de vocabulario directo ('Envío gratis', 'Comprar ahora'). Evita términos técnicos complejos." },
      ux_conciseness: { status: "cumple", score: 94, detail: "Etiquetas breves en productos y filtros. La información de despacho es concisa y clara." },
      ux_usefulness: { status: "cumple", score: 96, detail: "Guía al comprador con microcopia de confianza ('Protegido con Mercado Pago')." },
      ux_tone_voice: { status: "cumple", score: 92, detail: "Tono optimista, seguro y servicial en todas las fases de compra." },
      ux_cta_microcopy: { status: "cumple", score: 95, detail: "Botones con verbos explícitos: 'Comprar ahora', 'Agregar al carrito'." },
      ux_error_feedback: { status: "cumple", score: 92, detail: "Mensajes de error en checkout indican exactamente el campo faltante o tarjeta rechazada." },
      miller_nav_limit: { status: "cumple", score: 90, detail: "El menú principal tiene 7 categorías visibles antes del desplegable 'Ver más'." },
      miller_chunking: { status: "cumple", score: 92, detail: "Las tarjetas de producto agrupan imagen, precio, descuento y envío en bloques claros." },
      miller_visual_hierarchy: { status: "cumple", score: 88, detail: "Buena jerarquía tipográfica, aunque la versión desktop presenta cierta saturación publicitaria." },
      jakob_standards: { status: "cumple", score: 98, detail: "Cumple 100% las expectativas del e-commerce: barra de búsqueda prominente en el header y carrito arriba a la derecha." },
      jakob_predictability: { status: "cumple", score: 94, detail: "Los filtros laterales funcionan de forma inmediata e intuitiva." },
      jakob_icons: { status: "cumple", score: 93, detail: "Iconos universales: lupa, carrito, ubicación, campana de notificaciones." },
      fitts_cta_size: { status: "cumple", score: 90, detail: "El botón azul 'Comprar ahora' abarca todo el ancho en móvil y es de gran tamaño en desktop." },
      fitts_proximity: { status: "cumple", score: 88, detail: "Los botones de cantidad e interacción están adyacentes a la información del producto." },
      fitts_touch_padding: { status: "parcial", score: 89, detail: "En carruseles móviles de productos pequeños, algunas flechas requieren alta precisión." }
    },
    strengths: [
      "Microcopia de confianza destacada cerca de los botones de pago ('Mercado Pago protege tu compra').",
      "Cumplimiento sobresaliente de la Ley de Jakob al seguir los estándares globales de e-commerce.",
      "CTAs con tamaño táctil idóneo según la Ley de Fitts."
    ],
    flaws: [
      "Saturación de banners promocionales en la página de inicio que roza el límite de la Ley de Miller.",
      "En dispositivos móviles pequeños, las pestañas de preguntas al vendedor pueden ser estrechas."
    ],
    rewrites: [
      {
        context: "Ventana emergente de dirección de entrega",
        original: "Ingresar una nueva ubicación para calcular costos",
        proposed: "Agrega tu dirección para ver costos y tiempos de envío",
        reason: "Orientación activa basada en el beneficio directo para el usuario."
      }
    ]
  },
  {
    id: "amazon",
    name: "Amazon Colombia",
    url: "https://www.amazon.com.co/",
    category: "E-Commerce",
    overallScore: 88,
    scores: {
      ux_writing: 86,
      miller_law: 82,
      jakob_law: 96,
      fitts_law: 88
    },
    summary: "Referente mundial en Ley de Jakob. Sin embargo, su densidad informativa desafía la Ley de Miller en pantallas secundarias.",
    checklist: {
      ux_clarity: { status: "cumple", score: 88, detail: "Instrucciones de compra claras, aunque algunas traducciones del inglés suenan algo rígidas." },
      ux_conciseness: { status: "parcial", score: 82, detail: "Textos extensos en descripciones de producto que podrían sintetizarse mejor." },
      ux_usefulness: { status: "cumple", score: 90, detail: "Gran utilidad en seguimiento de pedidos y estados de entrega." },
      ux_tone_voice: { status: "cumple", score: 85, detail: "Tono neutral, funcional y enfocado en la eficiencia." },
      ux_cta_microcopy: { status: "cumple", score: 92, detail: "CTAs icónicos como 'Agregar al carrito' y 'Comprar ya' muy reconocibles." },
      ux_error_feedback: { status: "cumple", score: 80, detail: "Mensajes de error detallados, pero con lenguaje técnico en temas de autenticación." },
      miller_nav_limit: { status: "parcial", score: 78, detail: "El menú mega-dropdown presenta decenas de categorías que rompen la regla del 7±2." },
      miller_chunking: { status: "cumple", score: 85, detail: "Uso eficaz de cuadrículas (cards) para recomendaciones personales." },
      miller_visual_hierarchy: { status: "parcial", score: 83, detail: "Alta densidad visual que puede provocar fatiga cognitiva a nuevos usuarios." },
      jakob_standards: { status: "cumple", score: 98, detail: "Pionero y creador de muchos patrones estándar de compras en línea." },
      jakob_predictability: { status: "cumple", score: 95, detail: "Navegación 100% predecible y consistente." },
      jakob_icons: { status: "cumple", score: 95, detail: "Iconos universales e inconfundibles." },
      fitts_cta_size: { status: "cumple", score: 90, detail: "Botón amarillo de compra muy visible con alto contraste y gran superficie." },
      fitts_proximity: { status: "cumple", score: 88, detail: "Opciones de variante (color/tamaño) situadas justo encima del CTA." },
      fitts_touch_padding: { status: "parcial", score: 86, detail: "Enlaces de pie de página extremadamente pequeños y densos." }
    },
    strengths: [
      "Patrón de checkout de 1-clic que maximiza la eficiencia según la Ley de Fitts.",
      "Líder en Ley de Jakob; todos los usuarios reconocen su estructura instantáneamente.",
      "Microcopia de estado de envío precisa y contextual."
    ],
    flaws: [
      "Carga cognitiva elevada en la Home debido a la cantidad excesiva de widgets.",
      "Algunas frases traducidas automáticamente pierden fluidez en español de Colombia."
    ],
    rewrites: [
      {
        context: "Confirmación de devolución",
        original: "Procesar solicitud de reemplazo del artículo",
        proposed: "Solicitar cambio de producto gratis",
        reason: "Mayor claridad y reducción del tono burocrático."
      }
    ]
  },
  {
    id: "bancolombia",
    name: "Bancolombia",
    url: "https://www.bancolombia.com.co/",
    category: "Banca & FinTech",
    overallScore: 90,
    scores: {
      ux_writing: 93,
      miller_law: 89,
      jakob_law: 88,
      fitts_law: 90
    },
    summary: "Excelente trabajo de UX Writing empático y cercano ('Es el momento de todos'). Buena estructura limpia y accesible.",
    checklist: {
      ux_clarity: { status: "cumple", score: 94, detail: "Lenguaje financiero simplificado. Explicaciones claras de créditos y tasas." },
      ux_conciseness: { status: "cumple", score: 92, detail: "Títulos directos y textos resumen bien estructurados." },
      ux_usefulness: { status: "cumple", score: 95, detail: "Asistentes virtuales y guías paso a paso para abrir productos." },
      ux_tone_voice: { status: "cumple", score: 96, detail: "Voz humana, empática y optimista que genera tranquilidad económica." },
      ux_cta_microcopy: { status: "cumple", score: 92, detail: "CTAs como 'Simula tu crédito', 'Entrar a Sucursal Virtual'." },
      ux_error_feedback: { status: "cumple", score: 89, detail: "Alertas claras que explican bloqueos o mantenimientos sin atemorizar." },
      miller_nav_limit: { status: "cumple", score: 90, detail: "Menú superior segmentado en Personas, Negocios, Empresas y Corporativos." },
      miller_chunking: { status: "cumple", score: 91, detail: "Tarjetas de productos financieros divididas con datos clave visuales." },
      miller_visual_hierarchy: { status: "cumple", score: 87, detail: "Uso limpio de espacio en blanco para mitigar el estrés informativo." },
      jakob_standards: { status: "cumple", score: 88, detail: "El botón de ingreso a la sucursal virtual está destacado arriba a la derecha." },
      jakob_predictability: { status: "cumple", score: 89, detail: "Flujos de consulta y simulación estándar." },
      jakob_icons: { status: "cumple", score: 87, detail: "Iconografía propia estilizada pero intuitiva." },
      fitts_cta_size: { status: "cumple", score: 92, detail: "Botón amarillo principal 'Entrar' con gran target táctil." },
      fitts_proximity: { status: "cumple", score: 90, detail: "Simuladores con controles contiguos a los resultados." },
      fitts_touch_padding: { status: "cumple", score: 88, detail: "Separación holgada en la versión móvil." }
    },
    strengths: [
      "Tono de voz 'cercano y transparente' que humaniza los servicios bancarios.",
      "Botón de acceso a Sucursal Virtual diseñado con alto contraste y ubicación óptima (Ley de Fitts).",
      "Chunking efectivo en tarjetas de simulación de créditos."
    ],
    flaws: [
      "Términos legales en letra pequeña al pie de las simulaciones dificultan la lectura rápida.",
      "El submenú de productos para empresas presenta ligera sobrecarga de opciones."
    ],
    rewrites: [
      {
        context: "Buscador de sucursales",
        original: "Consulte los puntos de atención geográfica disponibles",
        proposed: "Encuentra el cajero o sucursal más cercana",
        reason: "Uso de lenguaje cotidiano orientado a la acción inmediata."
      }
    ]
  },
  {
    id: "alcaldia",
    name: "Portal Alcaldía (gov.co)",
    url: "https://www.alcaldia.gov.co/",
    category: "Gobierno & Público",
    overallScore: 68,
    scores: {
      ux_writing: 64,
      miller_law: 62,
      jakob_law: 75,
      fitts_law: 71
    },
    summary: "Elevada carga burocrática en los textos y menús colmados de enlaces. Requiere simplificación urgente de UX Writing y chunking.",
    checklist: {
      ux_clarity: { status: "no_cumple", score: 60, detail: "Abuso de tecnicismos legales, decretos y lenguaje gubernamental denso." },
      ux_conciseness: { status: "no_cumple", score: 58, detail: "Párrafos muy largos con introducción institucional innecesaria." },
      ux_usefulness: { status: "parcial", score: 70, detail: "Encontrar un trámite específico requiere varios clics y búsquedas." },
      ux_tone_voice: { status: "parcial", score: 68, detail: "Tono distante, extremadamente formal e impersonal." },
      ux_cta_microcopy: { status: "parcial", score: 65, detail: "Uso frecuente de 'Haga clic aquí', 'Más información' o 'Consultar'." },
      ux_error_feedback: { status: "no_cumple", score: 63, detail: "Mensajes de error crípticos del servidor o redirecciones rotas." },
      miller_nav_limit: { status: "no_cumple", score: 55, detail: "Menús saturados con más de 12 opciones directas sin agrupar." },
      miller_chunking: { status: "no_cumple", score: 62, detail: "Bloques extensos de texto sin viñetas ni destacados visuales." },
      miller_visual_hierarchy: { status: "parcial", score: 68, detail: "Banners gubernamentales compiten por la atención visual." },
      jakob_standards: { status: "cumple", score: 78, detail: "Usa el diseño institucional marco GOV.CO." },
      jakob_predictability: { status: "parcial", score: 72, detail: "Algunos enlaces abren pestañas externas sin previo aviso." },
      jakob_icons: { status: "cumple", score: 75, detail: "Iconos estándar pero con poco contraste visual." },
      fitts_cta_size: { status: "parcial", score: 70, detail: "Botones de trámites principales de tamaño moderado a pequeño." },
      fitts_proximity: { status: "parcial", score: 72, detail: "Formularios de petición con botones alejados del campo de entrada." },
      fitts_touch_padding: { status: "parcial", score: 71, detail: "Listados de noticias con enlaces muy pegados en móvil." }
    },
    strengths: [
      "Adhesión al marco estándar visual de páginas gubernamentales de Colombia (GOV.CO).",
      "Presencia de buscador institucional visible en la cabecera."
    ],
    flaws: [
      "Violación severa de la Ley de Miller con menús y pies de página infinitos.",
      "UX Writing excesivamente formal con lenguaje legalista sin traducir al ciudadano.",
      "Microcopia genérica en botones ('Haz clic aquí', 'Leer más')."
    ],
    rewrites: [
      {
        context: "Sección de impuestos locales",
        original: "Procedimiento de recaudo del impuesto predial unificado vigencia fiscal",
        proposed: "Paga tu impuesto predial aquí",
        reason: "Elimina la jerga administrativa y va directo al objetivo del ciudadano."
      }
    ]
  },
  {
    id: "valledelcauca",
    name: "Gobernación del Valle del Cauca",
    url: "https://www.valledelcauca.gov.co/",
    category: "Gobierno & Público",
    overallScore: 72,
    scores: {
      ux_writing: 70,
      miller_law: 68,
      jakob_law: 76,
      fitts_law: 74
    },
    summary: "Esfuerzos por modernizar la interfaz institucional, pero persisten deficiencias en fragmentación de trámites y CTAs pequeños.",
    checklist: {
      ux_clarity: { status: "parcial", score: 70, detail: "Señalamiento claro de trámites principales (Pasaportes), pero el resto usa jerga oficial." },
      ux_conciseness: { status: "parcial", score: 68, detail: "Comunicados de prensa muy extensos en la portada." },
      ux_usefulness: { status: "cumple", score: 75, detail: "El botón de cita de pasaportes ofrece buena utilidad directa." },
      ux_tone_voice: { status: "parcial", score: 70, detail: "Institucional y sobrio, enfocado en noticias gubernamentales." },
      ux_cta_microcopy: { status: "parcial", score: 69, detail: "Mejorable en secciones secundarias ('Acceder', 'Ingreso')." },
      ux_error_feedback: { status: "parcial", score: 68, detail: "Alertas emergentes con texto genérico." },
      miller_nav_limit: { status: "parcial", score: 66, detail: "Múltiples barras de navegación paralelas que confunden el foco." },
      miller_chunking: { status: "parcial", score: 68, detail: "Mejor organización en la sección de trámites, pero deficiente en noticias." },
      miller_visual_hierarchy: { status: "cumple", score: 71, detail: "Destaca bien la expedición de pasaportes." },
      jakob_standards: { status: "cumple", score: 78, detail: "Sigue estándares de portales departamentales." },
      jakob_predictability: { status: "parcial", score: 74, detail: "Redirecciones a plataformas externas (como bancos) sin advertencia." },
      jakob_icons: { status: "cumple", score: 76, detail: "Uso correcto de simbología de trámites y atención al ciudadano." },
      fitts_cta_size: { status: "parcial", score: 73, detail: "El botón de citas es visible, pero otros accesos son enlaces de texto pequeños." },
      fitts_proximity: { status: "parcial", score: 74, detail: "Espaciado aceptable en desktop, ajustado en dispositivos móviles." },
      fitts_touch_padding: { status: "parcial", score: 75, detail: "Adecuado en módulos principales." }
    },
    strengths: [
      "Acceso prioritario y bien visibilizado para el trámite de Pasaportes.",
      "Uso de paleta de colores institucional con buen contraste en el banner principal."
    ],
    flaws: [
      "Exceso de noticias institucionales que desplazan los servicios al ciudadano.",
      "CTAs secundarios con área de toque reducida (Ley de Fitts)."
    ],
    rewrites: [
      {
        context: "Módulo de expedición de pasaporte",
        original: "Agendamiento de citas para la expedición del documento de viaje pasaporte",
        proposed: "Agenda tu cita para el pasaporte",
        reason: "Simplificación verbal directa centrada en la acción."
      }
    ]
  },
  {
    id: "policia",
    name: "Policía Nacional de Colombia",
    url: "https://www.policia.gov.co/",
    category: "Gobierno & Público",
    overallScore: 75,
    scores: {
      ux_writing: 74,
      miller_law: 72,
      jakob_law: 80,
      fitts_law: 74
    },
    summary: "Secciones de denuncias bien orientadas al ciudadano ('Denunciar'). Sin embargo, las páginas secundarias recaen en reglamentaciones extensas.",
    checklist: {
      ux_clarity: { status: "parcial", score: 73, detail: "Servicios como '¡A Denunciar!' son claros, pero las convocatorias usan lenguaje militar/normativo." },
      ux_conciseness: { status: "parcial", score: 72, detail: "Información institucional con párrafos densos." },
      ux_usefulness: { status: "cumple", score: 78, detail: "Resuelve necesidades operativas urgentes (denuncias, certificados)." },
      ux_tone_voice: { status: "cumple", score: 75, detail: "Tono de autoridad, protección y servicio a la comunidad." },
      ux_cta_microcopy: { status: "cumple", score: 76, detail: "Verbos de acción claros en portales clave ('Denuncie aquí', 'Consulte antecedentes')." },
      ux_error_feedback: { status: "parcial", score: 68, detail: "Formularios de denuncia muestran validaciones complejas en ventanas emergentes." },
      miller_nav_limit: { status: "parcial", score: 70, detail: "Barra de navegación con muchos accesos, aunque categorizada por perfil." },
      miller_chunking: { status: "cumple", score: 74, detail: "Uso de accesos directos visuales (grid) para trámites de alto tráfico." },
      miller_visual_hierarchy: { status: "parcial", score: 72, detail: "Mezcla de noticias operativas y botones de trámite." },
      jakob_standards: { status: "cumple", score: 82, detail: "Patrón reconocido de portales institucionales de seguridad." },
      jakob_predictability: { status: "cumple", score: 79, detail: "Navegación consistente en el portal principal." },
      jakob_icons: { status: "cumple", score: 80, detail: "Iconos representativos (escudo, documento, lupa, teléfono)." },
      fitts_cta_size: { status: "cumple", score: 76, detail: "El botón de '¡A Denunciar!' posee buen tamaño y destacado rojo/azul." },
      fitts_proximity: { status: "parcial", score: 72, detail: "Formularios extensos con botones de confirmación lejanos al final de la página." },
      fitts_touch_padding: { status: "parcial", score: 74, detail: "Buena separación en botones primarios." }
    },
    strengths: [
      "Excelente microcopia en la herramienta '¡A Denunciar!' que genera acción inmediata.",
      "Categorización por perfil del visitante (Ciudadano, Incorporaciones, Policía)."
    ],
    flaws: [
      "Formularios de antecedentes con tipografía pequeña y padding reducido.",
      "Textos de normatividad legal sin resúmenes ejecutivos."
    ],
    rewrites: [
      {
        context: "Consulta de antecedentes judiciales",
        original: "Verificación de antecedentes y certificados de conducta ciudadana",
        proposed: "Consulta tus antecedentes judiciales",
        reason: "Tono claro, directo y enfocado en la consulta del usuario."
      }
    ]
  },
  {
    id: "dian",
    name: "DIAN Colombia",
    url: "https://www.dian.gov.co/",
    category: "Gobierno & Público",
    overallScore: 65,
    scores: {
      ux_writing: 58,
      miller_law: 60,
      jakob_law: 74,
      fitts_law: 68
    },
    summary: "Plataforma de alta complejidad técnica y tributaria. Presenta serias barreras de UX Writing (jerga fiscal) y violación de la Ley de Miller.",
    checklist: {
      ux_clarity: { status: "no_cumple", score: 52, detail: "Uso masivo de acrónimos (MUISCA, RUT, RUV, exógena) sin explicaciones iniciales." },
      ux_conciseness: { status: "no_cumple", score: 55, detail: "Resoluciones y comunicados tributarios sin síntesis amigable." },
      ux_usefulness: { status: "parcial", score: 65, detail: "El usuario tributario experto encuentra las cosas, pero el ciudadano común se extravía." },
      ux_tone_voice: { status: "no_cumple", score: 60, detail: "Tono estrictamente punitivo, legal y burocrático." },
      ux_cta_microcopy: { status: "parcial", score: 62, detail: "Botones con nombres de sistemas internos ('Ingreso a MUISCA', 'Firma electrónica')." },
      ux_error_feedback: { status: "no_cumple", score: 54, detail: "Códigos de error de base de datos o alertas crípticas de firmas digitales." },
      miller_nav_limit: { status: "no_cumple", score: 55, detail: "Portales desplegables saturados con decenas de sub-secciones legales." },
      miller_chunking: { status: "no_cumple", score: 62, detail: "Formularios tributarios extensísimos sin adecuada división por etapas visuales." },
      miller_visual_hierarchy: { status: "parcial", score: 64, detail: "Composición saturada de avisos, calendarios y comunicados." },
      jakob_standards: { status: "cumple", score: 76, detail: "Estructura institucional esperada para trámites tributarios." },
      jakob_predictability: { status: "parcial", score: 70, detail: "Ventanas emergentes secundarias y fallos de compatibilidad en navegadores." },
      jakob_icons: { status: "cumple", score: 75, detail: "Iconos estándar para calendario y usuario." },
      fitts_cta_size: { status: "parcial", score: 68, detail: "Botones de ingreso en MUISCA a menudo pequeños para dispositivos móviles." },
      fitts_proximity: { status: "no_cumple", score: 64, detail: "Enlaces de descarga de declaradores lejanos del instructivo." },
      fitts_touch_padding: { status: "parcial", score: 71, detail: "Espaciado rígido e insuficiente en menús secundarios." }
    },
    strengths: [
      "Calendario tributario visible que ayuda a organizar las fechas de vencimiento.",
      "Portal MUISCA diferenciado para usuarios registrados."
    ],
    flaws: [
      "Severo uso de jerga técnica fiscal sin glosario ni tooltips explicativos.",
      "Violación de la Ley de Miller por exceso de hipervínculos normativos en la Home.",
      "Errores del sistema expresados en lenguaje técnico inolvidable para el ciudadano."
    ],
    rewrites: [
      {
        context: "Inicio de sesión de usuarios",
        original: "Iniciar sesión en los servicios informáticos electrónicos a nombre propio o apoderado",
        proposed: "Entra a tu cuenta DIAN",
        reason: "Sustituye la jerga formal por una instrucción cotidiana instantánea."
      }
    ]
  },
  {
    id: "nequi",
    name: "Nequi Colombia",
    url: "https://www.nequi.com.co/",
    category: "Banca & FinTech",
    overallScore: 95,
    scores: {
      ux_writing: 97,
      miller_law: 94,
      jakob_law: 93,
      fitts_law: 96
    },
    summary: "Máximo referente de UX Writing conversacional en Colombia. Lenguaje fresco, cero jerga y diseño adaptado a la Ley de Fitts.",
    checklist: {
      ux_clarity: { status: "cumple", score: 98, detail: "Habla exactamente como el usuario colombiano ('Envía plata', 'Pide plata', 'Colchón')." },
      ux_conciseness: { status: "cumple", score: 96, detail: "Frases ultra cortas, directas y memorables." },
      ux_usefulness: { status: "cumple", score: 97, detail: "Resuelve problemas financieros cotidianos de forma inmediata." },
      ux_tone_voice: { status: "cumple", score: 98, detail: "Voz joven, cercana, divertida y sumamente empática." },
      ux_cta_microcopy: { status: "cumple", score: 96, detail: "Verbos cotidianos: 'Recargar', 'Sacar plata', 'Pagar'." },
      ux_error_feedback: { status: "cumple", score: 94, detail: "Mensajes de error con humor y soluciones claras ('¡Ops! Se nos cruzaron los cables. Revisa tu internet')." },
      miller_nav_limit: { status: "cumple", score: 95, detail: "Navegación minimalista enfocada en 4 secciones primarias." },
      miller_chunking: { status: "cumple", score: 94, detail: "Información empaquetada en cards de colores pastel fácilmente reconocibles." },
      miller_visual_hierarchy: { status: "cumple", score: 93, detail: "Jerarquía impecable basada en espacio negativo y tipografía bold." },
      jakob_standards: { status: "cumple", score: 92, detail: "Adapta patrones de apps móviles financieras de nueva generación." },
      jakob_predictability: { status: "cumple", score: 94, detail: "Respeta la fluidez de interacción esperada por los jóvenes digitales." },
      jakob_icons: { status: "cumple", score: 94, detail: "Iconografía ilustrada moderna pero perfectamente comprensible." },
      fitts_cta_size: { status: "cumple", score: 97, detail: "Botones gigantes flotantes morados/rosados con área de toque óptima." },
      fitts_proximity: { status: "cumple", score: 96, detail: "Acciones principales ubicadas en la zona natural del pulgar en móviles." },
      fitts_touch_padding: { status: "cumple", score: 95, detail: "Espaciado generoso entre todos los elementos cliqueables." }
    },
    strengths: [
      "UX Writing conversacional y local adaptado a la cultura de uso en Colombia.",
      "Ley de Fitts perfeccionada para experiencia mobile-first (Thumb Zone).",
      "Mensajes de error con tono empático que reducen la frustración del usuario."
    ],
    flaws: [
      "El tono jovial puede resultar informal en momentos de caídas críticas de la red.",
      "En la versión web desktop, algunos menús de ayuda son demasiado minimalistas."
    ],
    rewrites: [
      {
        context: "Sección de ayuda por caída temporal",
        original: "Servicio no disponible temporalmente por mantenimiento en la plataforma",
        proposed: "Estamos dándole un cariñito a la app. En unos minutos estamos de vuelta.",
        reason: "Mantiene la tranquilidad del usuario con su tono característico."
      }
    ]
  },
  {
    id: "pse",
    name: "PSE (Pagos Seguros en Línea)",
    url: "https://www.pse.com.co/",
    category: "Banca & FinTech",
    overallScore: 82,
    scores: {
      ux_writing: 80,
      miller_law: 84,
      jakob_law: 86,
      fitts_law: 78
    },
    summary: "Estándar de pagos en Colombia. Buena seguridad y reconocimiento, pero el proceso de registro exige optimizaciones de microcopia y Fitts.",
    checklist: {
      ux_clarity: { status: "cumple", score: 82, detail: "Explicaciones del flujo de pago claras, diferenciando Persona Natural y Jurídica." },
      ux_conciseness: { status: "cumple", score: 80, detail: "Instrucciones directas para seleccionar banco e ingresar correo." },
      ux_usefulness: { status: "cumple", score: 85, detail: "Guía clara al usuario hacia su pasarela bancaria." },
      ux_tone_voice: { status: "cumple", score: 80, detail: "Tono formal, seguro y transaccional." },
      ux_cta_microcopy: { status: "parcial", score: 76, detail: "Botón 'Ir al Banco' claro, pero formularios de registro contienen campos con etiquetas ambiguas." },
      ux_error_feedback: { status: "parcial", score: 77, detail: "Notifica correos no registrados, pero la creación de usuario tiene pasos rígidos." },
      miller_nav_limit: { status: "cumple", score: 86, detail: "Flujo enfocado en un único objetivo central: completar la transacción." },
      miller_chunking: { status: "cumple", score: 84, detail: "Separación clara entre datos del comercio, datos del pagador y selección de banco." },
      miller_visual_hierarchy: { status: "cumple", score: 82, detail: "Limpio y centrado en la tarea." },
      jakob_standards: { status: "cumple", score: 88, detail: "Patrón profundamente arraigado en los hábitos de pago en Colombia." },
      jakob_predictability: { status: "cumple", score: 85, detail: "Comportamiento predecible en el redireccionamiento bancario." },
      jakob_icons: { status: "cumple", score: 84, detail: "Uso del reconocido candado de seguridad y logos de bancos." },
      fitts_cta_size: { status: "parcial", score: 76, detail: "Selectores desplegables de banco a veces pequeños en pantallas móviles." },
      fitts_proximity: { status: "parcial", score: 78, detail: "El botón de continuar requiere desplazamiento en teléfonos pequeños." },
      fitts_touch_padding: { status: "cumple", score: 80, detail: "Espaciado correcto en la versión web renovada." }
    },
    strengths: [
      "Proceso altamente enfocado en un solo objetivo sin distracciones publicitarias.",
      "Cumplimiento total con los modelos mentales de pago de la población colombiana."
    ],
    flaws: [
      "El registro inicial de correo PSE suele confundir a usuarios primerizos.",
      "Selectores desplegables de entidad bancaria con área de toque reducida en smartphones."
    ],
    rewrites: [
      {
        context: "Campo de correo registrado",
        original: "Ingrese su email registrado en PSE para continuar",
        proposed: "Escribe el correo con el que te registraste en PSE",
        reason: "Lenguaje más empático y orientativo."
      }
    ]
  },
  {
    id: "nuevaeps",
    name: "Nueva EPS",
    url: "https://www.nuevaeps.com.co/",
    category: "Salud & EPS",
    overallScore: 70,
    scores: {
      ux_writing: 68,
      miller_law: 65,
      jakob_law: 76,
      fitts_law: 71
    },
    summary: "Atiende a público diverso y adulto mayor. Requiere tipografías más grandes, lenguaje más sencillo y mejor separación visual según Miller.",
    checklist: {
      ux_clarity: { status: "parcial", score: 66, detail: "Términos médicos y administrativos que dificultan la agendación de citas." },
      ux_conciseness: { status: "parcial", score: 67, detail: "Mucho texto explicativo antes de llegar a los botones de acción." },
      ux_usefulness: { status: "cumple", score: 74, detail: "Módulos para autorizaciones, citas y certificados destacados." },
      ux_tone_voice: { status: "cumple", score: 72, detail: "Tono institucional de cuidado y atención médica." },
      ux_cta_microcopy: { status: "parcial", score: 65, detail: "Etiquetas como 'Solicite aquí su trámite en línea' son largas." },
      ux_error_feedback: { status: "no_cumple", score: 62, detail: "Mensajes de error en la zona transaccional con códigos técnicos de base de datos." },
      miller_nav_limit: { status: "parcial", score: 64, detail: "Menú superior saturado de regímenes (Contributivo, Subsidiado)." },
      miller_chunking: { status: "parcial", score: 66, detail: "Falta mejor ordenamiento en las guías de trámites médicos." },
      miller_visual_hierarchy: { status: "parcial", score: 65, detail: "Muchos elementos compitiendo por la atención en la portada." },
      jakob_standards: { status: "cumple", score: 78, detail: "Sigue la convención estándar de portales de salud pública." },
      jakob_predictability: { status: "parcial", score: 74, detail: "Zona transaccional 'Eva' abre en pestañas adicionales." },
      jakob_icons: { status: "cumple", score: 76, detail: "Iconos de médico, medicinas y citas médica comprensibles." },
      fitts_cta_size: { status: "parcial", score: 70, detail: "Botones principales aceptables, pero opciones secundarias pequeñas para adultos mayores." },
      fitts_proximity: { status: "parcial", score: 71, detail: "Distancia considerable entre opciones de trámite y formularios." },
      fitts_touch_padding: { status: "parcial", score: 72, detail: "Padding ajustado en enlaces del menú móvil." }
    },
    strengths: [
      "Identificación clara de canales de atención y chat asistente Eva.",
      "Segmentación visible entre Régimen Contributivo y Subsidiado."
    ],
    flaws: [
      "No está optimizado para la Ley de Fitts considerando a los usuarios adultos mayores.",
      "Carga cognitiva elevada al intentar sacar una cita médica o descargar una autorización."
    ],
    rewrites: [
      {
        context: "Botón de agendamiento médico",
        original: "Asignación y consulta de citas médicas especializadas y de primer nivel",
        proposed: "Pide o consulta tu cita médica",
        reason: "Reducción dramática del texto manteniendo el 100% de la claridad."
      }
    ]
  },
  {
    id: "netflix",
    name: "Netflix",
    url: "https://www.netflix.com",
    category: "Entretenimiento & Streaming",
    overallScore: 96,
    scores: {
      ux_writing: 96,
      miller_law: 95,
      jakob_law: 98,
      fitts_law: 95
    },
    summary: "Cátedra internacional en UX/UI. Microcopia orientada a la conversión inmediata, chunking impecable en carruseles y CTAs masivos.",
    checklist: {
      ux_clarity: { status: "cumple", score: 98, detail: "Mensaje de propuesta de valor claro en 1 línea ('Películas y series ilimitadas y mucho más')." },
      ux_conciseness: { status: "cumple", score: 97, detail: "Cero palabras innecesarias. Enfocado al 100% en la emoción del entretenimiento." },
      ux_usefulness: { status: "cumple", score: 95, detail: "Solo pide el email para iniciar el proceso de registro." },
      ux_tone_voice: { status: "cumple", score: 96, detail: "Tono apasionado, seguro y tentador." },
      ux_cta_microcopy: { status: "cumple", score: 97, detail: "CTA legendario: 'Comenzar >' al lado del campo de email." },
      ux_error_feedback: { status: "cumple", score: 93, detail: "Validación de email en tiempo real con mensajes concisos." },
      miller_nav_limit: { status: "cumple", score: 96, detail: "En landing page no hay menú que distraiga. En la app, categorías limpias." },
      miller_chunking: { status: "cumple", score: 96, detail: "Organización por filas temáticas (Top 10, Tendencias, Continuar viendo)." },
      miller_visual_hierarchy: { status: "cumple", score: 94, detail: "Hero banner gigante con foco visual absoluto." },
      jakob_standards: { status: "cumple", score: 99, detail: "Creador del estándar global del reproductor y catálogo de streaming." },
      jakob_predictability: { status: "cumple", score: 98, detail: "Interacción completamente fluida e intuitiva." },
      jakob_icons: { status: "cumple", score: 97, detail: "Iconos universales de reproducción, búsqueda y perfil." },
      fitts_cta_size: { status: "cumple", score: 96, detail: "Botón rojo 'Comenzar' de gran tamaño y alto contraste visual." },
      fitts_proximity: { status: "cumple", score: 95, detail: "Campo de email y botón de registro unificados en una sola barra." },
      fitts_touch_padding: { status: "cumple", score: 94, detail: "Excelente separación física entre elementos interactivos." }
    },
    strengths: [
      "Landing page con cero fricción cognitiva alineada a la Ley de Miller.",
      "Ley de Fitts aplicada magistralmente mediante la unión del input de email con el CTA primario.",
      "Microcopia de cancelación flexible ('Cancela cuando quieras')."
    ],
    flaws: [
      "En el catálogo de la app, el auto-play de tráilers puede abrumar sensorialmente a algunos usuarios."
    ],
    rewrites: [
      {
        context: "Aviso de suscripción",
        original: "Suscríbase para acceder a la totalidad del catálogo audiovisual",
        proposed: "Películas y series ilimitadas. Cancela cuando quieras.",
        reason: "Elimina barreras de permanencia y genera deseo inmediato."
      }
    ]
  },
  {
    id: "avianca",
    name: "Avianca",
    url: "https://www.avianca.com",
    category: "Viajes & Aerolíneas",
    overallScore: 84,
    scores: {
      ux_writing: 85,
      miller_law: 81,
      jakob_law: 88,
      fitts_law: 82
    },
    summary: "Flujo de reserva moderno y rápido. No obstante, las tarifas adicionales (ancillaries) generan sobrecarga cognitiva.",
    checklist: {
      ux_clarity: { status: "cumple", score: 86, detail: "El buscador de vuelos es claro en origen, destino y fechas." },
      ux_conciseness: { status: "cumple", score: 84, detail: "Etiquetas breves para selección de pasajeros y clase." },
      ux_usefulness: { status: "cumple", score: 88, detail: "Guía el proceso de Check-in y estado de vuelo eficazmente." },
      ux_tone_voice: { status: "cumple", score: 85, detail: "Tono moderno y dinámico." },
      ux_cta_microcopy: { status: "cumple", score: 87, detail: "Botón 'Buscar vuelos' destacado en rojo corporativo." },
      ux_error_feedback: { status: "parcial", score: 79, detail: "Errores de selección de fecha a veces poco visibles en móvil." },
      miller_nav_limit: { status: "parcial", score: 79, detail: "Menú superior con múltiples opciones de servicios adicionales." },
      miller_chunking: { status: "parcial", score: 82, detail: "Las tarifas (basic, classic, flex) agrupan beneficios, pero la comparación es densa." },
      miller_visual_hierarchy: { status: "cumple", score: 82, detail: "El widget de búsqueda domina la pantalla principal." },
      jakob_standards: { status: "cumple", score: 90, detail: "Sigue el estándar universal de buscadores de aerolíneas." },
      jakob_predictability: { status: "cumple", score: 87, detail: "Navegación por pasos predecible durante la compra." },
      jakob_icons: { status: "cumple", score: 87, detail: "Iconos de maletas, asientos y calendario muy reconocibles." },
      fitts_cta_size: { status: "cumple", score: 85, detail: "Botón rojo de búsqueda con excelente área de toque." },
      fitts_proximity: { status: "parcial", score: 80, detail: "Selección de asientos en móvil presenta botones estrechos." },
      fitts_touch_padding: { status: "parcial", score: 81, detail: "Ajustado en el mapa interactivo del avión." }
    },
    strengths: [
      "Buscador de vuelos prominente con alta observancia de la Ley de Fitts.",
      "Categorización de tarifas por necesidades del viajero (basic, classic, flex)."
    ],
    flaws: [
      "Venta cruzada de equipaje y seguros que recarga la memoria de trabajo del usuario (Ley de Miller).",
      "Mapa de asientos en móviles con áreas de clic demasiado pequeñas."
    ],
    rewrites: [
      {
        context: "Selección de equipaje adicional",
        original: "Adquisición de piezas de equipaje de bodega suplementarias",
        proposed: "Agrega equipaje de bodega a tu vuelo",
        reason: "Reemplazo de lenguaje administrativo por acción directa."
      }
    ]
  },
  {
    id: "ticketmaster",
    name: "Ticketmaster Colombia",
    url: "https://www.ticketmaster.co/",
    category: "Entretenimiento & Eventos",
    overallScore: 81,
    scores: {
      ux_writing: 82,
      miller_law: 79,
      jakob_law: 86,
      fitts_law: 77
    },
    summary: "Plataforma enfocada en boletería. El mapa interactivo de recintos durante momentos de alta demanda puede comprometer Fitts y Miller.",
    checklist: {
      ux_clarity: { status: "cumple", score: 83, detail: "Fechas, lugares y artistas expresados con total claridad." },
      ux_conciseness: { status: "cumple", score: 82, detail: "Información del evento resumida en puntos clave." },
      ux_usefulness: { status: "cumple", score: 84, detail: "Temporizador visible durante la compra que genera urgencia y orientación." },
      ux_tone_voice: { status: "cumple", score: 80, detail: "Tono entusiasta y lleno de energía." },
      ux_cta_microcopy: { status: "cumple", score: 84, detail: "CTAs como 'Buscar boletos', 'Comprar entradas'." },
      ux_error_feedback: { status: "parcial", score: 76, detail: "Avisos de tiempo agotado a veces abruptos." },
      miller_nav_limit: { status: "cumple", score: 80, detail: "Categorías por tipo de evento (Música, Deportes, Teatro)." },
      miller_chunking: { status: "parcial", score: 78, detail: "Selección de localidades muy densa en conciertos masivos." },
      miller_visual_hierarchy: { status: "cumple", score: 80, detail: "Posters de eventos bien jerarquizados." },
      jakob_standards: { status: "cumple", score: 88, detail: "Estándar reconocido globalmente de venta de entradas." },
      jakob_predictability: { status: "cumple", score: 85, detail: "Fila virtual con indicadores conocidos." },
      jakob_icons: { status: "cumple", score: 85, detail: "Iconografía de mapas, boletos y calendario estándar." },
      fitts_cta_size: { status: "cumple", score: 80, detail: "Botón de compra principal amplio." },
      fitts_proximity: { status: "no_cumple", score: 73, detail: "Selección de asientos individuales en mapa requiere zoom extremo en móviles." },
      fitts_touch_padding: { status: "parcial", score: 77, detail: "Estrecho en mapas de auditorio." }
    },
    strengths: [
      "Microcopia de cuenta regresiva que orienta al usuario en el tiempo restante de reserva.",
      "Fila virtual estructurada con expectativas claras de espera."
    ],
    flaws: [
      "Mapa táctil de recintos con zonas de clic muy reducidas que violan la Ley de Fitts en móviles.",
      "Carga cognitiva alta en la selección de precios y etapas de preventa."
    ],
    rewrites: [
      {
        context: "Fila virtual de compra",
        original: "Usted se encuentra posicionado en la fila de asignación de turnos digital",
        proposed: "Estás en la fila virtual. Mantén esta pantalla abierta.",
        reason: "Causa tranquilidad e imparte una instrucción de comportamiento clara."
      }
    ]
  },
  {
    id: "registraduria",
    name: "Registraduría Nacional",
    url: "https://www.registraduria.gov.co/",
    category: "Gobierno & Público",
    overallScore: 66,
    scores: {
      ux_writing: 62,
      miller_law: 60,
      jakob_law: 74,
      fitts_law: 68
    },
    summary: "Servicios vitales (Cédula Digital, Censo Electoral). Presenta alta dispersión de enlaces, tipografía pequeña y lenguaje institucional arcaico.",
    checklist: {
      ux_clarity: { status: "no_cumple", score: 58, detail: "Lenguaje formal, legalista y con siglas no siempre explicadas de entrada." },
      ux_conciseness: { status: "no_cumple", score: 59, detail: "Boletines de prensa desplazan la atención de los trámites ciudadanos." },
      ux_usefulness: { status: "parcial", score: 68, detail: "Encontrar la cita para cédula digital requiere navegar por varios subportales." },
      ux_tone_voice: { status: "no_cumple", score: 60, detail: "Extremadamente burocrático e impersonal." },
      ux_cta_microcopy: { status: "parcial", score: 64, detail: "Botones rotulados como 'Agendamiento web', 'Consultar aquí'." },
      ux_error_feedback: { status: "no_cumple", score: 60, detail: "Expiración de sesión sin guardar datos previos." },
      miller_nav_limit: { status: "no_cumple", score: 56, detail: "Múltiples menús desplegables con demasiadas opciones simultáneas." },
      miller_chunking: { status: "no_cumple", score: 61, detail: "Falta de aglomeración eficiente en guías de tramitación de registro civil." },
      miller_visual_hierarchy: { status: "parcial", score: 64, detail: "Mezcla de noticias electorales con accesos de trámites cotidianos." },
      jakob_standards: { status: "cumple", score: 76, detail: "Respeto básico por normas visuales gubernamentales de Colombia." },
      jakob_predictability: { status: "parcial", score: 72, detail: "Apertura constante de micrositios con diseños completamente diferentes." },
      jakob_icons: { status: "cumple", score: 74, detail: "Iconos estándar para cédula, votación y certificado." },
      fitts_cta_size: { status: "parcial", score: 69, detail: "Botones de agendamiento de tamaño modesto." },
      fitts_proximity: { status: "parcial", score: 67, detail: "Campos de formulario de datos personales con etiquetas distantes." },
      fitts_touch_padding: { status: "parcial", score: 68, detail: "Requiere mayor separación táctil en enlaces móviles." }
    },
    strengths: [
      "Banner dedicado y visible para la Cédula Digital.",
      "Herramienta de consulta de lugar de votación accesible en periodo electoral."
    ],
    flaws: [
      "Dispersión institucional que obliga a navegar por múltiples subdominios con interfaces disímiles.",
      "Redacción en voz pasiva y lenguaje leguleyo.",
      "Violación de Miller al saturar la portada con noticias institucionales de poca utilidad práctica para el ciudadano."
    ],
    rewrites: [
      {
        context: "Tramitación de cédula digital",
        original: "Sistema web de asignación previa de citas para el trámite del documento nacional de identidad digital",
        proposed: "Agenda tu cita para la Cédula Digital",
        reason: "Directo, comprensible para cualquier ciudadano de cualquier nivel educativo."
      }
    ]
  },
  {
    id: "epssanitas",
    name: "EPS Sanitas",
    url: "https://www.epssanitas.com/",
    category: "Salud & EPS",
    overallScore: 78,
    scores: {
      ux_writing: 76,
      miller_law: 75,
      jakob_law: 82,
      fitts_law: 79
    },
    summary: "Intento de simplificar el acceso a la Oficina Virtual. Muestra mejor organización que otras EPS, pero mantiene oportunidades en error handling.",
    checklist: {
      ux_clarity: { status: "cumple", score: 77, detail: "Categorías principales claras ('Citas', 'Autorizaciones', 'Certificados')." },
      ux_conciseness: { status: "cumple", score: 76, detail: "Guías breves para el uso de la oficina virtual." },
      ux_usefulness: { status: "cumple", score: 80, detail: "Acceso prioritario a las tareas más demandadas por los afiliados." },
      ux_tone_voice: { status: "cumple", score: 77, detail: "Tono institucional respetuoso y orientado a la salud." },
      ux_cta_microcopy: { status: "cumple", score: 76, detail: "CTAs funcionales como 'Ingresar a Oficina Virtual', 'Descargar carnét'." },
      ux_error_feedback: { status: "parcial", score: 70, detail: "Mensajes de error en la plataforma a veces confusos en horas picos." },
      miller_nav_limit: { status: "cumple", score: 76, detail: "Menú organizado por tipos de afiliados (Afiliados, Empleadores, IPS)." },
      miller_chunking: { status: "cumple", score: 76, detail: "Bloques de acceso rápido bien agrupados visualmente." },
      miller_visual_hierarchy: { status: "cumple", score: 74, detail: "El botón de la Oficina Virtual predomina con claridad." },
      jakob_standards: { status: "cumple", score: 84, detail: "Sigue los patrones tradicionales de sitios de salud y EPS." },
      jakob_predictability: { status: "cumple", score: 80, detail: "Navegación predecible en la zona pública." },
      jakob_icons: { status: "cumple", score: 82, detail: "Iconos claros para servicios de salud." },
      fitts_cta_size: { status: "cumple", score: 80, detail: "Botón verde de ingreso a Oficina Virtual destacado con buen tamaño." },
      fitts_proximity: { status: "parcial", score: 78, detail: "Formularios de solicitud de autorizaciones con campos apretados." },
      fitts_touch_padding: { status: "cumple", score: 79, detail: "Separación adecuada en la portada móvil." }
    },
    strengths: [
      "Acceso directo y diferenciado a la 'Oficina Virtual' en el header principal.",
      "Agrupación por rol del usuario (Afiliado, Empleador, Profesional de Salud)."
    ],
    flaws: [
      "Manejo de errores durante bloqueos de servidor en hora pico con lenguaje poco explicativo.",
      "Formularios internos de radicación de incapacidades con padding ajustado."
    ],
    rewrites: [
      {
        context: "Solicitud de autorizaciones médicas",
        original: "Radicación electrónica de ordenamientos médicos para trámite de autorización de servicios",
        proposed: "Subir orden médica para autorización",
        reason: "Verbo de acción concreto que explica exactamente lo que debe hacer el paciente."
      }
    ]
  }
];
