import React, {useState} from "react";

function ToDoListApp(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function inputChange(e){
        setNewTask(e.target.value)

    }

    function addTask(){

        if (newTask.trim() !== ""){
            setTask(t =>[...t,newTask]);
            setNewTask("")
        }

    }

    function deleteTask(index){
        const updateTask = task.filter((_,i) => i !==index);
        setTask(updateTask)

    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index -1]] = [updatedTask[index -1], updatedTask[index]]
            setTask(updatedTask)
        }

    }

    function moveTaskDown(index){

        if (index < task.length -1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index +1]] = [updatedTask[index +1], updatedTask[index]]
            setTask(updatedTask)
        }

    }

    return <div className="ToDoListApp">
        <h1>To Do List</h1>
        
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={inputChange}/>
            <button onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((e, index) => <li key={index}>
                <span className="text">{e}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="up-button" onClick={ ()=>moveTaskUp(index)}>▲</button>
                <button className="down-button" onClick={ ()=>moveTaskDown(index)}>▼</button>
            </li>)}
        </ol>
    </div>
}

export default ToDoListApp