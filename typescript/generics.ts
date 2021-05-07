function useState<S extends number | string>() { // S type unknown mas aceita number e string *** type1 | type2  = string define o padrão string
  let state: S

  function getState(): S {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState<string>()
newState.setState("TESTE")
console.log(newState.getState())