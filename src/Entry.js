import { todoForm } from './TodoForm'

//This is the main view / Entry point of the app
let allTodos = [{title: 'asdf', description: 'asdfasdfasdf', dueDate: '21.11.2020'}, 
                {title: 'saugen', description: 'Die ganze Wohnung saugen', dueDate: 'Samstag'}];

//Creates the main view
const renderMain = () => {
    let container = document.getElementById('container');
    let newTodoButton = document.createElement('button');
    newTodoButton.innerHTML = 'Add new Todo';

    newTodoButton.addEventListener('click', todoForm);

    container.appendChild(newTodoButton);

    //Print all todos
    if (allTodos.length < 1) {
        let title = document.createElement('p');
        let noTodoText = document.createTextNode('No Todos found. Create one!');
        title.appendChild(noTodoText);
        container.appendChild(title);
    } else {
        for (let todo of allTodos) {
            let todoCard = document.createElement('div');
            todoCard.setAttribute('id', 'todoCard');

            let titlePara = document.createElement('p');
            titlePara.innerHTML = todo.title;
            todoCard.appendChild(titlePara);

            let descriptionPara = document.createElement('p');
            descriptionPara.innerHTML = todo.description;
            todoCard.appendChild(descriptionPara);

            let datePara = document.createElement('p');
            datePara.innerHTML = "Due on " + todo.dueDate;
            todoCard.appendChild(datePara);

            container.appendChild(todoCard);
        }
    }
    
        
    }



export {renderMain, allTodos}