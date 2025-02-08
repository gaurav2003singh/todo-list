// const item = document.getElementById("#item");
// const toDoBox = document.querySelector("#to-do-box");

// item.addEventListener("keyup", function (event) {
//   if (event.key == "Enter"|| "button-addon2") {
//     console.log(this.value);

//   }
// });

document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
 
const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");
const addButton = document.getElementById("button-addon2");

// Function to add a task
function addTask() {
  let taskText = item.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="btn btn-danger btn-sm delete-btn">×</button>`;
    li.classList.add("list-group-item", "d-flex", "justify-content-between");

    toDoBox.appendChild(li);
    item.value = ""; // Clear input field

    // Delete task when "×" button is clicked
    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
  } else {
    alert("Please enter a task!");
  }
}

// Listen for "Enter" key press
item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Listen for button click
addButton.addEventListener("click", addTask);

});

