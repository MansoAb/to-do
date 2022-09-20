const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const list = document.querySelector(".list");

input2.addEventListener("click", function () {
  if (input1.value.length > 0) {
    list.style.display = "flex";
    const div = document.createElement("div");

    div.addEventListener("click", function (el) {
      if (el.target === div) {
        if (el.target.firstChild.checked === false) {
          console.log("kmdw2ek");
          el.target.style.opacity = "30%";
          el.target.firstChild.checked = true;
        } else {
          el.target.style.opacity = "100%";
          console.log("kmdek");
          el.target.firstChild.checked = false;
        }
      }
    });

    const h1 = document.createElement("h1");
    h1.addEventListener("click", function (el) {
      if (el.target.parentElement.firstChild.checked === false) {
        el.target.parentElement.style.opacity = "30%";
        el.target.parentElement.firstChild.checked = true;
      } else {
        el.target.parentElement.style.opacity = "100%";
        console.log("kmdek");
        el.target.parentElement.firstChild.checked = false;
      }
    });

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
    button.style.minWidth = "40px";
    button.className = "button";
    div.append(check, h1, button);
    list.prepend(div);

    input1.value = "";
  }
});
