import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Beverage, BEVERAGES_DATA } from '../data/beverages';
import { ArrowRight, Heart, SlidersHorizontal, Sparkles } from 'lucide-react';

interface BeverageCatalogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectBeverage: (beverage: Beverage) => void;
}

export const BeverageCatalog: React.FC<BeverageCatalogProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectBeverage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'caffeine-desc' | 'caffeine-asc' | 'recommended'>('recommended');
  const [visibleCount, setVisibleCount] = useState(24);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cupcura_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Sync favorites to localStorage
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('cupcura_favorites', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save favorites to localStorage', err);
      }
      return updated;
    });
  };

  const categories = [
    { id: 'all', label: 'All Varieties' },
    { id: 'coffee', label: '☕ Espresso & Coffee' },
    { id: 'green_tea', label: '🍵 Green Teas' },
    { id: 'black_tea', label: '🫖 Black Teas' },
    { id: 'herbal_botanical', label: '🌿 Herbal & Botanicals' },
    { id: 'fermented_specialty', label: '🪵 Fermented & Specialty' },
    { id: 'favorites', label: `❤️ Saved (${favorites.length})` }
  ];

  // Filter & Sort beverages
  const filteredAndSortedItems = useMemo(() => {
    const queryLower = searchQuery.trim().toLowerCase();
    
    let result = BEVERAGES_DATA.filter(beverage => {
      // Category filter
      if (selectedCategory === 'favorites') {
        if (!favorites.includes(beverage.id)) return false;
      } else if (selectedCategory !== 'all' && beverage.category !== selectedCategory) {
        return false;
      }

      // Text search filter
      if (queryLower) {
        const searchableText = [
          beverage.name,
          beverage.origin,
          beverage.description,
          beverage.category,
          beverage.nativeName || '',
          ...beverage.tastingNotes,
          ...beverage.healthBenefits.map(b => b.title),
          ...beverage.contraindications,
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(queryLower)) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'caffeine-desc') {
      result.sort((a, b) => b.caffeineMgPerServing - a.caffeineMgPerServing);
    } else if (sortBy === 'caffeine-asc') {
      result.sort((a, b) => a.caffeineMgPerServing - b.caffeineMgPerServing);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, favorites]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedCategory, sortBy]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    if (!loadMoreRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount(prev => Math.min(prev + 24, filteredAndSortedItems.length));
      }
    }, { rootMargin: '100px' });
    
    observer.observe(loadMoreRef.current);
    
    return () => observer.disconnect();
  }, [filteredAndSortedItems.length]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, [setSearchQuery]);

  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header Title & Search Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Curated World Index
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1C1510] mt-0.5">
              Global Beverage Catalog
            </h2>
          </div>

          <div className="flex-1 min-w-[280px] max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <span className="text-xs text-[#8C8074]">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Search 100+ beverages by name, origin, taste, or benefit..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#E8DFD3] bg-[#FAF6F0] text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#C86D43] focus:border-transparent text-xs lg:text-sm"
            />
          </div>
        </div>

        {/* Category Filter Pills & Sort Dropdown Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFD3] pb-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#191410] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C8074]" />
            <span className="text-xs text-[#8C8074] font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#1C1510] focus:outline-none focus:border-[#C86D43]"
            >
              <option value="recommended">Curated Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="caffeine-desc">Caffeine: High to Low</option>
              <option value="caffeine-asc">Caffeine: Low to High</option>
            </select>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-[#8C8074] flex-wrap gap-2">
          <span>
            Showing <strong className="text-[#1C1510]">{filteredAndSortedItems.length}</strong> of{' '}
            <strong className="text-[#C86D43]">{BEVERAGES_DATA.length}</strong> beverages
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-[#C86D43] hover:underline font-semibold flex items-center gap-1"
            >
              Reset Filters ✕
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredAndSortedItems.length === 0 && (
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF6F0] mx-auto flex items-center justify-center text-xl">
              🍵
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1C1510]">
              {selectedCategory === 'favorites' ? 'No Saved Favorites Yet' : 'No matching beverages found'}
            </h3>
            <p className="text-xs text-[#5C5248] max-w-sm mx-auto">
              {selectedCategory === 'favorites'
                ? 'Click the heart icon on any beverage card to save it to your personal favorites collection.'
                : 'Try adjusting your search query or switching category filters.'}
            </p>
          </div>
        )}

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredAndSortedItems.slice(0, visibleCount).map((beverage) => {
            const isFav = favorites.includes(beverage.id);

            return (
              <div key={beverage.id} className="group">
                <div 
                  onClick={() => onSelectBeverage(beverage)}
                  className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300 card-hover cursor-pointer flex flex-col justify-between h-full relative"
                >
                  <div>
                    {/* Image Header with Badges & Favorite Button */}
                    <div className="relative mb-3 aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF6F0]">
                      <img 
                        src={beverage.imageUrl} 
                        alt={beverage.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Caffeine Badge */}
                      <div className="absolute top-2.5 left-2.5 bg-[#191410]/90 backdrop-blur-md text-[10px] font-semibold text-white px-2.5 py-1 rounded-full shadow-sm">
                        {beverage.caffeineMgPerServing === 0 ? '🌿 Decaf' : `☕ ${beverage.caffeineMgPerServing}mg`}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(beverage.id, e)}
                        className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                          isFav ? 'bg-[#8B3A4C] text-white' : 'bg-[#191410]/60 text-white hover:bg-[#191410]'
                        }`}
                        title={isFav ? 'Remove from saved' : 'Save to favorites'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#8C8074]">
                        <span className="font-mono truncate max-w-[140px]">{beverage.origin}</span>
                        <span className="font-semibold px-2 py-0.5 rounded bg-[#FAF6F0] text-[#5C5248]">
                          {beverage.acidityLevel} Acid
                        </span>
                      </div>

                      <h3 className="text-base font-serif font-bold text-[#1C1510] group-hover:text-[#C86D43] transition-colors leading-snug line-clamp-1">
                        {beverage.name}
                      </h3>

                      <p className="text-xs text-[#5C5248] line-clamp-2 leading-relaxed">
                        {beverage.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Tasting Notes Footer */}
                  <div className="pt-3 mt-3 border-t border-[#E8DFD3]/60 flex flex-wrap gap-1">
                    {beverage.tastingNotes.slice(0, 3).map((note, i) => (
                      <span key={i} className="text-[10px] bg-[#FAF6F0] text-[#5C5248] px-2 py-0.5 rounded border border-[#E8DFD3]">
                        {note}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}

          {/* Load More Button */}
          {visibleCount < filteredAndSortedItems.length && (
            <div ref={loadMoreRef} className="col-span-full flex items-center justify-center py-6">
              <button
                onClick={() => setVisibleCount(prev => Math.min(prev + 24, filteredAndSortedItems.length))}
                className="bg-[#FAF6F0] hover:bg-[#F0EBE6] text-[#1C1510] border border-[#E8DFD3] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                Show More ({filteredAndSortedItems.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};