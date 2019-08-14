"use strict";

const charactersContainer = document.getElementById("charactersContainer");
const itemsContainer = document.getElementById("itemsContainer");
const effectsContainer = document.getElementById("effectsContainer");

const charactersImageNames = [
  "hero-sword",
  "hero-bow",
  "bandit-enemy",
  "bandit-ouch",
  "dragon1",
  "dragon2"
];

const itemsImageNames = [];

const effectsImageNames = ["fire-blast", "ice-blast"];

const imageReferences = [];

function populateImages(target, source, reference, type) {
  for (let i = 0; i < source.length; i++) {
    reference.push(document.createElement("img"));
    reference[reference.length - 1].setAttribute(
      "src",
      `images/${type}/${source[i]}.png`
    );
    reference[reference.length - 1].setAttribute("draggable", "true");
    reference[reference.length - 1].classList.add("piece");
    reference[reference.length - 1].classList.add(`type-${source[i]}`);
    target.appendChild(reference[reference.length - 1]);
  }
}

populateImages(
  charactersContainer,
  charactersImageNames,
  imageReferences,
  "characters"
);
populateImages(itemsContainer, itemsImageNames, imageReferences, "items");
populateImages(effectsContainer, effectsImageNames, imageReferences, "effects");
