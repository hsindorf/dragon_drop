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
  sceneContainer.addEventListener('dragleave', sceneDragLeave);
  sceneContainer.addEventListener('dragover', sceneDragOver);
  sceneContainer.addEventListener('drop', sceneDrop);

  clearContents.addEventListener('click', clearScene);

  trash.addEventListener('click', trashClick);
  trash.addEventListener('dragenter', trashDragEnter);
  trash.addEventListener('dragover', trashDragOver);
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
  event.dataTransfer.dropEffect = 'move';
}

function imageCloneDragEnd(event) {
}

// these listeners are for the target scene

function sceneDragEnter(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function sceneDragLeave(event) {
}

function sceneDragOver(event) {
  event.preventDefault();
}

function sceneDrop(event) {
  if (!draggingCopy) {
    event.target.appendChild(draggedItem);
  } else {
    //do what happens when you drag around the copy
  }
}

// event listeners for the trash can

function trashClick(event) {
  event.preventDefault();
}

function trashDragEnter(event) {
  event.preventDefault();
}

function trashDragOver(event) {
  event.preventDefault();
}

function trashDrop(event) {
  event.preventDefault();
  if(draggingCopy) {
    draggedItem.parentNode.removeChild(draggedItem);
  }
}

// event listener for clear

function clearScene(event) {
  event.preventDefault();
  sceneContainer.innerText = '';
}

addListeners();