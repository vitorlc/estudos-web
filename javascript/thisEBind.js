const pessoa ={
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito: funcional e OO

const falar2 = pessoa.falar.bind(pessoa) //Bind é uma função que server para amarrar um objeto ao contexto 
falar2()