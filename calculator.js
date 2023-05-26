const buttons = document.querySelectorAll("button");
const H1 = document.getElementById("h1");
const allClear = document.getElementById("allclear");
const Equal = document.getElementById("equal");

Equal.addEventListener("click", function () {
  H1.innerText = eval(H1.innerText);
});

function getData(data) {
  if (H1.innerText === "0") {
    H1.innerText = data;
  } else {
    H1.innerText = H1.innerText + data;
  }
}

function addDecimal() {
  if (!H1.innerText.includes(".")) {
    H1.innerText = `${H1.innerText}.`;
  }
}

buttons.forEach(function (btn) {
  if (btn.classList.length == 0) {
    btn.addEventListener("click", function () {
      getData(btn.innerText);
    });
  } else if (btn.classList.contains("operator")) {
    btn.addEventListener("click", function () {
      getData(btn.innerText);
    });
  } else if (btn.classList.contains("decimal")) {
    btn.addEventListener("click", function () {
      addDecimal();
    });
  }
});

allClear.addEventListener("click", function () {
  H1.innerText = "0";
});
