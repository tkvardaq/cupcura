import React, { useState } from 'react';
import { Beverage, BEVERAGES_DATA } from '../data/beverages';
import { Heart, ShieldAlert, CheckCircle2, AlertTriangle, Sparkles, Brain, Moon, Utensils, Zap, Smile } from 'lucide-react';

export const HealthMatrix: React.FC = () => {
  const [activeHealthGoal, setActiveHealthGoal] = useState<string>('gerd');

  const healthGoals = [
    { id: 'gerd', label: '🍋 Low Acid / GERD Safe', icon: Smile, desc: 'Brews that prevent stomach acid spikes & reflux' },
    { id: 'focus', label: '🧠 Calm Focus & Clarity', icon: Brain, desc: 'L-theanine synergy for zero-jitter alertness' },
    { id: 'sleep', label: '🌙 Evening Rest (Zero Caffeine)', icon: Moon, desc: 'Apigenin & herbal relaxants for sleep architecture' },
    { id: 'digestive', label: '🌱 Gut Health & Lipid Balance', icon: Utensils, desc: 'Microbial fermented teas for lipid breakdown' },
    { id: 'antioxidants', label: '✨ High Antioxidant Density', icon: Sparkles, desc: 'Concentrated EGCG polyphenols & chlorogenic acid' },
    { id: 'energy', label: '⚡ Athletic Stamina', icon: Zap, desc: 'Higher caffeine & xanthines for physical output' }
  ];

  // Recommendations logic
  const getRecommendedBeverages = () => {
    switch (activeHealthGoal) {
      case 'gerd':
        return BEVERAGES_DATA.filter((b) => b.acidityLevel === 'Low');
      case 'focus':
        return BEVERAGES_DATA.filter((b) => b.category === 'green_tea' || b.id.includes('matcha'));
      case 'sleep':
        return BEVERAGES_DATA.filter((b) => b.caffeineMgPerServing === 0);
      case 'digestive':
        return BEVERAGES_DATA.filter((b) => b.category === 'fermented_specialty' || b.id.includes('turmeric') || b.id.includes('rooibos'));
      case 'antioxidants':
        return BEVERAGES_DATA.filter((b) => b.flavorProfile.aroma > 85 || b.category === 'green_tea' || b.id.includes('espresso'));
      case 'energy':
        return BEVERAGES_DATA.filter((b) => b.caffeineMgPerServing >= 80);
      default:
        return BEVERAGES_DATA;
    }
  };

  const getRestrictedBeverages = () => {
    switch (activeHealthGoal) {
      case 'gerd':
        return BEVERAGES_DATA.filter((b) => b.acidityLevel === 'High');
      case 'sleep':
        return BEVERAGES_DATA.filter((b) => b.caffeineMgPerServing > 40);
      case 'focus':
        return BEVERAGES_DATA.filter((b) => b.caffeineMgPerServing > 150);
      default:
        return [];
    }
  };

  const recommended = getRecommendedBeverages();
  const restricted = getRestrictedBeverages();

  return (
    <section id="health" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#2D5A46] uppercase tracking-widest block">
              Science & Physiology Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Health Benefits & Safety Caution Matrix
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Select your health goal or medical sensitivity to see recommended vs caution beverages.
            </p>
          </div>
        </div>

        {/* Health Goal Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {healthGoals.map((goal) => {
            const Icon = goal.icon;
            const isActive = activeHealthGoal === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setActiveHealthGoal(goal.id)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#191410] text-white border-[#191410] shadow-md'
                    : 'bg-[#FFFFFF] text-[#1C1510] border-[#E8DFD3] hover:border-[#C86D43]/50'
                }`}
              >
                <Icon className={`w-6 h-6 mb-2 ${isActive ? 'text-[#C86D43]' : 'text-[#2D5A46]'}`} />
                <div>
                  <span className="text-xs font-serif font-bold block">{goal.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Goal Description */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-4 flex items-center gap-3 text-xs text-[#5C5248]">
          <Heart className="w-5 h-5 text-[#2D5A46] shrink-0" />
          <span>
            Showing physiological matrix for: <strong className="text-[#1C1510]">{healthGoals.find(g => g.id === activeHealthGoal)?.label}</strong> — {healthGoals.find(g => g.id === activeHealthGoal)?.desc}.
          </span>
        </div>

        {/* Two-Column Recommended vs Caution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recommended Column */}
          <div className="lg:col-span-7 bg-[#E8F2EC] border border-[#2D5A46]/30 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#2D5A46] border-b border-[#2D5A46]/20 pb-3">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="text-lg font-serif font-bold text-[#191410]">
                Highly Recommended ({recommended.length} Varieties)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommended.map((bev) => (
                <div key={bev.id} className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#2D5A46]/20 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1C1510]">{bev.name}</span>
                    <span className="text-[10px] font-semibold text-[#2D5A46] px-2 py-0.5 rounded bg-[#E8F2EC]">
                      {bev.caffeineMgPerServing}mg Caf
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C5248] line-clamp-2">{bev.healthBenefits[0]?.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Caution / Limit Column */}
          <div className="lg:col-span-5 bg-[#F7E9EC] border border-[#8B3A4C]/30 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#8B3A4C] border-b border-[#8B3A4C]/20 pb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg font-serif font-bold text-[#191410]">
                Use Caution / Limit ({restricted.length})
              </h3>
            </div>

            {restricted.length === 0 ? (
              <div className="bg-[#FFFFFF] p-6 rounded-2xl text-center text-xs text-[#5C5248]">
                No major restrictions for this health goal. All global varieties are generally suitable in moderation!
              </div>
            ) : (
              <div className="space-y-3">
                {restricted.map((bev) => (
                  <div key={bev.id} className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#8B3A4C]/20 space-y-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1510]">{bev.name}</span>
                      <span className="text-[10px] font-semibold text-[#8B3A4C] px-2 py-0.5 rounded bg-[#F7E9EC]">
                        Acidity: {bev.acidityLevel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8B3A4C]">{bev.contraindications[0] || 'Limit high caffeine intake.'}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
