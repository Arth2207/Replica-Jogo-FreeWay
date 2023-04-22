let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,
    imagemDoCarro, imagemDoCarro2, imagemDoCarro3];

    somDaTrilha = loadSound("Elementos do Jogo/Sons/1trilha.mp3");
    somDaColisao = loadSound("Elementos do Jogo/Sons/colidiu.mp3");
    somDoPonto = loadSound("Elementos do Jogo/Sons/pontos.wav");
  }
  