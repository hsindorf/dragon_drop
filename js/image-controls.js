'use strict';

function pieceControls(event) {
  event.preventDefault();
  if (isCtrlPressed) {
    let factor = -20;
    resizePiece(factor);
  } else if (isShiftPressed) {
    event.target.classList.toggle('flipped');
  } else {
    let factor = 20;
    resizePiece(factor);
  }
}

function resizePiece(factor) {
  if (event.target.width) {
    event.target.width = event.target.width + factor;
  } else {
    let currentWidth = event.target.getBoundingClientRect().width;
    event.target.width = currentWidth + factor;
  }
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