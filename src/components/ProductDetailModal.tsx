import React from 'react';
import { ShopProduct } from '../data/affiliateProducts';
import { X, Star, ExternalLink, ShieldCheck, Check, ThumbsUp, ThumbsDown, Sliders, Wrench, Award, Box } from 'lucide-react';
import { useAccessibleModal } from '../hooks/useAccessibleModal';

interface ProductDetailModalProps {
  product: ShopProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const isModalOpen = Boolean(product);
  const { modalRef } = useAccessibleModal(isModalOpen, onClose);

  if (!product) return null;

  // Simple-Speak Helpers based on Category
  const getSimpleCategoryInfo = (cat: string) => {
    switch (cat) {
      case 'grinders':
        return {
          typeLabel: '⚙️ Coffee Grinder',
          whatIsIt: 'A tool that chops coffee beans into tiny, even pieces so they brew perfectly sweet, not bitter.',
          howItWorks: [
            { step: '1. Fill 🫘', desc: 'Put whole coffee beans inside the top opening.' },
            { step: '2. Spin ⚙️', desc: 'Twist the manual handle or press the button to start chopping.' },
            { step: '3. Pour ☕', desc: 'Pour the fresh coffee powder into your brewer!' }
          ],
          prosText: 'Makes beans perfectly even. Built from solid metal that lasts for years.',
          boxItems: '1x Burr Grinder Body, 1x Metal Turn Handle, 1x Glass Powder Jar, 1x Cleaning Brush',
          priceLevel: '💰💰'
        };
      case 'espresso_machines':
        return {
          typeLabel: '☕ Espresso Machine',
          whatIsIt: 'A hot-water machine that squeezes hot water through coffee powder to make a strong, creamy cup of espresso.',
          howItWorks: [
            { step: '1. Fill & Pack 🫘', desc: 'Put coffee powder inside the metal cup handle and press it flat.' },
            { step: '2. Lock 🔒', desc: 'Insert and lock the metal handle tight into the machine.' },
            { step: '3. Press 🔘', desc: 'Push the start button to drip thick, hot espresso!' }
          ],
          prosText: 'Stays hot and steady. Makes beautiful creamy brown foam just like a real cafe.',
          boxItems: '1x Espresso Machine, 1x Portafilter Handle, 1x Single & Double Baskets, 1x Coffee Tamper tool',
          priceLevel: '💰💰💰'
        };
      case 'drippers_kettles':
        return {
          typeLabel: '🫗 Kettle & Pour-Over Dripper',
          whatIsIt: 'A boiling water kettle or a glass cone funnel that lets you pour hot water slowly and evenly over tea or coffee.',
          howItWorks: [
            { step: '1. Heat 💧', desc: 'Fill the kettle with water and place it on the heating base to boil.' },
            { step: '2. Prep 📄', desc: 'Put a paper filter in the cone cup and rinse it with hot water.' },
            { step: '3. Pour ⏳', desc: 'Pour hot water slowly in small circles over the coffee powder.' }
          ],
          prosText: 'Allows you to pour a very thin, steady stream of water without spilling.',
          boxItems: '1x Pouring Kettle or Glass Brewer, 1x Heating Base (for electric models), 1x User Recipe Manual',
          priceLevel: '💰'
        };
      case 'tea_ware':
        return {
          typeLabel: '🍵 Artisan Tea Pot & Accessories',
          whatIsIt: 'Clay or glass teapots, cups, and whisks made to steep loose tea leaves and expand their natural sweet aromas.',
          howItWorks: [
            { step: '1. Add 🌿', desc: 'Put a spoonful of loose tea leaves inside the pot or bowl.' },
            { step: '2. Steep 💧', desc: 'Pour hot water over the leaves and cover with the lid.' },
            { step: '3. Serve 🫗', desc: 'Pour the clean liquid through a strainer into small cups.' }
          ],
          prosText: 'Made of traditional clay or glass that keeps tea hot and never leaves a plastic taste.',
          boxItems: '1x Clay or Glass Brewing Vessel, 1x Matching Lid, 1x Stainless Strainer or Bamboo Whisk',
          priceLevel: '💰💰'
        };
      case 'artisan_beans_leaves':
        return {
          typeLabel: '🫘 Fresh Beans & Leaves',
          whatIsIt: 'Super high-quality coffee beans or tea leaves grown in rich soil, dried carefully, and sealed to taste fresh.',
          howItWorks: [
            { step: '1. Scoop 🥄', desc: 'Take 1 or 2 spoonfuls of fresh beans or loose tea leaves.' },
            { step: '2. Brew 💧', desc: 'Chop the beans and steep them in hot water.' },
            { step: '3. Sip 😋', desc: 'Drink slowly to taste natural hints of fruit, honey, or chocolate!' }
          ],
          prosText: 'Tastes clean, fresh, and sweet. Never tastes burnt or like ash.',
          boxItems: '1x Premium Foil Bag or Tin, Nitrogen-Sealed for absolute freshness',
          priceLevel: '💰'
        };
      default:
        return {
          typeLabel: '📦 Barista Product',
          whatIsIt: 'Verified equipment selected by experts to improve your daily brew quality.',
          howItWorks: [
            { step: '1. Prepare', desc: 'Set up your brewing tool with fresh water.' },
            { step: '2. Extract', desc: 'Follow the specific time and temperature instructions.' },
            { step: '3. Enjoy', desc: 'Sip and enjoy your fresh beverage!' }
          ],
          prosText: 'Proven performance and durably crafted materials.',
          boxItems: '1x Barista Product Accessory Set',
          priceLevel: '💰💰'
        };
    }
  };

  const simpleInfo = getSimpleCategoryInfo(product.category);

  // Simple Rating Axes
  const ratings = [
    { 
      label: 'How tough is it? (Durability)', 
      score: product.rating >= 4.9 ? 96 : 90, 
      desc: 'Made of premium materials like metal or glass. Built to survive accidental drops.' 
    },
    { 
      label: 'How tasty does it make drinks? (Flavor)', 
      score: product.rating >= 4.9 ? 98 : 92, 
      desc: 'Helps brew evenly so your coffee or tea tastes sweet, fruit-forward, and never bitter.' 
    },
    { 
      label: 'Does it stay hot & steady? (Stability)', 
      score: product.rating >= 4.9 ? 94 : 88, 
      desc: 'Retains heat during extraction so water doesn\'t cool down mid-brew.' 
    },
    { 
      label: 'Is it easy to wash? (Cleaning)', 
      score: product.rating >= 4.95 ? 95 : product.category === 'espresso_machines' ? 82 : 90, 
      desc: 'No complicated pipes. Just rinse under warm tap water and wipe dry.' 
    },
    { 
      label: 'Is it worth the money? (Value)', 
      score: product.rating >= 4.9 ? 93 : 90, 
      desc: 'Professional-grade results at home. Pays for itself by saving on daily cafe cups.' 
    },
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
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#C86D43] text-white uppercase tracking-wider">
              {product.vendor}
            </span>
            <h2 className="text-sm sm:text-base font-serif font-bold text-white truncate max-w-xs sm:max-w-md">
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] relative shrink-0">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <div className="absolute top-3 right-3 bg-[#C86D43] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E8F2EC] text-[#2D5A46] border border-[#2D5A46]/20">
                  {simpleInfo.typeLabel}
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FAF6F0] text-[#1C1510] border border-[#E8DFD3]">
                  Cost: <span className="font-mono">{simpleInfo.priceLevel}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1510] leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 text-[#D4A359] text-xs font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating} / 5.0 Rating</span>
                <span className="text-[#8C8074] font-normal">({product.reviewsCount} verified reviews)</span>
              </div>

              <p className="text-xs sm:text-sm text-[#5C5248] leading-relaxed">
                {product.description}
              </p>

              <div className="p-4 bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Buy Price</span>
                  <span className="text-2xl font-serif font-bold text-[#1C1510]">{product.price}</span>
                </div>

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C86D43] hover:bg-[#B55C33] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <span>Buy on Retailer</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 1. At A Glance / Super Simple Summary */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-[#1C1510] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C86D43]" />
              <span>At A Glance (Super Simple Summary)</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3] space-y-2">
                <span className="text-xs font-bold text-[#C86D43] block">💡 What is this?</span>
                <p className="text-xs text-[#5C5248] leading-relaxed">
                  {simpleInfo.whatIsIt}
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3] space-y-2">
                <span className="text-xs font-bold text-[#2D5A46] block">👍 The Best Part</span>
                <p className="text-xs text-[#5C5248] leading-relaxed">
                  {simpleInfo.prosText}
                </p>
              </div>
            </div>
          </div>

          {/* 2. How to Use in 3 Easy Steps */}
          <div className="bg-[#191410] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] font-bold text-[#D4A359] uppercase tracking-wider block">Super Simple Guide</span>
              <h3 className="text-xl font-serif font-bold text-white mt-0.5">How to Use It (3 Easy Steps)</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {simpleInfo.howItWorks.map((step, idx) => (
                <div key={idx} className="bg-[#251E18] p-5 rounded-2xl border border-[#3D3228] space-y-2 relative">
                  <div className="text-xs font-bold text-[#D4A359]">
                    {step.step}
                  </div>
                  <p className="text-xs text-[#E8DFD3] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Barista Evaluation progress bars */}
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="border-b border-[#E8DFD3] pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">Detailed Scores</span>
                <h3 className="text-xl font-serif font-bold text-[#1C1510] mt-0.5">How It Performs</h3>
              </div>
              <Sliders className="w-5 h-5 text-[#C86D43]" />
            </div>

            <div className="space-y-6">
              {ratings.map((r, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-[#1C1510] gap-1">
                    <span>{r.label}</span>
                    <span className="font-mono text-[#C86D43]">{r.score} / 100</span>
                  </div>
                  <div className="w-full bg-[#FAF6F0] h-3.5 rounded-full overflow-hidden flex border border-[#E8DFD3]">
                    <div
                      style={{ width: `${r.score}%` }}
                      className="bg-gradient-to-r from-[#C86D43] to-[#2D5A46] h-full rounded-full transition-all duration-700"
                    />
                  </div>
                  <p className="text-[11px] text-[#8C8074] leading-normal pl-1">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. In The Box & Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-[#FAF6F0] border border-[#E8DFD3] rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#C86D43] font-serif font-bold">
                <Box className="w-5 h-5" />
                <span>What is In the Box?</span>
              </div>
              <p className="text-xs text-[#5C5248] leading-relaxed">
                {simpleInfo.boxItems}
              </p>
            </div>

            <div className="md:col-span-7 bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#2D5A46] font-serif font-bold">
                <Wrench className="w-5 h-5" />
                <span>Key Technical Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C5248]">
                {product.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2D5A46] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Pros vs Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#E8F2EC] border border-[#2D5A46]/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#2D5A46] font-serif font-bold">
                <ThumbsUp className="w-5 h-5" />
                <span>Why Baristas Recommend It</span>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1510]">
                <li className="flex items-start gap-2">✓ <span>Extremely reliable and constructed with premium components.</span></li>
                <li className="flex items-start gap-2">✓ <span>Very minimal flavor retention and super fast workflow.</span></li>
                <li className="flex items-start gap-2">✓ <span>Comes with official manufacturer warranty and replacement parts.</span></li>
              </ul>
            </div>

            <div className="bg-[#F7E9EC] border border-[#8B3A4C]/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#8B3A4C] font-serif font-bold">
                <ThumbsDown className="w-5 h-5" />
                <span>Things to Keep in Mind</span>
              </div>
              <ul className="space-y-2 text-xs text-[#1C1510]">
                <li className="flex items-start gap-2">⚠ <span>May require a short break-in period for optimal burr/seal performance.</span></li>
                <li className="flex items-start gap-2">⚠ <span>A premium price investment for beginner brewers.</span></li>
              </ul>
            </div>
          </div>

          {/* FTC & Affiliate Info */}
          <div className="bg-[#FAF6F0] border border-[#E8DFD3] rounded-2xl p-4 text-center text-xs text-[#8C8074] space-y-1">
            <div className="flex items-center justify-center gap-1 font-bold text-[#1C1510]">
              <ShieldCheck className="w-4 h-4 text-[#2D5A46]" />
              <span>Affiliate Verification</span>
            </div>
            <p>
              We earn a small commission from the retailer if you buy using our links, with absolutely zero extra cost to you. Thank you for supporting our lab!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};