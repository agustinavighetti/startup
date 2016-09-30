function changeFigure () {
    let number; 
    let canvas;
    let context;

    canvas = document.getElementById('section--canvas');
    context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    number = Math.floor(Math.random()*(4));
    
    switch (number) {
        case 0: rectangle();
                break;
        case 1: square();
                break;
        case 2: circle();
                break;
        case 3: triangle();
                break;
    }
}

function rectangle () {
    var canvas = document.getElementById('section--canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.rect(50, 25, 200, 100);
    context.fillStyle = getRndColor();
    context.fill();
}

function square () {
    var canvas = document.getElementById('section--canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.rect(100, 25, 100, 100);
    context.fillStyle = getRndColor();
    context.fill();
}

function circle () {
    var canvas = document.getElementById('section--canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.arc(150, 75, 50, 0, 2 * Math.PI, false);
    context.fillStyle = getRndColor();
    context.fill();
}

function triangle () {
  var canvas = document.getElementById('section--canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(150,30);
    context.lineTo(100,110);
    context.lineTo(200,110);
    context.fillStyle = getRndColor();
    context.fill();
  }
}

function getRndColor() {
    var r;
    var g;
    var b;

    r = 255*Math.random()|0;
    g = 255*Math.random()|0;
    b = 255*Math.random()|0;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}