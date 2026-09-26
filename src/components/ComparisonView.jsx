import React from 'react';
import { ArrowRightLeft, FileText, Layers, Compass, Target, X } from 'lucide-react';

export default function ComparisonView({ selectedSites, onRemoveSite, onClearAll }) {
  if (!selectedSites || selectedSites.length === 0) {
    return (
      <div className="modal-box" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <ArrowRightLeft size={48} style={{ color: 'var(--text-dim)', marginBottom: '16px' }} />
        <h3>Comparador de Sitios Web</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 20px auto' }}>
          Selecciona 2 o más sitios usando el botón de comparación ( <ArrowRightLeft size={14} inline /> ) en las tarjetas para confrontar sus puntuaciones y principios UX lado a lado.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Comparativa Lado a Lado ({selectedSites.length} sitios seleccionados)</h2>
        <button className="btn btn-secondary" onClick={onClearAll}>
          <X size={15} />
          <span>Limpiar Comparación</span>
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="checklist-table" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)' }}>
          <thead>
            <tr>
              <th style={{ minWidth: '200px' }}>Métrica / Criterio</th>
              {selectedSites.map(site => (
                <th key={site.id} style={{ minWidth: '240px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--text-main)' }}>{site.name}</span>
                    <button 
                      onClick={() => onRemoveSite(site.id)} 
                      style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <span className="site-category-tag" style={{ marginTop: '4px' }}>{site.category}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Score General */}
            <tr>
              <td><strong>Puntaje General (Score)</strong></td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ textAlign: 'center' }}>
                  <span className={`font-mono ${site.overallScore >= 90 ? 'cumple' : site.overallScore >= 80 ? 'parcial' : 'no_cumple'}`} style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                    {site.overallScore}%
                  </span>
                </td>
              ))}
            </tr>

            {/* UX Writing */}
            <tr>
              <td>
                <FileText size={14} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--cyan)' }} />
                <strong>UX Writing (Texto)</strong>
              </td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ textAlign: 'center' }}>
                  <span className="font-mono" style={{ fontWeight: '700' }}>{site.scores.ux_writing}%</span>
                </td>
              ))}
            </tr>

            {/* Miller Law */}
            <tr>
              <td>
                <Layers size={14} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--emerald)' }} />
                <strong>Ley de Miller (7±2)</strong>
              </td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ textAlign: 'center' }}>
                  <span className="font-mono" style={{ fontWeight: '700' }}>{site.scores.miller_law}%</span>
                </td>
              ))}
            </tr>

            {/* Jakob Law */}
            <tr>
              <td>
                <Compass size={14} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--primary)' }} />
                <strong>Ley de Jakob (Modelos)</strong>
              </td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ textAlign: 'center' }}>
                  <span className="font-mono" style={{ fontWeight: '700' }}>{site.scores.jakob_law}%</span>
                </td>
              ))}
            </tr>

            {/* Fitts Law */}
            <tr>
              <td>
                <Target size={14} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--amber)' }} />
                <strong>Ley de Fitts (Objetivo/CTAs)</strong>
              </td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ textAlign: 'center' }}>
                  <span className="font-mono" style={{ fontWeight: '700' }}>{site.scores.fitts_law}%</span>
                </td>
              ))}
            </tr>

            {/* Strengths */}
            <tr>
              <td><strong>Fortaleza Destacada</strong></td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ✓ {site.strengths[0]}
                </td>
              ))}
            </tr>

            {/* Main Flaw */}
            <tr>
              <td><strong>Punto Crítico a Mejorar</strong></td>
              {selectedSites.map(site => (
                <td key={site.id} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ⚠ {site.flaws[0]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
