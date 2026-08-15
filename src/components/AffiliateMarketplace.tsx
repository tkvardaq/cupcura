import React, { useState } from 'react';
import { FEATURED_AFFILIATE_PRODUCTS, ShopProduct } from '../data/affiliateProducts';
import { ShoppingBag, Star, ExternalLink, ShieldCheck, Check, SlidersHorizontal } from 'lucide-react';

interface AffiliateMarketplaceProps {
  onSelectProduct?: (product: ShopProduct) => void;
}

export const AffiliateMarketplace: React.FC<AffiliateMarketplaceProps> = ({ onSelectProduct }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment & Beans' },
    { id: 'grinders', label: 'Precision Burr Grinders' },
    { id: 'espresso_machines', label: 'Espresso Machines' },
    { id: 'drippers_kettles', label: 'Kettles & Pour-Over Drippers' },
    { id: 'tea_ware', label: 'Artisan Glass & Gaiwans' },
    { id: 'artisan_beans_leaves', label: 'Single-Origin Micro-Lots' },
  ];

  const filteredProducts = selectedCat === 'all'
    ? FEATURED_AFFILIATE_PRODUCTS
    : FEATURED_AFFILIATE_PRODUCTS.filter(p => p.category === selectedCat);

  return (
    <section id="marketplace" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Tested & Verified Barista Curation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Affiliate Equipment & Artisan Bean Shop
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Hand-selected pour-over drippers, precision flat burr grinders, prosumer espresso machines, and single-origin roasts.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCat === cat.id
                  ? 'bg-[#191410] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => onSelectProduct && onSelectProduct(product)}
              className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl overflow-hidden card-hover cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Product Image & Badge */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#191410]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.vendor}
                  </div>
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-[#C86D43] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4A359] text-xs font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-[#8C8074] font-normal">({product.reviewsCount} reviews)</span>
                    </div>
                    {product.originalPrice && (
                      <span className="text-xs text-[#8C8074] line-through font-mono">{product.originalPrice}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1C1510] leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#5C5248] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Tech Specs */}
                  <div className="pt-2 space-y-1.5 bg-[#FAF6F0] p-3 rounded-2xl border border-[#E8DFD3]">
                    <span className="text-[10px] font-bold text-[#1C1510] uppercase tracking-wider block">Key Specifications</span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      {product.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[#5C5248]">
                          <Check className="w-3.5 h-3.5 text-[#2D5A46] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Buy Button Footer */}
              <div className="p-6 pt-0 border-t border-[#E8DFD3]/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#8C8074] block uppercase font-bold">Offer Price</span>
                  <span className="text-xl font-serif font-bold text-[#1C1510]">{product.price}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectProduct) onSelectProduct(product);
                  }}
                  className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-transform active:scale-95"
                >
                  <span>View Details & Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-[#FAF6F0] border border-[#E8DFD3] rounded-2xl p-4 text-center text-xs text-[#8C8074] space-y-1">
          <div className="flex items-center justify-center gap-1 font-bold text-[#1C1510]">
            <ShieldCheck className="w-4 h-4 text-[#2D5A46]" />
            <span>Affiliate Disclosure</span>
          </div>
          <p>
            When you buy equipment or roasts through our links, we may earn an affiliate commission at no extra cost to you.
          </p>
        </div>

      </div>
    </section>
  );
};
