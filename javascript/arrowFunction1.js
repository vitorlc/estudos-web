let dobro = function (a){
    return 2*a
}

//Usando Arrow Function
dobro = (a) => { //se usa { } é obrigado o uso do return
    return 2*a
}
// Se possui apenas 1 variável não precisa de parentesis, e quando só uma 1 única linha vc faz uma função pequena e mais específica e o retorno está implícito

//Usando Arrow Function com return implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())


//Outro exemplo

function Pessoa(){
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    },1000)
}