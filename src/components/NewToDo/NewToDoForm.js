import { useState } from "react"

const NewToDoForm = (props) => {
    const [enteredText, setEnteredText] = useState('')

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const textData = {
            id: Math.random().toString(),
            text: enteredText
        }

        props.onSaveTextData(textData)
        setEnteredText("");
    }

    return (
        <form onSubmit={submitHandler} className="flex gap-2 mb-5">
            {/* <input className="flex-1 bg-gray-100 rounded-sm" type='text' placeholder="Text here"></input> */}
            <textarea value={enteredText} onChange={textChangeHandler} className="flex-1 p-2 border border-blue-900" placeholder="Write your todo here"></textarea>
            <button type="submit" className="px-3 border border-green-900 rounded font-bold text-green-900">Add</button>
        </form>
    )
}

export default NewToDoForm