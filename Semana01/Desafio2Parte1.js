//Programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa
const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua:"Rua Guilherme Gembala",
        número:260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.número}`)