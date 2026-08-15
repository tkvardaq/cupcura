import React, { useState, useEffect } from 'react';
import { Coffee, Search, Compass, SlidersHorizontal, ShoppingBag, Sparkles, Clock, Heart, Menu, X, Layers } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenQuiz
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Read URL search parameter on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryFromUrl = urlParams.get('q');
    if (queryFromUrl && queryFromUrl !== searchQuery) {
      setSearchQuery(queryFromUrl);
    }
  }, []);

  // Update URL search parameter when search query changes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (searchQuery.trim()) {
      urlParams.set('q', searchQuery.trim());
    } else {
      urlParams.delete('q');
    }
    const queryString = urlParams.toString();
    const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  }, [searchQuery]);

  const navItems = [
    { id: 'catalog', label: 'Beverage Catalog', icon: Compass },
    { id: 'sitemap', label: 'All 100+ Guides', icon: Layers },
    { id: 'comparison', label: 'Flavor Matrix', icon: SlidersHorizontal },
    { id: 'assistant', label: 'Brew Timer', icon: Clock },
    { id: 'health', label: 'Health & Science', icon: Heart },
    { id: 'marketplace', label: 'Gear Shop', icon: ShoppingBag },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('catalog')}
          >
            <div className="w-10 h-10 rounded-full bg-[#191410] flex items-center justify-center text-[#FAF7F2] group-hover:scale-105 transition-transform shadow-md">
              <Coffee className="w-5 h-5 text-[#C86D43]" />
            </div>
            <div>
              <span className="text-2xl font-serif font-bold tracking-tight text-[#1C1510] leading-none block">
                Cup<span className="text-[#C86D43]">Cura</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8074] font-semibold block mt-0.5">
                Coffee & Tea Curation
              </span>
            </div>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8074]" />
              <input
                type="text"
                placeholder="Search coffee, tea, caffeine, or health topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#E8DFD3] rounded-full pl-10 pr-8 py-2 text-xs text-[#1C1510] placeholder-[#8C8074] focus:outline-none focus:border-[#C86D43] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8074] hover:text-[#1C1510]"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#191410] text-[#FAF7F2] shadow-sm'
                      : 'text-[#5C5248] hover:text-[#1C1510] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C86D43]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brew Finder</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#1C1510] hover:bg-[#FAF6F0]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-4 pt-3 pb-6 space-y-4 animate-fadeIn">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8074]" />
            <input
              type="text"
              placeholder="Search beverages, health notes, gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF6F0] border border-[#E8DFD3] rounded-full pl-10 pr-4 py-2.5 text-xs text-[#1C1510]"
            />
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#191410] text-[#FAF7F2]'
                      : 'text-[#5C5248] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#C86D43]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};