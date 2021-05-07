type ToDo = {
  title: string;
  description: string;
  completed: boolean
}

const toDo1 : ToDo = {
  title: "Comprar pão",
  description: "Lembrar de comprar pão",
  completed: false
}

// Errado - Conceito de imutabilidade
console.log('\nAntes >',toDo1)
toDo1.completed = true
console.log('\nDespois >', toDo1)


// Correto 

/// Readonly
const toDo2 : Readonly<ToDo> = {
  title: "Comprar pão",
  description: "Lembrar de comprar pão",
  completed: false
}

/// Partial
function updateTodo(todo: ToDo, fieldsToUpdate:Partial<ToDo>) {
  return {...todo, ...fieldsToUpdate} 
}

const newToDo2: ToDo = updateTodo(toDo2, {completed: true})

/// Pick
type ToDoPreview = Pick<ToDo, "title" | "completed">

const toDo3: ToDoPreview = {
  title: "Comprar açucar",
  completed: true
}

/// Omit
type ToDoPreview2 = Omit<ToDo, "description">

const toDo4: ToDoPreview2 = {
  title: "Comprar açucar",
  completed: true
}
