const form = document.getElementById("task-form")
form.addEventListener("submit", addTask)

ulTag = document.querySelector("ul.list-group")
ulTag.addEventListener("click", clearOneTask)

function filterTask() {
    const ul = document.querySelector("ul.list-group")
    const ulChildren = ul.children

    const array = [];

    for(let i=0; i<ulChildren.length; i++) {
        array.push(ulChildren[i].innerText)
    }

    var input = document.getElementById("filter")
    var inputValue = input.value

    if(inputValue == "") {
        alert("You should fill out this field!")
    }

    else {
        if(array.indexOf(inputValue) !== -1) {
            alert(`${inputValue} -> This task exists!`)
        }
    }
}

function clearAllTasks() {
    ulTag.parentNode.removeChild(ulTag)
}

function clearOneTask(event) {
    if(event.target.className.search("delete-item") != -1) {
        event.target.parentElement.remove()
    }
}

function addTask(event) {
    var input = document.getElementById("task-input-id")
    var inputValue = input.value

    if(inputValue == "") {
        alert("You should fill out this field!")
    }

    else {
        var liTag = document.createElement("li")
        liTag.className = "list-group-item d-flex justify-content-between"

        var tagI = document.createElement("i")
        tagI.className = "fas fa-times text-danger mr-auto delete-item"

        var text = document.createTextNode(inputValue)

        liTag.appendChild(text)
        liTag.appendChild(tagI)

        var ulTag = document.querySelector("ul.list-group")

        ulTag.appendChild(liTag)
    }

    // document.getElementById("task-form").reset()

    event.preventDefault()
}

// document.querySelector("form").addEventListener("submit", function(e) {

//     const input_task = document.getElementById("task").value;
  
//     let tasks;
//     tasks = [];
  
//     if(localStorage.getItem('tasks') === null) {
//       tasks = [];
//     } 
//     else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
  
//     tasks.push(input_task);
  
//     localStorage.setItem('tasks', JSON.stringify(tasks));
  
//     alert('Task saved');
  
//     e.preventDefault();
//   });