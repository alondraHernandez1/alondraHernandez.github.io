class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021 Hernandez Urbina Alondra Viridiana.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);