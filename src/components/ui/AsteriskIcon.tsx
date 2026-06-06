interface AsteriskIconProps {
  className?: string;
}

export function AsteriskIcon({ className = "w-4 h-4 text-surface-container-lowest" }: AsteriskIconProps) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 100 100">
      <path d="M50 5L55 35L85 40L60 55L70 85L50 70L30 85L40 55L15 40L45 35Z" />
    </svg>
  );
}
