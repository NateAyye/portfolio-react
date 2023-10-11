import { useEffect, useState } from 'react';

export enum ScrollDirection {
  up = 'up',
  down = 'down',
}

function useScroll(thresholdToUpdate?: number) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPrecentage, setScrollPrecentage] = useState(0);
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up);

  const threshold = thresholdToUpdate ?? 100;

  useEffect(() => {
    let previousScrollYPosition = scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = scrollY;
      const position = scrollY;

      setScrollPrecentage((position / innerHeight) * 100);
      setScrollPosition(position);

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => requestAnimationFrame(updateScrollDirection);

    addEventListener('scroll', onScroll);

    return () => removeEventListener('scroll', onScroll);
  }, [threshold]);

  return {
    position: scrollPosition,
    precentage: scrollPrecentage,
    direction: scrollDir,
  };
}

export default useScroll;
