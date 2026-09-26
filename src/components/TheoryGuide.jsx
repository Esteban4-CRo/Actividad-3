import React from 'react';
import { BookOpen, FileText, Layers, Compass, Target } from 'lucide-react';

export default function TheoryGuide() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Hero Banner */}
      <div className="evaluator-box" style={{ borderLeft: '4px solid #ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <BookOpen size={28} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', textTransform: 'uppercase' }}>
            Marco Teórico & Fundamentación de UX
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '900px' }}>
          Documentación técnica y bases teóricas de la <strong>Actividad Práctica 3</strong> para la asignatura <em>Diseño de Interfaces de Usuario</em> (Esteban Campiño - Código 2369228). Este marco sustenta la matriz de evaluación aplicada a los 15 portales web seleccionados.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="theory-grid">
        {/* Pillar 1: UX Writing */}
        <div className="theory-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <FileText size={22} />
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>1. Componentes de UX Writing</h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            El <strong>UX Writing</strong> es la disciplina de la microcopia enfocada en diseñar las palabras que orientan al usuario en su interacción con un sistema digital (mensajes, botones, campos, notificaciones y errores).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Claridad y Lenguaje Directo</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sustitución de la jerga burocrática y legalista por vocabulario transparente y accesible sin ambigüedades.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Concisión y Sintaxis Escaneable</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Construcción de oraciones cortas eliminando el texto de relleno ("bloatware text") para acelerar la velocidad de lectura.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Microcopia Orientada a la Acción (CTAs)</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Los botones deben incluir verbos de acción específicos que expliquen exactamente la consecuencia del clic ("Descargar certificado" vs "Aceptar").</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Mensajes de Error Constructivos</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Explicación empática del problema y solución inmediata sin mostrar códigos de servidor crípticos.</p>
            </div>
          </div>
        </div>

        {/* Pillar 2: Ley de Miller */}
        <div className="theory-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Layers size={22} />
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>2. Ley de Miller (7 ± 2)</h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Formulada por el psicólogo cognitivo George Miller en 1956. Determina que el cerebro humano promedio solo puede procesar y retener en su memoria de trabajo <strong>7 ± 2 unidades de información (chunks)</strong> simultáneamente.
          </p>

          <div className="theory-formula">
            Memoria Corto Plazo = 7 ± 2 Elementos
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Técnica de Chunking (Fragmentación)</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>División de secuencias extensas en bloques con sentido (ej: números telefónicos o tarjetas divididos en grupos de 4 dígitos).</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Control de Carga Cognitiva en Menús</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Restricción del número de categorías superiores visibles en la barra de navegación a un máximo de 5 a 9 ítems principales.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Jerarquía Visual y Densidad</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Uso de espacios en blanco (negative space) para prevenir la sobrecarga sensorial del usuario.</p>
            </div>
          </div>
        </div>

        {/* Pillar 3: Ley de Jakob */}
        <div className="theory-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Compass size={22} />
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>3. Ley de Jakob</h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Enunciada por Jakob Nielsen (Nielsen Norman Group). Postula que los usuarios pasan la mayor parte de su tiempo navegando en <em>otros</em> sitios web. Por lo tanto, prefieren que tu sitio funcione de manera idéntica a los que ya conocen.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Transferencia de Modelos Mentales</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reaprovechamiento del conocimiento previo del usuario para reducir la curva de aprendizaje a cero.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Patrones de Navegación Estándar</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ubicación convencional del logo (superior izquierda), carrito/perfil (superior derecha) y buscador centrado.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Simbología Ecosistémica</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Iconografía estándar (lupa para buscar, engranaje para configuración, casa para inicio) sin reinvenciones innecesarias.</p>
            </div>
          </div>
        </div>

        {/* Pillar 4: Ley de Fitts */}
        <div className="theory-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Target size={22} />
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>4. Ley de Fitts</h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Modelo matemático formulado por Paul Fitts (1954). Establece que el tiempo (<em>T</em>) para alcanzar un objetivo depende de la distancia (<em>D</em>) y del tamaño o ancho (<em>W</em>) del objetivo.
          </p>

          <div className="theory-formula">
            T = a + b log₂ (1 + D / W)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Dimensionamiento del Target (W)</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Los botones clave deben contar con un área de clic o toque amplia (mínimo 44px a 48px de alto/ancho en móviles).</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Minimización del Recorrido (D)</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ubicación estratégica de acciones principales en áreas adyacentes al foco de interacción actual.</p>
            </div>

            <div style={{ background: '#000000', padding: '12px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>Thumb Zone (Zona del Pulgar)</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Disposición ergonómica de botones primarios en el tercio inferior de la pantalla para navegación móvil.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Reference Matrix */}
      <div className="modal-box" style={{ background: '#0a0a0a', marginTop: '12px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '16px' }}>
          Matriz de Aplicabilidad e Impacto en la Experiencia de Usuario
        </h3>
        
        <table className="checklist-table">
          <thead>
            <tr>
              <th>Dimensión UX</th>
              <th>Principio Clave</th>
              <th>Consecuencia de Incumplimiento</th>
              <th>Buenas Prácticas Observadas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>UX Writing</strong></td>
              <td>Claridad, Tono y Concisión</td>
              <td>Abandono por frustración, confusión en formularios y errores de operación.</td>
              <td>Microcopia conversacional en Nequi y Mercado Libre.</td>
            </tr>
            <tr>
              <td><strong>Ley de Miller</strong></td>
              <td>Límite 7 ± 2 y Chunking</td>
              <td>Fatiga cognitiva, sobrecarga de información y pérdida de foco.</td>
              <td>Menús simplificados y cards en Netflix y Bancolombia.</td>
            </tr>
            <tr>
              <td><strong>Ley de Jakob</strong></td>
              <td>Modelos Mentales Estándar</td>
              <td>Sensación de interfaz extraña, curva de aprendizaje elevada.</td>
              <td>Patrón global de e-commerce en Amazon y Mercado Libre.</td>
            </tr>
            <tr>
              <td><strong>Ley de Fitts</strong></td>
              <td>Ergonomía, Tamaño W y Distancia D</td>
              <td>Clics erróneos, lentitud en completar tareas, frustración táctil.</td>
              <td>CTAs principales gigantes en Nequi y Netflix.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
