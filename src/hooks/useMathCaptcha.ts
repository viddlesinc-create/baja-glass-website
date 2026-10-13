import { useState, useCallback, useEffect } from "react";

interface MathCaptcha {
  num1: number;
  num2: number;
  answer: number;
  question: string;
}

// Same first question on the server and the client: a Math.random() value in the
// initial render makes the prerendered HTML differ from hydration (React #418),
// which throws away the whole prerendered page. A random one is drawn after mount.
const INITIAL_CAPTCHA: MathCaptcha = { num1: 3, num2: 4, answer: 7, question: "3 + 4 = ?" };

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

  const [captcha, setCaptcha] = useState<MathCaptcha>(INITIAL_CAPTCHA);
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