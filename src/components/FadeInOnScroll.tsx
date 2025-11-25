// FadeInOnScroll.tsx
import { useOnScreen } from "@/hooks/useOnScreen";
import React, { type JSX, type ReactNode } from "react"; // Asegúrate de la ruta correcta

interface FadeInOnScrollProps {
  children: ReactNode; // El contenido que será revelado
  delay?: number; // Retardo opcional en segundos
}

// Estilos de ejemplo para la transición.
const baseStyle: React.CSSProperties = {
  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
};

export function FadeInOnScroll({
  children,
  delay = 0,
}: FadeInOnScrollProps): JSX.Element {
  // Usamos el hook. threshold: 0.1 significa que aparecerá cuando el 10% del elemento sea visible.
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const style: React.CSSProperties = {
    ...baseStyle,
    opacity: isVisible ? 1 : 0, // 1 si es visible, 0 si está fuera de vista
    transform: isVisible ? "translateY(0)" : "translateY(20px)", // Animación de subida
    transitionDelay: `${delay}s`,
  };

  return (
    // Es importante tipar el 'ref' como 'ref={ref as React.RefObject<HTMLDivElement>}'
    // en casos complejos, pero dado que en useOnScreen se devuelve RefObject<HTMLElement>,
    // TypeScript lo infiere correctamente en un <div>.
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style}>
      {children}
    </div>
  );
}
