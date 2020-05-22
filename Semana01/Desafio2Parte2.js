//Programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
const programador = {
    nome: "Gabriel",
    idade: 21,
    tecnologias: [
        {nome: "Javascript", especialidade: "Desktop"},
        {nome: "PHP", especialidade: "BackEnd"}
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)