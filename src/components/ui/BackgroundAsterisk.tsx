interface BackgroundAsteriskProps {
  className?: string;
  useGradient?: boolean;
  y?: string | number;
}

export function BackgroundAsterisk({ className = "", useGradient = true, y = "65" }: BackgroundAsteriskProps) {
  return (
    <div 
      className={`absolute pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {useGradient && (
          <defs>
            <linearGradient id="asterisk-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2ff" />
              <stop offset="100%" stopColor="#7000ff" />
            </linearGradient>
          </defs>
        )}
        <text 
          x="50" 
          y={y} 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontSize="110" 
          fontWeight="bold"
          fill={useGradient ? "url(#asterisk-grad)" : "currentColor"}
        >
          *
        </text>
      </svg>
    </div>
  );
}
