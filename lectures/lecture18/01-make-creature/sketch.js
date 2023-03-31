function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

makeCreature(200,200, 'pink','red');
makeCreature(500,300,'teal','pruple');
makeCreature(800,200,'blue','green');
    

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x,y, fillcolor,eyecolor){
    fill(fillcolor);
    circle(x,y,300)

    fill(eyecolor);
    ellipse(x-50, y-50, 30, 40);
    ellipse(x+50, y-50, 30, 40);

}

function mouseClicked(){
    makeCreature(mouseX,mouseY,'blue','white');
}