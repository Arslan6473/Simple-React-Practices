import React from "react";
import { useState } from "react";
import { addTodo } from "../Features/TodoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const initVal = { title: "", text: "" }
  const [todo, setTodo] = useState(initVal);
  console.log(todo)
  const dispatch = useDispatch()
  const inputChange =(e)=>{
     setTodo({...todo,[e.target.name]:e.target.value})
  }
  const submitHandle =(e)=>{
    e.preventDefault()
    if(todo.title && todo.text) dispatch(addTodo(todo))
    setTodo(initVal)
  }
  return (
    <div>
      <div className="h-[50vh] text-[white] ">
        <form onSubmit={submitHandle}>
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <p className="text-white py-3 font-semibold text-2xl">Todo With Redux</p>
            <input
              className=" focus:outline-purple-700 bg-gray-700 w-[400px] rounded-sm text-white py-3 px-3 outline-none "
              type="text"
              name="title"
              placeholder="Title"
              value={todo.title}
              onChange={inputChange}
            />
            <input
              className="focus:outline-purple-700 bg-gray-700 w-[400px] rounded-sm text-white py-3 px-3 outline-none "
              type="text"
              placeholder="Todo"
              name="text"
              value={todo.text}
              onChange={inputChange}
              
            />
            <button className="bg-purple-700 rounded-sm text-white py-3 px-2 font-semibold">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
