import React, { useState } from 'react';
import { PlusCircle, Sparkles, Download, CheckCircle2, AlertTriangle, FileText, Layers, Compass, Target } from 'lucide-react';
import { CHECKLIST_CRITERIA } from '../data/checklistCriteria';

export default function InteractiveEvaluator({ onSaveCustomSite }) {
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [category, setCategory] = useState('E-Commerce');
  const [checklistState, setChecklistState] = useState({
    ux_clarity: { status: 'cumple', score: 90, detail: '' },
    ux_conciseness: { status: 'cumple', score: 85, detail: '' },
    ux_usefulness: { status: 'cumple', score: 90, detail: '' },
    ux_tone_voice: { status: 'cumple', score: 85, detail: '' },
    ux_cta_microcopy: { status: 'cumple', score: 90, detail: '' },
    ux_error_feedback: { status: 'parcial', score: 75, detail: '' },
    miller_nav_limit: { status: 'cumple', score: 85, detail: '' },
    miller_chunking: { status: 'cumple', score: 85, detail: '' },
    miller_visual_hierarchy: { status: 'cumple', score: 80, detail: '' },
    jakob_standards: { status: 'cumple', score: 90, detail: '' },
    jakob_predictability: { status: 'cumple', score: 85, detail: '' },
    jakob_icons: { status: 'cumple', score: 90, detail: '' },
    fitts_cta_size: { status: 'cumple', score: 85, detail: '' },
    fitts_proximity: { status: 'cumple', score: 80, detail: '' },
    fitts_touch_padding: { status: 'cumple', score: 85, detail: '' }
  });

  const handleStatusChange = (itemId, status) => {
    let defaultScore = 90;
    if (status === 'parcial') defaultScore = 70;
    if (status === 'no_cumple') defaultScore = 50;

    setChecklistState(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], status, score: defaultScore }
    }));
  };

  const handleDetailChange = (itemId, detail) => {
    setChecklistState(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], detail }
    }));
  };

  const calculateOverall = () => {
    const scores = Object.values(checklistState).map(item => item.score);
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!siteName.trim()) return alert('Por favor ingresa el nombre del sitio web.');

    const overall = calculateOverall();
    
    // Group category scores
    const uxWritingAvg = Math.round(
      (checklistState.ux_clarity.score + checklistState.ux_conciseness.score + checklistState.ux_usefulness.score + checklistState.ux_tone_voice.score + checklistState.ux_cta_microcopy.score + checklistState.ux_error_feedback.score) / 6
    );
    const millerAvg = Math.round(
      (checklistState.miller_nav_limit.score + checklistState.miller_chunking.score + checklistState.miller_visual_hierarchy.score) / 3
    );
    const jakobAvg = Math.round(
      (checklistState.jakob_standards.score + checklistState.jakob_predictability.score + checklistState.jakob_icons.score) / 3
    );
    const fittsAvg = Math.round(
      (checklistState.fitts_cta_size.score + checklistState.fitts_proximity.score + checklistState.fitts_touch_padding.score) / 3
    );

    const newSite = {
      id: `custom_${Date.now()}`,
      name: siteName,
      url: siteUrl || 'https://ejemplo.com',
      category: category,
      overallScore: overall,
      scores: {
        ux_writing: uxWritingAvg,
        miller_law: millerAvg,
        jakob_law: jakobAvg,
        fitts_law: fittsAvg
      },
      summary: `Evaluación personalizada realizada mediante la Lista de Chequeo UX. Puntaje global: ${overall}%.`,
      checklist: checklistState,
      strengths: ["Evaluación añadida manualmente mediante el motor dinámico."],
      flaws: ["Revisar las observaciones específicas de la lista de chequeo."],
      rewrites: []
    };

    onSaveCustomSite(newSite);
    alert(`¡Sitio "${siteName}" evaluado con éxito! Se ha añadido al panel principal.`);
    setSiteName('');
    setSiteUrl('');
  };

  return (
    <div className="evaluator-box">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', fontWeight: '800' }}>
          <Sparkles size={24} style={{ color: 'var(--cyan)' }} />
          Evaluador Dinámico: Crear Nueva Lista de Chequeo
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Audita cualquier sitio web adicional completando los 15 ítems de la lista de chequeo de UX Writing y Leyes de UX.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="evaluator-input-group">
          <input 
            type="text" 
            placeholder="Nombre del sitio (ej: Mercadolibre, EPS X...)" 
            value={siteName} 
            onChange={(e) => setSiteName(e.target.value)} 
            required
          />
          <input 
            type="url" 
            placeholder="URL del sitio (https://...)" 
            value={siteUrl} 
            onChange={(e) => setSiteUrl(e.target.value)} 
          />
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            style={{ background: 'rgba(10, 15, 26, 0.8)', border: '1px solid var(--border-color)', color: '#fff', padding: '12px 16px', borderRadius: '8px' }}
          >
            <option value="E-Commerce">E-Commerce</option>
            <option value="Banca & FinTech">Banca & FinTech</option>
            <option value="Gobierno & Público">Gobierno & Público</option>
            <option value="Salud & EPS">Salud & EPS</option>
            <option value="Entretenimiento & Streaming">Entretenimiento & Streaming</option>
            <option value="Viajes & Aerolíneas">Viajes & Aerolíneas</option>
          </select>
        </div>

        {/* Dynamic Checklist Items */}
        {Object.entries(CHECKLIST_CRITERIA).map(([catKey, catObj]) => (
          <div key={catKey} style={{ marginTop: '28px', background: 'rgba(10, 15, 26, 0.5)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--cyan)', marginBottom: '14px' }}>
              {catObj.title}
            </h3>

            {catObj.items.map(item => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 2fr', gap: '14px', alignItems: 'center', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div>
                  <strong>{item.name}</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{item.description}</p>
                </div>

                <div>
                  <select 
                    value={checklistState[item.id]?.status || 'cumple'} 
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    style={{ width: '100%', background: '#090d16', color: '#fff', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-color)' }}
                  >
                    <option value="cumple">✓ Cumple (90%)</option>
                    <option value="parcial">⚠ Parcial (70%)</option>
                    <option value="no_cumple">✗ No cumple (50%)</option>
                  </select>
                </div>

                <div>
                  <input 
                    type="text" 
                    placeholder="Observación del hallazgo..." 
                    value={checklistState[item.id]?.detail || ''} 
                    onChange={(e) => handleDetailChange(item.id, e.target.value)}
                    style={{ width: '100%', background: '#090d16', color: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
          <button type="submit" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <PlusCircle size={18} />
            <span>Guardar Evaluación del Sitio ({calculateOverall()}%)</span>
          </button>
        </div>
      </form>
    </div>
  );
}
