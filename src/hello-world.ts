// hello-world.ts
const template = document.createElement('template');
template.innerHTML = `
<style>
    button, p {
      display: inline-block;
    }
  </style>
  <button aria-label="decrement">-</button>
    <p>0</p>
  <button aria-label="increment">+</button>
`
class HelloWorld extends HTMLElement {
  private valueElement: HTMLParagraphElement | null;
  private _value: number = 0;
  private incrementButton: HTMLButtonElement | undefined;
  private decrementButton: HTMLButtonElement | undefined;
  
  set value(value: number) {
    this._value = value;
    this.valueElement!.innerText = String(value);
  }
  get value() {
    return this._value;
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
    this.valueElement = this.shadowRoot!.querySelector('p');
    this.incrementButton = this.shadowRoot!.querySelectorAll('button')[1];
    this.decrementButton = this.shadowRoot!.querySelectorAll('button')[0];
    this.incrementButton.addEventListener('click', () => this.value++);
    this.decrementButton.addEventListener('click', () => this.value--);
  }
}

customElements.define('hello-world', HelloWorld);