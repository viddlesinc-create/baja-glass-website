import { useState, useCallback, useEffect } from "react";

interface MathCaptcha {
  num1: number;
  num2: number;
  answer: number;
  question: string;
}

/**
 * Placeholder rendered on the server and on the first client render.
 *
 * The sum must NOT be generated during render: these pages are prerendered at
 * build time, so a Math.random() call in a useState initialiser produces one
 * question in the static HTML and a different one when the client hydrates.
 * React sees the text change, throws a hydration mismatch, and re-renders the
 * boundary on the client. Generating it in an effect keeps the server and the
 * first client render byte-identical.
 *
 * `answer: NaN` means validateCaptcha() cannot pass before the real question
 * has been generated — parseInt("") is also NaN, and NaN === NaN is false.
 */
const PLACEHOLDER: MathCaptcha = { num1: 0, num2: 0, answer: NaN, question: "…" };

export const useMathCaptcha = () => {
  const generateCaptcha = useCallback((): MathCaptcha => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      num1,
      num2,
      answer: num1 + num2,
      question: `${num1} + ${num2} = ?`
    };
  }, []);

  const [captcha, setCaptcha] = useState<MathCaptcha>(PLACEHOLDER);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, [generateCaptcha]);

  const validateCaptcha = useCallback((): boolean => {
    return parseInt(userAnswer, 10) === captcha.answer;
  }, [userAnswer, captcha.answer]);

  const resetCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setUserAnswer("");
  }, [generateCaptcha]);

  return {
    captcha,
    userAnswer,
    setUserAnswer,
    validateCaptcha,
    resetCaptcha
  };
};
