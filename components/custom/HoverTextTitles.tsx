"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FONT_WEIGHTS = {
  title: { min: 400, max: 800, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

const setupTextHover = (container: HTMLElement, type: "title" | "subtitle") => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetters = (
    letter: HTMLElement,
    weight: number,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter: HTMLElement) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetters(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const renderText = (text: string, className: string | undefined, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght ${baseWeight}'` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const HoverTextTitles = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    let titleCleanup: (() => void) | undefined;
    let subtitleCleanup: (() => void) | undefined;

    if (titleRef.current) {
      titleCleanup = setupTextHover(titleRef.current, "title");
    }
    if (subtitleRef.current) {
      subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    }

    return () => {
      subtitleCleanup?.();
      titleCleanup?.();
    };
  }, []);

  return (
    <>
      <p ref={subtitleRef}>
        {renderText(subtitle, "text-3xl font-georama", 100)}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText(title, "text-8xl italic font-georama", 400)}
      </h1>
    </>
  );
};

export default HoverTextTitles;
