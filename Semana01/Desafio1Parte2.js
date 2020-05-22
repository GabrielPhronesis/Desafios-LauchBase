//Programa para calcular a aposentadoria de uma pessoa
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const aposentadoria = idade + contribuicao

if (sexo == "F" && idade >= 30 || sexo =="M" && idade >= 35) {
    if (sexo == "F" && aposentadoria >= 85 || sexo =="M" && aposentadoria >= 95){
        console.log(`${nome} pode se aposentar!`)
    } else {
        console.log(`${nome} não tem a contribuição necessaria para se aposentar!`)
    }
} else {
    console.log(`${nome} não tem a idade para minima para se aposentar!`)
}

