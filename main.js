



let inputValue = document.getElementById ("todoInput")
let todoList = [];

//////////////////////////////////////////////////////
//          ADD ITEM                       /////////////
//////////////////////////////////////////////////////
let addItem = () => {
    let todoValue = {'key': inputValue.value, 'done':false};
    todoList.push(todoValue);
    render();}

//////////////////////////////////////////////////////
//          REMOVE ITEM                       /////////////
//////////////////////////////////////////////////////
let removeItem = (index) => {
    todoList.splice(index, 1)
    render();}

//////////////////////////////////////////////////////
//          TOGGLE                      /////////////
//////////////////////////////////////////////////////
let doneItem = (index) => {
    todoList[index]['done'] = !(todoList[index]['done'])
    render()}
   

//////////////////////////////////////////////////////
//          RENDER                       /////////////
//////////////////////////////////////////////////////


let render = () => {
    let htmltodoArray = todoList.map((item, index) => {
        if (item.done == false) {
            return `<li class="itemListnotDone">
            <button onclick="doneItem(${index})"><i class="fas fa-spinner"></i></button>
            ${item.key} 
            <button onclick="removeItem(${index})"><i class="far fa-trash-alt"></i></button>
            </li>`}
        else {
            return `<li class="itemList">
            <button onclick="doneItem(${index})"><i class="fas fa-check"></i></button>
            <strike>${item.key}</strike> 
            <button onclick="removeItem(${index})"><i class="far fa-trash-alt"></i></button>
            </li>`
        }}).join('');
        document.getElementById('resultArea').innerHTML = htmltodoArray;
    }







