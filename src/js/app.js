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

    if (roomLength1 > 0) {
    } else {
        resultEl.textContent = 'В поле "Ширина 1ой стены" необходимо ввести положительное число.';
        return;
    }

    if (roomLength2 > 0) {
    } else {
        resultEl.textContent = 'В поле "Ширина 2ой стены" необходимо ввести положительное число.';
        return;
    }

    if (roomHeight > 0) {
    } else {
        resultEl.textContent = 'В поле "Высота стены" необходимо ввести положительное число.';
        return;
    }

    if (rollWidth > 0) {
    } else {
        resultEl.textContent = 'В поле "Ширина рулона" необходимо ввести положительное число.';
        return;
    }

    if (rollLength > 0) {
    } else {
        resultEl.textContent = 'В поле "Длина рулона" необходимо ввести положительное число.';
        return;
    }

    resultEl.textContent = 'Необходимое количество рулонов: ' + result;

}

calculateEl.addEventListener('click', reactToClick );

