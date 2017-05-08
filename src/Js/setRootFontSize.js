export default function setRootFontSize (doc, win) {
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let recalc = function () {
    let docEl = doc.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 12.5 * (clientWidth / 1200) + 'px';
  };
  if (doc.addEventListener) {
    win.addEventListener(resizeEvt, recalc, false);
  } else{
    win.attachEvent('on' + resizeEvt, recalc);
  }
  recalc();
}
