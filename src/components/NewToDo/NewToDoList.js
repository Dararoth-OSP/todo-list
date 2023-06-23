import NewToDoForm from "./NewToDoForm";

const NewToDoList = (props) => {
  const saveTextDataHandler = (enteredTextData) => {
    const textData = {
      ...enteredTextData,
    };
    props.onAddText(textData);
  };

  return <NewToDoForm onSaveTextData={saveTextDataHandler}></NewToDoForm>;
};

export default NewToDoList;
