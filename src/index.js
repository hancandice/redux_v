import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// import { createStore } from "redux";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// };

// const deleteDoTo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       // return state.push(action.text);
//       const newToDoObj = { text: action.text, id: Date.now() };
//       return [newToDoObj, ...state];
//     case DELETE_TODO:
//       const cleaned = state.filter((toDo) => toDo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteDoTo(id));
// };

// // Never mutate state, ever!
// // Do not modify the state but just return new state.
// // the only way you can change the state of data is sending action.

// const store = createStore(reducer);

// const paintToDos = () => {
//   ul.innerHTML = "";
//   const toDos = store.getState();
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(paintToDos);

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);
