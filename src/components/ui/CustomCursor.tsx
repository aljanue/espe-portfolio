import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive-element") ||
        target.closest(".group") ||
        target.closest(".footer-asterisk") ||
        target.closest(".animate-rotate");

      if (isInteractive) {
        setIsHovered(true);
        document.body.classList.add("cursor-hover");
      } else {
        setIsHovered(false);
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovered ? "scale(3)" : "scale(1)"}`,
        backgroundColor: isHovered ? "white" : "transparent",
      }}
      className="hidden md:block"
    />
  );
}
