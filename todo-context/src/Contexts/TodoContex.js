import { createContext, useContext } from "react";

export const todoContext = createContext({
  todo: [],
  addTodo: (todo)=> {},
  deleteTodo: (id)=> {},
  updateTodo: (id, todo)=> {},
  toggleComplete: (id, todo)=> {}
});

export const useTodo = () => useContext(todoContext);

export const TodoProvider = todoContext.Provider;
