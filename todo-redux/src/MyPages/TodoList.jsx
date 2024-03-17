import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Pencil } from "lucide-react";
import { removeTodo } from "../Features/TodoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-[50vh] w-[65vw] flex flex-col gap-y-3 mx-auto ">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-700 w-full h-[10vh] flex items-center justify-between rounded-sm"
          >
            <div className="text-white px-4 text-xl">
              <span className="text-yellow-400 font-bold text-xl">
                {todo.title} :
              </span>{" "}
              {todo.text}
            </div>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white px-4"
            >
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
