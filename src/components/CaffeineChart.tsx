import React, { useState } from 'react';
import { BEVERAGES_MASTER, MasterItem } from '../data/beveragesMaster';
import { Beverage } from '../data/beverages';
import { Zap, Info, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

interface CaffeineChartProps {
  onSelectBeverage?: (beverage: Beverage) => void;
}

export const CaffeineChart: React.FC<CaffeineChartProps> = ({ onSelectBeverage }) => {
  const [filterCat, setFilterCat] = useState<string>('all');

  const sortedBeverages = [...BEVERAGES_MASTER]
    .filter((b) => filterCat === 'all' || b.category === filterCat)
    .sort((a, b) => b.caffeineMgPerServing - a.caffeineMgPerServing);

  const maxCaffeine = 210;

  return (
    <section className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Quantitative Science Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Global Caffeine Milligram Bar Matrix
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Visual comparison of caffeine density per serving across all global coffee, tea, and botanical infusions. Click any bar to view deep recipe.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'All Beverages' },
              { id: 'coffee', label: 'Coffee' },
              { id: 'green_tea', label: 'Green Tea' },
              { id: 'black_tea', label: 'Black Tea' },
              { id: 'herbal_botanical', label: 'Herbal (0mg)' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setFilterCat(c.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filterCat === c.id
                    ? 'bg-[#191410] text-white shadow-sm'
                    : 'bg-[#FFFFFF] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Bar Chart Container */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#8C8074] font-semibold border-b border-[#E8DFD3] pb-3">
            <span>Beverage Variety & Serving Size (Click to Inspect)</span>
            <span>Caffeine (mg / serving)</span>
          </div>

          <div className="space-y-4 pt-2">
            {sortedBeverages.map((bev) => {
              const percentage = (bev.caffeineMgPerServing / maxCaffeine) * 100;
              const isZero = bev.caffeineMgPerServing === 0;
              const isHigh = bev.caffeineMgPerServing > 100;

              return (
                <div 
                  key={bev.id} 
                  onClick={() => onSelectBeverage && onSelectBeverage(bev)}
                  className="space-y-1 group cursor-pointer p-2 rounded-xl hover:bg-[#FAF6F0] transition-colors"
                >
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-[#1C1510] group-hover:text-[#C86D43] transition-colors">
                        {bev.name}
                      </span>
                      <span className="text-[10px] text-[#8C8074] hidden sm:inline">({bev.servingSize})</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8C8074] group-hover:text-[#C86D43] opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <span className={`font-mono font-bold ${
                      isZero ? 'text-[#2D5A46]' : isHigh ? 'text-[#8B3A4C]' : 'text-[#C86D43]'
                    }`}>
                      {isZero ? '0 mg (Free)' : `${bev.caffeineMgPerServing} mg`}
                    </span>
                  </div>

                  <div className="w-full bg-[#FAF6F0] h-3.5 rounded-full overflow-hidden flex relative">
                    <div
                      style={{ width: `${Math.max(percentage, 2)}%` }}
                      className={`h-full transition-all duration-700 rounded-full ${
                        isZero
                          ? 'bg-[#2D5A46]'
                          : isHigh
                          ? 'bg-gradient-to-r from-[#C86D43] to-[#8B3A4C]'
                          : 'bg-[#C86D43]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between text-[11px] text-[#8C8074]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2D5A46]" /> Zero Caffeine</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#C86D43]" /> Mild-Moderate (15-90mg)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#8B3A4C]" /> High Octane (100mg+)</span>
            </div>
            <span>FDA Recommended Daily Cap: 400 mg/day</span>
          </div>

        </div>

      </div>
    </section>
  );
};
