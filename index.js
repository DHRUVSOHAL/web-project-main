
function addtocart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    bill();
}

function display() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cart_item = document.querySelector('#cart-items');
    let newHTML = '';
    for (let i = 0; i < cart.length; i++) {
        newHTML += `
        <div class="cart-row">
            <span>${cart[i].name}</span>
            <span >${cart[i].price}</span>
            <button onclick="removeFromCart(${i})" class="delete-btn">DELETE</button>
            
        </div>
        `;
    }
    cart_item.innerHTML = newHTML;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    display();
    updateCartCount();
    bill();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCountElement = document.getElementById('cart-count');
    if (cart.length === 0) {
        cartCountElement.style.visibility = "hidden";
    } else {
        cartCountElement.style.visibility = "visible";
        cartCountElement.innerText = cart.length;
    }
}
function bill(){
    let cart=JSON.parse(localStorage.getItem('cart')) ||[];
    let billDiv=document.getElementById('bill');
    billDiv.style.backgroundColor="yellow";
    billDiv.style.padding="10px";
    if(cart.length===0){
        billDiv.innerText="NO ITEM SELECTED";
    }
    else{
        let total=0;
        for(let i=0;i<cart.length;i++){
            total+=cart[i].price;
        }
        billDiv.innerText="Total Bill: $"+total;
    }
}
// Instead of window.onload = function() { ... };
window.addEventListener('load', function() {
    display();
    updateCartCount();
    bill();
});
// Make sure this is at the end of your script
