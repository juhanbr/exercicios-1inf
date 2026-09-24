const cliente = "AnaSouza";
const produto = "Teclado mecânico";
const preco = 200;
const quantidade = 2;
const estoque = 10;
const valorPago = 400;
const descontoPercentual = 0;
const valorDesconto = (descontoPercentual / 100) * (preco * quantidade);

const subtotal = preco * quantidade;
const valorFinal = subtotal - valorDesconto;
const troco = valorPago - valorFinal;
const estoqueDisponivel = quantidade <= estoque;

let pagamentoStatus = "insuficiente";
if (valorPago >= valorFinal) {
  pagamentoStatus = "aprovado";
  console.log("aprovado");
} else {
  console.log("insuficiente");
}

let statusPedido = "Estoque indisponível";
if (quantidade <= estoque) {
  statusPedido = "Estoque disponível";
  console.log("Estoque disponível");
} else {
  console.log("Estoque indisponível");
}

const resumo = `
cliente = ${cliente}
produto = ${produto}
preco = ${preco}
quantidade = ${quantidade}
estoque = ${estoque}
valorPago = ${valorPago}
subtotal = ${subtotal}
estoqueDisponivel = ${estoqueDisponivel}
descontoPercentual = ${descontoPercentual}
valorFinal = ${valorFinal}
valorDesconto = ${valorDesconto}
pagamentoStatus = ${pagamentoStatus}
troco = ${troco}
statusPedido = ${statusPedido}
`;

module.exports = {
  cliente,
  produto,
  preco,
  quantidade,
  estoque,
  valorPago,
  subtotal,
  estoqueDisponivel,
  descontoPercentual,
  valorDesconto,
  valorFinal,
  pagamentoStatus,
  troco,
  statusPedido,
  resumo,
};
