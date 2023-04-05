function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //repeat circle function//
    //repeat 5 times//
    //x value, y value and size value//
    //y-> add 50 each time//
    noFill();
let counter =0;
while (counter < 15) {
    circle(100, counter * 50, 50 + counter * 30);
   counter +=1;
    }

    drawGrid(canvasWidth, canvasHeight);
}
