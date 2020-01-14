window.addEventListener('DOMContentLoaded', () => {
  const timer = new Timer();

  document.getElementById("start").addEventListener("click", () => timer.setInterval());
  document.getElementById("reset").addEventListener("click", () => timer.resetInterval());
});


class Timer {
  constructor() {
    this._time = 0;
    this._interval = null;
  }

  get time() {
    return this._time;
  }

  set time(time) {
    this._time = time;

    const [tenth, hundreth="0", one="0", ten="0"] = time.toString().split('').reverse();
    document.getElementById("secondTens").textContent = ten;
    document.getElementById("secondOnes").textContent = one;
    document.getElementById("msHundreds").textContent = hundreth;
    document.getElementById("msTens").textContent = tenth;

    if (time === 1000) {
      document.querySelector(".digits").classList.add("redDigit");
      clearInterval(this._interval);
    }
  }

  setInterval() {
    if (!this._interval) this._interval = setInterval(() => this.time += 1, 10);
  }

  resetInterval() {
    clearInterval(this._interval);
    this._interval = null;
    this.time = 0;
    document.querySelector(".digits").classList.remove("redDigit");
  }
}
