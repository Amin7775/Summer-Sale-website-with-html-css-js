// Get Product(card) title after every click and show it on cart list
function setCartList(CardId) {
  function card(CardId) {
    const name = document.getElementById(CardId).innerText;
    return name;
  }

  const cartList = document.getElementById("cart-list");
  const count = cartList.childElementCount;
  const p = document.createElement("p");

  p.innerHTML = `${count + 1}. ${card(CardId)} `;

  cartList.appendChild(p);
}

// Get Product Price after Every Click
function getPrice(product) {
  const priceText = document.getElementById(product).innerText;
  const priceParseValue = parseFloat(priceText);
  totalPrice(priceParseValue);
}

// Calculate Total Price
function totalPrice(price) {
  const totalPriceValueInnerText = document.getElementById("total-price-text");
  const totalPriceValueText = totalPriceValueInnerText.innerText;
  const totalPriceValueParseFloat = parseFloat(totalPriceValueText);

  const previousValue = totalPriceValueParseFloat;
  const newAddedValue = price;

  let totalPriceValue = previousValue + newAddedValue;

  totalPriceValue = totalPriceValue.toFixed(2);

  totalPriceValueInnerText.innerText = totalPriceValue;
  // console.log(totalPriceValueText);

  // Redirect to total for calculations to total after every entry
  total();
}

// Check For Coupon code and enable discount
document
  .getElementById("coupon-input-field")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;

    const totalPriceValueInnerText =
      document.getElementById("total-price-text");
    const totalPriceValueText = totalPriceValueInnerText.innerText;
    const totalPriceValueParseFloat = parseFloat(totalPriceValueText);

    const btn = document.getElementById("coupon-btn");

    if (text === "SELL200" && totalPriceValueParseFloat >= 200) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });

// if discount btn enabled , use coupon discount every time it is clicked
function discount() {
  const totalPriceValueInnerText = document.getElementById("total-price-text");
  const totalPriceValueText = totalPriceValueInnerText.innerText;
  const totalPriceValueParseFloat = parseFloat(totalPriceValueText);

  let discountAmount = totalPriceValueParseFloat * 0.2;
  discountAmount = discountAmount.toFixed(2);

  const discountText = document.getElementById("discount-text");
  discountText.innerText = discountAmount;

  total();
}

// Get the results of total Price and Discount and calculate it for final total
function total() {
  const totalPriceValueInnerText = document.getElementById("total-price-text");
  const totalPriceValueText = totalPriceValueInnerText.innerText;
  const totalPriceValueParseFloat = parseFloat(totalPriceValueText);
  // console.log(totalPriceValueParseFloat, "total price");

  const discountTextId = document.getElementById("discount-text");
  let discountText = discountTextId.innerText;
  let discountAmount = parseFloat(discountText);
  // console.log(discountAmount, "discount");

  const netValue = totalPriceValueParseFloat - discountAmount;
  // console.log(netValue, "net");
  const purchaseBtn = document.getElementById("purchase-btn");

  if (netValue > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", true);
  }

  const netValueString = netValue.toFixed(2);

  const totalText = document.getElementById("total-text");
  totalText.innerText = netValueString;
}

// clear data after using go back button from modal
document
  .getElementById("modal-goback-btn")
  .addEventListener("click", function () {
    // input field
    const couponInputField = document.getElementById("coupon-input-field");
    couponInputField.value = "";

    // List
    const list = document.getElementById("cart-list");
    list.innerText = "";

    // Buttons
    const couponBtn = document.getElementById("coupon-btn");
    couponBtn.setAttribute("disabled", true);

    const purchaseBtn = document.getElementById("purchase-btn");
    purchaseBtn.setAttribute("disabled", true);

    // calculations
    function valueRefresh(CardId) {
      let name = document.getElementById(CardId);
      name.innerText = "00.00";
    }
    valueRefresh("total-price-text");
    valueRefresh("discount-text");
    valueRefresh("total-text");
  });
