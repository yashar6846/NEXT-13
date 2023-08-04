import Link from "next/link"
import  useSWR  from "swr"

 type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
 }  

 export default async function Todos(){

    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const URL = `https://jsonplaceholder.typicode.com/todos`
    const {data, error, isLoading} =   useSWR<Todo[]>(
       "https://jsonplaceholder.typicode.com/todos",
     fetcher)
    
    return(
        <>
        {!isLoading && (
               <ul>
               {data?.map((todo) =>(
               <li key={todo.id}>{todo.title}</li>
               ))}
           </ul>
        )}
        </>
    )
 }