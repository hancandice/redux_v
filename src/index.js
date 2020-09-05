import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

console.log(countStore);
console.log(countStore.getState());

// redux is built to help to manage data.
// reducer is a function that modifies data.

// if reducer returns sth, it becomes the data of the application.
// nobody else but only countModifier(reducer) can modify the data.
