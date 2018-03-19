console.log('main.js loaded');

$(document).ready(function() {
    'use strict';
    console.log('main.js loaded when document ready');
    paper.install(window); // Set library to global scope
    paper.setup(document.getElementById('main-canvas')); // Set library to element

    var c;
    for (var x = 25; x < 400; x+=50) {
        for (var y = 25; y < 400; y+=50) {
            c = Shape.Circle(x, y, 20); // coords of x & y and radius
            c.fillColor = 'green'; // Set color of Shape
        }
    }

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        //c = Shape.Circle(event.point.x, event.point.y, 20);
        // OR
        c = Shape.Circle(event.point, 20);
        c.fillColor = 'red';
        var text = new PointText(event.point.x, event.point.y + 25);
        text.justification = 'center';
        text.fillColor = 'black';
        text.fontSize = 20;
        text.content = 'Hello World';
    }
    paper.view.draw();
});
