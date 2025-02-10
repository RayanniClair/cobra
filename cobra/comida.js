class Comida{
   imagemArq="monster.png"
   imagem;
   tamanho=25;
   constructor (x,y){
    this.x=x;
    this.y=y;
    this.imagem = new Image();
    this.imagem.src = this.imagemArq;
   };
   desenhar(){
    canvasCtx.drawImage(this.imagem, this.x, this.y, this.tamanho, this.tamanho)
    
   }
}