//conta de um usuario com nome, transações e saldo
const usuario = {
  nome: "Mariana",
  transaçoes: [],
  saldo: 0
};

//Função para adicionar uma nova transação no array de transações de um usuário e soma do saldo conforme o tipo da transação
function criaTransaçoes (transaçao) {
  usuario.transaçoes.push(transaçao)

  if (transaçao.tipo == "credito") {
    usuario.saldo = usuario.saldo + transaçao.valor
  } else {
    usuario.saldo = usuario.saldo - transaçao.valor
  }
}

//Função que recebe como parâmetro o tipo de transação credito/debito, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo
function maiorValorDaTransaçaoPorTipo(tipo) {
  let maiorValor = 0
  let maiorTransaçao
  for (transaçao of usuario.transaçoes) {
    if (transaçao.valor > maiorValor && transaçao.tipo == tipo){
      maiorValor = transaçao.valor
      maiorTransaçao = transaçao
    }
  }
  return maiorTransaçao
}

//Função que retorna o valor médio das transações de um usuário independente do seu tipo
function mediaDasTransaçoes () {
  let soma = 0
  for (quantidade of usuario.transaçoes) {
    soma = soma + quantidade.valor
  }
  let media = soma / usuario.transaçoes.length
  return media
}

//Função que retorna o número de transações de cada tipo credit/debit, o retorno é um objeto
function contadorDeTransaçoes() {
  let contadorCredito = 0
  let contadorDebito = 0

  for (transaçao of usuario.transaçoes) {
    if (transaçao.tipo == "credito") {
      contadorCredito++
    } else {
      contadorDebito++
    }
  }
  return {Credito: contadorCredito, Debito:contadorDebito}
}


//Usando as funções
criaTransaçoes({ tipo: "credito", valor: 50 });
criaTransaçoes({ tipo: "credito", valor: 120 });
criaTransaçoes({ tipo: "debito", valor: 80 });
criaTransaçoes({ tipo: "debito", valor: 30 });

console.log(usuario.saldo); // 60

maiorValorDaTransaçaoPorTipo("credito"); // { type: 'credit', value: 120 }
maiorValorDaTransaçaoPorTipo("debito"); // { type: 'debit', value: 80 }

mediaDasTransaçoes(); // 70

contadorDeTransaçoes(); // { credit: 2, debit: 2 }
