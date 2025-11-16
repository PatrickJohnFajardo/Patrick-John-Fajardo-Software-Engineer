import { useState, useEffect } from "react";

export default function TypeEraseLoop() {
  const words = ["and Frontend Developer", "and Mobile Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const interval = setInterval(() => {
      if (isDeleting) {
        // Erase text
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Switch to next word
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        // Type text
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting again
          setTimeout(() => setIsDeleting(true), 800);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <span className="block mt-2 font-medium">
      {displayText}
      <span className="inline-block w-1 ml-1 bg-white animate-blink"></span>
    </span>
  );
}
