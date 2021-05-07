"use strict";
const tlou = {
    title: "The Last of Us",
    description: "Good game",
    genre: "Action",
    plataform: ["PS3"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Metro`);
    }
};
console.log(tlou);
const leftbehind = {
    title: "The Last of Us 2",
    description: "Good game",
    genre: "Action",
    plataform: ["PS3"],
    originalGame: tlou,
    newContent: ["new maps"]
};
console.log(leftbehind);
class CreateGame {
    constructor(t, d, g, p) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.plataform = p;
    }
}
