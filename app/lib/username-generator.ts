import { generateRandomAlphanumericString } from "./utils";

const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "black",
  "white",
];
const ANIMALS = [
  "cat",
  "dog",
  "fish",
  "bird",
  "rabbit",
  "hamster",
  "turtle",
  "parrot",
  "frog",
  "lizard",
];

export function generateUsername() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return [color, animal, generateRandomAlphanumericString(4)]
    .map(capitalizeFirstLetter)
    .join("");
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
