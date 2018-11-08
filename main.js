
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var minRad = 0.5, maxRad = 100, defalultRad = 10;
var dragging = false;
var lineColor = 'black';
canvas.width = 800;
canvas.height = 500;
radius = 5;
context.lineWidth = radius * 2;


var putPoint = function(e){
    if(dragging){
    context.fillStyle = lineColor;
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.offsetX,e.offsetY,radius, 0, Math.PI*2);
    context.fill();
    context.fillStyle = lineColor;
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
    }
}
var serRaidus = function(e){
    newRadius = radius
    if(bigger == true){
        newRadius = radius + 2;
    }
    if(bigger == false){
        newRadius = radius - 2;
    }
    if(newRadius <minRad){
        newRadius = minRad;
    }
    else if(newRadius > maxRad){
        newRadius = maxRad;
    
    }
    radius = newRadius;
    context.lineWidth = radius * 2;
}

var engage = function(e){
    dragging = true;
    putPoint(e);
}
var disengage = function(){
    dragging = false;
    context.beginPath();
}
var increase = function(e){
    console.log(e.keyCode);
    bigger = true;
    serRaidus(radius);
}
var decrease = function(e){
    console.log(e.keyCode);
    bigger = false;
    serRaidus(radius);
}


canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);

//window.addEventListener('keyup', increase);
window.addEventListener('keydown', function(e) {
    var x = e.key;

    if(x == "ArrowUp"){
        increase(e);
    }
    if(x == "ArrowDown"){
        decrease(e);
    }

});
window.addEventListener('keypress', function(e) {
    
    var x = e.key;

    if(x == "r"){
            //context.fillStyle = 'red';
            lineColor = 'red';
    }
    if(x == "g"){
        lineColor ='green';
    }
        
    if(x == "b"){
            lineColor = 'blue';
    }

    if(x == "y"){
        lineColor = 'yellow';
    }

    if(x == ' '){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    });
    window.addEventListener('touchmove', putPoint); 