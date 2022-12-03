let xBola = 15;
let yBola = 15;
let dBola = 20;
let raio = dBola / 2;

let velXBola = 1;
let velYBola = 1;

function setup() {
    createCanvas(600, 400);
    background(30);
}

function criaBola() {
    circle(xBola, yBola, dBola);
}

function draw() {
    background(30);
    criaBola();
    verificaColisao();
    xBola += velXBola;
    yBola += velYBola;

}

function verificaColisao() {
    if (xBola >= width - 10 || xBola <= raio) {
        velXBola *= -1;
    }

    if (yBola >= height - 10 || yBola <= raio) {
        velYBola *= -1;
    }

}
