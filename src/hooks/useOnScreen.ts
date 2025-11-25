// useOnScreen.ts
import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Hook para detectar si un elemento está visible en el viewport usando Intersection Observer.
 * @param options - Opciones para el Intersection Observer (e.g., { threshold: 0.1 })
 * @returns [ref, isIntersecting] - La ref para asignar al elemento y un booleano de visibilidad.
 */
export function useOnScreen(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<HTMLElement | null>, boolean] {
  // Tipamos la referencia para un elemento HTML genérico (e.g., <div>, <section>)
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const [hasAppeared, setHasAppeared] = useState<boolean>(false);

  useEffect(() => {
    const currentElement = ref.current;

    // Verificamos si el elemento existe antes de crear el observador
    if (!currentElement) return;

    // El callback del observador recibe una lista de 'entries'
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);

      if (entry.isIntersecting) {
        setHasAppeared(true);
      }
    }, options);

    // Iniciar observación
    observer.observe(currentElement);

    // Limpieza: detener la observación cuando el componente se desmonte
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // Deshabilitamos la advertencia para 'options.threshold' ya que es un objeto estable en este caso
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold]); // Dependencias: solo se ejecuta si el umbral cambia

  const isVisible = isIntersecting || hasAppeared;

  return [ref, isVisible];
}
