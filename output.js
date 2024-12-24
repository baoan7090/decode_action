//Tue Dec 24 2024 10:25:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function randf(t, e) {
  return t + Math.random() * (e - t);
}
function yIwkrHPcFqJZqmWmbeGCtBqIgLfboUuGbViPJC(t) {
  if (t) {
    var e = t.getBoundingClientRect(),
      n = e.left + Math.random() * e.width,
      r = e.top + Math.random() * e.height,
      i = Math.floor(45 * Math.random()) + 6,
      a = Math.floor(45 * Math.random()) + 6,
      l = new PointerEvent("pointerdown", {
        bubbles: !0,
        cancelable: !0,
        clientX: n,
        clientY: r,
        pointerId: Date.now(),
        width: i,
        height: a,
        pressure: 0,
        tiltX: 0,
        tiltY: 0,
        pointerType: "touch",
        isPrimary: !0,
        isTrusted: !0
      });
    t.dispatchEvent(l);
    var l = new PointerEvent("pointerup", {
      bubbles: !0,
      cancelable: !0,
      clientX: n,
      clientY: r,
      pointerId: Date.now(),
      width: i,
      height: a,
      pressure: 0,
      tiltX: 0,
      tiltY: 0,
      pointerType: "touch",
      isPrimary: !0,
      isTrusted: !0
    });
    t.dispatchEvent(l);
  }
}
function RqYwkorIBNKjgglhfjtjAHlkB() {
  window.tapInterval && clearInterval(window.tapInterval);
  window.tapInterval = setInterval(() => yIwkrHPcFqJZqmWmbeGCtBqIgLfboUuGbViPJC(document.querySelector('[class^=\"user-tap-button\"]')), randf(55.33, 77.33));
}
function AciKxBslaXznFfeHCQUybRvmcCfJtZfRRnLhtjloS() {
  if (window.tapInterval) {
    clearInterval(window.tapInterval);
    window.tapInterval = null;
  }
}
{
  document.addEventListener("UmPGisXZiyJDt", t => {
    RqYwkorIBNKjgglhfjtjAHlkB();
  });
  document.addEventListener("kGADXKdlszsplyMlSeFdB", () => {
    AciKxBslaXznFfeHCQUybRvmcCfJtZfRRnLhtjloS();
  });
}