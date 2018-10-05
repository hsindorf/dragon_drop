'use strict';

function flipPiece(event) {
  event.preventDefault();
  event.target.classList.toggle('flipped');
}

function resizePiece(event) {
  event.preventDefault();
  let factor = 0;

  if (event.target.width) {
    event.target.width = event.target.width + factor;
  } else {
    let currentWidth = event.target.getBoundingClientRect().width;
    event.target.width = currentWidth + factor;
  }
}