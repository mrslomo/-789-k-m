'use babel';

export default class สล็อตแตกหนัก789KMView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('สล็อตแตกหนัก789-k-m');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The สล็อตแตกหนัก789KM package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
