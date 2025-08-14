import { connection } from "../connection.js";

export async function listarPacientes() {
    const comando = `
    SELECT *
        FROM pacientes_tb;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirPaciente(novoPaciente) {
    const comando =`
    INSERT INTO pacientes_tb
                (nm_paciente, nr_idade, bt_alta, ds_diagnostico, dt_entrada, ql_sexo)
         VALUES (?, ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoPaciente.nm_paciente,
        novoPaciente.nr_idade,
        novoPaciente.bt_alta,
        novoPaciente.ds_diagnostico,
        novoPaciente.dt_entrada,
        novoPaciente.ql_sexo
    ])
    return info.insertId
}