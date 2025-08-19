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
    
    await repo.deletarFilme(id);
    resp.send();
})

endpoints.get('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await repo.filtrarPorId(id);

    await repo.filtrarPorId(id);
    resp.send(registros)
})

endpoints.checkout('/filmes/titulos', async (req, resp) => {
    let titulo = req.query.titulo;
    let registros = await repo.filtrarPorTitulo(titulo);
    resp.send(registros);
})

export default endpoints;