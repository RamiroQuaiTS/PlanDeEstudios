import { Todo } from "../todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todo 
 */
export const renderTodos = (elementId, todo = []) =>{

    if (!element) 
        element = document.querySelector(elementId);
    
    if (!element) throw new Error(`The element ${elementId} do not exist!`)

    element.innerHTML = '';
    
    todo.forEach(todo => {
        element.append(createTodoHTML(todo))
    });
}