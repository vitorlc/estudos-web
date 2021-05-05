"use strict";
// boolean
let isOpen;
isOpen = false;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen !== null && isOpen !== void 0 ? isOpen : 'test'}`;
// number (int, float, hex, binary)
let total;
total = 0xff0;
// arrays
let itens;
itens = [1, 2, 3];
let itens2;
itens2 = ['1', '2', '3'];
// tuple - array com tipos e quantidades definidos
let title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#foo";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any
let qualquerTipo;
qualquerTipo = [1];
// void
function logger(message) {
    console.log(message);
}
// never
function error() {
    throw new Error("error");
}
// object
let car;
car = {
    color: 'black'
};
// Type Inference
let mensagem = "mensagem 1";
// Union 
function printId(id) {
    console.log(`Id: ${id}`);
}
printId(1);
printId("2");
function printId2(id) {
    console.log(`Id: ${id}`);
}
printId2(1);
printId2("2");
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform("Windows");
