function getPreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //This está pegando o contexto global, e nele preco e desc não estão definidos

// declarando no contexto global
global.preco = 20 
global.desc = 0.1
console.log(getPreco()) 

console.log(produto.getPreco())

//Criando um objeto e chamando a funcao 
const carro = {
    preco: 30000,
    desc: 0.20
}
console.log(getPreco.call(carro)) //usando call, aceita os parametros na chamada da função
console.log(getPreco.apply(carro)) //usando apply, os parametros precisando estar em um array

console.log(getPreco.call(carro, 0.17, '$')) 
console.log(getPreco.apply(carro [0.17, '$']))