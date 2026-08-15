import React, { useState, useMemo } from 'react';
import { Beverage } from '../data/beverages';
import { BEVERAGES_MASTER, MasterItem } from '../data/beveragesMaster';
import { Search, Filter, SlidersHorizontal, Sparkles, AlertTriangle, ArrowUpRight, Zap, Heart } from 'lucide-react';

interface CatalogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectBeverage: (beverage: Beverage) => void;
}

export const BeverageCatalog: React.FC<CatalogProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectBeverage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxCaffeine, setMaxCaffeine] = useState<number>(250);
  const [selectedAcidity, setSelectedAcidity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'caffeine_desc' | 'caffeine_asc' | 'acidity'>('popular');

  const categories = [
    { id: 'all', label: 'All Global Brews' },
    { id: 'coffee', label: '☕ Espresso & Coffee' },
    { id: 'green_tea', label: '🍵 Japanese & Green Tea' },
    { id: 'black_tea', label: '🫖 Black & Scented Tea' },
    { id: 'herbal_botanical', label: '🌿 Herbal & Botanicals' },
    { id: 'fermented_specialty', label: '🪵 Fermented & Pu-erh' },
  ];

  const filteredBeverages = useMemo(() => {
    return BEVERAGES_MASTER.filter((b) => {
      // Category filter
      if (selectedCategory !== 'all' && b.category !== selectedCategory) return false;

      // Caffeine filter
      if (b.caffeineMgPerServing > maxCaffeine) return false;

      // Acidity filter
      if (selectedAcidity !== 'all' && b.acidityLevel.toLowerCase() !== selectedAcidity) return false;

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = b.name.toLowerCase().includes(q);
        const matchesOrigin = b.origin.toLowerCase().includes(q);
        const matchesNotes = b.tastingNotes.some(n => n.toLowerCase().includes(q));
        const matchesHealth = b.healthBenefits.some(h => h.title.toLowerCase().includes(q) || h.description.toLowerCase().includes(q));
        const matchesCaution = b.contraindications.some(c => c.toLowerCase().includes(q));
        return matchesName || matchesOrigin || matchesNotes || matchesHealth || matchesCaution;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'caffeine_desc') return b.caffeineMgPerServing - a.caffeineMgPerServing;
      if (sortBy === 'caffeine_asc') return a.caffeineMgPerServing - b.caffeineMgPerServing;
      if (sortBy === 'acidity') return b.flavorProfile.acidity - a.flavorProfile.acidity;
      return b.popularScore - a.popularScore;
    });
  }, [selectedCategory, maxCaffeine, selectedAcidity, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Worldwide Beverage Library
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Curated Coffee, Tea & Botanicals ({BEVERAGES_MASTER.length} Items)
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Explore taste scales, caffeine density, physiological benefits, and safety warnings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#8C8074]">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FFFFFF] border border-[#D5C7B4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1C1510] focus:outline-none focus:border-[#C86D43]"
            >
              <option value="popular">Most Popular</option>
              <option value="caffeine_desc">Highest Caffeine</option>
              <option value="caffeine_asc">Lowest Caffeine (0mg)</option>
              <option value="acidity">Highest Acidity</option>
            </select>
          </div>
        </div>

        {/* Category Pills & Quick Filter Bar */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#191410] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF6F0] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Sliders & Sensitivity Toggles */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-sm">
            
            {/* Caffeine Max Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#1C1510]">Max Caffeine Limit</span>
                <span className="text-[#C86D43] font-mono font-bold">{maxCaffeine === 250 ? 'Any Level' : `${maxCaffeine} mg`}</span>
              </div>
              <input
                type="range"
                min="0"
                max="250"
                step="10"
                value={maxCaffeine}
                onChange={(e) => setMaxCaffeine(Number(e.target.value))}
                className="w-full accent-[#C86D43]"
              />
              <div className="flex justify-between text-[10px] text-[#8C8074]">
                <span>0mg (Herbal)</span>
                <span>70mg (Tea)</span>
                <span>200mg+ (Nitro)</span>
              </div>
            </div>

            {/* Acidity Level Filter */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-[#1C1510] block">Stomach Acidity Filter</span>
              <div className="grid grid-cols-4 gap-1">
                {['all', 'low', 'moderate', 'high'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedAcidity(lvl)}
                    className={`py-1.5 text-[11px] font-semibold rounded-lg uppercase tracking-wider transition-all ${
                      selectedAcidity === lvl
                        ? 'bg-[#C86D43] text-white'
                        : 'bg-[#FAF6F0] text-[#5C5248] border border-[#E8DFD3] hover:bg-[#F3ECE2]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Status Count */}
            <div className="flex items-center justify-between sm:justify-end gap-4 text-xs font-semibold text-[#5C5248]">
              <div className="text-right">
                <span className="block text-lg font-serif font-bold text-[#1C1510]">{filteredBeverages.length}</span>
                <span className="text-[11px] text-[#8C8074]">Brews Matching Criteria</span>
              </div>
              {(selectedCategory !== 'all' || maxCaffeine !== 250 || selectedAcidity !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setMaxCaffeine(250);
                    setSelectedAcidity('all');
                    setSearchQuery('');
                  }}
                  className="text-xs text-[#C86D43] hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Beverage Grid */}
        {filteredBeverages.length === 0 ? (
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-12 text-center space-y-3">
            <Filter className="w-10 h-10 text-[#8C8074] mx-auto" />
            <h3 className="text-lg font-serif font-bold text-[#1C1510]">No beverages match your exact criteria</h3>
            <p className="text-xs text-[#5C5248]">Try expanding your caffeine slider or resetting stomach acidity parameters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeverages.map((bev) => (
              <div
                key={bev.id}
                onClick={() => onSelectBeverage(bev)}
                className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl overflow-hidden card-hover cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={bev.imageUrl}
                      alt={bev.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191410]/70 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-[#191410]/90 backdrop-blur-md text-[#FAF7F2] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {bev.origin.split(',')[0]}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${
                        bev.caffeineMgPerServing === 0
                          ? 'bg-[#E8F2EC] text-[#2D5A46] border-[#2D5A46]/30'
                          : bev.caffeineMgPerServing > 100
                          ? 'bg-[#F7E9EC] text-[#8B3A4C] border-[#8B3A4C]/30'
                          : 'bg-[#FFF8EB] text-[#B88230] border-[#F3E0B5]'
                      }`}>
                        {bev.caffeineMgPerServing === 0 ? '0mg Caffeine' : `${bev.caffeineMgPerServing}mg Caffeine`}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-serif italic text-white/90">{bev.servingSize}</span>
                      <span className="text-[11px] font-semibold bg-[#C86D43] px-2 py-0.5 rounded-md">
                        Acidity: {bev.acidityLevel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8074]">
                        {bev.category.replace('_', ' ')}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#8C8074] group-hover:text-[#C86D43] transition-transform" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#1C1510] group-hover:text-[#C86D43] transition-colors">
                      {bev.name}
                    </h3>

                    <p className="text-xs text-[#5C5248] line-clamp-2 leading-relaxed">
                      {bev.description}
                    </p>

                    {/* Tasting Notes */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {bev.tastingNotes.slice(0, 3).map((note, i) => (
                        <span key={i} className="text-[10px] font-medium bg-[#FAF6F0] text-[#5C5248] px-2 py-0.5 rounded border border-[#E8DFD3]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Highlights */}
                <div className="px-5 pb-5 pt-3 border-t border-[#E8DFD3]/60 bg-[#FAF6F0]/40 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#2D5A46] font-semibold">
                    <Heart className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[170px]">{bev.healthBenefits[0]?.title}</span>
                  </div>
                  {bev.contraindications.length > 0 && (
                    <div className="flex items-center gap-1 text-[#8B3A4C] font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Caution</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
