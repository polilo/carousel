let x1 = null;
let y1 = null;

export const swipeStart = (event) => {
  const firstTouch = event.touches[0];
  const { clientX, clientY } = firstTouch;
  x1 = clientX.toFixed();
  y1 = clientY.toFixed();
}

export const swipeMove = (event, prevClick, nextClick) => {
  if (!x1 || !y1) {
    return false;
  }

  const x2 = event.touches[0].clientX.toFixed();
  const y2 = event.touches[0].clientY.toFixed();

  const xDiff = x2 - x1;
  const yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // r - l
    if (xDiff > 0) prevClick();
    else nextClick();
  }

  x1 = null;
  y1 = null;
}