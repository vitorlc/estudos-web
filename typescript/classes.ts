abstract class UserAccount {
  public name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails() {
    console.log(`The player ${this.name} is this ${this.age} years old`)
  }

  set setName(name: string) {
    this.name = name
  }
}

class CharAccount extends UserAccount {
  private nickname: string
  readonly level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  get getLevel() {
    return 'level: ' + this.level
  }
}

const vitor = new CharAccount("Vitor", 25, "vitorlc", 100)
vitor.logDetails()
vitor.setName = 'Vitor2'
vitor.logDetails()
console.log(vitor.getLevel)