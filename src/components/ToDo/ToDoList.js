import { useState } from "react";

const ToDoList = (props) => {
  const [textClass, setTextClass] = useState("mx-5 flex-1");

  const checkBoxChangeHandler = (event) => {
    if (event.target.checked) {
      setTextClass("mx-5 flex-1 line-through");
    } else {
      setTextClass("mx-5 flex-1");
    }
  };

  const deleteItem = () => {
    const deleteTextData = {
      text: props.text,
      id: props.id,
    };
    props.onDeleteToDoData(deleteTextData.id);
    // console.log(deleteTextData.id)
  };

  return (
    <li>
      <div className="flex border p-2">
        <input type="checkbox" onChange={checkBoxChangeHandler} />
        <h3 className={textClass}>{props.text}</h3>
        <button
          onClick={deleteItem}
          className="bg-transparent border border-red-600 px-2 rounded text-red-700 hover:bg-red-400 "
        >
          X
        </button>
      </div>
    </li>
  );
};

// when button click =>

export default ToDoList;
