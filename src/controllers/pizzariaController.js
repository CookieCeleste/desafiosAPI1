import * as repo from '../repositories/pizzariaRepositoy.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/cardapio', async (req, resp) => {
    let registros = await repo.listarCardapio();
    resp.send(registros);
})

endpoints.post('/cardapio', async (req, resp) => {
    let novoCardapio = req.body;

    let id = await repo.inserirCardapio(novoCardapio);
    resp.send({ novoId: id});
})

export default endpoints;