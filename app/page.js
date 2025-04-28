"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const messages = ["Your Business", "Your Ideas", "Your Sell"];
  const [currentText, setCurrentText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const delay = 1000;

  useEffect(() => {
    let timer;

    if (!isDeleting && currentText.length < messages[currentMessageIndex].length) {
      timer = setTimeout(() => {
        setCurrentText(messages[currentMessageIndex].substring(0, currentText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
      timer = setTimeout(() => {
        setCurrentText(messages[currentMessageIndex].substring(0, currentText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && currentText.length === messages[currentMessageIndex].length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);
}

