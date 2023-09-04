import React, { useState } from 'react'
function Usinp(){
    const [todos,setTodos]=useState("")
    const [todo,setTodo]=useState([])
    function getInp(e){
        e.preventDefault()
        setTodo(ntodo =>{
            return [
                ...ntodo,{id:crypto.randomUUID,title:todos,completed:false}
            ]
        }
    )}
    return(
    <div className='box'> <form>
        <input type='text' value={todos} onChange={e=>setTodos(e.target.value)} placeholder='Add your task'></input>
        <button className='but1' onClick={getInp} value="Submit">ADD</button>
    </form>
    <div>
        <ol>
           {todo.map(t=>{
            return(
                <li key={t.id} >
                    {t.title}
                    <button>Delete</button>
                </li>
                
            )
           })}
        </ol>
    </div>
    </div>)
}
export default Usinp;