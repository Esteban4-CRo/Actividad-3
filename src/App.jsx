import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import SiteCard from './components/SiteCard';
import SiteModal from './components/SiteModal';
import ComparisonView from './components/ComparisonView';
import InteractiveEvaluator from './components/InteractiveEvaluator';
import TheoryGuide from './components/TheoryGuide';

import { SITES_DATA } from './data/sitesData';
import { Search, LayoutGrid, ArrowRightLeft, PlusCircle, BookOpen } from 'lucide-react';

export default function App() {
  const [sites, setSites] = useState(SITES_DATA);
  const [activeTab, setActiveTab] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSite, setSelectedSite] = useState(null);
  const [comparedSiteIds, setComparedSiteIds] = useState(['mercadolibre', 'dian', 'nequi']);

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // View Transitions Helper
  const handleTabChange = (newTab) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setActiveTab(newTab);
      });
    } else {
      setActiveTab(newTab);
    }
  };

  const categories = ['Todos', 'E-Commerce', 'Banca & FinTech', 'Gobierno & Público', 'Salud & EPS', 'Entretenimiento & Streaming', 'Viajes & Aerolíneas'];

  // Filtered sites
  const filteredSites = sites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'Todos' || site.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleToggleCompare = (site) => {
    if (comparedSiteIds.includes(site.id)) {
      setComparedSiteIds(comparedSiteIds.filter(id => id !== site.id));
    } else {
      if (comparedSiteIds.length >= 4) {
        alert('Puedes comparar hasta un máximo de 4 sitios simultáneamente.');
        return;
      }
      setComparedSiteIds([...comparedSiteIds, site.id]);
    }
  };

  const handleSaveCustomSite = (newSite) => {
    setSites([newSite, ...sites]);
    handleTabChange('grid');
  };

  const handleExportAll = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sites, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "informe_ux_writing_esteban_campino.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const comparedSitesList = sites.filter(site => comparedSiteIds.includes(site.id));

  return (
    <div className="app-container">
      <Header onExportAll={handleExportAll} />

      {/* Navigation Tabs with View Transitions */}
      <nav className="nav-tabs">
        <button 
          className={`tab-btn ${activeTab === 'grid' ? 'active' : ''}`}
          onClick={() => handleTabChange('grid')}
        >
          <LayoutGrid size={15} />
          <span>Matriz de 15 Portales</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
          onClick={() => handleTabChange('compare')}
        >
          <ArrowRightLeft size={15} />
          <span>Comparador Lado a Lado ({comparedSiteIds.length})</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'evaluator' ? 'active' : ''}`}
          onClick={() => handleTabChange('evaluator')}
        >
          <PlusCircle size={15} />
          <span>Evaluador Dinámico</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
          onClick={() => handleTabChange('theory')}
        >
          <BookOpen size={15} />
          <span>Marco Teórico UX</span>
        </button>
      </nav>

      {/* Main Content Areas */}
      {activeTab === 'grid' && (
        <>
          <StatsOverview sites={sites} />

          {/* Search & Filter Bar */}
          <div className="controls-bar">
            <div className="search-input-box">
              <Search size={18} />
              <input 
                type="text" 
                className="search-input"
                placeholder="Filtrar portales, categorías o hallazgos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sites Grid */}
          <div className="sites-grid">
            {filteredSites.map(site => (
              <SiteCard 
                key={site.id} 
                site={site} 
                onSelect={(site) => {
                  if (document.startViewTransition) {
                    document.startViewTransition(() => setSelectedSite(site));
                  } else {
                    setSelectedSite(site);
                  }
                }} 
                onToggleCompare={handleToggleCompare}
                isCompared={comparedSiteIds.includes(site.id)}
              />
            ))}
          </div>

          {filteredSites.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <h3>No se encontraron sitios con los criterios de búsqueda</h3>
              <p>Prueba ajustando los filtros de categoría o el texto de búsqueda.</p>
            </div>
          )}
        </>
      )}

      {activeTab === 'compare' && (
        <ComparisonView 
          selectedSites={comparedSitesList} 
          onRemoveSite={(id) => setComparedSiteIds(comparedSiteIds.filter(sId => sId !== id))}
          onClearAll={() => setComparedSiteIds([])}
        />
      )}

      {activeTab === 'evaluator' && (
        <InteractiveEvaluator onSaveCustomSite={handleSaveCustomSite} />
      )}

      {activeTab === 'theory' && (
        <TheoryGuide />
      )}

      {/* Detailed Modal */}
      {selectedSite && (
        <SiteModal 
          site={selectedSite} 
          onClose={() => {
            if (document.startViewTransition) {
              document.startViewTransition(() => setSelectedSite(null));
            } else {
              setSelectedSite(null);
            }
          }} 
        />
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div>
          <strong>Esteban Campiño (Código: 2369228)</strong> — Actividad Práctica 3
        </div>
        <div>
          Diseño de Interfaces de Usuario • TEDESOFT Luis Eduardo Arango
        </div>
      </footer>
    </div>
  );
}
