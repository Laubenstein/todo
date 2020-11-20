import { todofactory } from './TodoFactory'

//This is the main view / Entry point of the app
let allTodos = [{title: 'asdf', description: 'asdfasdfasdf', dueDate: '21.11.2020'}];

//Creates the main view
const renderMain = () => {
    let container = document.getElementById('container');
    let newTodoButton = document.createElement('button');
    newTodoButton.innerHTML = 'Add new Todo';

    newTodoButton.addEventListener('click', todoForm);

    container.appendChild(newTodoButton);

    if (allTodos.length < 1) {
        let title = document.createElement('p');
        let noTodoText = document.createTextNode('No Todos found. Create one!');
        title.appendChild(noTodoText);
        container.appendChild(title);
    } else {
        for (let todo of allTodos) {
            let todoCard = document.createElement('div');
            let titlePara = document.createElement('p');
            titlePara.innerHTML = todo.title;
            todoCard.appendChild(titlePara);
            container.appendChild(todoCard);
        }
    }
    
        
    }


const todoForm = () => {
    let container = document.getElementById('container');

    let formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'formDiv');
    
    let titleField = document.createElement('INPUT');
    titleField.setAttribute('type', 'text')
    titleField.setAttribute('placeholder', 'Title');
    
    let descriptionField = document.createElement('INPUT');
    descriptionField.setAttribute('type', 'text');
    descriptionField.setAttribute('placeholder', 'Description');
    
    let dueDate = document.createElement('INPUT');
    let dueDateLabel = document.createElement('Label');
    dueDate.setAttribute('id', 'dueDate');
    dueDateLabel.setAttribute('for', dueDate);
    dueDateLabel.innerHTML = "Due Date";
    dueDate.setAttribute('type', 'date');

    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.addEventListener('click', function () {
        let todo = todofactory(
            titleField.value,
            descriptionField.value,
            dueDate.value
        );
        todos.push(todo);
        

    });

    formDiv.appendChild(titleField);
    formDiv.appendChild(descriptionField);
    formDiv.appendChild(dueDateLabel);
    formDiv.appendChild(dueDate);
    formDiv.appendChild(submitButton);

    container.appendChild(formDiv);
}

export {renderMain, todoForm, allTodos}