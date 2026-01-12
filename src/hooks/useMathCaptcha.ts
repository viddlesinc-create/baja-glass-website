import { useState, useCallback } from "react";

interface MathCaptcha {
  num1: number;
  num2: number;
  answer: number;
  question: string;
}

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

  const [captcha, setCaptcha] = useState<MathCaptcha>(generateCaptcha);
  const [userAnswer, setUserAnswer] = useState("");

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