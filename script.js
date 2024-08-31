// //SELECTORS
// const input = document.querySelector('.app form input');
// const button = document.querySelector('.app form button');
// const select = document.querySelector('.app form select');
// const todos = document.querySelector('.app .todos');

// //  EVENT LISTENERS

// button.addEventListener('click', createNewToDoFunc);
// todos.addEventListener('click', checkToDoFunc);
// select.addEventListener('change', filterToDoFunc)


// function createNewToDoFunc(event) {
//     event.preventDefault();


//     if (input.value.trim() === '') {
//         return
//     }
//     const todo = document.createElement('div');
//     todo.classList.add('todo');

//     const todo_text = document.createElement('div');
//     todo_text.classList.add('todo-text');
//     todo_text.innerText = input.value;

//     const todo_icons = document.createElement('div');
//     todo_icons.classList.add('todo-icons');
//     todo_icons.innerHTML = '<i class=" fas fa-check"></i>';
//     todo_icons.innerHTML += '<i class=" fas fa-trash"></i>';


//     todo.append(todo_text);
//     todo.append(todo_icons);
//     todos.append(todo);


//     input.value = ''
// }

// function checkToDoFunc(event) {
//     console.log(event);
//     // console.log(event.target.classList);
//     // console.log(event.target.parentElement.parentElement);

//     const todo = event.target.parentElement.parentElement;

//     if (event.target.classList[1] === "fa-trash") {
//         todo.classList.add('fall');
//         todo.addEventListener('transitionend', ()=>{
//             todo.remove();
//         })
//     }

//     if (event.target.classList[1] === "fa-check") {
//         todo.classList.toggle('checked');
//     }
// }


// function filterToDoFunc(event){

//     const todos = document.querySelectorAll('.app .todos .todo');

//     if(event.target.value === 'all'){

//         for(let i=0; i<todos.length; i++){
//                 todos[i].style.display = 'flex'
//         }

//     }
//     else if(event.target.value === 'completed'){

//         for(let i=0; i<todos.length; i++){
//             if(todos[i].classList.contains('checked')){
//                 todos[i].style.display = 'flex'
//             }else{
//                 todos[i].style.display = 'none'
//             }
//         }

//     }
//     else if(event.target.value === 'uncompleted'){

//         for(let i=0; i<todos.length; i++){
//             if(!todos[i].classList.contains('checked')){
//                 todos[i].style.display = 'flex'
//             }else{
//                 todos[i].style.display = 'none'
//             }
//         }

//     }
// }


