

    if (!String.contains) {
        String.prototype.contains = function (element) {
            return this.indexOf(element) >= 0;
        }
    }
    export function Resolver() {
        let expresion = document.getElementById('txtEntrada').value
        var nodos = Arbol.crear(expresion);
        window.nodoActual = nodos[0];
        recorrerEnOrden();
    }
    function recorrerEnOrden() {
        var array1 = [],
            array2 = [];
    
        Recorrido.preorden(nodoActual, array1);
        console.info("Recorrido PreOrden", array1);
    
        Recorrido.postorden(nodoActual, array2);;
        console.info("Recorrido PostOrden", array2);
    
    }
    var Analizar = {
        operadores: {
            '^': 5,
            '*': 4,
            '/': 4,
            '+': 3,
            '-': 3,
            ')': 2,
            '(': 1,
            obtenerPrecedencia: function () {
            }
        },
        prepararExpresion: function (expresion) {
            var operadores = "+-*/()^";
            var salida = "";
            expresion = expresion.replace(/\\s+/, '');
            expresion = "(" + expresion + ")";
            for (var i = 0; i < expresion.length; i++) {
                if (operadores.contains(expresion.charAt(i))) {
                    salida += " " + expresion.charAt(i) + " ";
                } else {
                    salida += expresion.charAt(i);
                }
    
            }
            return salida.trim();
        },
        jerarquia: function (operador) {
            if (this.operadores[operador]) {
                return this.operadores[operador];
            }
            return 99;
        },
        aPosFija: function (expresion) {
            expresion = this.prepararExpresion(expresion);
            var infija = expresion.split(" ");
    
            var E = infija.reverse(),
                P = [],
                S = [];
    
            while (E.length > 0) {
                switch (this.jerarquia(E[E.length - 1])) {
                case 1:
                    P.push(E.pop());
                    break;
                case 2:
                    while (P[P.length - 1] != "(") {
                        S.push(P.pop());
                    }
                    P.pop();
                    E.pop();
                    break;
                case 3:
                case 4:
                case 5:
                    while (this.jerarquia(P[P.length - 1]) >= this.jerarquia(E[E.length - 1])) {
                        S.push(P.pop());
                    }
                    P.push(E.pop());
                    break;
                default:
                    S.push(E.pop());
                }
            }
            return S.join(" ")
                .replace(/\s{2,}/g, ' ').
            trim();
        }
    };
    var Arbol = {
        crear: function (expresion) {
            var posfija = Analizar.aPosFija(expresion);
            console.info("Expresion posfija: ", posfija);
            var posfija = posfija.split(" ");
            var E = posfija.reverse();
            var P = [];
            var operadores = "+-*/%^";
            while (E.length > 0) {
                if (operadores.contains(E[E.length - 1])) {
                    P.push(this.crearNodo(E.pop(), P.pop(), P.pop()));
                } else {
                    P.push(E.pop());
                }
            }
            return P;
        },
        evaluar: function (operador, n2, n1) {
            console.info(n1 + operador + n2);
            if (operador == '^') {
                return Math.pow(n1, n2);
            }
            return eval(n1 + operador + n2);
        },
        getNumber: function (v) {
            if (isNaN(v)) {
                return v.data;
            }
            return v;
        },
        getInfo: function (v) {
            if (!isNaN(v)) {
                return {
                    label: v
                }
            }
            return v;
        },
        crearNodo: function (operador, n2, n1) {
            return {
                label: operador,
                expanded: true,
                children: [this.getInfo(n1), this.getInfo(n2),
            ],
                data: this.evaluar(operador, this.getNumber(n2), this.getNumber(n1))
            };
        }
    };
    var Recorrido = {
        preorden: function (nodo, log) {
            if (nodo == null)
                return;
            log.push(nodo.label);
            if (!nodo.children)
                return;
            this.preorden(nodo.children[0], log);
            this.preorden(nodo.children[1], log);
        },
        postorden: function (nodo, log) {
            if (nodo == null)
                return;
            if (nodo.children) {
                this.postorden(nodo.children[0], log);
                this.postorden(nodo.children[1], log);
            }
            log.push(nodo.label);
        }
    }    