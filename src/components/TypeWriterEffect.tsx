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
  rotatingWords?: WordConfig[];
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
  const currentRotatingWord =
    rotatingWords && rotatingWords[currentRotatingIndex].text;
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
        const nextRotatingIndex = rotatingWords?.length
          ? rotatingWords.length
          : 0;

        setCurrentRotatingIndex(
          (prevIndex) => (prevIndex + 1) % nextRotatingIndex,
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
    rotatingWords?.length,
  ]);

  // Separate the displayed text into stable and rotating segments
  const stableLength = stableSentence.length;
  const stableSegment = displayedText.slice(0, stableLength);
  const rotatingSegment = displayedText.slice(stableLength);

  const stableOutput = (() => {
    let offset = 0;

    return stableWords.map((sw, index) => {
      const wordWithSpace = sw.text + " ";
      const endOffset = offset + wordWithSpace.length;
      const typedPart = stableSegment.slice(offset, endOffset);
      offset = endOffset;

      return (
        <span key={`stable-word-${index}`} className={cn(sw.className)}>
          {typedPart}
        </span>
      );
    });
  })();

  return (
    <Element
      className={cn(
        "text-left text-base font-bold sm:text-xl md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {stableOutput}

      {rotatingSegment && rotatingWords && (
        <span
          className={cn(
            rotatingWords && rotatingWords[currentRotatingIndex].className,
          )}
        >
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
          "inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10",
          cursorClassName,
        )}
      />
    </Element>
  );
};
