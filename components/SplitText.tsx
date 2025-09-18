import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | 'chars,words' | 'chars,lines' | 'words,lines' | 'chars,words,lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLetterAnimationComplete?: () => void;
  triggerOnScroll?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  triggerOnScroll = true,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current as any; 

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
      });

      let targets: any[] = [];
      if (splitType.includes('chars')) targets = splitInstance.chars;
      else if (splitType.includes('words')) targets = splitInstance.words;
      else if (splitType.includes('lines')) targets = splitInstance.lines;

      if(targets.length === 0) return;

      const animationVars: gsap.TweenVars = {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          onLetterAnimationComplete?.();
        },
      };

      if (triggerOnScroll) {
        const startPct = (1 - threshold) * 100;
        const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
        const sign =
          marginValue === 0
            ? ''
            : marginValue < 0
              ? `-=${Math.abs(marginValue)}${marginUnit}`
              : `+=${marginValue}${marginUnit}`;
        const start = `top ${startPct}%${sign}`;

        animationVars.scrollTrigger = {
          trigger: el,
          start,
          once: true,
        };
      } else {
        animationVars.delay = 0.2; // Small delay for on-load animation
      }

      gsap.fromTo(
        targets,
        { ...from },
        animationVars
      );

      return () => {
        if (splitInstance) {
            try {
                // Ensure all scroll triggers associated with this element are killed
                ScrollTrigger.getAll().forEach(trigger => {
                    if (trigger.trigger === el) {
                        trigger.kill();
                    }
                });
                splitInstance.revert();
            } catch(e) {
                // Failsafe for hot-reloads
            }
        }
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
        triggerOnScroll
      ],
      scope: ref
    }
  );

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
    };
    const classes = `split-parent ${className}`;
    const Tag = tag;

    return (
      <Tag ref={ref as any} style={style} className={classes}>
        {text}
      </Tag>
    );
  };
  return renderTag();
};

export default SplitText;