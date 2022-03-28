import React, { useState } from 'react'

function Form(props) {
    const [task, setTask] = useState("")

    function handleTaskInput(event) {
        setTask (event.target.value)
    }

    function handleAddTaskToList(event) {
        event.preventDefault()

        if(task) {
            props.onSubmit({
                id:Math.floor(Math.random() * 10000),
                title: task,
                isComplete: false,
            }) 

            setTask("")
        }
    }

    return(
        <form onSubmit={handleAddTaskToList}> 
            <input className="input-task" type="text" placeholder='Adicione uma tarefa.' onChange={handleTaskInput} value={task} />
            <button type="submit" onClick={handleAddTaskToList}>Adicionar</button>
        </form>
    )
}

export default Form