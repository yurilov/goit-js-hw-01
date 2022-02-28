const refs = {
  body: document.querySelector("body"),
};

function sayHi() {
  return "Hello, this is my first function!";
}

const greeting = document.createElement("p");

greeting.textContent = sayHi();

refs.body.append(greeting);
