// MyCounterComponent.tsx
import React, { useEffect, useRef } from 'react';
import './my-counter';

interface MyCounterComponentProps {
  start: number;
  onIncrement?: (count: number) => void;
  onDecrement?: (count: number) => void;
}

const MyCounterComponent: React.FC<MyCounterComponentProps> = ({ start, onIncrement, onDecrement }) => {
  const counterRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const currentCounter = counterRef.current;
    
    const handleIncrement = (event: CustomEvent) => {
      if (onIncrement) onIncrement(event.detail.count);
    };
    
    const handleDecrement = (event: CustomEvent) => {
      if (onDecrement) onDecrement(event.detail.count);
    };
    
    if (currentCounter) {
      currentCounter.setAttribute('start', start.toString());
      currentCounter.addEventListener('increment', handleIncrement as EventListener);
      currentCounter.addEventListener('decrement', handleDecrement as EventListener);
    }
    
    return () => {
      if (currentCounter) {
        currentCounter.removeEventListener('increment', handleIncrement as EventListener);
        currentCounter.removeEventListener('decrement', handleDecrement as EventListener);
      }
    };
  }, [start, onIncrement, onDecrement]);
  
  return <my-counter ref={counterRef}></my-counter>;
};

export default MyCounterComponent;