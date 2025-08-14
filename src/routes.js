import musicasController from './controllers/musicasController.js';
import filmesController from './controllers/filmesController.js';
import pizzariaController from './controllers/pizzariaController.js';


export function adicionarRotas(api) {
    api.use(musicasController);
    api.use(filmesController);
    api.use(pizzariaController);
}