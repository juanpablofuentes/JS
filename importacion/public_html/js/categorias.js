import {getJSON,postJSON} from './peticiones.js';

function getCategorias() {
    getJSON("https://localhost:44333/api/Categories")
            .then(data => console.log(data))
            .catch(error => console.log(error));
}

function addCategorias(categoria) {
    postJSON("https://localhost:44333/api/Categories",categoria)
            .then(data => console.log(data))
            .catch(error => console.log(error));
}
getCategorias();
addCategorias({"nombre":"doom","descripcion":"MATA"});