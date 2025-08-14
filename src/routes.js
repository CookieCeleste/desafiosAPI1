import musicasController from './controllers/musicasController.js';
import filmesController from './controllers/filmesController.js';
import pizzariaController from './controllers/pizzariaController.js';
import jogosController from './controllers/jogosController.js';
import pacientesController from './controllers/pacientesController.js';


export function adicionarRotas(api) {
    api.use(musicasController);
    api.use(filmesController);
    api.use(pizzariaController);
    api.use(jogosController);
    api.use(pacientesController);
}