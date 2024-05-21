
declare namespace JSX {
  interface IntrinsicElements {
    'my-counter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      start?: string;
      onIncrement?: (count: number) => void;
      onDecrement?: (count: number) => void;
    };
  }
}