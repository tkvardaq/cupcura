import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

interface NativeAdProps {
  type?: 'horizontal' | 'sidebar' | 'card';
}

export const NativeAdBanner: React.FC<NativeAdProps> = ({ type = 'horizontal' }) => {
  if (type === 'sidebar') {
    return (
      <div className="bg-[#191410] text-[#FAF7F2] border border-[#3D3228] rounded-3xl p-6 space-y-4 shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#D4A359]">
          <span>Sponsored Partner</span>
          <span className="bg-[#3D3228] px-2 py-0.5 rounded text-[#8C8074]">Ad</span>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-serif font-bold text-white leading-snug">
            Trade Coffee Subscription: Fresh Roasts Delivered Weekly
          </h4>
          <p className="text-xs text-[#E8DFD3] line-clamp-3 leading-relaxed">
            Get matched with 450+ craft roasters nationwide. Freshly roasted within 24 hours of dispatch. Take 30% off your first bag.
          </p>
        </div>

        <a
          href="#sponsored-trade-coffee"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#C86D43] hover:bg-[#B55C33] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all block text-center"
        >
          <span>Claim 30% Off Offer</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF6F0] border border-[#D5C7B4] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Ad Tag */}
        <div className="absolute top-3 right-4 text-[9px] uppercase font-bold tracking-widest text-[#8C8074] bg-[#E8DFD3] px-2.5 py-0.5 rounded">
          Sponsored Recommendation
        </div>

        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#191410] flex items-center justify-center text-[#D4A359] shrink-0 font-serif font-bold text-2xl shadow-md">
            🍵
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1510]">
              Kyoto Artisan Reserve — First Harvest Uji Matcha Club
            </h3>
            <p className="text-xs text-[#5C5248] max-w-2xl leading-relaxed">
              Direct farm-to-door Japanese ceremonial tea subscription. Cold-chain shipped directly from Kyoto tea estates.
            </p>
          </div>
        </div>

        <a
          href="#sponsored-kyoto-club"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191410] hover:bg-[#C86D43] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-md transition-all"
        >
          <span>Explore Tasting Club</span>
          <ExternalLink className="w-4 h-4 text-[#D4A359]" />
        </a>

      </div>
    </div>
  );
};
