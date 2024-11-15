class Todo {
    constructor(date, todo) {
        this.date = date;
        this.todo = todo;
    }

    list_up() {
        console.log(`${this.date}`);
        return `${this.date}, ${this.todo}`;
    }
}

let todos = []
let count = 1
function list_up_todo() {
    const date = document.getElementById("date");
    const todo = document.getElementById("Todo");
    const todo_list = document.getElementById("todo_list");

    const new_todo = new Todo(date.value, todo.value);
    todos.push(new_todo);

    const listItem = document.createElement("li");
    listItem.textContent = new_todo.list_up()
    listItem.id = count;
    todo_list.appendChild(listItem);

    const complete_button = document.createElement("button");
    complete_button.textContent = "Complete";
    complete_button.className = "complete";
    listItem.appendChild(complete_button);

    complete_button.addEventListener("click", () => {
        todo_list.removeChild(listItem);
        todos = todos.filter(todoItem => todoItem !== new_todo);
    });

    date.value = "";
    todo.value = "";
    count += 1
}





