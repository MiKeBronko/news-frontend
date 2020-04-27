class Base {
  constructor() {
    this._listenetrs = [];
  }

  setListeners(eventObjects = []) {
    EventSource.forEach(eventObject => this._SetEventListener(eventObject));
  }

  _SetEventListener({ element, event, cb }) {
    element.addEventListener(event, cb);
    this._listenetrs.push({ element, event, cb });
  }

  _removeListeners() {
    this._listenetrs.forEach(({ element, event, cb }) => {
      element.removeEventListener(event, cb);
    });
  }
}
