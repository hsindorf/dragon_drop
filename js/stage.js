'use strict';

let sceneSelector = document.getElementById('sceneSelector');

sceneSelector.addEventListener('change', chooseScene);

function chooseScene(event) {
  event.preventDefault();
  sceneContainer.innerText = '';
  document.getElementById('body').className = event.target.value;
  playMusic(event);
}