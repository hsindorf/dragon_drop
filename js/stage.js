'use strict';

let sceneSelector = document.getElementById('sceneSelector');

sceneSelector.addEventListener('change', chooseScene);

function chooseScene(event) {
  event.preventDefault();
  console.log(sceneSelector);
  sceneContainer.innerText = '';
  sceneContainer.className = 'container ' + event.target.value;
  playMusic(event);
}