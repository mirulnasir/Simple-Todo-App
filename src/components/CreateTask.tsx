import * as react from 'react'
import { useState } from 'react'

function App() {
    const [inputData, setInputData] = useState<string>('')
    const [todos, setTodos] = useState<string[]>([])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        todos.push(inputData)
        setTodos(todos)
        setInputData('')
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setInputData(e.currentTarget.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="taskname" value={inputData} onChange={handleChange} id="" />
                <input type="submit" value="Submit" />
            </form>
            <div className="">
                {todos.map((todo, i) => {
                    return <li key={i}>{todo}</li>
                }
                )}
            </div>
        </>
    )
}

export default App