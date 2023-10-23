var btnplus = document.getElementsByClassName("btn_plus");
var btnminus = document.getElementsByClassName("btn_minus");
var sum = document.getElementById("priceTotal");

for (let btn of btnplus) {
  btn.addEventListener("click", function addQuantity() {
    var name = btn.getAttribute("name");
    var qty = document.getElementById(name + "_qty");
    var price = document.getElementById(name + "_price");
    qty.innerHTML = +qty.innerHTML + 1;
    sum.innerHTML = +sum.innerHTML + +price.innerHTML;
  });
}
for (let btn of btnminus) {
  btn.addEventListener("click", function MinusQuantity() {
    var name = btn.getAttribute("name");
    var qty = document.getElementById(name + "_qty");
    var price = document.getElementById(name + "_price");
    if (qty.innerHTML > 0) {
      qty.innerHTML = +qty.innerHTML - 1;
      sum.innerHTML = +sum.innerHTML - +price.innerHTML;
    }
  });
}
