// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import NewToDoList from "./components/NewToDo/NewToDoList";
import ToDo from "./components/ToDo/ToDo";
// import "./index.css";

const DUMMY_LIST = [
  {
    id: "t1",
    text: "Do Exercises",
  },
  {
    id: "t2",
    text: "Go to work",
  },
  {
    id: "t3",
    text: "Sleeping",
  },
  {
    id: "t4",
    text: "Buy Coffee",
  },
  {
    id: "t5",
    text: "Go to school",
  },
];

function App() {
  const [toDoText, setToDoText] = useState(DUMMY_LIST);

  const addToDoHandler = (texts) => {
    setToDoText((prevText) => {
      return [texts, ...prevText];
    });
  };

  const deleteToDoHandler = (textIdData) => {
    const newToDoList = toDoText.filter((toDo) => toDo.id !== textIdData);
    setToDoText(newToDoList);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold py-6">My To-do List</h1>
      <NewToDoList onAddText={addToDoHandler}></NewToDoList>
      <ToDo textItems={toDoText} deleteToDoList={deleteToDoHandler}></ToDo>
    </div>
  );
}

export default App;
