import React, { useEffect, useRef, useState } from 'react';

type CounterProps = {
  final: number;
  duration?: number;
}

export const AnimatedCounter: React.FC<CounterProps> = ({ final, duration = 1000 }) => {
  const [current, setCurrent] = useState(final)
  const previous = useRef(final)

  useEffect(() => {
    const start = performance.now()
    const from = previous.current
    const to = final

    function update(timestamp: number) {
      const progress = Math.min((timestamp - start) / duration, 1)
      const value = Math.floor(from + (to - from) * progress)
      setCurrent(value)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        previous.current = to;
      }
    }

    requestAnimationFrame(update)
  }, [final, duration])

  return <span>{current}</span>
};

