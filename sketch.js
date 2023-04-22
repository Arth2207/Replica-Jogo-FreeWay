

function setup() {
  createCanvas(500, 400);
  somDaTrilha. play();
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  loopDoCarro();
  verificacolisao();
  incluiPontos();
  marcaPontos();
  pontosPositvos();
}


