const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const list = document.querySelector(".list");

input2.addEventListener("click", function () {
  if (input1.value.length > 0) {
    list.style.display = "flex";
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("input");
    button.addEventListener("click", function (el) {
      el.target.parentElement.remove();
    });
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check";
    check.addEventListener("click", function (el) {
      if (el.target.checked === true) {
        el.target.parentElement.style.opacity = "30%";
      } else {
        el.target.parentElement.style.opacity = "100%";
      }
    });

    h1.textContent = input1.value;
    div.className = "list-item";
    button.type = "button";
    button.value = "X";
    button.style.width = "40px";
    div.append(check, h1, button);
    list.prepend(div);

    input1.value = "";
  }
});
