import React from 'react';
import { Sparkles, Compass, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BEVERAGES_MASTER } from '../data/beveragesMaster';
import { Beverage } from '../data/beverages';

interface HeroProps {
  onOpenQuiz: () => void;
  onExploreClick: () => void;
  onSelectBeverage?: (beverage: Beverage) => void;
  totalBrews: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onExploreClick, onSelectBeverage, totalBrews }) => {
  const featuredItem = BEVERAGES_MASTER[0];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-10 pb-14 md:pt-14 md:pb-20 border-b border-[#E8DFD3]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1510] leading-[1.15] tracking-tight">
              Curation for the <br />
              <span className="italic font-normal text-[#C86D43]">Connoisseur’s</span> Cup.
            </h1>

            <p className="text-base sm:text-lg text-[#5C5248] max-w-xl font-normal leading-relaxed">
              Explore single-origin coffees, ceremonial teas, and rare botanicals. 
              Discover taste profile radar maps, health science, stomach acidity notes, 
              and equipment reviews.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto bg-[#C86D43] hover:bg-[#B55C33] text-white px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Find Your Ideal Brew</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#1C1510] border border-[#D5C7B4] px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#C86D43]" />
                <span>Explore All 100+ Guides</span>
              </button>
            </div>

            {/* Stat Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E8DFD3]/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-serif font-bold text-[#1C1510]">100+</span>
                <span className="text-xs text-[#8C8074]">Curated Guides</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2D5A46]">100%</span>
                <span className="text-xs text-[#8C8074]">Science Backed</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#C86D43]">0-205mg</span>
                <span className="text-xs text-[#8C8074]">Caffeine Range</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card (Clickable) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div 
                onClick={() => onSelectBeverage && onSelectBeverage(featuredItem)}
                className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-5 shadow-xl card-hover cursor-pointer group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-4">
                  <img 
                    src={featuredItem.imageUrl}
                    alt={featuredItem.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#191410]/90 backdrop-blur-md text-[#FAF7F2] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured Origin
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#8C8074]">
                    <span>Single Origin Espresso</span>
                    <span className="font-mono text-[#C86D43] font-bold">64mg Caffeine</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1C1510] group-hover:text-[#C86D43] transition-colors flex items-center justify-between">
                    <span>{featuredItem.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C8074] group-hover:text-[#C86D43] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-[#5C5248]">
                    Jasmine florals, bergamot citrus acidity, and antioxidant polyphenols.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-[#E8DFD3] flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FAF6F0] text-[11px] text-[#5C5248]">🌸 Jasmine</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FAF6F0] text-[11px] text-[#5C5248]">🍋 Bergamot</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FAF6F0] text-[11px] text-[#5C5248]">🫐 Blueberry</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
