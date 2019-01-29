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

    if (isNaN(roomLength1)) {
        resultEl.textContent = 'В поле "Ширина 1ой стены" необходимо ввести число.';
        return;
    }
    if (isNaN(roomLength2)) {
        resultEl.textContent = 'В поле "Ширина 2ой стены" необходимо ввести число.';
        return;
    }
    if (isNaN(roomHeight)) {
        resultEl.textContent = 'В поле "Высота стены" необходимо ввести число.';
        return;
    }
    if (isNaN(rollWidth)) {
        resultEl.textContent = 'В поле "Ширина рулона" необходимо ввести число.';
        return;
    }
    if (isNaN(rollLength)) {
        resultEl.textContent = 'В поле "Длина рулона" необходимо ввести число.';
        return;
    }

    if (result < 0){
        resultEl.textContent = 'Все введенные данные должны быть положительные.';
        return;
    }

    resultEl.textContent = result + ' рулонов.';
}

calculateEl.addEventListener('click', reactToClick );

