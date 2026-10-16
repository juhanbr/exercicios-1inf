const prompt = require("prompt-sync")()
const nomeTurno = prompt("coloque o nome do turno: ")
const meta = Number(prompt("coloque a meta de produção: "))
let producaoInicial = Number(prompt("coloque a produção inicial: "))
const pecasPorCaixa = Number(prompt("coloque o número de peças por caixa: "))
let producaoFinal = producaoInicial
let situacaoMeta = "Meta atingida"



while (producaoFinal < meta){
    producaoFinal++
    situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida" 

}

let caixasNecessarias = 0
let restante = producaoFinal

do {
    restante -= pecasPorCaixa
    caixasNecessarias++
} while(restante >= 0)

const resumo = `Turno: ${nomeTurno}
meta: ${meta}
producaoInicial: ${producaoInicial}
pecasPorCaixa: ${pecasPorCaixa}
producaoFinal: ${producaoFinal}
caixasNecessarias: ${caixasNecessarias}
situacaoMeta: ${situacaoMeta}`


module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo,
}
