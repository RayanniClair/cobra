const tela = {
   largura: 800,
   altura: 400,
   cor: "#ff007f",
   desenhar(){
    canvasCtx.fillStyle = this.cor;
    canvasCtx.fillRect(0,60,this.largura,this.altura);
   }
}
tela.desenhar();