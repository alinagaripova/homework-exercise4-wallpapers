import {calculateWallpapers} from "../js/lib";

test('should calculate wallpapers', () => {
    const result = calculateWallpapers(5, 6,2.85,1.06,10);

    expect(result).toBe(7);
});