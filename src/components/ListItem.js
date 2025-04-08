import React from 'react'

const ListItem = ({ value, indexNo, todoList, setToDoList }) => {
    let deleteTask = () => {
        let data = todoList.filter((v, i) => i !== indexNo)
        setToDoList(data);
    }
    return (
        <li>{value} <button onClick={deleteTask}>Delete</button></li>
    )
}

export default ListItem
