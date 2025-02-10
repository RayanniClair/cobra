function start() {
    tela.desenhar();
    cobra.desenhar();
    placar.desenhar(); 
    comida.desenhar();
    if (cobra.vida > 0)
        requestAnimationFrame(start)

}
const comida = new Comida (300,300)
start();
document.addEventListener("keydown",(evento) => {
    if (evento.key == 8) cobra.direcao= "c";
    if (evento.key == 6) cobra.direcao= "d";
    if (evento.key == 2) cobra.direcao= "b";
    if (evento.key == 4) cobra.direcao= "e";
})
