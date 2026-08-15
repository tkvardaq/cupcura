import React from 'react';
import { FlavorProfile } from '../data/beverages';

interface RadarChartProps {
  profile: FlavorProfile;
  secondaryProfile?: FlavorProfile;
  primaryName?: string;
  secondaryName?: string;
  size?: number;
}

export const FlavorRadarChart: React.FC<RadarChartProps> = ({
  profile,
  secondaryProfile,
  primaryName = 'Primary',
  secondaryName = 'Secondary',
  size = 280
}) => {
  const center = size / 2;
  const radius = size * 0.35;
  const metrics = [
    { key: 'sweetness', label: 'Sweetness' },
    { key: 'acidity', label: 'Acidity' },
    { key: 'bitterness', label: 'Bitterness' },
    { key: 'body', label: 'Body' },
    { key: 'aroma', label: 'Aroma' }
  ] as const;

  const totalAxes = metrics.length;
  const angleStep = (Math.PI * 2) / totalAxes;

  // Calculate Point Coordinates
  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2; // start top
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate SVG Polygon Points string
  const primaryPoints = metrics
    .map((m, i) => {
      const val = profile[m.key];
      const { x, y } = getCoordinates(val, i);
      return `${x},${y}`;
    })
    .join(' ');

  const secondaryPoints = secondaryProfile
    ? metrics
        .map((m, i) => {
          const val = secondaryProfile[m.key];
          const { x, y } = getCoordinates(val, i);
          return `${x},${y}`;
        })
        .join(' ')
    : '';

  // Background Webs (20%, 40%, 60%, 80%, 100%)
  const webLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <svg width={size} height={size} className="overflow-visible">
        <defs>
          <radialGradient id="primaryGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C86D43" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C86D43" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id="secondaryGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2D5A46" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2D5A46" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Concentric Background Web Polygons */}
        {webLevels.map((level, levelIdx) => {
          const webPoints = metrics
            .map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const r = radius * level;
              const x = center + r * Math.cos(angle);
              const y = center + r * Math.sin(angle);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={levelIdx}
              points={webPoints}
              fill="none"
              stroke="#E8DFD3"
              strokeWidth="1"
              strokeDasharray={level === 1.0 ? 'none' : '2,2'}
            />
          );
        })}

        {/* Radar Axes Spoke Lines */}
        {metrics.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x2}
              y2={y2}
              stroke="#D5C7B4"
              strokeWidth="1"
            />
          );
        })}

        {/* Secondary Profile Polygon (if comparing) */}
        {secondaryPoints && (
          <polygon
            points={secondaryPoints}
            fill="url(#secondaryGlow)"
            stroke="#2D5A46"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}

        {/* Primary Profile Polygon */}
        <polygon
          points={primaryPoints}
          fill="url(#primaryGlow)"
          stroke="#C86D43"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Primary Vertices Circles */}
        {metrics.map((m, i) => {
          const val = profile[m.key];
          const { x, y } = getCoordinates(val, i);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4.5"
              fill="#FAF7F2"
              stroke="#C86D43"
              strokeWidth="2.5"
            />
          );
        })}

        {/* Metric Axis Labels */}
        {metrics.map((m, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelRadius = radius + 24;
          const lx = center + labelRadius * Math.cos(angle);
          const ly = center + labelRadius * Math.sin(angle);

          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[11px] font-sans font-bold fill-[#1C1510]"
            >
              {m.label} ({profile[m.key]})
            </text>
          );
        })}
      </svg>

      {/* Legend if comparing */}
      {secondaryProfile && (
        <div className="flex items-center gap-4 text-xs font-semibold pt-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#C86D43] inline-block" />
            <span className="text-[#1C1510]">{primaryName}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#2D5A46] inline-block" />
            <span className="text-[#1C1510]">{secondaryName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
