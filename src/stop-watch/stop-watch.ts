class StopWatchElement extends HTMLElement {
  static define(tag = "stop-watch") {
    customElements.define(tag, StopWatchElement);
  }
  #time = Date.now();
  endTime = this.#time + 30_000;
  #abortController = new AbortController;
  
  connectedCallback() {
    const { signal } = this.#abortController;
    this.ownerDocument.addEventListener('keypress', ()=> this.start(), {signal})
    signal.addEventListener('abort', ()=> this.stop(), {once: true})
    this.start();
  }
  disconnectedCallback() {
    this.#abortController?.abort();
  }
  start(){
    console.log("timer started");
  }
  stop(){
    console.log("timer stopped");
  }
}