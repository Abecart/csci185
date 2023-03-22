function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

   
   
 // https://p5js.org/reference/#/p5/circle
    fill("black")
    circle(300, 100, 100); //x,y, diamter
    
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

     // https://p5js.org/reference/#/p5/rect
     fill('black')
     rect(550, 260, 100, 100);

     // https://p5js.org/reference/#/p5/rect
     fill('black')
     rect(550, 260, 100, 300);

     // https://p5js.org/reference/#/p5/rect
     fill('hotpink')
     rect(950, 260, 100, 100);

     // https://p5js.org/reference/#/p5/rect
     fill('hotpink')
     rect(150, 260, 100, 100);



    // https://p5js.org/reference/#/p5/circle
    fill("black")
    circle(900, 100, 100); //x,y, diamter

    // https://p5js.org/reference/#/p5/text
    //text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    fill('yellow');
    ellipse(900, 100, 60, 100);

    https://p5js.org/reference/#/p5/ellipse
    fill('yellow');
    ellipse(300, 100, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    //Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}