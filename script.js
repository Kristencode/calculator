document.querySelectorAll("#button").forEach(function (button) {
  button.addEventListener("click", function () {
    let input = document.getElementById("input");
    input.value += button.innerHTML;
  });
});

// function to clear

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
});

// to remove an an input

document.getElementById("del").addEventListener("click", function () {
  let input = document.getElementById("input");
  input.value = input.value.slice(0, -1);
});

// maths function
document.getElementById("cal").addEventListener("click", function () {
  try {
    let input = document.getElementById("input");
    input.value = math.evaluate(input.value);
  } catch (e) {
    input.value = "Error";
  }
});

// whats the difference between eval() & math.eval

// square root

document.getElementById("root").addEventListener("click", function () {
  let input = document.getElementById("input");
  input.value = math.sqrt(input.value);

  if (!isNaN(input)) {
    input.value = math.sqrt(input.value);
  }
});

// raise to the power of 2

document.getElementById("square").addEventListener("click", function () {
  let input = document.getElementById("input");
  input.value = input.value * input.value;
});
