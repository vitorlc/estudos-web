//novo recurso Es6
const pessoa= {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'RuaABC',
        numero:1000
    }
}

//const{nome, idade} = pessoa
//console.log(nome,idade)

//Colocando nomes nas variáveis
const{nome:n, idade:i} = pessoa
console.log(n, i)

const {nome, endereco:{ numero, cep }} = pessoa
console.log(nome, numero)