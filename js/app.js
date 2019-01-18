import {calculateWallpapers} from "./lib.js";

const roomLength1El = document.getElementById('roomLength1');
const roomLength2El = document.getElementById('roomLength2');
const roomHeightEl = document.getElementById('roomHeight');
const rollWidthEl = document.getElementById('rollWidth');
const rollLengthEl = document.getElementById('rollLength');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

function reactToClick() {
    const roomLength1 = roomLength1El.value;
    const roomLength2 = roomLength2El.value;
    const roomHeight = roomHeightEl.value;
    const rollWidth = rollWidthEl.value;
    const rollLength = rollLengthEl.value;
    const result = calculateWallpapers(roomLength1, roomLength2, roomHeight, rollWidth, rollLength);
    resultEl.textContent = result;
};


calculateEl.addEventListener('click', reactToClick);

