"use strict";

const addTaskEl = document.getElementById("add-task-btn");
const taskInputEl = document.getElementById("task-input");
const todoList = document.querySelector(".todo-list");



// Adds taks to the list
const addTask = function (e) {
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.addEventListener("click", seeMore);
    newTodo.innerHTML = taskInputEl.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // const seeMore = document.createElement("span");
    // seeMore.addEventListener("click", seeMore);
    // seeMore.innerText ="See More";
    // seeMore.classList.add("see-more-btn");
    // newTodo.appendChild(seeMore);

    const doneBtnEl = document.createElement("button");
    doneBtnEl.addEventListener("click", doneTask);
    doneBtnEl.innerHTML = "Done";
    doneBtnEl.classList.add("done-btn");
    todoDiv.appendChild(doneBtnEl);

    const deleteBtnEl = document.createElement("button");
    deleteBtnEl.addEventListener("click", deleteTask);
    deleteBtnEl.innerHTML = "Delete";
    deleteBtnEl.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtnEl);

    todoList.appendChild(todoDiv);
    taskInputEl.value = "";
    
}
addTaskEl.addEventListener("click", addTask);



// Deletes tasks from the list
const deleteTask = function (e) {
    e.preventDefault()
    e.target.parentElement.remove();
}


// Marks task as done by strikethrough
const doneTask = function (e) {
    e.preventDefault()
    e.target.parentElement.childNodes[0].classList.add("done");
}


// opens the textbox to reveal content that overfow
const seeMore = function(e) {
    e.preventDefault();
    e.target.classList.toggle("see-more");
}

