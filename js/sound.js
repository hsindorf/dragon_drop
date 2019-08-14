'use strict';

let music;

function playMusic(event) {
  if (music) {
    music.pause();
  }
  music = new Audio(`audio/${event.target.value}.wav`);
  music.loop = true;
  music.volume = 0.5;
  music.play();
}

let classes;

function playSoundOnDrop() {
  classes = draggedItem.getAttribute('class').split(' ');
  let regex = /type-/;
  let typeClass = classes.find(item => regex.test(item));
  let audio = new Audio(`audio/${typeClass}.wav`);
  audio.voume = 0.8;
  audio.play();
}
