import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos:[
        new Todo('Pan'),
        new Todo('Platano'),
        new Todo('Cebolla'),
        new Todo('Aguacate'),
        new Todo('Leche'),
    ],
    filter: Filters.All,
}

const initStore = () =>{
    loadStore();
    console.log("InitStore");    
};

/**
 * Función para cargar el store
 */
const loadStore = ()=>{
    if(!localStorage.getItem('state')) return
    
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = Filters.All;
}

const saveStateToLocalStorage = () =>{
    localStorage.setItem('state', JSON.stringify(state));

}

const getTodo = (filter = Filters.All) =>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.Pending:
                return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {String} description Descripción que se le asignara a la nueva tarea
 */
const addTodo = (description) =>{
    if(!description)
        throw new Error('Description is required');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Number} id Id que se le desea cambiar el estatus a completada 
 * @returns Regresa el nuevo state
 */
const toggleTodo = (id) => {
    console.log(id);
    state.todos.map(todo => {
        if(todo.id === id){
            todo.done = !todo.done;
            console.log(todo);
        }        
        saveStateToLocalStorage();
        return todo;
    })
    
}

/**
 * 
 * @param {Nunber} id id para borrar un unico registro del todo 
 */
const deleteTodo = (id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
    saveStateToLocalStorage();
}

/**
 * Función para borrar todas las completadas
 */
const deleteTodoCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = ( newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    addTodo,
    deleteTodo,
    deleteTodoCompleted,
    getCurrentFilter,
    getTodo,
    initStore,
    setFilter,
    toggleTodo,
}