function setCartList(CardId){

    function card(CardId){
        const name = document.getElementById(CardId).innerText;
        return name;
    }

    const cartList = document.getElementById('cart-list');
    const count = cartList.childElementCount;
    const p = document.createElement('p');
   
    p.innerHTML = `${count}. ${card(CardId)} `;

    cartList.appendChild(p);
}

function getPrice(product){
    const priceText = document.getElementById(product).innerText;
    const priceParseValue = parseFloat(priceText);
    totalPrice(priceParseValue)
}

function totalPrice(price){
    const totalPriceValueInnerText = document.getElementById('total-price-text')
    const totalPriceValueText = totalPriceValueInnerText.innerText ;
    
    const totalPriceValueParseFloat = parseFloat(totalPriceValueText);
 
    const previousValue = totalPriceValueParseFloat;
    
    const newAddedValue = price;
    
    let totalPriceValue = previousValue + newAddedValue;

    totalPriceValue = totalPriceValue.toFixed(2);
    
    totalPriceValueInnerText.innerText = totalPriceValue;
    console.log(totalPriceValueText)
}