import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';
import { CHECKLIST_CRITERIA } from '../data/checklistCriteria';

// Chart.js registration
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SiteModal({ site, onClose }) {
  if (!site) return null;

  const chartData = {
    labels: ['UX Writing', 'Ley de Miller (7±2)', 'Ley de Jakob', 'Ley de Fitts'],
    datasets: [
      {
        label: site.name,
        data: [
          site.scores.ux_writing,
          site.scores.miller_law,
          site.scores.jakob_law,
          site.scores.fitts_law
        ],
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: '#ffffff',
        borderWidth: 2,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#000000',
        pointHoverBackgroundColor: '#000000',
        pointHoverBorderColor: '#ffffff'
      }
    ]
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
        grid: { color: 'rgba(255, 255, 255, 0.15)' },
        pointLabels: {
          color: '#ffffff',
          font: { family: 'Space Grotesk', size: 11, weight: '700' }
        },
        ticks: {
          color: '#a3a3a3',
          backdropColor: 'transparent',
          stepSize: 20
        },
        min: 0,
        max: 100
      }
    },
    plugins: {
      legend: { display: false }
    },
    maintainAspectRatio: false
  };

  const getStatusTag = (status) => {
    if (status === 'cumple') return <span className="status-tag cumple">✓ Cumple</span>;
    if (status === 'parcial') return <span className="status-tag parcial">⚠ Parcial</span>;
    return <span className="status-tag no_cumple">✗ No cumple</span>;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Cerrar ventana">
          <X size={20} />
        </button>

        <div className="modal-header-section">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="site-category-tag">{site.category}</span>
              <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-mono)' }}>
                {site.url} <ExternalLink size={13} />
              </a>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>{site.name}</h2>
          </div>

          <div className="score-badge-box excellent" style={{ width: '72px', height: '72px', fontSize: '1.6rem' }}>
            {site.overallScore}
            <span style={{ fontSize: '0.6rem' }}>OVERALL</span>
          </div>
        </div>

        {/* Top Summary Grid */}
        <div className="modal-grid-2">
          {/* Radar Chart */}
          <div className="modal-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Radar de Cumplimiento UX</h3>
            <div style={{ width: '100%', height: '250px' }}>
              <Radar data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Strengths & Flaws */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="modal-box" style={{ flex: 1 }}>
              <h3>
                <CheckCircle2 size={18} /> Puntos Fuertes (Fortalezas)
              </h3>
              {site.strengths.map((str, idx) => (
                <div key={idx} className="strength-item">
                  <CheckCircle2 size={15} />
                  <span>{str}</span>
                </div>
              ))}
            </div>

            <div className="modal-box" style={{ flex: 1 }}>
              <h3>
                <AlertTriangle size={18} /> Oportunidades de Mejora
              </h3>
              {site.flaws.map((flaw, idx) => (
                <div key={idx} className="flaw-item">
                  <AlertTriangle size={15} />
                  <span>{flaw}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UX Writing Rewrites Section */}
        {site.rewrites && site.rewrites.length > 0 && (
          <div className="modal-box" style={{ marginBottom: '28px' }}>
            <h3>
              <RefreshCw size={18} /> 
              Propuestas de Reescritura UX Writing (Microcopia)
            </h3>
            {site.rewrites.map((rw, idx) => (
              <div key={idx} className="rewrite-card">
                <div className="rewrite-badge">Contexto: {rw.context}</div>
                <div className="rewrite-comparison">
                  <div className="rewrite-col original">
                    <strong>Original:</strong> "{rw.original}"
                  </div>
                  <div className="rewrite-col proposed">
                    <strong>Propuesta UX Writing:</strong> "{rw.proposed}"
                  </div>
                </div>
                <div className="rewrite-reason">
                  <strong>Justificación UX:</strong> {rw.reason}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Item Checklist Table */}
        <div className="modal-box">
          <h3>Detalle de Evaluación por Criterios (Lista de Chequeo)</h3>
          
          {Object.entries(CHECKLIST_CRITERIA).map(([catKey, catObj]) => (
            <div key={catKey} style={{ marginTop: '24px' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-mono)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '12px' }}>
                {catObj.title}
              </h4>

              <table className="checklist-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Criterio</th>
                    <th style={{ width: '15%' }}>Estado</th>
                    <th style={{ width: '10%' }}>Puntaje</th>
                    <th>Observación del Análisis</th>
                  </tr>
                </thead>
                <tbody>
                  {catObj.items.map((item) => {
                    const itemResult = site.checklist[item.id] || { status: 'parcial', score: 70, detail: 'Sin evaluar' };
                    return (
                      <tr key={item.id}>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>{getStatusTag(itemResult.status)}</td>
                        <td>
                          <span className="font-mono" style={{ fontWeight: '700' }}>{itemResult.score}%</span>
                        </td>
                        <td style={{ color: 'var(--text-muted)' }}>{itemResult.detail}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
