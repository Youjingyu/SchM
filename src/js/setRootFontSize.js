(function (doc, win) {
  // let docEl = doc.documentElement;
    // resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  let docEl;
  let recalc = function () {
      // let docEl = doc.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 12.5 * (clientWidth / 1200) + 'px';
  };
  if (doc.addEventListener) {
    win.addEventListener('resize', recalc, false);
    // doc.addEventListener('DOMContentLoaded', recalc, false);
  } else{
    win.attachEvent('onresize', recalc);
    // doc.attachEvent('onDOMContentLoaded', recalc);
  }
  recalc();
})(document, window);
