import React, { useState, useMemo } from 'react';
import { BEVERAGES_MASTER, MasterItem } from '../data/beveragesMaster';
import { Search, Compass, ExternalLink, ArrowRight } from 'lucide-react';

interface SitemapIndexProps {
  searchQuery?: string;
  onSelectPage: (slug: string) => void;
}

export const SitemapIndex: React.FC<SitemapIndexProps> = ({ searchQuery = '', onSelectPage }) => {
  const [localSearch, setLocalSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 100+ Pages' },
    { id: 'coffee', label: '☕ Espresso & Coffee' },
    { id: 'green_tea', label: '🍵 Japanese Teas' },
    { id: 'black_tea', label: '🫖 Black Teas' },
    { id: 'herbal_botanical', label: '🌿 Herbal & Botanicals' },
    { id: 'fermented_specialty', label: '🪵 Fermented Specialty' },
  ];

  const effectiveSearch = searchQuery || localSearch;

  const filteredPages = useMemo(() => {
    return BEVERAGES_MASTER.filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (effectiveSearch.trim()) {
        const q = effectiveSearch.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.tastingNotes.some(n => n.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [effectiveSearch, activeCategory]);

  return (
    <section id="sitemap" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              100+ Page Search Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              CupCura HTML Sitemap & Search Index
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Browse all indexable guides, origin terroirs, health science studies, equipment reviews, and pairings.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8074]" />
            <input
              type="text"
              placeholder="Search 100+ pages..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-[#FFFFFF] border border-[#D5C7B4] rounded-full pl-9 pr-4 py-2 text-xs text-[#1C1510] focus:outline-none focus:border-[#C86D43]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#191410] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Page Count Banner */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-4 flex items-center justify-between text-xs font-semibold text-[#5C5248]">
          <span>Showing <strong className="text-[#1C1510]">{filteredPages.length}</strong> of <strong className="text-[#C86D43]">{BEVERAGES_MASTER.length}</strong> indexable pages</span>
          <span className="text-[11px] text-[#2D5A46]">✓ Schema.org Active on All 100+ Guides</span>
        </div>

        {/* 100 Pages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPages.map((page) => (
            <div
              key={page.slug}
              onClick={() => onSelectPage(page.slug)}
              className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-5 card-hover cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86D43]">
                    {page.categoryLabel}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#8C8074] group-hover:text-[#C86D43]" />
                </div>

                <h3 className="text-base font-serif font-bold text-[#1C1510] hover:text-[#C86D43] transition-colors leading-snug">
                  {page.name}
                </h3>

                <p className="text-xs text-[#5C5248] line-clamp-2 leading-relaxed">
                  {page.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E8DFD3]/60 flex items-center justify-between text-[11px] text-[#8C8074]">
                <span>{page.origin}</span>
                <span className="font-mono text-[#2D5A46] font-semibold">{page.caffeineMgPerServing}mg Caf</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
