import * as repo from '../repositories/filmesRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/filmes', async (req, resp) => {
    let registros = await repo.listarFilmes();

    resp.send(registros);
})

endpoints.post('/filmes', async (req, resp) => {
    let novoFilme = req.body;
    let id = await repo.inserirFilme(novoFilme);

    resp.send({ novoId: id});
})

endpoints.put('/filmes/:id', async (req,resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;

    await repo.editarFilme(id, novosDados);
    resp.send();
})

endpoints.delete('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    
    await repo.deletarFilme();
    resp.send();
})

export default endpoints;