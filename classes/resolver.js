const Arbol = require('./arbol.js');
const Nodo = require('./nodo.js');
const Resolver = (function() {
    const iniciar = (expresion) => {
        var ArrayExpresion = Array.from(expresion);
        crearArbol(ArrayExpresion);
    }
    const crearArbol = (ArrayExpresion) => {
        var miArbol = new Arbol();
        for(i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    ArrayExpresion.forEach(element => {
                        if (element == '^') {
                            console.log('1 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear(element);
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear(element);
                                miArbol.añadirNodo(miNodo);
                            }
                        }
                    });
                break;
                case 2:
                    ArrayExpresion.forEach(element => {
                        if (element == '*') {
                            console.log('2 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear(element);
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear(element);
                                miArbol.añadirNodo(miNodo);
                            }
                        } else if (element == '/') {
                            console.log('2 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear(element);
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear(element);
                                miArbol.añadirNodo(miNodo);
                            }
                        }
                    });
                break;
                case 3:
                    ArrayExpresion.forEach(element => {
                        if (element == '+') {
                            console.log('3 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear(element);
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear(element);
                                miArbol.añadirNodo(miNodo);
                            }
                        } else if (element == '-') {
                            console.log('3 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear('-');
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear('-');
                                miArbol.añadirNodo(miNodo);
                            }
                        }
                    });
                break;
                case 4:
                    ArrayExpresion.forEach(element => {
                        if (!isNaN(element)) {
                            console.log('4 | ' + element);
                            let miNodo = new Nodo();
                            if (miArbol.raiz == null) {
                                miNodo.crear(element);
                                miArbol.generarRaiz(miNodo);
                            } else {
                                miNodo.crear(element);
                                miArbol.añadirNodo(miNodo);
                            }
                        }
                    });
                break;
            }
        }
        console.log(miArbol);
    }
    return {
        iniciar:iniciar
    }
});
module.exports = Resolver;