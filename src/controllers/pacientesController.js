import * as repo from '../repositories/pacientesRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/pacientes', async (req, resp) => {
    let registros = await repo.listarPacientes();
    resp.send(registros);
})

endpoints.post('/pacientes', async (req, resp) => {
    let novoPaciente = req.body;

    let id = await repo.inserirPaciente(novoPaciente);
    resp.send({ novoId: id});
})

export default endpoints;