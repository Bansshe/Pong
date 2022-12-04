var xBola = 15;
let yBola = 15;
let dBola = 20;
let raio = dBola / 2;
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 190;
let bordaRaquete = 0;

let velXBola = 10;
let velYBola = 5;

function setup() {
    createCanvas(1900, 900);
    background(30);
}

function criaBola() {
    circle(xBola, yBola, dBola);
}

function draw() {
    background(30);
    criaBola();
    verificaColisao();
    criaRaquete();
    movimentarRaquete();
    colisaoRaquete();
    
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

function criaRaquete() {
    rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, bordaRaquete);
}

function movimentarRaquete() {
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 9;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 9;
    }
}

function colisaoRaquete(){
    if (xBola - raio < xRaquete + comprimentoRaquete && yBola - raio < yRaquete + alturaRaquete && yBola + raio > yRaquete){
      velXBola *= -1;
    }
  }
