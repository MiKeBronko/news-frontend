class Base {
  constructor() {
    this._listenetrs = [];
  }

  setListeners(eventObjects = []) {
    eventObjects.forEach(eventObject => this._SetEventListener(eventObject));
  }

  _SetEventListener({ element, event, cb }) {
    element.addEventListener(event, cb);
    this._listenetrs.push({ element, event, cb });
  }

  removeListeners() {
    this._listenetrs.forEach(({ element, event, cb }) => {
      element.removeEventListener(event, cb);
    });
  }
}
