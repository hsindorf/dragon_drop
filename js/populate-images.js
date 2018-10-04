'use strict';

let charactersContainer = document.getElementById('charactersContainer');
let itemsContainer = document.getElementById('itemsContainer');
let effectsContainer = document.getElementById('effectsContainer');

let charactersImageNames = [
  'hero-sword',
  'hero-bow',
  'bandit-enemy',
  'bandit-ouch',
  'dragon1',
  'dragon2'
];

let itemsImageNames = [

];

let effectsImageNames = [
  'fire-blast',
  'ice-blast'
];

let imageReferences = [];

function populateImages(target, source, reference, type) {
  for(let i = 0; i < source.length; i++) {
    reference.push(document.createElement('img'));
    reference[reference.length - 1].setAttribute('src', `images/${type}/${source[i]}.png`);
    reference[reference.length - 1].setAttribute('draggable', 'true');
    reference[reference.length - 1].classList.add('piece');
    reference[reference.length - 1].classList.add(`type-${source[i]}`);
    target.appendChild(reference[reference.length - 1]);
  }
}

populateImages(charactersContainer, charactersImageNames, imageReferences, 'characters');
populateImages(itemsContainer, itemsImageNames, imageReferences, 'items');
populateImages(effectsContainer, effectsImageNames, imageReferences, 'effects');