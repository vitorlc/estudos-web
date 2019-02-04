//cadeia de protótipos (prototype chain)
const avo = {atrt1:'A'}
const pai = {__proto__: avo, atrt2:'B'}
const filho = {__proto__:pai, attr3:'C'}

console.log(filho.atrt1, filho.atrt2, filho.attr3)


const carro = {
    velAtual: 0, 
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta<= this.velMax){
            this.velAtual+=delta
        }else {
            this.velAtual = this.velMax
        }           
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
ferrari.aceleraMais(20)
ferrari.aceleraMais(20)
ferrari.aceleraMais(300)
console.log(ferrari.status())

console.log(volvo)
volvo.aceleraMais(100)
console.log(volvo.status())