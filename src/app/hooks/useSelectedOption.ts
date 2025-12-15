// app/hooks/useSelectedOption.ts
"use client";

import { useState, useCallback, useEffect } from 'react';

export function useSelectedOption(defaultValue = 1) {
  const [selectedOption, setSelectedOption] = useState<number>(() => {
    if (typeof window === 'undefined') return defaultValue;
    
    const stored = localStorage.getItem("selectedOption");
    if (stored) {
      const option = parseInt(stored, 10);
      return option === 1 || option === 2 ? option : defaultValue;
    }
    return defaultValue;
  });

  const setOption = useCallback((option: number) => {
    setSelectedOption(option);
    if (typeof window !== 'undefined') {
      localStorage.setItem("selectedOption", option.toString());
      
      window.dispatchEvent(new CustomEvent('selectedOptionChange', {
        detail: { option }
      }));
    }
  }, []);

  useEffect(() => {
    const handleOptionChange = (event: CustomEvent) => {
      if (event.detail?.option && event.detail.option !== selectedOption) {
        setSelectedOption(event.detail.option);
      }
    };

    const handler = (e: Event) => handleOptionChange(e as CustomEvent);
    
    window.addEventListener('selectedOptionChange', handler);
    return () => window.removeEventListener('selectedOptionChange', handler);
  }, [selectedOption]);

  return [selectedOption, setOption] as const;
}