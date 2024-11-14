document.getElementById("addBtn").addEventListener("click", function(){
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText !=="") {
        const li = document.createElement("li");
        li.innerHTML = `
             <input type="checkbox" class="checkbox" onclick="toggleComplete(this)" />
             <span class="text>${todoText}</span>
             <button class="delete-btn" onclick="removeTask(this)">Delete</button>
            `;
        document.getElementById("todoList").appendChild("li");
        todoInput.value = "";
    }
});

function toggleCompleete(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}

function add_diary() {
    document.getElementById("diaryInput").value ="";
}