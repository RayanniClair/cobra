function start() {
    tela.desenhar();
    cobra.desenhar();
    placar.desenhar();
    if (cobra.vida > 0)
        requestAnimationFrame(start)

}
const comida = new Comida (300,300)
start();