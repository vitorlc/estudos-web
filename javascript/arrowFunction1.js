let dobro = function (a){
    return 2*a
}

//Usando Arrow Function
dobro = (a) => { //se usa { } é obrigado o uso do return
    return 2*a
}

//Usando Arrow Function com return implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())