const styles = new CSSStyleSheet();
styles.replaceSync(`
  [part="header"] {
    display: flex;
    align-items: center;
    margin-block-end: 1rem;
  }

  [part="avatar"] {
    inline-size: 2rem;
    border-radius: 100%;
    margin-inline-end: 0.5rem;
  }

  [part="handle"] {
    margin: 0;
    font-size: 1rem;
  }
  
  [part="content"] {
    max-inline-size: 70ch;
  }
`)


const template = document.createElement("template")
template.innerHTML = `
  <div part="header">
    <img part="avatar" src="" alt="">
    <h3 part="handle"></h3>
  </div>
  <div part="content">
  </div>
`
class TootEmbedElement extends HTMLElement {
  static define(tagName="toot-embed") {
    customElements.define(tagName, this);
  }
  shadowRoot = this.attachShadow({ mode: "open" })
  get src() {
    const src = this.getAttribute("src")
    if (!src) return ""
    
    return new URL(src, window.location.origin).toString()
    
  }
  set src(value) {
    this.setAttribute("src", value)
  }
  async load() {
    const response = await fetch(this.src)
    const { account, content } = await response.json()
    
    this.shadowRoot.querySelector("[part=avatar]").src = account.avatar
    this.shadowRoot.querySelector("[part=handle]").textContent = account.display_name
    this.shadowRoot.querySelector("[part=content]").innerHTML = content
  }
  connectedCallback() {
    this.shadowRoot.adoptedStyleSheets = [styles]
    this.shadowRoot.replaceChildren(template.content.cloneNode(true))
    this.load()
  }
}

TootEmbedElement.define();