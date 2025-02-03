class Comida{
   imagem;
   imagemArq="monster.png"
   tamanho= 25;
   constructor (x,y){
    this.x=x;
    this.y=y;
    this.imagem = new Image();
    this.imagem.src = this.imagem.Arq;
   };
   desenhar(){
    canvasCtx.drawImage(this.imagem, this.x, this.y, this.tamanho, this.tamanho)

   }
}