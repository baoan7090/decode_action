//Tue Dec 24 2024 10:23:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function randf(t, n) {
  return t + Math.random() * (n - t);
}
function JBEpmmHiVQt(t) {
  if (t) {
    var n = t.getBoundingClientRect(),
      e = n.left + n.width / 2 + (Math.random() - .5) * 100,
      r = n.top + n.height / 1.2 + (Math.random() - .5) * 100,
      a = new PointerEvent("pointerdown", {
        bubbles: !0,
        cancelable: !0,
        clientX: e,
        clientY: r,
        pointerId: Date.now(),
        width: Math.floor(45 * Math.random()) + 3,
        height: Math.floor(45 * Math.random()) + 3,
        pressure: 0,
        tiltX: 0,
        tiltY: 0,
        pointerType: "touch",
        isPrimary: !0,
        isTrusted: !0
      });
    t.dispatchEvent(a);
  }
}
function mPLnGlvJvrqzAR() {
  window.tapInterval && clearInterval(window.tapInterval);
  window.tapInterval = setInterval(() => JBEpmmHiVQt(document.getElementById("ex1-layer")), randf(44.33, 66.33));
}
function OhikfcpvNqURMokJWZZOelSNXaKdQaazwrtpyNZwxnE() {
  if (window.tapInterval) {
    clearInterval(window.tapInterval);
    window.tapInterval = null;
  }
}
{
  document.addEventListener("xBtNjQkA", t => {
    mPLnGlvJvrqzAR();
  });
  document.addEventListener("qEPWrcTRFaQetCPS", () => {
    OhikfcpvNqURMokJWZZOelSNXaKdQaazwrtpyNZwxnE();
  });
}