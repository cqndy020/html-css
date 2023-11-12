const toDoList = [];
function addList() {
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    toDoList.push(name);
    console.log(toDoList);
    inputElement.value = '';
    showInputElement();
}

function showInputElement() {
    document.querySelector('.show-input-js').innerHTML = `${toDoList}\n`
}

