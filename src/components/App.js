
import React, { use, useState } from "react";
import './../styles/App.css';
import ListItem from "./ListItem";

const App = () => {
  const [todoList, setToDoList] = useState([]);
  let toDoData = (e) => {
    e.preventDefault();
    let newToDo = e.target.todoName.value;
    if (!todoList.includes(newToDo)) {
      let data = [...todoList, newToDo];
      setToDoList(data)
    }
    e.target.todoName.value = "";
  }

  let list = todoList.map((value, index) => {
    return (
      <ListItem
        value={value}
        key={index}
        indexNo={index}
        todoList={todoList}
        setToDoList={setToDoList} />
    )
  })
  return (
    <div className="main-container">
      <div className="top-div">
        <h1>To-Do List</h1>
        <form onSubmit={toDoData} className="input-text">
          <input type="text" name="todoName" />
          <button>Add Todo</button>
        </form>
        <div className="bottom-div">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
