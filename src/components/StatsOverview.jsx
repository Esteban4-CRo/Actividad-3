import React from 'react';
import { Award, TrendingUp, AlertTriangle, Layers, FileText, Target, Compass } from 'lucide-react';

export default function StatsOverview({ sites }) {
  if (!sites || sites.length === 0) return null;

  const totalSites = sites.length;
  const avgOverall = Math.round(sites.reduce((acc, s) => acc + s.overallScore, 0) / totalSites);

  const sorted = [...sites].sort((a, b) => b.overallScore - a.overallScore);
  const bestSite = sorted[0];
  const worstSite = sorted[sorted.length - 1];

  const avgUxWriting = Math.round(sites.reduce((acc, s) => acc + s.scores.ux_writing, 0) / totalSites);
  const avgMiller = Math.round(sites.reduce((acc, s) => acc + s.scores.miller_law, 0) / totalSites);
  const avgJakob = Math.round(sites.reduce((acc, s) => acc + s.scores.jakob_law, 0) / totalSites);
  const avgFitts = Math.round(sites.reduce((acc, s) => acc + s.scores.fitts_law, 0) / totalSites);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Promedio General</span>
          <Award size={18} />
        </div>
        <div className="stat-value">{avgOverall}%</div>
        <div className="stat-sub">{totalSites} Sitios Evaluados por Esteban Campiño</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Mejor Evaluado</span>
          <TrendingUp size={18} />
        </div>
        <div className="stat-value" style={{ fontSize: '1.4rem' }}>{bestSite.name}</div>
        <div className="stat-sub">{bestSite.overallScore}% Cumplimiento ({bestSite.category})</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Mayor Oportunidad</span>
          <AlertTriangle size={18} />
        </div>
        <div className="stat-value" style={{ fontSize: '1.4rem' }}>{worstSite.name}</div>
        <div className="stat-sub">{worstSite.overallScore}% Cumplimiento ({worstSite.category})</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Promedios de Dimensión</span>
          <Layers size={18} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
          <span><FileText size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} /> UX: <strong>{avgUxWriting}%</strong></span>
          <span><Layers size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Miller: <strong>{avgMiller}%</strong></span>
          <span><Compass size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Jakob: <strong>{avgJakob}%</strong></span>
          <span><Target size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Fitts: <strong>{avgFitts}%</strong></span>
        </div>
      </div>
    </div>
  );
}
