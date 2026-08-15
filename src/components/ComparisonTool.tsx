import React, { useState } from 'react';
import { Beverage, BEVERAGES_DATA } from '../data/beverages';
import { FlavorRadarChart } from './FlavorRadarChart';
import { X } from 'lucide-react';

export const ComparisonTool: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'espresso-single-origin',
    'matcha-ceremonial-grade'
  ]);

  const selectedBeverages = selectedIds
    .map((id) => BEVERAGES_DATA.find((b) => b.id === id))
    .filter(Boolean) as Beverage[];

  const handleAddBeverage = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRemoveBeverage = (id: string) => {
    if (selectedIds.length > 1) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    }
  };

  return (
    <section id="comparison" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <span className="text-xs font-bold text-[#C86D43] uppercase tracking-widest block">
              Interactive Matrix & Comparison Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Side-by-Side Beverage Comparison
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Compare caffeine density, sensory taste radar maps, acidity, and health cautions.
            </p>
          </div>

          {/* Add Beverage Dropdown */}
          {selectedIds.length < 3 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8C8074]">Add Beverage:</span>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    handleAddBeverage(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="bg-[#FFFFFF] border border-[#D5C7B4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1C1510] focus:outline-none focus:border-[#C86D43]"
              >
                <option value="">+ Select Beverage to Compare</option>
                {BEVERAGES_DATA.filter((b) => !selectedIds.includes(b.id)).map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.caffeineMgPerServing}mg Caffeine)
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Beverage Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {selectedBeverages.map((bev, index) => (
            <div key={bev.id} className="bg-[#FFFFFF] border border-[#E8DFD3] p-4 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#C86D43]' : index === 1 ? 'bg-[#2D5A46]' : 'bg-[#D4A359]'}`} />
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#1C1510]">{bev.name}</h4>
                  <span className="text-[11px] text-[#8C8074]">{bev.caffeineMgPerServing}mg Caffeine • {bev.acidityLevel} Acid</span>
                </div>
              </div>

              {selectedIds.length > 1 && (
                <button
                  onClick={() => handleRemoveBeverage(bev.id)}
                  className="p-1 rounded-full text-[#8C8074] hover:text-[#8B3A4C] hover:bg-[#F7E9EC]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Overlaid Radar Chart Comparison */}
        {selectedBeverages.length > 0 && (
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#1C1510] text-center sm:text-left">
              Flavor Profile Overlaid Radar Comparison
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <FlavorRadarChart
                profile={selectedBeverages[0].flavorProfile}
                secondaryProfile={selectedBeverages[1]?.flavorProfile}
                primaryName={selectedBeverages[0].name}
                secondaryName={selectedBeverages[1]?.name}
                size={320}
              />
              
              {/* Side-by-side metric table */}
              <div className="w-full md:w-1/2 space-y-3">
                {(['sweetness', 'acidity', 'bitterness', 'body', 'aroma'] as const).map((metric) => (
                  <div key={metric} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-[#1C1510] capitalize">
                      <span>{metric}</span>
                      <div className="flex gap-4">
                        {selectedBeverages.map((bev, idx) => (
                          <span key={bev.id} className={idx === 0 ? 'text-[#C86D43]' : 'text-[#2D5A46]'}>
                            {bev.flavorProfile[metric]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-[#FAF6F0] h-2 rounded-full overflow-hidden flex">
                      {selectedBeverages.map((bev, idx) => (
                        <div
                          key={bev.id}
                          style={{
                            width: `${bev.flavorProfile[metric]}%`,
                            backgroundColor: idx === 0 ? '#C86D43' : idx === 1 ? '#2D5A46' : '#D4A359',
                            opacity: 0.8
                          }}
                          className="h-full"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Side-by-side Comparison Matrix Table */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#191410] text-[#FAF7F2] text-xs font-serif">
                  <th className="p-4 w-1/4">Comparison Metric</th>
                  {selectedBeverages.map((bev) => (
                    <th key={bev.id} className="p-4 text-sm font-bold border-l border-[#3D3228]">
                      {bev.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs text-[#5C5248] divide-y divide-[#E8DFD3]">
                {/* Caffeine Row */}
                <tr>
                  <td className="p-4 font-bold text-[#1C1510] bg-[#FAF6F0]">Caffeine Content</td>
                  {selectedBeverages.map((bev) => (
                    <td key={bev.id} className="p-4 font-mono font-bold text-[#1C1510]">
                      {bev.caffeineMgPerServing === 0 ? '0 mg (Caffeine Free)' : `${bev.caffeineMgPerServing} mg / serving`}
                    </td>
                  ))}
                </tr>

                {/* Acidity Level Row */}
                <tr>
                  <td className="p-4 font-bold text-[#1C1510] bg-[#FAF6F0]">Acidity Profile</td>
                  {selectedBeverages.map((bev) => (
                    <td key={bev.id} className="p-4">
                      <span className={`px-2.5 py-1 rounded-md font-bold text-[11px] ${
                        bev.acidityLevel === 'Low' ? 'bg-[#E8F2EC] text-[#2D5A46]' : 'bg-[#FFF8EB] text-[#B88230]'
                      }`}>
                        {bev.acidityLevel} Acidity
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Top Health Benefit */}
                <tr>
                  <td className="p-4 font-bold text-[#1C1510] bg-[#FAF6F0]">Key Physiological Effect</td>
                  {selectedBeverages.map((bev) => (
                    <td key={bev.id} className="p-4">
                      <strong className="text-[#2D5A46] block">{bev.healthBenefits[0]?.title}</strong>
                      <span className="text-[11px]">{bev.healthBenefits[0]?.description}</span>
                    </td>
                  ))}
                </tr>

                {/* Caution Warning */}
                <tr>
                  <td className="p-4 font-bold text-[#1C1510] bg-[#FAF6F0]">Who Should Caution</td>
                  {selectedBeverages.map((bev) => (
                    <td key={bev.id} className="p-4 text-[#8B3A4C]">
                      {bev.contraindications[0] || 'No special cautions.'}
                    </td>
                  ))}
                </tr>

                {/* Brew Temp & Ratio */}
                <tr>
                  <td className="p-4 font-bold text-[#1C1510] bg-[#FAF6F0]">Water Temp & Ratio</td>
                  {selectedBeverages.map((bev) => (
                    <td key={bev.id} className="p-4">
                      <span>{bev.brewingParams.waterTempC}°C ({bev.brewingParams.waterTempF}°F)</span>
                      <span className="block text-[11px] text-[#8C8074]">{bev.brewingParams.ratioGramsPerLiter}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};