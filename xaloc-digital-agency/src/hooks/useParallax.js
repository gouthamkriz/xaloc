import { useMousePosition } from './useMousePosition';
import { useScrollPosition } from './useScrollPosition';

export const useParallax = (intensity = 0.02) => {
  const mousePosition = useMousePosition();
  const scrollY = useScrollPosition();

  const getParallaxTransform = (multiplier = 1) => ({
    transform: `translate(${(mousePosition.x - 50) * intensity * multiplier}px, ${(mousePosition.y - 50) * intensity * multiplier}px)`,
  });

  const getScrollTransform = (multiplier = 0.1) => ({
    transform: `translateY(${scrollY * multiplier}px)`,
  });

  return {
    mousePosition,
    scrollY,
    getParallaxTransform,
    getScrollTransform,
  };
};