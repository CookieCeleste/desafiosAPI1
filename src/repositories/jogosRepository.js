import { connection } from "../connection.js";

export async function listarJogos() {
    const comando = `
    SELECT *
        FROM jogos_tb;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirJogos(novoJogo) {
    const comando =`
    INSERT INTO jogos_tb
                (nm_jogo, md_duracao, vl_preco, dt_lancamento, bt_multiplayer)
         VALUES (?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoJogo.nm_jogo,
        novoJogo.md_duracao,
        novoJogo.vl_preco,
        novoJogo.dt_lancamento,
        novoJogo.bt_multiplayer
    ])
    return info.insertId
}