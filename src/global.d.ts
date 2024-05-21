import React from 'react';
export type XCounterProps = {
  value: number;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'x-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | XCounterProps;
    }
  }
}

export {};