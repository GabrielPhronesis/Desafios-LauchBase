//Programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (array)
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

//Percorre a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários
for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
}


console.log()