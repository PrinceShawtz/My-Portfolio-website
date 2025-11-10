import { useState, useEffect, useRef, RefObject } from 'react';

// FIX: Update options type to include custom 'triggerOnce' property.
export const useIntersectionObserver = <T extends HTMLElement,>(
  options: IntersectionObserverInit & { triggerOnce?: boolean } = { threshold: 0.1, triggerOnce: true }
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    // FIX: Destructure 'triggerOnce' and pass only valid options to IntersectionObserver.
    const { triggerOnce, ...observerOptions } = options;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
