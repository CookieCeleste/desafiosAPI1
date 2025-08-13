import musicasController from './controllers/musicasController.js';
import filmesController from './controllers/filmesController.js';


export function adicionarRotas(api) {
    api.use(musicasController);
    api.use(filmesController);
}