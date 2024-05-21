// MyCounterComponent.tsx
import React, { useEffect, useRef } from 'react';
import './my-counter';

interface MyCounterComponentProps {
  start: number;
  onIncrement?: (count: number) => void;
  onDecrement?: (count: number) => void;
}
interface MyCounterElement extends HTMLElement {
  start?: string;
  onIncrement?: (count: number) => void;
  onDecrement?: (count: number) => void;
}
const MyCounterComponent: React.FC<MyCounterComponentProps> = ({ start, onIncrement, onDecrement }) => {
  const counterRef = useRef<MyCounterElement>(null);
  
  useEffect(() => {
    const currentCounter = counterRef.current;
    
    if (currentCounter) {
      currentCounter.setAttribute('start', start.toString());
      if (onIncrement) currentCounter['onIncrement'] = onIncrement;
      if (onDecrement) currentCounter['onDecrement'] = onDecrement;
    }
  }, [start, onIncrement, onDecrement]);
  
  return <my-counter ref={counterRef}></my-counter>;
};

export default MyCounterComponent;