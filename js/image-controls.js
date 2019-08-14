'use strict';

function pieceControls(event) {
  event.preventDefault();
  if (isCtrlPressed) {
    const factor = -20;
    resizePiece(factor);
  } else if (isShiftPressed) {
    event.target.classList.toggle('flipped');
  } else {
    const factor = 20;
    resizePiece(factor);
  }
}

function resizePiece(factor) {
  const currentWidth = event.target.getBoundingClientRect().width;
  event.target.width = currentWidth + factor;
}

// listen for ctrl key

let isCtrlPressed = false;
let isShiftPressed = false;

function listenForKeydown(event) {
  event.preventDefault();
  if (event.key === 'Control') {
    isCtrlPressed = true;
  }
  if (event.key === 'Shift') {
    isShiftPressed = true;
  }
}

function listenForKeyup(event) {
  if (event.key === 'Control') {
    isCtrlPressed = false;
  }
  if (event.key === 'Shift') {
    isShiftPressed = false;
  }
}

window.addEventListener('keydown', listenForKeydown);
window.addEventListener('keyup', listenForKeyup);
