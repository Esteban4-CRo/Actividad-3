export const CHECKLIST_CRITERIA = {
  ux_writing: {
    title: "Componentes de UX Writing",
    icon: "FileText",
    description: "Evaluación de la claridad, concisión, tono, microcopia y accesibilidad del texto en la interfaz.",
    items: [
      {
        id: "ux_clarity",
        name: "Claridad y Lenguaje Directo",
        description: "El texto evita la jerga técnica, leguleya o burocrática. Explica conceptos complejos en términos simples."
      },
      {
        id: "ux_conciseness",
        name: "Concisión y Brevedad",
        description: "Oraciones cortas y escaneables. Elimina palabras innecesarias para agilizar la lectura."
      },
      {
        id: "ux_usefulness",
        name: "Utilidad y Guía al Usuario",
        description: "El contenido orienta al usuario hacia su objetivo inmediato y responde sus dudas en cada etapa."
      },
      {
        id: "ux_tone_voice",
        name: "Coherencia de Tono y Voz",
        description: "Mantener una voz definida alineada a la personalidad de marca (empática, profesional, cercana)."
      },
      {
        id: "ux_cta_microcopy",
        name: "Microcopia en CTAs y Formularios",
        description: "Los botones usan verbos de acción precisos e informativos ('Descargar factura' en lugar de 'Aceptar')."
      },
      {
        id: "ux_error_feedback",
        name: "Mensajes de Error Constructivos",
        description: "Los errores informan claramente qué falló y ofrecen una solución concreta inmediata."
      }
    ]
  },
  miller_law: {
    title: "Ley de Miller (Carga Cognitiva 7±2)",
    icon: "Layers",
    description: "Evaluación de la capacidad de procesamiento del cerebro mediante la fragmentación (chunking) y límites de elementos.",
    items: [
      {
        id: "miller_nav_limit",
        name: "Límite de Menú Principal (7±2)",
        description: "El menú de navegación principal presenta entre 5 y 9 categorías máximas para evitar sobrecarga."
      },
      {
        id: "miller_chunking",
        name: "Fragmentación de Información (Chunking)",
        description: "Agrupación lógica de datos largos (teléfonos, tarjetas, formularios por pasos, tarjetas de producto)."
      },
      {
        id: "miller_visual_hierarchy",
        name: "Jerarquía Visual y Escaneabilidad",
        description: "Uso de encabezados, viñetas y espaciado para que el cerebro organice rápidamente el contenido."
      }
    ]
  },
  jakob_law: {
    title: "Ley de Jakob (Patrones Estándar)",
    icon: "Compass",
    description: "Evaluación del respeto por los modelos mentales del usuario basados en su experiencia previa en la web.",
    items: [
      {
        id: "jakob_standards",
        name: "Patrones de Navegación Estándar",
        description: "Ubicación tradicional del logo (arriba izquierda), carrito/perfil (arriba derecha) y buscador centrado/visible."
      },
      {
        id: "jakob_predictability",
        name: "Comportamiento Predecible",
        description: "Los enlaces y componentes interactivos se comportan de la manera anticipada por el usuario."
      },
      {
        id: "jakob_icons",
        name: "Simbología e Iconografía Convencional",
        description: "Iconos universales (lupa, engranaje, carrito, casa, usuario) sin reinventar significados."
      }
    ]
  },
  fitts_law: {
    title: "Ley de Fitts (Tamaño y Distancia)",
    icon: "Target",
    description: "Evaluación del esfuerzo físico y tiempo necesario para interactuar con botones y elementos interactivos.",
    items: [
      {
        id: "fitts_cta_size",
        name: "Tamaño Adecuado de Objetivos (CTAs)",
        description: "Los botones clave son suficientemente grandes (mínimo 44px-48px) para hacer clic o tocar con facilidad."
      },
      {
        id: "fitts_proximity",
        name: "Proximidad entre Elementos Relacionados",
        description: "Los botones de acción están cerca de los controles o inputs correspondientes para reducir desplazamiento."
      },
      {
        id: "fitts_touch_padding",
        name: "Espaciado Interactivo (Margin & Padding)",
        description: "Espacio de separación suficiente entre enlaces para prevenir clics accidentales o errores táctiles."
      }
    ]
  }
};
