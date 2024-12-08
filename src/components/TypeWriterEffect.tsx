"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";

interface WordConfig {
  text: string;
  className?: string;
}

interface TypewriterProps {
  stableWords: WordConfig[];
  rotatingWords: WordConfig[];
  className?: string;
  cursorClassName?: string;
  /**
   * Speed of typing each character
   * @default 100ms
   */
  typeSpeed?: number;
  /**
   * Speed of deleting each character
   * @default 50ms
   */
  deleteSpeed?: number;
  /**
   * Delay between typing and deleting
   * @default 2000ms
   */
  delayBetweenWords?: number;
  /**
   * Element to render as
   * @default "div"
   */
  asElement?: keyof JSX.IntrinsicElements;
}

export const TypewriterRotating = ({
  stableWords,
  rotatingWords,
  className,
  cursorClassName,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  asElement: Element = "div",
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0);

  const stableSentence = stableWords.map((word) => word.text).join(" ") + " ";
  const currentRotatingWord = rotatingWords[currentRotatingIndex].text;
  const fullText = stableSentence + currentRotatingWord;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        // Wait before deleting
        timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      // Deleting effect
      if (displayedText.length > stableSentence.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        // Move to next rotating word and restart typing
        setIsDeleting(false);
        setCurrentRotatingIndex(
          (prevIndex) => (prevIndex + 1) % rotatingWords.length
        );
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    fullText,
    stableSentence,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    rotatingWords.length,
  ]);

  // Separate the displayed text into stable and rotating segments
  const stableLength = stableSentence.length;
  const stableSegment = displayedText.slice(0, stableLength);
  const rotatingSegment = displayedText.slice(stableLength);

  return (
    <Element
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-left",
        className
      )}
    >
      {stableSegment}
      {rotatingSegment && (
        <span className={cn(rotatingWords[currentRotatingIndex].className)}>
          {rotatingSegment}
        </span>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </Element>
  );
};
