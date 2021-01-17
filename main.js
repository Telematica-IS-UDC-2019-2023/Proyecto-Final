//Expresion a resolver
var expresion = '1+3^2';
const Resolver = require('./classes/resolver.js');
var miResolver = new Resolver();
miResolver.iniciar(expresion);