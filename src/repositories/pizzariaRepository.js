import { connection } from "../connection.js";

export async function listarCardapio() {
    const comando = `
    SELECT *
        FROM cardapio_tb;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function inserirCardapio(novoCardapio) {
    const comando =`
    INSERT INTO cardapio_tb
                (nm_produto, nr_preco, ds_produto, bt_promocao, qtd_estoque)
         VALUES (?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoCardapio.nm_produto,
        novoCardapio.nr_preco,
        novoCardapio.ds_produto,
        novoCardapio.bt_promocao,
        novoCardapio.qtd_estoque
    ])
    return info.insertId
}