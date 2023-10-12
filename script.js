var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var qt = document.getElementById("qt");
var sum = document.getElementById("sum");

plus.addEventListener("click", function () {
  qt.innerHTML = +qt.innerHTML + 1;
  sum.innerHTML = +sum.innerHTML + 90;
});

minus.addEventListener("click", function () {
  if (qt.innerHTML > 0) {
    qt.innerHTML = +qt.innerHTML - 1;
    sum.innerHTML = +sum.innerHTML - 90;
  }
});
