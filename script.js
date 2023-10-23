var btnplus = document.getElementById("btn_plus");
var btnminus = document.getElementById("btn_minus");
var sum = document.getElementById("priceTotal");

for (btn of btnPlus) {
  btn.addEventListener("click", function addQuantity() {
    var name = btn.getAttribute("name");
    var qty = document.getElementById(name + "_qty");
    var price = document.getElementById(name + "_price");
    qty.innerHTML = +qty.innerHTML + 1;
    TotalPrice.innerHTML = +TotalPrice.innerHTML + +price.innerHTML;
  });
}
for (btn of btnMinus) {
  btn.addEventListener("click", function MinusQuantity() {
    var name = btn.getAttribute("name");
    var qty = document.getElementById(name + "_qty");
    var price = document.getElementById(name + "_price");
    if (qty.innerHTML > 0) {
      qty.innerHTML = +qty.innerHTML - 1;
      TotalPrice.innerHTML = +TotalPrice.innerHTML - +price.innerHTML;
    }
  });
}
