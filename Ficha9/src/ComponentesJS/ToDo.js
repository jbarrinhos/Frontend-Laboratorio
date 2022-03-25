import { useState } from "react";

import "../ComponentesCSS/ToDo.css";

export function ToDo() {
  //variável começa já com dois to do
  const [toDoList, setTodos] = useState([
    "Aprender React",
    "Aprender o useState",
    "Fazer o projeto Final",
  ]);

  //variáveis de estado
  const [newToDo, setNewToDo] = useState("");
  const [selectedToDo, setSelectedToDo] = useState(null);

  function addTodo() {
    //verificamos se não está vazio!
    if (newToDo.trim().length !== 0) {
      //devemos criar sempre uma variável auxiliar
      //Fazer uma copia dos 'to dos' que temos atualmente para evitar estragos colaterais
      let todoListAux = toDoList;

      let newTodoAux = newToDo;

      //Adicionamos um elemento à lista temporaria
      todoListAux = [newTodoAux, ...todoListAux];
      //a nova lista vai ser com o novo elemente e com a lista existente do auxiliar

      //definimos o estado como a nossa nova lista
      setTodos(todoListAux);
    }
  }

  function removeTodo(indice) {
    //Fazer uma copia dos 'to dos' que temos atualmente para evitar estragos colaterais
    let todoListAux = toDoList;

    //Filtramos o que não queremos
    todoListAux = todoListAux.filter((e, i) => i !== indice);

    //Da set do selecionado a null caso seja apagado
    if (selectedToDo === indice) {
      setSelectedToDo(null);
    }

    //definimos o estado como a nossa nova lista
    setTodos(todoListAux);
  }

  function updateTodo() {
    //Fazer uma copia dos 'to dos' que temos atualmente para evitar estragos colaterais
    let todoListAux = toDoList;

    todoListAux = todoListAux.map((todo, index) => {
      if (selectedToDo === index) {
        todo = newToDo;
      }
      return todo;
    });

    setTodos(todoListAux);
  }

  return (
    <>
      <header className="App-header">
        <h3>ToDo list by Jes</h3>
      </header>

      <section className="list-container">
        {toDoList.map(function (element, index) {
          return (
            <div key={index} className="todo-card">
              <p className="todo-text" onClick={() => setSelectedToDo(index)}>
                {element}
              </p>
              <button className="todo-remove" onClick={() => removeTodo(index)}>
                X
              </button>
            </div>
          );
        })}
      </section>

      <div>
        <p className="selectToDo">Selected Todo: {selectedToDo}</p>
        <input
          type="text"
          value={newToDo}
          onChange={(e) => {
            setNewToDo(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={updateTodo}>Update Todo</button>
      </div>
    </>
  );
}
