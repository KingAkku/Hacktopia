import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
} from 'motion/react';

function useElementWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

interface VelocityTextProps {
    children: React.ReactNode;
    baseVelocity: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    className?: string;
    damping: number;
    stiffness: number;
    numCopies: number;
    velocityMapping: { input: number[], output: number[] };
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityText({
    children,
    baseVelocity = 100,
    scrollContainerRef,
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping,
      stiffness: stiffness,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      { clamp: false }
    );
  
    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);
  
    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px';
      if (baseVelocity > 0) {
        return `${wrap(0, -copyWidth, v)}px`;
      }
      return `${wrap(-copyWidth, 0, v)}px`;
    });
  
    useEffect(() => {
        let lastTimestamp = performance.now();
        let frameId: number;

        const animate = (now: number) => {
            const delta = now - lastTimestamp;
            lastTimestamp = now;

            const totalVelocity = baseVelocity + (baseVelocity * velocityFactor.get());
            const moveBy = totalVelocity * (delta / 1000);

            baseX.set(baseX.get() + moveBy);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [baseVelocity, baseX, velocityFactor]);

  
    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span className="flex-shrink-0" key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }
  
    return (
      <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
}

interface ScrollVelocityProps {
    scrollContainerRef?: React.RefObject<HTMLElement>;
    texts?: string[];
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: { input: number[], output: number[] };
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={index % 2 === 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          <span className={className}>{text}&nbsp;</span>
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;