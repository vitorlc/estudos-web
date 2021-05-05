type AccountInfo = {
  id: number,
  name: string,
  email?: string // ? => opcional
}
const account:AccountInfo = {
  id: 123,
  name: 'Vitor',
}


type CharInfo = {
  nickname: string,
  level: number
}
const char: CharInfo = {
  nickname: 'vitorlc',
  level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Vitor',
  nickname: 'vitorlc',
  level: 100
}