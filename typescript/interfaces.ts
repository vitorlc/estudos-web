interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "Good game",
  genre: "Action",
  plataform: ["PS3"],
  getSimilars: (title:string) => {
    console.log(`Similar games to ${title}: Metro`)
  }
}

console.log(tlou)

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of Us 2",
  description: "Good game",
  genre: "Action",
  plataform: ["PS3"],
  originalGame: tlou,
  newContent: ["new maps"]
}

console.log(leftbehind)


class CreateGame implements Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform: string[];

  constructor(t: string, d:string, g:string, p:string[]) {
    this.title = t
    this.description = d
    this.genre = g
    this.plataform = p
  }
}