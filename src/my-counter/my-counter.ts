// my-counter.ts

class MyCounter extends HTMLElement {
  private count: number = 0;
  private countElement: HTMLElement;
  private incrementButton: HTMLButtonElement;
  private decrementButton: HTMLButtonElement;
  public onIncrement: (count: number) => void = () => {};
  public onDecrement: (count: number) => void = () => {};
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const style = document.createElement('style');
    style.textContent = `
            .counter-container {
                display: flex;
                align-items: center;
            }
            button {
                font-size: 20px;
                width: 40px;
                height: 40px;
                margin: 0 10px;
                cursor: pointer;
            }
            .count {
                font-size: 24px;
                width: 50px;
                text-align: center;
            }
        `;
    
    const container = document.createElement('div');
    container.className = 'counter-container';
    
    this.decrementButton = document.createElement('button');
    this.decrementButton.id = 'decrement';
    this.decrementButton.textContent = '-';
    
    this.countElement = document.createElement('div');
    this.countElement.className = 'count';
    this.countElement.id = 'count';
    
    this.incrementButton = document.createElement('button');
    this.incrementButton.id = 'increment';
    this.incrementButton.textContent = '+';
    
    container.appendChild(this.decrementButton);
    container.appendChild(this.countElement);
    container.appendChild(this.incrementButton);
    
    this.shadowRoot?.append(style, container);
    
    this.incrementButton.addEventListener('click', this.increment.bind(this));
    this.decrementButton.addEventListener('click', this.decrement.bind(this));
  }
  
  connectedCallback() {
    const start = this.getAttribute('start') || '0';
    this.count = parseInt(start, 10);
    this.updateDisplay();
  }
  
  increment() {
    this.count++;
    this.updateDisplay();
    this.dispatchEvent(new CustomEvent('increment', { detail: { count: this.count } }));
    this.onIncrement(this.count);
  }
  
  decrement() {
    this.count--;
    this.updateDisplay();
    this.dispatchEvent(new CustomEvent('decrement', { detail: { count: this.count } }));
    this.onDecrement(this.count);
  }
  
  updateDisplay() {
    this.countElement.textContent = this.count.toString();
  }
  
  static get observedAttributes() {
    return ['start'];
  }
  
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'start' && newValue !== oldValue) {
      this.count = parseInt(newValue, 10);
      this.updateDisplay();
    }
  }
}

customElements.define('my-counter', MyCounter);

export { MyCounter };