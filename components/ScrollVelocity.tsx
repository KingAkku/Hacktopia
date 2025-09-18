
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollVelocityProps {
  children: React.ReactNode;
  className?: string;
  maxSkew?: number;
  maxRotate?: number;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({ children, className, maxSkew = 5, maxRotate = 2 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const proxy = { skew: 0, rotate: 0 };
    const skewSetter = gsap.quickSetter(ref.current, "skewY", "deg");
    const rotateSetter = gsap.quickSetter(ref.current, "rotate", "deg");
    const clampSkew = gsap.utils.clamp(-maxSkew, maxSkew);
    const clampRotate = gsap.utils.clamp(-maxRotate, maxRotate);

    const scrollTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const skew = clampSkew(velocity / -300);
        const rotate = clampRotate(velocity / -500);
        
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            proxy.rotate = rotate;
        }

        gsap.to(proxy, {
          skew: 0,
          rotate: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => {
            skewSetter(proxy.skew);
            rotateSetter(proxy.rotate);
          }
        });
      }
    });

    return () => {
      scrollTrigger.kill();
    };

  }, { scope: ref, dependencies: [maxSkew, maxRotate] });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollVelocity;
