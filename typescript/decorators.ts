
// Class decorator
/// Factory 
function Logger(prefix:string) {
  return (target:any) => {
    console.log(prefix + '-' + target)
  }
}

@Logger('awesome')
class Foo {}

function setAPIVersion(apiVersion:string) {
  return (constructor:any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}
@setAPIVersion("1.0.0")
class API{}
console.log(new API())


// Property decorator
function minLength(length:number) {
  return (target:any, key:string) => {
    let val = target[key]
    const getter = () => val
    const setter = (value:string) => {
      if(value.length < length)
        return console.error("ERRO")
      else
        val = value
    }
    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // Validação da propriedade
  @minLength(5)
  title:string

  constructor(title:string) {
    this.title = title
  }
}
const movie = new Movie("Interstellar")
const movie2 = new Movie("ITI")


// Method decorator
function delay (ms:number) {
  return (target:any, key:string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = function (...args:any) {
      console.log(`Esperando ${ms}`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)
      return descriptor
    }
  }
}
class Greeter {
  greeting: string

  constructor(greeting:string){
    this.greeting = greeting
  }

  @delay(2000)
  greet() {
    console.log(this.greeting)
  }
}

const newGreeter = new Greeter("EAWW")
newGreeter.greet()
