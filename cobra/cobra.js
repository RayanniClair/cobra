const cobra = { 
    x: 400,
    y: 260,
    cor: "black",
    tamanho: 25,
    vida: 3,
    direcao: "d",
    desenhar(){
        canvasCtx.fillStyle= this.cor;
        canvasCtx.fillRect(this.x, this.y,this.tamanho, this.tamanho)
        this.mover();

   }, 
   mover(){
    if (this.direcao == "d")
        this.x++;
    if (this.direcao == "e")    
        this.x--;
    if (this.direcao == "b")
        this.y++;
    if (this.direcao == "c")
       this.y--;
    if ((cobra.x + cobra.tamanho) > tela.largura)
       this.morrer();
   }, 
   morrer(){
        this.vida--
        this.x= 400;
        this.y= 260;
   }
}
cobra.desenhar();