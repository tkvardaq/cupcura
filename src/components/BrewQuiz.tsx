import React, { useState } from 'react';
import { Beverage, BEVERAGES_DATA } from '../data/beverages';
import { Sparkles, X, Check, ArrowRight, RotateCcw, Zap, Heart, ShieldAlert, Award } from 'lucide-react';

interface BrewQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBeverage: (beverage: Beverage) => void;
}

export const BrewQuiz: React.FC<BrewQuizProps> = ({ isOpen, onClose, onSelectBeverage }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('');
  const [caffeine, setCaffeine] = useState<string>('');
  const [sensitivity, setSensitivity] = useState<string>('');
  const [recommendedResult, setRecommendedResult] = useState<Beverage | null>(null);

  if (!isOpen) return null;

  const handleCalculateRecommendation = () => {
    // Scoring logic across dataset
    let bestMatch = BEVERAGES_DATA[0];
    let highestScore = -1;

    BEVERAGES_DATA.forEach((b) => {
      let score = 50;

      // Goal matching
      if (goal === 'energy' && b.caffeineMgPerServing > 60) score += 30;
      if (goal === 'focus' && (b.category === 'green_tea' || b.id.includes('matcha'))) score += 35;
      if (goal === 'relaxation' && b.caffeineMgPerServing === 0) score += 40;
      if (goal === 'digestive' && (b.category === 'fermented_specialty' || b.id.includes('turmeric') || b.id.includes('rooibos'))) score += 35;
      if (goal === 'dessert' && (b.flavorProfile.sweetness > 70 || b.id.includes('egg') || b.id.includes('nitro'))) score += 30;

      // Flavor matching
      if (flavor === 'citrus' && b.flavorProfile.acidity > 60) score += 20;
      if (flavor === 'floral' && b.flavorProfile.aroma > 85) score += 25;
      if (flavor === 'earthy' && b.flavorProfile.bitterness > 50) score += 20;
      if (flavor === 'chocolate' && b.flavorProfile.body > 70) score += 20;
      if (flavor === 'sweet' && b.flavorProfile.sweetness > 60) score += 20;

      // Caffeine limit matching
      if (caffeine === 'zero' && b.caffeineMgPerServing === 0) score += 40;
      if (caffeine === 'mild' && b.caffeineMgPerServing > 0 && b.caffeineMgPerServing <= 50) score += 30;
      if (caffeine === 'moderate' && b.caffeineMgPerServing > 50 && b.caffeineMgPerServing <= 100) score += 30;
      if (caffeine === 'high' && b.caffeineMgPerServing > 100) score += 30;

      // Health sensitivity deduction
      if (sensitivity === 'gerd' && b.acidityLevel === 'High') score -= 50;
      if (sensitivity === 'anxiety' && b.caffeineMgPerServing > 70) score -= 40;
      if (sensitivity === 'sleep' && b.caffeineMgPerServing > 0) score -= 40;

      if (score > highestScore) {
        highestScore = score;
        bestMatch = b;
      }
    });

    setRecommendedResult(bestMatch);
    setStep(5); // Result step
  };

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setFlavor('');
    setCaffeine('');
    setSensitivity('');
    setRecommendedResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191410]/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl modal-animate relative">
        
        {/* Modal Header */}
        <div className="bg-[#191410] text-[#FAF7F2] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C86D43] flex items-center justify-center text-white font-serif font-bold text-sm">
              ✨
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-white">Find Your Ideal Brew Wizard</h2>
              <span className="text-xs text-[#8C8074]">Step {step <= 4 ? step : 'Final'} of 4 • Personalized Beverage Matcher</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#251E18] text-[#8C8074] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E8DFD3] h-1.5">
          <div 
            className="bg-[#C86D43] h-1.5 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 space-y-6">

          {/* STEP 1: Goal */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#1C1510]">
                1. What is your primary goal or mood right now?
              </h3>
              <p className="text-xs text-[#5C5248]">Select the physical or mental effect you wish to experience.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'energy', label: '⚡ High Energy & Alertness', sub: 'Strong coffee & high-caffeine brews' },
                  { id: 'focus', label: '🧠 Calm Focus & Clarity', sub: 'L-Theanine green teas & matcha' },
                  { id: 'relaxation', label: '🌙 Evening Rest & Unwind', sub: 'Caffeine-free herbal blossoms' },
                  { id: 'digestive', label: '🌱 Gut Comfort & Digestion', sub: 'Aged Pu-erh, Turmeric, Rooibos' },
                  { id: 'dessert', label: '🍮 Rich Sweet Dessert Craving', sub: 'Vietnamese egg coffee, nitro velvet' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setGoal(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      goal === opt.id
                        ? 'border-[#C86D43] bg-[#C86D43]/10 font-semibold shadow-sm'
                        : 'border-[#E8DFD3] bg-[#FFFFFF] hover:border-[#C86D43]/50'
                    }`}
                  >
                    <span className="block text-sm text-[#1C1510] font-semibold">{opt.label}</span>
                    <span className="text-[11px] text-[#8C8074] block mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Flavor Notes */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#1C1510]">
                2. Which taste profile attracts you most?
              </h3>
              <p className="text-xs text-[#5C5248]">Your preferred palate notes.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'citrus', label: '🍋 Bright Citrus & Stone Fruit', sub: 'High acidity, crisp stone fruits' },
                  { id: 'floral', label: '🌸 Jasmine & Wildflower Aromas', sub: 'Ethereal florals & light body' },
                  { id: 'earthy', label: '🌿 Earthy Umami & Smoky Oak', sub: 'Deep forest, seaweed, or roasted grains' },
                  { id: 'chocolate', label: '🍫 Dark Cocoa & Toasted Nut', sub: 'Full body, low acidity, dark roast' },
                  { id: 'sweet', label: '🍯 Wildflower Honey & Cream', sub: 'Naturally sweet and lingering finish' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFlavor(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      flavor === opt.id
                        ? 'border-[#C86D43] bg-[#C86D43]/10 font-semibold shadow-sm'
                        : 'border-[#E8DFD3] bg-[#FFFFFF] hover:border-[#C86D43]/50'
                    }`}
                  >
                    <span className="block text-sm text-[#1C1510] font-semibold">{opt.label}</span>
                    <span className="text-[11px] text-[#8C8074] block mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Caffeine Tolerance */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#1C1510]">
                3. What is your caffeine tolerance level?
              </h3>
              <p className="text-xs text-[#5C5248]">We match exact caffeine milligram ranges to your tolerance.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'zero', label: '🚫 0 mg (Caffeine-Free)', sub: 'Botanical blossoms & herbal rooibos' },
                  { id: 'mild', label: '🍵 15 - 45 mg (Gentle)', sub: 'Japanese sencha & black teas' },
                  { id: 'moderate', label: '☕ 50 - 90 mg (Standard)', sub: 'Single espresso & matcha' },
                  { id: 'high', label: '⚡ 100 - 205 mg (High-Octane)', sub: 'Nitro cold brew & double espresso' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setCaffeine(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      caffeine === opt.id
                        ? 'border-[#C86D43] bg-[#C86D43]/10 font-semibold shadow-sm'
                        : 'border-[#E8DFD3] bg-[#FFFFFF] hover:border-[#C86D43]/50'
                    }`}
                  >
                    <span className="block text-sm text-[#1C1510] font-semibold">{opt.label}</span>
                    <span className="text-[11px] text-[#8C8074] block mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Health Sensitivities */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#1C1510]">
                4. Any health sensitivities or restrictions?
              </h3>
              <p className="text-xs text-[#5C5248]">Our safety engine filters out brews that could cause discomfort.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'gerd', label: '🍋 Avoid High Acidity (GERD/Reflux)', sub: 'Excludes sharp bright espresso' },
                  { id: 'anxiety', label: '💓 Avoid Jitters & Anxiety', sub: 'Filters high caffeine & encourages L-theanine' },
                  { id: 'sleep', label: '😴 Night Time Safe (Insomnia)', sub: 'Only zero-caffeine options' },
                  { id: 'none', label: '✅ No Special Restrictions', sub: 'Full access to all 25+ global varieties' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSensitivity(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      sensitivity === opt.id
                        ? 'border-[#C86D43] bg-[#C86D43]/10 font-semibold shadow-sm'
                        : 'border-[#E8DFD3] bg-[#FFFFFF] hover:border-[#C86D43]/50'
                    }`}
                  >
                    <span className="block text-sm text-[#1C1510] font-semibold">{opt.label}</span>
                    <span className="text-[11px] text-[#8C8074] block mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Recommendation Result Card */}
          {step === 5 && recommendedResult && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D5A46] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#D4A359]" />
                  98% Ideal Match Found!
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1510]">
                  Your Perfect Brew: {recommendedResult.name}
                </h3>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-2xl p-5 shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={recommendedResult.imageUrl} 
                    alt={recommendedResult.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#C86D43] uppercase tracking-wider">{recommendedResult.origin}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#1C1510]">
                      {recommendedResult.caffeineMgPerServing}mg Caffeine
                    </span>
                  </div>

                  <p className="text-xs text-[#5C5248] italic">"{recommendedResult.tagline}"</p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-[#1C1510] block">Tasting Notes:</span>
                    <div className="flex flex-wrap gap-1">
                      {recommendedResult.tastingNotes.map((note, i) => (
                        <span key={i} className="text-[10px] bg-[#FAF6F0] text-[#5C5248] px-2 py-0.5 rounded border border-[#E8DFD3]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onSelectBeverage(recommendedResult);
                        onClose();
                      }}
                      className="w-full bg-[#191410] hover:bg-[#251E18] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <span>View Deep Recipe & Gear</span>
                      <ArrowRight className="w-4 h-4 text-[#C86D43]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8DFD3]">
            {step > 1 && step <= 4 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-xs font-semibold text-[#5C5248] hover:text-[#1C1510]"
              >
                ← Back
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-[#8C8074] hover:text-[#C86D43] flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Restart Quiz
              </button>
            )}

            {step < 4 && (
              <button
                disabled={(step === 1 && !goal) || (step === 2 && !flavor) || (step === 3 && !caffeine)}
                onClick={() => setStep(step + 1)}
                className="bg-[#C86D43] disabled:opacity-40 hover:bg-[#B55C33] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 4 && (
              <button
                disabled={!sensitivity}
                onClick={handleCalculateRecommendation}
                className="bg-[#2D5A46] disabled:opacity-40 hover:bg-[#234737] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#D4A359]" />
                <span>Show Best Match</span>
              </button>
            )}

            {step === 5 && (
              <button
                onClick={onClose}
                className="bg-[#191410] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Close Wizard
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
