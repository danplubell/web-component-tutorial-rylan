const template  = document.createElement('template');
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
class XCounterInitial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  /*
  connectedCallback() {
    this.innerHTML = `
      <p>Hello From Web Component</p>
    `
  }
  
   */
}
customElements.define('x-counter-initial', XCounterInitial);