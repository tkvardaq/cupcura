import React from 'react';
import { ShopProduct } from '../data/affiliateProducts';
import { X, Star, ExternalLink, ShieldCheck, Check, ThumbsUp, ThumbsDown, Sliders, Wrench, Award } from 'lucide-react';
import { useAccessibleModal } from '../hooks/useAccessibleModal';

interface ProductDetailModalProps {
  product: ShopProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const isModalOpen = Boolean(product);
  const { modalRef } = useAccessibleModal(isModalOpen, onClose);

  if (!product) return null;

  // Rating scores out of 100 for bar chart visualization
  const ratings = [
    { label: 'Build Quality & Durability', score: 96 },
    { label: 'Extraction & Flavor Performance', score: 98 },
    { label: 'Thermal & Pressure Stability', score: 94 },
    { label: 'Ease of Cleaning & Maintenance', score: 90 },
    { label: 'Overall Value for Money', score: 92 },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#191410]/75 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={modalRef}
        className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl modal-animate relative my-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#191410] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#3D3228]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#C86D43] text-white uppercase tracking-wider">
              {product.vendor}
            </span>
            <h2 className="text-lg font-serif font-bold text-white truncate max-w-xs sm:max-w-md">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#251E18] text-[#8C8074] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] relative">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <div className="absolute top-3 right-3 bg-[#C86D43] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-[#D4A359] text-xs font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating} / 5.0 Rating</span>
                <span className="text-[#8C8074] font-normal">({product.reviewsCount} verified barista reviews)</span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-[#1C1510]">
                {product.name}
              </h1>

              <p className="text-xs text-[#5C5248] leading-relaxed">
                {product.description}
              </p>

              <div className="p-4 bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Current Price</span>
                  <span className="text-2xl font-serif font-bold text-[#1C1510]">{product.price}</span>
                </div>

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Buy on Retailer</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Barista Lab Rating Breakdown Bar Chart */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#E8DFD3] pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">Barista Evaluation</span>
                <h3 className="text-xl font-serif font-bold text-[#1C1510] mt-0.5">Feature Performance Radar & Scores</h3>
              </div>
              <Sliders className="w-5 h-5 text-[#C86D43]" />
            </div>

            <div className="space-y-4">
              {ratings.map((r, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[#1C1510]">
                    <span>{r.label}</span>
                    <span className="font-mono text-[#C86D43]">{r.score} / 100</span>
                  </div>
                  <div className="w-full bg-[#FAF6F0] h-3 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${r.score}%` }}
                      className="bg-gradient-to-r from-[#C86D43] to-[#2D5A46] h-full rounded-full transition-all duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="bg-[#191410] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#3D3228] pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#D4A359] uppercase tracking-widest block">Engineering Specs</span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">Technical Features & Specs</h3>
              </div>
              <Wrench className="w-5 h-5 text-[#D4A359]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="bg-[#251E18] p-3.5 rounded-xl border border-[#3D3228] flex items-center gap-2 text-xs text-white">
                  <Check className="w-4 h-4 text-[#2D5A46] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros vs Cons Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#E8F2EC] border border-[#2D5A46]/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#2D5A46] font-serif font-bold">
                <ThumbsUp className="w-5 h-5" />
                <span>Why Baristas Recommend It</span>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1510]">
                <li className="flex items-start gap-2">✓ <span>Exceptional consistency and build quality in its price class.</span></li>
                <li className="flex items-start gap-2">✓ <span>Minimal static retention and fast operation.</span></li>
                <li className="flex items-start gap-2">✓ <span>Backed by solid manufacturer warranty and replacement parts.</span></li>
              </ul>
            </div>

            <div className="bg-[#F7E9EC] border border-[#8B3A4C]/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#8B3A4C] font-serif font-bold">
                <ThumbsDown className="w-5 h-5" />
                <span>Consider Before Buying</span>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1510]">
                <li className="flex items-start gap-2">⚠ <span>Requires initial break-in period for optimal burr alignment.</span></li>
                <li className="flex items-start gap-2">⚠ <span>Higher price investment for entry-level enthusiasts.</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Buy CTA */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#1C1510] block">{product.name}</span>
              <span className="text-xs text-[#8C8074]">In Stock & Ready for Dispatch</span>
            </div>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#C86D43] hover:bg-[#B55C33] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Buy Product for {product.price}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};