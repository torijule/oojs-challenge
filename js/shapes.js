/*
    Victoria Wellington
 */
"use strict";

Rectangle.prototype = new Shape();
registerClassicalShape('Rectangle', Rectangle);

Circle.prototype = new Shape();
registerClassicalShape('Circle', Circle);

Text.prototype = new Shape();
registerClassicalShape('Text', Text);

Tea.prototype = new Shape();
registerClassicalShape('Tea', Tea);


function Rectangle (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvas) {
        return canvas.fillRect(this.left, this.top, this.width, this.height, this.stylesMap);
    };
}

function Circle (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvas) {
        canvas.beginPath();
        canvas.arc(this.left, this.top, this.height, 0, 2*Math.PI, this.stylesMap);
        return canvas.fill();
    };
}


function Text (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvas) {
        canvas.font="30px Georgia";
        canvas.fillText(":D",this.left,this.top);

        canvas.font="30px Verdana";
    };
}



function Tea (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;
     var img = new Image();
    img.src = './img/teapot.jpg';

    this.renderShape = function(canvas) {
        canvas.drawImage(img, this.left, this.top);

    };
}
