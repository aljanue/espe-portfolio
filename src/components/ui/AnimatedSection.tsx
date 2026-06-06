import type { ReactNode, CSSProperties } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tag?: "section" | "div" | "article" | "nav" | "footer" | "header" | "blockquote";
  style?: CSSProperties;
}

export function AnimatedSection({
  children,
  className = "",
  id,
  tag = "section",
  style,
}: AnimatedSectionProps) {
  const ref = useIntersectionObserver();
  const Tag = tag as any;

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
