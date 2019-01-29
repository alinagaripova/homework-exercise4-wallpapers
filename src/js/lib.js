export function calculateWallpapers(roomLength1, roomLength2, roomHeight, rollWidth, rollLength) {

    const perimeter = roomLength1*2 + roomLength2*2;
    let numderOfLanes = perimeter / rollWidth;
    numderOfLanes = Math.ceil(numderOfLanes);
    let numberOfLinesInOneRoll = rollLength / roomHeight;
    numberOfLinesInOneRoll = Math.floor(numberOfLinesInOneRoll);
    let result = numderOfLanes / numberOfLinesInOneRoll;
    result = Math.ceil(result);
    return result;
}


