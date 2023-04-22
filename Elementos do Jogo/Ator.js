// Variaveis do Ator
let xAtor = 60;
let yAtor = 372;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 20, 20);
  }

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeseMover())
       yAtor += 3;
    }
  }

function verificacolisao(){
  for(let i = 0; i < imagemCarros.length ; i = i + 1){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,
  xAtor, yAtor, 30)
   if(colisao){
    voltaPosicaoInicial();
    somDaColisao.play()
    if(pontosPositvos()){
     meusPontos -= 1;
    }
   }
  }
}

function voltaPosicaoInicial(){
  yAtor = 372;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);

}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicial();
  }
}

function pontosPositvos(){
  return meusPontos > 0
}
function podeseMover(){
 return yAtor < 366;
}