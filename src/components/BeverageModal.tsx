import React from 'react';
import { Beverage } from '../data/beverages';
import { FlavorRadarChart } from './FlavorRadarChart';
import { X, ShieldAlert, Heart, Thermometer, Scale, Clock, ExternalLink, Sparkles, ShoppingBag } from 'lucide-react';

interface BeverageModalProps {
  beverage: Beverage | null;
  onClose: () => void;
}

export const BeverageModal: React.FC<BeverageModalProps> = ({ beverage, onClose }) => {
  if (!beverage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#191410]/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl modal-animate relative my-auto">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#191410] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#3D3228]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#C86D43] text-white uppercase tracking-wider">
              {beverage.origin}
            </span>
            <h2 className="text-lg font-serif font-bold text-white truncate max-w-xs sm:max-w-md">
              {beverage.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#251E18] text-[#8C8074] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] relative">
              <img
                src={beverage.imageUrl}
                alt={beverage.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#191410]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {beverage.servingSize}
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              {beverage.nativeName && (
                <span className="text-xs font-bold text-[#8C8074] tracking-widest block uppercase">
                  Native: {beverage.nativeName}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510]">
                {beverage.name}
              </h1>

              <p className="text-sm text-[#C86D43] font-serif italic">
                "{beverage.tagline}"
              </p>

              <p className="text-xs text-[#5C5248] leading-relaxed">
                {beverage.description}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FFFFFF] border border-[#E8DFD3] p-3 rounded-xl">
                  <span className="text-[10px] text-[#8C8074] font-bold block uppercase">Caffeine / Serving</span>
                  <span className="text-base font-serif font-bold text-[#1C1510]">
                    {beverage.caffeineMgPerServing === 0 ? 'Zero (0mg)' : `${beverage.caffeineMgPerServing} mg`}
                  </span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E8DFD3] p-3 rounded-xl">
                  <span className="text-[10px] text-[#8C8074] font-bold block uppercase">Stomach Acidity</span>
                  <span className="text-base font-serif font-bold text-[#2D5A46]">
                    {beverage.acidityLevel} Acidity
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Flavor Profile Radar Chart */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#E8DFD3] pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1510]">Sensory Taste Profile</h3>
                <p className="text-xs text-[#5C5248]">Multi-axis radar map of flavor intensities (0-100 scale).</p>
              </div>
              <Sparkles className="w-5 h-5 text-[#C86D43]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 flex justify-center py-2">
                <FlavorRadarChart profile={beverage.flavorProfile} primaryName={beverage.name} size={300} />
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-bold text-[#1C1510] block">Predominant Tasting Notes:</span>
                <div className="grid grid-cols-2 gap-2">
                  {beverage.tastingNotes.map((note, i) => (
                    <div key={i} className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD3] text-xs font-semibold text-[#1C1510] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C86D43]" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3] space-y-1">
                  <span className="text-[11px] font-bold text-[#8C8074] uppercase block">Cultural Heritage & Terroir History</span>
                  <p className="text-xs text-[#5C5248] leading-relaxed">
                    {beverage.culturalHistory}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Benefits & Cautions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Health Benefits */}
            <div className="md:col-span-6 bg-[#E8F2EC] border border-[#2D5A46]/30 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#2D5A46]">
                <Heart className="w-5 h-5" />
                <h3 className="text-lg font-serif font-bold text-[#191410]">Physiological Health Benefits</h3>
              </div>

              <div className="space-y-3">
                {beverage.healthBenefits.map((benefit, i) => (
                  <div key={i} className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#2D5A46]/20 space-y-1 shadow-sm">
                    <span className="text-xs font-bold text-[#2D5A46] block">{benefit.title}</span>
                    <p className="text-xs text-[#1C1510]">{benefit.description}</p>
                    <p className="text-[11px] text-[#5C5248] italic pt-1 border-t border-[#E8DFD3]">
                      <span className="font-semibold text-[#2D5A46]">Science Rationale:</span> {benefit.scientificBasis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cautions */}
            <div className="md:col-span-6 bg-[#F7E9EC] border border-[#8B3A4C]/30 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#8B3A4C]">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-lg font-serif font-bold text-[#191410]">Who Should Avoid / Safety Caution</h3>
              </div>

              <div className="space-y-2">
                {beverage.contraindications.map((caution, i) => (
                  <div key={i} className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#8B3A4C]/20 flex items-start gap-2.5 text-xs text-[#1C1510]">
                    <span className="text-[#8B3A4C] font-bold mt-0.5">•</span>
                    <span>{caution}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Brewing Ratios */}
          <div className="bg-[#191410] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#3D3228] pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#D4A359] uppercase tracking-widest block">Barista Formula</span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">Optimal Brewing Parameters</h3>
              </div>
              <Clock className="w-6 h-6 text-[#C86D43]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#251E18] p-4 rounded-2xl border border-[#3D3228]">
                <div className="flex items-center gap-1.5 text-[#C86D43] text-xs font-semibold mb-1">
                  <Thermometer className="w-4 h-4" /> Temp
                </div>
                <span className="text-lg font-serif font-bold text-white block">{beverage.brewingParams.waterTempC}°C</span>
                <span className="text-[10px] text-[#8C8074]">({beverage.brewingParams.waterTempF}°F)</span>
              </div>

              <div className="bg-[#251E18] p-4 rounded-2xl border border-[#3D3228]">
                <div className="flex items-center gap-1.5 text-[#D4A359] text-xs font-semibold mb-1">
                  <Scale className="w-4 h-4" /> Ratio
                </div>
                <span className="text-xs font-bold text-white block">{beverage.brewingParams.ratioGramsPerLiter}</span>
              </div>

              <div className="bg-[#251E18] p-4 rounded-2xl border border-[#3D3228]">
                <div className="flex items-center gap-1.5 text-[#2D5A46] text-xs font-semibold mb-1">
                  <Clock className="w-4 h-4" /> Extraction
                </div>
                <span className="text-xs font-bold text-white block">{beverage.brewingParams.steepTimeMinutes}</span>
              </div>

              <div className="bg-[#251E18] p-4 rounded-2xl border border-[#3D3228]">
                <div className="flex items-center gap-1.5 text-[#C86D43] text-xs font-semibold mb-1">
                  <Sparkles className="w-4 h-4" /> Grind
                </div>
                <span className="text-xs font-bold text-white block">{beverage.brewingParams.grindSize}</span>
              </div>
            </div>

            <div className="bg-[#251E18] p-4 rounded-2xl border border-[#3D3228] text-xs text-[#8C8074]">
              Recommended Equipment: <strong className="text-white">{beverage.brewingParams.recommendedMethod}</strong>
            </div>
          </div>

          {/* Affiliate Gear Links */}
          {beverage.affiliateProducts.length > 0 && (
            <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">Affiliate Equipment & Beans</span>
                  <h3 className="text-xl font-serif font-bold text-[#1C1510] mt-0.5">Recommended Beans & Gear</h3>
                </div>
                <ShoppingBag className="w-6 h-6 text-[#C86D43]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beverage.affiliateProducts.map((prod) => (
                  <div key={prod.id} className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3] flex items-center gap-4 hover:border-[#C86D43] transition-all">
                    <img src={prod.image} alt={prod.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 space-y-1">
                      <h4 className="text-xs font-bold text-[#1C1510] line-clamp-1">{prod.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#2D5A46]">{prod.price}</span>
                        <a
                          href={prod.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#191410] hover:bg-[#C86D43] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                        >
                          <span>Buy</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
