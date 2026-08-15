import React, { useState } from 'react';
import { Coffee, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { BEVERAGES_MASTER } from '../data/beveragesMaster';
import { Beverage } from '../data/beverages';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectBeverage: (bev: Beverage) => void;
  onSelectPageSlug: (slug: string) => void;
  onOpenLegal: (type: 'ftc' | 'privacy' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onSelectBeverage,
  onSelectPageSlug,
  onOpenLegal
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handlePopularClick = (id: string) => {
    const item = BEVERAGES_MASTER.find(b => b.id === id || b.slug.includes(id));
    if (item) {
      onSelectBeverage(item);
    }
  };

  return (
    <footer className="bg-[#191410] text-[#FAF7F2] border-t border-[#3D3228] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#3D3228] pb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C86D43] flex items-center justify-center text-white font-serif font-bold text-lg">
                ☕
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Cup<span className="text-[#C86D43]">Cura</span>
              </span>
            </div>
            <p className="text-xs text-[#E8DFD3] max-w-md leading-relaxed">
              The premier global encyclopedia for coffee, tea, and botanical infusions. 
              Built for organic search ranking, taste science, and barista curation.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#251E18] border border-[#3D3228] rounded-3xl p-6 space-y-3">
            <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider block">
              Subscribe to The Weekly Cupping Digest
            </span>
            <p className="text-xs text-[#8C8074]">
              Receive rare single-origin roast alerts, tea harvest guides, and equipment deals.
            </p>

            {subscribed ? (
              <div className="bg-[#2D5A46] text-white p-3 rounded-xl text-xs font-bold text-center">
                ✓ You are subscribed! Check your inbox for our 2026 Brewing Cheat Sheet.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#191410] border border-[#3D3228] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#8C8074] flex-1 focus:outline-none focus:border-[#C86D43]"
                />
                <button
                  type="submit"
                  className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Section 1: Navigation */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-white uppercase tracking-wider block text-sm">Navigation</span>
            <ul className="space-y-2 text-[#E8DFD3]">
              <li><button onClick={() => setActiveTab('catalog')} className="hover:text-[#C86D43]">Beverage Catalog</button></li>
              <li><button onClick={() => setActiveTab('sitemap')} className="hover:text-[#C86D43]">All 100+ Guides</button></li>
              <li><button onClick={() => setActiveTab('comparison')} className="hover:text-[#C86D43]">Flavor Radar Matrix</button></li>
              <li><button onClick={() => setActiveTab('assistant')} className="hover:text-[#C86D43]">Brew Assistant & Timer</button></li>
              <li><button onClick={() => setActiveTab('health')} className="hover:text-[#C86D43]">Health Science Guide</button></li>
              <li><button onClick={() => setActiveTab('marketplace')} className="hover:text-[#C86D43]">Affiliate Gear Shop</button></li>
            </ul>
          </div>

          {/* Section 2: Popular Varieties */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-white uppercase tracking-wider block text-sm">Popular Varieties</span>
            <ul className="space-y-2 text-[#E8DFD3]">
              <li><button onClick={() => handlePopularClick('ethiopian-espresso')} className="hover:text-[#C86D43] text-left">Ethiopian Espresso</button></li>
              <li><button onClick={() => handlePopularClick('uji-matcha')} className="hover:text-[#C86D43] text-left">Uji Ceremonial Matcha</button></li>
              <li><button onClick={() => handlePopularClick('yerba-mate')} className="hover:text-[#C86D43] text-left">Argentine Yerba Maté</button></li>
              <li><button onClick={() => handlePopularClick('nitro-cold-brew')} className="hover:text-[#C86D43] text-left">Nitro Cold Brew</button></li>
              <li><button onClick={() => handlePopularClick('sencha-green-tea')} className="hover:text-[#C86D43] text-left">Shizuoka Sencha</button></li>
            </ul>
          </div>

          {/* Section 3: SEO Guides */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-white uppercase tracking-wider block text-sm">100+ Directory Guides</span>
            <ul className="space-y-2 text-[#E8DFD3]">
              <li><button onClick={() => onSelectPageSlug('health-gerd-acid-reflux')} className="hover:text-[#C86D43] text-left">Low-Acid GERD Guide</button></li>
              <li><button onClick={() => onSelectPageSlug('health-ltheanine-focus')} className="hover:text-[#C86D43] text-left">L-Theanine Nootropic Science</button></li>
              <li><button onClick={() => onSelectPageSlug('equipment-burr-grinders')} className="hover:text-[#C86D43] text-left">Precision Burr Grinders</button></li>
              <li><button onClick={() => onSelectPageSlug('equipment-espresso-machines')} className="hover:text-[#C86D43] text-left">Prosumer Espresso Guide</button></li>
              <li><button onClick={() => onSelectPageSlug('origin-japan')} className="hover:text-[#C86D43] text-left">Japanese Tea Terroir</button></li>
            </ul>
          </div>

          {/* Section 4: Legal & Contact */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-white uppercase tracking-wider block text-sm">Affiliate & Legal</span>
            <ul className="space-y-2 text-[#E8DFD3]">
              <li><button onClick={() => onOpenLegal('ftc')} className="hover:text-[#C86D43] text-left">FTC Affiliate Disclosure</button></li>
              <li><button onClick={() => onOpenLegal('privacy')} className="hover:text-[#C86D43] text-left">Privacy Policy</button></li>
              <li><button onClick={() => onOpenLegal('terms')} className="hover:text-[#C86D43] text-left">Terms of Service</button></li>
              <li><button onClick={() => onOpenLegal('contact')} className="hover:text-[#C86D43] text-left">Editorial Board Contact</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3D3228] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8074]">
          <p>© {new Date().getFullYear()} CupCura. All rights reserved. Designed for optimal SEO & engagement.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A46]" /> 100% Independent Curation
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
