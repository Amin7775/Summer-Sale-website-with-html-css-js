

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