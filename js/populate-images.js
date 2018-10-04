'use strict';

let charactersContainer = document.getElementById('charactersContainer');
let itemsContainer = document.getElementById('itemsContainer');
let effectsContainer = document.getElementById('effectsContainer');

let charactersImageNames = [
  'adventurer',
  'adventurer-bow',
  'bandit',
  'bandit2'
];

let itemsImageNames = [

];

let effectsImageNames = [
  'fireball',
  'nebula'
];

let imageReferences = [];

function populateImages(target, source, reference, type) {
  for(let i = 0; i < source.length; i++) {
    reference.push(document.createElement('img'));
    reference[reference.length - 1].setAttribute('src', `images/${type}/${source[i]}.png`);
    reference[reference.length - 1].setAttribute('draggable', 'true');
    reference[reference.length - 1].classList.add('piece');
    target.appendChild(reference[reference.length - 1]);
  }
}

populateImages(charactersContainer, charactersImageNames, imageReferences, 'characters');
populateImages(itemsContainer, itemsImageNames, imageReferences, 'items');
populateImages(effectsContainer, effectsImageNames, imageReferences, 'effects');