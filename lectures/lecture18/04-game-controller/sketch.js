let x = 500;
let y = 200;
let width = 200;
let fillColor = 'teal';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev){
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if(ev.code ==='ArrowUp'){
        y=y-10;
        console.log('the user just pressed the up arrow');
    }

    else if (ev.code==='ArrowDown'){
        y=y+10;
        console.log('the user just pressed the down arrow');
    }

    else if (ev.code==='ArrowLeft'){
        x=x-10;
        console.log('the user just pressed the left arrow');
    }

    else if (ev.code==='ArrowRight'){
        x=x+10;
        console.log('the user just pressed the right arrow');
    }

    else if (ev.code==='Space'){
        width=width+10;
    }
     else if (ev.code==='Minus'){
        width=width-10;
     }
else if (ev.code==='KeyR'){
    fillColor='red';
}
else if(ev.code==='KeyE'){
    fillColor='blue';
}
else if(ev.code==='KeyT'){
    fillColor='orange';
}


    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
