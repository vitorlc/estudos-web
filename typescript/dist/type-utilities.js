"use strict";
const toDo1 = {
    title: "Comprar pão",
    description: "Lembrar de comprar pão",
    completed: false
};
// Errado - Conceito de imutabilidade
console.log('\nAntes >', toDo1);
toDo1.completed = true;
console.log('\nDespois >', toDo1);
// Correto 
/// Readonly
const toDo2 = {
    title: "Comprar pão",
    description: "Lembrar de comprar pão",
    completed: false
};
/// Partial
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const newToDo2 = updateTodo(toDo2, { completed: true });
const toDo3 = {
    title: "Comprar açucar",
    completed: true
};
const toDo4 = {
    title: "Comprar açucar",
    completed: true
};
