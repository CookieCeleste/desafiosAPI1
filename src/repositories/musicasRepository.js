import { connection } from "../connection.js";

export async function listarMusicas() {
    const comando = `
    SELECT *
        FROM musicas_tb;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirMusica(novaMusica) {
    const comando =`
    INSERT INTO musicas_tb
                (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novaMusica.nm_musica,
        novaMusica.ds_artista,
        novaMusica.url_musica,
        novaMusica.dt_lancamento,
        novaMusica.qtd_visualizacoes,
        novaMusica.hr_duracao,
        novaMusica.bt_destaque,
        novaMusica.ds_idioma
    ])
    return info.insertId
}