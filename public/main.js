document.querySelector("#btn").addEventListener("click", addItem);

function addItem() {
  let searchTerm = document.querySelector("#toDo").value;

  fetch("addItem", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: searchTerm,
    }),
  }).then(function (response) {
    window.location.reload();
  });
}

let btn = document.querySelectorAll("#delete");
let update = document.querySelectorAll("#update");

Array.from(btn).forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.dataset.todo);

    fetch("deleteItem", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: element.dataset.todo,
        status: element.dataset.status,
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

Array.from(update).forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.dataset.todo);

    fetch("update", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: element.dataset.todo,
        status: element.dataset.status,
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});
