// ===== Type Alias ===== 

// Definição
type GameT = {
  title?: string
}
type DLCT = {
  extra?: string
}

// Intersection 
type GameCollectionT = GameT & DLCT

// Implements
class CreateGameT implements GameCollectionT {}

// Declarar função
type getSimilarsT = (title: string) => void

// ==== Diferenças ====
//permite tipos primitivos
type IDT = string | number

// pode declarar tuplas
type tupleT = [number, number]
[1, 2] as tupleT

// Apenas uma declaração por escopo
type JQueryT = { a: string}
// type JQueryT = { b: string}



// ===== Interfaces ===== 

// Definição
interface GameI {
  title?: string
}
interface DLCI {
  extra?: string
}

// Intersection 
interface GameCollectionI extends GameI, DLCI {}

// Implements
class CreateGameI implements GameCollectionI {}

// Declarar função
interface getSimilarsI { 
  (title: string): void
}

// ==== Diferenças ====
// vantagem: libs prefira interfaces, porque são mais extensíveis
 
// interface IDI extends number {}

// não consigo definir tuplas na interface
interface Tuple {
  0: number;
  1: number;
}
[1, 2, "teste"] as Tuple

// permite múltiplas declarações e ele une de mesmo nome
interface JQueryI { 
  a: string
}
interface JQueryI { 
  b: string
}


