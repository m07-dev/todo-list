/**
 * represents the display of a todo
 * @param {*} todos is the todo items
 */
export function displayTask(todos) {
    const wrappers = document.querySelector('.list-group');
    const newli = document.createElement('li');
    const uniqueId = `todo-${Date.now()}`; // Générer un id unique basé sur le timestamp
    newli.setAttribute('class', 'todo list-group-item d-flex align-items-center');
    newli.innerHTML = `
        <input class="form-check-input" type="checkbox" id="${uniqueId}">
        <label class="ms-2 form-check-label" for="${uniqueId}">
            ${todos}
        </label>
        <label class="ms-auto btn btn-danger btn-sm">
            <i class="bi-trash"></i>
        </label>
    `;
    wrappers.appendChild(newli);
    deleteTask();
}

/**
 * Represent a function that adds a todo item to the display when the submit button is clicked.
 */
export function addTask(){
    const btn = document.querySelector('.btn-add')
    const area = document.querySelector('.area')
    btn.addEventListener('click', (event) =>{
        event.preventDefault()
        displayTask(area.value)
        area.value = ''
    })
}

/**
 * Represent a function that delete a todo item to the display when the trash button is clicked.
 */

export function deleteTask(){
    const btn_del = document.querySelectorAll('.bi-trash')
    btn_del.forEach(trash => {
         trash.addEventListener('click', (e)=>{
            const li_parent = e.target.parentElement.parentElement
            li_parent.remove()
         })
    });
}


