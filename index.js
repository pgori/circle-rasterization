// create the image data
const imageWidth = 20;
const imageHeight = 10;
const imageData = createImageData();
/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x, y) {
    return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}
/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar = "X", offChar = " ") {
    let text = "";
    for (let i = 0; i < imageData.length; i++) {
        if (i > 0 && i % imageWidth === 0) {
            text += "\n"; // new line
        }
        text += imageData[i] ? onChar : offChar;
    }
    console.log(text);
}
/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 *
 * Note: This function has a return type annotation
 * of `boolean[]`. That means it's an array of
 * booleans. We'll learn more about this in a
 * future module.
 */
function createImageData() {
    // create array of size `length` containing `false` values
    const length = imageWidth * imageHeight;
    return new Array(length).fill(false);
}
/**
 * Draws a dot at the specific position by setting the pixel as 'on'
 *
 * @param x - the first input number
 * @param y - the second input number
 * @returns nothing/void
 *
 */
function drawDot(x, y) {
    if (isPointInImage(x, y)) {
        imageData[y * imageWidth + x] = true;
    }
}
/**
 * Draws a circle in the console based on its position and radius
 *
 * @param x - x coordinate of the center of the circle - first input number
 * @param y - y coordinate of the center of the circle - second input number
 * @param radius - racius of the circle - third input number
 * @return void
 *
 */
function drawCircle(x, y, radius) {
    drawFirstQuadrant(x, y, radius);
    drawSecondQuadrant(x, y, radius);
    drawThirdQuadrant(x, y, radius);
    drawFourthQuadrant(x, y, radius);
}
/*
  |(x - cx)² + (y - cy)² - r²| ≤ 1.0
*/
function drawFirstQuadrant(cx, cy, radius) {
    let x = cx;
    let y = cy;
    for (let i = 0; i <= radius; i++) {
        for (let j = 0; j <= radius; j++) {
            if (Math.abs((x - cx) * (x - cx) + (y - cy) * (y - cy) - radius * radius) <= 1) {
                drawDot(x, y);
            }
            x++;
        }
        x = cx;
        y--;
    }
}
function drawSecondQuadrant(cx, cy, radius) {
    let x = cx;
    let y = cy;
    for (let i = 0; i <= radius; i++) {
        for (let j = 0; j <= radius; j++) {
            if (Math.abs((x - cx) * (x - cx) + (y - cy) * (y - cy) - radius * radius) <= 1) {
                drawDot(x, y);
            }
            x--;
        }
        x = cx;
        y--;
    }
}
function drawThirdQuadrant(cx, cy, radius) {
    let x = cx;
    let y = cy;
    for (let i = 0; i <= radius; i++) {
        for (let j = 0; j <= radius; j++) {
            if (Math.abs((x - cx) * (x - cx) + (y - cy) * (y - cy) - radius * radius) <= 1) {
                drawDot(x, y);
            }
            x--;
        }
        x = cx;
        y++;
    }
}
function drawFourthQuadrant(cx, cy, radius) {
    let x = cx;
    let y = cy;
    for (let i = 0; i <= radius; i++) {
        for (let j = 0; j <= radius; j++) {
            if (Math.abs((x - cx) * (x - cx) + (y - cy) * (y - cy) - radius * radius) <= 1) {
                drawDot(x, y);
            }
            x++;
        }
        x = cx;
        y++;
    }
}
drawCircle(4, 4, 3);
outputImage();
