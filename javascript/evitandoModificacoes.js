//Object.preventExtensions  - Não podera aumentar o objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Carro'
produto.descricao = 'Carro Esportivo'
delete produto.tag

console.log(produto)

//Object.seal - Não consegue adicionar nem excluir, mas pode alterar

const pessoa = {
    nome: 'Vitor',
    idade: 23
}
Object.seal(pessoa)
delete pessoa.nome

console.log('Selado: ', Object.isSealed(pessoa))

//Object.freeze - Objecto selado com valores constantes