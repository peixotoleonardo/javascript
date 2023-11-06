class Counter {
  constructor(element) {
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      const element = this.ref.deref();

      if (element) {
        element.text = ++this.count;
        console.log('element.text', element.text)
      } else {
        console.log('the element is gone.');
        this.stop();
        this.ref = null;
      }
    };

    tick();

    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

let element = {
  text: null,
}

const counter = new Counter(element);

setTimeout(() => {
  element = null;
}, 5000);