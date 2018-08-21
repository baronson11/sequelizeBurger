document.addEventListener("DOMContentLoaded", () => {

// Globals -----------------------------------------------
const form = document.querySelector('.form');
const button = document.querySelector('button.devour');

// Update ---------------------------------
button.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  let devoured = e.target.getAttribute("data-devoured");

  // API call to update burger
  const url = `localhost:8080/api/burgers`;
  let data = {
    id: id.value,
    devoured: devoured.value
  }
  console.log(data)
  const newData = {
   method: "POST",
   headers: new Headers(),
   body: data
  }

  fetch(url, newData)
    .then((res) => {
      console.log(res);
      return res.json(res);
    })
    .then((data) => {
      console.log(`Changed devoured to ${data}`);
      location.reload();
    })
    .catch(err => console.log(err));
});

// Create ---------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let burger_name = document.getElementById("burgerName");
  let devoured = document.querySelector("[name=newburger]:checked");

  // API call to post new burger
  const url = `localhost:8080/api/burgers`;
  let data = {
    burger_name: burger_name.value,
    devoured: devoured.value
  }
  console.log(data)
  const newData = {
    method: "POST",
    headers: new Headers(),
    body: data
  }

  fetch(url, newData)
    .then((res) => {
      return res.json(res);
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err));

});

// DOM Loaded Wrapper -----------------------------
});
