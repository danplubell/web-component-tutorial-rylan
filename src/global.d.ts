import React from 'react';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'x-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};