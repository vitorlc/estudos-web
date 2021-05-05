// boolean
let isOpen: Boolean
isOpen = false

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen ?? 'test'}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// arrays
let itens: Array<number>
itens = [1, 2, 3]

let itens2: string[]
itens2 = ['1', '2', '3']

// tuple - array com tipos e quantidades definidos
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
  white = '#foo',
  black = '#000'
}

// any
let qualquerTipo
qualquerTipo = [1]

// void
function logger(message:string): void {
  console.log(message)
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error("error")
}

// object
let car: object
car = { 
  color: 'black'
}

// Type Inference
let mensagem = "mensagem 1"

// Union 
function printId (id: string | number) {
  console.log(`Id: ${id}`)
} 
printId(1)
printId("2")

// Aliases
type ID = number | string

function printId2 (id: ID) {
  console.log(`Id: ${id}`)
} 
printId2(1)
printId2("2")

type Plataform = "Windows" | "Linux" | "Mac Os"
function renderPlataform(plataform: Plataform) {
  return plataform
}
renderPlataform("Windows")
