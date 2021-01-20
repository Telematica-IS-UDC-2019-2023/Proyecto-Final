const btnCalcular = document.getElementById('btnCalcular');
import { Resolver } from './classes/resolver.js';
btnCalcular.addEventListener('click', () => {
    console.clear();
    alert('Ahora abre la consola');
    Resolver()
});