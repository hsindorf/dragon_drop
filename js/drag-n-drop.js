'use strict';

const sceneContainer = document.getElementById('scene');
const trash = document.getElementById('trash');
const clearContents = document.getElementById('clearContents');

let draggedItem, draggingCopy;

function addListeners() {
  for (let i = 0; i < imageReferences.length; i++) {
    imageReferences[i].addEventListener('dragstart', imageDragStart);
    imageReferences[i].addEventListener('dragend', imageDragEnd);
  }
  sceneContainer.addEventListener('dragenter', sceneDragEnter);
  sceneContainer.addEventListener('dragover', sceneDragOver);
  sceneContainer.addEventListener('drop', sceneDrop);

  clearContents.addEventListener('click', clearScene);

  trash.addEventListener('click', trashClick);
  trash.addEventListener('dragenter', trashDragEnter);
  trash.addEventListener('dragover', trashDragOver);
  trash.addEventListener('dragleave', trashDragLeave);
  trash.addEventListener('drop', trashDrop);
}

// These listeners are for the original images below the canvas.

function imageDragStart(event) {
  draggingCopy = false;
  draggedItem = event.target.cloneNode(true);
  draggedItem.addEventListener('dragstart', imageCloneDragStart);
  draggedItem.addEventListener('dragend', imageCloneDragEnd);
  draggedItem.classList.add('copy');

  event.target.style.opacity = '0.4';
  event.dataTransfer.dropEffect = 'move';
}

function imageDragEnd(event) {
  draggedItem = null;
  draggingCopy = null;
  event.target.style.opacity = '1';
}

// These listeners are for the cloned images once they've already been added

function imageCloneDragStart(event) {
  draggedItem = event.target;
  draggingCopy = true;
  event.target.style.opacity = '0.4';
  event.dataTransfer.dropEffect = 'move';
}

function imageCloneDragEnd(event) {
  event.target.style.opacity = '1';
}

// these listeners are for the target scene

function sceneDragEnter(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function sceneDragOver(event) {
  event.preventDefault();
}

function sceneDrop(event) {
  if (!draggingCopy) {
    event.target.appendChild(draggedItem);
  }
  savePosition(draggedItem);
}

// event listeners for the trash can

function trashClick(event) {
  event.preventDefault();
}

function trashDragEnter(event) {
  event.preventDefault();
  trash.style.backgroundColor = 'pink';
}

function trashDragOver(event) {
  event.preventDefault();
}

function trashDragLeave(event) {
  event.preventDefault();
  trash.style.backgroundColor = '';
}

function trashDrop(event) {
  event.preventDefault();
  trash.style.backgroundColor = '';
  if(draggingCopy) {
    draggedItem.parentNode.removeChild(draggedItem);
  }
}

// event listener for clear

function clearScene(event) {
  event.preventDefault();
  sceneContainer.innerText = '';
}

// this saves the position of the element when you move it

function savePosition(element) {
  element.style.position = 'absolute';
  element.style.zIndex = 1000;
  element.style.left = event.pageX - element.offsetWidth / 2 + 'px';
  element.style.top = event.pageY - element.offsetHeight / 2 + 'px';
}

addListeners();