import React from "react";
import ToDoList from "./ToDoList";

const ToDo = (props) => {
    const deleteToDoDataHandler = (selectedToDoData) => {
        props.deleteToDoList(selectedToDoData)
        // console.log(selectedToDoData)
    }


    return (
        <ul>
            {props.textItems.map((texts) => (
                <ToDoList onDeleteToDoData={deleteToDoDataHandler}
                    key={texts.id}
                    id={texts.id}
                    text={texts.text}
                ></ToDoList>
            ))}
        </ul>
    )
}

export default ToDo;