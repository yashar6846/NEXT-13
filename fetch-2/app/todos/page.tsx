import Link from "next/link"

 type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
 }

 async function getData(): Promise<Todo[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    if (!res.ok) {
        throw new Error("falhe ao carreger Todos")
    }
    const data  = await res.json()
    return data
 }


 export default async function Todos(){
    const todos = await getData()
    return(
        <>
        <Link href="/" className="">Home</Link>
        <br />

        <ul>
            {todos.map((todo) =>(
            <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
        
        </>
    )
 }