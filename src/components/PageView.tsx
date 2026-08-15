import React from 'react';
import { getBeverageMasterBySlug } from '../data/beveragesMaster';
import { parseMarkdownToHTML } from '../utils/markdownParser';
import { ArrowLeft, ExternalLink, Sparkles, Heart, ShieldAlert, Thermometer, Scale, Clock, Award, CheckCircle2, Zap } from 'lucide-react';
import { FEATURED_AFFILIATE_PRODUCTS } from '../data/affiliateProducts';

interface PageViewProps {
  slug: string;
  onBack: () => void;
  onSelectPage: (slug: string) => void;
}

export const PageView: React.FC<PageViewProps> = ({ slug, onBack, onSelectPage }) => {
  const page = getBeverageMasterBySlug(slug);

  if (!page) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#1C1510]">Guide Not Found</h2>
        <button onClick={onBack} className="bg-[#191410] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          ← Return to Directory
        </button>
      </div>
    );
  }

  const parsedHTML = parseMarkdownToHTML(page.fullMarkdownContent || page.description);

  // Find relevant product for this page
  const matchingProduct = FEATURED_AFFILIATE_PRODUCTS.find(p => 
    p.category === (page.category === 'coffee' ? 'espresso_machines' : page.category === 'green_tea' ? 'tea_ware' : 'drippers_kettles')
  ) || FEATURED_AFFILIATE_PRODUCTS[0];

  return (
    <article className="py-10 bg-[#FAF7F2] animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
          <button
            onClick={onBack}
            className="text-xs font-bold text-[#5C5248] hover:text-[#C86D43] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to 100+ Directory Index</span>
          </button>
          <span className="text-[11px] font-mono text-[#2D5A46] font-semibold">
            ✓ Verified Editorial Guide
          </span>
        </div>

        {/* Article Header Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C86D43] text-white uppercase tracking-wider">
              {page.categoryLabel || page.category}
            </span>
            {page.origin && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFFFFF] text-[#5C5248] border border-[#E8DFD3]">
                📍 {page.origin}
              </span>
            )}
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E8F2EC] text-[#2D5A46] border border-[#2D5A46]/30">
              ⚡ {page.caffeineMgPerServing}mg Caffeine
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF8EB] text-[#B88230] border border-[#F3E0B5]">
              🍋 {page.acidityLevel} Acidity
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1510] leading-tight">
            {page.name}
          </h1>

          <p className="text-base text-[#C86D43] font-serif italic">
            "{page.tagline}"
          </p>
        </div>

        {/* Featured Banner Image */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD3] relative">
          <img src={page.imageUrl} alt={page.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 bg-[#191410]/85 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white flex flex-wrap items-center justify-between gap-2 text-xs">
            <span><strong>Serving Size:</strong> {page.servingSize}</span>
            <span><strong>Extraction Method:</strong> {page.brewingParams.recommendedMethod}</span>
          </div>
        </div>

        {/* Quick Parameters & Extraction Box */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm text-center">
          
          <div className="p-3 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3]">
            <Zap className="w-5 h-5 text-[#C86D43] mx-auto mb-1" />
            <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Caffeine</span>
            <span className="text-base font-mono font-bold text-[#1C1510]">{page.caffeineMgPerServing} mg</span>
          </div>

          <div className="p-3 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3]">
            <Thermometer className="w-5 h-5 text-[#2D5A46] mx-auto mb-1" />
            <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Water Temp</span>
            <span className="text-base font-mono font-bold text-[#1C1510]">{page.brewingParams.waterTempC}°C</span>
          </div>

          <div className="p-3 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3]">
            <Scale className="w-5 h-5 text-[#D4A359] mx-auto mb-1" />
            <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Brew Ratio</span>
            <span className="text-base font-mono font-bold text-[#1C1510]">{page.brewingParams.ratioGramsPerLiter}</span>
          </div>

          <div className="p-3 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3]">
            <Clock className="w-5 h-5 text-[#8B3A4C] mx-auto mb-1" />
            <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Brew Time</span>
            <span className="text-base font-mono font-bold text-[#1C1510]">{page.brewingParams.steepTimeMinutes}</span>
          </div>

        </div>

        {/* Main Markdown Encyclopedic Content */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
          <div 
            className="prose prose-stone max-w-none text-xs sm:text-sm text-[#5C5248] leading-relaxed space-y-4 font-sans"
            dangerouslySetInnerHTML={{ __html: parsedHTML }} 
          />
        </div>

        {/* Recommended Equipment & Roasts Box */}
        {matchingProduct && (
          <div className="bg-[#191410] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-[#3D3228]">
            <div className="flex items-center justify-between border-b border-[#3D3228] pb-3">
              <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Recommended Barista Equipment & Beans
              </span>
              <span className="text-[10px] bg-[#C86D43] text-white px-2.5 py-0.5 rounded-full font-bold">
                {matchingProduct.badge || 'Barista Pick'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={matchingProduct.imageUrl} alt={matchingProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="sm:col-span-8 space-y-2">
                <h3 className="text-xl font-serif font-bold text-white">{matchingProduct.name}</h3>
                <p className="text-xs text-[#E8DFD3]">{matchingProduct.description}</p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xl font-mono font-bold text-[#D4A359]">{matchingProduct.price}</span>
                  <a
                    href={matchingProduct.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                  >
                    <span>Check Retailer Price</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Pages */}
        {page.relatedSlugs && page.relatedSlugs.length > 0 && (
          <div className="bg-[#FAF6F0] border border-[#E8DFD3] rounded-3xl p-6 space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1C1510]">Explore Related Terroirs & Science</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.relatedSlugs.map((relSlug) => {
                const relPage = getBeverageMasterBySlug(relSlug);
                if (!relPage) return null;
                return (
                  <button
                    key={relSlug}
                    onClick={() => onSelectPage(relSlug)}
                    className="p-4 bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl text-left hover:border-[#C86D43] transition-all space-y-1 group"
                  >
                    <span className="text-[10px] font-bold text-[#C86D43] uppercase tracking-wider block">
                      {relPage.categoryLabel || relPage.category}
                    </span>
                    <span className="text-xs font-serif font-bold text-[#1C1510] group-hover:text-[#C86D43] block line-clamp-1">
                      {relPage.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
