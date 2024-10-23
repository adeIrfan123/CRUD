let input = document.getElementById("inputList");
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addList();
  }
});

function addList() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let input = document.getElementById("inputList");
  let id = 1;

  if (todos.length > 0) {
    id = todos[todos.length - 1].id + 1;
  }
  if (!input.value) {
    return alert("diisi broo");
  }
  todos.push({
    id: id,
    name: input.value,
    completed: false,
  });
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  displayList();
}
function displayList() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let listTask = document.getElementById("listTask");

  listTask.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<div class="task mt-8 ml-5">
            <div class="mb-12 flex items-center justify-between">
              <form action="" class="flex items-center">
                <input
                  type="checkbox"
                  name="text"
                  id="${todos[i].id}"
                  class="h-5 w-5 mr-5
                  ${
                    todos[i].completed == true ? "checked" : ""
                  }onchange = "updateList(${todos[i].id})"}"
                />
                <label for="${todos[i].id}">
                  <span class="font-semibold" id=""
                    >${todos[i].name} </span
                  >
                </label>
              </form>
              <button type ='button' onclick ='deleteList(${todos[i].id})'
                class="delete mr-10 w-10 flex justify-center rounded-lg border-2 shadow-lg cursor-pointer"
              >
                <i class="ph ph-trash text-xl"></i>
              </button>
            </div>
          </div>`;
    listTask.appendChild(div);
  }
}

function updateList(id) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].completed = !todos[i].completed;
    }
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  displayList();
}

function deleteList(id) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todos) => todos.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayList();
}
