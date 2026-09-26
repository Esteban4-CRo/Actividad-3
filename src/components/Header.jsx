import React from 'react';
import { User, BookOpen, Download, ShieldCheck } from 'lucide-react';

export default function Header({ onExportAll }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="header-icon">
          
        </div>
        <div className="header-title-box">
          <h1>Actividad Práctica 3 — Checklist UX</h1>
          <p>Evaluación de UX Writing, Ley de Miller, Jakob y Fitts en 15 Portales Web</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <div className="header-student-badge">
          <div className="header-student-name">
            <User size={15} />
            <span>Esteban Campiño</span>
          </div>
          <div className="header-student-code">
            CÓDIGO: 2369228 • TEDESOFT
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <div><ShieldCheck size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Asignatura: Diseño de Interfaces de Usuario</div>
          <div><BookOpen size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Docente: TEDESOFT Luis Eduardo Arango</div>
        </div>

        <button 
          onClick={onExportAll} 
          className="btn btn-secondary mac-btn" 
          style={{ padding: '8px 16px' }}
          title="Exportar informe completo en JSON"
        >
          <Download size={14} />
          <span>Exportar Datos</span>
        </button>
      </div>
    </header>
  );
}
