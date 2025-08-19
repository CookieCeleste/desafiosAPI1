import { connection } from "../connection.js";

export async function listarFilmes() {
    const comando = `
    SELECT *
    FROM   filmes_tb;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirFilme(novoFilme) {
    const comando =`
    INSERT INTO filmes_tb
                (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
         VALUES (?, ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoFilme.titulo,
        novoFilme.ano_lancamento,
        novoFilme.genero,
        novoFilme.duracao_minutos,
        novoFilme.diretor,
        novoFilme.avaliacao
    ]);
    return info.insertId;
}

export async function editarFilme(id, novosDados) {
    const comando = `
    UPDATE      filmes_tb
        SET     titulo = ?,
                ano_lancamento = ?,
                genero = ?,
                duracao_minutos = ?,
                diretor = ?,
                avaliacao = ?
    WHERE       id = ?;
    `

    const [info] = await connection.query(comando, [
        novosDados.titulo,
        novosDados.ano_lancamento,
        novosDados.genero,
        novosDados.duracao_minutos,
        novosDados.diretor,
        novosDados.avaliacao,
        id
    ]);
}

export async function deletarFilme(id) {
    const comando =`
    DELETE FROM filmes_tb
          WHERE id = ?;
    `

    const [info] = await connection.query(comando, [id]);
}

export async function filtrarPorId(id) {
    const comando = `
    SELECT * 
        FROM filmes_tb
    WHERE id = ?;
    `

    const [registros] = await connection.query(comando, [id]);
    return registros;
}

export async function filtrarPorTitulo(titulo) {
    const comando = `
    SELECT *
        FROM filmes_tb
    WHERE titulo LIKE ?;
    `

    const [registros] = await connection.query(comando, ['%'+titulo+'%']);
    return registros;
}