let posx,
    posy,
    d,
    r = 200,
    r2 = 8,
    w,
    h;


var contacolor = 0;
var data = 1;

var contacolor1 = 0;
var data1 = 0.25;

var contacolor2 = 0;
var data2 = 0.05;

var contacolor3 = 0;
var data3 = 1.4;


var spaze = 23;

//cero
var bx;
var by;

//uno
var bx1;
var by1;
//dos
var bx2;
var by2;
//tres
var bx3;
var by3;

var chido = 300;


var angleInc = 0.036;8
function setup() {

frameRate(12);


    bx = windowWidth / 7.9;
    by = windowHeight / 2;

    bx1 = windowWidth / 4;
    by1 = windowHeight / 2.8;

    bx2 = windowWidth / 2;
    by2 = windowHeight / 2;
    
    bx3 = windowWidth / 1.2;
    by3 = windowHeight / 2;


    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
background(0);

    contacolor = contacolor + data;

    if (contacolor <= 0) {
        data = 1;
        contacolor += 1;
    }


    if (contacolor >= 255) {
        data = -1;
        contacolor -= 1;
    }

//

    contacolor1 = contacolor1 + data1;

    if (contacolor1 <= 0) {
        data1 = 1;
        contacolor1 += 1;
    }


    if (contacolor1 >= 255) {
        data1 = -1;
        contacolor1 -= 1;
    }

    //

    contacolor2 = contacolor2 + data2;

    if (contacolor2 <= 0) {
        data2 = 1;
        contacolor2 += 1;
    }


    if (contacolor2 >= 255) {
        data2 = -1;
        contacolor2 -= 1;
    }

    //

    //

    contacolor3 = contacolor3 + data3;

    if (contacolor3 <= 0) {
        data3 = 1;
        contacolor3 += 1;
    }


    if (contacolor3 >= 255) {
        data3 = -1;
        contacolor3 -= 1;
    }

    //

    textFont('FoundersGrotesk-Light');
    textSize(18);
    textLeading(80);

    clear();

    push();
    linea_cero();
    pop();

    push();
    linea_uno();
    pop();

    push();
    linea_dos();
    pop();

    push();
    linea_tres();
    pop();

}


function linea_cero() {

    push();

/*
    var bruitx = 0.00001;
    var bx = noise(millis() * bruitx) * 300;
*/

    fill(255, 255, 255, contacolor);
    noStroke();



    rectMode(CENTER);

    translate(bx, by);


    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = 80;

    rotate(a);
    rect(0, 0, 1200, 2);
    pop();



}


function linea_uno() {

    push();

/*
    var bruitx1 = 0.00008;
    var bx1 = windowWidth / 4 + noise(millis() * bruitx1) * 140;
*/
    fill(255, 255, 255, contacolor1);
    noStroke();


    rectMode(CENTER);

    translate(bx1, by1);


    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = 200;

    rotate(a);
    rect(0, 0, 9000, 2);
    pop();


}


function linea_dos() {

    push();
/*
    var bruitx2 = 0.00009;
    var bx2 = windowWidth / 2 + noise(millis() * bruitx2) * 200;
*/
    fill(255, 255, 255, contacolor2);
    noStroke();


    rectMode(CENTER);

    translate(bx2, by2);


    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = 60;

    rotate(a);
    rect(0, 0, 1200, 2);
    pop();



}

function linea_tres() {

    push();

/*

    var bruitx3 = 0.00008;
    var bx3 = windowWidth / 1.2 + noise(millis() * bruitx3) * 140;
*/
    fill(255, 255, 255, contacolor3);
    noStroke();


    rectMode(CENTER);

    translate(bx3, by3);


    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = 290;

    rotate(a);
    rect(0, 0, 1200, 2);
    pop();


}


function hola() {


    stroke(255);
    ellipse(0, 0, 200, 200);


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}