import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from './models/use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCount: '#pending-count'
}

/**
 * 
 * @param {String} elementId elemento que se desea renderizar 
 */
export const App = (elementId) =>{

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () =>{
        renderPending(ElementIDs.PendingCount);
    }

    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        todoStore.initStore();
        displayTodos();
        
    })();

    //Referncias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);
    const filterUL = document.querySelectorAll(ElementIDs.TodoFilters);

    //Listener
    newDescriptionInput.addEventListener('keyup', (event) =>{

        if(event.keyCode !== 13 || event.target.value.trim().length === 0)
            return;

        todoStore.addTodo(event.target.value.trim());

        displayTodos();
        event.target.value = '';

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        if(event.target.className === 'destroy'){
            const element = event.target.closest('[data-id]');
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        }
        else return;            
    });

    clearCompletedButton.addEventListener('click', ()=>{
        todoStore.deleteTodoCompleted();
        displayTodos();
    })

    filterUL.forEach(element =>{
        element.addEventListener('click', (element)=>{
            filterUL.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected')
            console.log(element.target.text);

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;            
                default:
                    break;
            }

            displayTodos();

        })

        
    })

}

