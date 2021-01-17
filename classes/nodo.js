class Nodo {
    constructor() {
        this.valor = null;
        this.padre = null;
        this.hijoI = null;
        this.hijoD = null;
    }
    crear(valor, padre, hijoI, hijoD) {
        this.valor = valor;
        this.padre = padre;
        this.hijoI = hijoI;
        this.hijoD = hijoD;
    }
    añadir(nodo) {
        this.hijoI = nodo;
    }
}
module.exports = Nodo;