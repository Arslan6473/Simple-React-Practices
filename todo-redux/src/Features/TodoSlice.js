import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Go To Bazzar", text: "To Buy The Grosery" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo :(state,action)=>{
        const todo={
            id:nanoid(),
            title:action.payload.title,
            text:action.payload.text

        }
        state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
     state.todos = state.todos.filter(todo=> todo.id != action.payload)
    }

  },
});

export const {removeTodo,addTodo} = todoSlice.actions

export const todoReducer= todoSlice.reducer
