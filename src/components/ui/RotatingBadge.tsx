import { BackgroundAsterisk } from "./BackgroundAsterisk";

interface RotatingBadgeProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export function RotatingBadge({
  text = "Una Arte con mucho espíritu de Copy ;) • ",
  onClick,
  className = "",
}: RotatingBadgeProps) {
  return (
    <div
      onClick={onClick}
      className={`relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center animate-rotate group cursor-pointer ${className}`}
    >
      <svg
        className="absolute w-full h-full fill-current text-on-surface transition-colors duration-500 group-hover:text-primary"
        viewBox="0 0 100 100"
      >
        <path
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="transparent"
          id="badgeCirclePath"
        />
        <text className="font-label-caps text-[7.5px] uppercase tracking-[0.11em]">
          <textPath href="#badgeCirclePath">{text}</textPath>
        </text>
      </svg>
      <div className="w-12 h-12 bg-gradient-asterisk rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 relative">
        <BackgroundAsterisk useGradient={false} y="78" className="w-full h-full text-surface-container-lowest" />
      </div>
    </div>
  );
}
