import Base from './Base';

export class Popup extends Base {
  constructor(namePopup, openClassName, closeClassName, content, template) {
    super();
    this.popup = document.querySelector(namePopup);
    this.openClassName = openClassName;
    this.closeClassName = closeClassName;
    this.content = content;
    this.template = template;
    this.closeButton = close;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popup.querySelector(this.closeClassName)
      .addEventListener('click', this.close);
  }


  create() {
    this._content.appendChild(this._template.cloneNode(true).content);
    this._setEventListeners();
  }

  _setEventListeners() {
    this.setListeners(([
      { element: this.closeButton, event: 'click', callback: callb => this.close() },
      { element: document, event: 'keydown', callback: evt => _handleKeydown(evt) },
    ]));
  }

  _handleKeydown(evt) {
    if (Number(evt.which) === 27 || evt.target.classList.contains(this.openClassName)) {
      this.close();
    }
  }

  clear() {
    this._content.removeChild(this._template.cloneNode(true).content);
  }

  open() {
    this.popup.classList.add(this.openClassName);
  }

  close() {
    this.popup.classList.remove(this.openClassName);
  }
}


export default { Popup };
