import React from 'react';
import { ExternalLink, Eye, ArrowRightLeft, FileText, Layers, Compass, Target } from 'lucide-react';

export default function SiteCard({ site, onSelect, onToggleCompare, isCompared }) {
  const getScoreClass = (score) => {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'average';
    return 'poor';
  };

  return (
    <div className="site-card">
      <div>
        <div className="site-card-header">
          <div className="site-title-area">
            <h2>{site.name}</h2>
            <span className="site-category-tag">{site.category}</span>
          </div>

          <div className={`score-badge-box ${getScoreClass(site.overallScore)}`}>
            {site.overallScore}
            <span>PTS</span>
          </div>
        </div>

        <p className="site-summary-text" style={{ marginTop: '14px' }}>
          {site.summary}
        </p>

        <div className="mini-scores-list" style={{ marginTop: '18px' }}>
          <div className="mini-score-item">
            <div className="mini-score-label">
              <span><FileText size={11} /> UX WRITING</span>
              <strong>{site.scores.ux_writing}%</strong>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${site.scores.ux_writing}%` }} />
            </div>
          </div>

          <div className="mini-score-item">
            <div className="mini-score-label">
              <span><Layers size={11} /> LEY MILLER</span>
              <strong>{site.scores.miller_law}%</strong>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${site.scores.miller_law}%` }} />
            </div>
          </div>

          <div className="mini-score-item">
            <div className="mini-score-label">
              <span><Compass size={11} /> LEY JAKOB</span>
              <strong>{site.scores.jakob_law}%</strong>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${site.scores.jakob_law}%` }} />
            </div>
          </div>

          <div className="mini-score-item">
            <div className="mini-score-label">
              <span><Target size={11} /> LEY FITTS</span>
              <strong>{site.scores.fitts_law}%</strong>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${site.scores.fitts_law}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="site-card-actions">
        <button className="btn btn-primary" onClick={() => onSelect(site)}>
          <Eye size={14} />
          <span>Ver Análisis</span>
        </button>

        <button 
          className={`btn btn-secondary ${isCompared ? 'active' : ''}`}
          onClick={() => onToggleCompare(site)}
          title={isCompared ? "Quitar de comparación" : "Comparar este sitio"}
          style={isCompared ? { background: '#ffffff', color: '#000000', borderColor: '#ffffff' } : {}}
        >
          <ArrowRightLeft size={14} />
        </button>

        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary" 
          title="Visitar sitio web oficial"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
