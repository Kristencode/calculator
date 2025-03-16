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
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
});
