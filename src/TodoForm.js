import { todoFactory } from './TodoFactory'
import { allTodos, renderMain } from './Entry'

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
        let todo = todoFactory(
            titleField.value,
            descriptionField.value,
            dueDate.value
        );
        allTodos.push(todo);
        location.reload();
        renderMain();
    });
    
    formDiv.appendChild(titleField);
    formDiv.appendChild(descriptionField);
    formDiv.appendChild(dueDateLabel);
    formDiv.appendChild(dueDate);
    formDiv.appendChild(submitButton);

    container.appendChild(formDiv);
}

    export {todoForm};