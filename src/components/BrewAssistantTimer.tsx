import React, { useState, useEffect } from 'react';
import { BEVERAGES_MASTER } from '../data/beveragesMaster';
import { Play, Pause, RotateCcw, Clock, Thermometer, Scale, CheckCircle2 } from 'lucide-react';

export const BrewAssistantTimer: React.FC = () => {
  const [selectedBevId, setSelectedBevId] = useState<string>('ethiopian-espresso');
  const [servings, setServings] = useState<number>(2);
  const [timerSeconds, setTimerSeconds] = useState<number>(30);
  const [isActive, setIsActive] = useState<boolean>(false);

  const selectedBeverage = BEVERAGES_MASTER.find((b) => b.id === selectedBevId) || BEVERAGES_MASTER[0];

  // Helper to determine natural timer seconds for drink
  const getDefaultTimeForDrink = (id: string, category: string) => {
    if (id.includes('espresso') || id.includes('ristretto')) return 30;
    if (id.includes('matcha')) return 45;
    if (category === 'green_tea' || id.includes('sencha')) return 90;
    if (id.includes('cold-brew')) return 300;
    if (category === 'herbal_botanical') return 300;
    return 180; // default pour-over
  };

  const baseDoseGrams = selectedBeverage.category === 'coffee'
    ? (selectedBeverage.id.includes('espresso') ? 18 : 15)
    : (selectedBeverage.category === 'green_tea' ? 3 : 4);

  const baseWaterMl = selectedBeverage.id.includes('espresso') ? 36 : 200;

  const totalDoseGrams = baseDoseGrams * servings;
  const totalWaterMl = baseWaterMl * servings;

  // Countdown timer
  useEffect(() => {
    let interval: any = null;
    if (isActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timerSeconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBeverageChange = (id: string) => {
    setSelectedBevId(id);
    setIsActive(false);
    const item = BEVERAGES_MASTER.find(b => b.id === id);
    const defaultSecs = getDefaultTimeForDrink(id, item?.category || '');
    setTimerSeconds(defaultSecs);
  };

  const handleResetTimer = () => {
    setIsActive(false);
    const defaultSecs = getDefaultTimeForDrink(selectedBevId, selectedBeverage.category);
    setTimerSeconds(defaultSecs);
  };

  return (
    <section id="assistant" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Barista Recipe & Extraction Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Interactive Brew Timer & Recipe Scaler
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Scale ground coffee or tea leaf weight, water volume, and run the step-by-step extraction timer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scaler Inputs */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            <div className="space-y-4">
              <label className="text-xs font-bold text-[#1C1510] uppercase tracking-wider block">
                1. Select Target Beverage Formula
              </label>
              <select
                value={selectedBevId}
                onChange={(e) => handleBeverageChange(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#D5C7B4] rounded-2xl p-3.5 text-sm font-serif font-bold text-[#1C1510] focus:outline-none focus:border-[#C86D43]"
              >
                {BEVERAGES_MASTER.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.brewingParams.recommendedMethod})
                  </option>
                ))}
              </select>
            </div>

            {/* Serving Size Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1C1510] uppercase tracking-wider block">
                2. Number of Cups / Servings
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 6, 8].map((n) => (
                  <button
                    key={n}
                    onClick={() => setServings(n)}
                    className={`flex-1 py-2.5 rounded-xl font-mono font-bold text-xs transition-all ${
                      servings === n
                        ? 'bg-[#C86D43] text-white shadow-sm'
                        : 'bg-[#FAF6F0] text-[#5C5248] border border-[#E8DFD3] hover:border-[#C86D43]/50'
                    }`}
                  >
                    {n} {n === 1 ? 'Cup' : 'Cups'}
                  </button>
                ))}
              </div>
            </div>

            {/* Scaled Recipe Outputs */}
            <div className="bg-[#FAF6F0] border border-[#E8DFD3] rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
              
              <div>
                <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Dose Weight</span>
                <span className="text-xl font-mono font-bold text-[#C86D43]">
                  {totalDoseGrams.toFixed(1)}g
                </span>
                <span className="text-[10px] text-[#5C5248] block">Coffee / Leaves</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Water Volume</span>
                <span className="text-xl font-mono font-bold text-[#2D5A46]">
                  {totalWaterMl} ml
                </span>
                <span className="text-[10px] text-[#5C5248] block">Filtered Water</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#8C8074] uppercase block">Water Temp</span>
                <span className="text-xl font-mono font-bold text-[#1C1510]">
                  {selectedBeverage.brewingParams.waterTempC}°C
                </span>
                <span className="text-[10px] text-[#8C8074] block">({selectedBeverage.brewingParams.waterTempF}°F)</span>
              </div>

            </div>

            <div className="text-xs text-[#5C5248] space-y-1">
              <span className="font-bold text-[#1C1510]">Grind Specification:</span> {selectedBeverage.brewingParams.grindSize}
              <br />
              <span className="font-bold text-[#1C1510]">Recommended Equipment:</span> {selectedBeverage.brewingParams.recommendedMethod}
            </div>

          </div>

          {/* Right Column: Live Countdown Extraction Timer */}
          <div className="lg:col-span-5 bg-[#191410] text-[#FAF7F2] border border-[#3D3228] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-center">
            
            <div className="flex items-center justify-between border-b border-[#3D3228] pb-4 text-left">
              <div>
                <span className="text-xs font-bold text-[#D4A359] uppercase tracking-widest block">Live Extraction Timer</span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">{selectedBeverage.name}</h3>
              </div>
              <Clock className="w-6 h-6 text-[#C86D43] animate-pulse" />
            </div>

            {/* Timer Display */}
            <div className="py-4">
              <span className="text-6xl sm:text-7xl font-mono font-bold tracking-tight text-white block">
                {formatTime(timerSeconds)}
              </span>
              <span className="text-xs text-[#8C8074] mt-2 block">
                {timerSeconds === 0 ? '🎉 Extraction Complete! Serve & Enjoy.' : isActive ? '⏳ Extraction in progress...' : 'Press Start when ready'}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform active:scale-95 ${
                  isActive
                    ? 'bg-[#8B3A4C] hover:bg-[#722F3E] text-white'
                    : 'bg-[#C86D43] hover:bg-[#B55C33] text-white'
                }`}
              >
                {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                <span>{isActive ? 'Pause' : 'Start Timer'}</span>
              </button>

              <button
                onClick={handleResetTimer}
                className="p-3.5 rounded-full bg-[#251E18] text-[#8C8074] hover:text-white border border-[#3D3228]"
                title="Reset Timer to Formula Standard"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Steps */}
            <div className="pt-4 border-t border-[#3D3228] text-left space-y-2 text-xs text-[#E8DFD3]">
              <span className="text-[10px] font-bold text-[#D4A359] uppercase tracking-wider block">Step-by-Step Pour Plan:</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A46] shrink-0" />
                <span>Bloom phase: Wet grounds with 2x dose weight ({totalDoseGrams * 2}g water).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C86D43] shrink-0" />
                <span>Pour phase: Slow steady pours until reaching total {totalWaterMl}ml.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
