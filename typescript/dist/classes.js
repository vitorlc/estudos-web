"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is this ${this.age} years old`);
    }
    set setName(name) {
        this.name = name;
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        return 'level: ' + this.level;
    }
}
const vitor = new CharAccount("Vitor", 25, "vitorlc", 100);
vitor.logDetails();
vitor.setName = 'Vitor2';
vitor.logDetails();
console.log(vitor.getLevel);
